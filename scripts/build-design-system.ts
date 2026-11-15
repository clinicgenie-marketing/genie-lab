/**
 * Builds the app's CSS from the read-only design system snapshot in design-system/.
 *
 *   design-system/tokens.json -> src/styles/generated/tokens.css  (custom properties and type classes)
 *   design-system/bundle.css  -> src/styles/generated/ds.css      (component classes)
 *
 * Values are copied as they are, with two mechanical changes:
 * - font-size and line-height in px become the same size in rem (16px = 1rem), so the
 *   text size setting can scale text by changing the root font size;
 * - bundle.css's Google Fonts @import is dropped, because the app self-hosts the same
 *   faces through next/font. A family whose stack starts with a named face reads that
 *   face from --font-face-<family> first, falling back to the stack as written.
 *
 * Run with: node scripts/build-design-system.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

type Entry = { name: string; value: unknown; usage?: string };
type TypeStyle = { name: string; family?: string; fontSize: string; lineHeight: string; fontWeight: number | string };
type Tokens = {
  color: { themes: { id: string }[]; tokens: Entry[] };
  type: { families: Record<string, string>; groups: { name: string; family: string; styles: TypeStyle[] }[] };
  [family: string]: unknown;
};

/** Below this width the design system switches to the matching -sm type style. */
export const SMALL_SCREEN_MAX = "767.98px";
const ROOT_PX = 16;

export function pxToRem(value: string): string {
  const m = /^(\d+(?:\.\d+)?)px$/.exec(value.trim());
  if (!m) return value;
  const rem = Number(m[1]) / ROOT_PX;
  return `${Number(rem.toFixed(4))}rem`;
}

/** Converts px font sizes and line heights inside a stylesheet; leaves every other value alone. */
export function remifyTypography(css: string): string {
  return css.replace(/(font-size|line-height)(\s*:\s*)(\d+(?:\.\d+)?px)/g, (_m, prop: string, sep: string, px: string) => `${prop}${sep}${pxToRem(px)}`);
}

export function dropFontImports(css: string): string {
  return css.replace(/^@import\s+url\([^)]*fonts\.googleapis\.com[^)]*\);?\s*\n/m, "");
}

function colourValue(value: unknown, themeId: string): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && themeId in value) return String((value as Record<string, unknown>)[themeId]);
  throw new Error(`Colour value has no "${themeId}" theme: ${JSON.stringify(value)}`);
}

function aliasOrValue(v: string): string {
  const alias = /^\{([A-Za-z0-9][A-Za-z0-9_.-]*)\}$/.exec(v);
  return alias ? `var(--${alias[1]})` : v;
}

export function familyStack(key: string, stack: string): string {
  const [first, ...rest] = stack.split(",").map((s) => s.trim());
  if (!first || !/^["']/.test(first)) return stack;
  return [`var(--font-face-${key}, ${first})`, ...rest].join(", ");
}

export function buildTokensCss(tokens: Tokens): string {
  const lines: string[] = ["/* Generated from design-system/tokens.json by scripts/build-design-system.ts. Do not edit. */", ":root {"];
  const theme = tokens.color.themes[0]?.id;
  if (!theme) throw new Error("tokens.json defines no colour theme");
  if (tokens.color.themes.length > 1) throw new Error("tokens.json now defines more than one theme: add theme output before building");

  lines.push("  /* Colour */");
  for (const t of tokens.color.tokens) lines.push(`  --${t.name}: ${aliasOrValue(colourValue(t.value, theme))};`);

  for (const [family, block] of Object.entries(tokens)) {
    if (["name", "version", "color", "type", "meta"].includes(family)) continue;
    const list = (block as { tokens?: Entry[] }).tokens;
    if (!Array.isArray(list)) continue;
    lines.push(`  /* ${family} */`);
    for (const t of list) lines.push(`  --${t.name}: ${String(t.value)};`);
  }

  lines.push("  /* Font families */");
  for (const [key, stack] of Object.entries(tokens.type.families)) lines.push(`  --font-${key}: ${familyStack(key, stack)};`);
  lines.push("}", "");

  // One class per type style. A base style switches to its -sm partner below 768px.
  const styles = tokens.type.groups.flatMap((g) => g.styles.map((s) => ({ ...s, family: s.family ?? g.family })));
  const byName = new Map(styles.map((s) => [s.name, s]));
  const decl = (s: TypeStyle & { family: string }) =>
    `font-family: var(--font-${s.family}); font-size: ${pxToRem(s.fontSize)}; line-height: ${pxToRem(s.lineHeight)}; font-weight: ${s.fontWeight};`;

  const small: string[] = [];
  for (const s of styles) {
    if (s.name.endsWith("-sm")) continue;
    lines.push(`.t-${s.name} { ${decl(s)} }`);
    const sm = byName.get(`${s.name}-sm`);
    if (sm) small.push(`  .t-${s.name} { ${decl(sm)} }`);
  }
  for (const s of styles) {
    if (s.name.endsWith("-sm") && !byName.has(s.name.slice(0, -3))) throw new Error(`Small style ${s.name} has no base style`);
  }
  if (small.length) lines.push("", `@media (max-width: ${SMALL_SCREEN_MAX}) {`, ...small, "}");
  return lines.join("\n") + "\n";
}

export function buildComponentCss(bundle: string): string {
  return (
    "/* Generated from design-system/bundle.css by scripts/build-design-system.ts. Do not edit. */\n" +
    remifyTypography(dropFontImports(bundle))
  );
}

function main() {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const tokens = JSON.parse(readFileSync(join(root, "design-system/tokens.json"), "utf8")) as Tokens;
  const bundle = readFileSync(join(root, "design-system/bundle.css"), "utf8");
  const out = join(root, "src/styles/generated");
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "tokens.css"), buildTokensCss(tokens));
  writeFileSync(join(out, "ds.css"), buildComponentCss(bundle));
  console.log("Design system CSS written to src/styles/generated/");
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
