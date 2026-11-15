# Lesson 3.2: Understanding the Project Markdown Files and Instruction Hierarchy

### Learning objective

By the end of this lesson, you should be able to:

- Read and edit basic Markdown.
- Explain the different jobs of the project’s instruction documents.
- Tell the difference between the files Claude Code loads and the order in which the project trusts its sources.
- Resolve conflicts between documents through recorded decisions.
- Give Claude the sources it needs without loading unrelated material.

**Prerequisites:** Complete Lesson 3.1.

**Required materials:** The project’s entry instructions, its existing Markdown files and the reference register from Lesson 3.1.

## 1. Read basic Markdown

**Markdown** is a plain-text format for writing readable documents. A few symbols add headings, lists and emphasis. The project’s instruction files, and these lessons, are written in Markdown.

| Syntax | Purpose |
|---|---|
| `# Title` | Main heading |
| `## Section` | Section heading |
| `- Item` | Bullet point |
| `1. Step` | Numbered step |
| `**Important**` | Bold emphasis |
| `[Label](destination)` | Link |
| Text wrapped in backticks | Commands, file names and code |

Use headings so that a reader can find each part of the document. Use numbered lists for steps, and tables where you need to match one thing precisely to another.

A well-formatted file can still contain contradictory instructions. Formatting makes a document easier to read. It does not make the content correct.

## 2. Understand what each document is for

The project keeps its instructions in several documents, each answering a different question. The exact file names should follow the project. A useful division is:

| Document | Main question it answers |
|---|---|
| **Entry instructions** | What should Claude read first, and how should it work? |
| **Product requirements document (PRD)** | What must the website do? |
| **Architecture** | How is the inspected project organised? |
| **Working rules** | Which conventions apply when building and reviewing? |
| **Task plan** | What work comes next, and how is completion checked? |
| **Approved references** | Which IA, design, content and interaction decisions apply? |

Lesson 3.3 covers writing the PRD, architecture, working rules and task plan.

Avoid copying the same requirement into every document. Copies drift apart when one is updated and the others are not. Keep each requirement in the document responsible for it, and point to it from elsewhere.

## 3. Know which files Claude Code loads

Claude Code reads certain instruction files automatically when a session starts. The main one is `CLAUDE.md`. On 13 November 2026, the official documentation stated that:

- `CLAUDE.md` files in the folder where you start Claude Code, and in the folders above it, load when the session starts. A project’s file can sit at `./CLAUDE.md` or `./.claude/CLAUDE.md`.
- `CLAUDE.md` files in subfolders load later, when Claude reads files in those subfolders.
- A `CLAUDE.md` can **import** another file by writing `@` followed by its path, for example `@docs/prd.md`. Imported files load at the start of the session along with the file that imports them. A path inside backticks is not imported.
- Claude treats these files as context, not as settings it is forced to obey. If two instructions contradict each other, Claude may follow either one.

Other Markdown files, such as `PRD.md` or `Task.md`, are not loaded just because they exist in the project. Claude reads them when they are imported, when a prompt names them, or when Claude decides to open them while working.

This gives you two ways to make sure Claude uses a document:

| Approach | Effect | When it suits |
|---|---|---|
| Import it from `CLAUDE.md` | Loaded in every session | Short documents needed in almost every task |
| Name it in the task prompt | Read when that task needs it | Longer documents, or ones relevant to only some tasks |

Imports do not save space. Everything imported is loaded every time, so a long chain of imports can crowd out the task itself.

To confirm what loaded, run `/context` in a Claude Code session and check the list of memory files. You can also ask Claude which sources it actually read before relying on its answer.

Loading behaviour can change between versions. Check the current official documentation when you set up a real project.

## 4. Set the project’s reference order

Loading decides what Claude sees. It does not decide which source wins when two disagree. That is a separate decision for the project, recorded as its **reference order**.

Within the project’s authorised way of working, record:

1. The current task and what it is authorised to cover.
2. The approved versions of the sources relevant to that task.
3. Which document owns each kind of decision.
4. How changes and conflicts are resolved.

The project’s reference order works inside Claude Code’s own rules and permissions. It cannot override them.

Do not write a blanket rule such as “any new chat message replaces every approved source”. If the supervisor explicitly changes a requirement, identify which documents it affects and update them as authorised. A change made only in a chat message is easy to lose.

## 5. Treat conflicts as findings

For example, the PRD may describe one way for visitors to make contact while the task plan names another.

Record the conflict as a finding:

- The two source locations.
- Their versions and approval evidence.
- The task affected.
- The decision needed.

Do not quietly choose the easier option, and do not claim both can be met if they contradict each other. Remember that Claude may follow either instruction when its files disagree, so an unresolved conflict can produce unpredictable work.

## 6. Keep the entry file focused

The entry file is the document Claude reads first. In a Claude Code project, this is usually `CLAUDE.md`. A useful entry file:

- Explains the project and the scope of work.
- Points to the documents that hold each kind of decision.
- States important boundaries and conventions.
- Explains how to choose the next task.
- Requires accurate reporting of checks performed and their limits.

It should not become a copy of the whole repository or of every lesson. The official documentation recommends keeping each `CLAUDE.md` under about 200 lines, because longer files take up more context and are followed less consistently.

Bring in additional documents when a task needs them.

## 7. Ask Claude to map the instructions

```text
Inspect the project's entry instructions and the documents they refer to.

Return a table with: document, actual path, purpose,
version or approval status, and the decisions it owns.

Identify repeated requirements, conflicts, missing references
and files that are named but cannot be opened.
State which files you actually read and which were loaded automatically.
Do not assume every Markdown file in the project is loaded.

Review only. Do not edit documents or build the website.
```

Compare Claude’s map with the files yourself. Check one or two paths by opening them.

## 8. Practical exercise

**Task: Create a project instruction map.**

1. Locate the entry file and the documents it refers to.
2. Record what each document is responsible for.
3. Record how Claude reaches each one: loaded at start, imported, or named in prompts.
4. Run `/context` and compare the loaded files with your map.
5. Trace one requirement back to the document that owns it.
6. Identify a conflict, or state that none was found.
7. Confirm with the supervisor how future conflicts will be resolved.

Do not invent problems to complete the exercise.

## 9. Expected submission

Submit:

- The document map.
- One requirement traced to its owning document.
- The loading behaviour you checked, and how you checked it.
- Conflicts found, or a statement that none were found.
- Unresolved questions.

## 10. Completion criteria

The lesson is complete when:

- Each document’s job is clear.
- Every referenced document can be reached.
- What Claude loads is recorded separately from which source has authority.

## 11. Knowledge check

1. Why should each document have a distinct job?
2. Does naming a file `PRD.md` mean Claude reads it automatically?
3. How is the set of files Claude Code loads different from the project’s reference order?
4. What should a conflict finding include?
5. Why should the entry file stay focused?

## 12. Official reference

- [How Claude remembers your project (Claude Code documentation)](https://code.claude.com/docs/en/memory), checked 13 November 2026. Check version-specific loading details before setting up a real project.
