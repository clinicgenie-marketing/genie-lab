# Lesson 4.1: Inspecting a Project and Writing Scoped Prompts

### Learning objective

By the end of this lesson, you should be able to:

- Check the project’s current state before asking for any change.
- Find the files and components that a task actually involves.
- Write a prompt with a clear goal, scope and boundaries.
- Ask Claude to separate what it observed from what it assumed.
- Review Claude’s understanding before any code is changed.

**Prerequisites:** Complete Unit 3 and have an approved instruction baseline recorded in Lesson 3.4.

**Required materials:** The TypeScript and TSX starter project, the approved instruction baseline (PRD, architecture, working rules and task plan), the approved IA, designs and style guide, and the readiness decision from Lesson 3.4.

## 1. Start from the actual project

The approved instructions describe the website you intend to build. The code shows what currently exists. These are often different.

A task might say “Build the header”, but the project may already contain:

- A complete header.
- A partial header.
- A reusable navigation component.
- A placeholder header with different labels.
- Unfinished work from another task.

If you ask Claude to build something that already exists, it may create a second version, overwrite useful work or solve the wrong problem.

**Inspect the project first, so your request addresses the real gap between what exists and what is required.**

## 2. Check the working state

The **working state** is the condition of the project files right now, including any changes that have not yet been saved to Git.

Run these commands at the terminal command prompt.

Open the practice folder you used in Lessons 1.2 to 1.4. Replace the example path with your actual path before running it:

```bash
cd "path/to/supplied/starter-website"
```

Confirm that you are in the right folder:

```bash
pwd
```

`pwd` prints the full path of the current folder. Check that it ends with the project folder name.

Then ask Git for a short summary of changes:

```bash
git status --short
```

| Result | What it tells you |
|---|---|
| No output | Git sees no changed tracked files and no new untracked files. Files listed in `.gitignore` are not shown |
| A list of files | Some files have changed, or new files exist that Git is not yet tracking |
| An error mentioning a repository | You may be in the wrong folder, or Git has not been set up for this project |

A **tracked file** is one Git already records. An **untracked file** is a new file Git has not been told to record.

If changes are listed, find out what they belong to before continuing. They may be someone else’s unfinished work. Do not ask Claude to reset, discard or overwrite them just to get a clean starting point.

## 3. Inspect only what the task needs

Start with the project’s entry instructions and the selected task. Then follow their references to the relevant code.

For a navigation task, a useful inspection might cover:

| Source | What to find out |
|---|---|
| Project instructions | The working rules and where each reference is kept |
| Selected task | The expected outcome and its boundaries |
| Approved IA | Navigation labels and where each link goes |
| Design and style guide | Layout, visual states and behaviour at different screen sizes |
| Existing navigation component | What is already built |
| Related styles and usages | Shared rules, and other places that use the same code |
| Relevant checks | How the project already verifies this behaviour |

The **IA**, or information architecture, is the approved plan of the website’s pages, their names and how they connect. You prepared it in Unit 2.

You do not need to read the whole project for every task. Reading everything wastes time and makes it harder to see what matters.

However, a focused inspection must still include anything the task depends on. For example, if a header component is used on every page, changing it affects every page, even if the task mentions only the homepage.

## 4. Understand the findings before requesting edits

A useful inspection answers six questions:

1. What already exists?
2. How does it differ from the requirement?
3. Which files are likely to need changes?
4. What else could those changes affect?
5. What information is missing?
6. How could the result be checked?

### Example finding

> The header already exists in a shared TSX component. Its labels match the approved IA, but the mobile menu has not been built. A shared button style is available. The mobile design has been supplied, and no new package appears necessary.

This finding narrows the work from “Build the header” to “Build the approved mobile menu inside the existing header”. The second request is smaller, clearer and easier to check.

Treat words such as “likely” and “probably” with care. Claude should name the files or references that support each conclusion, so you can tell what it actually saw from what it is guessing.

## 5. What makes a prompt scoped?

A **scoped prompt** describes a bounded piece of work: what to do, where, using which references, and where to stop.

| Element | What to include |
|---|---|
| **Goal** | The outcome you need |
| **Target** | The page, component or behaviour concerned |
| **References** | The approved sources Claude must follow |
| **Current state** | What your inspection found |
| **Scope** | What the task includes |
| **Boundaries** | What must be preserved, or left for another task |
| **Expected response** | Whether Claude should inspect, plan or implement |
| **Verification** | What evidence you will need afterwards |

A long prompt is not automatically a clear one. Include the details that help Claude make the right decisions, and leave out the rest.

## 6. Compare a vague prompt with a scoped one

### Vague prompt

> Fix the header and make it better on mobile.

This leaves important questions unanswered:

- Which header?
- What is wrong with it?
- Which approved design applies?
- Does “better” allow a redesign?
- Should Claude look first, or start editing straight away?

Claude will fill these gaps with its own assumptions. Some may be wrong.

### Scoped inspection prompt

```text
Inspect the existing shared header for the Saffron Wellness Clinic website.

Goal:
Understand the gap between the current mobile navigation
and the approved mobile reference.

Read:
- The project entry instructions and working rules.
- The selected navigation task.
- The approved IA and mobile navigation design.
- The existing header, related styles and relevant usages.

Report:
1. What is already implemented.
2. What differs from the approved requirements.
3. The likely files affected and why.
4. Existing components or styles that can be reused.
5. Missing decisions or dependencies.
6. Suitable verification checks.

Inspect only. Do not edit files, install dependencies,
start services, commit, push or deploy.

Preserve existing work. Identify assumptions explicitly.
```

Before using this prompt, replace general names such as “the approved IA” with the actual file paths or design locations in your project.

## 7. Separate inspection, planning and implementation

These are three different requests, with three different results.

| Request | Expected result |
|---|---|
| **Inspect** | An explanation of the current state and the gaps |
| **Plan** | Proposed steps and the checks needed |
| **Implement** | The specified changes, made and verified |

Asking Claude to inspect does not give it permission to edit. The project’s working rules decide when implementation may begin.

Keeping these steps separate is especially useful while you are learning. It lets you catch a misunderstanding before any code changes, when it is quick and cheap to correct.

### Watch for scope expansion

**Scope expansion** happens when a task quietly grows beyond what was asked.

Suppose Claude recommends replacing the entire navigation library in order to add one mobile menu. Before accepting, ask:

- Which requirement makes replacement necessary?
- Could the existing code support the task?
- Which other components would be affected?
- Does this add a new package or a decision that needs review?

A suggestion from Claude is not automatically part of the task.

## 8. Write observable instructions

An **observable** instruction describes a result that another person can check. It avoids opinions such as “nicer” or “better”.

| Unclear instruction | Observable instruction |
|---|---|
| Make the spacing nicer | Apply the section spacing specified in the approved style guide |
| Fix the button | Point the appointment link to the confirmed destination |
| Make mobile work | Build the supplied mobile menu, including opening, closing and following links |
| Clean up the component | Remove the identified duplicate markup while keeping its documented behaviour |

If you cannot yet describe exactly what is wrong, ask Claude to investigate first. Do not ask it to fix something you cannot describe.

## 9. Guided walkthrough

### Step 1: Select one task

Choose one task that has not been started and that the readiness decision in Lesson 3.4 allows to proceed.

Pick a small target, such as the shared header or the treatment card.

### Step 2: Check the working state

Confirm the folder with `pwd` and the changes with `git status --short`.

Record any existing changes that relate to your task.

### Step 3: Write an inspection prompt

Include:

- The selected task ID.
- The exact references.
- The component or behaviour to inspect.
- The findings you expect Claude to report.
- A clear statement that this is inspection only.

### Step 4: Review Claude’s response

Check that Claude:

- Names real files and references.
- Describes the current code accurately.
- Points out existing code that can be reused.
- Explains wider effects, such as shared components.
- Reports missing information.
- Made no changes.

To confirm the last point, run `git status --short` again and compare it with Step 2.

If Claude misunderstood the target, correct the misunderstanding before moving on to planning.

## 10. Practical exercise

**Task: Turn a broad request into a scoped inspection prompt.**

Use this request:

> Make the treatment cards match the design.

Prepare:

1. A list of the information you need to understand the request.
2. A scoped inspection prompt using the actual project references.
3. A short summary of Claude’s findings.
4. Any questions that must be answered before planning.

If the starter project has no treatment cards, report that they are absent. Do not create them during this inspection exercise.

## 11. Expected submission

Submit:

- The selected task or request.
- Your starting `git status --short` summary.
- Your scoped inspection prompt.
- Claude’s findings, and your corrections if any were needed.
- Remaining questions, or a statement that there are none.
- Confirmation of whether any files changed.

## 12. Completion criteria

The lesson is complete when you can:

- Establish the project’s current state.
- Select the instructions and code relevant to a task.
- Write an inspection prompt with clear boundaries.
- Tell verified findings apart from assumptions.
- Recognise unnecessary scope expansion.
- Explain what must be resolved before implementation.

## 13. Knowledge check

1. Why should you inspect the code even when the requirements are approved?
2. What should you do if Git shows changes you do not recognise?
3. How does an inspection request differ from an implementation request?
4. Why might changing a shared component require checking other pages?
5. Why is “make it better” difficult to verify?
