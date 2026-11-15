/**
 * Lesson progress storage, behind an interface. Only the local development adapter
 * exists; the hosted database is not chosen yet.
 */
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
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
  /** One lesson's record, or undefined when the intern has none. */
  get(internId: string, lessonId: string): Promise<LessonProgress | undefined>;
  /**
   * Reads the lesson's record (or undefined), applies the change and saves the result.
   * Resolves only once the change is stored, so callers can confirm "Saved" truthfully.
   */
  update(internId: string, lessonId: string, change: (current: LessonProgress | undefined) => LessonProgress): Promise<LessonProgress>;
}

const SAFE_ID = /^[A-Za-z0-9_-]+$/;

/**
 * Local development: one JSON file per intern under .data/progress/. Writes for the same
 * intern run one at a time, and each write replaces the file atomically (temp file, then rename).
 */
export class LocalJsonProgressStore implements ProgressStore {
  private readonly queues = new Map<string, Promise<unknown>>();

  /** GENIE_LAB_DATA_DIR moves local data elsewhere, such as a throwaway folder for browser tests. */
  constructor(private readonly dir = join(process.env.GENIE_LAB_DATA_DIR ?? join(process.cwd(), ".data"), "progress")) {}

  private file(internId: string) {
    if (!SAFE_ID.test(internId)) throw new Error("Invalid intern ID");
    return join(this.dir, `${internId}.json`);
  }

  private async read(internId: string): Promise<LessonProgress[]> {
    let raw: string;
    try {
      raw = await readFile(this.file(internId), "utf8");
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
      throw e;
    }
    return z.array(LessonProgressSchema).parse(JSON.parse(raw));
  }

  async list(internId: string): Promise<Map<string, LessonProgress>> {
    await this.queues.get(internId);
    return new Map((await this.read(internId)).map((r) => [r.lessonId, r]));
  }

  async get(internId: string, lessonId: string): Promise<LessonProgress | undefined> {
    return (await this.list(internId)).get(lessonId);
  }

  update(internId: string, lessonId: string, change: (current: LessonProgress | undefined) => LessonProgress): Promise<LessonProgress> {
    const previous = this.queues.get(internId) ?? Promise.resolve();
    const run = previous.catch(() => undefined).then(async () => {
      const records = await this.read(internId);
      const next = LessonProgressSchema.parse(change(records.find((r) => r.lessonId === lessonId)));
      if (next.lessonId !== lessonId) throw new Error("A progress change cannot move a record to another lesson");
      const updated = [...records.filter((r) => r.lessonId !== lessonId), next].sort((a, b) => a.lessonId.localeCompare(b.lessonId, "en", { numeric: true }));
      await mkdir(this.dir, { recursive: true });
      const target = this.file(internId);
      const tmp = `${target}.${process.pid}.${Date.now()}.tmp`;
      await writeFile(tmp, JSON.stringify(updated, null, 2));
      await rename(tmp, target);
      return next;
    });
    this.queues.set(internId, run);
    return run;
  }
}

/** One store per server process, so the write queue is shared by every request. */
const globalStore = globalThis as unknown as { __genieProgressStore?: ProgressStore };
export const progressStore: ProgressStore = (globalStore.__genieProgressStore ??= new LocalJsonProgressStore());
