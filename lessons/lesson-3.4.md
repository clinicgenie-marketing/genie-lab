# Lesson 3.4: Review the Instructions Before Building

### Learning objective

By the end of this lesson, you should be able to:

- Check that the instruction pack supports the next building task.
- Trace one requirement through the architecture, the task plan and the checks.
- Tell apart gaps that block the next task from gaps that only affect later work.
- Review Claude’s findings against the evidence.
- Record an identifiable approved baseline.

**Prerequisites:** Complete Lesson 3.3.

**Required materials:** The four draft documents from Lesson 3.3 (PRD, architecture, working rules and task plan), the entry instructions, the reference register from Lesson 3.1, the starter project inspection and the dependency record.

## 1. Review readiness for a defined task

An **instruction pack** is the set of documents Claude will work from: the entry instructions, the four documents from Lesson 3.3 and the approved references.

The pack is ready when it lets a specific next task go ahead. Having several Markdown files in place is not enough.

Name the task first. Then ask whether its requirements, references and checks are usable.

Readiness can be partial. For example, a missing booking integration does not stop work on shared styles. Explain which work is ready and which is not.

## 2. Check that the references can be reached

For each source the task needs, confirm:

- Its location.
- Its version.
- Its approval evidence.
- That you, and Claude, can open it.

Naming a design file in a document is not the same as inspecting it. Open each one.

Record any missing source against the tasks it affects.

## 3. Check that the documents agree

Each document should be consistent with the ones it depends on.

| Connection | What to check |
|---|---|
| PRD → IA | The required pages and visitor journeys match |
| Design → content | Labels, sections and assets match, or the conflict is recorded |
| Architecture → starter project | The described approach matches the files you inspected |
| Working rules → task | The rules allow the supporting work the task needs |
| Task → verification | Completion can be checked with suitable evidence |

Record contradictions. Do not quietly choose one source over another.

## 4. Trace the next task

A **trace** follows one requirement from its source to the check that will prove it is met. Create one trace for the next task:

1. The requirement and the document that owns it.
2. The design or interaction reference that applies.
3. What is already implemented in the starter project.
4. The planned outcome of the task, and its boundaries.
5. Dependencies.
6. Acceptance criteria.
7. How each criterion will be checked.

A trace is incomplete if a reference cannot be opened or the expected result is undefined.

## 5. Classify findings by their effect

| Finding type | What it needs |
|---|---|
| **Contradiction** | A decision or a correction to one of the documents |
| **Missing material** | A record of the affected task and the dependency |
| **Criterion that cannot be checked** | A clearer expected result and a way to check it |
| **Optional improvement** | A separate record, kept apart from readiness problems |

The whole future website does not need to be fully specified before any task can start. Independent work can proceed while later decisions are still open.

## 6. Prepare a readiness report

The **readiness report** records:

- The checks that passed.
- The findings.
- Missing sources.
- A recommendation for the defined next scope of work.

Leave approval to the supervisor. A recommendation that work can go ahead is not permission to start.

## 7. Get and compare a review from Claude

### Step 1: Review the pack yourself

Use the checks and the trace above. Record your evidence before asking Claude for an independent review, so that its findings do not shape yours.

### Step 2: Ask Claude to inspect the pack

```text
Review the draft instruction pack for readiness to perform the selected task.

Inspect:
- Project entry instructions.
- Product requirements.
- Architecture.
- Working rules.
- Task plan.
- Relevant approved IA, design, style guide and content.

Check:
1. Whether required references exist and are accessible.
2. Whether documents agree on scope and behaviour.
3. Whether architecture matches the inspected starter.
4. Whether the next task has satisfied prerequisites.
5. Whether its acceptance criteria can be verified.
6. Which gaps block this task or only later tasks.

Return:
- Sources actually inspected.
- Checks passed.
- Findings with evidence and affected task IDs.
- Missing or inaccessible sources.
- A readiness recommendation for a clearly defined scope.

Do not invent decisions, claim approval, edit files,
install dependencies, run services or implement anything.
```

### Step 3: Compare and resolve

Compare Claude’s findings with your review.

For each issue:

1. Verify the evidence.
2. Identify the responsible document.
3. Propose the correction.
4. Obtain clarification where a decision is needed.
5. Update the affected drafts.
6. Recheck the relevant connections.

A wording correction may require a small recheck. A changed integration decision may affect requirements, architecture, tasks and verification.

## 8. Record the approved baseline

Once the supervisor accepts the instruction pack, record:

- The approved document versions.
- The approval date and reviewer.
- The scope permitted to proceed.
- Outstanding dependencies.
- The next task.

This set of approved references becomes the **implementation baseline**.

Later changes should identify what they replace and which tasks they affect.

Keep document approval separate from task completion. An approved task plan describes work to do; it does not prove that the work has been implemented.

## 9. Practical exercise

**Task: Review Saffron Wellness Clinic’s instructions before implementation.**

1. Review your four draft documents and references.
2. Trace the next task from requirement to verification.
3. Identify any missing or conflicting information.
4. Classify the effect of each finding.
5. Ask Claude for an independent review.
6. Resolve valid findings or record the required decisions.
7. Submit a readiness report.

If approval is pending, leave the review decision as **Awaiting review**.

## 10. Expected submission

Submit:

- Your completed readiness checklist.
- The findings table.
- One requirement-to-verification trace.
- The corrected instruction pack, where applicable.
- The readiness report.
- The approval record once the supervisor has reviewed it.

## 11. Completion criteria

The lesson is complete when:

- Required references have been checked.
- The next task has been traced to its requirements and verification.
- Findings identify their evidence and affected scope.
- Unresolved decisions remain visible.
- The supervisor has recorded what may proceed.
- The approved instruction baseline is identifiable.

## 12. Knowledge check

1. Why is naming a design file insufficient if the approved version is unclear?
2. Can one unresolved integration block only part of the project?
3. What should a readiness finding include?
4. How does a readiness recommendation differ from approval?
5. Does approval of the task plan mean its tasks are complete?
