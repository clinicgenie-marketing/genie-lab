import Link from "next/link";
import { connection } from "next/server";
import { allReviewPoints } from "@/lib/config";
import { days, platform } from "@/lib/content/curriculum";
import { getProgrammeView } from "@/lib/programme";
import { Inlines } from "@/components/content/Inlines";
import { WelcomeAction } from "./WelcomeActions";

export const metadata = { title: "Welcome" };

const STEPS = ["What you will build", "How a lesson works", "How review works", "Get set up for Day 1"] as const;

export default async function WelcomePage({ searchParams }: { searchParams: Promise<{ step?: string }> }) {
  await connection();
  const requested = Number((await searchParams).step ?? "1");
  const step = Number.isInteger(requested) && requested >= 1 && requested <= STEPS.length ? requested : 1;
  const view = await getProgrammeView();
  const day1 = view.days[0]!;
  const firstLesson = day1.lessons[0]!;
  const day1Open = day1.access !== "locked";

  return (
    <div className="gl-welcome">
      <header className="gl-page-head">
        <p className="ob-p t-label-meta gl-eyebrow">{platform.description}</p>
        <h1 className="ob-h t-page-heading">Welcome to {platform.name}</h1>
      </header>

      <nav className="gl-welcome__steps" aria-label="Welcome tour">
        <p className="ob-p t-label-meta" aria-live="polite">
          Step {step} of {STEPS.length}
        </p>
        <ol>
          {STEPS.map((s, i) => (
            <li key={s}>
              <Link href={`/welcome?step=${i + 1}`} aria-current={i + 1 === step ? "step" : undefined}>
                {s}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <section className="ob-card ob-card--outlined gl-welcome__card" aria-labelledby="step-title">
        <h2 id="step-title" className="ob-h t-section-heading">
          {STEPS[step - 1]}
        </h2>

        {step === 1 ? (
          <div className="gl-prose">
            <p>
              Over {days.length} days, one unit a day, you will build a website for Saffron Wellness Clinic, a fictional practice client. Each day has {day1.lessons.length} lessons.
            </p>
            <ol>
              {days.map((d) => (
                <li key={d.n}>
                  Day {d.n}: {d.title}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="gl-prose">
            <p>Every lesson follows the same four steps. Keep Genie Lab in one half of your screen and VS Code in the other.</p>
            <ol>
              <li>Read the lesson here, one section at a time.</li>
              <li>Do the work in VS Code, with Claude Code in its terminal. Prompts and commands have a Copy button.</li>
              <li>Hand in evidence with Submit evidence.</li>
              <li>Check your understanding with the knowledge check.</li>
            </ol>
            <p>Your place and your ticked steps are saved as you go, so Continue on Home always takes you back.</p>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="gl-prose">
            <p>
              {allReviewPoints.length} lessons are review points. At each one you send your supervisor a read-only link to your evidence. They accept it or ask for changes outside Genie Lab, and you record their decision in My work.
            </p>
            <p>Recording a decision never changes whether a lesson is complete. If changes are requested, you fix the work and resubmit; every earlier version is kept.</p>
            <p>New days open on the calendar, so you carry on while a review is pending.</p>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="gl-prose">
            <p>Day 1&apos;s lessons ask for these materials:</p>
            <dl className="gl-needs">
              {day1.lessons.map((l) => (
                <div key={l.id} className="gl-needs__item">
                  <dt className="t-label-meta">
                    Lesson {l.id}: {l.title}
                  </dt>
                  <dd className="ob-p">
                    <Inlines nodes={l.requiredMaterials} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

        <div className="gl-welcome__nav">
          {step > 1 ? (
            <Link className="ob-btn ob-btn--secondary ob-btn--large" href={`/welcome?step=${step - 1}`}>
              Back
            </Link>
          ) : (
            <span />
          )}
          {step < STEPS.length ? (
            <Link className="ob-btn ob-btn--primary ob-btn--large" href={`/welcome?step=${step + 1}`}>
              Next
            </Link>
          ) : day1Open ? (
            <WelcomeAction href={`/lesson/${firstLesson.slug}`} label={`Start Lesson ${firstLesson.id}`} variant="primary" />
          ) : (
            <WelcomeAction href="/home" label="Go to Home" variant="primary" />
          )}
        </div>
      </section>

      {step < STEPS.length ? (
        <p className="ob-p">
          <WelcomeAction href="/home" label="Skip tour" variant="tertiary" />
        </p>
      ) : !day1Open ? (
        <p className="ob-p ob-secondary">Day 1 opens once your cohort&apos;s start date is confirmed. You can reopen this tour from Help at any time.</p>
      ) : (
        <p className="ob-p ob-secondary">You can reopen this tour from Help at any time.</p>
      )}
    </div>
  );
}
