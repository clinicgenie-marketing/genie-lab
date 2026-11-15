/**
 * Submissions, drafts, recorded review decisions and share links, behind an interface.
 * Only the local development adapter exists; the hosted database is not chosen yet.
 */
import { randomBytes } from "node:crypto";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import { COMMIT } from "../evidence-rules";
import { FileRefSchema } from "./files";
import { dataDir, jsonFile, SAFE_ID } from "./json-file";

const LessonId = z.string().regex(/^\d+\.\d+$/);
const ItemId = z.string().regex(/^e\d+$/);

export const EvidenceItemSchema = z.discriminatedUnion("kind", [
  z.object({ itemId: ItemId, kind: z.literal("text"), text: z.string().trim().min(1).max(20000) }),
  z.object({ itemId: ItemId, kind: z.literal("link"), url: z.string().url().max(2000) }),
  z.object({ itemId: ItemId, kind: z.literal("file"), file: FileRefSchema }),
]);
export type EvidenceItem = z.infer<typeof EvidenceItemSchema>;

/** A draft keeps whatever has been entered so far, complete or not. */
export const DraftItemSchema = z.object({
  itemId: ItemId,
  kind: z.enum(["text", "link", "file"]),
  text: z.string().max(20000).optional(),
  url: z.string().max(2000).optional(),
  file: FileRefSchema.optional(),
});
export type DraftItem = z.infer<typeof DraftItemSchema>;

export const SubmissionSchema = z.object({
  id: z.string().regex(/^[0-9a-f]{16}$/),
  lessonId: LessonId,
  version: z.number().int().min(1),
  items: z.array(EvidenceItemSchema).min(1),
  gitCommit: z.string().regex(COMMIT).nullable(),
  submittedAt: z.string(),
});
export type Submission = z.infer<typeof SubmissionSchema>;

export const DraftSchema = z.object({ lessonId: LessonId, items: z.array(DraftItemSchema), gitCommit: z.string().max(40), savedAt: z.string() });
export type Draft = z.infer<typeof DraftSchema>;

export const DECISIONS = ["awaiting_review", "changes_requested", "accepted"] as const;
export const ReviewDecisionSchema = z.object({
  id: z.string().regex(/^[0-9a-f]{16}$/),
  lessonId: LessonId,
  /** The submission version the decision is about. */
  version: z.number().int().min(1),
  decision: z.enum(DECISIONS),
  reviewerName: z.string().trim().min(1).max(100),
  notes: z.string().max(5000),
  recordedAt: z.string(),
});
export type ReviewDecision = z.infer<typeof ReviewDecisionSchema>;

export const ShareSchema = z.object({ token: z.string().regex(/^[A-Za-z0-9_-]{32}$/), lessonId: LessonId, createdAt: z.iso.datetime(), revokedAt: z.iso.datetime().nullable() });
export type Share = z.infer<typeof ShareSchema>;

export const WorkSchema = z.object({
  drafts: z.array(DraftSchema),
  submissions: z.array(SubmissionSchema),
  decisions: z.array(ReviewDecisionSchema),
  shares: z.array(ShareSchema),
});
export type Work = z.infer<typeof WorkSchema>;

export const emptyWork = (): Work => ({ drafts: [], submissions: [], decisions: [], shares: [] });
export const newId = () => randomBytes(8).toString("hex");
/** An unguessable share token: 24 random bytes, 32 URL-safe characters. */
export const newShareToken = () => randomBytes(24).toString("base64url");

export interface WorkStore {
  get(internId: string): Promise<Work>;
  /** Applies a change and resolves once it is stored. */
  update<R>(internId: string, change: (work: Work) => { next: Work; result: R }): Promise<R>;
  /** The intern and share for a live (not revoked) token, or null. */
  findShare(token: string): Promise<{ internId: string; share: Share } | null>;
}

export class LocalJsonWorkStore implements WorkStore {
  constructor(private readonly dir = join(dataDir(), "work")) {}

  private file(internId: string) {
    if (!SAFE_ID.test(internId)) throw new Error("Invalid intern ID");
    return jsonFile(join(this.dir, `${internId}.json`), WorkSchema, emptyWork);
  }

  get(internId: string) {
    return this.file(internId).read();
  }

  update<R>(internId: string, change: (work: Work) => { next: Work; result: R }): Promise<R> {
    return this.file(internId).update(change);
  }

  async findShare(token: string) {
    if (!/^[A-Za-z0-9_-]{32}$/.test(token)) return null;
    let names: string[];
    try {
      names = await readdir(this.dir);
    } catch {
      return null;
    }
    for (const name of names) {
      if (!name.endsWith(".json")) continue;
      const internId = name.slice(0, -5);
      if (!SAFE_ID.test(internId)) continue;
      const share = (await this.get(internId)).shares.find((s) => s.token === token && !s.revokedAt);
      if (share) return { internId, share };
    }
    return null;
  }
}

