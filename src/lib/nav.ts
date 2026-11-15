/** The four main destinations, in the fixed order the design system and IA plan require. */
export const mainNav = [
  { label: "Home", href: "/home", section: "/home" },
  { label: "Syllabus", href: "/syllabus", section: "/syllabus" },
  { label: "My work", href: "/work", section: "/work" },
  { label: "Toolkit", href: "/toolkit/prompts", section: "/toolkit" },
] as const;

/** Day pages belong to the Syllabus, so the Syllabus item stays marked while on one. */
const sectionAliases: Record<string, string> = { "/day": "/syllabus" };

/**
 * How a main item relates to the current path: "page" when it is the page itself,
 * "true" when the path is inside its section, false otherwise.
 */
export function navCurrent(section: string, href: string, pathname: string): "page" | "true" | false {
  if (pathname === href) return "page";
  const first = "/" + (pathname.split("/")[1] ?? "");
  const owner = sectionAliases[first] ?? first;
  return owner === section ? "true" : false;
}
