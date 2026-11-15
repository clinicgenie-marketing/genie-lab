# Lesson 3.1: Following the Approved Design, Style Guide and Content

### Learning objective

By the end of this lesson, you should be able to:

- Identify the approved design, style and content references for the project.
- Explain what each reference decides, and what it leaves open.
- Turn impressions of a design into requirements another person can check.
- Record conflicts and missing states without redesigning the website.
- Prepare a reference baseline that Claude can work from.

**Prerequisites:** Complete Unit 2 and have its review decision recorded.

**Required materials:** The supplied design frames, style guide, approved content, IA and any interaction specifications.

## 1. Identify what each source decides

Unit 2 produced the plan for the website. Unit 3 prepares the instructions for building it. Before writing those instructions, you need to know which approved sources describe the finished website, and what each one is responsible for.

| Source | What it usually decides |
|---|---|
| **IA and visitor journeys** | The pages, the navigation and how pages connect |
| **Design** | Layout, grouping and visual presentation |
| **Style guide** | Repeated visual values, such as colours and type sizes, and the rules for shared components |
| **Approved content** | The exact wording and the factual information |
| **Interaction specification** | Controls, their states and how they should behave |

A **design frame** is one screen or state drawn in a design tool, such as the homepage at desktop width. A **style guide** is a document that records the visual rules repeated across the website.

The actual project may organise these sources differently. Record what each supplied source covers instead of assuming that every requirement lives in one design file.

A screenshot alone may not tell you where a link goes, how a control behaves with a keyboard, or what an error message says. Those decisions must come from somewhere else, or be recorded as missing.

## 2. Build a reference register

A **reference register** lists every source you will rely on, so that you and the supervisor can confirm you are working from the right versions.

| Source | Exact location | Version or date | Approval evidence | What it applies to | Accessible? |
|---|---|---|---|---|---|
| | | | | | |

A file name containing “final” is not evidence of approval on its own. Look for a recorded decision, such as the supervisor’s acceptance from Lesson 2.4 or a note from the person who approves designs.

If you cannot open a supplied link, record the source as missing. Do not ask Claude to recreate the approved design from a description.

Use the most recent approved version that applies. Where you know which earlier version it replaces, record that too.

## 3. Turn impressions into requirements

A description such as “the page feels spacious” is an impression. Nobody can check whether code meets it. Replace impressions with requirements another person can check against the reference.

| Impression | Requirement to extract |
|---|---|
| The page feels spacious | The actual content width and the spacing between sections |
| Headings feel editorial | The approved font, weight, size and heading hierarchy |
| Cards feel consistent | Shared dimensions, padding, background and link behaviour |
| Mobile should be simpler | The specified stacking, order and navigation on narrow screens |

Use the actual values where the sources supply them. If a source does not give a value, label it as a gap. Do not invent a precise number to make the requirement look complete.

Do not work out a complete responsive layout from a single desktop frame. If the narrow-screen arrangement is not supplied, record that as a missing reference.

## 4. Preserve approved copy and assets

**Copy** means the written text on the website. Building the website should not quietly rewrite headings, treatment names, labels or claims.

If approved copy appears to contain a mistake, record the proposed correction and follow the project’s rules about who can approve wording changes. Lesson 5.2 covers this in more detail.

For images, confirm the selected file, where it appears, how it is cropped and which part of the picture must stay visible. A similar-looking image is not an approved replacement.

Record any placeholders the project permits, and any materials that are still missing, so that nobody mistakes them for final content.

## 5. Resolve conflicts where they occur

Sources sometimes disagree. For example, a design may show a navigation label that differs from the label in the approved IA.

When this happens:

1. Record both sources and where they disagree.
2. Ask which requirement applies to this case.
3. Continue with work that the conflict does not affect.

Do not adopt a fixed rule such as “the design always wins” or “the text always wins”. The right answer depends on which decision each source is responsible for.

Routine implementation choices can follow established conventions when they do not change an approved decision. Not every small detail needs a supervisor’s ruling.

## 6. Ask Claude to extract the requirements

Ask Claude to read the references and list what they require. Keep this request separate from any building work.

```text
Inspect the approved references for the selected page or component.

Identify:
- The design and source versions that apply.
- Structure, content and navigation requirements.
- Shared visual values and component rules.
- Required responsive and interaction states.
- Missing assets, inaccessible sources or conflicting requirements.

Cite the specific source for each finding.
Separate values the sources supply from assumptions.
Do not redesign, rewrite content or implement anything.

Scope and references:
[Insert the actual component and source locations.]
```

Check the extracted requirements against the references yourself before they become instructions for building. Claude may misread a value or fill a gap with a guess.

## 7. Practical exercise

**Task: Prepare a reference baseline for one selected component.**

1. Identify its design, style, content and interaction sources.
2. Record the approval and version information in the reference register.
3. Extract requirements that another person could check.
4. Check which desktop and narrow-screen states are supplied.
5. Record conflicts and dependencies.
6. Ask Claude to extract the requirements, then compare its list with the references.

If a required source is missing, record what cannot yet be specified. Do not fill the gap yourself.

## 8. Expected submission

Submit:

- The reference register.
- The extracted requirements, each with its source location.
- Claude’s extraction and your corrections, if any.
- Unresolved conflicts and decisions.

## 9. Completion criteria

The lesson is complete when:

- The reference baseline can be identified by location and version.
- Each requirement can be traced to a source.
- Assumptions and missing references remain visible.

## 10. Knowledge check

1. What can an IA establish that a screenshot may not?
2. Why is “final” in a file name not enough evidence of approval?
3. How should you handle a suspected mistake in approved copy?
4. Why should mobile behaviour not be worked out from one desktop frame?
5. What should happen when two approved sources conflict?
