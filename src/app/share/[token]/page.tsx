import type { Metadata } from "next";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { getLesson } from "@/lib/content/curriculum";
import { workStore } from "@/lib/platform/work";
import { submissionsFor } from "@/lib/work-rules";
import { PageHeader } from "@/components/PageHeader";
import { EvidenceView } from "@/components/work/EvidenceView";
import { ShareShell } from "./shell";

export const metadata: Metadata = {
  title: "Shared submission",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

/** Read-only page for a supervisor who opens a share link. No editing, no navigation. */
export default async function SharePage({ params }: { params: Promise<{ token: string }> }) {
  await connection();
  const { token } = await params;
  const found = await workStore.findShare(token);
  if (!found) notFound();
  const lesson = getLesson(found.share.lessonId);
  const versions = submissionsFor(await workStore.get(found.internId), found.share.lessonId);
  if (!lesson || !versions.length) notFound();
  const [latest, ...earlier] = versions;
  const fileHref = (id: string) => `/share/${token}/files/${id}`;
  return (
    <ShareShell>
      <PageHeader
        eyebrow={`Shared submission · Day ${lesson.day} · Lesson ${lesson.id}`}
        title={lesson.title}
        lead="A read-only copy of the evidence an intern submitted for this lesson. Nothing on this page can be changed."
      />
      <section className="gl-section" aria-labelledby="latest">
        <h2 id="latest" className="ob-h t-section-heading">
          {earlier.length ? `Latest version (${latest!.version})` : "Submitted evidence"}
        </h2>
        <EvidenceView lesson={lesson} submission={latest!} fileHref={fileHref} />
      </section>
      {earlier.length ? (
        <section className="gl-section" aria-labelledby="earlier">
          <h2 id="earlier" className="ob-h t-section-heading">
            Earlier versions
          </h2>
          {earlier.map((v) => (
            <details key={v.id} className="ob-card ob-card--outlined gl-version">
              <summary className="ob-h t-card-title">Version {v.version}</summary>
              <EvidenceView lesson={lesson} submission={v} fileHref={fileHref} />
            </details>
          ))}
        </section>
      ) : null}
    </ShareShell>
  );
}
