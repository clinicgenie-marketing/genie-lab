/**
 * Lesson progress storage, behind an interface. Only the local development adapter
 * exists; the hosted database is not chosen yet. Phase 2 reads progress; saving it
 * arrives with the lesson screen in Phase 3.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";

export const LessonProgressSchema = z.object({
  lessonId: z.string().regex(/^\d+\.\d+$/),
  status: z.enum(["not_started", "in_progress", "complete"]),
  lastSection: z.number().int().min(1).nullable(),
  tickedSteps: z.array(z.string()),
  tickedCriteria: z.array(z.string()),
  completedAt: z.string().nullable(),
});

export type LessonProgress = z.infer<typeof LessonProgressSchema>;

export interface ProgressStore {
  /** Every progress record the intern has, keyed by lesson ID. */
  list(internId: string): Promise<Map<string, LessonProgress>>;
}

/** Local development: one JSON file per intern under .data/progress/. */
export class LocalJsonProgressStore implements ProgressStore {
  constructor(private readonly dir = join(process.cwd(), ".data", "progress")) {}

  async list(internId: string): Promise<Map<string, LessonProgress>> {
    if (!/^[A-Za-z0-9_-]+$/.test(internId)) throw new Error("Invalid intern ID");
    let raw: string;
    try {
      raw = await readFile(join(this.dir, `${internId}.json`), "utf8");
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") return new Map();
      throw e;
    }
    const records = z.array(LessonProgressSchema).parse(JSON.parse(raw));
    return new Map(records.map((r) => [r.lessonId, r]));
  }
}

export const progressStore: ProgressStore = new LocalJsonProgressStore();
