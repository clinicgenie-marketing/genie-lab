import { mkdtempSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { LocalJsonProgressStore } from "@/lib/platform/progress";
import { emptyProgress, recordVisit, setCriterion, setStep } from "@/lib/progress-rules";

describe("progress rules", () => {
  it("starts empty and becomes In progress on the first visit", () => {
    const p = recordVisit(emptyProgress("4.2"), 3);
    expect(p).toMatchObject({ status: "in_progress", lastSection: 3 });
  });
  it("ticks and unticks steps and criteria without duplicates", () => {
    let p = setStep(emptyProgress("4.2"), "s1", true);
    p = setStep(p, "s1", true);
    p = setStep(p, "s2", true);
    expect(p.tickedSteps).toEqual(["s1", "s2"]);
    p = setStep(p, "s1", false);
    expect(p.tickedSteps).toEqual(["s2"]);
    p = setCriterion(p, "c3", true);
    expect(p.tickedCriteria).toEqual(["c3"]);
    expect(p.status).toBe("in_progress");
  });
  it("keeps a complete lesson complete", () => {
    const done = { ...emptyProgress("4.2"), status: "complete" as const, completedAt: "2026-11-18T10:00:00Z" };
    expect(recordVisit(done, 2).status).toBe("complete");
    expect(setStep(done, "s1", false).status).toBe("complete");
  });
});

describe("local progress store", () => {
  const fresh = () => {
    const dir = mkdtempSync(join(tmpdir(), "genie-progress-"));
    return { dir, store: new LocalJsonProgressStore(dir) };
  };

  it("reads nothing for a new intern", async () => {
    const { store } = fresh();
    expect((await store.list("dev-intern")).size).toBe(0);
    expect(await store.get("dev-intern", "1.1")).toBeUndefined();
  });

  it("saves and reads back a record", async () => {
    const { store } = fresh();
    await store.update("dev-intern", "1.1", (p) => recordVisit(p ?? emptyProgress("1.1"), 2));
    expect(await store.get("dev-intern", "1.1")).toMatchObject({ lastSection: 2, status: "in_progress" });
  });

  it("keeps every one of 20 simultaneous ticks", async () => {
    const { store } = fresh();
    await Promise.all(Array.from({ length: 20 }, (_, i) => store.update("dev-intern", "4.2", (p) => setStep(p ?? emptyProgress("4.2"), `s${i + 1}`, true))));
    expect((await store.get("dev-intern", "4.2"))!.tickedSteps).toHaveLength(20);
  });

  it("keeps other lessons' records when one changes", async () => {
    const { store } = fresh();
    await store.update("dev-intern", "1.1", (p) => recordVisit(p ?? emptyProgress("1.1"), 1));
    await store.update("dev-intern", "1.2", (p) => recordVisit(p ?? emptyProgress("1.2"), 4));
    expect([...(await store.list("dev-intern")).keys()]).toEqual(["1.1", "1.2"]);
  });

  it("refuses unsafe intern IDs and invalid records", async () => {
    const { store } = fresh();
    await expect(store.list("../etc")).rejects.toThrow();
    await expect(store.update("dev-intern", "1.1", () => ({ ...emptyProgress("1.1"), lastSection: 0 }))).rejects.toThrow();
    await expect(store.update("dev-intern", "1.1", () => emptyProgress("1.2"))).rejects.toThrow();
  });

  it("refuses a corrupted file instead of treating it as empty", async () => {
    const { dir, store } = fresh();
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "dev-intern.json"), "{not json");
    await expect(store.list("dev-intern")).rejects.toThrow();
    expect(readFileSync(join(dir, "dev-intern.json"), "utf8")).toBe("{not json");
  });
});
