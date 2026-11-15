import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HelpIcon, HomeIcon } from "./icons";
import type { LessonRef } from "@/lib/content/curriculum";
import { IconLink } from "./IconLink";

export type SectionPosition = { current: number; total: number };

/**
 * The focused bar on lesson screens, replacing the top bar. Left: back to the day and a
 * breadcrumb. Centre: section position with a progress bar, shown only once real section
 * data exists (Phase 3). Right: Outline (Phase 3), Help and Home.
 */
export function LessonBar({ lesson, section }: { lesson: LessonRef; section?: SectionPosition }) {
  const dayHref = `/day/${lesson.day}`;
  return (
    <header className="ob-topbar gl-lessonbar" data-surface="dark">
      <Link className="ob-btn ob-btn--on-dark gl-lessonbar__back" href={dayHref}>
        <ArrowLeft size={20} aria-hidden="true" focusable="false" />
        Day {lesson.day}
      </Link>
      <nav className="ob-crumbs gl-crumbs--dark gl-lessonbar__crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/syllabus">Syllabus</Link>
          </li>
          <li>
            <Link href={dayHref}>Day {lesson.day}</Link>
          </li>
          <li>
            <span aria-current="page">
              Lesson {lesson.id}: {lesson.title}
            </span>
          </li>
        </ol>
      </nav>
      {section ? (
        <div className="gl-lessonbar__progress">
          <span className="t-label-meta" id="lesson-position">
            Section {section.current} of {section.total}
          </span>
          <progress className="gl-progress" aria-labelledby="lesson-position" value={section.current} max={section.total} />
        </div>
      ) : null}
      <div className="ob-utils gl-lessonbar__end">
        <IconLink href="/help" label="Help" icon={<HelpIcon />} />
        <IconLink href="/home" label="Home" icon={<HomeIcon />} />
      </div>
    </header>
  );
}
