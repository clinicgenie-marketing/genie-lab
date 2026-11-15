import { getLesson, lessons } from "./content/curriculum";
import type { Lesson, LessonSummary } from "./content/model";
import { getProgrammeView, type DayView, type ProgrammeView } from "./programme";
import type { LessonProgressStatus } from "./schedule";

export type LessonAccess =
  | { kind: "unknown" }
  /** The lesson's file is missing: "Coming soon", never "Locked". */
  | { kind: "coming_soon"; summary: LessonSummary; day: DayView }
  /** The calendar has not opened the lesson's day yet. */
  | { kind: "locked"; summary: LessonSummary; day: DayView }
  | { kind: "open"; summary: LessonSummary; lesson: Lesson; day: DayView; status: LessonProgressStatus; programme: ProgrammeView };

export async function getLessonAccess(lessonId: string): Promise<LessonAccess> {
  const summary = lessons.find((l) => l.id === lessonId);
  if (!summary) return { kind: "unknown" };
  const programme = await getProgrammeView();
  const day = programme.days.find((d) => d.n === summary.day)!;
  const lesson = getLesson(lessonId);
  if (!summary.available || !lesson) return { kind: "coming_soon", summary, day };
  if (day.access === "locked") return { kind: "locked", summary, day };
  const status = day.lessons.find((l) => l.id === lessonId)!.status;
  return { kind: "open", summary, lesson, day, status, programme };
}
