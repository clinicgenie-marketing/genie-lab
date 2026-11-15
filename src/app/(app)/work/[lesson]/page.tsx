import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLessonBySlug, lessons } from "@/lib/content/curriculum";
import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

type Props = { params: Promise<{ lesson: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return lessons.map((l) => ({ lesson: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lesson = getLessonBySlug((await params).lesson);
  return { title: lesson ? `Submission for Lesson ${lesson.id}` : "Page not found" };
}

export default async function SubmissionPage({ params }: Props) {
  const lesson = getLessonBySlug((await params).lesson);
  if (!lesson) notFound();
  return (
    <>
      <PageHeader eyebrow={`Day ${lesson.day} · Lesson ${lesson.id}`} title={`Submission for Lesson ${lesson.id}: ${lesson.title}`} />
      <NotBuilt what="What you sent, its versions, the share link and the recorded review outcome are added in Phase 4." />
    </>
  );
}
