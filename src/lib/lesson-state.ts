/** Server-side reads that several pages and actions share. */
import { getLesson } from "./content/curriculum";
import { loadKnowledgeCheck } from "./knowledge-checks";
import { isPassed } from "./knowledge-checks";
import type { LessonProgress } from "./platform/progress";
import type { Work } from "./platform/work";
import { completion, latestSubmission, type CheckState, type Completion } from "./work-rules";

export async function checkState(lessonId: string, progress: LessonProgress | undefined): Promise<CheckState> {
  const check = await loadKnowledgeCheck(lessonId);
  if (!check) return "unavailable";
  return progress?.knowledgeCheck && isPassed(check, progress.knowledgeCheck.answers) ? "passed" : "pending";
}

export async function lessonCompletion(lessonId: string, progress: LessonProgress | undefined, work: Work): Promise<Completion | null> {
  const lesson = getLesson(lessonId);
  if (!lesson) return null;
  return completion(lesson, progress, Boolean(latestSubmission(work, lessonId)), await checkState(lessonId, progress));
}
