# Design system: Intern Onboarding Platform

Snapshot of the Intern Onboarding design system artifact, used by Genie Lab. Do not edit this folder: change the artifact, then take a new snapshot.

| | |
|---|---|
| Source | https://claude.ai/artifact/NFbXzzy4J9yj2fi4hndWJ6 (opened from the Intern Onboarding project) |
| Source version | `1794732072-685e` |
| Source last change | 2026-11-15T08:50:00Z: Built from PLATFORM_STYLE_GUIDE.md v1.0 (proposed for review) |
| Snapshot taken | 2026-11-15 |
| Status | All values are proposed implementation values from the platform style guide (v1.0, proposed for review) |
| Machine-readable files | `tokens.json` and `bundle.css` in this folder, copied byte for byte from the artifact |

The artifact's own text is reproduced below without changes, apart from heading levels (moved down so each part nests under this file's sections) and the token tables, which are generated from `tokens.json`. Where Genie Lab's brief or IA plan overrides this system, the decision is recorded in `docs/DECISIONS.md`, not here.

## Contents

1. [Brand book](#1-brand-book)
2. [Tokens](#2-tokens)
3. [Status and microcopy](#3-status-and-microcopy)
4. [Pages and flow](#4-pages-and-flow)
5. [Components](#5-components)

## 1. Brand book

An inviting learning workspace for interns: a black application frame, a light interior, generous rounded cards, expressive headings and soft pastel accents. The direction is **playful clarity**. Home creates energy and points to the next step; lesson pages stay calm for sustained reading. Every value here is a proposed implementation value from the platform style guide (v1.0, proposed for review), not a sampled brand specification.

### Identity

- No approved platform name or logo has been supplied. Set the platform name in plain type (`heading` family, 700, `on-shell`) in the top bar until the approved mark exists. Never draw or approximate a logo.
- Take nothing from the visual reference's own brand: not its name, account identity, medical lesson subjects, events, collaboration toolbars or audio controls.

### Content fundamentals

- Write in UK English and sentence case everywhere: "Home", "My work", "Continue learning", "Submit evidence".
- Label actions with clear verbs: Continue lesson, Start learning, Submit evidence, Save draft, View submission, Record review outcome. Confirm a copy with "Copied".
- Be specific and supportive, and only after confirmation: "Your evidence is saved. You can view it in My work."
- Errors say what happened and the next step: "We couldn't save your changes. Check your connection, then select Save draft again."
- No em dashes, no exaggerated encouragement, no fake urgency, no emoji in headings or badges. One light personal touch per page at most: a greeting or a single decorative sticker.
- Never show fabricated streaks, countdowns, events, completion predictions, users, reviewers or counts. Every number comes from real progress and content data.

### Colour

- On wide screens the page sits on `outer`, the frame and top bar are `shell`, and content sits on `canvas`. Text and icons on `shell` are `on-shell`.
- Reading and working surfaces are `surface`. Keep long lesson prose on `surface` or `canvas`, never on a pastel.
- Pastels mark featured areas and state, a few focal cards per screen: `lilac` for the Continue learning card, `cyan` for progress, orientation and In progress, `mint` for completed work and positive outcomes, `butter` for guidance and attention, `lavender` for Toolkit and prompts. A featured lesson stays `lilac` whatever its status; the badge carries progress.
- Balance by eye, not in code: roughly two-thirds neutral surfaces, the rest split between pastel panels and the black frame and actions. Never fill a screen with equal-colour tiles.
- Set headings, body and primary controls in `ink`; explanatory text in `text-secondary`; metadata in `text-muted` on `canvas`, `surface`, `surface-muted` and `cyan` only. On `lilac`, `mint`, `butter` and `lavender` use `ink` or `text-secondary`, because `text-muted` drops below 4.5:1 there.
- Give every input and meaningful outlined control a `border-control` edge. `border-subtle` is decorative only.
- Show errors as `error-ink` on `error-bg`, always with words and an indicator, never colour alone.
- Use dark ink on pastels; never white text on them. White (`on-shell`) belongs on `shell` and on primary buttons.
- Avoid default blue buttons, neon fills, glossy gradients and tinted paragraph text.

### Typography

- Set headings in `heading` (Bricolage Grotesque), body, controls, navigation and metadata in `body` (Manrope), and code in `code` (the project's existing monospace first). Both faces are variable Google Fonts; load them with the project's existing font approach. The previews here load them from Google Fonts.
- Heading styles: `page-heading`, `lesson-title`, `section-heading`, `card-title`, `lesson-subsection`, `progress-figure`. Body styles: `lesson-body`, `dashboard-body`, `nav-button`, `label-meta`. Code: `code`. Below 768px switch to the matching `-sm` style.
- Keep lesson prose within `width-prose` (about 65 to 75 characters a line), left aligned.
- Let titles wrap. Never clip a lesson title, task instruction, error or reviewer feedback to a fixed-height card. Dashboard descriptions may be shortened only when the full text stays available.
- Reserve `progress-figure` for meaningful progress with a label and scope, never decoration.
- Use installed weights. With static font files choose the nearest weight; never synthesise one.

### Spacing, shape and elevation

- Use only `space-1` to `space-16` (4, 8, 12, 16, 20, 24, 32, 40, 48, 64px).
- Label to helper text `space-1` to `space-2`; icon to label `space-2`; between form fields `space-5` to `space-6`; card internals `space-4` to `space-6`; card padding `space-6` on desktop (up to 28px) and `space-5` on mobile; grid gap `space-6` desktop, `space-4` mobile; main sections `space-8` to `space-10`; lesson teaching sections `space-10` to `space-12`.
- Radii: `radius-shell` frame, `radius-canvas` canvas upper corners, `radius-card` standard cards, `radius-featured` featured cards, `radius-button` every button (always 15px), `radius-input` fields, `radius-code` code panels and callouts, `radius-pill` badges, chips and the nav capsule, `radius-circle` icon buttons and avatars.
- Do not nest many rounded containers. Lesson paragraphs are never separate cards.
- Standard cards have no shadow: white on `canvas` is enough. Featured cards take `shadow-featured`; drawers and dialogs `shadow-overlay`. Hover is a restrained shadow or border change, lifting 2px at most.

### Shell and layout

- Frame: `shell`, centred, at most `width-shell`, 24 to 32px margins on `outer`, `frame-border` sides and `radius-shell` corners. The top bar is at least `height-topbar` and grows with its content. The canvas is inset with `radius-canvas` upper corners.
- Keep content in normal page flow. Never clip the app to 100vh or hide overflow to imitate the reference's device silhouette.
- Top bar: platform identity left; Home, Syllabus, My work, Toolkit in the centre, in that order, always as visible text; Help, Settings and learner identity right. The active item is a `canvas` capsule with `ink` text and `aria-current="page"`; inactive items are `on-shell`.
- Content is at most `width-content`; lesson pages at most `width-lesson-layout` with prose at `width-prose`. Page gutters: `gutter-desktop`, `gutter-tablet`, `gutter-mobile`.
- Page-by-page structure, responsive ranges and the full flow are in Pages and flow.

### Interaction and motion

- Focus: a 3px solid `ink` outline with a 3px offset. On `shell` and other dark surfaces the outline is `on-shell`. Check dark buttons on light surfaces and items in the dark header.
- Targets: `height-control` (44px) as the standard minimum, `height-control-large` (48px) for inputs and primary mobile or form actions. 44px is this product's default, not a claim about the WCAG minimum.
- Buttons: horizontal padding 18 to 22px (`space-5`). Primary hover moves to `text-secondary`, a dark grey, never a new accent.
- Durations: 120 to 180ms for state changes (150ms default) and 180 to 240ms for drawers and dialogs (220ms). Use opacity and small transforms. Honour `prefers-reduced-motion` by setting durations to 0. No automatic celebration.
- A single decorative featured panel may rotate about 1 degree on wide screens. Never rotate reading surfaces, forms, feedback or any mobile card.
- Use links for destinations and buttons for actions, even when they look alike.

### Iconography

- Use one existing outline icon set at `icon-size` (20px) with a consistent stroke. Never add a second icon package to match the reference.
- Icon-only buttons are for familiar utilities only and always carry an accessible name and tooltip. Primary navigation keeps its text labels.
- Avatars show initials on `lavender` when no image exists. Never invent users or reviewers.
- Decorative stickers take empty alt text and stay out of keyboard order.
- No icon set was supplied with the guide, so the previews use plain text glyphs where an icon would sit.

### Accessibility

- Target WCAG 2.2 Level AA for the built product. This system states design intent; it is not a compliance certificate.
- Text 4.5:1, large text 3:1; meaningful boundaries, focus rings and state graphics 3:1 against adjacent colours.
- Never convey availability, progress or validation by colour alone.
- Provide a skip link to main content, logical headings and native elements for keyboard operation.
- A Help drawer that blocks the page is a modal dialog: accessible name, contained focus, inert background on `scrim`, Escape to close and focus returned to its trigger.
- Announce asynchronous status without pulling focus away.
- Test at 320, 360, 390, 768, 1024 and 1440px, plus every width where the layout changes, with long titles, long feedback, failed uploads and the fallback fonts.

### Do not

- Add a supervisor inbox, approval dashboard, scheduling, support chat, events, notifications, floating toolbars, drag handles or graph controls because the reference shows similar ones.
- Label a learner-recorded review as supervisor verified, digitally approved or authorised. Use "Recorded by you from an external review".
- Show Submitted, Saved, Copied or any green success before the action is confirmed.
- Replace "Coming soon" with "Locked", hardcode lesson totals, or publish a lesson because a draft file exists.
- Replace routing, content, review authority or persistence to make a visual easier to build.

## 2. Tokens

Generated from `tokens.json`. Use the token names; never copy raw values into code.

### Colour

Themes: Light. There is no dark theme.

| Token | Value | Usage |
|---|---|---|
| `outer` | `#dff7fa` | Page background around the application frame on wide screens (1200px and above). Same value as `cyan` but a separate role: change one without the other. |
| `shell` | `#080808` | Outer application frame and top bar only. Text and icons on it use `on-shell`. |
| `on-shell` | `#ffffff` | Text and icons on `shell` (20:1) and on primary buttons filled with `ink` (17.9:1). Also the focus outline colour on dark surfaces. Added because the guide names white for these uses without a token. |
| `canvas` | `#f6f6f4` | Main application background inside the frame. Also the fill of the active navigation capsule in the top bar. |
| `surface` | `#ffffff` | Reading surfaces, standard cards, inputs and lesson prose. |
| `surface-muted` | `#eeeeeb` | Search fields, quiet utility regions, placeholders, Coming soon and Not started badges, disabled buttons. |
| `ink` | `#171717` | Headings, body text and primary button fill. 17.93:1 on `surface`, 16.57:1 on `canvas`, 13.21:1 or better on every pastel. Also the code panel surface and the focus outline on light surfaces. |
| `text-secondary` | `#595959` | Explanatory text. 6.47:1 on `canvas`, 7.0:1 on `surface`, 5.16:1 on `lilac`, above 5:1 on every pastel. Also the hover fill of primary buttons (white on it is 7.0:1). |
| `text-muted` | `#6b6b6b` | Metadata on `canvas` (4.93:1), `surface` (5.33:1), `surface-muted` (4.58:1) and `cyan` (4.78:1) only. Fails 4.5:1 on `lilac`, `mint`, `butter` and `lavender`: use `text-secondary` there. On `shell` it meets 3:1 for borders, not for text. |
| `border-subtle` | `#e3e3de` | Decorative separators and non-essential card outlines. Never the only boundary of a form control. |
| `border-control` | `#707070` | Input boundaries and meaningful outlined controls (secondary buttons). 4.95:1 on `surface`, 4.58:1 on `canvas`. |
| `cyan` | `#dff7fa` | Progress overview, orientation, In progress badges, Example and Context callouts, Project kit cards. Ink text 16.07:1. |
| `mint` | `#cdf5d2` | Completed work and positive outcomes: Complete and Accepted badges, confirmed save messages, Checked outcome callouts. Ink text 15.01:1. |
| `lilac` | `#edd5f8` | Featured lesson and the Continue learning card. Stays lilac whatever the lesson status. Ink text 13.21:1. |
| `butter` | `#fbe9ad` | Helpful guidance and attention needed: Awaiting review and Changes requested badges, Before you continue callouts, Templates cards. Ink text 14.82:1. |
| `lavender` | `#e6ddfb` | Toolkit highlights and prompts: Prompt library cards, Submitted badges, avatar initials. |
| `error-bg` | `#fdebec` | Error message and Could not save surfaces, destructive button fill. |
| `error-ink` | `#9f1d20` | Error text and meaningful error indicators, invalid field borders. 6.84:1 on `error-bg`, 7.86:1 on `surface`. |
| `scrim` | `rgba(8, 8, 8, 0.4)` | Backdrop behind the modal Help drawer and dialogs. Added: the guide places a modal backdrop in the layer order without a value. |

### Typography

Font families:

| Family | Stack |
|---|---|
| `heading` | `"Bricolage Grotesque", system-ui, sans-serif` |
| `body` | `"Manrope", system-ui, sans-serif` |
| `code` | `ui-monospace, SFMono-Regular, Consolas, monospace` |

Font files: none bundled; both faces are hosted Google Fonts (see `bundle.css`).

#### Headings (family `heading` unless stated)

| Style | Family | Size | Line height | Weight | Usage |
|---|---|---|---|---|---|
| `page-heading` | `heading` | 36px | 42px | 700 | Main page heading on Home, Syllabus, My work and Toolkit. Guide range 650 to 700. |
| `lesson-title` | `heading` | 36px | 44px | 700 | Full lesson title. Always wraps, never clipped. Guide range 650 to 700. |
| `section-heading` | `heading` | 26px | 34px | 650 | Page sections and lesson sections such as Your task and Knowledge check. |
| `card-title` | `heading` | 22px | 28px | 650 | Card headings, including the Continue learning lesson title. |
| `lesson-subsection` | `heading` | 21px | 29px | 650 | Numbered teaching subsections inside a lesson. |
| `progress-figure` | `heading` | 36px | 40px | 700 | Meaningful progress counts only, always with a label and scope. |

#### Body and interface (family `body` unless stated)

| Style | Family | Size | Line height | Weight | Usage |
|---|---|---|---|---|---|
| `lesson-body` | `body` | 17px | 29px | 400 | Lesson prose, at `width-prose`. |
| `dashboard-body` | `body` | 15px | 23px | 400 | Dashboard and card body text. 400 to 500. |
| `nav-button` | `body` | 14px | 20px | 600 | Navigation items, buttons and field labels. |
| `label-meta` | `body` | 13px | 19px | 600 | Labels, badges and metadata. Use 500 for long metadata lines, 600 for short labels. |

#### Code (family `code` unless stated)

| Style | Family | Size | Line height | Weight | Usage |
|---|---|---|---|---|---|
| `code` | `code` | 14px | 23px | 400 | Code panels and inline code. Prefer the project's existing monospace font. |

#### Small screen (below 768px) (family `heading` unless stated)

| Style | Family | Size | Line height | Weight | Usage |
|---|---|---|---|---|---|
| `page-heading-sm` | `heading` | 28px | 34px | 700 | `page-heading` below 768px. |
| `lesson-title-sm` | `heading` | 28px | 36px | 700 | `lesson-title` below 768px. |
| `section-heading-sm` | `heading` | 23px | 31px | 650 | `section-heading` below 768px. |
| `card-title-sm` | `heading` | 20px | 27px | 650 | `card-title` below 768px. |
| `lesson-subsection-sm` | `heading` | 20px | 28px | 650 | `lesson-subsection` below 768px. |
| `progress-figure-sm` | `heading` | 30px | 36px | 700 | `progress-figure` below 768px. |
| `lesson-body-sm` | `body` | 16px | 28px | 400 | `lesson-body` below 768px. |
| `code-sm` | `code` | 13px | 22px | 400 | `code` below 768px. |

### Spacing and gutters

| Token | Value | Usage |
|---|---|---|
| `space-1` | `4px` | Label to helper text (4 to 8px), badge gaps. |
| `space-2` | `8px` | Icon to label, label to helper text. |
| `space-3` | `12px` | Badge horizontal padding, tight stacks. |
| `space-4` | `16px` | Card internal spacing, mobile grid gap. |
| `space-5` | `20px` | Mobile card padding, button horizontal padding, gap between form fields. |
| `space-6` | `24px` | Desktop card padding and grid gap, gap between form fields. |
| `space-8` | `32px` | Main section gap (32 to 40px). |
| `space-10` | `40px` | Main section gap, lesson teaching sections (40 to 48px). |
| `space-12` | `48px` | Lesson teaching sections. |
| `space-16` | `64px` | Largest page separations. |
| `gutter-desktop` | `32px` | Page gutters at 1200px and above. |
| `gutter-tablet` | `24px` | Page gutters from 768 to 1199px. |
| `gutter-mobile` | `16px` | Page gutters below 768px. |

### Radius

| Token | Value | Usage |
|---|---|---|
| `radius-shell` | `32px` | Desktop application frame. |
| `radius-canvas` | `26px` | Interior canvas upper corners. |
| `radius-card` | `28px` | Standard cards. |
| `radius-featured` | `30px` | Featured cards such as Continue learning. |
| `radius-button` | `15px` | All rectangular buttons. Fixed at 15px. |
| `radius-input` | `14px` | Inputs and textareas. |
| `radius-code` | `16px` | Code panels and lesson callouts. |
| `radius-pill` | `999px` | Badges, compact chips and the navigation capsule. |
| `radius-circle` | `50%` | Circular icon buttons and avatars. |

### Elevation

| Token | Value | Usage |
|---|---|---|
| `shadow-featured` | `0 14px 32px rgba(0, 0, 0, 0.07)` | Featured card only. Standard cards have no shadow. |
| `shadow-overlay` | `0 24px 64px rgba(0, 0, 0, 0.18)` | Help drawer and dialogs. |

### Sizes

| Token | Value | Usage |
|---|---|---|
| `width-shell` | `1600px` | Maximum width of the application frame. |
| `width-content` | `1280px` | Main content maximum width. |
| `width-lesson-layout` | `1120px` | Lesson page maximum width (reading column plus rail). |
| `width-prose` | `760px` | Lesson prose maximum width, about 65 to 75 characters. |
| `width-drawer` | `400px` | Help drawer on desktop, bounded by available width; full width on small screens. |
| `height-topbar` | `80px` | Top bar minimum height; it grows if content needs it. |
| `frame-border` | `8px` | Black frame around the canvas on wide screens. |
| `height-control` | `44px` | Standard minimum control height. |
| `height-control-large` | `48px` | Inputs and primary mobile or form actions. |
| `icon-size` | `20px` | Outline icons. |

## 3. Status and microcopy

### Four separate status dimensions

Availability, learning progress, submission and external review outcome are separate. One coloured badge cannot represent all four. Map this display vocabulary onto the existing data model; never migrate workflow states to match it.

| Dimension | Label | Treatment |
|---|---|---|
| Availability | Available | Neutral, usually omitted when obvious |
| Availability | Coming soon | `surface-muted` with `text-secondary` text |
| Learning | Not started | `surface-muted`, quiet |
| Learning | In progress | `cyan` |
| Learning | Complete | `mint`, only when the configured completion rules are met |
| Submission | Draft | Neutral |
| Submission | Submitted | `lavender` |
| Review outcome | Awaiting review | `butter`, worded as external |
| Review outcome | Changes requested | `butter` plus explanatory text |
| Review outcome | Accepted | `mint` plus the external-record attribution |
| System feedback | Could not save | `error-bg` and `error-ink` with a recovery action |

Accepted external feedback does not pass a knowledge check, and a passed knowledge check does not establish supervisor acceptance. Do not show Review requested or Awaiting supervisor response as if the platform sent a notification.

### States

| State | Treatment |
|---|---|
| Loading content | Stable layout, quiet placeholders and a short loading message; no continuous shimmer |
| No submissions | Explain the first step and link to the right lesson |
| No search results | Show the query and a clear reset |
| Save failed | Inline error near the action; keep the work; give the supported recovery |
| Upload failed | File-specific message with supported retry or remove |
| Session expired | Explain the sign-in need; keep drafts only where persistence supports it |
| Unsaved changes | A factual unsaved indicator and a navigation warning where needed |
| Lesson unavailable | Coming soon with useful navigation, never an empty-looking page |

Use toasts only for brief secondary feedback. Important errors and instructions stay visible next to the affected content. Never show a green success message for an unconfirmed save, upload or submission.

### Microcopy

| Context | Wording |
|---|---|
| Resume learning | Continue lesson |
| Start course | Start learning |
| Evidence action | Submit evidence |
| Persist a draft | Save draft |
| Open work | View submission |
| External decision | Record review outcome |
| Unavailable lesson | Coming soon |
| Copy confirmed | Copied |
| Save error | We couldn't save your changes. [Actual next step.] |
| Confirmed save | Your evidence is saved. You can view it in My work. |
| Review record intro | Record the decision your supervisor shared with you. |
| Review attribution | Recorded by you from an external review |

### Lesson callouts

Every callout carries a short label as well as colour.

- `cyan`: Example, Context.
- `butter`: Before you continue, Dependency.
- `mint`: Checked outcome, only when the check really happened.
- Neutral (`surface-muted`): Reference, Note.

Never label an unperformed check as Passed.

### Knowledge checks

Support the content's real format: open questions with no invented scoring; multiple choice with native radio or checkbox semantics and visible labels; automated results only where marking is implemented; self-check guidance labelled as guidance. Show answered and remaining counts only from saved data, and keep responses after a recoverable error.

## 4. Pages and flow

### Navigation

Keep the four primary labels, in this order, as visible text on every authenticated page:

1. Home
2. Syllabus
3. My work
4. Toolkit

Help (a drawer) and Settings are reachable from every authenticated page. Before sign-in, use a simplified branded shell with no navigation.

| Area | Contents and connections |
|---|---|
| Sign in | Entry to the platform |
| Welcome tour | First-sign-in introduction, then Home |
| Home | Continue to the relevant available lesson |
| Syllabus | Ten day pages leading to lesson pages |
| Lesson | Learning content, Your task, Submit evidence, Knowledge check |
| My work | Submitted work and submission detail |
| Submission detail | Evidence, submission history where supported, recorded review outcome |
| Toolkit | Prompt library, Command sheet, Templates, Glossary, Project kit, Status guide |
| Help drawer | Available throughout the authenticated experience |
| Settings | Available throughout the authenticated experience |

Supervisor review happens outside the platform. Interns record the outcome they receive in My work.

### Page layouts

| Layout | Structure |
|---|---|
| Home (dashboard) | Flexible main column plus a 300 to 340px contextual rail |
| Syllabus | Day groups with a clear sequential lesson list |
| Day page | Day introduction, lesson rows, relevant preparation |
| Lesson | Reading column plus a 260 to 280px task rail on wide screens |
| My work | Filter row and submission list; detail opens as its own page |
| Toolkit | Category introduction, search only if implemented, resource grid |
| Settings | Narrow form layout with grouped panels |

### Responsive ranges

| Width | Behaviour |
|---|---|
| 1200px and above | Full frame on `outer`, horizontal top bar, main column plus rail |
| 768 to 1199px | Reduced outer margins; the rail moves below when reading space gets cramped |
| Below 768px | Single column, compact brand row with a full-width four-item nav row beneath, `-sm` type styles, no rotation |

On narrow screens keep all four nav labels visible and let the row grow rather than truncate. Move Help and Settings into an accessible account menu when space runs out. Sticky navigation never covers headings or focus.

### Home

Home answers one question: what should I do next?

1. Welcome heading (`page-heading`) and one supporting line.
2. Continue learning card (`lilac`, `radius-featured`, `shadow-featured`) with day label, lesson ID, accurate status, one short description and one black primary action: Continue lesson, or Start learning for a new learner.
3. A compact progress summary (Available lessons, Completed, In progress) only where the counts are reliably defined. Show the scope with any percentage.
4. Today's or the current day's lessons.
5. Recent work or a contextual rail built from real data.

Derive the next lesson from saved progress and availability, never a hardcoded day. If the next item is Coming soon, say so and offer a relevant available destination.

### Syllabus and day pages

- Show day number, unit title, lesson count and factual progress.
- Open a day through a labelled action. Use `surface` or `surface-muted` cards; reserve `lilac` or `cyan` for the current day.
- Keep lesson order explicit with IDs in text.
- A lesson row has its ID and title, an availability badge where relevant, a learning-progress badge and one clear action. Never nest a link inside a whole-card link.
- An optional dotted connector may hint at a learning path. The list stays readable without it, and no graph controls are added.

### Lesson

The lesson page is calmer than Home. Order:

1. Breadcrumbs: Syllabus, Day, Lesson.
2. Day and lesson identifier with status.
3. Full title (`lesson-title`).
4. Objectives, prerequisites and materials.
5. Numbered teaching sections (`lesson-subsection`, `lesson-body`).
6. Your task.
7. Submit evidence.
8. Knowledge check.
9. Next relevant lesson or return link.

On wide screens a 260 to 280px rail holds an In this lesson outline and links to Your task, Submit evidence and Knowledge check, sticky below the top bar. On mobile these become a compact contents control before the article.

An unpublished lesson shows a Coming soon panel with its known ID and title, a short accurate message, Back to syllabus and a help route. No empty sections, fake progress or Submit evidence.

### Submit evidence

- Single column, labels above controls, helper text visible before submitting, required and optional stated in words.
- Render only supported fields (summary, links, uploads). File types and size limits match real configuration. Drag and drop always sits beside a normal Choose files control.
- Primary: Submit evidence. Secondary: Save draft, only where persistence exists. Text link: Return to lesson, with unsaved-change handling.
- Show Submitted only after confirmation, then link to the submission in My work. On failure keep the entered material and give the agreed next step; never invite a retry that could duplicate an unknown outcome.

### My work and submission detail

- Rows show lesson ID, title, evidence type where useful, last saved or submitted time and submission status. Stack metadata predictably on mobile. Filter only by data the platform stores.
- Detail order: heading and lesson link; evidence summary with accessible links and files; submission date and history where supported; external review outcome record; follow-up action.
- The record opens with "Record the decision your supervisor shared with you." and carries the attribution "Recorded by you from an external review".

### Toolkit

| Category | Card | Main action |
|---|---|---|
| Prompt library | `lavender` accent, purpose and scope | View prompt / Copy prompt |
| Command sheet | `surface` with a quiet code preview | View commands / Copy |
| Templates | `butter` accent, output and format named | Open template / Download |
| Glossary | `surface`, term and concise definition | Read definition |
| Project kit | `cyan` accent, real file types and version | Open resource / Download |
| Status guide | Neutral, labelled state examples | View status guide |

Search and filters appear only if implemented. Copy never runs a command; "Copied" appears only on success, with a selectable fallback.

### Welcome tour

Three short steps beside a `mint`, `cyan` or `lilac` illustration panel: find your next lesson; complete your task and submit evidence; record external review outcomes in My work. Show Skip tour and a progress label ("Step 1 of 3"). Tour completion is separate from lesson progress.

### Help and Settings

- Help drawer: right side at `width-drawer` on desktop, full width on small screens, heading, explicit Close, context help (glossary terms, status explanations, Toolkit links). Closing keeps scroll position and unsaved work. No support chat or response-time promises.
- Settings: `surface` grouped panels for real preferences and account actions only, a clear save action with accurate feedback, and a labelled Sign out.

## 5. Components

Every component is styled by the `ob-` classes in `bundle.css`. Each card gives its guidelines, then the reference markup from its preview. Preview text such as "Platform name", "Day 2: Components" or sample figures is placeholder data, not content.

[AppShell](#appshell), [Badge](#badge), [Breadcrumbs](#breadcrumbs), [Button](#button), [Callout](#callout), [Card](#card), [CodePanel](#codepanel), [ComingSoonPanel](#comingsoonpanel), [ContinueLearningCard](#continuelearningcard), [HelpDrawer](#helpdrawer), [InlineAlert](#inlinealert), [LessonRow](#lessonrow), [ProgressStat](#progressstat), [QuestionPanel](#questionpanel), [ReviewRecord](#reviewrecord), [SubmissionRow](#submissionrow), [TaskCard](#taskcard), [TextField](#textfield), [ToolkitCard](#toolkitcard)

### AppShell

The persistent authenticated frame: `outer` backdrop, `shell` frame and top bar, `canvas` interior.

**Classes:** `ob-outer` > `ob-frame` > `ob-topbar` (with `data-surface="dark"`) and `ob-canvas`. Inside the top bar: `ob-brand`, `ob-nav` (a `<nav>` list), `ob-utils` with `ob-btn--on-dark` utilities and `ob-avatar`. Narrow screens: add `ob-topbar--compact` so the four nav items drop to a full-width row.

**You provide:** the approved platform name or logo (none supplied yet, so set the name in plain type), the current route for `aria-current="page"`, the learner's initials, Help and Settings handlers.

- Labels and order are fixed: Home, Syllabus, My work, Toolkit. Always visible text; an icon may accompany a label, never replace it.
- Active item: `canvas` capsule, `ink` text. Inactive: `on-shell`, underline on hover.
- Frame: up to `width-shell`, 24 to 32px margins on `outer`, `frame-border` sides, `radius-shell` corners; top bar at least `height-topbar` and allowed to grow.
- Content stays in page flow. Never clip to 100vh or hide overflow.
- Help and Settings move into an accessible account menu when space is short. Sticky headers never hide headings or focus.
- Use a simple capsule for the active item, not a sculpted notch.
- Before sign-in use a simplified branded shell with no navigation.

**Reference markup**

```html
<!-- @dsCard group="Shell" height=272 width=1100 subtitle="Black frame and top bar, light canvas" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>AppShell</title></head>
<body>
<div class="ob-outer">
  <div class="ob-frame">
    <header class="ob-topbar" data-surface="dark">
      <a class="ob-brand" href="#">Platform name</a>
      <nav aria-label="Primary"><ul class="ob-nav">
        <li><a href="#" aria-current="page">Home</a></li>
        <li><a href="#">Syllabus</a></li>
        <li><a href="#">My work</a></li>
        <li><a href="#">Toolkit</a></li>
      </ul></nav>
      <div class="ob-utils">
        <button class="ob-btn ob-btn--on-dark ob-btn--icon" type="button" aria-label="Help" title="Help">?</button>
        <button class="ob-btn ob-btn--on-dark" type="button">Settings</button>
        <span class="ob-avatar" aria-hidden="true">AL</span>
      </div>
    </header>
    <main class="ob-canvas">
      <h1 class="ob-h" style="font-size:36px;line-height:42px;font-weight:700">Welcome back</h1>
      <p class="ob-p ob-secondary" style="margin-top:var(--space-2)">Pick up your next lesson below.</p>
    </main>
  </div>
</div>
</body>
</html>
```

### Badge

A short pill that states one status from one dimension: availability, learning progress, submission or external review outcome.

**Classes:** `ob-badge` (Not started) plus `--soon`, `--progress`, `--complete`, `--draft`, `--submitted`, `--error`, `--awaiting`, `--changes`, `--accepted`.

**You provide:** the label text from the display vocabulary in Status and microcopy, mapped from the real data model.

- The word carries the meaning; colour supports it. Never a colour-only dot.
- Show several badges side by side when several dimensions apply. One badge never covers two.
- Complete appears only when the configured completion rules are met; Accepted always sits near the "Recorded by you from an external review" attribution.
- Coming soon is not Locked. Keep "Coming soon" while a lesson is unpublished.
- Badges are not buttons. 13px `label-meta` text, `radius-pill`.

**Reference markup**

```html
<!-- @dsCard group="Status" height=192 subtitle="One dimension per badge" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>Badge</title></head>
<body>
<div class="ob-col" style="padding:var(--space-6)">
  <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);align-items:center"><span class="ob-meta" style="width:110px">Availability</span><span class="ob-badge ob-badge--soon">Coming soon</span></div>
  <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);align-items:center"><span class="ob-meta" style="width:110px">Learning</span><span class="ob-badge">Not started</span><span class="ob-badge ob-badge--progress">In progress</span><span class="ob-badge ob-badge--complete">Complete</span></div>
  <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);align-items:center"><span class="ob-meta" style="width:110px">Submission</span><span class="ob-badge ob-badge--draft">Draft</span><span class="ob-badge ob-badge--submitted">Submitted</span><span class="ob-badge ob-badge--error">Could not save</span></div>
  <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);align-items:center"><span class="ob-meta" style="width:110px">Review outcome</span><span class="ob-badge ob-badge--awaiting">Awaiting review</span><span class="ob-badge ob-badge--changes">Changes requested</span><span class="ob-badge ob-badge--accepted">Accepted</span></div>
</div>
</body>
</html>
```

### Breadcrumbs

The trail at the top of every lesson: Syllabus, then the day, then the current lesson.

**Classes:** `ob-crumbs` on a `<nav aria-label="Breadcrumb">` wrapping an `<ol>`.

**You provide:** the day and lesson labels from content data and their links; the last item is plain text with `aria-current="page"`.

- Always three levels on lesson pages: Syllabus, Day, Lesson.
- Wrap on narrow screens; never truncate the day name to an ellipsis.
- Links are `ink`, separators and the current item `text-muted` on `canvas` or `surface`.

**Reference markup**

```html
<!-- @dsCard group="Shell" height=64 subtitle="Syllabus, Day, Lesson" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>Breadcrumbs</title></head>
<body>
<nav class="ob-crumbs" aria-label="Breadcrumb" style="padding:var(--space-5) var(--space-6)">
  <ol><li><a href="#">Syllabus</a></li><li><a href="#">Day 2: Components</a></li><li><span aria-current="page">Lesson 2.3</span></li></ol>
</nav>
</body>
</html>
```

### Button

The one dominant action per context is a black primary button with 15px corners; everything else steps down to secondary, tertiary or destructive.

**Classes:** `ob-btn` plus one of `ob-btn--primary`, `ob-btn--secondary`, `ob-btn--tertiary`, `ob-btn--destructive`; add `ob-btn--large` (48px) for primary mobile and form actions, `ob-btn--icon` for a circular icon-only button, `ob-btn--on-dark` for a utility button on `shell`.

**You provide:** a native `<button>` for actions or an `<a>` for destinations, a sentence-case verb label, `aria-label` and `title` on icon-only buttons, `disabled` plus a visible reason beside it, `aria-busy="true"` with a stable label while loading.

- One primary per main context: Continue lesson, Start learning, Submit evidence.
- Primary is `ink` with `on-shell` text and hovers to `text-secondary`. Never a blue or pastel primary.
- Secondary is `surface` with a `border-control` edge. Use Save draft only where drafts really persist.
- Destructive uses `error-ink` on `error-bg` with explicit wording ("Remove file", never "OK").
- Minimum height `height-control`; horizontal padding `space-5`; corners always `radius-button`.
- Loading keeps the layout stable and defines what a second press does. Never fade a parent container so helper text becomes unreadable.

**Reference markup**

```html
<!-- @dsCard group="Actions" height=176 subtitle="Primary, secondary, tertiary, destructive, icon-only" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>Button</title></head>
<body>
<div class="ob-col" style="padding:var(--space-6)">
  <div style="display:flex;flex-wrap:wrap;gap:var(--space-4);align-items:center">
    <button class="ob-btn ob-btn--primary" type="button">Continue lesson</button>
    <button class="ob-btn ob-btn--secondary" type="button">Save draft</button>
    <a class="ob-btn ob-btn--tertiary" href="#">Return to lesson</a>
    <button class="ob-btn ob-btn--destructive" type="button">Remove file</button>
    <button class="ob-btn ob-btn--secondary ob-btn--icon" type="button" aria-label="Help" title="Help">?</button>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:var(--space-4);align-items:center">
    <button class="ob-btn ob-btn--primary ob-btn--large" type="button">Submit evidence</button>
    <button class="ob-btn ob-btn--primary ob-btn--large" type="button" aria-busy="true">Submitting…</button>
    <button class="ob-btn ob-btn--primary" type="button" disabled aria-describedby="why">Submit evidence</button>
    <span id="why" class="ob-meta">Add a summary to submit.</span>
  </div>
</div>
</body>
</html>
```

### Callout

A short highlighted aside inside lesson content, always labelled in words as well as colour.

**Classes:** `ob-callout` plus `--example` (cyan: Example, Context), `--dependency` (butter: Before you continue, Dependency), `--checked` (mint: Checked outcome), `--note` (surface-muted: Reference, Note). Label: `ob-callout__label`.

**You provide:** the label and a sentence or two of content.

- `radius-code` corners, `ink` text, no left-border accent stripe.
- Checked outcome only when the check really happened. Never label an unperformed check as Passed.
- Keep callouts short; long teaching text stays in the prose.

**Reference markup**

```html
<!-- @dsCard group="Lesson" height=410 width=760 subtitle="Label plus colour, inside lesson prose" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>Callout</title></head>
<body>
<div class="ob-col" style="padding:var(--space-6)">
  <aside class="ob-callout ob-callout--example"><span class="ob-callout__label">Example</span><p class="ob-p">A button that opens the Help drawer is an action, so it is a button, not a link.</p></aside>
  <aside class="ob-callout ob-callout--dependency"><span class="ob-callout__label">Before you continue</span><p class="ob-p">Finish Lesson 2.1 so your project runs locally.</p></aside>
  <aside class="ob-callout ob-callout--checked"><span class="ob-callout__label">Checked outcome</span><p class="ob-p">The page builds without errors after this step.</p></aside>
  <aside class="ob-callout ob-callout--note"><span class="ob-callout__label">Note</span><p class="ob-p">The Glossary in Toolkit explains every term in this lesson.</p></aside>
</div>
</body>
</html>
```

### Card

A rounded container for one unit of dashboard or Toolkit content; white is the default, pastels are the exception.

**Classes:** `ob-card`, with `ob-card--featured` (lilac, `radius-featured`, `shadow-featured`), `ob-card--cyan`, `--mint`, `--butter`, `--lavender`, `--muted`, `--outlined`. Title: `ob-card__title` (`card-title`). Actions row: `ob-card__actions`.

**You provide:** heading, content and at most one primary action, plus the grid it sits in.

- Mostly white cards on `canvas`, with a few pastel focal cards. Roughly two-thirds of a screen stays neutral.
- Padding `space-6` desktop, `space-5` mobile; `radius-card` corners.
- No fixed heights. Align grids through layout, never by truncating titles or feedback.
- Standard cards have no shadow. Only the featured card takes `shadow-featured`.
- On pastel cards use `ink` or `text-secondary`, never `text-muted`.
- Avoid nested interactive targets: either one link wraps a single-action card, or the card is static with separate actions.
- Lesson prose never goes into cards.

**Reference markup**

```html
<!-- @dsCard group="Surfaces" height=260 width=960 subtitle="Standard white, featured lilac, selective pastel" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>Card</title></head>
<body>
<div style="padding:var(--space-6);display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-6);align-items:start">
  <article class="ob-card">
    <h3 class="ob-card__title">Day 2: Components</h3>
    <p class="ob-p ob-secondary">Five lessons on reading and changing shared components.</p>
    <span class="ob-meta">Standard card · surface</span>
  </article>
  <article class="ob-card ob-card--featured">
    <h3 class="ob-card__title">Featured card</h3>
    <p class="ob-p">The single focal card on a screen. Lilac, radius-featured and the only card with a shadow.</p>
  </article>
  <article class="ob-card ob-card--butter">
    <h3 class="ob-card__title">Before you start</h3>
    <p class="ob-p">Pastel cards carry guidance or state. Use a few per screen, never a wall of them.</p>
  </article>
</div>
</body>
</html>
```

### CodePanel

A dark panel for code, terminal commands and Claude prompts, with a header naming its real language and a Copy action.

**Classes:** `ob-code` (with `data-surface="dark"`) > `ob-code__head` (`ob-code__lang` and an `ob-btn--on-dark` Copy button) and a `<pre>`.

**You provide:** the code text, its language or context (TypeScript, TSX, CSS, Terminal, Claude prompt) and a copy handler.

- Copy never executes anything. Show "Copied" only after the clipboard write succeeds; otherwise tell the learner to select the text, which stays selectable.
- Preserve line breaks; long lines scroll inside the panel, never the whole page.
- No play icon on text that is not executable.
- Long prompts may wrap, or collapse behind "Expand prompt" while the full text stays accessible.
- `ink` surface, `on-shell` text (17.9:1), `radius-code`, `code` type style.

**Reference markup**

```html
<!-- @dsCard group="Lesson" height=200 width=760 subtitle="Dark panel, real language label, Copy" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>CodePanel</title></head>
<body>
<div style="padding:var(--space-6)">
   <figure class="ob-code" style="margin:0" data-surface="dark">
     <figcaption class="ob-code__head"><span class="ob-code__lang">Terminal</span><button class="ob-btn ob-btn--on-dark" type="button" id="copy">Copy</button></figcaption>
     <pre id="src"><code>npm install
npm run dev -- --port 4173</code></pre>
   </figure>
   <p class="ob-meta" id="status" role="status" style="margin-top:var(--space-2)"></p>
 </div>
<script>
document.getElementById('copy').addEventListener('click', function () {
  var t = document.getElementById('src').innerText, s = document.getElementById('status'), b = this;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(t).then(function () { b.textContent = 'Copied'; s.textContent = ''; },
      function () { s.textContent = "Copy isn't available here. Select the text to copy it."; });
  } else { s.textContent = "Copy isn't available here. Select the text to copy it."; }
});
</script>
</body>
</html>
```

### ComingSoonPanel

The page or panel shown in place of an unpublished lesson.

**Classes:** `ob-soon` with a `ob-badge--soon` badge, heading, message and `ob-card__actions`.

**You provide:** the known lesson ID and title, an accurate availability message, the syllabus link and an optional help route.

- Show it whenever the lesson is unpublished, even if a draft file exists elsewhere.
- No empty lesson sections, no fake progress, no Submit evidence.
- Say "Coming soon", never "Locked".
- Keep it on `surface-muted`; it should look calm, not broken.

**Reference markup**

```html
<!-- @dsCard group="Syllabus" height=284 subtitle="Unpublished lesson, with useful navigation" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>ComingSoonPanel</title></head>
<body>
<div style="padding:var(--space-6)">
  <section class="ob-soon" aria-labelledby="cs">
    <span class="ob-badge ob-badge--soon">Coming soon</span>
    <h2 id="cs" class="ob-h" style="font-size:26px;line-height:34px;font-weight:650">Lesson 3.3: Testing your change</h2>
    <p class="ob-p ob-secondary">This lesson isn't published yet. Your progress on other lessons is unaffected.</p>
    <div class="ob-card__actions"><a class="ob-btn ob-btn--secondary" href="#">Back to syllabus</a><a class="ob-link" href="#">Open Help</a></div>
  </section>
</div>
</body>
</html>
```

### ContinueLearningCard

The featured lilac card that answers "what should I do next?" on Home.

**Classes:** `ob-card ob-card--featured` with a meta row (day and lesson ID in `text-secondary`, status badge), the title in `page-heading` or `card-title`, one short description and `ob-card__actions` holding a black primary link.

**You provide:** the next lesson derived from saved progress and availability rules, its ID, title, status and description; the action label Continue lesson (or Start learning for a new learner) and its destination.

- Always `lilac`, whatever the status; the badge carries progress.
- Exactly one primary action, styled `ob-btn--primary`.
- Never guess the lesson from a hardcoded day number.
- If the next item is Coming soon, say so in the card and offer a relevant available destination instead of Continue lesson.
- An optional small decorative sticker (empty alt, not focusable) may sit in a corner without covering text. A 1 degree rotation is allowed on wide screens only.
- Meta text on lilac uses `text-secondary`, never `text-muted`.

**Reference markup**

```html
<!-- @dsCard group="Home" height=364 width=760 subtitle="The one featured card on Home" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>ContinueLearningCard</title></head>
<body>
<div style="padding:var(--space-6)">
  <article class="ob-card ob-card--featured" style="gap:var(--space-4);padding:28px">
    <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);align-items:center">
      <span style="font-size:13px;font-weight:600;color:var(--text-secondary)">Day 2 · Lesson 2.2</span>
      <span class="ob-badge ob-badge--progress">In progress</span>
    </div>
    <h2 class="ob-h" style="font-size:36px;line-height:42px;font-weight:700">Reading a component file before you change it</h2>
    <p class="ob-p ob-secondary" style="max-width:52ch">Find the props, follow where styles come from and note what the component expects from its parent.</p>
    <div class="ob-card__actions"><a class="ob-btn ob-btn--primary ob-btn--large" href="#">Continue lesson</a><a class="ob-link" href="#">View syllabus</a></div>
  </article>
</div>
</body>
</html>
```

### HelpDrawer

Context help that slides in from the right on any authenticated page.

**Classes:** `ob-scrim` (the backdrop on `scrim`) > `ob-drawer` with `ob-drawer__head` (heading and an explicit Close button) and `<section>` groups.

**You provide:** the trigger, context-relevant help for the current page, glossary and status links, and modal behaviour.

- `width-drawer` on desktop, bounded by the viewport; full width on small screens. `shadow-overlay`, 180 to 240ms entrance, none with reduced motion.
- When it blocks the page it is a modal dialog: accessible name, contained focus, inert background, Escape closes, focus returns to the trigger. If the page stays interactive, do not mark it modal.
- Closing keeps the page's scroll position and unsaved work.
- Offer Replay the welcome tour only if tour replay is implemented.
- No support chat and no response-time promises.

**Reference markup**

```html
<!-- @dsCard group="Overlays" height=520 width=960 subtitle="Modal right-side drawer" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>HelpDrawer</title></head>
<body>
<div class="ob-scrim" style="height:520px;padding:var(--space-4) 0">
  <div class="ob-drawer" role="dialog" aria-modal="true" aria-labelledby="hd" style="height:100%">
    <div class="ob-drawer__head"><h2 id="hd" class="ob-h" style="font-size:26px;line-height:34px;font-weight:650">Help</h2><button class="ob-btn ob-btn--secondary" type="button">Close</button></div>
    <section><h3>On this page</h3><p class="ob-p">Submit evidence saves your work to My work. You can save a draft first.</p></section>
    <section><h3>Glossary</h3><ul><li><a class="ob-link" href="#">Evidence</a></li><li><a class="ob-link" href="#">Knowledge check</a></li></ul></section>
    <section><h3>Statuses</h3><div class="ob-tk__chips"><span class="ob-badge ob-badge--submitted">Submitted</span><span class="ob-badge ob-badge--awaiting">Awaiting review</span></div><a class="ob-link" href="#">Open the Status guide</a></section>
    <section><h3>Tour</h3><a class="ob-link" href="#">Replay the welcome tour</a></section>
  </div>
</div>
</body>
</html>
```

### InlineAlert

A message placed next to the content it concerns: confirmed success, guidance or an error with its recovery.

**Classes:** `ob-alert` plus `--success` (mint), `--info` (butter), `--error` (error-bg with an `error-ink` edge); `ob-glyph` indicator, `ob-alert__title`.

**You provide:** the message, the real next step, and `role="status"` (polite) or `role="alert"` (errors).

- Success only after the save, upload or submission is confirmed. Never a green message for an unconfirmed result.
- Errors keep the learner's input and give the agreed recovery. Do not invite a retry that could duplicate an unknown outcome.
- Important errors stay visible near the affected content; toasts are for brief secondary feedback only.
- Announce status without moving focus.

**Reference markup**

```html
<!-- @dsCard group="Status" height=316 width=760 subtitle="Confirmed success, guidance, error with recovery" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>InlineAlert</title></head>
<body>
<div class="ob-col" style="padding:var(--space-6)">
  <div class="ob-alert ob-alert--success" role="status"><span class="ob-glyph" aria-hidden="true">✓</span><div><p class="ob-alert__title">Your evidence is saved.</p><p class="ob-p">You can view it in <a class="ob-link" href="#">My work</a>.</p></div></div>
  <div class="ob-alert ob-alert--info"><span class="ob-glyph" aria-hidden="true">i</span><div><p class="ob-alert__title">You have unsaved changes.</p><p class="ob-p">Save a draft before leaving this page.</p></div></div>
  <div class="ob-alert ob-alert--error" role="alert"><span class="ob-glyph" aria-hidden="true">!</span><div><p class="ob-alert__title">We couldn't save your changes.</p><p class="ob-p">Your text is still here. Check your connection, then select Save draft again.</p></div></div>
</div>
</body>
</html>
```

### LessonRow

One lesson in a syllabus or day page list: ID, full title, the relevant badges and one clear action.

**Classes:** an `ob-list` of `ob-row` items: `ob-row__id`, `ob-row__title`, `ob-row__badges`, then one link. Add `ob-row--current` (cyan) to the current lesson only; give its badge a `surface` fill so it stays distinct.

**You provide:** lesson ID, title, availability and learning status from data, and the destination.

- Keep order explicit through IDs in text, not just position or a connector line.
- One action per row: Start lesson, Continue lesson or Review lesson. No action for Coming soon; state "Not yet published".
- Never nest the action inside a whole-row link.
- Let titles wrap. On mobile stack ID and title above badges and action.
- An optional dotted connector between rows is decoration; the list must read the same without it.

**Reference markup**

```html
<!-- @dsCard group="Syllabus" height=300 width=860 subtitle="ID, title, availability, progress, one action" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>LessonRow</title></head>
<body>
<ul class="ob-list" style="padding:var(--space-6)">
  <li class="ob-row"><span class="ob-row__id">2.1</span><span class="ob-row__title">Setting up your project</span><span class="ob-row__badges"><span class="ob-badge ob-badge--complete">Complete</span></span><a href="#">Review lesson</a></li>
  <li class="ob-row ob-row--current"><span class="ob-row__id">2.2</span><span class="ob-row__title">Reading a component file before you change it</span><span class="ob-row__badges"><span class="ob-badge ob-badge--progress" style="background:var(--surface)">In progress</span></span><a href="#">Continue lesson</a></li>
  <li class="ob-row"><span class="ob-row__id">2.3</span><span class="ob-row__title">Writing your first prop</span><span class="ob-row__badges"><span class="ob-badge">Not started</span></span><a href="#">Start lesson</a></li>
  <li class="ob-row"><span class="ob-row__id">2.4</span><span class="ob-row__title">Styling with shared tokens</span><span class="ob-row__badges"><span class="ob-badge ob-badge--soon">Coming soon</span></span><span class="ob-meta">Not yet published</span></li>
</ul>
</body>
</html>
```

### ProgressStat

A compact progress card on Home: a label, one `progress-figure` and a line stating its scope.

**Classes:** an `ob-card` (first one `ob-card--cyan`) holding `ob-stat__label`, `ob-stat__figure`, `ob-stat__scope`.

**You provide:** counts read from current content and progress data, and the scope sentence.

- Show only counts that are reliably defined: Available lessons, Completed, In progress.
- Never hardcode a total. Planned lesson slots, flow labels such as "Lesson (39)" and drafted files are not publication.
- A percentage always states its denominator.
- No streaks, countdowns, event dates or completion predictions.
- The figures in this preview are sample data.

**Reference markup**

```html
<!-- @dsCard group="Home" height=200 width=960 subtitle="Counts from real progress data, with scope" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>ProgressStat</title></head>
<body>
<div style="padding:var(--space-6);display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-6)">
  <div class="ob-card ob-card--cyan"><span class="ob-stat__label">Available lessons</span><span class="ob-stat__figure">24</span><span class="ob-stat__scope">Published so far in this course</span></div>
  <div class="ob-card"><span class="ob-stat__label">Completed</span><span class="ob-stat__figure">9</span><span class="ob-stat__scope">of 24 available lessons</span></div>
  <div class="ob-card"><span class="ob-stat__label">In progress</span><span class="ob-stat__figure">2</span><span class="ob-stat__scope">Started, not yet complete</span></div>
</div>
</body>
</html>
```

### QuestionPanel

One knowledge-check question in a white panel with a restrained pastel header.

**Classes:** `ob-card ob-card--outlined` with `ob-qhead` (lavender pill), an `ob-fieldset` with a `<legend>`, and `ob-option` labels around native inputs.

**You provide:** the question in its real format (open question, single or multiple choice) and any saved responses.

- Native radio or checkbox semantics with visible labels; open questions use a labelled textarea.
- Show results only where automated marking is implemented and the question data supports it. Self-check guidance is labelled as guidance, not an examiner's decision.
- Answered and remaining counts come only from saved data. Keep responses after a recoverable error.
- A passed check never implies supervisor acceptance.

**Reference markup**

```html
<!-- @dsCard group="Lesson" height=362 width=760 subtitle="Knowledge check, native semantics" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>QuestionPanel</title></head>
<body>
<div style="padding:var(--space-6)">
  <form class="ob-card ob-card--outlined" style="gap:var(--space-4)">
    <span class="ob-qhead">Question 1</span>
    <fieldset class="ob-fieldset">
      <legend>Which element should open the Help drawer?</legend>
      <label class="ob-option"><input type="radio" name="q1"> A link to a Help page</label>
      <label class="ob-option"><input type="radio" name="q1"> A button with an accessible name</label>
      <label class="ob-option"><input type="radio" name="q1"> A clickable heading</label>
    </fieldset>
    <p class="ob-help">Self-check guidance: compare your answer with the explanation after you save.</p>
  </form>
</div>
</body>
</html>
```

### ReviewRecord

The learner's record of a supervisor decision that happened outside the platform, shown on the submission detail page.

**Classes:** `ob-card ob-card--outlined` with a heading, the intro line, an `ob-dl` definition list and the `ob-attrib` attribution.

**You provide:** only the fields the product supports (outcome, reviewer name, review date, feedback, learner-recorded timestamp) and the edit action if one exists.

- Always open with "Record the decision your supervisor shared with you." and show "Recorded by you from an external review".
- Never label it Supervisor verified, Digitally approved or Authorised by supervisor without a real verification mechanism.
- No Review requested or Awaiting supervisor response that implies the platform notified anyone.
- Never clip feedback; long feedback wraps in full.
- Accepted does not mark a knowledge check passed.
- The reviewer value in this preview is placeholder text, not an invented person.

**Reference markup**

```html
<!-- @dsCard group="My work" height=480 width=760 subtitle="Learner-recorded external review outcome" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>ReviewRecord</title></head>
<body>
<div style="padding:var(--space-6)">
  <section class="ob-card ob-card--outlined" aria-labelledby="rr" style="gap:var(--space-4)">
    <h2 id="rr" class="ob-h" style="font-size:26px;line-height:34px;font-weight:650">Review outcome</h2>
    <p class="ob-p ob-secondary">Record the decision your supervisor shared with you.</p>
    <dl class="ob-dl">
      <dt>Outcome</dt><dd><span class="ob-badge ob-badge--accepted">Accepted</span></dd>
      <dt>Reviewer</dt><dd>Name as given by the learner</dd>
      <dt>Review date</dt><dd>13 Nov 2026</dd>
      <dt>Feedback</dt><dd>Clear summary. Next time, include the mobile screenshot at 360px as well.</dd>
      <dt>Recorded</dt><dd>13 Nov 2026, 16:42</dd>
    </dl>
    <span class="ob-attrib"><span class="ob-glyph" style="background:var(--surface-muted);color:var(--ink)" aria-hidden="true">i</span>Recorded by you from an external review</span>
    <div class="ob-card__actions"><button class="ob-btn ob-btn--secondary" type="button">Edit record</button></div>
  </section>
</div>
</body>
</html>
```

### SubmissionRow

One item in the My work list: lesson, title, evidence type, time and status, with a link to its detail page.

**Classes:** `ob-list` of `ob-sub` items, each with a content column (`ob-meta` lines, title, `ob-sub__meta`) and `ob-sub__actions` (badges and a View submission link).

**You provide:** lesson ID and title, evidence type where useful, last saved or submitted time, submission status and any recorded review outcome.

- A readable list, not a dense spreadsheet. On mobile stack metadata in a predictable order: lesson, title, time, badges, action.
- Submission and review outcome are separate badges.
- Filters only for data the platform stores (lesson, day, existing statuses).
- Empty state: explain the first step and link to the relevant lesson.

**Reference markup**

```html
<!-- @dsCard group="My work" height=284 width=960 subtitle="One submission in the My work list" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>SubmissionRow</title></head>
<body>
<ul class="ob-list" style="padding:var(--space-6);gap:var(--space-4)">
  <li class="ob-sub">
    <div class="ob-col" style="gap:var(--space-1)"><span class="ob-meta">Lesson 2.2 · Summary and screenshot</span><strong style="font-size:17px">Reading a component file before you change it</strong><div class="ob-sub__meta"><span class="ob-meta">Submitted 12 Nov 2026, 14:20</span></div></div>
    <div class="ob-sub__actions"><span class="ob-badge ob-badge--submitted">Submitted</span><span class="ob-badge ob-badge--accepted">Accepted</span><a class="ob-btn ob-btn--secondary" href="#">View submission</a></div>
  </li>
  <li class="ob-sub">
    <div class="ob-col" style="gap:var(--space-1)"><span class="ob-meta">Lesson 2.3 · Link</span><strong style="font-size:17px">Writing your first prop</strong><div class="ob-sub__meta"><span class="ob-meta">Last saved 14 Nov 2026, 09:05</span></div></div>
    <div class="ob-sub__actions"><span class="ob-badge ob-badge--draft">Draft</span><a class="ob-btn ob-btn--secondary" href="#">View submission</a></div>
  </li>
</ul>
</body>
</html>
```

### TaskCard

The practical task inside a lesson, in one white card or a quiet section: goal, prerequisites, numbered steps, boundaries, expected submission and completion criteria.

**Classes:** `ob-card ob-card--outlined` containing a `section-heading`, `ob-steps` (an `<ol>`), an optional `ob-callout--dependency` for boundaries, `ob-check` checkboxes and `ob-card__actions`.

**You provide:** the task content exactly as authored, any interactive checklist items the product supports, and links into Toolkit.

- Keep instructions visible while the learner prepares evidence.
- Checkboxes only for checklist items that really support interaction. A preparation checkbox never marks the lesson complete unless the completion rules say so.
- Link resources straight into Toolkit. No floating toolbar.
- Sample content in this preview is illustrative.

**Reference markup**

```html
<!-- @dsCard group="Lesson" height=522 width=760 subtitle="Your task: goal, steps, boundaries, submission" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>TaskCard</title></head>
<body>
<div style="padding:var(--space-6)">
  <section class="ob-card ob-card--outlined" aria-labelledby="yt" style="gap:var(--space-4)">
    <h2 id="yt" class="ob-h" style="font-size:26px;line-height:34px;font-weight:650">Your task</h2>
    <p class="ob-p"><strong>Goal:</strong> add a size prop to the Button component without changing its default look.</p>
    <ol class="ob-steps">
      <li>Open the Button component and read its current props.</li>
      <li>Add a <code>size</code> prop with <code>standard</code> and <code>large</code> values.</li>
      <li>Check both sizes in the browser at 390px and 1440px.</li>
    </ol>
    <div class="ob-callout ob-callout--dependency"><span class="ob-callout__label">Boundaries</span><p class="ob-p">Change only the Button files. Do not commit or push.</p></div>
    <p class="ob-p"><strong>Submit:</strong> a short summary and a screenshot of both sizes.</p>
    <label class="ob-check"><input type="checkbox"> <span>I have checked both sizes (preparation only, does not complete the lesson)</span></label>
    <div class="ob-card__actions"><a class="ob-btn ob-btn--primary" href="#">Submit evidence</a><a class="ob-link" href="#">Open the Command sheet</a></div>
  </section>
</div>
</body>
</html>
```

### TextField

A labelled text input or textarea for evidence, settings and open answers.

**Classes:** `ob-field` > `ob-label` (with `ob-req` for "(required)" or "(optional)"), `ob-help`, `ob-input` on an `<input>` or `<textarea>`, and `ob-error-text` with an `ob-glyph` indicator when invalid.

**You provide:** the label, required or optional status, helper text, the value, and validation messages tied with `aria-describedby` and `aria-invalid="true"`.

- 16px text, `height-control-large`, `radius-input`, a `border-control` edge. Never `border-subtle` alone.
- Labels sit above controls and stay visible. Placeholder text is optional guidance, never the label.
- Helper text appears before submission is attempted.
- An invalid field gets a 2px `error-ink` border, an indicator and a message. Colour alone is not enough.
- Textareas grow or scroll without hiding the label or action. Fields sit `space-5` to `space-6` apart in a single column.
- File types and size limits stated in helper text must match real configuration; drag and drop always sits beside a normal Choose files button.

**Reference markup**

```html
<!-- @dsCard group="Forms" height=400 width=640 subtitle="Label above, helper before, error with indicator" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>TextField</title></head>
<body>
<div class="ob-col" style="padding:var(--space-6);gap:var(--space-6)">
  <div class="ob-field">
    <label class="ob-label" for="sum">Summary <span class="ob-req">(required)</span></label>
    <p class="ob-help" id="sum-h">Two or three sentences on what you changed and how you checked it.</p>
    <textarea class="ob-input" id="sum" aria-describedby="sum-h"></textarea>
  </div>
  <div class="ob-field">
    <label class="ob-label" for="url">Link to your branch <span class="ob-req">(optional)</span></label>
    <input class="ob-input" id="url" type="url" value="github.com/example" aria-invalid="true" aria-describedby="url-e">
    <p class="ob-error-text" id="url-e"><span class="ob-glyph" aria-hidden="true">!</span>Enter a full address starting with https://</p>
  </div>
</div>
</body>
</html>
```

### ToolkitCard

A resource card in Toolkit; each of the six categories keeps its own treatment and main action.

**Classes:** an `ob-grid` of `ob-card` items with `ob-tk__kind`, `ob-card__title`, content, and an action link. Prompt library `ob-card--lavender`; Command sheet `ob-card--outlined` with an `ob-tk__preview`; Templates `ob-card--butter`; Glossary `ob-card--outlined`; Project kit `ob-card--cyan`; Status guide `ob-card--muted` with example badges.

**You provide:** the resource title, purpose and scope, real file types and versions, and the destination or copy action.

- Keep all six categories: Prompt library, Command sheet, Templates, Glossary, Project kit, Status guide.
- Main actions: View prompt or Copy prompt; View commands or Copy; Open template or Download; Read definition; Open resource or Download; View status guide.
- Search and filters appear only if implemented; otherwise use category links.
- Copy never runs a command and shows "Copied" only on success.
- Grid gap `space-6` desktop, `space-4` mobile; one column below 768px.

**Reference markup**

```html
<!-- @dsCard group="Toolkit" height=560 width=1040 subtitle="Six categories, each with its own treatment" -->
<!doctype html>
<html lang="en-GB">
<head><meta charset="utf-8"><title>ToolkitCard</title></head>
<body>
<div class="ob-grid" style="padding:var(--space-6)">
  <article class="ob-card ob-card--lavender"><span class="ob-tk__kind">Prompt library</span><h3 class="ob-card__title">Explain this component</h3><p class="ob-p ob-secondary">Ask Claude to walk through a file before you edit it. Scope: one file.</p><div class="ob-card__actions"><a class="ob-link" href="#">View prompt</a></div></article>
  <article class="ob-card ob-card--outlined"><span class="ob-tk__kind">Command sheet</span><h3 class="ob-card__title">Run the project</h3><pre class="ob-tk__preview">npm run dev</pre><div class="ob-card__actions"><a class="ob-link" href="#">View commands</a></div></article>
  <article class="ob-card ob-card--butter"><span class="ob-tk__kind">Templates</span><h3 class="ob-card__title">Evidence summary</h3><p class="ob-p ob-secondary">Output: a short written summary. Format: Markdown.</p><div class="ob-card__actions"><a class="ob-link" href="#">Open template</a></div></article>
  <article class="ob-card ob-card--outlined"><span class="ob-tk__kind">Glossary</span><h3 class="ob-card__title">Prop</h3><p class="ob-p ob-secondary">A value a parent passes into a component to change what it shows or does.</p><div class="ob-card__actions"><a class="ob-link" href="#">Read definition</a></div></article>
  <article class="ob-card ob-card--cyan"><span class="ob-tk__kind">Project kit</span><h3 class="ob-card__title">Starter project</h3><p class="ob-p ob-secondary">ZIP archive. Version as published.</p><div class="ob-card__actions"><a class="ob-link" href="#">Open resource</a></div></article>
  <article class="ob-card ob-card--muted"><span class="ob-tk__kind">Status guide</span><h3 class="ob-card__title">What each status means</h3><div class="ob-tk__chips"><span class="ob-badge ob-badge--progress">In progress</span><span class="ob-badge ob-badge--submitted">Submitted</span><span class="ob-badge ob-badge--accepted">Accepted</span></div><div class="ob-card__actions"><a class="ob-link" href="#">View status guide</a></div></article>
</div>
</body>
</html>
```
