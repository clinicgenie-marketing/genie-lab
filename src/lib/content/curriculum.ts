/**
 * The content the app renders, read from the model that scripts/build-content.ts builds
 * from the locked package (src/generated/content.json). Server-side only.
 */
import generated from "@/generated/content.json";
import type { ContentModel, DaySummary, Lesson, LessonSummary } from "./model";

const model = generated as unknown as ContentModel;

export type { DaySummary as Day, LessonSummary as LessonRef } from "./model";

export const platform = model.platform;
export const days: readonly DaySummary[] = model.days;
export const lessons: readonly LessonSummary[] = model.days.flatMap((d) => d.lessons);

export function lessonIdToSlug(id: string): string {
  return id.replace(".", "-");
}

/** Accepts only a well-formed slug such as "4-2"; anything else returns null. */
export function slugToLessonId(slug: string): string | null {
  return /^\d+-\d+$/.test(slug) ? slug.replace("-", ".") : null;
}

export function getDay(n: number): DaySummary | undefined {
  return days.find((d) => d.n === n);
}

/** Parses a day route segment strictly: "4" is valid, "04", "4.0" and "four" are not. */
export function getDayFromParam(param: string): DaySummary | undefined {
  return /^[1-9]\d*$/.test(param) ? getDay(Number(param)) : undefined;
}

export function getLessonBySlug(slug: string): LessonSummary | undefined {
  const id = slugToLessonId(slug);
  return id ? lessons.find((l) => l.id === id) : undefined;
}

/** The full parsed lesson, or undefined when its file is missing ("Coming soon"). */
export function getLesson(id: string): Lesson | undefined {
  return model.lessons[id];
}
