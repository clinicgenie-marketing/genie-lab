/**
 * How the platform reads an intern's work. Pure functions, unit-tested.
 * Supervisor review is never part of lesson completion.
 */
import type { CriteriaPart, Lesson, TaskPart } from "./content/model";
import type { LessonProgress } from "./platform/progress";
import type { ReviewDecision, Submission, Work } from "./platform/work";

export type ReviewState = "not_submitted" | "awaiting_review" | "changes_requested" | "accepted";

export function submissionsFor(work: Work, lessonId: string): Submission[] {
  return work.submissions.filter((s) => s.lessonId === lessonId).sort((a, b) => b.version - a.version);
}

export function latestSubmission(work: Work, lessonId: string): Submission | undefined {
  return submissionsFor(work, lessonId)[0];
}

/** Recorded decisions for a lesson, newest first. */
export function decisionsFor(work: Work, lessonId: string): ReviewDecision[] {
  return work.decisions.filter((d) => d.lessonId === lessonId).sort((a, b) => b.recordedAt.localeCompare(a.recordedAt));
}

/**
 * The review state at a review point: Not submitted without a submission; otherwise the
 * latest decision recorded for the latest version, or Awaiting review while none is recorded.
 * Resubmitting creates a new version, so it returns to Awaiting review.
 */
export function reviewState(work: Work, lessonId: string): ReviewState {
  const latest = latestSubmission(work, lessonId);
  if (!latest) return "not_submitted";
  const decision = decisionsFor(work, lessonId).find((d) => d.version === latest.version);
  return decision?.decision ?? "awaiting_review";
}

export function nextVersion(work: Work, lessonId: string): number {
  return (latestSubmission(work, lessonId)?.version ?? 0) + 1;
}

export type CheckState = "passed" | "pending" | "unavailable";

export type Completion = {
  steps: { done: number; total: number; ok: boolean };
  evidence: { ok: boolean };
  criteria: { done: number; total: number; ok: boolean; mode: CriteriaPart["mode"] };
  check: { state: CheckState; ok: boolean };
  ready: boolean;
};

/** The four conditions for "Mark lesson complete". */
export function completion(lesson: Pick<Lesson, "task" | "criteria">, progress: LessonProgress | undefined, submitted: boolean, check: CheckState): Completion {
  const ticked = new Set(progress?.tickedSteps ?? []);
  const stepsDone = lesson.task.steps.filter((s: TaskPart["steps"][number]) => ticked.has(s.id)).length;
  const criteriaIds = new Set(lesson.criteria.items.map((c) => c.id));
  const chosen = (progress?.tickedCriteria ?? []).filter((id) => criteriaIds.has(id));
  const criteriaOk = lesson.criteria.mode === "one" ? chosen.length === 1 : chosen.length === criteriaIds.size;
  const steps = { done: stepsDone, total: lesson.task.steps.length, ok: stepsDone === lesson.task.steps.length };
  const criteria = { done: chosen.length, total: criteriaIds.size, ok: criteriaOk, mode: lesson.criteria.mode };
  const checkOk = check !== "pending";
  return { steps, evidence: { ok: submitted }, criteria, check: { state: check, ok: checkOk }, ready: steps.ok && submitted && criteriaOk && checkOk };
}
