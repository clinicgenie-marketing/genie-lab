import { notFound } from "next/navigation";
import { getLessonBySlug, lessonIdToSlug, lessons } from "@/lib/content/curriculum";
import { getLessonAccess, type LessonAccess } from "@/lib/lesson-access";
import type { LessonProgress } from "@/lib/platform/progress";
import { auth } from "@/lib/platform/auth";
import type { Prerequisite } from "@/components/lesson/LessonReader";
import { progressStore } from "@/lib/platform/stores";

export type LoadedLesson =
  | { access: Extract<LessonAccess, { kind: "coming_soon" | "locked" }> }
  | { access: Extract<LessonAccess, { kind: "open" }>; canSave: boolean; progress: LessonProgress | undefined; prerequisites: Prerequisite[] };

/** Everything a lesson route needs: access, the intern's saved progress and prerequisites. */
export async function loadLesson(slug: string): Promise<LoadedLesson> {
  const summary = getLessonBySlug(slug);
  if (!summary) notFound();
  const access = await getLessonAccess(summary.id);
  if (access.kind === "unknown") notFound();
  if (access.kind !== "open") return { access };
  const intern = await auth.getCurrentIntern();
  const progress = intern ? await progressStore.get(intern.id, summary.id) : undefined;
  const statusOf = (id: string) => access.programme.days.flatMap((d) => d.lessons).find((l) => l.id === id)?.status;
  const prerequisites: Prerequisite[] = access.lesson.prerequisiteLessons
    .map((id) => lessons.find((l) => l.id === id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l))
    .map((l) => ({ id: l.id, slug: lessonIdToSlug(l.id), title: l.title, complete: statusOf(l.id) === "complete" }));
  return { access, canSave: Boolean(intern), progress, prerequisites };
}
