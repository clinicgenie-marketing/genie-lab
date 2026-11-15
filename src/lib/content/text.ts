import type { Inline } from "./model";

/** Plain text of inline content, for labels and accessible names. */
export function inlineText(inlines: Inline[]): string {
  return inlines
    .map((i) => {
      if (i.type === "text" || i.type === "inlineCode") return i.value;
      if (i.type === "break") return " ";
      return inlineText(i.children);
    })
    .join("");
}
