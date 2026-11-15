import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { days, getDayFromParam } from "@/lib/content/curriculum";
import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

type Props = { params: Promise<{ n: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return days.map((d) => ({ n: String(d.n) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const day = getDayFromParam((await params).n);
  return { title: day ? `Day ${day.n}: ${day.title}` : "Page not found" };
}

export default async function DayPage({ params }: Props) {
  const day = getDayFromParam((await params).n);
  if (!day) notFound();
  return (
    <>
      <PageHeader eyebrow={`Day ${day.n} of ${days.length}`} title={day.title} />
      <NotBuilt what="This day's goal, materials, lessons and review point are added in Phase 2." />
    </>
  );
}
