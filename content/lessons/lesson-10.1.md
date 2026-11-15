# Lesson 10.1: Interpret a Change Brief and Update the Project Instructions

### Learning objective

By the end of this lesson, you should be able to:

- Explain how the Unit 10 assessment works and how it is judged.
- Extract the required outcome, scope and constraints from a change brief.
- Identify ambiguities and ask focused clarification questions.
- Analyse which parts of the project a change affects.
- Propose updates to the project instructions and task plan for supervisor approval.

**Prerequisites:** Complete Unit 9 and have its review decisions recorded.

**Required materials:** A change brief supplied by your supervisor, the approved instruction baseline from Unit 3, the current implementation, QA record, page register, Playwright tests and the staging deployment record.

## 1. Understand the Unit 10 assessment

Units 1 to 9 taught each part of the workflow with detailed guidance. Unit 10 asks you to use that workflow with less guidance.

Your supervisor will give you a **change brief**: a short request to change the website. You will:

| Lesson | Your work |
|---|---|
| 10.1 | Interpret the brief and propose updates to the project instructions |
| 10.2 | Plan and implement the change |
| 10.3 | Test the change and submit evidence |
| 10.4 | Present the website, known issues and handover |

These lessons give less step-by-step instruction than earlier units. They point you back to the earlier lessons that cover each skill.

### What independence means here

Working independently does not mean working without asking questions.

| Independent behaviour | Not independent |
|---|---|
| Making routine decisions using established conventions | Asking the supervisor to approve every small choice |
| Asking focused questions when a decision is genuinely missing | Guessing at decisions that belong to someone else |
| Recording assumptions and decisions | Making silent assumptions |
| Checking Claude’s work yourself | Accepting Claude’s report without review |
| Reporting limits honestly | Presenting unchecked work as finished |

**Asking the right question at the right time is a skill being assessed, not a weakness.**

### How the assessment is judged

Your supervisor will use the project’s assessment criteria. If none have been set, the following areas reflect what this curriculum has taught:

| Area | What the supervisor looks for |
|---|---|
| Understanding | The change’s outcome, scope and constraints are understood correctly |
| Instructions | Project documents are updated accurately and only where needed |
| Planning | Tasks are bounded, with verifiable acceptance criteria |
| Implementation | The change follows approved references and existing conventions |
| Verification | Evidence supports each claim, and limits are stated |
| Communication | Questions, decisions, findings and handover are clear and honest |

This table is guidance for the supervisor. It does not replace any assessment criteria the supervisor provides.

## 2. Read the brief for its essential parts

Read the whole brief before acting. Then extract:

| Element | Question to answer |
|---|---|
| **Outcome** | What should be true after the change? |
| **Reason** | Why is the change needed? |
| **Scope** | Which pages, features or content are included? |
| **Exclusions** | What is explicitly not included? |
| **Supplied materials** | Which copy, images or decisions are provided? |
| **Constraints** | Deadlines, design rules or technical limits |
| **Acceptance** | How will the requester judge success? |

### Illustrative brief

> Saffron Wellness Clinic wants to add an approved new treatment to the website. The treatment should appear in the treatment listing and have its own detail page. Copy and one image are attached. The homepage does not need to change.

Only use this example to practise. Your supervisor will supply the actual brief.

From this illustrative brief:

| Element | Extracted answer |
|---|---|
| Outcome | Visitors can find and read about the new treatment |
| Scope | Treatment listing and a new detail page |
| Exclusion | Homepage |
| Supplied | Copy and one image |
| Not stated | Route, metadata, position in the listing, alternative text, call to action destination |

The “Not stated” row is as important as the rest. It shows where questions or proposals are needed.

## 3. Identify ambiguities and conflicts

Compare the brief with the approved baseline from Unit 3 and the current implementation.

Look for:

- Information the brief does not provide.
- Statements that conflict with approved documents.
- Wording that could mean more than one thing.
- Supplied materials that do not fit the existing design.
- Effects the requester may not have considered.

### Classify each issue

| Type | Example | Response |
|---|---|---|
| **Blocking question** | The detail page’s route is not defined and no IA pattern covers it | Ask before implementing that part |
| **Stated assumption** | The new card follows the existing treatment card design | Record the assumption and proceed unless told otherwise |
| **Conflict** | The supplied image has a different aspect ratio from existing cards | Report it with options for a decision |
| **Out of scope** | You notice an unrelated typo on another page | Record it as a separate finding |

An assumption is acceptable when existing conventions clearly support it. Record it so the supervisor can correct it early.

### Write focused questions

A good question can be answered quickly and states why it matters.

| Weak question | Focused question |
|---|---|
| What do you want the page to look like? | Should the new detail page use the existing treatment detail template? The brief does not say, and the supplied copy has no section for pricing. |
| Is the image okay? | The supplied image is portrait, but treatment cards use a landscape crop. Should we request a landscape version, or crop the supplied image? |

Group your questions in one message rather than sending them one at a time.

## 4. Analyse the impact on the project

Inspect the current project, as in Lesson 4.1, to find everything the change touches.

| Area | Questions | Earlier lesson |
|---|---|---|
| Routes and IA | Does the change add, rename or remove a route? | 6.1, 6.3 |
| Components | Does an existing component support it, or does it need a change? | 4.3, 6.2 |
| Content and assets | Are copy, images and alternative text supplied and approved? | 5.2 |
| Navigation and journeys | Which links and journeys change? | 6.3 |
| Interactive features | Does the change affect forms or other features? | 7.1 |
| Accessibility | Which checks apply to the new or changed content? | 8.3 |
| Automated tests | Which tests need adding or updating? | 8.4 |
| Data and dependencies | Does the change involve personal data or new packages? | 9.1 |
| Performance | Do new images or scripts affect loading? | 9.2 |
| Metadata and search | Does the change need titles, descriptions or sitemap updates? | 9.3 |
| Deployment | Will the change be deployed to staging? | 9.4 |

Shared components deserve particular attention. Adding a new treatment card might seem local, but a change to the card component affects every page using it.

## 5. Propose updates to the project instructions

Unit 3 established the project’s instruction documents, such as the PRD, architecture, working rules and task plan, as the implementation baseline. A change to the website should be reflected in those documents before implementation.

For each document, decide whether the change affects it:

| Document | Typical update |
|---|---|
| PRD or requirements | Add or change the requirement the brief introduces |
| IA or sitemap | Add the new route and its entry points |
| Architecture | Only if the change affects structure, data or integrations |
| Working rules | Rarely, unless the change introduces a new rule |
| Task plan | Add the new tasks with acceptance criteria and verification |
| Content and asset registers | Add the supplied materials and their status |

Update only what the change requires. Do not reorganise or rewrite unrelated sections.

### Record each change clearly

Each update should show what changed and why:

| Field | Example |
|---|---|
| Document | Task plan |
| Section | Treatment pages |
| Change | Added tasks T-NEW-01 to T-NEW-03 for the new treatment |
| Reason | Change brief, dated and identified |
| Affected tasks | New tasks only; existing treatment tasks unchanged |
| Status | Awaiting review |

Use the project’s existing version or change-note format if it has one.

Keep the updated documents marked **Awaiting review** until the supervisor approves them. Approved updates become the new instruction baseline for Lesson 10.2.

## 6. Write the change tasks

Use the task structure from Lesson 4.2. For each task, include:

- One clear outcome.
- Scope and boundaries.
- References, including the brief and any answers to your questions.
- Prerequisites and blocking questions.
- Acceptance criteria.
- Verification methods, including manual checks and automated tests.
- Regression scope.

### Example acceptance criteria

For the illustrative brief:

| Acceptance criterion | Verification |
|---|---|
| The listing includes a card for the new treatment, in the approved position | Browser check and Playwright test |
| The card links to the new detail page | Journey test from the listing |
| The detail page shows the supplied copy exactly | Comparison with the supplied source |
| The image displays with approved alternative text and crop | Browser check at required widths |
| The page has an approved title and description | Rendered metadata check and Playwright test |
| Existing treatment cards and pages are unchanged | Regression checks on representative pages |

Replace these with criteria for the actual brief.

## 7. Ask Claude for an impact review

```text
Review the change brief against the current project and
its approved instructions.

Before reviewing:
- Read the project instructions and approved baseline.
- Confirm the current Git status.
- Read the change brief and any answers already received.

Report:
1. The required outcome, scope and exclusions, as stated
   in the brief.
2. Information the brief does not provide.
3. Conflicts with approved documents or the implementation.
4. Routes, components, content, tests, metadata and other
   areas the change affects, with file references.
5. Shared components whose other usages may be affected.
6. Project documents that need updating, and the sections.
7. Questions that block implementation, separately from
   assumptions supported by existing conventions.

Do not invent answers to open questions.
Do not propose design changes beyond the brief.

Review only. Do not edit files, install dependencies,
commit, push or deploy.

Change brief:
[Insert the brief.]
```

Compare Claude’s analysis with your own. The assessment is of your understanding. Use Claude’s review to check for gaps, not as a replacement for your analysis.

## 8. Submit the change analysis

Combine your work into one submission for the supervisor:

1. The extracted brief elements.
2. Questions, grouped and focused.
3. Stated assumptions.
4. The impact analysis.
5. Proposed document updates, marked Awaiting review.
6. The change tasks with acceptance criteria.

Wait for answers and approval before implementing blocked tasks. Tasks that are not blocked may proceed in Lesson 10.2 once their instruction updates are approved.

## 9. Practical exercise

**Task: Interpret the supervisor’s change brief and prepare the instruction updates.**

1. Read the brief and extract its essential parts.
2. Compare it with the approved baseline and current implementation.
3. Classify ambiguities, conflicts and assumptions.
4. Send focused questions to the supervisor.
5. Complete the impact analysis.
6. Propose updates to the affected project documents.
7. Write the change tasks with acceptance criteria and verification.
8. Ask Claude for an impact review and compare it with yours.
9. Submit the change analysis.

Use only the brief your supervisor provides. If no brief has been supplied, request one. Do not create your own brief for the assessment.

## 10. Expected submission

Submit:

- The extracted brief elements.
- Questions sent and answers received.
- Recorded assumptions.
- The impact analysis.
- Proposed document updates with change notes.
- Change tasks with acceptance criteria and verification methods.
- Claude’s impact review and how it compared with yours.
- The supervisor’s approval decision once received.

## 11. Completion criteria

The lesson is complete when:

- The brief’s outcome, scope and gaps are identified correctly.
- Questions are focused and grouped.
- Assumptions are recorded, not hidden.
- The impact analysis covers shared effects.
- Document updates are limited to what the change requires.
- Tasks have verifiable acceptance criteria.
- Updated instructions await or have received supervisor approval.

## 12. Knowledge check

1. When is it reasonable to proceed on a stated assumption rather than ask a question?
2. Why should project instructions be updated before implementation?
3. Why does a change to one card need a check of other pages?
4. What makes a clarification question focused?
5. Why should your own impact analysis come before Claude’s?
