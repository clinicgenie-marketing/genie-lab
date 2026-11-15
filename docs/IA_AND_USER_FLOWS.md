# Genie Lab: IA and User Flows

Exported 15 November 2026 from the plan doc "Genie Lab: IA and User Flows". The doc's two diagrams (the sitemap and the daily loop) are written out here as text.

## Summary

The platform borrows Codecademy's rhythm (a syllabus, a home base that says "continue", and a lesson screen with instructions beside the work), but the hands-on work happens in the intern's own VS Code workspace, with Claude Code in its terminal. So the lesson screen is a reading pane plus a task panel, not a code editor. Knowledge checks are multiple choice and marked instantly. Supervisors review practical work outside the platform, and interns record their decisions in it.

Interns need only four main places: **Home, Syllabus, My work and Toolkit**. Every screen answers three questions: where am I, what do I do next, and what is waiting on someone else.

Five design principles keep it from being confusing:

1. **One next step per screen.** Every page has a single primary button, such as "Continue Lesson 4.2".
2. **Always show the position.** "Day 4 of 10 · Lesson 4.2 · Section 3 of 9" is visible on every lesson screen.
3. **Say where each action happens.** Each instruction is tagged as done on the platform, in the terminal, in Claude Code, or by the supervisor.
4. **Keep three kinds of status apart.** The intern's own progress, the supervisor's decision and the results of checks never share a label or a badge style.
5. **Nothing silently hidden.** Locked days say the date they open, and any lesson without a file says it is coming.

## Who uses it

The intern is the main user. The supervisor appears only where their action changes what the intern sees next.

| User | Situation | What they need from the platform |
|---|---|---|
| **Intern** (only user of the platform) | A beginner on a 10-day programme. Works on a laptop with the platform in one half of the screen and VS Code, with Claude Code in its terminal, in the other | Know what to do now, follow it step by step, hand in evidence, record review decisions, find prompts and terms quickly |
| **Supervisor** (outside the platform) | Reviews work at review points and answers questions through the team's usual channels. Has no screens in version 1 | A read-only share link to each submission, sent by the intern |
| **Curriculum owner** | Owns the locked lesson content | Lesson content is imported from the locked package. Editing lessons inside the platform is out of scope for version 1 |

The split-screen habit matters: the lesson screen must work at **half a laptop screen**, about 720 px wide, not only full width.

## What we borrow from Codecademy

We keep Codecademy's structure and change the parts that assume coding inside the browser.

| Codecademy pattern | What we keep | What changes here |
|---|---|---|
| [Syllabus broken into modules](https://www.codecademy.com/resources/blog/career-path-redesign) with progress shown | A Syllabus page and Day pages showing every lesson and its status | Modules become 10 days of 4 lessons, matching the locked plan |
| [Dashboard as the home base](https://www.codecademy.com/resources/blog/updates-to-the-codecademy-dashboard) that surfaces what you are working on now | Home with one "Continue" card | Home also shows anything the supervisor has sent back, above everything else |
| [Learning environment split into panes](https://www.codecademy.com/articles/accessibility-on-the-platform), with the narrative pane first | Lesson text on the left, the task on the right | The right pane holds the task checklist and evidence upload, not a code editor |
| [Course Menu and a Next button](https://help.codecademy.com/hc/en-us/articles/1260803449210-Updates-to-our-Learning-Environment) to move between exercises | An outline drawer and Back/Next at the bottom of each section | Next moves to the next section of the same lesson, then to the next lesson |
| Auto-graded steps that unlock one at a time | Checkable steps | The intern ticks steps themselves; proof is the evidence they upload |
| Cheatsheets, help and concept review | A Toolkit (prompts, templates, glossary, commands) and a Help drawer | Prompts copy straight into Claude Code |
| Quizzes and projects | Five multiple-choice questions per lesson; review points per day | Questions are marked instantly; the supervisor reviews practical work outside the platform |

We leave out streaks and leaderboards. The programme runs to a fixed 10-day schedule, so "Day 4 of 10" does that job without adding pressure.

## Sitemap

The whole platform is three levels deep at most: a main page, a page under it, and a lesson's task, evidence or check page.

**Sitemap (text version of the diagram): 4 main pages, 13 pages below them, no supervisor screens.**

- Welcome tour (first sign-in only, reopenable from Help)
- **Home**
  - Continue goes straight to the current lesson section
- **Syllabus**
  - Day page (10)
    - Lesson (4 per day)
      - Your task
      - Submit evidence
      - Knowledge check
- **My work**
  - Submission detail (where the intern records the supervisor's decision)
- **Toolkit**
  - Prompt library
  - Command sheet
  - Templates
  - Glossary
  - Project kit
  - Statuses explained
- Help drawer (on every page)
- Settings (from the profile menu)
- Read-only shared submission page (opened by the supervisor from a link the intern sends)

Home's Continue jumps straight to the current lesson, and everything an intern submits from a lesson lands in My work, where the intern also records the supervisor's decisions.

| Page | Reached from | Job | Primary action |
|---|---|---|---|
| Welcome tour | First sign-in | Explain the programme and how lessons work | Start Lesson 1.1 |
| Home | Top bar, platform name | Show where the intern is and what needs action | Continue |
| Syllabus | Top bar | Show all 10 days and 40 lessons | Open a day |
| Day page | Syllabus, Home | Show the day's goal, materials, lessons and review point | Start next lesson |
| Lesson | Day page, Home | Teach one lesson, section by section | Next section |
| Your task | Lesson | Hold the practical exercise steps | Tick steps |
| Submit evidence | Your task | Collect what the lesson asks for | Submit |
| Knowledge check | Lesson end | Five questions | Check answer |
| My work | Top bar | List every submission and the decisions recorded | Open what needs action |
| Submission detail | My work | Show what was sent, the recorded decision and allow resubmission | Resubmit |
| Toolkit (6 areas) | Top bar, Help | Prompts, commands, templates, glossary, project kit, status guide | Copy or open |
| Help drawer | Every page | Get unstuck, find how to reach the supervisor | Contact your supervisor |
| Settings | Profile menu | Name, text size, reduced motion | Save |

## Navigation model

There are two modes: normal pages use a fixed top bar with four items, and the lesson screen switches to a focused bar so nothing competes with the work.

**Top bar (all pages except lessons)**

- Left: "Genie Lab" in plain type (goes to Home; no logo has been approved), then **Home · Syllabus · My work · Toolkit**. The current page sits in a light capsule with its text label, so it is not shown by colour alone.
- Right: Help, Settings and the intern's initials. No notifications in version 1.
- My work shows a count badge only when something needs the intern's action (changes requested). It clears when they open it.

**Lesson bar (focused mode)**

- Left: "← Day 4" back link, then the breadcrumb "Day 4 · Lesson 4.2 · Planning Small Tasks with Clear Acceptance Criteria".
- Centre: "Section 3 of 9" with a thin progress bar.
- Right: Outline (opens a drawer listing this lesson's sections and the day's other lessons), Help, and a Home icon so the main navigation is never more than one click away.
- Bottom of every section: **Back** and **Next section**. The last section's button becomes **Go to your task**.

**Rules**

- Back always returns to the same scroll position and keeps ticked steps.
- Every page, lesson and section has its own link, so a supervisor can send "see /lesson/4-2#section-5".
- Modals are used only for confirmations (such as submitting), never for moving between pages.
- Below 1024 px wide, the top bar's four items move into a menu button, and the lesson screen shows two tabs: **Lesson** and **Your task**.

**URL pattern**

| Page | URL |
|---|---|
| Welcome tour | `/welcome` |
| Home | `/home` |
| Syllabus | `/syllabus` |
| Day | `/day/4` |
| Lesson, at a section | `/lesson/4-2#section-5` |
| Lesson task, evidence, check | `/lesson/4-2/task`, `/lesson/4-2/submit`, `/lesson/4-2/check` |
| My work, one submission | `/work`, `/work/4-4` |
| Toolkit areas | `/toolkit/prompts`, `/toolkit/commands`, `/toolkit/templates`, `/toolkit/glossary#ia`, `/toolkit/project-kit`, `/toolkit/statuses` |
| Help, settings | `/help`, `/settings` |
| Read-only shared submission | `/share/[token]` |

## Page-by-page breakdown

Each page below lists its contents top to bottom and its one primary action. The lesson screen has its own section next.

### Welcome (first sign-in only)

1. What you will build: a website for Saffron Wellness Clinic, a fictional practice client, over 10 days, one unit a day.
2. How a lesson works, in four steps: read, do it in VS Code with Claude Code, hand in evidence, check your understanding.
3. How review works: some lessons are sent to your supervisor, who accepts them or asks for changes outside the platform. You record their decision here.
4. Setup checklist from Day 1's required materials (laptop, VS Code, Git, Claude Code, GitHub access, the starter project).

**Primary action:** Start Lesson 1.1. The intern can reopen this tour from Help.

### Home

1. **Needs your attention** (shown only when something is there): work sent back with changes requested, newest first.
2. **Today card:** "Day 4 of 10 · Directing Claude Code and Building Foundations", the next lesson and the section where the intern stopped.
3. **Your 10 days:** a row of day chips marked done, current or locked, with each day's review status.
4. **Waiting on your supervisor:** submissions awaiting review, with a line on what the intern can do meanwhile.
5. Shortcuts: prompt library, glossary, command sheet.

**Primary action:** Continue (opens the exact section). On the first day it reads Start Lesson 1.1.

### Syllabus

1. Programme progress: lessons complete out of 40.
2. Ten day cards in order. Each shows the unit title, its four lessons with status, and its review point if it has one.
3. Locked days show the date they open, such as "Opens on 20 November".
4. A lesson without a file shows as "Coming soon", not as a broken link. All 40 lessons currently have files.

**Primary action:** open a day. The current day is expanded; others are collapsed.

### Day page

1. The day's goal in one sentence. (These sentences still need writing.)
2. What you need today: the required materials from the day's four lessons, combined, each linked to the Toolkit or Project kit.
3. The four lessons as cards: title, learning objective summary, estimated time (such as "about 90 minutes") and status. The day's total shows above them: about 6 hours.
4. Today's review point: what will be sent to the supervisor and its current decision.

**Primary action:** start or continue the next unfinished lesson.

### Knowledge check

1. Five multiple-choice questions, one at a time, each with three or four options.
2. Each answer is marked straight away, with a one-line explanation of the correct option.
3. A wrong answer can be tried again. The check is passed when all five are correct.
4. No supervisor sees or marks the answers.

**Primary action:** Check answer, then Next question.

### Submit evidence

1. A checklist built from the lesson's "Expected submission" list. Each item takes a file, a link or pasted text.
2. A Git commit field where the lesson asks for a checkpoint.
3. At review points, a Share with supervisor link (a read-only page of what was submitted) and a place to record the supervisor's decision when it arrives.

**Primary action:** Submit. A confirmation dialog lists what is being saved.

### My work

1. Filters: Needs action · Awaiting review · Accepted · All. Needs action is selected when it has items.
2. One row per submission: lesson, date and the decision recorded.
3. Submission detail: what was sent, its share link, the decision and notes recorded from the supervisor, and a Resubmit button when changes are requested.

**Primary action:** open the item that needs action.

### Toolkit

| Area | Contents | Source |
|---|---|---|
| Prompt library | Every Claude prompt in the course, grouped by day, each with Copy and a link back to its lesson | Lesson files |
| Command sheet | Every terminal command, each tagged "Run in: terminal, project folder" | Lesson files |
| Templates | Task specification, QA and findings, learner submission, content and dependency register, plus the document templates in Lesson 3.3 | Project `templates/` folder and lesson files |
| Glossary | Terms the lessons define, such as IA, PRD, CTA, viewport, breakpoint, props, endpoint | Lesson text (needs extracting) |
| Project kit | Saffron Wellness Clinic brief, IA, designs, style guide, content, starter project access | Supplied by the supervisor |
| Statuses explained | What every badge on the platform means | This document |

**Primary action:** search, then Copy or Open.

### Help (a drawer on every page)

1. Search the Toolkit.
2. "Where am I?": the current day, lesson, section and what is next.
3. Statuses explained.
4. Common setup problems (from Lesson 1.2).
5. **Contact your supervisor:** how to reach them, with a button that copies the current lesson and section to paste into the message.

### Settings

Name, text size and reduced motion. A theme switch only if the design system defines a dark theme.

## Lesson screen

All 40 lesson files share the same structure, so every lesson renders into the same screen without hand layout. Lessons run about 140 to 475 lines, so the screen breaks them into sections the intern moves through one at a time.

**How each part of a lesson file appears**

| Lesson file part | Where it appears | Treatment |
|---|---|---|
| `# Lesson 4.2: Title` | Lesson bar breadcrumb and page heading | Day and section position always visible |
| Learning objective | "What you'll be able to do" card at the top | Open on first visit, collapsed after |
| Prerequisites | "Before you start" card | Links to the lessons named; a warning if one is unfinished |
| Required materials, and "Your output" where present | Same card | Each item links to the Toolkit or Project kit |
| Numbered teaching sections | Main reading column, one anchor per section | Listed in the Outline drawer; Next section at the foot of each |
| `text` code blocks (Claude prompts) | **Prompt card**, tagged "Paste into Claude Code" | Copy button; placeholders such as `[Insert task.]` highlighted, with a reminder to replace them |
| `bash` code blocks (terminal commands) | **Command card**, tagged "Run in your terminal" | Copy button; the folder it runs in shown above it |
| `markdown` code blocks (document templates) | **Template card**, tagged "Template to copy" | Read-only, with a Copy button; placeholders highlighted |
| `tsx`, `ts`, `css`, `html` blocks | Code example card | Read-only, with a Copy button |
| Tables | Inside the reading column | Turn into stacked cards below 720 px, so the page never scrolls sideways |
| Practical exercise | **Your task** panel | Each numbered step is a checkbox; ticks save as they are made |
| Expected submission | Submit evidence page, opened from the task panel | Each bullet becomes an upload or text item |
| Completion criteria | Final self-check before "Mark lesson complete" | Every item must be ticked |
| Knowledge check | Knowledge check page | Five multiple-choice questions, marked instantly |
| Official reference (some lessons) | "Further reading" at the end | External links open in a new tab, marked as such |

**Layout by screen width**

| Width | Layout |
|---|---|
| 1280 px and over | Outline rail on the left (240 px), reading column in the centre (up to 680 px), Your task panel on the right (360 px), fixed while the page scrolls |
| 1024 to 1279 px | Outline moves into a drawer; reading column and task panel side by side |
| Under 1024 px, including half a laptop screen | One column with two tabs, **Lesson** and **Your task**. The task tab shows a count such as "3 of 7 steps done" |

**When a lesson counts as complete**

The intern presses "Mark lesson complete" once four things are true: every task step is ticked, evidence is submitted, every completion criterion is ticked, and all five knowledge check questions are answered correctly (retries allowed). Supervisor acceptance is **not** part of lesson completion; it is recorded separately, as the curriculum requires.

## Status model

The platform uses three separate kinds of status, each with its own badge shape, so "I finished it" is never mistaken for "my supervisor accepted it".

| Kind | Values | Who changes it | Looks like |
|---|---|---|---|
| **Lesson progress** | Locked · Not started · In progress · Complete | The intern (Locked is set by the platform) | Round icon + word |
| **Review decision** | Not submitted · Awaiting review · Changes requested · Accepted | The intern, recording what the supervisor decided outside the platform | Rectangular tag + word |
| **Day access** | Locked · Open · Done | The platform, by the unlocking rule | Day chip |

Every badge pairs an icon with a word, never colour alone.

Inside their evidence, interns also record check results (Passed, Failed, Not checked, Not applicable) and finding statuses (Open; Corrected, awaiting verification; Verified; Awaiting decision). These are part of the intern's work, not platform statuses, and should never appear as platform badges.

**Review points (proposed)**

These lessons end with work sent for a supervisor decision, based on what each lesson's text asks for:

| Day | Review point | What the supervisor decides |
|---|---|---|
| 1 | None | Day 1 is setup; evidence is still submitted |
| 2 | 2.4 | Accepts the website brief and structure |
| 3 | 3.4 | Accepts the instruction baseline |
| 4 | 4.4 | Accepts the reviewed component |
| 5 | 5.4 | Accepts the homepage |
| 6 | 6.4 | Accepts the internal pages |
| 7 | 7.4 | Accepts the interactive features |
| 8 | 8.2 | Accepts the QA corrections |
| 9 | 9.4 | Authorises and checks the staging deployment |
| 10 | 10.1, 10.3, 10.4 | Approves the change plan, the evidence and the handover |

Evidence from every other lesson stays in My work. The intern can share any of it with the supervisor by link, but nothing needs a recorded decision.

**Unlocking rule (decided 15 November 2026)**

- Day N opens on the cohort's Nth working day, so the schedule decides when new lessons appear, not the supervisor.
- All four lessons in a day open together; the Day page shows the suggested order.
- Earlier days stay open. An intern who falls behind can catch up, and Home shows "1 lesson behind" instead of blocking them.
- A recorded **Changes requested** decision appears first on Home, but blocks nothing.

This is the soft option: nothing waits for a supervisor.

## User flows

The daily loop has one step off the platform (VS Code and Claude Code), and supervisor review runs beside it rather than blocking it.

**Daily loop (text version of the diagram): 8 intern steps, with a review branch at review points.**

Intern, on the platform unless stated:

1. Home: Continue.
2. Read the section.
3. Do the step in VS Code and Claude Code (off the platform).
4. Tick it in Your task. Repeat steps 2 to 4 for each section.
5. Submit evidence.
6. Answer the knowledge check.
7. Mark lesson complete.
8. The next lesson, or the next day when it opens.

Supervisor, off the platform, at review points only:

1. Reviews the submission from the share link.
2. Decides: accepted, or changes requested.
3. If accepted, the intern records "Accepted".
4. If changes are requested, the intern fixes and resubmits, and the supervisor reviews again.

Days open on the calendar, so the intern carries on while a review is pending. The supervisor reviews outside the platform and the intern records the decision; "changes requested" sends them back to fix and resubmit.

### First sign-in

1. Sign in with the account the supervisor set up.
2. Welcome tour: what you will build, how a lesson works, how review works.
3. Setup checklist for Day 1.
4. Home shows Day 1 of 10 and **Start Lesson 1.1**.

### Changes requested

1. The supervisor tells the intern outside the platform.
2. The intern opens the submission in My work and records **Changes requested**, with the supervisor's notes.
3. Home shows the item first under **Needs your attention** until it is resolved.
4. The intern fixes the work in VS Code and presses **Resubmit**, which keeps the earlier version. The item returns to **Awaiting review**.

### Getting unstuck

1. Inside a lesson, the intern opens **Help**.
2. They can search the Toolkit, look up a term in the glossary, or reread an earlier lesson the current one depends on.
3. If that does not help, **Contact your supervisor** shows how to reach them and copies the current lesson and section for the message.
4. Closing Help returns them to the same place in the lesson.

### Returning after a break

1. Sign in goes straight to Home.
2. Anything needing action appears first; otherwise the Today card shows the exact lesson and section.
3. **Continue** reopens that section with the task panel's ticks intact.

## Where interns could get confused

The biggest risk is the switch between the platform and VS Code; most of the design choices above exist to make that switch safe.

| Risk | Why it happens in this course | How the design prevents it |
|---|---|---|
| "Where do I type this?" | Lessons mix reading, terminal commands, Claude prompts and supervisor steps | Every block is tagged: Platform, Terminal, Claude Code or Supervisor, each with its own icon |
| Losing their place | Interns switch windows constantly | Position saves automatically; Continue reopens the exact section; ticked steps stay ticked |
| Long lessons feel endless | Lessons are long and detailed | Section-at-a-time reading, "Section 3 of 9", the Outline drawer, the objective card first and an estimated time per lesson |
| "Complete" mistaken for "Accepted" | The curriculum keeps the two apart deliberately | Different badge shapes and words; a Statuses explained page |
| Check results mistaken for platform status | Evidence contains Passed, Failed and Verified | Those words never appear as platform badges |
| Copying a prompt with its placeholders | Prompts end with lines like `[Insert exact references.]` | Placeholders are highlighted; Copy shows "Replace the highlighted parts before sending" |
| Guessing through the knowledge checks | Multiple choice can be passed by trial and error | Each answer shows a short explanation; questions test decisions from the lesson, not recall of its wording |
| Forgetting to record a review decision | Supervisors reply outside the platform | Items stay under "Awaiting review" on Home as a reminder until a decision is recorded |
| Falling behind the schedule | New days open by date | Earlier days stay open; Home shows how many lessons are behind instead of blocking anything |
| A cramped screen | Half-screen use beside VS Code | One-column layout with Lesson and Your task tabs under 1024 px |

## Content model for the developers

The locked package (`curriculum.json` plus one Markdown file per lesson) holds everything needed to render the course, except the few items listed at the end of this section.

**Structure:** Programme → Day (unit, 10) → Lesson (40) → Section → Blocks.

**Parsing rules (checked against all 40 lessons)**

1. The first line `# Lesson X.Y: Title` gives the ID and title.
2. `### Learning objective` is followed by a bulleted list.
3. `**Prerequisites:**` and `**Required materials:**` are single paragraphs, present in every lesson. `**Your output:**` is optional.
4. Every `## N. Heading` outside a fenced code block is a section. Lesson 3.3 has `##` headings inside its Markdown templates, and they are not sections. Four sections are recognised by name and moved to the task side: **Practical exercise, Expected submission, Completion criteria, Knowledge check**. `Official reference`, where present, becomes Further reading.
5. Fenced blocks are typed by language: `text` = Claude prompt, `bash` = terminal command, `markdown` = template to copy, `tsx`, `ts`, `css`, `html` = code example. Counts come from the parsed content, never hardcoded.

**Data the platform stores**

| Record | Fields |
|---|---|
| Lesson progress | Intern, lesson, status, last section viewed, ticked task steps, ticked completion criteria, completed date |
| Submission | Intern, lesson, items (files, links, text), Git commit if any, submitted date, version |
| Review decision | Submission, reviewer's name, decision, the supervisor's notes as recorded by the intern, date |
| Knowledge check | Intern, lesson, option chosen per question, attempts, passed date |

**Added on 15 November 2026:** Lesson 3.3, an estimated time for every lesson (60 to 105 minutes, 6 hours a day), the suggested daily schedule, the unlocking rule, the Unit 7 platform title, the platform name (Genie Lab) and the practice client (Saffron Wellness Clinic). All are in `curriculum.json`.

**Still needed**

- Multiple-choice versions of the knowledge checks: about 200 questions, each with options, the correct answer and a one-line explanation.
- A one-sentence goal for each day.
- A glossary extracted from the lessons.
- The Project kit: Saffron Wellness Clinic brief, IA, designs, style guide, content and starter project access.
- The supervisor's contact details for the Help drawer.

## Decisions made

All six decisions were settled on 15 November 2026, and the plan above reflects them.

| # | Decision | Outcome |
|---|---|---|
| 1 | When does the next day open? | Soft and day-based: Day N opens on the cohort's Nth working day, and nothing waits for a supervisor |
| 2 | How are knowledge checks answered? | Multiple choice, marked automatically; no supervisor checks the answers |
| 3 | Are supervisor screens in version 1? | No. Supervisors review outside the platform; interns record decisions and share submissions by link |
| 4 | Rename Unit 7? | Yes, for interns: "Forms and Interactive Features". The locked record keeps the original label |
| 5 | Lesson 3.3 text | Supplied in your own wording, included, and approved and locked on 15 November 2026 |
| 6 | Daily schedule and lesson durations | Supplied as estimates: 60 to 105 minutes a lesson, 6 hours of lessons a day, a suggested 09:30 to 17:00 day |

### Sources

- [Codecademy: career path syllabus redesign](https://www.codecademy.com/resources/blog/career-path-redesign)
- [Codecademy: updates to the dashboard](https://www.codecademy.com/resources/blog/updates-to-the-codecademy-dashboard)
- [Codecademy: accessibility on the platform (learning environment panes)](https://www.codecademy.com/articles/accessibility-on-the-platform)
- [Codecademy Help: updates to the learning environment (Course Menu, Next button)](https://help.codecademy.com/hc/en-us/articles/1260803449210-Updates-to-our-Learning-Environment)
