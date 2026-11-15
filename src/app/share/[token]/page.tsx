import type { Metadata } from "next";
import { platform } from "@/lib/content/curriculum";
import { AppFrame } from "@/components/AppFrame";
import { PageHeader } from "@/components/PageHeader";
import { NotBuilt } from "@/components/NotBuilt";

export const metadata: Metadata = {
  title: "Shared submission",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};

/** Read-only page for a supervisor who opens a link. No navigation and no sign-in. */
export default function SharePage() {
  return (
    <AppFrame
      bar={
        <header className="ob-topbar" data-surface="dark">
          <p className="ob-brand ob-p">{platform.name}</p>
        </header>
      }
    >
      <PageHeader title="Shared submission" />
      <NotBuilt what="Read-only shared submissions are added in Phase 4." />
    </AppFrame>
  );
}
