# Lesson 6.4: Reviewing and Submitting the Internal Pages

### Learning objective

By the end of this lesson, you should be able to:

- Compare the implemented internal pages with the approved list of pages.
- Review shared patterns and each page’s own requirements.
- Combine content, design and navigation findings into one record.
- Prepare a clear submission for supervisor review.
- Record acceptance against a defined scope and save the accepted work as a Git checkpoint.

**Prerequisites:** Complete Lessons 6.1 to 6.3.

**Required materials:** Approved IA, page designs, content sources, implementation tasks, navigation inventory, visitor journey results and outstanding findings.

## 1. Define what you are submitting

Start by listing the pages you are submitting. The main navigation being in place does not mean every page in the IA has been built.

Create a **page completion register**:

| Page | Approved route | Implementation status | Verification status | Outstanding items |
|---|---|---|---|---|
| Selected listing page | Confirmed route | Implemented | Checks complete | None identified |
| Selected detail page | Confirmed route | Implemented | Checks incomplete | Narrow-screen image review |
| Selected location page | Confirmed route | Blocked | Not checked | Approved address content missing |

Use the actual page names and routes.

**Keep three things separate: whether a page is built, whether it has been checked, and whether the supervisor has accepted it.**

A page can be built but not yet checked. A checked page can still be waiting for acceptance.

## 2. Compare the implementation with the approved IA

Compare the page register with the approved IA, and look for:

- Required pages that are missing.
- Pages that were built but are not in the agreed scope.
- Routes that differ from the approved addresses.
- Two pages that serve the same purpose.
- Pages without their required entry points.
- Navigation links that lead to unfinished pages.

Decide what kind of difference each one is before correcting it.

| Difference | Response |
|---|---|
| A required page has not been built | Record its task and what it is waiting for |
| A route differs from the approved one | Confirm the requirement and create a correction task |
| An extra page exists with no approved purpose | Flag it for review |
| A planned page belongs to a later phase | Record the phase boundary |
| A page exists, but its entry link is missing | Add the approved connection |

Do not delete extra routes or reorganise the IA during a review. A review records problems. Corrections come afterwards, through tasks.

## 3. Review shared patterns and individual pages

Review at two levels.

### Shared-pattern review

Check the common implementation for:

- Layout and spacing.
- Typography and shared values.
- Repeated interactions.
- Responsive behaviour.
- Required and optional sections.
- Variation in content length and type.

### Page-specific review

Check each submitted page for:

- The correct heading and body copy.
- The correct images and alternative text.
- Its required sections.
- Accurate contact or location information.
- The correct calls to action and related links.
- Its approved route and entry points.

A shared layout that passes review does not prove that every page using it contains the right information.

### Use evidence efficiently

Reuse earlier evidence where it still applies to the version you are submitting. Repeat checks where later changes affected:

- Shared components.
- Page content.
- Images and other assets.
- Routes or destinations.
- The approved references.

Every submitted page still needs its own content and destination checks.

## 4. Combine the findings from Unit 6

Bring together:

- Page findings from Lesson 6.1.
- Reuse and content variation findings from Lesson 6.2.
- Navigation and journey findings from Lesson 6.3.
- Earlier homepage findings affected by shared changes.

Remove duplicates, but keep a record of every page affected and the evidence.

| ID | Finding | Pages affected | Status | Next action |
|---|---|---|---|---|
| IP-01 | The shared introduction cuts off long headings | Two detail pages | Open | Correct and retest both |
| IP-02 | A related link opens the wrong page | One detail page | Verified | Correction retested |
| IP-03 | The final location image is unavailable | One location page | Awaiting asset | Obtain the approved image |

Separate defects from dependencies and optional suggestions.

If a shared issue affects several pages, record it as one shared finding. Do not bury it in one page’s notes.

## 5. Check the effect on the homepage

Internal-page work may have changed components the homepage also uses, such as:

- Shared cards.
- Header and footer navigation.
- Content containers.
- Typography.
- Buttons and links.
- Image presentation.

Use the changed files and the actual places each component is used to decide which homepage checks to repeat.

For example, changing a shared card layout means reviewing the homepage cards that use it. Editing a paragraph on one detail page does not mean reviewing the whole homepage.

Record which regression checks you chose, and their results.

## 6. Prepare an acceptance matrix

An **acceptance matrix** maps each acceptance criterion to the pages it applies to, the result and the evidence.

| Criterion | Pages | Result | Evidence |
|---|---|---|---|
| Required sections follow the approved order | Listed pages | Passed / Failed / Not checked | Reference comparison |
| Copy matches the approved sources | Each submitted page | Passed / Failed / Not checked | Page-specific content checks |
| Routes load directly and after refresh | Each submitted route | Passed / Failed / Not checked | Browser results |
| Links reach confirmed destinations | Relevant pages | Passed / Failed / Not checked | Navigation inventory |
| Layout works at the required widths | Listed pages and patterns | Passed / Failed / Not checked | Screenshots and observations |
| Shared changes keep existing usages working | Affected pages | Passed / Failed / Not checked | Regression results |

Use **Not applicable** only when a criterion genuinely does not apply, and explain why.

Do not write a single “All pages passed” statement unless the evidence shows which pages and checks it covers.

## 7. Run the outstanding project checks

Run the documented checks that apply to the final changes, such as the type check, lint, any automated tests and the production build. Lesson 5.4 explained what each one does.

Reuse earlier results if nothing has changed since that could affect them. Repeat checks after corrections where needed.

Record any failures and whether they relate to the submitted work.

Automated checks do not replace checking the content, the design or the pages in the browser.

## 8. Ask Claude for a final internal-page review

```text
Review the selected internal pages for submission.

Read:
- Relevant project instructions.
- Approved IA and page inventory.
- Applicable designs, content and responsive requirements.
- Selected task acceptance criteria.
- Current implementation and Git working state.
- Findings, navigation records and verification evidence.

Assess:
1. Whether the submitted pages match the approved scope.
2. Whether routes and required entry points are correct.
3. Whether shared patterns support the approved variations.
4. Whether each page contains its own correct content and assets.
5. Whether selected visitor journeys have adequate evidence.
6. Whether shared changes have unresolved effects elsewhere.
7. Which dependencies or checks remain outstanding.

Return:
- Sources and implementation state actually inspected.
- Page-by-page readiness.
- Acceptance criteria with evidence and results.
- New or unresolved findings.
- Evidence invalidated by later changes.
- A readiness recommendation for the defined submission scope.

Review only. Do not edit files, install dependencies,
commit, push or deploy.

Do not trigger external transactions.
Do not treat your recommendation as supervisor acceptance.
State any access or verification limitations.

Submission scope and references:
[Insert pages, routes and exact references.]
```

Confirm any new findings yourself before authorising corrections.

## 9. Prepare the handover

The supervisor should be able to tell exactly which version is being submitted and what gaps remain.

| Item | Required information |
|---|---|
| Submitted scope | Pages, routes and shared changes included |
| Reference baseline | The approved versions followed |
| Implementation state | Branch, commit and any relevant uncommitted changes |
| Review access | The project’s existing instructions for running and opening the pages |
| Verification | The acceptance matrix and supporting evidence |
| Integration | Navigation, journey and regression results |
| Outstanding work | Findings, dependencies and checks not yet done |
| Requested decision | The exact scope submitted for acceptance |

### Example readiness statement

> The treatment listing and two treatment detail pages are ready for review against the identified references. Their content, routes and selected visitor journeys have been checked. The location page is not part of this submission because its approved content is still outstanding.

Use the actual page names and evidence.

When you submit only some pages, say clearly where the boundary is. Do not suggest that the whole website is complete.

## 10. Record the review decision

Leave the decision as **Awaiting review** until the supervisor responds. Then record:

- The reviewer and decision date.
- The implementation version reviewed.
- The pages and shared changes accepted.
- Required corrections.
- Follow-up tasks and dependencies.
- Any conditions attached to the acceptance.

If changes are requested:

1. Turn the findings into bounded correction tasks.
2. Make the authorised corrections.
3. Retest the affected pages and journeys.
4. Update the submission evidence.
5. Resubmit the changed scope.

Accepting the internal pages does not authorise deployment.

## 11. Save a Git checkpoint after acceptance

Once the supervisor accepts the internal pages, save the accepted work as a Git checkpoint, following the steps in Lesson 4.4 and the project’s Git rules:

1. Run `git status` to see every change.
2. Stage only the files that belong to the accepted pages, using `git add` with each file path.
3. Check the staged changes with `git diff --staged`.
4. Commit with a clear message that follows the project’s convention.
5. Add the commit identifier to the decision record.

If only some pages were accepted, commit only the files for those pages and any shared changes they need. Leave out unrelated changes, environment files and temporary files.

## 12. Practical exercise

**Task: Submit the implemented internal pages for supervisor review.**

1. Complete the page completion register.
2. Compare it with the approved IA.
3. Combine the findings from Unit 6.
4. Complete the acceptance matrix.
5. Check homepage usages affected by shared changes.
6. Run the outstanding project checks.
7. Ask Claude for a final review.
8. Prepare the handover.
9. Record the supervisor’s decision when it arrives.
10. After acceptance, save a Git checkpoint and record its identifier.

Do not invent missing pages, acceptance decisions or successful checks to complete the exercise.

## 13. Expected submission

Submit:

- The page completion register.
- The IA comparison results.
- The acceptance matrix.
- The combined findings.
- Representative desktop and mobile evidence.
- Navigation and visitor journey results.
- Regression and project check results.
- The handover and the supervisor’s decision.
- The checkpoint commit identifier, once the work is accepted.

## 14. Completion criteria

The lesson is complete when:

- Submitted pages are compared with the approved scope.
- Shared and page-specific requirements have been reviewed.
- Evidence supports the reported results.
- Relevant homepage regressions have been checked.
- Outstanding work and incomplete journeys remain visible.
- The handover identifies the exact version being reviewed.
- The supervisor’s decision and required follow-up are recorded accurately.
- Accepted work is saved as a Git checkpoint, if the project rules allow.

## 15. Knowledge check

1. Why should implementation, verification and acceptance have separate statuses?
2. Why does a checked shared template not prove that every page is correct?
3. What decides whether homepage checks need repeating?
4. How should you describe a submission that covers only some pages?
5. What must happen after requested corrections before you resubmit?
