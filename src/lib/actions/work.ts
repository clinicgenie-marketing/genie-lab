"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { reviewPointFor } from "@/lib/config";
import { lessonIdToSlug } from "@/lib/content/curriculum";
import { COMMIT, isHttpUrl } from "@/lib/evidence-rules";
import { getLessonAccess } from "@/lib/lesson-access";
import { auth } from "@/lib/platform/auth";
import { FileRefusedError, type FileRef } from "@/lib/platform/files";
import { DECISIONS, newId, newShareToken, type DraftItem, type EvidenceItem } from "@/lib/platform/work";
import { latestSubmission, nextVersion } from "@/lib/work-rules";
import { fileStorage, workStore } from "@/lib/platform/stores";

type Fail = { ok: false; error: string };
const fail = (error: string): Fail => ({ ok: false, error });

const NOT_SIGNED_IN = "Your work can't be saved because you're not signed in.";
const SAVE_FAILED = "We couldn't save your changes. Check your connection, then try again.";

/** The signed-in intern and an open lesson, or the reason the action cannot go ahead. */
async function guard(lessonId: string) {
  if (!/^\d+\.\d+$/.test(lessonId)) return fail("This lesson does not exist.");
  const intern = await auth.getCurrentIntern();
  if (!intern) return fail(NOT_SIGNED_IN);
  const access = await getLessonAccess(lessonId);
  if (access.kind !== "open") return fail("This lesson isn't open yet, so work can't be saved for it.");
  return { ok: true as const, intern, lesson: access.lesson };
}

function refresh(lessonId: string) {
  const slug = lessonIdToSlug(lessonId);
  revalidatePath(`/lesson/${slug}`, "layout");
  revalidatePath(`/work/${slug}`);
  revalidatePath("/work");
}

// ---------- Files ----------

export async function uploadEvidenceFile(lessonId: string, form: FormData): Promise<{ ok: true; file: FileRef } | Fail> {
  const g = await guard(lessonId);
  if (!g.ok) return g;
  const file = form.get("file");
  if (!(file instanceof File)) return fail("Choose a file to upload.");
  try {
    const ref = await fileStorage.save(g.intern.id, file.name, new Uint8Array(await file.arrayBuffer()));
    return { ok: true, file: ref };
  } catch (e) {
    if (e instanceof FileRefusedError) return fail(e.message);
    return fail(`We couldn't upload ${file.name}. Try again, or remove it.`);
  }
}

// ---------- Drafts and submissions ----------

export type ItemInput = { itemId: string; kind: "text" | "link" | "file"; text?: string; url?: string; fileId?: string };
export type EvidenceInput = { items: ItemInput[]; gitCommit: string };

const ItemInputSchema = z.object({
  itemId: z.string().regex(/^e\d+$/),
  kind: z.enum(["text", "link", "file"]),
  text: z.string().max(20000).optional(),
  url: z.string().max(2000).optional(),
  fileId: z.string().regex(/^[0-9a-f]{32}$/).optional(),
});
const EvidenceInputSchema = z.object({ items: z.array(ItemInputSchema).max(50), gitCommit: z.string().max(40) });

async function resolveFile(internId: string, id: string | undefined): Promise<FileRef | undefined> {
  if (!id) return undefined;
  return (await fileStorage.read(internId, id))?.ref;
}

export async function saveDraft(lessonId: string, input: EvidenceInput): Promise<{ ok: true; savedAt: string } | Fail> {
  const g = await guard(lessonId);
  if (!g.ok) return g;
  const parsed = EvidenceInputSchema.safeParse(input);
  if (!parsed.success) return fail("Some of your entries could not be read. Reload the page, then try again.");
  const known = new Set(g.lesson.submission.items.map((i) => i.id));
  const items: DraftItem[] = [];
  for (const it of parsed.data.items) {
    if (!known.has(it.itemId)) continue;
    items.push({ itemId: it.itemId, kind: it.kind, text: it.text, url: it.url, file: await resolveFile(g.intern.id, it.fileId) });
  }
  const savedAt = new Date().toISOString();
  try {
    await workStore.update(g.intern.id, (w) => ({
      next: { ...w, drafts: [...w.drafts.filter((d) => d.lessonId !== lessonId), { lessonId, items, gitCommit: parsed.data.gitCommit.trim(), savedAt }] },
      result: null,
    }));
  } catch {
    return fail(SAVE_FAILED);
  }
  return { ok: true, savedAt };
}

export type SubmitProblem = { itemId: string | "gitCommit"; message: string };

export async function submitEvidence(lessonId: string, input: EvidenceInput): Promise<{ ok: true; version: number } | (Fail & { problems?: SubmitProblem[] })> {
  const g = await guard(lessonId);
  if (!g.ok) return g;
  const parsed = EvidenceInputSchema.safeParse(input);
  if (!parsed.success) return fail("Some of your entries could not be read. Reload the page, then try again.");

  const problems: SubmitProblem[] = [];
  const items: EvidenceItem[] = [];
  for (const [index, expected] of g.lesson.submission.items.entries()) {
    const it = parsed.data.items.find((x) => x.itemId === expected.id);
    const n = index + 1;
    if (!it) {
      problems.push({ itemId: expected.id, message: `Item ${n} is empty. Add text, a link or a file.` });
    } else if (it.kind === "text") {
      if (!it.text?.trim()) problems.push({ itemId: it.itemId, message: `Item ${n} is empty. Add text, a link or a file.` });
      else items.push({ itemId: it.itemId, kind: "text", text: it.text.trim() });
    } else if (it.kind === "link") {
      if (!it.url?.trim() || !isHttpUrl(it.url.trim())) problems.push({ itemId: it.itemId, message: `Item ${n} needs a full link starting with https://.` });
      else items.push({ itemId: it.itemId, kind: "link", url: it.url.trim() });
    } else {
      const file = await resolveFile(g.intern.id, it.fileId);
      if (!file) problems.push({ itemId: it.itemId, message: `Item ${n} has no uploaded file. Choose a file, or use text or a link.` });
      else items.push({ itemId: it.itemId, kind: "file", file });
    }
  }
  const commit = parsed.data.gitCommit.trim();
  if (commit && !COMMIT.test(commit)) problems.push({ itemId: "gitCommit", message: "The Git commit should be 7 to 40 letters and numbers, as shown by git log." });
  if (problems.length) return { ok: false, error: "Some items need attention before you can submit.", problems };

  try {
    const version = await workStore.update(g.intern.id, (w) => {
      const v = nextVersion(w, lessonId);
      return {
        next: {
          ...w,
          drafts: w.drafts.filter((d) => d.lessonId !== lessonId),
          submissions: [...w.submissions, { id: newId(), lessonId, version: v, items, gitCommit: commit || null, submittedAt: new Date().toISOString() }],
        },
        result: v,
      };
    });
    refresh(lessonId);
    return { ok: true, version };
  } catch {
    return fail(SAVE_FAILED);
  }
}

// ---------- Review outcome (recorded by the intern) ----------

const ReviewInputSchema = z.object({
  decision: z.enum(DECISIONS),
  reviewerName: z.string().trim().min(1, "Add the reviewer's name.").max(100),
  notes: z.string().max(5000),
});

export async function recordReviewOutcome(lessonId: string, input: z.input<typeof ReviewInputSchema>): Promise<{ ok: true } | (Fail & { field?: "reviewerName" | "decision" | "notes" })> {
  const g = await guard(lessonId);
  if (!g.ok) return g;
  if (!reviewPointFor(lessonId)) return fail("This lesson is not a review point, so there is no decision to record.");
  const parsed = ReviewInputSchema.safeParse(input);
  if (!parsed.success) {
    const issue = parsed.error.issues[0]!;
    return { ...fail(issue.path[0] === "reviewerName" ? "Add the reviewer's name." : "Check the decision and notes, then try again."), field: issue.path[0] as "reviewerName" | "decision" | "notes" };
  }
  try {
    const recorded = await workStore.update(g.intern.id, (w) => {
      const latest = latestSubmission(w, lessonId);
      if (!latest) return { next: w, result: false };
      return {
        next: { ...w, decisions: [...w.decisions, { id: newId(), lessonId, version: latest.version, decision: parsed.data.decision, reviewerName: parsed.data.reviewerName, notes: parsed.data.notes.trim(), recordedAt: new Date().toISOString() }] },
        result: true,
      };
    });
    if (!recorded) return fail("Submit your evidence before recording a review outcome.");
    refresh(lessonId);
    return { ok: true };
  } catch {
    return fail(SAVE_FAILED);
  }
}

// ---------- Share links ----------

export async function createShareLink(lessonId: string): Promise<{ ok: true; token: string } | Fail> {
  const g = await guard(lessonId);
  if (!g.ok) return g;
  try {
    const token = await workStore.update(g.intern.id, (w) => {
      if (!latestSubmission(w, lessonId)) return { next: w, result: null };
      const live = w.shares.find((s) => s.lessonId === lessonId && !s.revokedAt);
      if (live) return { next: w, result: live.token };
      const t = newShareToken();
      return { next: { ...w, shares: [...w.shares, { token: t, lessonId, createdAt: new Date().toISOString(), revokedAt: null }] }, result: t };
    });
    if (!token) return fail("Submit your evidence before sharing it.");
    refresh(lessonId);
    return { ok: true, token };
  } catch {
    return fail(SAVE_FAILED);
  }
}

export async function revokeShareLink(lessonId: string): Promise<{ ok: true } | Fail> {
  const g = await guard(lessonId);
  if (!g.ok) return g;
  try {
    const at = new Date().toISOString();
    await workStore.update(g.intern.id, (w) => ({ next: { ...w, shares: w.shares.map((s) => (s.lessonId === lessonId && !s.revokedAt ? { ...s, revokedAt: at } : s)) }, result: null }));
    refresh(lessonId);
    return { ok: true };
  } catch {
    return fail(SAVE_FAILED);
  }
}

