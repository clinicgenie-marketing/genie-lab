/**
 * Evidence file storage, behind an interface. Only the local development adapter exists;
 * the hosted file store is not chosen yet.
 */
import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import { checkFile, cleanFileName } from "../evidence-rules";
import { dataDir, SAFE_ID } from "./json-file";

export const FileRefSchema = z.object({
  id: z.string().regex(/^[0-9a-f]{32}$/),
  name: z.string().min(1).max(200),
  size: z.number().int().positive(),
  type: z.string().min(1),
});
export type FileRef = z.infer<typeof FileRefSchema>;

export interface FileStorage {
  /** Stores a file after checking its type and size. Throws with a learner-facing reason when refused. */
  save(internId: string, name: string, bytes: Uint8Array): Promise<FileRef>;
  /** The file and its record, or null when it does not exist for this intern. */
  read(internId: string, id: string): Promise<{ ref: FileRef; bytes: Uint8Array } | null>;
}

export class FileRefusedError extends Error {}

export class LocalFileStorage implements FileStorage {
  constructor(private readonly dir = join(dataDir(), "uploads")) {}

  private folder(internId: string) {
    if (!SAFE_ID.test(internId)) throw new Error("Invalid intern ID");
    return join(this.dir, internId);
  }

  async save(internId: string, name: string, bytes: Uint8Array): Promise<FileRef> {
    const clean = cleanFileName(name);
    const check = checkFile(clean, bytes.byteLength);
    if (!check.ok) throw new FileRefusedError(check.reason);
    const ref: FileRef = { id: randomBytes(16).toString("hex"), name: clean, size: bytes.byteLength, type: check.type };
    const folder = this.folder(internId);
    await mkdir(folder, { recursive: true });
    await writeFile(join(folder, ref.id), bytes);
    await writeFile(join(folder, `${ref.id}.json`), JSON.stringify(ref));
    return ref;
  }

  async read(internId: string, id: string): Promise<{ ref: FileRef; bytes: Uint8Array } | null> {
    if (!/^[0-9a-f]{32}$/.test(id)) return null;
    const folder = this.folder(internId);
    try {
      const ref = FileRefSchema.parse(JSON.parse(await readFile(join(folder, `${id}.json`), "utf8")));
      return { ref, bytes: new Uint8Array(await readFile(join(folder, id))) };
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") return null;
      throw e;
    }
  }
}

