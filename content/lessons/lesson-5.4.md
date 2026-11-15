# Lesson 5.4: Reviewing and Submitting the Homepage

### Learning objective

By the end of this lesson, you should be able to:

- Review the assembled homepage against its approved requirements.
- Bring together the design, content, responsive and functional evidence.
- Separate completed work from work that is still waiting on something.
- Prepare a clear handover for supervisor review.
- Record the review decision and save the accepted work as a Git checkpoint.

**Prerequisites:** Complete Lessons 5.1 to 5.3.

**Required materials:** The implemented homepage, approved references, task acceptance criteria, findings records, temporary content register and verification evidence.

## 1. Review the homepage as one visitor experience

Earlier lessons checked sections, content and screen sizes separately. This lesson brings those checks together and asks whether visitors can:

- Understand the business and its treatments.
- Follow the intended content sequence.
- Explore the available information.
- Reach the agreed next steps.
- Use the page at the required screen sizes.

Judge these against the approved requirements. This is not the moment to introduce a new homepage strategy.

**A polished appearance does not show that the page is complete. Completion needs evidence against the agreed scope.**

## 2. Confirm what you are submitting

Before reviewing, record exactly what is being reviewed.

| Field | What to record |
|---|---|
| Project | Website name and repository location |
| Scope | The homepage and any shared components included |
| Implementation version | Current branch and commit |
| Working state | Any relevant uncommitted or untracked changes |
| References | The approved document and design versions |
| Review environment | Local address, browser and required viewport sizes |
| Known limitations | Missing assets, blocked destinations or checks not yet done |

A **commit** is a saved snapshot of the project in Git, identified by a short code such as `a1b2c3d`. A **branch** is a separate line of work in Git. You can see the latest commit with `git log --oneline -1`.

A commit identifier does not include changes made since that commit. If uncommitted changes form part of the submission, record them too.

Never include passwords, access keys or other private configuration values in a submission.

## 3. Bring the existing review records together

Combine:

- Section task statuses from Lesson 5.1.
- Copy, image and call to action checks from Lesson 5.2.
- Responsive findings from Lesson 5.3.
- Relevant shared-component findings from Unit 4.
- Outstanding temporary materials and dependencies.

Remove duplicate findings, but keep their evidence and the parts of the page they affect.

### Example consolidated record

| ID | Finding | Current status | Evidence or next action |
|---|---|---|---|
| HP-01 | Treatment cards overflowed at the narrow review width | Verified | Retested after the grid correction |
| HP-02 | The final hero photograph is unavailable | Awaiting asset | The agreed temporary image is still in place |
| HP-03 | The main call to action went to the wrong page | Verified | The confirmed destination opened correctly |
| HP-04 | A required check on a real device is outstanding | Not checked | Device review still needed |

Do not treat unresolved items as finished just because the rest of the page passes.

## 4. Complete the final review checklist

Check the implemented scope against the approved requirements.

| Area | Final review |
|---|---|
| **Structure** | Sections appear in the approved order, without duplication |
| **Design** | Layout, typography, colours and spacing follow the references |
| **Content** | Approved wording is present and editorial decisions are reflected |
| **Images** | The correct images load, with suitable cropping and alternative text |
| **Navigation** | Header, footer and section links reach their confirmed destinations |
| **Calls to action** | Labels, placement and behaviour follow the approved journey |
| **Responsive behaviour** | Required widths and the widths between them remain usable |
| **Keyboard use** | Controls can be reached, operated and clearly seen when focused |
| **Page integration** | Shared styles and components work together with no known regressions |
| **Temporary materials** | Remaining placeholders and dependencies are recorded |

A **regression** is something that used to work but has been broken by a later change.

Mark each check **Passed**, **Failed** or **Not checked**. If a check does not apply, mark it **Not applicable** with a short reason.

### Reuse valid evidence

You do not need to repeat every check just to make a new submission.

Reuse earlier evidence when:

- It relates to the version you are submitting.
- The relevant code, content and references have not changed since.
- The conditions of the check still apply.

Repeat any check that later changes could have affected, or where you still have doubts.

## 5. Walk through the intended visitor journey

A **visitor journey** is a sequence of steps a visitor takes to achieve something, such as finding a treatment and then a location. Follow the approved homepage journey in the browser.

For example, if the agreed journey is to explore a treatment and then find a location:

1. Start on the homepage.
2. Find the treatment overview.
3. Follow a treatment link.
4. Confirm that the expected page opens.
5. Return and follow the location call to action.
6. Confirm that the location information can be reached.

Use the project’s actual approved journey. Do not add this example if it does not apply.

The point is to check more than isolated links. Confirm that the labels and destinations make sense together as a sequence.

### Respect the testing boundary

Opening an approved destination may be all this task needs.

Submitting a form, sending a message, making a booking or triggering any other action outside the website needs specific authorisation and test arrangements. Record where your checks stopped and why.

## 6. Run the applicable project checks

Use the commands documented in the project. Depending on the starter and the changes, these may include:

| Check | What it does |
|---|---|
| Type check | Confirms the TypeScript code uses its data correctly |
| Lint | Checks the code against the project’s style and quality rules |
| Automated tests | Run any tests the project already has |
| Production build | Prepares the optimised version of the site for deployment, and fails if something is broken |

Do not invent scripts or add a new testing tool just to complete this checklist.

| Check | Result | Evidence |
|---|---|---|
| Documented type check | Passed / Failed / Not checked | Command and relevant output |
| Documented lint check | Passed / Failed / Not checked | Command and relevant output |
| Relevant automated tests | Passed / Failed / Not checked | Tests run and result |
| Production build, if required | Passed / Failed / Not checked | Command and result |

If a check fails, find out whether the failure relates to your work. Report failures that existed before your work as well. They still affect how confident anyone can be in the submission.

A successful build does not prove that the page looks right or that the journeys work.

## 7. Ask Claude for a final review

```text
Review the homepage submission against the approved scope.

Inspect:
- The relevant project instructions.
- Approved homepage, content and responsive references.
- Task acceptance criteria.
- Current implementation and Git working state.
- Existing findings and verification evidence.

Assess:
1. Whether the approved homepage scope is implemented.
2. Whether the evidence supports each acceptance criterion.
3. Whether later changes invalidate earlier checks.
4. Whether temporary materials or dependencies remain.
5. Whether shared changes have unresolved effects.
6. What still requires supervisor review.

Return:
- Sources and implementation state actually inspected.
- Acceptance criteria with evidence and status.
- New or unresolved findings.
- Checks not performed and their limitations.
- A readiness recommendation for the defined scope.

Review only. Do not edit files, install dependencies,
commit, push, deploy or trigger external transactions.

Do not treat your recommendation as supervisor approval.
Do not claim browser inspection or test execution unless performed.

Scope and references:
[Insert exact references and submission scope.]
```

Review Claude’s findings yourself. Confirm any new issue before turning it into a correction task.

## 8. Prepare the handover

A **handover** tells the supervisor what is ready, how to check it and what still needs attention.

| Handover item | Required information |
|---|---|
| **Implemented scope** | Sections and shared changes included |
| **Reference baseline** | Approved sources followed |
| **Implementation state** | Branch, commit and any relevant uncommitted changes |
| **Review access** | How to run or open the page, using the project’s existing instructions |
| **Verification** | Checks performed, their results and supporting evidence |
| **Outstanding items** | Findings, dependencies and checks not yet done |
| **Requested decision** | The exact scope you are submitting for acceptance |

### Example readiness statement

> The homepage is ready for review against the approved structure, content and responsive requirements. The final hero photograph is still outstanding, and the agreed temporary image is recorded in the temporary content register. The required browser checks and project checks are documented in this submission.

Use wording like this only when the evidence supports it.

Avoid statements such as “Everything works” or “The website is complete” when only the homepage has been reviewed.

## 9. Record the supervisor’s decision

Keep the implementation status separate from the review decision.

| Decision | Meaning |
|---|---|
| Awaiting review | No decision has been made yet |
| Changes requested | Specific corrections are needed |
| Accepted for the stated scope | The supervisor accepts the identified scope |
| Accepted with recorded follow-up | Accepted, with specific outstanding work listed |

Use the project’s own decision labels if it has them.

Record:

- The reviewer.
- The decision date.
- The implementation version reviewed.
- The scope accepted.
- Required corrections or follow-up tasks.
- Any conditions attached to the acceptance.

Accepting the homepage does not authorise deployment, and it does not mean any other page is complete.

## 10. Save a Git checkpoint after acceptance

Once the supervisor accepts the homepage, save the accepted work as a Git checkpoint, following the steps in Lesson 4.4 and the project’s Git rules:

1. Run `git status` to see every change.
2. Stage only the files that belong to the accepted work, using `git add` with each file path.
3. Check the staged changes with `git diff --staged`.
4. Commit with a clear message that follows the project’s convention.
5. Add the commit identifier to the decision record.

Commit only accepted work. Leave out unrelated changes, environment files and temporary files.

If changes were requested instead, make the corrections first. Save the checkpoint only after the corrected work is accepted.

## 11. Practical exercise

**Task: Submit the homepage for supervisor review.**

1. Confirm the submission scope and implementation state.
2. Bring together earlier findings and evidence.
3. Complete the final checklist.
4. Walk through the approved visitor journey.
5. Run any outstanding project checks.
6. Ask Claude for a final review.
7. Resolve verified defects within the authorised scope.
8. Prepare the handover.
9. Leave the decision as **Awaiting review** until the supervisor responds.
10. After acceptance, save a Git checkpoint and record its identifier.

If changes are requested, create bounded correction tasks and retest the affected parts before resubmitting.

## 12. Expected submission

Submit:

- The homepage handover.
- Approved reference versions and the implementation state.
- Final acceptance criteria with statuses and evidence.
- Representative desktop and mobile screenshots.
- Visitor journey check results.
- Project check results.
- The consolidated findings and temporary content register.
- The supervisor’s decision once received.
- The checkpoint commit identifier, once the work is accepted.

## 13. Completion criteria

The lesson is complete when:

- The assembled homepage has been reviewed against the approved scope.
- Evidence supports the reported results.
- Outstanding items and the limits of the checks remain visible.
- The handover identifies the exact version being reviewed.
- The supervisor’s decision is recorded accurately.
- Required corrections are resolved or assigned as follow-up work.
- Accepted work is saved as a Git checkpoint, if the project rules allow.

## 14. Knowledge check

1. Why must the handover identify uncommitted changes as well as a commit?
2. When can earlier verification evidence be reused?
3. How does a visitor journey check differ from checking individual links?
4. Why is Claude’s readiness recommendation different from supervisor acceptance?
5. Does accepting the homepage authorise deployment?
