"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Tooltip } from "./Tooltip";

/**
 * A circular icon-only link on the dark bar, with an accessible name and a tooltip.
 * The icon is passed as an element so server components can use this too.
 */
export function IconLink({ href, label, icon, align = "end" }: { href: string; label: string; icon: ReactNode; align?: "center" | "end" }) {
  return (
    <Tooltip label={label} align={align}>
      <Link className="ob-btn ob-btn--on-dark ob-btn--icon" href={href} aria-label={label}>
        {icon}
      </Link>
    </Tooltip>
  );
}
