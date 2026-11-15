"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LessonProgressStatus } from "@/lib/schedule";
import { useLessonNav } from "./LessonContext";

export type OutlineData = {
  lessonId: string;
  slug: string;
  title: string;
  day: number;
  sections: { number: number; title: string }[];
  dayLessons: { id: string; slug: string; title: string; status: LessonProgressStatus | "coming_soon" }[];
};

const STATUS_WORD: Record<OutlineData["dayLessons"][number]["status"], string> = {
  locked: "Locked",
  not_started: "Not started",
  in_progress: "In progress",
  complete: "Complete",
  coming_soon: "Coming soon",
};

/** This lesson's sections, its task pages and the day's other lessons. */
export function OutlineNav({ onNavigate }: { onNavigate?: () => void }) {
  const { outline, section, select } = useLessonNav();
  const pathname = usePathname();
  const base = `/lesson/${outline.slug}`;
  const onReader = pathname === base;
  const page = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <nav className="gl-outline" aria-label="Lesson outline">
      <section>
        <h3 className="t-label-meta gl-outline__heading">In this lesson</h3>
        <ol className="gl-outline__list">
          {outline.sections.map((s) => (
            <li key={s.number}>
              <a
                href={`${base}#section-${s.number}`}
                aria-current={onReader && section === s.number ? "location" : undefined}
                onClick={(e) => {
                  if (onReader && select(s.number)) {
                    e.preventDefault();
                    onNavigate?.();
                  } else onNavigate?.();
                }}
              >
                <span className="gl-outline__num">{s.number}.</span> {s.title}
              </a>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h3 className="t-label-meta gl-outline__heading">Do the work</h3>
        <ul className="gl-outline__list">
          <li><Link href={`${base}/task`} aria-current={page(`${base}/task`)} onClick={onNavigate}>Your task</Link></li>
          <li><Link href={`${base}/submit`} aria-current={page(`${base}/submit`)} onClick={onNavigate}>Submit evidence</Link></li>
          <li><Link href={`${base}/check`} aria-current={page(`${base}/check`)} onClick={onNavigate}>Knowledge check</Link></li>
        </ul>
      </section>
      <section>
        <h3 className="t-label-meta gl-outline__heading">Day {outline.day} lessons</h3>
        <ol className="gl-outline__list">
          {outline.dayLessons.map((l) => (
            <li key={l.id}>
              {l.id === outline.lessonId ? (
                <span className="gl-outline__self">
                  {l.id} {l.title} <span className="gl-outline__status">(this lesson)</span>
                </span>
              ) : (
                <Link href={`/lesson/${l.slug}`} onClick={onNavigate}>
                  {l.id} {l.title} <span className="gl-outline__status">{STATUS_WORD[l.status]}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>
    </nav>
  );
}
