"use client";

import { useCallback, useRef, useState } from "react";
import type { ProgressResult } from "@/lib/actions/progress";

export type SaveMessage = { kind: "saved" | "error"; text: string } | null;

const ERRORS: Record<Exclude<ProgressResult, { ok: true }>["error"], string> = {
  not_signed_in: "Your ticks can't be saved because you're not signed in.",
  not_available: "This lesson isn't open yet, so your ticks can't be saved.",
  invalid: "We couldn't save that tick. Reload the page, then try again.",
  save_failed: "We couldn't save your tick. Check your connection, then try again.",
};

/**
 * Ticked items for one list (task steps or completion criteria). A tick shows at once;
 * "Saved" is announced only after the server confirms, and a failed save puts the tick back.
 */
export function useTicks(initial: string[], save: (id: string, checked: boolean) => Promise<ProgressResult>, exclusive = false) {
  const [ticked, setTicked] = useState<Set<string>>(() => new Set(initial));
  const [message, setMessage] = useState<SaveMessage>(null);
  const pending = useRef(0);

  const toggle = useCallback(
    async (id: string, checked: boolean) => {
      // For a single-choice list, choosing one replaces the previous choice.
      let before = new Set<string>();
      setTicked((prev) => {
        before = prev;
        if (exclusive) return new Set(checked ? [id] : []);
        const next = new Set(prev);
        if (checked) next.add(id);
        else next.delete(id);
        return next;
      });
      pending.current += 1;
      let result: ProgressResult;
      try {
        result = await save(id, checked);
      } catch {
        result = { ok: false, error: "save_failed" };
      }
      pending.current -= 1;
      if (result.ok) {
        if (pending.current === 0) setMessage({ kind: "saved", text: "Saved" });
      } else {
        setTicked((prev) => {
          if (exclusive) return before;
          const next = new Set(prev);
          if (checked) next.delete(id);
          else next.add(id);
          return next;
        });
        setMessage({ kind: "error", text: ERRORS[result.error] });
      }
    },
    [save, exclusive],
  );

  return { ticked, toggle, message };
}
