# Lesson 10.3: Test the Change and Submit Evidence

### Learning objective

By the end of this lesson, you should be able to:

- Build a verification plan that matches each acceptance criterion to suitable evidence.
- Combine manual checks, automated tests and project checks without gaps or duplication.
- Select regression checks from the actual changes made.
- Produce evidence that another reviewer can trace and repeat.
- Submit an accurate evidence package with its limits stated.

**Prerequisites:** Complete Lesson 10.2 with the implementation summary and decision log available.

**Required materials:** Approved change tasks and acceptance criteria, implementation summary, decision log, QA record, Playwright tests, page register and, if authorised, the staging environment.

## 1. Verify against the approved criteria

Lesson 10.2 recorded which tasks were implemented. This lesson establishes whether each acceptance criterion is met, with evidence.

**Implemented is not the same as verified.** Lesson 5.1 made this distinction for the homepage. It applies equally to your independent work.

Your evidence must answer three questions:

1. Does the change do what the approved tasks require?
2. Did the change break anything that previously worked?
3. What has not been checked, and why?

## 2. Build the verification plan

Start from the acceptance criteria written in Lesson 10.1. For each criterion, choose evidence that can actually show it is met.

| Evidence type | Good for | Earlier lesson |
|---|---|---|
| Browser comparison with references | Layout, content, images | 4.4, 5.2 |
| Responsive checks | Behaviour at required widths | 5.3 |
| Journey checks | Links and visitor sequences | 6.3 |
| Feature state checks | Forms and interactive behaviour | 7.2 |
| Accessibility checks | Structure, contrast, keyboard, reflow | 8.3 |
| Automated tests | Repeatable routes, journeys, metadata | 8.4 |
| Safety review | Credentials, data and dependencies | 9.1 |
| Performance measurement | Loading and layout stability | 9.2 |
| Metadata checks | Titles, descriptions, indexing | 9.3 |
| Staging verification | Behaviour in the hosted environment | 9.4 |
| Project checks | Type check, lint, build | 4.2 |

Use only the evidence types relevant to the change. A content-only change may not need performance measurement. A change that adds a large image probably does.

### Example verification plan

| Criterion | Evidence | Conditions |
|---|---|---|
| New card appears in the approved position | Browser comparison and Playwright test | Required widths |
| Card links to the new detail page | Playwright journey test, manual journey check | Desktop and mobile project |
| Detail page copy matches the supplied source | Line-by-line comparison | Rendered page |
| Image displays with approved alternative text and crop | Browser check, structure inspection | Required widths |
| Page title and description are approved | Rendered head check, Playwright test | Local and staging |
| Existing cards and pages are unchanged | Regression checks | Representative pages |

This is illustrative. Build your plan from your actual criteria.

Each criterion should have at least one piece of evidence that can genuinely show it is met. Section 5 of Lesson 4.2 explained why a type check cannot prove visual accuracy, and a screenshot cannot prove a link destination.

## 3. Run the automated checks first

Automated checks are fast and identify obvious problems early.

At the terminal command prompt, in the project folder, run the documented:

1. Type check.
2. Lint.
3. Production build.
4. Playwright tests, including the new and updated tests from Lesson 10.2.

Compare the results with the starting results you recorded in Lesson 10.2.

| Result | Meaning |
|---|---|
| Passed before and after | No detected regression in what the tests check |
| Passed before, fails after | Likely caused by the change; investigate |
| Failed before and after | Existing issue; record it, but it is not caused by the change |
| New test passes | The new behaviour meets what the test asserts |
| New test fails | Investigate whether the site or the test is wrong, as in Lesson 8.4 |

Do not edit a test to make it pass without a recorded reason based on the approved requirement.

## 4. Complete the manual checks

Work through the manual parts of the verification plan.

For each check, record:

- The criterion it supports.
- The page, component or journey.
- The browser, viewport and input method.
- The result: Passed, Failed, Not checked or Not applicable.
- The evidence.

Use synthetic information for any form interaction. Perform external actions only within the authorised test arrangements.

If a check fails, record a finding in the QA record. Correct it using the process from Lesson 8.2: bounded correction, retest under the original conditions, targeted regression checks. Record corrections in the decision log.

## 5. Select regression checks from the actual changes

Lesson 8.2 explained that regression checks should match what changed.

Use the changed files from your implementation summary:

| Changed area | Regression checks |
|---|---|
| Shared component | Every page and state using it, including different content lengths |
| Shared styles | Representative pages using those styles |
| Navigation | Header, footer, mobile menu and affected journeys on several pages |
| Content data shared across pages | Every page reading that data |
| Route configuration | Direct loading and refresh for affected routes |
| Metadata pattern | Titles and descriptions on other pages using the pattern |

Record which regression checks you chose and why. A reviewer should be able to see that your regression scope follows from the changes.

Do not rerun the entire QA plan by default. Broaden the regression scope when a failure or unexpected shared effect justifies it.

## 6. Verify on staging when authorised

If the supervisor has authorised deploying the change to staging, follow Lesson 9.4:

1. Review and commit only the intended changes.
2. Deploy using the documented method.
3. Record the deployment.
4. Verify the deployed version.
5. Run safe automated tests against staging.
6. Record any differences from local behaviour as findings.

If staging deployment is not authorised for this change, record staging verification as **Not checked**, with the reason.

## 7. Make the evidence traceable

Evidence is useful only if a reviewer can connect it to the work and repeat the check.

| Evidence quality | Weak | Strong |
|---|---|---|
| Version | “Latest version” | Commit identifier, plus any uncommitted changes |
| Conditions | “Checked on mobile” | Browser, version, 390 by 844 viewport, touch emulation |
| Screenshot | Unlabelled image | Named with page, width, state and date |
| Test result | “Tests pass” | Command, Playwright version, projects run, pass and fail counts |
| Not checked | Omitted | Listed with the reason |

Sanitise all evidence. Remove credentials, real personal data and private configuration values.

If the implementation changed after a check, decide whether the change could affect that check. If it could, repeat it.

## 8. Complete the acceptance matrix

Bring the results together in an acceptance matrix, as in Lessons 6.4 and 7.4.

| Criterion | Result | Evidence | Notes |
|---|---|---|---|
| [Criterion from the task] | Passed / Failed / Not checked / Not applicable | [Reference to evidence] | [Limits or findings] |

Every criterion from every task should appear.

Then summarise:

- Criteria passed, with evidence.
- Criteria failed, with finding IDs.
- Criteria not checked, with reasons.
- Regression checks run and their results.
- New findings, including out-of-scope findings from Lesson 10.2.

## 9. Ask Claude to check the evidence

Ask Claude to review the evidence critically, as a reviewer would, rather than to confirm it.

```text
Review the evidence package for the change against its
approved acceptance criteria.

Read:
- The approved change tasks and acceptance criteria.
- The implementation summary and decision log.
- The verification plan, acceptance matrix and evidence.
- The changed files compared with the starting commit.

Assess:
1. Whether each criterion has evidence capable of showing
   it is met.
2. Whether any result claims more than its evidence shows.
3. Whether the evidence matches the current implementation,
   or later changes could invalidate it.
4. Whether the regression scope covers the changed shared
   code and its usages.
5. Whether any criterion is missing from the matrix.
6. Whether unchecked items and limits are stated.

Report gaps and overstatements with specific references.
Do not mark criteria as passed yourself.

Review only. Do not edit files, run external actions,
commit, push or deploy.

Change tasks and evidence locations:
[Insert task IDs and where the evidence is recorded.]
```

Address genuine gaps by completing the missing checks or by correcting the claim. Do not soften the wording of a gap to make it less visible.

## 10. Prepare the evidence submission

Write a short summary for the supervisor, followed by the supporting records.

### Example summary

> The change adds the approved treatment card and detail page. Twelve of thirteen acceptance criteria passed, with evidence in the acceptance matrix. The image crop criterion failed at the narrowest width; finding QA-CH-02 is awaiting a decision on whether to request a different image. Regression checks on the existing treatment cards and homepage passed. Staging verification was not performed because deployment was not authorised for this change.

Use your actual counts, findings and limits.

Avoid phrases such as “fully tested” or “everything works”. State what was checked.

## 11. Practical exercise

**Task: Verify the change and submit the evidence.**

1. Build the verification plan from the acceptance criteria.
2. Run the type check, lint, build and Playwright tests.
3. Compare results with the starting results.
4. Complete the manual checks.
5. Select and run regression checks based on the changed files.
6. Verify on staging if authorised.
7. Correct verified defects through the Lesson 8.2 process.
8. Complete the acceptance matrix.
9. Ask Claude to review the evidence and address genuine gaps.
10. Submit the evidence package with its summary.

Do not invent passing results. A clearly recorded failure or gap is better evidence of skill than an unsupported pass.

## 12. Expected submission

Submit:

- The verification plan.
- Automated check and test results, with the comparison to the starting results.
- Manual check results with conditions.
- The regression scope, the reasons for it and results.
- Staging deployment and verification records, or the reason they were not performed.
- The acceptance matrix.
- New and updated findings.
- Claude’s evidence review and your responses.
- The evidence summary.

## 13. Completion criteria

The lesson is complete when:

- Every acceptance criterion has a recorded result.
- Evidence types match what each criterion requires.
- Regression checks follow from the actual changes.
- Evidence is traceable to the implementation and conditions.
- Failures and unchecked items are visible.
- The summary claims no more than the evidence shows.

## 14. Knowledge check

1. Why should you compare test results with the results recorded before the change?
2. How do you decide which regression checks to run?
3. What makes a screenshot traceable evidence?
4. Why ask Claude to review the evidence critically rather than confirm it?
5. Why is a recorded failure better than an unsupported pass?
