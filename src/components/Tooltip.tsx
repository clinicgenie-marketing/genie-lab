"use client";

import { useState, type ReactNode } from "react";

/**
 * A visible label for an icon-only control. The control carries its own accessible name
 * (aria-label), so the bubble is hidden from assistive technology to avoid repeating it.
 * Shows on hover and keyboard focus, stays while hovered, and Escape dismisses it.
 * `suppressed` hides it while the control's own popup is open, so the two never overlap.
 */
export function Tooltip({ label, align = "center", suppressed = false, children }: { label: string; align?: "center" | "end"; suppressed?: boolean; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="gl-tip"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          setOpen(false);
        }
      }}
    >
      {children}
      <span className={`gl-tip__bubble gl-tip__bubble--${align} t-label-meta`} aria-hidden="true" hidden={!open || suppressed}>
        {label}
      </span>
    </span>
  );
}
