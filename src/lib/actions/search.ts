"use server";

import { days, getLesson } from "@/lib/content/curriculum";
import { toolkitAreas } from "@/lib/toolkit";
import { toolkitGroups } from "@/lib/toolkit-index";
import { loadGlossary, termAnchor } from "@/lib/toolkit-config";

export type SearchResult = { area: string; title: string; snippet: string; href: string };
type Entry = SearchResult & { haystack: string };

let cache: Entry[] | null = null;

async function index(): Promise<Entry[]> {
  if (cache) return cache;
  const entries: Entry[] = [];
  for (const a of toolkitAreas) entries.push({ area: "Toolkit", title: a.label, snippet: "", href: `/toolkit/${a.slug}`, haystack: a.label });
  for (const d of days) {
    for (const ref of d.lessons) {
      const l = getLesson(ref.id);
      const sections = l ? l.sections.map((s) => s.title).join(" · ") : "";
      entries.push({ area: `Lesson, Day ${d.n}`, title: `Lesson ${ref.id}: ${ref.title}`, snippet: sections.slice(0, 160), href: `/lesson/${ref.slug}`, haystack: `${ref.id} ${ref.title} ${sections}` });
    }
  }
  for (const [kind, area] of [["prompt", "Prompt"], ["command", "Command"], ["template", "Template"]] as const) {
    for (const g of toolkitGroups(kind)) {
      for (const e of g.entries) {
        const first = e.block.value.split("\n").find((x) => x.trim()) ?? "";
        entries.push({ area, title: `Lesson ${e.lessonId} · ${e.where}`, snippet: first.slice(0, 160), href: e.href, haystack: `${e.block.value} ${e.lessonTitle} ${e.where}` });
      }
    }
  }
  const glossary = await loadGlossary();
  for (const t of glossary?.terms ?? []) entries.push({ area: "Glossary", title: t.term, snippet: t.definition.slice(0, 160), href: `/toolkit/glossary#${termAnchor(t.term)}`, haystack: `${t.term} ${t.definition}` });
  cache = entries.map((e) => ({ ...e, haystack: e.haystack.toLowerCase() }));
  return cache;
}

/** Up to ten matches; every word of the query must appear. Titles that match rank first. */
export async function searchToolkit(query: string): Promise<SearchResult[]> {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean).slice(0, 8);
  if (!words.length || query.length > 200) return [];
  const all = await index();
  return all
    .filter((e) => words.every((w) => e.haystack.includes(w)))
    .map((e) => ({ e, score: words.filter((w) => e.title.toLowerCase().includes(w)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ e }) => ({ area: e.area, title: e.title, snippet: e.snippet, href: e.href }));
}
