import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolkitArea, toolkitAreas } from "@/lib/toolkit";
import { toolkitCount, toolkitGroups } from "@/lib/toolkit-index";
import { loadGlossary, loadProjectKit, termAnchor } from "@/lib/toolkit-config";
import { lessonIdToSlug } from "@/lib/content/curriculum";
import { PageHeader } from "@/components/PageHeader";
import { ToolkitList } from "@/components/toolkit/ToolkitList";
import { NotSupplied } from "@/components/toolkit/NotSupplied";
import { StatusesExplained } from "@/components/toolkit/StatusesExplained";
import Link from "next/link";

type Props = { params: Promise<{ area: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return toolkitAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getToolkitArea((await params).area);
  return { title: area ? `${area.label} · Toolkit` : "Page not found" };
}

/** The four working templates the IA plan lists from the project's templates folder, not yet supplied. */
const WORKING_TEMPLATES = ["Task specification", "QA and findings", "Learner submission", "Content and dependency register"];

export default async function ToolkitAreaPage({ params }: Props) {
  const area = getToolkitArea((await params).area);
  if (!area) notFound();

  switch (area.slug) {
    case "prompts": {
      const n = toolkitCount("prompt");
      return (
        <>
          <PageHeader eyebrow="Toolkit" title={area.label} lead={`${n} prompts from the lessons, grouped by day. Copy one, replace any highlighted parts, then paste it into Claude Code.`} />
          <ToolkitList groups={toolkitGroups("prompt")} noun="prompt" plural="prompts" />
        </>
      );
    }
    case "commands": {
      const n = toolkitCount("command");
      return (
        <>
          <PageHeader eyebrow="Toolkit" title={area.label} lead={`${n} terminal commands from the lessons. Each one runs in your terminal. Read its lesson first: some change your project or need authorisation.`} />
          <ToolkitList groups={toolkitGroups("command")} noun="command" plural="commands" />
        </>
      );
    }
    case "templates": {
      const n = toolkitCount("template");
      return (
        <>
          <PageHeader eyebrow="Toolkit" title={area.label} lead={`${n} document templates from the lessons. Copy one into your project and replace the highlighted parts.`} />
          <section className="gl-section" aria-labelledby="working-templates">
            <h2 id="working-templates" className="ob-h t-section-heading">
              Working templates
            </h2>
            <p className="ob-p">These come from the project&apos;s templates folder:</p>
            <ul className="gl-bullets">
              {WORKING_TEMPLATES.map((t) => (
                <li key={t}>
                  {t} <span className="ob-badge ob-badge--soon gl-inline-badge">Not yet supplied</span>
                </li>
              ))}
            </ul>
          </section>
          <ToolkitList groups={toolkitGroups("template")} noun="template" plural="templates" />
        </>
      );
    }
    case "glossary": {
      const glossary = await loadGlossary();
      return (
        <>
          <PageHeader eyebrow="Toolkit" title={area.label} lead="Terms the lessons define, such as IA, PRD and breakpoint." />
          {glossary ? (
            <dl className="gl-glossary">
              {[...glossary.terms]
                .sort((a, b) => a.term.localeCompare(b.term, "en-GB"))
                .map((t) => (
                  <div key={t.term} id={termAnchor(t.term)} className="gl-glossary__term">
                    <dt className="ob-h t-card-title">{t.term}</dt>
                    <dd className="ob-p">
                      {t.definition}
                      {t.lessons.length ? (
                        <span className="gl-glossary__lessons">
                          {" "}
                          See{" "}
                          {t.lessons.map((id, i) => (
                            <span key={id}>
                              {i ? ", " : ""}
                              <Link className="gl-link" href={`/lesson/${lessonIdToSlug(id)}`}>
                                Lesson {id}
                              </Link>
                            </span>
                          ))}
                          .
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
            </dl>
          ) : (
            <NotSupplied what="The glossary" file="content/glossary.json" />
          )}
        </>
      );
    }
    case "project-kit": {
      const kit = await loadProjectKit();
      return (
        <>
          <PageHeader eyebrow="Toolkit" title={area.label} lead="The Saffron Wellness Clinic brief, IA, designs, style guide, content and starter project, as your supervisor supplies them." />
          {kit ? (
            <ul className="ob-grid gl-kit">
              {kit.items.map((it) => (
                <li key={it.url} className="ob-card ob-card--cyan">
                  <p className="ob-tk__kind ob-p">{it.format}{it.version ? ` · Version ${it.version}` : ""}</p>
                  <h2 className="ob-card__title">{it.title}</h2>
                  {it.description ? <p className="ob-p">{it.description}</p> : null}
                  <a className="ob-link" href={it.url} target="_blank" rel="noopener noreferrer">
                    Open resource<span className="sr-only"> {it.title} (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <NotSupplied what="The project kit" file="config/project-kit.json" />
          )}
        </>
      );
    }
    case "statuses":
      return (
        <>
          <PageHeader eyebrow="Toolkit" title={area.label} lead="What every badge on the platform means. Each pairs an icon with a word; colour only supports the word." />
          <StatusesExplained />
        </>
      );
  }
}
