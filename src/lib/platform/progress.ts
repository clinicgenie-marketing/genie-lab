/**
 * Lesson progress storage, behind an interface. Only the local development adapter
 * exists; the hosted database is not chosen yet.
 */
import { join } from "node:path";
import { z } from "zod";
import { dataDir, jsonFile, SAFE_ID } from "./json-file";

export const KnowledgeCheckRecordSchema = z.object({
  /** Every option chosen per question, in order. */
  answers: z.record(z.string(), z.array(z.string())),
  /** How many times "Check answer" was pressed. */
  attempts: z.number().int().min(0),
  passedAt: z.string().nullable(),
});

export const LessonProgressSchema = z.object({
  lessonId: z.string().regex(/^\d+\.\d+$/),
  status: z.enum(["not_started", "in_progress", "complete"]),
  lastSection: z.number().int().min(1).nullable(),
  tickedSteps: z.array(z.string()),
  tickedCriteria: z.array(z.string()),
  completedAt: z.string().nullable(),
  knowledgeCheck: KnowledgeCheckRecordSchema.optional(),
  /** How the knowledge check stood when the lesson was marked complete. */
  checkAtCompletion: z.enum(["passed", "unavailable"]).optional(),
});

export type LessonProgress = z.infer<typeof LessonProgressSchema>;
export type KnowledgeCheckRecord = z.infer<typeof KnowledgeCheckRecordSchema>;

export interface ProgressStore {
  list(internId: string): Promise<Map<string, LessonProgress>>;
  get(internId: string, lessonId: string): Promise<LessonProgress | undefined>;
  /** Applies a change to one lesson's record and resolves once it is stored. */
  update(internId: string, lessonId: string, change: (current: LessonProgress | undefined) => LessonProgress): Promise<LessonProgress>;
}

const ProgressFile = z.array(LessonProgressSchema);

export class LocalJsonProgressStore implements ProgressStore {
  constructor(private readonly dir = join(dataDir(), "progress")) {}

  private file(internId: string) {
    if (!SAFE_ID.test(internId)) throw new Error("Invalid intern ID");
    return jsonFile(join(this.dir, `${internId}.json`), ProgressFile, () => []);
  }

  async list(internId: string): Promise<Map<string, LessonProgress>> {
    return new Map((await this.file(internId).read()).map((r) => [r.lessonId, r]));
  }

  async get(internId: string, lessonId: string): Promise<LessonProgress | undefined> {
    return (await this.list(internId)).get(lessonId);
  }

  update(internId: string, lessonId: string, change: (current: LessonProgress | undefined) => LessonProgress): Promise<LessonProgress> {
    return this.file(internId).update((records) => {
      const next = LessonProgressSchema.parse(change(records.find((r) => r.lessonId === lessonId)));
      if (next.lessonId !== lessonId) throw new Error("A progress change cannot move a record to another lesson");
      const all = [...records.filter((r) => r.lessonId !== lessonId), next].sort((a, b) => a.lessonId.localeCompare(b.lessonId, "en", { numeric: true }));
      return { next: all, result: next };
    });
  }
}

