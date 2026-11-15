"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { completeWelcome } from "@/lib/actions/settings";

/** Finishing or skipping the tour records it, then moves on. Separate from lesson progress. */
export function WelcomeAction({ href, label, variant }: { href: string; label: string; variant: "primary" | "tertiary" }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button"
      className={`ob-btn ob-btn--${variant}${variant === "primary" ? " ob-btn--large" : ""}`}
      disabled={busy}
      aria-busy={busy || undefined}
      onClick={async () => {
        setBusy(true);
        await completeWelcome().catch(() => undefined);
        router.push(href);
      }}
    >
      {label}
    </button>
  );
}
