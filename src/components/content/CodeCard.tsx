"use client";

import { useEffect, useRef, useState } from "react";
import { Code, FileText, MessageSquareText, SquareTerminal, type LucideIcon } from "lucide-react";
import type { CodeBlock } from "@/lib/content/model";

const LANG_NAMES: Record<string, string> = { tsx: "TSX", ts: "TypeScript", css: "CSS", html: "HTML" };

type CardKind = { label: string; icon: LucideIcon; copy: string; noun: string; afterPlaceholder?: string };

function kindOf(block: CodeBlock): CardKind {
  switch (block.kind) {
    case "prompt":
      return { label: "Paste into Claude Code", icon: MessageSquareText, copy: "Copy prompt", noun: "prompt", afterPlaceholder: "Replace the highlighted parts before sending" };
    case "command":
      return { label: "Run in your terminal", icon: SquareTerminal, copy: "Copy command", noun: "command", afterPlaceholder: "Replace the highlighted parts before running" };
    case "template":
      return { label: "Template to copy", icon: FileText, copy: "Copy template", noun: "template", afterPlaceholder: "Replace the highlighted parts before sending" };
    case "example":
      return { label: `${LANG_NAMES[block.lang ?? ""] ?? block.lang} example`, icon: Code, copy: "Copy code", noun: "code" };
    default:
      return { label: "Code", icon: Code, copy: "Copy code", noun: "code" };
  }
}

type CopyState = "idle" | "copied" | "failed";

/**
 * The design system's CodePanel for prompts, commands, templates and code examples.
 * Copy never runs anything. "Copied" appears only after the clipboard write succeeds;
 * otherwise the learner is told to select the text, which always stays selectable.
 */
export function CodeCard({ block }: { block: CodeBlock }) {
  const kind = kindOf(block);
  const Icon = kind.icon;
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    clearTimeout(timer.current);
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(block.value);
      setState("copied");
    } catch {
      setState("failed");
    }
    timer.current = setTimeout(() => setState("idle"), 8000);
  }

  const wraps = block.kind === "prompt" || block.kind === "template" || block.kind === "plain";
  return (
    <figure className={`gl-code gl-code--${block.kind}`}>
      <div className="ob-code" data-surface="dark">
        <div className="ob-code__head">
          <figcaption className="ob-code__lang gl-code__label">
            <Icon size={20} aria-hidden="true" focusable="false" />
            {kind.label}
          </figcaption>
          <button type="button" className="ob-btn ob-btn--on-dark" onClick={copy}>
            {kind.copy}
          </button>
        </div>
        {block.hasPlaceholders ? <p className="ob-p gl-code__note">Highlighted parts are placeholders to replace.</p> : null}
        <pre
          className={wraps ? "gl-code__pre gl-code__pre--wrap" : "gl-code__pre"}
          {...(wraps ? {} : { tabIndex: 0, role: "region", "aria-label": `${kind.label}, scrollable` })}
        >
          <code>
            {block.segments
              ? block.segments.map((s, i) => ("placeholder" in s ? <mark key={i} className="gl-ph">{s.placeholder}</mark> : <span key={i}>{s.text}</span>))
              : block.value}
          </code>
        </pre>
      </div>
      <p className="ob-p t-label-meta gl-code__status" role="status">
        {state === "copied" ? (block.hasPlaceholders && kind.afterPlaceholder ? `Copied. ${kind.afterPlaceholder}.` : "Copied") : null}
        {state === "failed" ? `Copy didn't work. Select the ${kind.noun} and copy it yourself.` : null}
      </p>
    </figure>
  );
}
