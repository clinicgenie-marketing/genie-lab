/**
 * Parses the locked package in content/ into the typed content model and writes it to
 * src/generated/content.json. Fails on any lesson structure the parser does not recognise.
 * A lesson whose file is missing is kept in the programme as unavailable ("Coming soon").
 *
 * Run with: node scripts/build-content.ts
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CurriculumSchema } from "../src/lib/content/curriculum-schema.ts";
import { parseLesson } from "../src/lib/content/parse.ts";
import type { ContentModel, Lesson } from "../src/lib/content/model.ts";

export function lessonSlug(id: string): string {
  return id.replace(".", "-");
}

/** Builds the model from a content folder holding curriculum.json and the lesson files it lists. */
export function buildContentModel(contentDir: string): ContentModel {
  const curriculum = CurriculumSchema.parse(JSON.parse(readFileSync(join(contentDir, "curriculum.json"), "utf8")));
  const lessons: Record<string, Lesson> = {};
  const seen = new Set<string>();

  const days = [...curriculum.units]
    .sort((a, b) => a.day - b.day)
    .map((unit) => {
      const lessonSummaries = [...unit.lessons]
        .sort((a, b) => a.order - b.order)
        .map((ref) => {
          if (seen.has(ref.id)) throw new Error(`curriculum.json lists Lesson ${ref.id} twice`);
          seen.add(ref.id);
          const meta = { id: ref.id, slug: lessonSlug(ref.id), title: ref.title, day: unit.day, order: ref.order, estimatedMinutes: ref.estimated_minutes };
          const path = join(contentDir, ref.file);
          if (!existsSync(path)) return { ...meta, available: false, objectiveItems: [], requiredMaterials: [] };
          const lesson = parseLesson(readFileSync(path, "utf8"), meta);
          if (lesson.title !== ref.title) throw new Error(`Lesson ${ref.id}: the file's title "${lesson.title}" differs from curriculum.json "${ref.title}"`);
          lessons[ref.id] = lesson;
          return { ...meta, available: true, objectiveItems: lesson.objective.items, requiredMaterials: lesson.requiredMaterials };
        });
      return { n: unit.day, title: unit.title, estimatedMinutes: unit.estimated_minutes, lessons: lessonSummaries };
    });

  days.forEach((d, i) => {
    if (d.n !== i + 1) throw new Error(`curriculum.json has Day ${d.n} where Day ${i + 1} was expected`);
  });

  return { platform: { name: curriculum.platform_name, description: curriculum.platform_description }, days, lessons };
}

function main() {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const model = buildContentModel(join(root, "content"));
  const out = join(root, "src/generated");
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "content.json"), JSON.stringify(model));
  const available = model.days.flatMap((d) => d.lessons).filter((l) => l.available).length;
  const total = model.days.flatMap((d) => d.lessons).length;
  console.log(`Content model written to src/generated/content.json: ${model.days.length} days, ${available} of ${total} lessons available.`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
