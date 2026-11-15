/**
 * The glossary (content/glossary.json) and project kit (config/project-kit.json).
 * Neither exists yet; until they do, the Toolkit shows "Not yet supplied". A file that
 * exists but does not match its schema throws, so a bad file is never shown silently.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";

export const GlossarySchema = z.object({
  terms: z
    .array(
      z.object({
        term: z.string().trim().min(1),
        definition: z.string().trim().min(1),
        /** Lessons that define or use the term, such as ["2.3"]. */
        lessons: z.array(z.string().regex(/^\d+\.\d+$/)).default([]),
      }),
    )
    .min(1),
});
export type Glossary = z.infer<typeof GlossarySchema>;

export const ProjectKitSchema = z.object({
  items: z
    .array(
      z.object({
        title: z.string().trim().min(1),
        description: z.string().trim().default(""),
        /** Real file type, such as "PDF" or "Figma file", as the supervisor supplies it. */
        format: z.string().trim().min(1),
        version: z.string().trim().nullable().default(null),
        url: z.string().url(),
      }),
    )
    .min(1),
});
export type ProjectKit = z.infer<typeof ProjectKitSchema>;

export const SupportSchema = z.object({
  /** How to reach the supervisor, as one or more plain sentences. */
  howToReach: z.string().trim().min(1),
  channel: z.string().trim().nullable().default(null),
});
export type Support = z.infer<typeof SupportSchema>;

async function readOptional<S extends z.ZodType>(path: string, schema: S): Promise<z.output<S> | null> {
  let raw: string;
  try {
    raw = await readFile(path, "utf8");
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw e;
  }
  return schema.parse(JSON.parse(raw));
}

export const loadGlossary = () => readOptional(join(process.cwd(), "content", "glossary.json"), GlossarySchema);
export const loadProjectKit = () => readOptional(join(process.cwd(), "config", "project-kit.json"), ProjectKitSchema);
export const loadSupport = () => readOptional(join(process.cwd(), "config", "support.json"), SupportSchema);

/** "Information architecture (IA)" becomes "information-architecture-ia", for /toolkit/glossary#ia-style links. */
export function termAnchor(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
