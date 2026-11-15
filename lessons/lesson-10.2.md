# Lesson 10.2: Plan and Implement the Change Independently

### Learning objective

By the end of this lesson, you should be able to:

- Start implementation from an approved instruction baseline and a known project state.
- Sequence the change into small, verifiable increments.
- Write your own implementation prompts with the required elements.
- Keep a decision log of choices, assumptions and escalations.
- Handle surprises without expanding scope silently, and review your own changes.

**Prerequisites:** Complete Lesson 10.1, with the updated instructions approved and blocking questions answered or recorded.

**Required materials:** Approved change brief and instruction updates, change tasks, supervisor answers, current implementation, QA record and Playwright tests.

## 1. Work from the approved baseline

Lesson 10.1 produced updated instructions and change tasks. Implementation starts only from the approved versions.

Before starting, confirm:

| Item | Check |
|---|---|
| Instruction updates | Approved, with the approval recorded |
| Blocking questions | Answered, or the affected tasks are recorded as blocked |
| Tasks | Final versions with acceptance criteria |
| Project state | Matches what you analysed, or differences are understood |

If the supervisor changed your proposed updates, use their version. Do not implement your original proposal.

## 2. Confirm the starting state

At the terminal command prompt, in the project folder:

```bash
git status --short
```

```bash
git log --oneline -5
```

Record the starting commit and any uncommitted changes.

Follow the project’s branching rules. If they require a separate branch for each change, create it according to the documented convention before editing.

If the working state contains changes you do not recognise, stop and find out what they belong to, as Lesson 4.1 taught. Do not discard them.

Run the documented checks and the Playwright tests before making any change. If something already fails, record it now. Otherwise you may later mistake an existing failure for a problem your change caused.

## 3. Plan the sequence

Order the tasks so each builds on verified work.

A practical sequence for many changes is:

1. Shared foundations the change needs, such as a component variant.
2. New or changed content and assets.
3. New routes or pages.
4. Navigation and entry points.
5. Metadata and search readiness.
6. Automated tests for the new behaviour.

For each step, decide how you will know it is complete before moving on. Lesson 5.1 showed this approach for the homepage.

### Set checkpoints

A **checkpoint** is a point where you stop and verify before continuing.

| Checkpoint | What to verify |
|---|---|
| After each task | The task’s acceptance criteria |
| After any shared change | The other usages of that shared code |
| Before handing over to Lesson 10.3 | All tasks complete or their status recorded |

If the project rules allow local commits as checkpoints, commit after each verified task with a clear message. Committing does not mean pushing or deploying.

## 4. Write your own implementation prompts

In earlier lessons, you used prompts provided in the lesson. In this assessment, you write them.

Every implementation prompt should include the elements from Lesson 4.1:

| Element | What to include |
|---|---|
| Goal | The task outcome |
| Target | Pages, components or behaviour |
| References | Approved instructions, brief, answers and assets, with exact locations |
| Current state | Relevant findings from your impact analysis |
| Scope | What the task includes |
| Boundaries | What must be preserved |
| Expected response | Implement, then verify and report |
| Verification | Checks to run and evidence to report |
| Limits | No unrelated changes, no new dependencies, no commit, push or deploy unless authorised |

### Prompt skeleton

Adapt this skeleton for each task. The assessment looks at how well you complete it, not whether you copy it.

```text
Implement task [ID]: [one-sentence outcome].

Read first:
- [Project instructions and approved updates]
- [Task specification]
- [Approved references and supplied materials]

Current state:
- [What already exists and what is missing]

Scope:
- [What to change]

Preserve:
- [Content, behaviour and pages that must not change]

Pause and report if:
- [Conditions that need my decision]

After implementing:
- [Checks to run]
- [Evidence to report]
- Report changed files and any shared effects.

Do not add dependencies, change unrelated files,
commit, push or deploy.
```

Keep a copy of each prompt you use. You will submit them.

## 5. Keep a decision log

During implementation, you will make choices. Record them as you go, not at the end.

| Date | Decision or event | Type | Reason | Who decided |
|---|---|---|---|---|
| [Date] | Used the existing card component without a new variant | Routine decision | Supplied content fits the existing layout | Intern |
| [Date] | Cropped the image to the card’s aspect ratio | Assumption | Supervisor answer allowed cropping | Intern, based on supervisor answer |
| [Date] | Paused the CTA link | Escalation | Destination not confirmed | Awaiting supervisor |
| [Date] | Found a typo on an unrelated page | Out-of-scope finding | Recorded as QA finding, not fixed | Intern |

These rows are illustrative. Record your actual decisions.

The decision log helps the supervisor understand your reasoning. It also protects you: a recorded, reasonable assumption is easy to correct, while a silent one looks like an error.

### What needs escalation

Escalate when:

- An approved reference conflicts with another.
- The change requires a new dependency or integration.
- Supplied materials cannot meet the approved design.
- The change would affect shared components in a way the analysis did not anticipate.
- Completing the task needs a decision about content, design or data.

Routine implementation choices that follow established conventions do not need escalation. Record them in the log.

## 6. Implement in small, verified increments

For each task:

1. Send your implementation prompt.
2. Review the changed files with `git diff`, and inspect any new untracked files separately.
3. Check the result in the browser against the acceptance criteria.
4. Check other usages of any shared code that changed.
5. Run the relevant documented checks.
6. Record the result and any decisions.
7. Move to the next task only when this one is verified or its status is recorded.

Avoid asking Claude to implement the whole change in one request. A large change is harder to review and harder to correct.

If Claude’s result differs from what you asked for, correct it before continuing. Lesson 4.3 covered reviewing changes rather than relying on the completion report.

## 7. Handle surprises without expanding scope

Implementation often reveals something the analysis missed.

| Surprise | Response |
|---|---|
| A task is harder than expected but still within scope | Continue, recording the reason in the decision log |
| The change needs an unplanned shared change | Pause, assess its effects and escalate if it is significant |
| You find an unrelated defect | Record it as a QA finding; do not fix it within this change |
| A supplied asset is unusable | Escalate with evidence and options |
| A test fails on code you did not change | Check against the starting state recorded in Section 2 |

Fixing unrelated issues while implementing a change makes the change harder to review and its evidence harder to interpret. Keep the work focused.

If a surprise means the approved instructions are wrong, propose a correction to the instructions as in Lesson 10.1. Do not let the implementation silently diverge from the baseline.

## 8. Update the automated tests

The change affects what the Playwright tests should check.

- Add tests for new routes, journeys and metadata, following Lesson 8.4.
- Update tests that check content or routes the change intentionally altered.
- Do not change tests for behaviour the change should not affect. If they fail, investigate.

Base new tests on the approved content, not on what Claude implemented.

## 9. Review your own changes before handing over

Before moving to Lesson 10.3, review the complete change as if someone else wrote it.

At the terminal command prompt:

```bash
git status
```

```bash
git diff [starting commit]
```

Replace `[starting commit]` with the commit identifier you recorded in Section 2. This compares the current files with that commit, including changes not yet committed. Inspect new untracked files separately.

Check for:

| Concern | Question |
|---|---|
| Scope | Does every change belong to an approved task? |
| References | Does the implementation follow the approved instructions and materials? |
| Shared effects | Are all usages of changed shared code accounted for? |
| Leftovers | Are there debugging statements, temporary files or commented-out code? |
| Safety | Are there credentials, personal data or unapproved dependencies? |
| Records | Is the decision log complete? |

Correct issues you find, then recheck the affected acceptance criteria.

## 10. Ask Claude for a scope review

```text
Review the implemented change against its approved tasks.

Before reviewing:
- Read the approved instruction updates and change tasks.
- Compare the current files with the recorded starting
  commit, including untracked files.

Report:
1. Each changed file and the task it belongs to.
2. Any change that does not belong to an approved task.
3. Shared code that changed and its other usages.
4. Debugging output, temporary files or leftover code.
5. Credentials, personal data or new dependencies.
6. Acceptance criteria that appear unmet or unverified.

Review only. Do not edit files, commit, push or deploy.

Starting commit and tasks:
[Insert the commit identifier and task IDs.]
```

Verify Claude’s findings before acting on them.

## 11. Practical exercise

**Task: Implement the approved change.**

1. Confirm the approved baseline and answers.
2. Record the starting state and run the existing checks and tests.
3. Sequence the tasks and set checkpoints.
4. Write and use your own prompt for each task.
5. Verify each task before starting the next.
6. Keep the decision log throughout.
7. Record out-of-scope findings separately.
8. Add and update automated tests.
9. Review the complete change and ask Claude for a scope review.
10. Prepare the implementation summary for Lesson 10.3.

If a task remains blocked, implement the unblocked tasks and record the blocked task’s exact dependency.

## 12. Expected submission

Submit:

- The starting commit, working state and initial check results.
- The task sequence and checkpoints.
- Every implementation prompt you used.
- A summary of changed files for each task.
- Task statuses and acceptance criteria results.
- The decision log.
- New and updated automated tests.
- Out-of-scope findings added to the QA record.
- The scope review and any corrections made.

## 13. Completion criteria

The lesson is complete when:

- Implementation started from the approved baseline.
- The starting state and existing failures were recorded.
- Each task was implemented and verified in turn.
- Prompts contained the required elements.
- Decisions, assumptions and escalations are recorded.
- Unrelated issues were recorded, not silently fixed.
- The complete change was reviewed before handover.

## 14. Knowledge check

1. Why should you run the checks and tests before making any change?
2. Which kinds of decision should you escalate rather than make yourself?
3. Why should you avoid fixing unrelated defects during a change?
4. What should you do if implementation shows the approved instructions are wrong?
5. Why should new tests use the approved content rather than the implementation?
