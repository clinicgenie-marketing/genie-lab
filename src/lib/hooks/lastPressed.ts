/**
 * The control most recently pressed with a pointer. Some browsers (Safari on macOS) do not
 * focus a button when it is clicked, so a dialog cannot rely on document.activeElement to
 * know where to return focus. Dialogs fall back to this.
 */
let last: HTMLElement | null = null;
let listening = false;

export function trackLastPressed() {
  if (listening || typeof document === "undefined") return;
  listening = true;
  document.addEventListener(
    "pointerdown",
    (e) => {
      const el = (e.target as Element | null)?.closest?.("button, a[href], [role='button']");
      if (el instanceof HTMLElement) last = el;
    },
    true,
  );
}

/** Where focus should go back to when a dialog closes. */
export function returnTarget(): HTMLElement | null {
  const active = document.activeElement;
  if (active instanceof HTMLElement && active !== document.body) return active;
  return last && document.contains(last) ? last : null;
}
