/**
 * How lesson progress changes. Pure functions over one lesson's record, unit-tested.
 * Visiting a section or ticking an item marks a lesson In progress. Complete is set only
 * by "Mark lesson complete" (Phase 4) and is not undone by later edits.
 */
import type { LessonProgress } from "./platform/progress";

export function emptyProgress(lessonId: string): LessonProgress {
  return { lessonId, status: "not_started", lastSection: null, tickedSteps: [], tickedCriteria: [], completedAt: null };
}

const started = (p: LessonProgress): LessonProgress => (p.status === "complete" ? p : { ...p, status: "in_progress" });

export function recordVisit(p: LessonProgress, section: number): LessonProgress {
  return started({ ...p, lastSection: section });
}

function toggle(list: string[], id: string, checked: boolean): string[] {
  const without = list.filter((x) => x !== id);
  return checked ? [...without, id] : without;
}

export function setStep(p: LessonProgress, stepId: string, checked: boolean): LessonProgress {
  return started({ ...p, tickedSteps: toggle(p.tickedSteps, stepId, checked) });
}

export function setCriterion(p: LessonProgress, criterionId: string, checked: boolean): LessonProgress {
  return started({ ...p, tickedCriteria: toggle(p.tickedCriteria, criterionId, checked) });
}

/** For "either" criteria (Lesson 1.2): exactly one alternative is chosen at a time. */
export function chooseCriterion(p: LessonProgress, criterionId: string): LessonProgress {
  return started({ ...p, tickedCriteria: [criterionId] });
}

/** Records one "Check answer" press. */
export function recordAnswer(p: LessonProgress, questionId: string, optionId: string, passedNow: boolean, at: string): LessonProgress {
  const prev = p.knowledgeCheck ?? { answers: {}, attempts: 0, passedAt: null };
  const answers = { ...prev.answers, [questionId]: [...(prev.answers[questionId] ?? []), optionId] };
  return started({ ...p, knowledgeCheck: { answers, attempts: prev.attempts + 1, passedAt: prev.passedAt ?? (passedNow ? at : null) } });
}

export function markComplete(p: LessonProgress, at: string, check: "passed" | "unavailable"): LessonProgress {
  return { ...p, status: "complete", completedAt: p.completedAt ?? at, checkAtCompletion: p.checkAtCompletion ?? check };
}
