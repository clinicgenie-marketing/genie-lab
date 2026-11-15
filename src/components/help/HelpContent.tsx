"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useId, useState } from "react";
import { searchToolkit, type SearchResult } from "@/lib/actions/search";
import type { HelpData } from "@/lib/help-data";
import { LessonNavContext } from "../lesson/LessonContext";

/**
 * Help: search the Toolkit, where you are, statuses, setup problems and how to reach your
 * supervisor. Used in the drawer on every page and on /help. No support chat and no
 * response-time promises.
 */
export function HelpContent({ data, onNavigate, headingLevel = 3 }: { data: HelpData; onNavigate?: () => void; headingLevel?: 2 | 3 }) {
  const id = useId();
  const H = headingLevel === 2 ? "h2" : "h3";
  const pathname = usePathname();
  const lessonNav = useContext(LessonNavContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [searched, setSearched] = useState("");
  const [busy, setBusy] = useState(false);
  const [copy, setCopy] = useState<"idle" | "copied" | "failed">("idle");

  // Where am I: the lesson on screen when there is one, otherwise today's position.
  const onLesson = lessonNav ? { ...lessonNav.outline, section: lessonNav.section } : null;
  const sectionTitle = onLesson?.section ? onLesson.sections.find((s) => s.number === onLesson.section)?.title : undefined;

  function locationText() {
    const url = typeof window === "undefined" ? "" : window.location.href;
    if (onLesson) {
      const parts = [`Genie Lab · Day ${onLesson.day} · Lesson ${onLesson.lessonId}: ${onLesson.title}`];
      if (onLesson.section && sectionTitle) parts.push(`Section ${onLesson.section}: ${sectionTitle}`);
      else if (pathname.endsWith("/task")) parts.push("Your task");
      else if (pathname.endsWith("/submit")) parts.push("Submit evidence");
      else if (pathname.endsWith("/check")) parts.push("Knowledge check");
      return `${parts.join(" · ")}\n${url}`;
    }
    return `Genie Lab · ${typeof document === "undefined" ? "" : document.title}\n${url}`;
  }

  async function search() {
    const q = query.trim();
    if (!q) return;
    setBusy(true);
    try {
      setResults(await searchToolkit(q));
    } catch {
      setResults([]);
    }
    setSearched(q);
    setBusy(false);
  }

  async function copyLocation() {
    try {
      await navigator.clipboard.writeText(locationText());
      setCopy("copied");
    } catch {
      setCopy("failed");
    }
  }

  return (
    <div className="gl-help">
      <section aria-labelledby={`${id}-search`}>
        <H id={`${id}-search`}>Search the Toolkit</H>
        <form
          role="search"
          className="gl-help__search"
          onSubmit={(e) => {
            e.preventDefault();
            void search();
          }}
        >
          <label className="ob-label" htmlFor={`${id}-q`}>
            Lessons, prompts, commands, templates and terms
          </label>
          <div className="gl-help__searchrow">
            <input id={`${id}-q`} className="ob-input" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="ob-btn ob-btn--secondary" disabled={busy} aria-busy={busy || undefined}>
              Search
            </button>
          </div>
        </form>
        <div role="status" className="gl-help__results">
          {results ? (
            results.length ? (
              <>
                <p className="ob-p t-label-meta ob-secondary">
                  {results.length} {results.length === 1 ? "result" : "results"} for “{searched}”
                </p>
                <ul className="gl-help__list">
                  {results.map((r) => (
                    <li key={`${r.href}-${r.title}`}>
                      <Link className="gl-link" href={r.href} onClick={onNavigate}>
                        {r.title}
                      </Link>
                      <span className="t-label-meta ob-secondary gl-help__area">{r.area}</span>
                      {r.snippet ? <span className={`gl-help__snippet${["Prompt", "Command", "Template"].includes(r.area) ? " gl-help__snippet--code" : ""}`}>{r.snippet}</span> : null}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="ob-p">
                No results for “{searched}”.{" "}
                <button
                  type="button"
                  className="ob-btn ob-btn--tertiary"
                  onClick={() => {
                    setQuery("");
                    setResults(null);
                  }}
                >
                  Clear search
                </button>
              </p>
            )
          ) : null}
        </div>
      </section>

      <section aria-labelledby={`${id}-where`}>
        <H id={`${id}-where`}>Where am I?</H>
        {onLesson ? (
          <p className="ob-p">
            Day {onLesson.day} · Lesson {onLesson.lessonId}: {onLesson.title}
            {onLesson.section && sectionTitle ? ` · Section ${onLesson.section} of ${onLesson.sections.length}: ${sectionTitle}` : ""}.
          </p>
        ) : data.today ? (
          <p className="ob-p">
            Today is Day {data.today.n} of {data.today.total}: {data.today.title}.
          </p>
        ) : (
          <p className="ob-p">No day is open yet. Days open once your cohort&apos;s start date is confirmed.</p>
        )}
        {data.next ? (
          <p className="ob-p">
            Next:{" "}
            <Link className="gl-link" href={`/lesson/${data.next.slug}`} onClick={onNavigate}>
              Lesson {data.next.id}: {data.next.title}
            </Link>
            {data.next.section && data.next.sectionTitle ? `, section ${data.next.section}: ${data.next.sectionTitle}` : ""}.
          </p>
        ) : data.nextState === "all_done" ? (
          <p className="ob-p">Every open lesson is complete.</p>
        ) : null}
      </section>

      <section aria-labelledby={`${id}-statuses`}>
        <H id={`${id}-statuses`}>Statuses explained</H>
        <p className="ob-p">
          Lesson progress, review decisions and day access are kept apart.{" "}
          <Link className="gl-link" href="/toolkit/statuses" onClick={onNavigate}>
            What each badge means
          </Link>
        </p>
      </section>

      <section aria-labelledby={`${id}-setup`}>
        <H id={`${id}-setup`}>Common setup problems</H>
        {data.setupProblems ? (
          <p className="ob-p">
            Lesson 1.2 covers them:{" "}
            <Link className="gl-link" href={data.setupProblems.href} onClick={onNavigate}>
              {data.setupProblems.title}
            </Link>
          </p>
        ) : null}
      </section>

      <section aria-labelledby={`${id}-contact`}>
        <H id={`${id}-contact`}>Contact your supervisor</H>
        {data.support ? (
          <>
            <p className="ob-p gl-prewrap">{data.support.howToReach}</p>
            {data.support.channel ? <p className="ob-p">{data.support.channel}</p> : null}
          </>
        ) : (
          <p className="ob-p">Your supervisor&apos;s contact details have not been added yet. Use the way your team usually gets in touch.</p>
        )}
        <p className="ob-p ob-secondary">Copy where you are, to paste into your message.</p>
        <div>
          <button type="button" className="ob-btn ob-btn--secondary" onClick={copyLocation}>
            {onLesson ? "Copy lesson and section" : "Copy this page"}
          </button>
        </div>
        <p className="ob-p t-label-meta gl-save" role="status">
          {copy === "copied" ? "Copied" : copy === "failed" ? "Copy didn't work. Select the address in your browser and copy it yourself." : null}
        </p>
      </section>

      <section aria-labelledby={`${id}-tour`}>
        <H id={`${id}-tour`}>New to Genie Lab?</H>
        <p className="ob-p">
          <Link className="gl-link" href="/welcome" onClick={onNavigate}>
            Replay the welcome tour
          </Link>
        </p>
      </section>
    </div>
  );
}
