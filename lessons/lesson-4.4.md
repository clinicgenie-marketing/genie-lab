# Lesson 4.4: Review the Build Against the Approved Design

### Learning objective

By the end of this lesson, you should be able to:

- Compare what you built with its approved references.
- Identify specific differences in appearance, content and behaviour.
- Write correction instructions that Claude can act on.
- Check corrections without widening the task.
- Submit evidence that supports your review, and save a Git checkpoint once the work is accepted.

**Prerequisites:** Complete Lesson 4.3 and have its implementation running locally.

**Required materials:** The implemented component, approved design, style guide, content and acceptance criteria.

## 1. Compare against the requirements, not your taste

A website can look polished and still differ from the approved design. A design review asks a specific question:

> Does the implemented work match the agreed requirements, and what evidence supports that conclusion?

Review the selected task first. Then include anything a shared change could have affected.

For example, if a shared card style changed, check every required card instance. You do not need to review unrelated features unless the change touches them.

## 2. Set up comparable viewing conditions

A comparison is only fair if you look at the build under the same conditions as the reference.

Before comparing:

1. Confirm which version of the approved design you are using.
2. Open the matching page or component.
3. Use the viewport size specified for the review.
4. Set the browser zoom to 100%.
5. Wait until fonts and images have loaded.
6. Put the component in the same state as the reference, such as menu open or closed.

The **viewport** is the area of the browser window that shows the page. Its size is measured in CSS pixels and is not the same as the computer’s screen resolution. Browser developer tools let you set an exact viewport size.

If the design does not specify a review width, record the width you used and check the project’s responsive requirements.

Compare like with like. A closed mobile menu should be compared with the closed-state reference, not the open one.

## 3. Review in a consistent order

Start with large structural differences, then move to smaller details.

| Review area | What to inspect |
|---|---|
| **Structure** | Section order, grouping, columns and alignment |
| **Layout** | Content width, spacing, proportions and overflow |
| **Typography** | Font, weight, size, line height and text hierarchy |
| **Colours and surfaces** | Text, backgrounds, borders, shadows and corners |
| **Content** | Exact wording, labels, links and missing information |
| **Images and assets** | Correct files, proportions, cropping and focal points |
| **Interaction states** | Hover, focus, expanded, loading and feedback states, where relevant |
| **Responsive behaviour** | Stacking, wrapping, navigation and usability at the agreed widths |

The order matters because one large problem can cause many small ones. For example, a content area that is too wide can make text wrap differently, which then looks like several typography and spacing problems. Fix the underlying cause before adjusting each symptom.

## 4. Tell a defect from a preference

A **defect** is a difference from an applicable requirement. A **preference** is a change you would like that has not been approved.

| Observation | Classification | Response |
|---|---|---|
| Card corners are square, but the style guide specifies 16px | Defect | Correct the implementation |
| The heading wording differs from the approved copy | Defect | Restore the approved wording |
| You would prefer a darker background | Preference | Record it separately if worth proposing |
| No approved mobile reference or applicable convention exists | Specification gap | Ask for the missing decision |
| A link goes to the wrong page | Functional defect | Correct it and test again |

A **specification gap** means the requirements do not say what should happen.

Do not redesign the component during a design review. That would replace an agreed design with your own.

Small rendering differences can occur between browsers and computers. Before treating every tiny difference as a defect, check whether the implementation uses the correct values.

## 5. Write review findings that can be acted on

A useful **finding** identifies the location, the expected result, the actual result and the evidence.

### Example finding

| Field | Example |
|---|---|
| **ID** | UI-01 |
| **Location** | Treatment listing, shared treatment cards |
| **Review conditions** | Agreed mobile viewport, browser zoom at 100% |
| **Expected** | Cards use the approved 16px corner radius |
| **Actual** | Cards have square corners |
| **Reference** | Approved style guide, card specification |
| **Evidence** | Screenshot showing the affected cards |
| **Required correction** | Apply the approved radius through the existing shared style |

Avoid findings such as:

> The cards feel wrong.

Nobody can act on that. Explain what differs and which source establishes the expected result.

### Prioritise by impact

| Priority | Example |
|---|---|
| **Blocks use** | The menu cannot be opened, or content cannot be reached |
| **Major mismatch** | Wrong layout, missing content or a link to the wrong page |
| **Minor mismatch** | A single spacing or border difference with limited effect |

Priority decides the order of corrections. It does not remove the need to meet the acceptance criteria.

## 6. Ask Claude for a focused comparison

If Claude can use browser inspection tools and see the references, use this prompt:

```text
Review the implemented component against the approved references.

Scope:
[Identify the task, page and component.]

Review conditions:
[Provide the required viewport dimensions and states.]

Check:
- Structure and layout.
- Typography and shared style values.
- Exact content and assets.
- Links and specified interaction states.
- Responsive behaviour.
- Related usages affected by shared changes.

For each finding, report:
1. Location and reproduction conditions.
2. Expected result and supporting reference.
3. Actual result.
4. Evidence.
5. Suggested correction and affected scope.

Separate defects, specification gaps and optional preferences.

Do not change files or redesign the component.
State which references and browser states you actually inspected.
If browser access is unavailable, explain what remains unverified.
```

Review Claude’s findings yourself. Claude must not claim to have seen a browser state or reference that it could not access.

## 7. Correct issues in sensible groups

Group findings that share a cause:

- Wrong card padding and alignment may come from one styling issue.
- A wrong link destination is a separate content or routing issue.
- A missing mobile menu needs its own behaviour correction.

### Correction prompt

```text
Correct findings UI-01 and UI-02 from the reviewed findings list.

Use the approved references already identified.
Preserve approved copy, assets and unrelated behaviour.

Before editing, confirm the relevant current code and Git changes.
Use the existing shared styling approach.
Do not add dependencies or perform unrelated refactoring.

After correction:
- Review the affected usages.
- Repeat the checks that originally failed.
- Run applicable project checks.
- Report results and remaining limitations.

Do not commit, push or deploy.

Findings:
[Paste the verified findings.]
```

Do not send an unchecked list of AI suggestions straight into implementation. Verify each finding first.

## 8. Retest the correction and its effects

After each correction:

1. Repeat the original check under the same conditions.
2. Confirm that the expected result is now present.
3. Check related usages affected by the change.
4. Run the applicable project checks.
5. Update the finding’s status.

Use these statuses:

- **Open:** not yet corrected.
- **Corrected, awaiting verification:** a change has been made but not yet checked.
- **Verified:** the original issue was checked again and is resolved.
- **Awaiting decision:** the fix depends on a decision someone else must make.

A code change alone does not justify **Verified**. Only a successful recheck does.

### Example

If card spacing was changed in a shared style, check:

- The card where the problem was found.
- The other required card instances.
- Cards with long and short approved content.
- The relevant desktop and mobile layouts.

## 9. Save a Git checkpoint after acceptance

When the supervisor accepts your reviewed work, save it as a Git checkpoint, as you learned in Lesson 1.4. A **checkpoint** is a commit that records an accepted state of the project, so you can compare against it or return to it later.

Without regular checkpoints, many days of work pile up as uncommitted changes. That makes it hard to see what changed, hard to undo a mistake and hard to review the work later.

Follow the project’s Git rules. If they allow you to commit, run these at the terminal command prompt in the project folder:

1. Review all changes:

```bash
git status
```

2. Stage only the files that belong to the accepted work, one path at a time:

```bash
git add path/to/accepted-file.tsx
```

3. Check exactly what is staged:

```bash
git diff --staged
```

4. Commit with a clear message that follows the project’s convention:

```bash
git commit -m "[Message describing the accepted work]"
```

5. Record the commit identifier in the review decision. `git log --oneline -1` shows it.

Commit only work that has been accepted. Do not include unrelated changes, environment files or temporary files. Pushing to a shared repository is a separate step that follows the project’s rules.

Claude should not commit on your behalf unless you ask it to and the project rules allow it.

## 10. Practical exercise

**Task: Review and refine the component built in Lesson 4.3.**

1. Confirm the references and review conditions.
2. Compare the implementation using the review order in Section 3.
3. Record genuine findings with evidence.
4. Separate defects from preferences and specification gaps.
5. Ask Claude to correct the verified defects.
6. Retest the corrections and the related usages.
7. Submit the review record.
8. After the supervisor accepts the work, save a Git checkpoint.

Do not invent defects to fill a quota. If a check passes, record the evidence that supports it.

## 11. Expected submission

Submit:

- The references and viewport sizes used.
- The completed review checklist.
- A findings table with current statuses.
- Before and after evidence for corrected issues.
- Each acceptance criterion marked **Passed**, **Failed** or **Not checked**.
- Remaining questions or limitations.
- The checkpoint commit identifier, once the work is accepted.

## 12. Completion criteria

The lesson is complete when:

- The implemented scope has been compared with the approved references.
- Findings are specific and supported by evidence.
- Defects are separated from preferences and specification gaps.
- Corrections stay within the agreed scope.
- Corrected issues and affected usages have been retested.
- Remaining limitations are reported accurately.
- Accepted work is saved as a Git checkpoint, if the project rules allow.

## 13. Knowledge check

1. Why should the viewport and interaction state match the reference?
2. How does a defect differ from a preference?
3. What information makes a finding actionable?
4. Why should shared usages be checked after a correction?
5. Why should accepted work be saved as a Git checkpoint?
