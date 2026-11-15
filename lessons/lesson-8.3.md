# Lesson 8.3: Running a Focused Accessibility Review

### Learning objective

By the end of this lesson, you should be able to:

- Confirm the accessibility requirement that applies to the website.
- Plan a focused review across representative pages, components and states.
- Check page structure, colour contrast, keyboard focus, zoom and reflow.
- Use automated scanners while recognising what they cannot detect.
- Record accessibility findings in the existing QA record without overstating coverage.

**Prerequisites:** Complete Lesson 8.2 and have the current QA record and correction statuses available.

**Required materials:** Approved accessibility requirement, approved designs and style guide, implemented website, QA record from Lessons 8.1 and 8.2, and earlier keyboard and form evidence from Units 5 to 7.

## 1. Bring the accessibility checks together

**Accessibility** means people can perceive, understand, navigate and operate the website, including people who use assistive technology such as screen readers, screen magnifiers, voice control or keyboard-only navigation.

Earlier lessons already included accessibility checks:

| Earlier lesson | Accessibility checks already practised |
|---|---|
| 4.3 | Links for navigation, buttons for actions, keyboard reach |
| 5.2 | Alternative text for images |
| 5.3 | Content order, visible focus, zoom behaviour |
| 6.3 | Current-page states without relying on colour alone |
| 7.1 to 7.3 | Labels, error associations, focus movement and feedback |

Those checks were tied to individual tasks. This lesson reviews the assembled website systematically and adds checks that have not yet been covered, especially colour contrast, page structure and reflow.

**A focused accessibility review produces evidence about selected checks. It is not a full conformance audit and it does not replace testing with disabled people.**

## 2. Confirm the requirement

Before checking anything, establish which standard the project uses.

Many projects adopt the **Web Content Accessibility Guidelines (WCAG)**, published by the World Wide Web Consortium (W3C). WCAG 2.2 is the current W3C Recommendation. Its requirements are called **success criteria**, grouped into Levels A, AA and AAA. Level AA is a common project target.

Check the approved PRD, working rules or brief for:

| Question | Why it matters |
|---|---|
| Which standard and level apply? | Determines what counts as a defect |
| Are any pages or features excluded? | Defines the review scope |
| Is a specialist audit planned? | Clarifies what this review does not cover |
| Are there legal or contractual obligations? | These need a supervisor or specialist decision |

If no requirement is recorded, do not choose one silently. Record a **specification gap**, propose a target such as WCAG 2.2 Level AA for review, and continue only with checks the supervisor agrees to.

Do not decide whether the business meets a legal obligation. Report what you checked.

## 3. Plan representative coverage

You do not need to test every success criterion on every page to produce useful evidence. You do need to state what you covered.

Select:

- Each distinct page layout or template.
- Each unique page that does not share a template.
- Each interactive feature from Unit 7, in its relevant states.
- The approved critical visitor journeys.
- The open mobile menu and any other overlays.

| Coverage item | Example selection |
|---|---|
| Templates | Homepage, one treatment detail page, one information page |
| Unique pages | Any page with its own layout |
| Components | Header, mobile menu, footer, cards, form |
| States | Menu open, form error, form success, focused controls |
| Journeys | The approved journeys already tested in Lesson 6.3 |

Use the actual pages and features in your project. Record the selection in the QA coverage matrix from Lesson 8.1 rather than creating a separate register.

### Reuse valid evidence

If an earlier keyboard or form check still applies to the current implementation, cite it. Repeat it only when later changes affected that component or page.

## 4. Check page structure

Screen reader users often move through a page by headings, landmarks and links. A clear structure helps them find information quickly.

Check each selected page for:

| Check | Expected result |
|---|---|
| Page title | Describes the page and differs between pages |
| Page language | The `lang` attribute on the `html` element matches the content language |
| Main heading | One clear main heading that names the page’s purpose |
| Heading order | Heading levels reflect the content hierarchy without skipping for visual effect |
| Landmarks | Header, navigation, main content and footer are identifiable |
| Skip link | Present and working if the project requires one |
| Link text | Each link’s purpose is clear from its text or its context |
| Lists and tables | Use list and table markup when the content is a list or a table |

A **landmark** is a region of the page that assistive technology can jump to, such as the main content or the site navigation. In HTML and TSX, elements such as `<header>`, `<nav>`, `<main>` and `<footer>` create landmarks.

### Illustrative layout structure

```tsx
import type { ReactNode } from "react";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header>
        <nav aria-label="Main">{/* Existing navigation */}</nav>
      </header>
      <main id="main-content">{children}</main>
      <footer>{/* Existing footer */}</footer>
    </>
  );
}
```

This example shows the structure to look for. It is not a requirement to restructure your layout. Inspect how the actual starter already provides these regions before proposing changes.

### How to inspect structure

1. Open the page in Chrome or Edge.
2. Open developer tools and select the **Elements** panel.
3. Inspect the `html` element for the `lang` attribute.
4. Locate the main heading and the landmark elements.
5. Use the accessibility pane, where available, to see each element’s role and accessible name.

Do not judge heading order by font size. A heading that looks small can still be a level 2 heading, and large text is not automatically a heading.

## 5. Check colour contrast

**Contrast ratio** compares the brightness of two colours, such as text and its background. Low contrast makes content hard to read for many people, including people with low vision.

WCAG 2.2 Level AA sets these minimums:

| Content | Minimum ratio | Success criterion |
|---|---|---|
| Normal text | 4.5:1 | 1.4.3 Contrast (Minimum) |
| Large text | 3:1 | 1.4.3 Contrast (Minimum) |
| Visual information needed to identify controls and their states, such as input borders and focus indicators | 3:1 against adjacent colours | 1.4.11 Non-text Contrast |
| Parts of graphics needed to understand the content | 3:1 against adjacent colours | 1.4.11 Non-text Contrast |

WCAG defines large text precisely. Use the definition in the W3C guidance rather than estimating by eye.

### How to check contrast

1. Inspect the text element in developer tools.
2. Select the colour value in the **Styles** pane. Chrome and Edge show a contrast ratio for text colours.
3. For text over an image or gradient, check the lowest-contrast area the text actually sits on, at each required viewport width.
4. Check hover, focus, visited and disabled states that the design specifies, but note that WCAG does not set a contrast requirement for inactive components.

Ratios are thresholds. A computed ratio of 4.49:1 does not meet 4.5:1.

### When the approved colours fail

The colours come from the approved design and style guide. If an approved combination fails the agreed requirement:

1. Record the finding with the measured ratio, location and colours.
2. Classify it as a conflict between two approved requirements.
3. Escalate it as a design decision.

Do not change brand colours yourself to pass a contrast check. Changing a shared colour value affects every page that uses it.

## 6. Check keyboard access and focus

Repeat keyboard checks across the assembled website, focusing on what has changed since Unit 7 and on areas never checked together.

Use the **Tab** key to move forwards, **Shift** and **Tab** to move backwards, **Enter** to follow links, and **Enter** or **Space** to activate buttons.

| Check | Expected result | Success criterion |
|---|---|---|
| Every control can be reached | Links, buttons and form controls receive focus | 2.1.1 Keyboard |
| Focus order makes sense | Focus follows the visual and reading order | 2.4.3 Focus Order |
| Focus is visible | A visible indicator shows where focus is | 2.4.7 Focus Visible |
| Focus is not hidden | A focused control is not entirely covered by a sticky header, cookie banner or other author-created content | 2.4.11 Focus Not Obscured (Minimum) |
| No keyboard trap | Focus can always move away from a component | 2.1.2 No Keyboard Trap |
| Pointer targets are usable | Targets are at least 24 by 24 CSS pixels, or meet the spacing or other exceptions in WCAG | 2.5.8 Target Size (Minimum) |

Focus Not Obscured and Target Size (Minimum) were added in WCAG 2.2. Sticky headers are a common cause of the first issue: as you tab down the page, a focused link may scroll underneath the header.

Measure target size in developer tools rather than estimating. Read the exceptions in the W3C Understanding document before recording a small inline text link as a defect.

## 7. Check zoom, text resizing and reflow

Some people enlarge content to read it.

| Check | How to test | Success criterion |
|---|---|---|
| Text resizing | Zoom the browser to 200% and confirm content and functions remain available | 1.4.4 Resize Text |
| Reflow | Set the browser to a width of 1280 CSS pixels and zoom to 400%, which gives a viewport equivalent to 320 CSS pixels wide | 1.4.10 Reflow |

At the reflow width, check that:

- Content can be read by scrolling vertically only.
- No information or control disappears.
- The mobile navigation remains usable.
- Sticky elements do not cover most of the screen.
- Long words, email addresses or links wrap rather than forcing horizontal scrolling.

Some content, such as a map or a data table, may need two-dimensional scrolling. WCAG allows exceptions for content that requires it. Record the exception and its reason rather than ignoring it.

Lesson 5.3 checked zoom on the homepage. Repeat the check on the other selected templates.

## 8. Recheck forms, feedback and motion

Use the evidence from Unit 7 and recheck only where later changes affected it.

For forms, confirm that:

- Each control has a visible label that is programmatically associated with it.
- Required fields are identified in text, not by colour alone.
- Errors identify the field and describe the problem.
- Status messages, such as a submission result, are announced or reachable as specified.

For moving content, check whether the site includes:

| Content | Requirement to check |
|---|---|
| Carousels or auto-advancing content | A way to pause, stop or hide it if it moves for more than five seconds (2.2.2 Pause, Stop, Hide) |
| Animation | Follows any approved reduced-motion requirement |
| Video or audio | Captions or alternatives as required by the approved scope |

Only check features that exist. Do not add a carousel, video or animation to complete the review.

## 9. Use automated scanners correctly

Automated scanners check pages against rules and report likely issues. Common options include:

- The **Accessibility** category in Lighthouse, available in Chrome developer tools.
- The axe DevTools browser extension.

Lighthouse’s accessibility checks are powered by the axe engine.

Automated tools are useful for finding issues such as missing labels, missing alternative text attributes, some contrast failures and invalid attribute values. They cannot judge many requirements, for example:

- Whether alternative text accurately describes the image.
- Whether a heading actually describes its section.
- Whether focus order makes sense.
- Whether an error message is understandable.
- Whether content over a photograph is readable everywhere the text falls.

**A clean automated scan means the tool found no issues it can detect. It does not mean the page is accessible.**

### How to run a Lighthouse accessibility scan

1. Open the page in Chrome.
2. Open developer tools and select the **Lighthouse** panel.
3. Under categories, select **Accessibility**. You may deselect the others for speed.
4. Select the device type to match the review conditions.
5. Run the analysis.
6. Open each failed audit and inspect the affected elements yourself.

Record the tool, its version where shown, the page, the device setting and the date. Scores are not findings. Each reported issue still needs verification before it becomes a finding.

Lesson 8.4 shows how to run an automated scan as part of Playwright tests.

## 10. Perform a screen reader spot check

A **screen reader** reads page content aloud and lets people navigate by headings, landmarks, links and form controls.

Use the screen reader available on your computer, such as VoiceOver on macOS or NVDA on Windows. Learn its basic commands from its official guide before starting.

For one representative page and one form:

1. Listen to the page title when the page loads.
2. Move through the headings and confirm they describe the content.
3. Move to the main landmark.
4. Move through the links and confirm their purpose is clear.
5. Complete the form with synthetic data, trigger one validation error and confirm the error is announced or reachable.

Record what you checked, which screen reader and browser you used, and their versions.

A beginner’s spot check is limited evidence. Screen readers and browsers combine differently, and experienced users navigate differently from a new tester. Do not report the site as screen reader compatible on the basis of this check.

## 11. Record accessibility findings

Add findings to the existing QA record from Lesson 8.1.

For accessibility findings, include the success criterion where one applies.

| Field | Example |
|---|---|
| ID | QA-A11Y-03 |
| Location | Treatment detail template, introduction section |
| Conditions | Desktop Chrome, 1280 by 800 viewport, 100% zoom |
| Expected | Body text contrast of at least 4.5:1 (WCAG 2.2, 1.4.3) |
| Actual | Measured 3.9:1, text colour against the section background |
| Evidence | Screenshot of the contrast reading in developer tools |
| Impact | Affects all pages using this template |
| Classification | Conflict with approved style guide colours |
| Status | Awaiting decision |

This example is illustrative. Record actual measurements from your project.

Use the priorities from Lesson 8.1. A defect that prevents keyboard users from completing a required action usually blocks use. A small contrast shortfall on a decorative caption is usually lower priority.

Correct verified defects using the process from Lesson 8.2: bounded correction tasks, retesting under the original conditions and targeted regression checks.

## 12. Ask Claude to assist with the review

```text
Run a focused accessibility review of the selected pages,
components and states.

Before reviewing:
- Read the relevant project instructions.
- Confirm the accessibility requirement recorded for the project.
- Confirm the implementation and Git working state.
- Read the existing QA record and earlier accessibility evidence.
- Identify which browser and scanning tools you can actually use.

Check, where applicable:
- Page titles, page language, headings and landmarks.
- Link purpose and alternative text presence.
- Text and non-text contrast for the selected states.
- Keyboard reach, focus order, visible focus and focus
  hidden by sticky or overlapping content.
- Target sizes for small controls.
- Reflow at a viewport equivalent to 320 CSS pixels wide
  and text resizing to 200%.
- Form labels, error identification and status messages.
- Moving content and pause controls, if present.

Reuse valid earlier evidence and state where you did so.
For each finding, report the location, conditions, expected
result with the relevant success criterion, actual result,
evidence, likely affected scope and suggested classification.

Separate automated tool results from checks you verified.
List checks you could not perform and why.

Review only. Do not edit files, install dependencies,
commit, push or deploy. Do not claim conformance.
Use synthetic information in any form.

Scope and references:
[Insert selected pages, components, states and the
recorded accessibility requirement.]
```

Check Claude’s findings yourself before recording them. If Claude reports a contrast ratio, confirm it with your own measurement.

## 13. Practical exercise

**Task: Run a focused accessibility review of the implemented website.**

1. Confirm the recorded accessibility requirement, or record the gap.
2. Select representative templates, unique pages, components and states.
3. Check page structure on each selected page.
4. Measure contrast for text and key interface elements.
5. Complete keyboard, focus and target size checks.
6. Test 200% text resizing and 320 CSS pixel reflow.
7. Run an automated scan and verify each reported issue.
8. Complete a screen reader spot check on one page and one form.
9. Add verified findings to the QA record.
10. Prepare correction tasks for verified defects and escalate design conflicts.

Do not invent defects to fill the exercise. If a check passes, record the evidence.

## 14. Expected submission

Submit:

- The accessibility requirement used, or the recorded specification gap.
- The coverage selection with reasons.
- Structure, contrast, keyboard, zoom and reflow results.
- Automated scan results with your verification of each item.
- Screen reader spot check notes, tools and versions.
- New and updated findings in the QA record.
- Proposed correction tasks and escalated decisions.
- A statement of what this review did not cover.

## 15. Completion criteria

The lesson is complete when:

- The applicable requirement is identified or its absence is recorded.
- Coverage is representative and its limits are stated.
- Each check type has recorded conditions and results.
- Automated results are verified before becoming findings.
- Design conflicts are escalated rather than changed unilaterally.
- Findings cite evidence and, where relevant, a success criterion.
- No claim of full conformance or screen reader compatibility is made.

## 16. Knowledge check

1. Why does a clean automated scan not prove that a page is accessible?
2. What contrast ratio does WCAG 2.2 Level AA require for normal body text?
3. How can a sticky header cause a keyboard accessibility failure?
4. How do you create a viewport equivalent to 320 CSS pixels wide for a reflow check?
5. What should you do if an approved brand colour fails the contrast requirement?
