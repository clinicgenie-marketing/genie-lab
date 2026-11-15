import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { buildComponentCss, buildTokensCss, dropFontImports, familyStack, pxToRem, remifyTypography } from "../../scripts/build-design-system.ts";

const tokens = JSON.parse(readFileSync("design-system/tokens.json", "utf8"));
const bundle = readFileSync("design-system/bundle.css", "utf8");

describe("px to rem", () => {
  it("converts exact pixel values at 16px to 1rem", () => {
    expect(pxToRem("16px")).toBe("1rem");
    expect(pxToRem("13px")).toBe("0.8125rem");
    expect(pxToRem("29px")).toBe("1.8125rem");
  });
  it("leaves other units alone", () => {
    expect(pxToRem("1.5")).toBe("1.5");
    expect(pxToRem("50%")).toBe("50%");
  });
  it("only touches font-size and line-height", () => {
    const css = ".a { padding: 12px; font-size: 14px; line-height: 20px; min-height: 44px; }";
    expect(remifyTypography(css)).toBe(".a { padding: 12px; font-size: 0.875rem; line-height: 1.25rem; min-height: 44px; }");
  });
});

describe("fonts", () => {
  it("drops the Google Fonts import and nothing else", () => {
    const out = dropFontImports(bundle);
    expect(out).not.toMatch(/fonts\.googleapis\.com/);
    expect(bundle.length - out.length).toBeLessThan(250);
  });
  it("reads a named face from its next/font variable first", () => {
    expect(familyStack("heading", '"Bricolage Grotesque", system-ui, sans-serif')).toBe('var(--font-face-heading, "Bricolage Grotesque"), system-ui, sans-serif');
    expect(familyStack("code", "ui-monospace, SFMono-Regular, Consolas, monospace")).toBe("ui-monospace, SFMono-Regular, Consolas, monospace");
  });
});

describe("tokens.css", () => {
  const css = buildTokensCss(tokens);
  it("emits every colour, spacing, radius, shadow and size token once", () => {
    const names: string[] = [
      ...tokens.color.tokens,
      ...tokens.spacing.tokens,
      ...tokens.radius.tokens,
      ...tokens.shadow.tokens,
      ...tokens.size.tokens,
    ].map((t: { name: string }) => t.name);
    for (const n of names) expect(css.match(new RegExp(`--${n}:`, "g")), n).toHaveLength(1);
  });
  it("keeps token values exactly", () => {
    expect(css).toContain("--ink: #171717;");
    expect(css).toContain("--width-prose: 760px;");
    expect(css).toContain("--radius-button: 15px;");
  });
  it("switches to the -sm styles below 768px", () => {
    const [base, small] = css.split("@media (max-width: 767.98px)");
    expect(base).toContain(".t-lesson-body { font-family: var(--font-body); font-size: 1.0625rem; line-height: 1.8125rem;");
    expect(small).toContain(".t-lesson-body { font-family: var(--font-body); font-size: 1rem; line-height: 1.75rem;");
    expect(base).not.toMatch(/\.t-[a-z-]+-sm /);
  });
});

describe("ds.css", () => {
  const css = buildComponentCss(bundle);
  it("has no pixel font sizes or line heights left", () => {
    expect(css).not.toMatch(/(font-size|line-height)\s*:\s*\d+(\.\d+)?px/);
  });
  it("keeps every component class from the bundle", () => {
    const classes = (s: string) => new Set(s.match(/\.ob-[a-z0-9_-]+/g));
    expect(classes(css)).toEqual(classes(bundle));
  });
});
