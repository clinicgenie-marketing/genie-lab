import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolkitArea, toolkitAreas } from "@/lib/toolkit";
import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

type Props = { params: Promise<{ area: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return toolkitAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getToolkitArea((await params).area);
  return { title: area ? `${area.label} · Toolkit` : "Page not found" };
}

export default async function ToolkitAreaPage({ params }: Props) {
  const area = getToolkitArea((await params).area);
  if (!area) notFound();
  return (
    <>
      <PageHeader eyebrow="Toolkit" title={area.label} />
      <NotBuilt what="This Toolkit area is added in Phase 5." />
    </>
  );
}
