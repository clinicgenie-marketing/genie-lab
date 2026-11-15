"use server";

import { z } from "zod";
import { auth } from "@/lib/platform/auth";
import { progressStore, type LessonProgress } from "@/lib/platform/progress";
import { getLessonAccess } from "@/lib/lesson-access";
import { emptyProgress, recordVisit, setCriterion, setStep } from "@/lib/progress-rules";

export type ProgressResult = { ok: true; progress: LessonProgress } | { ok: false; error: "not_signed_in" | "not_available" | "invalid" | "save_failed" };

const LessonId = z.string().regex(/^\d+\.\d+$/);

/** Every change is checked against the real lesson and the calendar before it is stored. */
async function change(
  lessonId: string,
  check: (lesson: Extract<Awaited<ReturnType<typeof getLessonAccess>>, { kind: "open" }>["lesson"]) => boolean,
  apply: (p: LessonProgress) => LessonProgress,
): Promise<ProgressResult> {
  if (!LessonId.safeParse(lessonId).success) return { ok: false, error: "invalid" };
  const intern = await auth.getCurrentIntern();
  if (!intern) return { ok: false, error: "not_signed_in" };
  const access = await getLessonAccess(lessonId);
  if (access.kind !== "open") return { ok: false, error: "not_available" };
  if (!check(access.lesson)) return { ok: false, error: "invalid" };
  try {
    const progress = await progressStore.update(intern.id, lessonId, (current) => apply(current ?? emptyProgress(lessonId)));
    return { ok: true, progress };
  } catch {
    return { ok: false, error: "save_failed" };
  }
}

export async function saveSectionVisit(lessonId: string, section: number): Promise<ProgressResult> {
  return change(lessonId, (l) => Number.isInteger(section) && l.sections.some((s) => s.number === section), (p) => recordVisit(p, section));
}

export async function saveStep(lessonId: string, stepId: string, checked: boolean): Promise<ProgressResult> {
  return change(lessonId, (l) => typeof checked === "boolean" && l.task.steps.some((s) => s.id === stepId), (p) => setStep(p, stepId, checked));
}

export async function saveCriterion(lessonId: string, criterionId: string, checked: boolean): Promise<ProgressResult> {
  return change(lessonId, (l) => typeof checked === "boolean" && l.criteria.items.some((c) => c.id === criterionId), (p) => setCriterion(p, criterionId, checked));
}
