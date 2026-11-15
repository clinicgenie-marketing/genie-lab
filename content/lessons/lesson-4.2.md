# Lesson 4.2: Planning Small Tasks with Clear Acceptance Criteria

### Learning objective

By the end of this lesson, you should be able to:

- Turn inspection findings into a task of a manageable size.
- Separate the result you need from the steps used to reach it.
- Write acceptance criteria that someone else can check.
- Identify what a task depends on and when work should pause.
- Review Claude’s plan before any code is changed.

**Prerequisites:** Complete Lesson 4.1 and have an inspected task ready for planning.

**Required materials:** Your inspection findings and prompt from Lesson 4.1, the approved instruction baseline, the relevant approved references, and the project’s documented scripts.

## 1. Move from findings to a task

Inspection tells you what exists and what needs to change. Planning decides how to close that gap.

A useful task has:

- One clear outcome.
- A defined scope.
- The references it needs.
- Known prerequisites.
- Completion criteria someone else can check.
- A suitable way to verify the result.

**A small task should still produce a meaningful result that can be reviewed on its own.**

“Build the whole website” is far too broad for one task. “Change one line” may be too narrow if several connected changes are needed to achieve anything useful.

### Example

| Inspection finding | Suitable task |
|---|---|
| The shared header exists, but its mobile menu is missing | Build the approved mobile menu |
| Treatment cards repeat the same markup in several places | Create one shared treatment card while keeping the current appearance |
| The appointment destination is not confirmed | Record the missing dependency and leave the link for later |
| The homepage differs from the approved design in several sections | Split the corrections into separate section tasks or shared-style tasks |

## 2. Define the outcome before the steps

An **outcome** describes what should be true when the task is finished. **Implementation steps** describe one way to get there.

### Outcome

> Visitors can open the mobile menu, follow the approved links and close it using the specified controls.

### Possible implementation steps

1. Review the existing header and shared styles.
2. Add the menu’s open and closed states.
3. Connect the approved links.
4. Add the specified keyboard and focus behaviour.
5. Check the result against the reference.

Keep the outcome fixed, even if Claude suggests a better way of reaching it. If the steps change, the task is still the same task. If the outcome changes, it is a different task that needs agreeing.

## 3. Set the scope and boundaries

Be explicit about what the task includes and what it must leave alone.

### Example task scope

**Task: Build the mobile menu inside the existing shared header.**

| Included | Boundary |
|---|---|
| Opening and closing the menu | Keep the approved desktop header unchanged |
| Approved labels and destinations | Do not rewrite navigation wording |
| Required keyboard and focus behaviour | Follow the agreed interaction specification |
| Mobile layout and visual states | Reuse existing styles where suitable |
| Relevant checks | Do not add unrelated features or packages |

Boundaries protect requirements. They should not stop necessary supporting changes.

For example, do not insist that only one file may change before you know whether the component, its styles and its tests need to change together. Instead, ask Claude to explain any extra files it needs to modify.

## 4. Write acceptance criteria

**Acceptance criteria** are the conditions a finished task must meet. Each one should be clear enough for another person to check without asking you what you meant.

| Weak criterion | Verifiable criterion |
|---|---|
| Menu works | The menu opens from its trigger and closes through the specified controls |
| Links are correct | Each menu label and destination matches the approved navigation |
| Looks good on mobile | Layout, spacing and typography match the supplied mobile reference at the agreed test widths |
| Accessible | The trigger can be operated by keyboard, announces whether the menu is open, and follows the agreed focus behaviour |
| No bugs | The relevant checks pass, and any remaining issues are documented |

Avoid criteria that claim more than one task can prove, such as “the website is accessible” or “there are no bugs”.

### Use “Given, When, Then” where it helps

This format links a starting condition, an action and an expected result:

> **Given** the mobile menu is closed,  
> **when** the visitor activates its trigger,  
> **then** the menu appears and the trigger shows that it is expanded.

Not every criterion needs this format. Use it when it makes a behaviour easier to understand.

## 5. Separate criteria from verification

**Acceptance criteria state what must be true. Verification explains how you will check it.**

| Acceptance criterion | Verification method |
|---|---|
| Labels and destinations match the approved IA | Compare the rendered links with the reference and follow each one |
| The menu responds to the keyboard | Operate the trigger using only the keyboard |
| The visual presentation follows the approved design | Compare browser screenshots at the agreed widths |
| The desktop navigation still works | Repeat the relevant desktop checks |
| The changes introduce no TypeScript errors | Run the project’s documented type-check command |

A **type check** asks the TypeScript compiler to confirm that the code uses its data correctly, for example that a component receives the kind of value it expects.

Use the scripts and tools that actually exist in the project. Do not invent commands, and never record an unperformed check as passed.

Match each check to what it can actually prove. A type check cannot tell you whether the page looks right. A screenshot cannot tell you whether a link reaches the correct page.

## 6. Identify prerequisites and stopping conditions

A **prerequisite** is something that must be in place before the task can be completed.

Before implementation, ask:

- Are the required references available?
- Are the labels and destinations confirmed?
- Is the interaction behaviour specified?
- Are any required services or test environments available?
- Would existing changes conflict with this task?

Record missing prerequisites against the task they affect.

### Define when Claude should pause

Ask Claude to stop and report, rather than decide for itself, when:

- Two approved references conflict.
- The task needs an integration that was not planned.
- Existing work would have to be overwritten.
- A necessary decision is missing.
- The proposed solution would make the task much larger.

Routine coding choices can follow the project’s established conventions. Do not turn every small decision into an approval request.

## 7. Review the plan for unnecessary complexity

A good plan explains:

1. What will change.
2. Which files are likely to be affected.
3. Which existing code can be reused.
4. How the result will be checked.
5. What remains uncertain.

Look out for these warning signs:

| Warning sign | Question to ask |
|---|---|
| A new package for a small interaction | Why can the existing project not do this? |
| Broad refactoring | Is this necessary for this task? |
| Several unrelated features | Can these be separate tasks? |
| No verification | How will we know the result is correct? |
| Confident answers to unresolved questions | Which source supports this decision? |

A **package**, also called a dependency, is code written by someone else that the project installs and relies on. **Refactoring** means restructuring existing code without changing what it does.

A plan should be detailed enough to assess, without becoming a speculative rewrite of the whole project.

## 8. Guided walkthrough

### Step 1: Select the inspected task

Use your findings from Lesson 4.1.

Write a one-sentence outcome and list any unresolved prerequisites.

### Step 2: Draft the task

Complete this specification:

| Field | Your draft |
|---|---|
| Task ID and title | |
| Intended outcome | |
| Relevant references | |
| Current implementation | |
| Included work | |
| Boundaries | |
| Prerequisites | |
| Acceptance criteria | |
| Verification methods | |
| Stopping conditions | |

### Step 3: Ask Claude to propose the implementation plan

```text
Plan the selected task using the inspection findings and
approved references below.

Return:
1. Your understanding of the intended outcome.
2. Any unmet prerequisites.
3. The proposed implementation steps.
4. Likely files affected and why.
5. Existing components or styles to reuse.
6. Acceptance criteria and matching verification methods.
7. Conditions that would require pausing for clarification.

Keep the work within the selected task.
Use established project conventions for routine choices.
Explain any proposed dependency or broader refactoring.

Do not implement, install packages, commit, push or deploy.
Do not invent decisions for unresolved requirements.

Task:
[Paste the task draft.]

Inspection findings:
[Paste the verified findings.]

References:
[Provide the relevant project references.]
```

### Step 4: Assess the plan

Check whether Claude:

- Understood the outcome.
- Kept within the boundaries.
- Identified real prerequisites.
- Proposed changes in proportion to the task.
- Matched each criterion to suitable evidence.
- Avoided describing planned work as if it were already done.

Revise the plan where needed.

## 9. Practical exercise

**Task: Prepare one task that is ready for implementation.**

Using your treatment card inspection from Lesson 4.1:

1. Define the actual gap.
2. Write one bounded outcome.
3. Specify the scope and prerequisites.
4. Write four to six acceptance criteria.
5. Assign a verification method to each criterion.
6. Ask Claude for a plan.
7. Review and correct the plan.

If treatment cards do not exist yet, plan their creation from the approved references. If required references are missing, record the task as blocked rather than inventing them.

Implementation begins in Lesson 4.3.

## 10. Expected submission

Submit:

- Your completed task specification.
- Claude’s proposed plan.
- Any corrections you made, with your reasons.
- The final acceptance criteria and their verification methods.
- The task’s readiness status and any unresolved dependencies.

## 11. Completion criteria

The lesson is complete when:

- The task has one clear, meaningful outcome.
- Scope and boundaries are explicit.
- Prerequisites are met or clearly recorded.
- Acceptance criteria describe observable results.
- Verification methods match the criteria.
- The plan is in proportion to the task.
- Any required review decision is recorded accurately.

## 12. Knowledge check

1. How does an outcome differ from an implementation step?
2. What makes a task small enough to review?
3. How do acceptance criteria differ from verification methods?
4. Why can a passing type check not prove that a page looks right?
5. When should Claude pause instead of choosing an answer itself?
