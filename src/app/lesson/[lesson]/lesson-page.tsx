import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLessonBySlug } from "@/lib/content/curriculum";
import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export type LessonRouteProps = { params: Promise<{ lesson: string }> };

/** Shared by the lesson, task, submit and check routes while they are empty states. */
export function lessonMetadata(part?: string) {
  return async ({ params }: LessonRouteProps): Promise<Metadata> => {
    const lesson = getLessonBySlug((await params).lesson);
    if (!lesson) return { title: "Page not found" };
    const base = `Lesson ${lesson.id}: ${lesson.title}`;
    return { title: part ? `${part} · ${base}` : base };
  };
}

export function lessonPlaceholder(part: string | null, what: string) {
  return async function LessonPlaceholderPage({ params }: LessonRouteProps) {
    const lesson = getLessonBySlug((await params).lesson);
    if (!lesson) notFound();
    const eyebrow = `Day ${lesson.day} · Lesson ${lesson.id}`;
    return (
      <>
        {part ? (
          <PageHeader eyebrow={`${eyebrow}: ${lesson.title}`} title={part} />
        ) : (
          <PageHeader eyebrow={eyebrow} title={lesson.title} titleStyle="lesson-title" />
        )}
        <NotBuilt what={what} />
      </>
    );
  };
}
