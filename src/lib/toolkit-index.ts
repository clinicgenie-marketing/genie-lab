/**
 * The Toolkit's prompt library, command sheet and templates, collected from the parsed
 * lessons. Every count shown comes from here; nothing is typed in by hand.
 */
import { days, getLesson } from "./content/curriculum";
import type { Block, CodeBlock, CodeKind, Lesson } from "./content/model";

export type ToolkitEntry = {
  key: string;
  lessonId: string;
  lessonTitle: string;
  day: number;
  /** Where the block sits, for the link back. */
  where: string;
  href: string;
  block: CodeBlock;
};

export type ToolkitGroup = { day: number; title: string; entries: ToolkitEntry[] };

function codeIn(blocks: Block[]): CodeBlock[] {
  return blocks.flatMap((b) => (b.type === "code" ? [b] : b.type === "list" ? b.items.flatMap((i) => codeIn(i.children)) : b.type === "blockquote" ? codeIn(b.children) : []));
}

function locations(lesson: Lesson): { where: string; href: string; blocks: Block[] }[] {
  const base = `/lesson/${lesson.slug}`;
  return [
    ...lesson.sections.map((s) => ({ where: `Section ${s.number}: ${s.title}`, href: `${base}#section-${s.number}`, blocks: s.blocks })),
    { where: "Your task", href: `${base}/task`, blocks: [...lesson.task.before, ...lesson.task.steps.flatMap((s) => s.children), ...lesson.task.after] },
    { where: "Submit evidence", href: `${base}/submit`, blocks: [...lesson.submission.intro, ...lesson.submission.items.flatMap((s) => s.children), ...lesson.submission.after] },
    { where: "Final self-check", href: `${base}/task`, blocks: [...lesson.criteria.intro, ...lesson.criteria.items.flatMap((s) => s.children), ...lesson.criteria.after] },
    { where: "Knowledge check", href: `${base}/check`, blocks: [...lesson.knowledgeCheck.intro, ...lesson.knowledgeCheck.questions.flatMap((q) => q.children)] },
    ...(lesson.furtherReading ? [{ where: "Further reading", href: `${base}#section-${lesson.sections[lesson.sections.length - 1]!.number}`, blocks: lesson.furtherReading.blocks }] : []),
  ];
}

export function toolkitGroups(kind: CodeKind): ToolkitGroup[] {
  return days
    .map((d) => ({
      day: d.n,
      title: d.title,
      entries: d.lessons.flatMap((ref) => {
        const lesson = getLesson(ref.id);
        if (!lesson) return [];
        return locations(lesson).flatMap((loc) =>
          codeIn(loc.blocks)
            .filter((b) => b.kind === kind)
            .map((block, i) => ({ key: `${lesson.id}-${loc.where}-${i}`, lessonId: lesson.id, lessonTitle: lesson.title, day: d.n, where: loc.where, href: loc.href, block })),
        );
      }),
    }))
    .filter((g) => g.entries.length);
}

export function toolkitCount(kind: CodeKind): number {
  return toolkitGroups(kind).reduce((n, g) => n + g.entries.length, 0);
}
