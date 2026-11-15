/**
 * Programme structure from the locked package (content/curriculum.json).
 * Phase 1 reads only this file. The Markdown lesson parser arrives in Phase 2.
 */
import { z } from "zod";
import raw from "@content/curriculum.json";

const LessonId = z.string().regex(/^\d+\.\d+$/);

const CurriculumSchema = z.object({
  platform_name: z.string().min(1),
  platform_description: z.string().min(1),
  units: z
    .array(
      z.object({
        unit: z.number().int(),
        day: z.number().int().min(1),
        title: z.string().min(1),
        locked_title: z.string().optional(),
        estimated_minutes: z.number().int().positive(),
        lessons: z.array(
          z.object({
            id: LessonId,
            order: z.number().int().min(1),
            title: z.string().min(1),
            file: z.string().min(1),
            estimated_minutes: z.number().int().positive(),
          }),
        ),
      }),
    )
    .min(1),
});

const curriculum = CurriculumSchema.parse(raw);

export type LessonRef = {
  id: string;
  /** URL form of the ID: "4.2" becomes "4-2". */
  slug: string;
  day: number;
  order: number;
  title: string;
  file: string;
  estimatedMinutes: number;
};

export type Day = {
  n: number;
  /** The title interns see. Unit 7 shows its platform title; locked_title is kept for the record only. */
  title: string;
  estimatedMinutes: number;
  lessons: LessonRef[];
};

export const platform = {
  name: curriculum.platform_name,
  description: curriculum.platform_description,
} as const;

export const days: readonly Day[] = curriculum.units
  .map((u) => ({
    n: u.day,
    title: u.title,
    estimatedMinutes: u.estimated_minutes,
    lessons: [...u.lessons]
      .sort((a, b) => a.order - b.order)
      .map((l) => ({
        id: l.id,
        slug: lessonIdToSlug(l.id),
        day: u.day,
        order: l.order,
        title: l.title,
        file: l.file,
        estimatedMinutes: l.estimated_minutes,
      })),
  }))
  .sort((a, b) => a.n - b.n);

export const lessons: readonly LessonRef[] = days.flatMap((d) => d.lessons);

export function lessonIdToSlug(id: string): string {
  return id.replace(".", "-");
}

/** Accepts only a well-formed slug such as "4-2"; anything else returns null. */
export function slugToLessonId(slug: string): string | null {
  return /^\d+-\d+$/.test(slug) ? slug.replace("-", ".") : null;
}

export function getDay(n: number): Day | undefined {
  return days.find((d) => d.n === n);
}

/** Parses a day route segment strictly: "4" is valid, "04", "4.0" and "four" are not. */
export function getDayFromParam(param: string): Day | undefined {
  return /^[1-9]\d*$/.test(param) ? getDay(Number(param)) : undefined;
}

export function getLessonBySlug(slug: string): LessonRef | undefined {
  const id = slugToLessonId(slug);
  return id ? lessons.find((l) => l.id === id) : undefined;
}
