"use server";

import { revalidatePath } from "next/cache";
import { lessonIdToSlug } from "@/lib/content/curriculum";
import { isPassed, loadKnowledgeCheck } from "@/lib/knowledge-checks";
import { getLessonAccess } from "@/lib/lesson-access";
import { auth } from "@/lib/platform/auth";
import { emptyProgress, recordAnswer } from "@/lib/progress-rules";
import { progressStore } from "@/lib/platform/stores";

export type AnswerResult =
  | { ok: true; correct: boolean; explanation: string; passed: boolean }
  | { ok: false; error: string };

/** Marks one answer on the server; the browser never receives the correct option in advance. */
export async function checkAnswer(lessonId: string, questionId: string, optionId: string): Promise<AnswerResult> {
  if (!/^\d+\.\d+$/.test(lessonId)) return { ok: false, error: "This lesson does not exist." };
  const intern = await auth.getCurrentIntern();
  if (!intern) return { ok: false, error: "Your answers can't be saved because you're not signed in." };
  const access = await getLessonAccess(lessonId);
  if (access.kind !== "open") return { ok: false, error: "This lesson isn't open yet." };
  const check = await loadKnowledgeCheck(lessonId);
  if (!check) return { ok: false, error: "This lesson's multiple-choice check is not available yet." };
  const question = check.questions.find((q) => q.id === questionId);
  if (!question || !question.options.some((o) => o.id === optionId)) return { ok: false, error: "Choose one of the answers, then select Check answer." };
  try {
    const saved = await progressStore.update(intern.id, lessonId, (p) => {
      const base = p ?? emptyProgress(lessonId);
      const answers = { ...(base.knowledgeCheck?.answers ?? {}), [questionId]: [...(base.knowledgeCheck?.answers[questionId] ?? []), optionId] };
      return recordAnswer(base, questionId, optionId, isPassed(check, answers), new Date().toISOString());
    });
    revalidatePath(`/lesson/${lessonIdToSlug(lessonId)}`, "layout");
    return { ok: true, correct: optionId === question.correctOptionId, explanation: question.explanation, passed: isPassed(check, saved.knowledgeCheck?.answers ?? {}) };
  } catch {
    return { ok: false, error: "We couldn't save your answer. Check your connection, then try again." };
  }
}
