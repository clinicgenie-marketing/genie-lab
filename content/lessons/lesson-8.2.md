# Lesson 8.2: Correcting QA Findings and Running Regression Checks

### Learning objective

By the end of this lesson, you should be able to:

- Turn verified QA findings into correction tasks of a manageable size.
- Review a proposed fix before it is made.
- Retest each defect under its original conditions.
- Choose regression checks based on the changes actually made.
- Update the QA record with accurate evidence, and save accepted corrections as a Git checkpoint.

**Prerequisites:** Complete Lesson 8.1 and have its findings and correction priorities reviewed.

**Required materials:** QA findings, test cases, approved references, correction tasks, the implementation and existing verification evidence.

## 1. Work from verified findings

Start with the findings recorded in Lesson 8.1. Before asking for any correction, confirm that each finding has:

- A clear location.
- The conditions needed to reproduce it.
- The expected and actual behaviour.
- The requirement it is based on.
- Supporting evidence.
- The parts of the website it affects.

If any of these are missing, investigate the finding first.

**A correction should fix a confirmed difference from a requirement. It should not sneak in an unapproved redesign.**

Optional suggestions and specification gaps need their own decisions, from the right people.

## 2. Group corrections by cause and scope

Several findings may share one cause. For example, wrong padding on several treatment cards may all come from one shared style.

Other findings may look similar but need separate fixes.

| Findings | Suitable treatment |
|---|---|
| Several cards use the wrong shared spacing value | One correction to the shared style |
| Two links point to two different wrong pages | Check each destination separately, possibly within one navigation task |
| A form fails and does not recover properly | Investigate whether there are one or several causes |
| Different pages have unrelated copy errors | One bounded content task, with a check on each page |
| A feature has no approved behaviour specification | Get the decision before changing that feature |

Group findings to make the work easier to understand, not just to reduce the number of tasks.

Never combine unrelated corrections into a request to “clean up the website”.

## 3. Set the correction order

Use the reviewed priorities and dependencies. A practical order is:

1. Fix problems that stop further testing.
2. Fix shared causes that affect several pages.
3. Repair important visitor journeys and required actions.
4. Fix the remaining page-specific defects.
5. Address smaller visual and content mismatches.

The actual order depends on the findings. A change that looks minor may need extra care if it affects a shared style used on many pages.

Record specification decisions and unavailable dependencies separately. Do not keep assigning blocked work as if building alone could resolve it.

## 4. Write a bounded correction task

Each task should link the finding to an outcome someone can check.

| Field | What to include |
|---|---|
| Task ID | A unique correction reference |
| Findings | The IDs included in this task |
| Outcome | What should be true after the correction |
| Scope | The pages, components or behaviour affected |
| References | The approved sources that define the expected result |
| Boundaries | Content and behaviour that must not change |
| Verification | The original checks to repeat |
| Regression scope | Related behaviour the change might affect |
| Dependencies | Decisions or resources required |

### Example

**Task:** Correct the shared treatment card spacing.

**Findings:** QA-UI-03 and QA-UI-04.

**Outcome:** Treatment cards use the approved internal spacing at the required layouts.

**Scope:** The existing shared card styles and the places they are used.

**Boundaries:** Keep the copy, destinations, images and card order unchanged.

**Verification:** Repeat the failed comparisons at the original viewport sizes.

**Regression:** Check the card instances on the homepage and the listing page, including cards with longer approved content.

Use real finding IDs and references.

## 5. Review the proposed fix

Before the change is made, establish whether it actually addresses the cause. Ask:

- Which evidence supports the diagnosis?
- Why is this change needed?
- Which files and usages will it affect?
- Can existing components and styles handle it?
- Does it add a new package or broader restructuring?
- How will the result be checked?

Routine corrections can follow established conventions without a separate planning round.

Ask for further investigation when the cause is uncertain, or when the proposed change would make the task much larger.

Equally, do not demand a major rewrite to fix a local defect unless there is evidence that one is needed.

## 6. Direct Claude to make the correction

```text
Correct the verified QA findings included in the selected task.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the affected code and existing changes.
- Confirm the findings, expected behaviour and prerequisites.

During implementation:
- Address the verified cause.
- Follow approved references and existing conventions.
- Preserve unrelated content and behaviour.
- Keep changes within the task and necessary supporting files.
- Explain any broader change required before proceeding.
- Do not introduce unrelated dependencies or refactoring.

After implementation:
- Review the changed files.
- Repeat the original failed checks under the recorded conditions.
- Run the selected regression checks.
- Run applicable documented project checks.
- Report the outcome for each finding.
- Identify any new issue or remaining limitation.

Do not mark a finding verified without retest evidence.
Do not commit, push or deploy.
Perform external actions only within existing authorisation.

Correction task:
[Insert the task.]

Findings and references:
[Insert verified findings and exact references.]
```

Review the actual changes. Do not rely only on Claude’s completion report.

## 7. Retest the original defect

**Retesting** checks whether the reported problem has gone. Use the original:

- Starting conditions.
- Steps.
- Browser and viewport, where relevant.
- Test information.
- Expected result.

If you have to change any condition, record the difference and explain how it affects the comparison.

### Example

If a heading was cut off at a particular viewport width:

1. Open the corrected page.
2. Use the recorded viewport size and zoom level.
3. Confirm that the approved heading is now fully visible.
4. Compare it with the applicable reference.

Checking only at a wider viewport would not prove the original problem is fixed.

If the problem still occurs, leave the finding open and record the new evidence.

## 8. Run targeted regression checks

**Regression checking** looks for unintended damage to things that worked before the change. Choose checks based on what the correction changed.

| Change | Relevant regression checks |
|---|---|
| Shared card styling | The affected card instances, with different content lengths |
| Header navigation | The relevant pages, mobile menu and current-page indicators |
| A validation utility | The forms and rules that use it |
| Route configuration | Opening directly, refreshing and the affected incoming links |
| Image handling | The affected images and their crops at different widths |
| One approved paragraph | The rendered wording, its wrapping and the layout around it |

Retesting and regression checking answer different questions:

- Retesting: has the original defect gone?
- Regression checking: has the fix broken anything else?

Do not rerun the whole QA plan by default. Widen the testing when the change, a failure or an unresolved concern justifies it.

## 9. Handle failed fixes and new findings

If a correction does not work:

1. Keep the evidence.
2. Compare the actual change with the diagnosis.
3. Work out whether the cause was misunderstood.
4. Ask for a focused investigation.
5. Revise the correction task if needed.

Avoid piling speculative fixes on top of a failure nobody understands. Each one makes the real cause harder to find.

If testing reveals a separate problem, record it as a new, linked finding. Do not quietly expand the original task to include unrelated work.

### When the requirement is unclear

Move the affected item to **Awaiting decision** and state the exact question that needs answering.

Carry on with the other authorised corrections. One unresolved design decision does not need to stop all QA work.

## 10. Update the QA record

Keep each finding, its correction and its verification connected.

| Field | What to record |
|---|---|
| Finding ID | The original problem |
| Correction task | The work that addressed it |
| Cause | The confirmed explanation |
| Implementation | The files changed and the version |
| Retest | The original check and its result |
| Regression | The related checks and their results |
| Status | The current resolution state |
| Remaining limits | Outstanding evidence or dependencies |

Use the existing statuses:

- **Open**
- **Corrected, awaiting verification**
- **Verified**
- **Awaiting decision**

A passing retest can verify the original defect while a newly discovered regression stays open as its own finding. Do not describe the overall submission as ready while required work is still unresolved.

## 11. Prepare a correction summary

Summarise the outcome for the reviewer. For example:

> Three verified QA findings were corrected. Their original checks now pass, and the affected shared usages were rechecked. One navigation finding is awaiting a decision on its destination. The connected form test has not been performed because its test configuration is unavailable.

Use your actual numbers and evidence.

Avoid “All fixed” when some findings are blocked, unchecked or outside the correction scope.

## 12. Save a Git checkpoint after acceptance

Once the supervisor accepts the corrections, save them as a Git checkpoint, following the steps in Lesson 4.4 and the project’s Git rules:

1. Run `git status` to see every change.
2. Stage only the files that belong to the accepted corrections, using `git add` with each file path.
3. Check the staged changes with `git diff --staged`.
4. Commit with a clear message that names the corrected finding IDs.
5. Add the commit identifier to the QA record.

Naming the finding IDs in the commit message makes it easy to find later exactly which change fixed which problem.

## 13. Practical exercise

**Task: Correct and check a reviewed group of QA findings.**

1. Select verified findings from Lesson 8.1.
2. Group them into bounded correction tasks.
3. Confirm their order and dependencies.
4. Ask Claude to make the selected correction.
5. Inspect the changes.
6. Retest the original defects.
7. Run targeted regression checks and the project checks.
8. Update the QA record.
9. Prepare the correction summary.
10. After acceptance, save a Git checkpoint and record its identifier.

If no defects need correcting, review the existing evidence and submit that result. Never invent defects to complete the exercise.

## 14. Expected submission

Submit:

- The selected findings and correction tasks.
- The implementation prompt.
- A summary of changed files.
- Retest results for the original defects.
- Regression and project check results.
- Updated finding statuses.
- Any new findings or unresolved decisions.
- The correction summary.
- The checkpoint commit identifier, once the corrections are accepted.

## 15. Completion criteria

The lesson is complete when:

- Corrections address verified findings.
- Tasks stay bounded and follow the approved requirements.
- Original defects have been retested under suitable conditions.
- Regression checks match the changes made.
- The project checks are recorded.
- Finding statuses match the available evidence.
- Remaining work and the limits of the checks are visible.
- Accepted corrections are saved as a Git checkpoint, if the project rules allow.

## 16. Knowledge check

1. When should several findings become one correction task?
2. How does retesting differ from regression checking?
3. Why should the original reproduction conditions be kept?
4. What should happen when a fix reveals a separate defect?
5. What evidence is needed before a finding can be marked verified?
