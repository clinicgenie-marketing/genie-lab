"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { trapTab } from "@/lib/hooks/trapTab";
import { returnTarget, trackLastPressed } from "@/lib/hooks/lastPressed";

/**
 * A centred modal dialog for confirmations only, never for moving between pages.
 * Native <dialog>: contained focus, inert page, Escape closes, focus returns to the trigger.
 */
export function Dialog({ open, onClose, title, children, busy = false }: { open: boolean; onClose: () => void; title: string; children: ReactNode; busy?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => trackLastPressed(), []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      returnTo.current = returnTarget();
      d.showModal();
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="gl-dialog"
      aria-labelledby={titleId}
      onClose={() => {
        onClose();
        // Return focus without scrolling, so closing keeps the reader's place on the page.
        returnTo.current?.focus({ preventScroll: true });
      }}
      onCancel={(e) => {
        e.preventDefault();
        if (!busy) onClose();
      }}
      onKeyDown={trapTab}
    >
      <div className="gl-dialog__panel">
        <h2 id={titleId} className="ob-h t-card-title">
          {title}
        </h2>
        {children}
      </div>
    </dialog>
  );
}
