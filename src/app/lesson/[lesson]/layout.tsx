import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getLessonBySlug, lessons } from "@/lib/content/curriculum";
import { AppFrame } from "@/components/AppFrame";
import { LessonBar } from "@/components/LessonBar";

export const dynamicParams = false;
export function generateStaticParams() {
  return lessons.map((l) => ({ lesson: l.slug }));
}

export default async function LessonLayout({ children, params }: { children: ReactNode; params: Promise<{ lesson: string }> }) {
  const lesson = getLessonBySlug((await params).lesson);
  if (!lesson) notFound();
  return <AppFrame bar={<LessonBar lesson={lesson} />}>{children}</AppFrame>;
}
