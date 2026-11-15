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
