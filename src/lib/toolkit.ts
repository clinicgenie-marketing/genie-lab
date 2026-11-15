export const toolkitAreas = [
  { slug: "prompts", label: "Prompt library" },
  { slug: "commands", label: "Command sheet" },
  { slug: "templates", label: "Templates" },
  { slug: "glossary", label: "Glossary" },
  { slug: "project-kit", label: "Project kit" },
  { slug: "statuses", label: "Statuses explained" },
] as const;

export type ToolkitArea = (typeof toolkitAreas)[number];

export function getToolkitArea(slug: string): ToolkitArea | undefined {
  return toolkitAreas.find((a) => a.slug === slug);
}
