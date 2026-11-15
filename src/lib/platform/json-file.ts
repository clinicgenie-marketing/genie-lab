/**
 * Local development storage helper: one JSON file per key, written one change at a time
 * per file, each write replacing the file atomically (temp file, then rename).
 */
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import type { ZodType } from "zod";

/** GENIE_LAB_DATA_DIR moves local data elsewhere, such as a throwaway folder for browser tests. */
export function dataDir(): string {
  return process.env.GENIE_LAB_DATA_DIR ?? `${process.cwd()}/.data`;
}

export const SAFE_ID = /^[A-Za-z0-9_-]+$/;

export class JsonFile<T> {
  private queue: Promise<unknown> = Promise.resolve();
  constructor(private readonly path: string, private readonly schema: ZodType<T>, private readonly empty: () => T) {}

  private async readNow(): Promise<T> {
    let raw: string;
    try {
      raw = await readFile(this.path, "utf8");
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") return this.empty();
      throw e;
    }
    return this.schema.parse(JSON.parse(raw));
  }

  /** Waits for pending writes, then reads. A corrupted file throws instead of reading as empty. */
  async read(): Promise<T> {
    await this.queue.catch(() => undefined);
    return this.readNow();
  }

  /** Applies a change and resolves only once the result is stored. */
  update<R>(change: (current: T) => { next: T; result: R }): Promise<R> {
    const run = this.queue.catch(() => undefined).then(async () => {
      const { next, result } = change(await this.readNow());
      const valid = this.schema.parse(next);
      await mkdir(dirname(this.path), { recursive: true });
      const tmp = `${this.path}.${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}.tmp`;
      await writeFile(tmp, JSON.stringify(valid, null, 2));
      await rename(tmp, this.path);
      return result;
    });
    this.queue = run;
    return run;
  }
}

/** One JsonFile per path per process, so every request shares the same write queue. */
const registry = globalThis as unknown as { __genieJsonFiles?: Map<string, JsonFile<unknown>> };
export function jsonFile<T>(path: string, schema: ZodType<T>, empty: () => T): JsonFile<T> {
  registry.__genieJsonFiles ??= new Map();
  let f = registry.__genieJsonFiles.get(path) as JsonFile<T> | undefined;
  if (!f) {
    f = new JsonFile(path, schema, empty);
    registry.__genieJsonFiles.set(path, f as JsonFile<unknown>);
  }
  return f;
}
