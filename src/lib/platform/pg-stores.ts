/**
 * Postgres (Neon) versions of the progress, work, settings and file stores. Same interfaces
 * as the local development adapters; every record is validated on the way in and out.
 */
import { randomBytes } from "node:crypto";
import type { Pool } from "pg";
import { z } from "zod";
import { checkFile, cleanFileName } from "../evidence-rules";
import { withInternLock } from "./db";
import { FileRefSchema, FileRefusedError, type FileRef, type FileStorage } from "./files";
import { LessonProgressSchema, type LessonProgress, type ProgressStore } from "./progress";
import { defaultSettings, SettingsSchema, type Settings, type SettingsStore } from "./settings";
import { emptyWork, WorkSchema, type Share, type Work, type WorkStore } from "./work";

export class PgProgressStore implements ProgressStore {
  constructor(private readonly db: Pool) {}

  async list(internId: string): Promise<Map<string, LessonProgress>> {
    const { rows } = await this.db.query<{ data: unknown }>("select data from genie_lesson_progress where intern_id = $1", [internId]);
    return new Map(rows.map((r) => LessonProgressSchema.parse(r.data)).map((p) => [p.lessonId, p]));
  }

  async get(internId: string, lessonId: string): Promise<LessonProgress | undefined> {
    const { rows } = await this.db.query<{ data: unknown }>("select data from genie_lesson_progress where intern_id = $1 and lesson_id = $2", [internId, lessonId]);
    return rows[0] ? LessonProgressSchema.parse(rows[0].data) : undefined;
  }

  update(internId: string, lessonId: string, change: (current: LessonProgress | undefined) => LessonProgress): Promise<LessonProgress> {
    return withInternLock(this.db, internId, async (c) => {
      const { rows } = await c.query<{ data: unknown }>("select data from genie_lesson_progress where intern_id = $1 and lesson_id = $2", [internId, lessonId]);
      const next = LessonProgressSchema.parse(change(rows[0] ? LessonProgressSchema.parse(rows[0].data) : undefined));
      if (next.lessonId !== lessonId) throw new Error("A progress change cannot move a record to another lesson");
      await c.query(
        `insert into genie_lesson_progress (intern_id, lesson_id, data, updated_at) values ($1, $2, $3, now())
         on conflict (intern_id, lesson_id) do update set data = excluded.data, updated_at = now()`,
        [internId, lessonId, JSON.stringify(next)],
      );
      return next;
    });
  }
}

export class PgWorkStore implements WorkStore {
  constructor(private readonly db: Pool) {}

  async get(internId: string): Promise<Work> {
    const { rows } = await this.db.query<{ data: unknown }>("select data from genie_work where intern_id = $1", [internId]);
    return rows[0] ? WorkSchema.parse(rows[0].data) : emptyWork();
  }

  update<R>(internId: string, change: (work: Work) => { next: Work; result: R }): Promise<R> {
    return withInternLock(this.db, internId, async (c) => {
      const { rows } = await c.query<{ data: unknown }>("select data from genie_work where intern_id = $1", [internId]);
      const { next, result } = change(rows[0] ? WorkSchema.parse(rows[0].data) : emptyWork());
      const valid = WorkSchema.parse(next);
      await c.query(
        `insert into genie_work (intern_id, data, updated_at) values ($1, $2, now())
         on conflict (intern_id) do update set data = excluded.data, updated_at = now()`,
        [internId, JSON.stringify(valid)],
      );
      // Keep the token index in step with the work record, in the same transaction.
      await c.query("delete from genie_share_tokens where intern_id = $1", [internId]);
      for (const s of valid.shares) {
        await c.query("insert into genie_share_tokens (token, intern_id, lesson_id, revoked_at) values ($1, $2, $3, $4)", [s.token, internId, s.lessonId, s.revokedAt]);
      }
      return result;
    });
  }

  async findShare(token: string): Promise<{ internId: string; share: Share } | null> {
    if (!/^[A-Za-z0-9_-]{32}$/.test(token)) return null;
    const { rows } = await this.db.query<{ intern_id: string }>("select intern_id from genie_share_tokens where token = $1 and revoked_at is null", [token]);
    const internId = rows[0]?.intern_id;
    if (!internId) return null;
    const share = (await this.get(internId)).shares.find((s) => s.token === token && !s.revokedAt);
    return share ? { internId, share } : null;
  }
}

export class PgSettingsStore implements SettingsStore {
  constructor(private readonly db: Pool) {}

  async get(internId: string): Promise<Settings> {
    const { rows } = await this.db.query<{ data: unknown }>("select data from genie_settings where intern_id = $1", [internId]);
    return rows[0] ? SettingsSchema.parse(rows[0].data) : defaultSettings();
  }

  update(internId: string, change: (s: Settings) => Settings): Promise<Settings> {
    return withInternLock(this.db, internId, async (c) => {
      const { rows } = await c.query<{ data: unknown }>("select data from genie_settings where intern_id = $1", [internId]);
      const next = SettingsSchema.parse(change(rows[0] ? SettingsSchema.parse(rows[0].data) : defaultSettings()));
      await c.query(
        `insert into genie_settings (intern_id, data, updated_at) values ($1, $2, now())
         on conflict (intern_id) do update set data = excluded.data, updated_at = now()`,
        [internId, JSON.stringify(next)],
      );
      return next;
    });
  }
}

const FileRow = z.object({ id: z.string(), name: z.string(), size: z.number(), type: z.string(), bytes: z.instanceof(Buffer) });

export class PgFileStorage implements FileStorage {
  constructor(private readonly db: Pool) {}

  async save(internId: string, name: string, bytes: Uint8Array): Promise<FileRef> {
    const clean = cleanFileName(name);
    const check = checkFile(clean, bytes.byteLength);
    if (!check.ok) throw new FileRefusedError(check.reason);
    const ref: FileRef = { id: randomBytes(16).toString("hex"), name: clean, size: bytes.byteLength, type: check.type };
    await this.db.query("insert into genie_files (id, intern_id, name, size, type, bytes) values ($1, $2, $3, $4, $5, $6)", [ref.id, internId, ref.name, ref.size, ref.type, Buffer.from(bytes)]);
    return ref;
  }

  async read(internId: string, id: string): Promise<{ ref: FileRef; bytes: Uint8Array } | null> {
    if (!/^[0-9a-f]{32}$/.test(id)) return null;
    const { rows } = await this.db.query("select id, name, size, type, bytes from genie_files where intern_id = $1 and id = $2", [internId, id]);
    if (!rows[0]) return null;
    const row = FileRow.parse(rows[0]);
    return { ref: FileRefSchema.parse({ id: row.id, name: row.name, size: row.size, type: row.type }), bytes: new Uint8Array(row.bytes) };
  }
}
