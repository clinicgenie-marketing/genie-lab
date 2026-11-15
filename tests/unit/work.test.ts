import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { validateKnowledgeChecks } from "../../scripts/build-content.ts";
import { checkFile, cleanFileName, isHttpUrl, MAX_FILE_BYTES } from "@/lib/evidence-rules";
import { isPassed, parseKnowledgeCheck, publicQuestions } from "@/lib/knowledge-checks";
import { FileRefusedError, LocalFileStorage } from "@/lib/platform/files";
import { emptyWork, LocalJsonWorkStore, newId, newShareToken, type Submission, type Work } from "@/lib/platform/work";
import { chooseCriterion, emptyProgress, markComplete, recordAnswer, setCriterion, setStep } from "@/lib/progress-rules";
import { completion, nextVersion, reviewState } from "@/lib/work-rules";
import { getLesson } from "@/lib/content/curriculum";

const sub = (lessonId: string, version: number): Submission => ({ id: newId(), lessonId, version, items: [{ itemId: "e1", kind: "text", text: "Done" }], gitCommit: null, submittedAt: `2026-11-18T0${version}:00:00Z` });
const decide = (w: Work, lessonId: string, version: number, decision: "awaiting_review" | "changes_requested" | "accepted", at: string): Work => ({
  ...w,
  decisions: [...w.decisions, { id: newId(), lessonId, version, decision, reviewerName: "Reviewer", notes: "", recordedAt: at }],
});

describe("review state", () => {
  it("is Not submitted, then Awaiting review, then whatever the intern records", () => {
    let w = emptyWork();
    expect(reviewState(w, "2.4")).toBe("not_submitted");
    w = { ...w, submissions: [sub("2.4", 1)] };
    expect(reviewState(w, "2.4")).toBe("awaiting_review");
    w = decide(w, "2.4", 1, "changes_requested", "2026-11-18T10:00:00Z");
    expect(reviewState(w, "2.4")).toBe("changes_requested");
  });
  it("returns to Awaiting review after a resubmission, keeping every version", () => {
    let w: Work = { ...emptyWork(), submissions: [sub("2.4", 1)] };
    w = decide(w, "2.4", 1, "changes_requested", "2026-11-18T10:00:00Z");
    expect(nextVersion(w, "2.4")).toBe(2);
    w = { ...w, submissions: [...w.submissions, sub("2.4", 2)] };
    expect(reviewState(w, "2.4")).toBe("awaiting_review");
    w = decide(w, "2.4", 2, "accepted", "2026-11-19T10:00:00Z");
    expect(reviewState(w, "2.4")).toBe("accepted");
    expect(w.submissions.filter((s) => s.lessonId === "2.4")).toHaveLength(2);
  });
});

describe("completion rule", () => {
  const lesson = getLesson("2.4")!;
  const all = (p = emptyProgress("2.4")) => {
    for (const s of lesson.task.steps) p = setStep(p, s.id, true);
    for (const c of lesson.criteria.items) p = setCriterion(p, c.id, true);
    return p;
  };
  it("needs every step, evidence, every criterion and a passed or unavailable check", () => {
    const p = all();
    expect(completion(lesson, p, true, "passed").ready).toBe(true);
    expect(completion(lesson, p, true, "unavailable").ready).toBe(true);
    expect(completion(lesson, p, false, "passed").ready).toBe(false);
    expect(completion(lesson, p, true, "pending").ready).toBe(false);
    expect(completion(lesson, setStep(p, "s1", false), true, "passed").ready).toBe(false);
    expect(completion(lesson, setCriterion(p, "c1", false), true, "passed").ready).toBe(false);
  });
  it("needs exactly one alternative for Lesson 1.2's either criteria", () => {
    const l12 = getLesson("1.2")!;
    let p = emptyProgress("1.2");
    for (const s of l12.task.steps) p = setStep(p, s.id, true);
    expect(completion(l12, p, true, "unavailable").criteria.ok).toBe(false);
    p = chooseCriterion(p, "c2");
    expect(completion(l12, p, true, "unavailable").ready).toBe(true);
    p = chooseCriterion(p, "c1");
    expect(p.tickedCriteria).toEqual(["c1"]);
  });
  it("marks complete once and keeps the first date", () => {
    const p = markComplete(markComplete(emptyProgress("2.4"), "2026-11-18T10:00:00Z", "unavailable"), "2026-11-19T10:00:00Z", "passed");
    expect(p).toMatchObject({ status: "complete", completedAt: "2026-11-18T10:00:00Z", checkAtCompletion: "unavailable" });
  });
});

describe("knowledge checks", () => {
  const fixture = JSON.parse(readFileSync("tests/fixtures/knowledge-checks/lesson-1.1.json", "utf8"));
  it("accepts a valid check and keeps answers out of what the browser receives", () => {
    const k = parseKnowledgeCheck(fixture, "1.1");
    const pub = JSON.stringify(publicQuestions(k));
    expect(pub).not.toContain("correctOptionId");
    expect(pub).not.toContain("explanation");
  });
  it("rejects malformed checks", () => {
    const bad = (change: (k: typeof fixture) => void) => {
      const k = structuredClone(fixture);
      change(k);
      return () => parseKnowledgeCheck(k, "1.1");
    };
    expect(bad((k) => k.questions.pop())).toThrow();
    expect(bad((k) => (k.questions[0].options = k.questions[0].options.slice(0, 2)))).toThrow();
    expect(bad((k) => k.questions[0].options.push({ id: "x", text: "X" }, { id: "y", text: "Y" }))).toThrow();
    expect(bad((k) => (k.questions[0].correctOptionId = "z"))).toThrow();
    expect(bad((k) => (k.questions[0].explanation = "Two\nlines"))).toThrow();
    expect(bad((k) => (k.questions[1].id = "q1"))).toThrow();
    expect(() => parseKnowledgeCheck(fixture, "1.2")).toThrow();
  });
  it("passes only when every question's latest answer is correct, with retries allowed", () => {
    const k = parseKnowledgeCheck(fixture, "1.1");
    let p = emptyProgress("1.1");
    const answers = { q1: "b", q2: "a", q3: "c", q4: "d", q5: "a" } as Record<string, string>;
    p = recordAnswer(p, "q1", "a", false, "t0");
    expect(isPassed(k, p.knowledgeCheck!.answers)).toBe(false);
    for (const [q, o] of Object.entries(answers)) p = recordAnswer(p, q, o, false, "t1");
    expect(isPassed(k, p.knowledgeCheck!.answers)).toBe(true);
    expect(p.knowledgeCheck!.attempts).toBe(6);
    expect(p.knowledgeCheck!.answers.q1).toEqual(["a", "b"]);
  });
  it("fails the content build on a malformed file in content/knowledge-checks", () => {
    const dir = mkdtempSync(join(tmpdir(), "genie-kc-"));
    writeFileSync(join(dir, "lesson-1.1.json"), JSON.stringify({ lessonId: "1.1", questions: [] }));
    expect(() => validateKnowledgeChecks(dir, new Set(["1.1"]))).toThrow(/lesson-1\.1\.json/);
    expect(validateKnowledgeChecks(join(dir, "missing"), new Set())).toBe(0);
  });
});

describe("evidence rules", () => {
  it("allows only listed types up to the size limit", () => {
    expect(checkFile("screenshot.PNG", 100)).toMatchObject({ ok: true, type: "image/png" });
    expect(checkFile("notes.md", 100)).toMatchObject({ ok: true });
    expect(checkFile("page.html", 100).ok).toBe(false);
    expect(checkFile("logo.svg", 100).ok).toBe(false);
    expect(checkFile("big.pdf", MAX_FILE_BYTES + 1).ok).toBe(false);
    expect(checkFile("empty.txt", 0).ok).toBe(false);
  });
  it("cleans file names and checks links", () => {
    expect(cleanFileName("../../etc/passwd")).toBe("passwd");
    expect(cleanFileName("C:\\Users\\me\\report.pdf")).toBe("report.pdf");
    expect(isHttpUrl("https://github.com/x")).toBe(true);
    expect(isHttpUrl("javascript:alert(1)")).toBe(false);
  });
});

describe("local stores", () => {
  it("stores a file and refuses a disallowed one", async () => {
    const files = new LocalFileStorage(mkdtempSync(join(tmpdir(), "genie-files-")));
    const ref = await files.save("dev-intern", "proof.txt", new TextEncoder().encode("hello"));
    expect(ref).toMatchObject({ name: "proof.txt", size: 5, type: "text/plain; charset=utf-8" });
    expect(new TextDecoder().decode((await files.read("dev-intern", ref.id))!.bytes)).toBe("hello");
    expect(await files.read("other-intern", ref.id)).toBeNull();
    await expect(files.save("dev-intern", "page.html", new Uint8Array([1]))).rejects.toBeInstanceOf(FileRefusedError);
  });
  it("finds live share tokens only", async () => {
    const store = new LocalJsonWorkStore(mkdtempSync(join(tmpdir(), "genie-work-")));
    const token = newShareToken();
    expect(token).toMatch(/^[A-Za-z0-9_-]{32}$/);
    await store.update("dev-intern", (w) => ({ next: { ...w, shares: [{ token, lessonId: "2.4", createdAt: "t", revokedAt: null }] }, result: null }));
    expect(await store.findShare(token)).toMatchObject({ internId: "dev-intern", share: { lessonId: "2.4" } });
    await store.update("dev-intern", (w) => ({ next: { ...w, shares: w.shares.map((s) => ({ ...s, revokedAt: "t2" })) }, result: null }));
    expect(await store.findShare(token)).toBeNull();
    expect(await store.findShare("not-a-token")).toBeNull();
  });
});
