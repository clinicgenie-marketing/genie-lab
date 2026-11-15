/**
 * Multiple-choice knowledge checks: content/knowledge-checks/lesson-X.Y.json, one per lesson.
 * None exist yet. Until a lesson's file exists its own questions are shown as reflection
 * questions, completion skips the check and progress records it as "unavailable".
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";

export const QuestionSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    prompt: z.string().trim().min(1),
    options: z
      .array(z.object({ id: z.string().regex(/^[a-z0-9-]+$/), text: z.string().trim().min(1) }))
      .min(3)
      .max(4),
    correctOptionId: z.string(),
    /** One line explaining the correct option. */
    explanation: z.string().trim().min(1).refine((s) => !s.includes("\n"), "must be one line"),
  })
  .refine((q) => q.options.some((o) => o.id === q.correctOptionId), "correctOptionId must match an option")
  .refine((q) => new Set(q.options.map((o) => o.id)).size === q.options.length, "option IDs must be unique");

export const KnowledgeCheckSchema = z
  .object({ lessonId: z.string().regex(/^\d+\.\d+$/), questions: z.array(QuestionSchema).length(5) })
  .refine((k) => new Set(k.questions.map((q) => q.id)).size === k.questions.length, "question IDs must be unique");

export type KnowledgeCheck = z.infer<typeof KnowledgeCheckSchema>;
export type Question = z.infer<typeof QuestionSchema>;
/** What the browser receives: never the correct option or its explanation before answering. */
export type PublicQuestion = { id: string; prompt: string; options: { id: string; text: string }[] };

/** Validates a knowledge check file's contents for the given lesson. */
export function parseKnowledgeCheck(json: unknown, lessonId: string): KnowledgeCheck {
  const check = KnowledgeCheckSchema.parse(json);
  if (check.lessonId !== lessonId) throw new Error(`Knowledge check file for Lesson ${lessonId} names Lesson ${check.lessonId}`);
  return check;
}

/**
 * Where checks are read from. GENIE_LAB_KNOWLEDGE_CHECKS_DIR is honoured only with
 * GENIE_LAB_DEV=1, so browser tests can use clearly fake fixtures; nothing else changes it.
 */
export function knowledgeChecksDir(): string {
  const dev = process.env.GENIE_LAB_DEV === "1" ? process.env.GENIE_LAB_KNOWLEDGE_CHECKS_DIR : undefined;
  return dev ?? join(process.cwd(), "content", "knowledge-checks");
}

/** The lesson's check, or null while its file does not exist. A malformed file throws. */
export async function loadKnowledgeCheck(lessonId: string): Promise<KnowledgeCheck | null> {
  if (!/^\d+\.\d+$/.test(lessonId)) return null;
  let raw: string;
  try {
    raw = await readFile(join(knowledgeChecksDir(), `lesson-${lessonId}.json`), "utf8");
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw e;
  }
  return parseKnowledgeCheck(JSON.parse(raw), lessonId);
}

export function publicQuestions(check: KnowledgeCheck): PublicQuestion[] {
  return check.questions.map((q) => ({ id: q.id, prompt: q.prompt, options: q.options }));
}

/** Passed once every question's most recent answer is correct. */
export function isPassed(check: KnowledgeCheck, answers: Record<string, string[]>): boolean {
  return check.questions.every((q) => answers[q.id]?.at(-1) === q.correctOptionId);
}
