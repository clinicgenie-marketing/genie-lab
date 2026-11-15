# Genie Lab: Clinic Genie Vibe Coding Intern Platform

Approved and locked on 13 November 2026 (Lesson 3.3 on 15 November 2026). Lesson 1.2 revised and locked on 15 November 2026. Lessons 1.3, 1.4 and 9.4 revised on 15 November 2026 for the VS Code workflow and await approval. UK English. TypeScript and TSX. Practice client: Saffron Wellness Clinic (fictional).


---

# Lesson 1.1: How Websites Work and the Vibe Coding Workflow

### Learning objective

By the end of this lesson, you should be able to:

- Explain what the browser, the website’s code and outside services each do.
- Tell apart local development, a test deployment and a live website.
- Describe how to guide Claude through a bounded task.
- Explain why work Claude produces still needs a person to check it.

**Prerequisites:** None.

**Required materials:** A web browser, the course instructions and your supervisor’s description of the Saffron Wellness Clinic practice project.

## 1. Understand what a website is made of

A website combines several kinds of work. It helps to name them separately, because each is checked in a different way.

| Part | What it does | Example |
|---|---|---|
| **Content** | Communicates information | A page heading or a treatment description |
| **Presentation** | Controls how things look | Typography, spacing and colour |
| **Behaviour** | Responds when the visitor does something | Opening a mobile menu |
| **Integration** | Connects the website to another system | Sending an approved request to a receiving service |

Three things work together to produce what a visitor sees:

- The **browser**, such as Chrome, Safari or Edge, displays the website.
- The **project files** describe what to display and how it should behave.
- A **server**, a computer that responds to requests over the internet, may prepare content or handle submitted information. Whether a project needs one depends on its **architecture**, the overall plan for how it is built.

Some websites use outside services, such as an email or booking service. Many do not. A contact form that appears on a page does not prove that any service exists to receive its messages.

## 2. Tell the working environments apart

An **environment** is a place where the website runs. Each one has a different purpose.

| Environment | Purpose | What it does not prove |
|---|---|---|
| **Local development** | Running the project on your own computer while you work | That anyone else can see it |
| **Test or staging environment** | Reviewing a hosted copy of the website before release | That it has been accepted for the public |
| **Production** | Serving the live website to its real audience | That every feature has been checked |

When you run a website locally, it usually has an address such as `http://localhost:` followed by a number. That address only works while a program on your own computer is running. Sending the address to a colleague does not let them see your work.

Do not change a live website as part of this introductory lesson.

## 3. Understand your role when working with Claude

Claude can read files, suggest approaches and make changes, when the environment and the task allow it.

**You remain responsible for checking that the result meets the approved requirements.**

Your responsibilities include:

1. Giving Claude the relevant approved references.
2. Stating the result you need and the boundaries of the task.
3. Reviewing Claude’s assumptions and proposed changes.
4. Checking the finished work and the evidence for it.
5. Reporting any unresolved problems accurately.

“Claude said it is complete” is not evidence on its own. Claude can misunderstand a request, miss a requirement or report a check it could not actually perform. Your review catches these.

## 4. Follow a controlled working cycle

**Vibe coding** means building software by describing what you want in plain language and letting an AI tool such as Claude write the code. It is fast, but speed without checks produces work nobody can trust. A controlled cycle keeps each step visible:

1. **Understand:** identify the requirement and the expected result.
2. **Inspect:** find out what already exists.
3. **Plan:** choose changes in proportion to the task, and the checks that match them.
4. **Implement:** make the authorised changes.
5. **Verify:** compare the result with the requirement.
6. **Record:** summarise the changes, the evidence and any remaining work.

Small corrections may not need a separate written plan. The cycle exists to make decisions visible. It does not mean asking for approval before every routine edit.

Later units practise each step in detail: inspection and planning in Unit 4, implementation and checking from Unit 5 onwards.

## 5. Separate requirements from suggestions

An **approved design** defines what to build. A new idea, whether yours or Claude’s, is only a **suggestion** until someone with the authority to decide has accepted it.

For example, reordering the navigation because it looks better changes how visitors move through the website. That is a new design decision, not simply building the existing design.

When a requirement is missing, name the decision that is needed. Do not fill the gap by inventing an approval.

## 6. Prepare your first inspection request

A **prompt** is the request you type to Claude. You will use this one after your tools and the starter project are set up in Lessons 1.2 to 1.4:

```text
Explain the supplied Saffron Wellness Clinic practice project to a beginner.

Read only its introductory instructions and relevant project overview.
Describe the intended website, known tools and working environments.
Distinguish supplied facts from missing information.
Explain the next permitted learning task.

Inspect only. Do not edit files, install software, start services,
commit, push or deploy.
```

Notice how the prompt states what to read, what to report and what not to do. Later lessons build on this pattern.

This is an example for later use. It does not mean the starter project has been supplied or inspected during this lesson.

## 7. Practical exercise

**Task: Explain the website workflow in your own words.**

1. Describe content, presentation, behaviour and integration, with one example of each.
2. Explain the difference between a local environment and a live website.
3. Write the six-step working cycle for one small, imaginary website change.
4. Identify which decisions in that change would need approved references.
5. State how you would know the change had succeeded.

No coding is required.

## 8. Expected submission

Submit:

- Your explanation of the four parts of a website.
- Your explanation of the environments.
- Your working cycle for one small change.
- One example of a claim that would still need checking before you could rely on it.

## 9. Completion criteria

The lesson is complete when you can:

- Explain the parts of a website.
- Tell the environments apart.
- Describe your responsibility for checking Claude’s work.

## 10. Knowledge check

1. How does presentation differ from content?
2. Does a visible contact form prove that messages can be received?
3. Why does a page running on your own computer not automatically become a public website?
4. What makes a suggestion different from an approved requirement?
5. Why should Claude’s completion report be checked?


---

# Lesson 1.2: Setting Up Claude Code CLI and the Terminal

### Learning objective

By the end of this lesson, you should be able to:

- Set up Visual Studio Code as the one place where you read code, run Claude Code and manage Git.
- Tell the difference between a terminal command, a prompt for Claude and an action in the VS Code interface.
- Open the practice project in VS Code, either from a supplied folder or by cloning its GitHub repository.
- Confirm that Claude Code is installed and start an inspection-only session in VS Code’s integrated terminal.
- Find where VS Code shows changes, commits and pushes, and connect it to your approved GitHub account.
- Report setup problems accurately instead of guessing at fixes.

**Prerequisites:** Complete Lesson 1.1.

**Required materials:** The computer your supervisor has approved, Visual Studio Code, Git, the approved Claude Code installation method, the GitHub account and repository access your supervisor has arranged, and the practice project, supplied either as a folder or as a GitHub repository.

## 1. Understand your workspace

**Visual Studio Code**, usually called **VS Code**, is a code editor: a program for opening, reading and changing the files in a project. In this course you use one VS Code window for three jobs:

| Part of VS Code | What you use it for |
|---|---|
| **Explorer and editor** | Opening files, reading code and checking what Claude changed |
| **Integrated terminal** | Running commands and Claude Code CLI, inside the same window |
| **Source Control view** | Seeing changed files, comparing versions, and committing and pushing to GitHub |

Keeping all three in one window has a practical benefit. The folder open in VS Code, the folder the terminal starts in and the Git repository are the same folder, so it is much harder to work in the wrong place.

The **terminal** is where you type commands for the computer. The program that reads and runs them is the **shell**: on macOS this is usually zsh, and on Windows it is usually PowerShell. VS Code’s **integrated terminal** is a terminal panel inside VS Code, using the same shell.

**Claude Code CLI** is a program you start from the terminal. CLI stands for command-line interface, meaning you use it by typing rather than clicking.

There are four places you type or click, and each expects something different:

| Where | What you enter |
|---|---|
| The shell’s **command prompt** in the integrated terminal | Commands, such as `pwd` |
| A Claude session, running in that terminal | Requests in plain language, asking Claude to inspect, plan or implement |
| The VS Code interface | Clicks and short entries, such as opening a file or typing a commit message |
| The browser | Website addresses, and clicks and typing on the page |

Typing a terminal command into Claude’s conversation does not run it in your shell. Do not assume a command ran because you pasted it somewhere.

### The VS Code extension

Claude Code also offers a VS Code extension with a graphical chat panel. The extension bundles its own copy of the CLI for that chat panel; to run `claude` in VS Code’s integrated terminal, you also need the standalone CLI install. This course uses the CLI in the integrated terminal, so that commands and Claude sit side by side and the lessons’ instructions match what you see. Use the extension only if your supervisor approves it.

## 2. Install and check the tools

You need three tools, each installed with the method your organisation has approved:

| Tool | What it does |
|---|---|
| **VS Code** | The editor, terminal and Source Control view described above |
| **Git** | The version control program that records commits. VS Code’s Source Control view uses it, so it must be installed separately |
| **Claude Code CLI** | The `claude` command you run in the terminal |

Some of these may already be installed. Check first, as described in Section 4. Installing a second copy can cause conflicts that are hard to untangle.

To install, follow each tool’s official instructions for your actual operating system. Installation methods change over time, so this lesson deliberately does not copy installation commands into the course. The official pages are always the current source. On Windows, check the Claude Code setup page for any extra requirements before installing.

Never install extra software, change system permissions or switch to someone else’s account to work around an error you do not understand. Report the error instead.

The starter website may have its own requirements, such as a particular version of Node.js, a program that runs JavaScript outside the browser. Installing these three tools does not mean those are ready. Lessons 1.3 and 1.4 deal with them.

## 3. Open the practice project in VS Code

Your supervisor will supply the practice project in one of two ways.

### If it is a GitHub repository

**GitHub** is a website that stores Git repositories online, so a team can share them. A **repository**, or repo, is a project folder whose history Git records.

1. In VS Code, open the Source Control view and select **Clone Repository**. You can also open the Command Palette and run **Git: Clone**.
2. If VS Code asks you to sign in to GitHub, use the account your supervisor approved and follow the sign-in steps in your browser.
3. Choose the repository you were given access to.
4. Choose a location for it inside your practice area, not your whole home folder or a shared company folder.
5. Open the cloned folder when VS Code offers.

**Cloning** copies the repository from GitHub to your computer, together with its history. The copy on GitHub is called the **remote**.

### If it is a folder

Use **File > Open Folder** and select the supplied practice folder.

### Trust only the practice project

VS Code may ask whether you trust the authors of the files in the folder. Trust only the supplied practice project. If you are unsure where a folder came from, choose not to trust it and ask your supervisor.

Keep the open folder limited to the practice project. Claude can read files inside the folder you start it in, so a broad folder exposes far more than the task needs.

## 4. Open the integrated terminal and check it

Open the integrated terminal with **Terminal > New Terminal**. The menu also shows the keyboard shortcut for your system.

The terminal opens in the folder VS Code has open. Confirm that. `pwd`, short for “print working directory”, shows the full path of the current folder:

```bash
pwd
```

Check that the path ends with the practice project folder. If it does not, close the terminal, check which folder VS Code has open, and open a new terminal.

Then check that Git and Claude Code are available in this terminal:

```bash
git --version
```

```bash
claude --version
```

Record what each prints. A version number shows that the command is available in this shell. It does not prove that your accounts work or that the project is ready.

If you need to diagnose a Claude Code setup problem further, the official documentation provides a diagnostic command:

```bash
claude doctor
```

If `claude` or `git` is not found, record the exact error message and check the approved installation instructions. Do not keep reinstalling with different methods. Each extra installation makes the problem harder to diagnose.

## 5. Start Claude in the integrated terminal

At the shell command prompt, in the practice folder:

```bash
claude
```

If asked, complete your organisation’s approved sign-in process. Never paste passwords or other credentials into a lesson submission.

Run from VS Code’s integrated terminal, the CLI automatically connects to VS Code for features such as viewing proposed changes as diffs in the editor. A **diff** shows what a change removes and adds, side by side. These views help you review Claude’s work. They do not replace your review.

A layout that works well: files in the editor at the top, the terminal with Claude below, and the learning platform in a browser beside VS Code.

## 6. Run an inspection-only request

Once Claude is ready, enter this prompt:

```text
Confirm the current project folder and identify its entry instructions.
Read only the introductory project information needed for this check.
Explain what starter was supplied and what setup information is missing.

Do not edit files, install dependencies, start services, commit,
push or deploy. Do not print credentials or environment values.
```

Check the folder and sources Claude reports. Open one of the files it names in the editor and confirm that it says what Claude said it does. If Claude cannot access the sources, record that as a limitation.

## 7. Get to know the Source Control view

Open the Source Control view from its icon in the Activity Bar on the left, or with Ctrl+Shift+G on Windows and Linux (⌃⇧G on macOS). In this lesson you only look. You make your first commit in Lesson 1.4.

| What you see | What it is for |
|---|---|
| **Changes** list | Files that differ from the last commit. Selecting one opens a diff of that file |
| **Message box** and **Commit** button | Recording a commit: a saved checkpoint of the project on your computer |
| **More Actions (...) > Push** | Uploading your commits to the remote repository on GitHub |
| The arrow beside **Commit** | Further options, including **Commit & Push**, which does both in one step |
| Status bar, bottom left | The current branch and, when connected to GitHub, the sync status |

A **commit** stays on your computer. A **push** sends commits to GitHub, where other people, and sometimes automatic deployments (Lesson 9.4), can see them. That difference is why the course treats pushing as a separate, authorised step.

These buttons run Git for you. Each one matches a command you could type in the terminal:

| Source Control view | Terminal equivalent |
|---|---|
| Changes list | `git status` |
| Selecting a changed file | `git diff` |
| Commit | `git commit` |
| Push | `git push` |

Both routes change the same repository. A rule such as “do not commit” applies whether you click, type or ask Claude.

Rules for this course:

- Commit only when a lesson or task asks for it.
- Push only when the task and the project rules authorise it, and only to the branch the project names.
- Never force push.
- If a push fails, do not keep pressing Sync or Push. Record the message and ask your supervisor.

## 8. Handle common setup problems

| What you see | What to do next |
|---|---|
| `command not found` for `claude` or `git` | Check the installation using the official guidance. If you installed the tool while VS Code was open, close VS Code completely and reopen it, then open a new terminal |
| GitHub sign-in fails | Follow your organisation’s approved account access process |
| Cloning fails with an access or permission error | Ask your supervisor to confirm your access to the repository |
| Source Control says there is no repository | You may have the wrong folder open, or the folder is not a Git repository. Record it. Do not create a new repository unless your supervisor asks |
| The terminal is in the wrong folder | Open the correct folder in VS Code, then open a new terminal |
| Sign-in to Claude fails | Follow your organisation’s approved account access process |
| Claude asks permission to do something unexpected | Check what it wants to do against the current task before answering |

Claude Code may ask your permission before running commands or changing files. These requests protect your work. Never turn off protections like these to get through an introductory exercise.

## 9. Practical exercise

**Task: Set up your VS Code workspace and start a checked inspection session.**

1. Open the practice project in VS Code, by cloning the supplied repository or opening the supplied folder. Trust only that project.
2. Open the integrated terminal and confirm the folder with `pwd`.
3. Check `git --version` and `claude --version`.
4. Start Claude and complete the approved sign-in if needed.
5. Run the inspection-only prompt.
6. Open one file Claude names in the editor and check Claude’s description of it.
7. Open the Source Control view. Confirm that it lists no changes, and note the branch shown in the status bar.
8. Record the sources Claude inspected and any setup gaps.

## 10. Expected submission

Submit:

- The VS Code version (from VS Code’s About window), the Git version and the Claude Code version.
- How you opened the project (cloned or opened as a folder) and, if cloned, the repository name.
- A summary of the project path. You may shorten personal parts of the path.
- Claude’s inspection response, and the file you checked against it.
- A screenshot of the Source Control view showing no changes, with the branch visible.
- Any error messages, with personal or account details removed.

Do not include passwords, tokens or other account secrets.

## 11. Completion criteria

The lesson is complete when either:

- The editor, terminal, Claude session and Source Control view all work on the correct project in one VS Code window, and nothing has been changed, committed or pushed, or
- An exact setup blocker has been recorded so it can be resolved.

An unresolved blocker does not count as a successful setup. It counts as an accurate report.

## 12. Knowledge check

1. Where should you type `claude --version`, and why not inside a Claude session?
2. Why should the project be open in VS Code before you start Claude in its terminal?
3. How does a commit differ from a push?
4. VS Code can push with one click. Why does this course still treat pushing as a separate, authorised step?
5. What information must be left out of your setup evidence?

## 13. Official references

- [Claude Code setup](https://code.claude.com/docs/en/setup), checked 13 November 2026 for installation and verification commands.
- [Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code), checked 15 November 2026 for running the CLI in VS Code’s integrated terminal and how it differs from the extension.
- [Source control in VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview) and [Working with repositories and remotes](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes), checked 15 November 2026 for the Source Control view, committing and pushing.
- [Claude Code first-day guide](https://support.claude.com/en/articles/14552382-your-first-day-in-claude-code), checked by the uploading author for starting Claude Code from a project.

---

# Lesson 1.3: Understanding Project Files, TypeScript and TSX

### Learning objective

By the end of this lesson, you should be able to:

- Recognise the main kinds of file in the supplied starter project.
- Explain the difference between `.ts` and `.tsx` files.
- Read a small typed component and identify the inputs it receives.
- Find the project’s commands without inventing them.
- Tell source files, configuration and generated files apart.

**Prerequisites:** Complete Lesson 1.2.

**Required materials:** The supplied TypeScript and TSX starter project, open in the VS Code workspace you set up in Lesson 1.2, and Claude access for inspection only.

## 1. Inspect the actual starter

A **starter project** is a ready-made set of files that gives you a working website to build on.

Projects do not all use the same folders or the same **framework**, the toolkit that decides how files become pages. A layout you saw in another tutorial may not match this project. Find out which files exist and what they do before assuming anything.

| File category | Typical purpose |
|---|---|
| **Source** | Pages, components and the code that makes the website work |
| **Styles** | Rules for how things look |
| **Assets** | Images, fonts and other media |
| **Configuration** | Settings for the framework and other tools |
| **Instructions** | Requirements and working rules, often in Markdown files |
| **Generated output** | Files produced automatically by builds or tools |

Generated output is recreated every time the tool runs, so editing it by hand is pointless. The next build overwrites your change.

Use VS Code’s Explorer, the file tree on the left, to see the project’s actual folders and files. Selecting a file opens it in the editor.

Common file names you see in examples are only examples. They do not prove your starter contains those files.

## 2. Understand TypeScript

**JavaScript** is the programming language browsers run. **TypeScript** is JavaScript with an added type system. A **type** describes the shape of a value the code expects, so the TypeScript tools can warn you when something does not fit.

```ts
type Treatment = {
  title: string;
  href: string;
};

const treatment: Treatment = {
  title: "Example treatment",
  href: "/example-treatment",
};
```

Here, the `Treatment` type says both `title` and `href` must be **strings**, meaning text. If someone wrote a number for `title`, the TypeScript tools would report an error.

The wording and the route are illustrative. They are not approved Saffron Wellness Clinic content.

A **type check** finds some mistakes in the code. It cannot prove that a page address exists, that wording has been approved or that information arriving from outside the website is valid. Lesson 7.2 returns to this last point.

## 3. Understand TSX

**JSX** is a way of writing interface elements, such as links and headings, inside code. It looks similar to HTML. **TSX** is TypeScript with JSX.

```tsx
type TreatmentLinkProps = {
  title: string;
  href: string;
};

export function TreatmentLink({ title, href }: TreatmentLinkProps) {
  return <a href={href}>{title}</a>;
}
```

This is a **component**: a reusable piece of the interface. It receives two inputs, `title` and `href`. Inputs to a component are called **props**, short for properties. The component uses them to produce a link.

In a TypeScript project, a file containing JSX uses the `.tsx` extension. Files with only TypeScript, and no JSX, usually use `.ts`.

The project’s configuration must also support JSX. Do not change that configuration during this lesson.

## 4. Recognise imports and shared components

Code is split across files called **modules**. A module can **export** a value or component so others can use it. Another module then **imports** it:

```tsx
import { TreatmentLink } from "./TreatmentLink";
```

The text in quotation marks is the path to the file being imported. Use the paths your actual project uses.

When several pages import the same shared component, changing that component changes every one of those pages. Before asking for a change, find out:

- Where the component is defined.
- Where else it is used.

In VS Code, right-click the component’s name and choose **Find All References** to list where it is used. You can also search the whole project with **Edit > Find in Files**.

Do not copy a shared component into a new file just because you could not find the original. Two copies drift apart, and fixes made to one never reach the other.

## 5. Find the project’s commands and packages

Most TypeScript projects have a file called `package.json` in their main folder. If your starter has one, inspect it.

| Information | What to find out |
|---|---|
| **Scripts** | The real commands for running the website and checking it |
| **Dependencies** | The packages of other people’s code the project uses |
| **Package manager** and **lock file** | Which tool installs packages (such as npm, pnpm or Yarn), and the file that records exact package versions |
| **Runtime documentation** | Which versions of tools such as Node.js are required |

A script is a named command stored in `package.json`. You run it through the package manager, for example `npm run` followed by the script name.

Do not assume `npm run dev`, or any other command you have seen elsewhere, exists in this project. Record the actual script names and the package manager the project uses.

Do not edit the lock file or install packages during this lesson.

## 6. Ask Claude to explain selected files

```text
Inspect the supplied TypeScript/TSX starter without editing it.

Identify:
1. Its framework and evidence for that conclusion.
2. Relevant source, style, asset and configuration locations.
3. One .ts file and one .tsx file, if present, and their roles.
4. One existing component's props and usages.
5. Actual documented development and verification commands.
6. Generated files that should not be edited directly.

Explain unfamiliar terms for a beginner. Do not invent absent files.
Do not install dependencies, start services, commit, push or deploy.
```

Check Claude’s answer against the files yourself. If it names a file, open it in the VS Code editor.

## 7. Practical exercise

**Task: Create a file map of the starter project.**

1. Record the relevant file categories and their actual paths.
2. Explain one existing type and one TSX component, including its props.
3. Identify one import, and say which file it comes from.
4. Record the actual scripts and what each one does.
5. List any missing setup information.

Do not change the starter project. At the end, confirm that nothing changed: the Source Control view should list no changes, and `git status --short` in the integrated terminal should print nothing.

## 8. Expected submission

Submit:

- Your file map.
- Your explanation of the component.
- The list of scripts.
- Confirmation of whether any files changed.

## 9. Completion criteria

The lesson is complete when:

- Your file map reflects the actual starter project.
- You can explain the difference between `.ts` and `.tsx` files.
- You can find the project’s commands without guessing them.

## 10. Knowledge check

1. How does a `.tsx` file differ from a `.ts` file?
2. What are component props?
3. Why can changing one component affect several pages?
4. Does a `string` type prove that a web address is correct?
5. Where should you look to find the project’s available scripts?

## 11. Official reference

- [TypeScript JSX documentation](https://www.typescriptlang.org/docs/handbook/jsx.html), checked 13 November 2026 by the uploading author for TSX and JSX configuration basics.

---

# Lesson 1.4: Run a Starter Website and Save a Git Checkpoint

### Learning objective

By the end of this lesson, you should be able to:

- Run the supplied starter project using its documented commands.
- Open the local address the project reports.
- Explain working changes, staging and commits in Git.
- Review and save a bounded Git checkpoint in VS Code’s Source Control view.
- Push the checkpoint to GitHub from VS Code, when pushing is authorised.
- Report setup failures without disturbing unrelated work.

**Prerequisites:** Complete Lessons 1.1 to 1.3.

**Required materials:** The VS Code workspace from Lesson 1.2 with the starter project open, the approved setup instructions, the required runtime such as Node.js, a browser, the project’s Git repository and, if pushing is authorised, the GitHub access your supervisor arranged.

## 1. Confirm the starting state

**Git** is a tool that records the history of a project’s files. A **repository** is a project folder whose history Git is recording.

Open the Source Control view in VS Code. If its list of changes is empty, Git sees no changed or new files.

Then check the same thing in the integrated terminal. Confirm where you are:

```bash
pwd
```

Then ask Git for a short summary of changes:

```bash
git status --short
```

No output means Git sees no changed or new files. A list means something has changed. Find out what any changes belong to before continuing.

If Git reports that this is not a repository, record that as a setup finding. Do not create a new repository over a project you are unsure about. That would start a fresh history and hide the real one.

A clean result does not list files Git has been told to ignore. It also does not prove that every project requirement is in place.

## 2. Follow the documented setup

Use the runtime, package manager and install command you identified in Lesson 1.3.

**Installing dependencies** downloads the packages listed in `package.json`. If they are already installed, find out whether installing again is necessary before repeating it.

If setup instructions are missing, ask for the specific decision you need. Never change framework versions or switch to a different package manager as a shortcut.

Record every command you actually run and its result.

## 3. Start and inspect the website

Run the project’s documented development command in VS Code’s integrated terminal. The **development command** starts a local server that shows the website on your computer and usually reloads it when files change.

The terminal will print a local address, often starting `http://localhost:`. Open that exact address in your browser. Do not guess the number at the end, called the **port**, and do not assume the server started just because no error has appeared yet.

Check that:

1. The expected starter page loads.
2. It is the supplied starter project, not another project.
3. The terminal reports no startup errors.
4. Any required images and other assets appear.

Leave the development command running while you use the local page. If you need to run other commands meanwhile, open a second terminal with **Terminal > New Terminal**, so the server keeps running in the first. Closing that terminal stops the website. To stop the server, use its documented method in the terminal where it is running. For many development commands this is **Control and C** pressed together.

## 4. Understand a Git checkpoint

Git keeps track of changes in three stages:

| Term | Meaning |
|---|---|
| **Working changes** | Edits currently in the files, not yet recorded |
| **Staged changes** | Changes selected to go into the next commit |
| **Commit** | A recorded snapshot of the selected changes, with a message and an identifier |
| **Push** | Sending commits to a **remote repository**, a copy stored on a server such as GitHub |

A **checkpoint** is a commit that records a known, accepted state, so you can compare against it or return to it later.

A commit on your computer is not a deployment, and it is not a backup of every file. Files Git ignores, and new files you have not staged, are not included.

## 5. Review before committing

Always look at what would be committed before committing it.

### In the Source Control view

The **Changes** list shows every file that differs from the last commit. A letter beside each file shows why it is listed: **M** for modified, **U** for untracked (new to Git) and **D** for deleted.

- Select a modified file to open a diff: the last committed version on one side and your version on the other.
- Select an untracked file to open it. It has no earlier version to compare with, so read the whole file.

### In the terminal

The same checks as commands. See changes in files Git already tracks:

```bash
git diff
```

This shows **unstaged** changes. It does not show the contents of new, untracked files. Open those separately.

See changes you have already staged:

```bash
git diff --staged
```

You may also see this written as `git diff --cached`. Both do the same thing.

Include only the agreed practice work. Never stage passwords or other credentials, generated output, or someone else’s changes.

## 6. Save the agreed checkpoint

If there are changes ready to save, and saving a checkpoint is authorised:

1. In the Source Control view, hover over each reviewed file and select **+** (Stage Changes). Staged files move to a **Staged Changes** list.
2. Check the Staged Changes list holds only the intended files. Select a staged file to see exactly what will be committed.
3. Type a clear message in the message box, such as “Record verified starter setup”.
4. Select **Commit**.

Avoid **Stage All Changes** unless you have just reviewed every file in the list. If VS Code offers to stage all your changes and commit them because nothing is staged, decline and stage the files you reviewed instead.

To do the same in the terminal, stage each file by its actual path. Replace the example path:

```bash
git add -- "actual/path/to/reviewed-file"
```

The `--` tells Git that what follows is a file path, which avoids confusion with unusual file names.

Repeat for each intended file. Then check the result with `git diff --staged` and `git status --short`.

If the staged content is correct, commit it with a clear message:

```bash
git commit -m "Record verified starter setup"
```

If there are no intended changes, do not create artificial edits or an empty commit just to complete the exercise. Instead, record the existing latest commit, which you can see with `git log --oneline -1`.

After committing, the Source Control view lists no changes, and `git log --oneline -1` shows your new commit and its identifier.

## 7. Push the checkpoint to GitHub, if authorised

A commit stays on your computer. **Pushing** sends it to the remote repository on GitHub.

Push only if your supervisor has authorised pushing for this exercise, and only to the branch they named. Check the branch shown at the bottom left of VS Code before pushing.

1. In the Source Control view, select **More Actions (...) > Push**.
2. If VS Code shows **Publish Branch** instead, the branch does not exist on GitHub yet. Publish it only if your supervisor named this branch.
3. Open the repository on GitHub in your browser and confirm that your commit appears there.

The terminal equivalent is `git push`.

Never force push. If a push fails, do not keep pressing Push or Sync. Record the message and ask your supervisor.

If pushing is not authorised, leave the commit on your computer and record that it has not been pushed.

Do not deploy in this lesson.

Git labels each commit with a name and email address. If Git says these are not set up, follow your organisation’s setup instructions. Never invent a name or use someone else’s details.

Later lessons save a checkpoint each time a piece of work is accepted, starting with Lesson 4.4.

## 8. Ask Claude for setup help

```text
Help run the supplied starter using its documented setup.
First confirm the project location, Git state, runtime requirements,
package manager and existing scripts.

Perform only the authorised setup and local run steps.
Do not change application code merely to hide setup errors.
Report the actual local URL, observed result and any blocker.

Before a local checkpoint, show the intended files and explain them.
Preserve existing unrelated work. Do not push or deploy.
```

Read every command Claude proposes before allowing it to run. Claude does not commit or push here: you do that yourself in the Source Control view, after reviewing the changes.

## 9. Practical exercise

**Task: Run the starter project and record a checkpoint.**

1. Confirm the project folder and Git state.
2. Complete any necessary documented setup.
3. Run the website and inspect it in the browser.
4. Record evidence that it started correctly.
5. Review any intended changes in the Source Control view.
6. Stage and commit the authorised checkpoint, or record the existing latest commit if nothing changed.
7. If pushing is authorised, push to the named branch and confirm the commit on GitHub. Otherwise record that it stays local.
8. Record any remaining issues.

## 10. Expected submission

Submit:

- The commands you ran.
- The startup result.
- Evidence of the local page, such as a screenshot.
- The files you reviewed, with a screenshot of the Staged Changes list before you committed.
- The checkpoint commit identifier, where one was made.
- Whether the commit was pushed and, if so, the branch name and evidence that it appears on GitHub.

Do not include passwords, tokens or other secrets.

## 11. Completion criteria

The lesson is complete when:

- The starter project runs as documented.
- Existing work has been preserved.
- The new checkpoint, or the unchanged starting version, is accurately recorded.
- Nothing was pushed without authorisation, and any push went to the named branch.

## 12. Knowledge check

1. Why should you use the exact address printed by the development command?
2. What does staging mean in Git?
3. How does the Source Control view mark a new, untracked file, and why must you read it in full before staging it?
4. How does a commit on your computer differ from a push?
5. What should you do when there is nothing appropriate to commit?

## 13. Official references

- [Git status](https://git-scm.com/docs/git-status)
- [Git add](https://git-scm.com/docs/git-add)
- [Git commit](https://git-scm.com/docs/git-commit)

Checked 13 November 2026 by the uploading author for the Git command roles used here.

- [Source control in VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview) and [Working with repositories and remotes](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes), checked 15 November 2026 for staging, committing and pushing in VS Code.

---

# Lesson 2.1: Understanding the Business, Audience and Industry

### Learning objective

By the end of this lesson, you should be able to:

- Pick out the relevant business facts from a supplied brief.
- Describe who the website is for and what those visitors need.
- Connect the website’s goals to outcomes someone can check.
- Identify questions specific to the industry without inventing answers.
- Prepare a short brief for review.

**Prerequisites:** Complete Unit 1.

**Required materials:** The supplied Saffron Wellness Clinic brief, authorised business information and any industry requirements that apply.

## 1. Read the supplied business context

A **brief** is the document that describes what a project should achieve. Before deciding what pages to build, establish what the website is for.

Record:

| Area | Questions |
|---|---|
| **Business** | What does it provide, and where does it operate? |
| **Audience** | Who needs the website, and why? |
| **Offering** | Which treatments, services or products are in scope? |
| **Goal** | What useful outcome should the website support? |
| **Constraints** | Which limits apply to content, design, technology or operations? |
| **Authority** | Who supplies information, and who approves decisions? |

Use the supplied sources. Saffron Wellness Clinic is the practice context. That does not give you permission to invent its treatments, locations or qualifications.

## 2. Separate facts, assumptions and decisions

Label each piece of information by the evidence behind it.

| Label | Meaning |
|---|---|
| **Supplied fact** | Stated by an identified source |
| **Assumption** | A working interpretation that has not been confirmed |
| **Open question** | Information you need before you can continue |
| **Approved decision** | A choice the responsible reviewer has accepted |

A believable description of the audience is still an assumption if the brief does not say it.

Record the source and version of important facts. If the business has an existing website, do not treat it as correct when it conflicts with the current brief. Old websites are often out of date.

## 3. Describe visitor needs

Start with what visitors need to understand or do, rather than with pages.

For example, a visitor might need to compare available treatments, or find a branch. These are illustrations, not approved project requirements.

A useful **visitor need statement** follows this pattern:

> A visitor needs [information or action] so that they can [meaningful outcome].

The second half matters. It explains why the need exists, which helps you judge later whether a page actually meets it.

Avoid inventing details about visitors, such as age, job or the device they use. Record these only when they are relevant and supported by a source.

## 4. Connect goals to website behaviour

Business goals are often broad. Turn each one into a website outcome that someone can check.

| Broad goal | Website outcome you can check |
|---|---|
| Explain the offering | Visitors can find the approved treatment information |
| Support contact | Visitors can reach the confirmed contact method |
| Help people visit | Visitors can find accurate location information |

Never promise more visitors, more sales or more appointments just because a page is built. The website’s behaviour can be checked before launch. Business results can only be measured after launch, and depend on much more than the website.

## 5. Identify industry requirements

Some industries need extra information, evidence or review before content can be published. Consider only what applies to this business:

- Whether claims need approval from a specialist.
- Whether prices, availability or terms need confirming.
- Whether the website collects personal information.
- Whether professional qualifications or regulated wording appear.
- Whether a booking, purchase or delivery process is in scope.

For health-related treatments in particular, advertising rules may limit what can be claimed. For each requirement, record who is responsible for reviewing it and which source they need.

Do not write legal or clinical conclusions from general knowledge. **This lesson identifies requirements. It does not approve anything as compliant.**

## 6. Ask Claude to analyse the brief

```text
Review the supplied Saffron Wellness Clinic business brief.

Return:
1. Business facts with source locations.
2. Intended audiences and visitor needs supported by the brief.
3. Website goals and observable outcomes.
4. Scope and constraints.
5. Relevant industry questions requiring confirmation.
6. Assumptions, conflicts and missing decisions separately.

Do not invent services, locations, credentials, claims or approval.
Do not conduct broad competitor research or implement anything yet.

Sources:
[Insert the actual brief and relevant approved documents.]
```

Check Claude’s interpretation against the sources before using it in planning. If Claude states something as a fact, find where the brief says it.

## 7. Practical exercise

**Task: Prepare a one-page business and audience brief.**

1. Read the supplied material.
2. Record the business facts, with where each comes from.
3. Write visitor need statements that the sources support.
4. Connect each website goal to an outcome someone can check.
5. Record the scope and constraints.
6. List the decisions needed before research and planning the page structure.
7. Review Claude’s analysis and correct any unsupported assumptions.

If the practice brief is missing, record the missing dependency. Do not make up a business to complete the exercise.

## 8. Expected submission

Submit:

- Your one-page brief.
- Your table of facts, assumptions, open questions and decisions.
- The mapping from goals to outcomes.
- Unresolved questions.

## 9. Completion criteria

The lesson is complete when:

- The brief reflects the supplied evidence.
- Visitor needs are clear and supported.
- Missing decisions remain visible for review.

## 10. Knowledge check

1. How does a supplied fact differ from an assumption?
2. Why should a visitor need statement describe an outcome?
3. Does building a contact page guarantee more enquiries?
4. Why might an industry need extra review?
5. What should you do if the practice brief is unavailable?


---

# Lesson 2.2: Researching Relevant References and Sources Efficiently

### Learning objective

By the end of this lesson, you should be able to:

- Define a specific research question before searching.
- Choose sources that can actually answer that question.
- Evaluate evidence without copying another website’s content or structure.
- Limit research to what the current decision needs.
- Keep a short research record that others can trace.

**Prerequisites:** Complete Lesson 2.1.

**Required materials:** The reviewed business brief, its open questions, a browser or other research tools, and the supplied references.

## 1. Research to answer a decision

Start with a question, not an instruction to find out everything about an industry. Open-ended research takes hours and rarely changes a decision.

| Research need | Focused question |
|---|---|
| Page organisation | How do relevant examples help visitors compare the same kind of offering? |
| Interaction | Which states does the required interaction need? |
| Technical implementation | What does the official documentation say about the chosen tool? |
| Content accuracy | Which authorised source supports this statement about the business? |

If the approved design already decides a layout, do not browse for alternatives just because more examples exist.

## 2. Check existing material first

Before searching the web, check the brief, the approved references and decisions already made. They may already answer the question.

**External research should fill a gap. It must never quietly replace an approved requirement.**

If sources conflict, record the conflict. Do not simply pick whichever answer is easiest to build.

## 3. Choose relevant sources

| Source type | Good for | Limitation |
|---|---|---|
| Approved business material | Facts and decisions about the project | May contain unresolved or out-of-date information |
| **Official documentation**, published by the maker of a tool | How a tool currently behaves | Must match the tool and version actually used |
| Comparable websites | Seeing patterns and getting ideas | Does not prove a pattern suits this business |
| Authoritative industry material | Specialist facts and requirements | May need interpreting by the responsible reviewer |

Prefer a direct source over an unattributed summary. A search result snippet helps you find a source, but read the source itself before relying on it. Snippets can be out of date or taken out of context.

## 4. Set a research boundary

For each question, define:

1. The decision the research supports.
2. The sources likely to answer it.
3. The output you need.
4. A **stopping condition**: the point at which you have enough.

A stopping condition might be: “The required behaviour is confirmed by the official documentation, and any remaining uncertainty is recorded.”

Collecting a fixed number of sources does not prove quality. If two relevant sources disagree, reading ten unrelated pages will not settle the disagreement. Record the conflict and ask who should decide.

## 5. Take patterns, not content

When you look at another website, keep what you saw separate from what you recommend.

| What you saw | What it might mean | What you propose |
|---|---|---|
| A listing groups items by visitor need | Grouping may make browsing easier | Consider this grouping only if it fits the approved offering |

Never copy another website’s claims, photographs, treatment descriptions or full page structure into the Saffron Wellness Clinic website. Copying can infringe someone else’s rights, and their content describes their business, not this one.

The project still needs its own approved structure and content.

## 6. Keep a small evidence record

| Question | Source and date | What it shows | What it means for the decision | Remaining uncertainty |
|---|---|---|---|---|
| | | | | |

Record only what helps the task. A short finding with its source is more useful than pages of pasted text.

Never claim to have read a page you could not open. Record it as inaccessible instead.

## 7. Direct Claude’s research

```text
Research only the following decision for the supplied project.

Question:
[Insert one specific question.]

Existing references:
[Insert relevant brief, approved material and prior findings.]

Use the most direct relevant sources. Prefer official documentation
for tool behaviour and authorised sources for business facts.

Return a concise table with source, observation, implication and
remaining uncertainty. Separate facts from recommendations.
Stop when the decision is sufficiently supported or a clear gap remains.

Do not browse unrelated industries, copy competitor content,
redesign approved work or implement anything.
```

Check that each result actually answers the question you asked, and open the sources Claude cites.

## 8. Practical exercise

**Task: Resolve one research question from the brief.**

1. Choose a real open question from Lesson 2.1.
2. Check the existing project references.
3. If needed, define a bounded external search, including its stopping condition.
4. Read the relevant sources.
5. Record the evidence and its limits.
6. Write what it means for the decision, without claiming approval.
7. Explain why further research is or is not needed.

If existing approved material already answers the question, record that, rather than searching unnecessarily.

## 9. Expected submission

Submit:

- The question.
- The search boundary and stopping condition.
- The evidence table.
- Your recommendation.
- Remaining uncertainty.

## 10. Completion criteria

The lesson is complete when:

- Sources are relevant and have actually been read.
- The findings support the decision.
- The research stopped at a justified point.

## 11. Knowledge check

1. Why should research start from a decision?
2. When can supplied material make a web search unnecessary?
3. Why is a pattern on a competitor’s website not automatically a requirement?
4. What should you do when two relevant sources conflict?
5. What makes a useful stopping condition?


---

# Lesson 2.3: Planning the Sitemap, User Journeys and Page Sections

### Learning objective

By the end of this lesson, you should be able to:

- Explain the difference between a sitemap, navigation, a visitor journey and a page outline.
- Connect approved business needs to proposed pages.
- Define page addresses and how pages relate, for review.
- Describe each page section by what it does for the visitor.
- Identify missing content and decisions before design or building begins.

**Prerequisites:** Complete Lessons 2.1 and 2.2.

**Required materials:** The reviewed brief, research findings, scope and any supplied page structure or visitor flows.

## 1. Understand the planning documents

These four documents together make up the website’s **information architecture (IA)**: the plan of its pages, their names and how they connect. Later lessons refer to it as “the approved IA”.

| Document | Question it answers |
|---|---|
| **Sitemap** | Which pages exist, and how are they related? |
| **Navigation specification** | Which links appear in each menu or link area? |
| **Visitor journey** | Which steps does someone take to reach a goal? |
| **Page outline** | What content appears on one page, and in what order? |

In some projects the word “IA” refers mainly to the sitemap. Use the project’s own terms.

These documents connect, but they are not interchangeable. A footer link is not a separate page. A section of a page does not automatically need its own address. A journey may use only part of the sitemap.

## 2. Start from the approved scope

If an approved IA already exists, inspect and document it. Do not create a competing structure during this exercise.

If you are authorised to propose a structure, start from the visitor needs in the brief and work out which pages they require.

Every proposed page should have:

- A clear purpose.
- A reason it must be a separate page.
- Its expected content.
- An **entry point**, the link visitors use to reach it.
- A useful next step, where appropriate.

Do not add pages just because most websites seem to have them. Each page needs a real requirement behind it.

## 3. Prepare the page inventory

A **page inventory** lists every page with its key details.

| Page ID | Name | Purpose | Route | Parent or relationship | Required content | Status |
|---|---|---|---|---|---|---|
| | | | | | | |

A **route** is the address path for a page, such as `/treatments`.

Choose route names that are meaningful and consistent with the rest of the project. If approved routes already exist, do not rename them without identifying every affected link and getting a decision.

Where a route has not been decided, label it **Proposed**. Writing it in a neat table must not make it look confirmed.

## 4. Specify the navigation separately

Record the approved or proposed:

- Header link labels and their order.
- How the mobile menu behaves.
- Footer link groups and their destinations.
- Links in the body of pages, and related-content links.
- Where the logo leads.

Some pages are reached through a listing or a link in the text rather than the main menu. That is normal.

Do not put every page in the header to avoid deciding how pages relate. A crowded header makes every page harder to find.

## 5. Map the visitor journeys

Choose journeys the brief supports. For each one, record the visitor’s goal, where they start, the steps they take and where they should end up.

| Step | Page or state | Visitor action | Expected result |
|---|---|---|---|
| | | | |

Include the information the visitor needs before making a decision. Do not remove necessary explanation just to reduce the number of clicks.

If the final step uses an outside service, such as a booking system, record its destination and the dependency. Planning a journey does not authorise making a real booking or submission.

## 6. Outline the page sections

For each page, list its sections in order:

| Position | Section | Visitor question it answers | Required content and assets | Links or actions | Dependency |
|---|---|---|---|---|---|
| | | | | | |

Describing each section by the visitor’s question keeps the page focused on what visitors need, rather than on what looks familiar.

Use the supplied content and design constraints. If a design is already approved, keep its structure and record any gaps instead of rearranging it.

Note patterns that repeat across pages, such as a card used on several listings. They may later become reusable components, as Lesson 4.3 explains. Do not decide the technical architecture just because things look similar.

## 7. Check the connections

Trace one visitor need through the documents:

1. Its page in the inventory.
2. The link visitors use to reach it.
3. The information it must provide.
4. The next step it offers.
5. Any content or integration it depends on.

Look for two pages serving the same purpose, links whose destination is unclear and pages with no way to reach them.

## 8. Ask Claude to review the structure

```text
Review the supplied sitemap, navigation, visitor journeys and page outlines
against the business brief and authorised scope.

Identify unsupported pages, missing required content, duplicate purposes,
unclear labels, unreachable destinations and unresolved decisions.
Trace one visitor need through its page, entry point and next action.

Separate defects in the proposal from optional suggestions.
Do not invent approval, add business offerings or implement routes.

References:
[Insert exact brief, structure and content locations.]
```

Check each finding yourself before changing the plan.

## 9. Practical exercise

**Task: Prepare the practice website’s structure for review.**

1. Build or inspect the page inventory, as authorised.
2. Record each navigation area and its destinations.
3. Map the required visitor journeys.
4. Outline the selected pages.
5. Identify dependencies and inconsistencies.
6. Review Claude’s findings and correct the valid issues.

## 10. Expected submission

Submit:

- The page inventory.
- The navigation specification.
- The visitor journey maps.
- The page outlines.
- Open questions.

## 11. Completion criteria

The lesson is complete when:

- The planning documents agree with each other.
- Every proposed page has a supported purpose.
- Unresolved decisions are clearly labelled for review.

## 12. Knowledge check

1. How does a sitemap differ from the navigation?
2. Can a page exist without appearing in the header menu?
3. What makes a page section useful to a visitor?
4. Why should proposed routes be labelled as proposed?
5. What should you check at the end of a visitor journey?


---

# Lesson 2.4: Submit the Website Brief and Structure for Review

### Learning objective

By the end of this lesson, you should be able to:

- Check that the brief and the structure describe the same website.
- Trace visitor needs through to pages and journeys.
- Submit focused questions about unresolved decisions.
- Prepare a review package in which every document version is identified.
- Record exactly what the supervisor accepts.

**Prerequisites:** Complete Lessons 2.1 to 2.3.

**Required materials:** The business brief, research record, sitemap, navigation specification, visitor journeys, page outlines and a register of dependencies.

## 1. Check that the documents agree

The brief defines the website’s purpose and scope. The structure explains how the website will meet them. Each document can look complete on its own and still contradict another.

Check each connection:

| Connection | Review question |
|---|---|
| Business goal → visitor need | Does the brief support this link? |
| Visitor need → page | Does the page provide the information the visitor needs? |
| Page → navigation | Is there a defined way to reach the page? |
| Journey → destination | Is the final step clear and within scope? |
| Section → content | Is its content available, or recorded as missing? |

Do not treat a set of polished documents as a consistent plan until you have checked these connections.

## 2. Classify your findings

Record each finding:

| ID | Evidence | Document affected | Issue | Work affected | Proposed action |
|---|---|---|---|---|---|
| | | | | | |

Then decide what kind of finding it is:

- A **contradiction** between documents that needs correcting.
- An **open question** that needs a decision.
- A **missing resource** that blocks particular work.
- An **optional suggestion**.

Be precise about what each one affects. A missing final photograph affects whether one section looks finished. An undefined main call to action may affect a whole visitor journey. Do not declare the entire project blocked when only part of it is.

## 3. Make decisions easy to review

For each important open question, provide:

1. The specific decision needed.
2. The relevant evidence.
3. The available options, where they are known.
4. Your recommendation and the reason for it.
5. The work affected by the decision.

A supervisor can answer a focused question in minutes. Do not hide questions inside long paragraphs, or ask the supervisor to repeat information they have already supplied.

Fix routine wording and formatting problems yourself, where you are authorised to. Escalate decisions that would change the scope, who approves content or how visitors move through the website.

## 4. Ask Claude for an independent review

```text
Review this website planning package without editing it.

Compare the brief, research findings, sitemap, navigation,
visitor journeys, page outlines and dependency record.

Return:
1. Sources actually inspected.
2. Checks passed.
3. Contradictions or gaps with evidence and affected scope.
4. One visitor-need-to-page-and-journey trace.
5. Questions requiring a decision.
6. A readiness recommendation for a clearly defined next stage.

Do not invent missing content, claim approval, implement the website,
install dependencies or change the documents.

References:
[Insert actual source locations and versions.]
```

Check Claude’s findings before making any corrections.

**Claude’s readiness recommendation is not the supervisor’s decision.** It is evidence to help the supervisor decide.

## 5. Prepare the submission

Include the exact versions of the documents under review.

| Item | Required information |
|---|---|
| Brief | Business, audience, goals, scope and constraints |
| Research | Relevant findings and the limits of the sources |
| Structure | Sitemap, navigation and routes |
| Journeys | The required steps and destinations |
| Page outlines | Sections, content and dependencies |
| Findings | Resolved and unresolved issues |
| Requested decision | What you are asking the supervisor to accept so work can continue |

The supervisor should not have to reconstruct your planning from scattered chat messages. Everything they need to decide should be in the package.

## 6. Record the review decision

Leave the decision as **Awaiting review** until the supervisor responds. Then record:

- The reviewer.
- The date, if known.
- The document versions accepted.
- The work permitted to proceed.
- Required corrections.
- Outstanding dependencies.

If only part of the package is accepted, state where the boundary lies.

Approving the structure does not mean any page has been built, or that design decisions are complete.

Never assume that silence means approval.

## 7. Apply review feedback

For each requested change:

1. Identify which document is responsible.
2. Make the authorised change.
3. Check the related planning documents.
4. Update the version number or change record.
5. Resubmit the affected parts, where required.

Changes ripple. A route change can affect the navigation and the journeys. A scope change can affect several page outlines. Recheck those connections rather than updating only one table.

## 8. Practical exercise

**Task: Submit the Saffron Wellness Clinic brief and structure for review.**

1. Complete the checks across the documents.
2. Trace one visitor need through to a page and journey.
3. Combine your findings and decision questions.
4. Get Claude’s review and assess it.
5. Correct verified issues that are within your authority.
6. Prepare the submission.
7. Record the supervisor’s decision when it arrives.

## 9. Expected submission

Submit:

- The planning package.
- Your review checklist.
- Your findings.
- Your decision questions.
- Claude’s review and your assessment of it.
- The approval record, once available.

## 10. Completion criteria

The lesson is complete when:

- The package is consistent.
- Limitations are visible.
- The supervisor has accurately recorded what may proceed.

A pending decision stays pending until the supervisor makes it.

## 11. Knowledge check

1. Why must each document version be identifiable?
2. How does a readiness recommendation differ from approval?
3. Can one missing resource block only part of the work?
4. Why should a route correction be checked against the navigation?
5. What does approving the structure fail to prove about the build?


---

# Lesson 3.1: Following the Approved Design, Style Guide and Content

### Learning objective

By the end of this lesson, you should be able to:

- Identify the approved design, style and content references for the project.
- Explain what each reference decides, and what it leaves open.
- Turn impressions of a design into requirements another person can check.
- Record conflicts and missing states without redesigning the website.
- Prepare a reference baseline that Claude can work from.

**Prerequisites:** Complete Unit 2 and have its review decision recorded.

**Required materials:** The supplied design frames, style guide, approved content, IA and any interaction specifications.

## 1. Identify what each source decides

Unit 2 produced the plan for the website. Unit 3 prepares the instructions for building it. Before writing those instructions, you need to know which approved sources describe the finished website, and what each one is responsible for.

| Source | What it usually decides |
|---|---|
| **IA and visitor journeys** | The pages, the navigation and how pages connect |
| **Design** | Layout, grouping and visual presentation |
| **Style guide** | Repeated visual values, such as colours and type sizes, and the rules for shared components |
| **Approved content** | The exact wording and the factual information |
| **Interaction specification** | Controls, their states and how they should behave |

A **design frame** is one screen or state drawn in a design tool, such as the homepage at desktop width. A **style guide** is a document that records the visual rules repeated across the website.

The actual project may organise these sources differently. Record what each supplied source covers instead of assuming that every requirement lives in one design file.

A screenshot alone may not tell you where a link goes, how a control behaves with a keyboard, or what an error message says. Those decisions must come from somewhere else, or be recorded as missing.

## 2. Build a reference register

A **reference register** lists every source you will rely on, so that you and the supervisor can confirm you are working from the right versions.

| Source | Exact location | Version or date | Approval evidence | What it applies to | Accessible? |
|---|---|---|---|---|---|
| | | | | | |

A file name containing “final” is not evidence of approval on its own. Look for a recorded decision, such as the supervisor’s acceptance from Lesson 2.4 or a note from the person who approves designs.

If you cannot open a supplied link, record the source as missing. Do not ask Claude to recreate the approved design from a description.

Use the most recent approved version that applies. Where you know which earlier version it replaces, record that too.

## 3. Turn impressions into requirements

A description such as “the page feels spacious” is an impression. Nobody can check whether code meets it. Replace impressions with requirements another person can check against the reference.

| Impression | Requirement to extract |
|---|---|
| The page feels spacious | The actual content width and the spacing between sections |
| Headings feel editorial | The approved font, weight, size and heading hierarchy |
| Cards feel consistent | Shared dimensions, padding, background and link behaviour |
| Mobile should be simpler | The specified stacking, order and navigation on narrow screens |

Use the actual values where the sources supply them. If a source does not give a value, label it as a gap. Do not invent a precise number to make the requirement look complete.

Do not work out a complete responsive layout from a single desktop frame. If the narrow-screen arrangement is not supplied, record that as a missing reference.

## 4. Preserve approved copy and assets

**Copy** means the written text on the website. Building the website should not quietly rewrite headings, treatment names, labels or claims.

If approved copy appears to contain a mistake, record the proposed correction and follow the project’s rules about who can approve wording changes. Lesson 5.2 covers this in more detail.

For images, confirm the selected file, where it appears, how it is cropped and which part of the picture must stay visible. A similar-looking image is not an approved replacement.

Record any placeholders the project permits, and any materials that are still missing, so that nobody mistakes them for final content.

## 5. Resolve conflicts where they occur

Sources sometimes disagree. For example, a design may show a navigation label that differs from the label in the approved IA.

When this happens:

1. Record both sources and where they disagree.
2. Ask which requirement applies to this case.
3. Continue with work that the conflict does not affect.

Do not adopt a fixed rule such as “the design always wins” or “the text always wins”. The right answer depends on which decision each source is responsible for.

Routine implementation choices can follow established conventions when they do not change an approved decision. Not every small detail needs a supervisor’s ruling.

## 6. Ask Claude to extract the requirements

Ask Claude to read the references and list what they require. Keep this request separate from any building work.

```text
Inspect the approved references for the selected page or component.

Identify:
- The design and source versions that apply.
- Structure, content and navigation requirements.
- Shared visual values and component rules.
- Required responsive and interaction states.
- Missing assets, inaccessible sources or conflicting requirements.

Cite the specific source for each finding.
Separate values the sources supply from assumptions.
Do not redesign, rewrite content or implement anything.

Scope and references:
[Insert the actual component and source locations.]
```

Check the extracted requirements against the references yourself before they become instructions for building. Claude may misread a value or fill a gap with a guess.

## 7. Practical exercise

**Task: Prepare a reference baseline for one selected component.**

1. Identify its design, style, content and interaction sources.
2. Record the approval and version information in the reference register.
3. Extract requirements that another person could check.
4. Check which desktop and narrow-screen states are supplied.
5. Record conflicts and dependencies.
6. Ask Claude to extract the requirements, then compare its list with the references.

If a required source is missing, record what cannot yet be specified. Do not fill the gap yourself.

## 8. Expected submission

Submit:

- The reference register.
- The extracted requirements, each with its source location.
- Claude’s extraction and your corrections, if any.
- Unresolved conflicts and decisions.

## 9. Completion criteria

The lesson is complete when:

- The reference baseline can be identified by location and version.
- Each requirement can be traced to a source.
- Assumptions and missing references remain visible.

## 10. Knowledge check

1. What can an IA establish that a screenshot may not?
2. Why is “final” in a file name not enough evidence of approval?
3. How should you handle a suspected mistake in approved copy?
4. Why should mobile behaviour not be worked out from one desktop frame?
5. What should happen when two approved sources conflict?


---

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


---

# Lesson 3.3: Preparing the PRD, Architecture, Rules and Task Plan

### Learning objective

By the end of this lesson, you should be able to:

- Draft four instruction documents, each with a distinct purpose.
- Describe the architecture using evidence from the starter project.
- Turn one requirement into a bounded task with matching checks.
- Connect the approved sources, requirements, implementation approach and task plan.
- Record missing information without inventing decisions.

**Prerequisites:** Complete Lessons 3.1 and 3.2. Have the reviewed brief and website structure from Unit 2, and the starter inspection from Lesson 1.3 available.

**Required materials:** The reference register, document map, approved IA, design and content references, starter project, and any existing instruction documents. Blank document skeletons and task/dependency templates are included in this lesson.

**Your output:** Four draft instruction documents, one completed requirement-to-verification trace and a dependency record. Implementation readiness is reviewed in Lesson 3.4.

## 1. Understand the four documents

Before opening Claude, identify which question each document answers.

| Document | Main question | What belongs here |
|---|---|---|
| Product requirements, or PRD | What must the website achieve? | Audience, scope, pages, journeys, behaviour and acceptance |
| Architecture | How does the project support those requirements? | Inspected framework, routes, components, styles, content and integrations |
| Working rules | How should changes be made? | Project conventions, boundaries, verification and reporting |
| Task plan | What work should happen next? | Bounded outcomes, dependencies, acceptance criteria, checks and progress |

Use the project's actual filenames. In this lesson, `PRD.md`, `Architecture.md`, `Rules.md` and `Task.md` are examples.

**Give each decision one main home, then link to it from the other documents.** Copying the full navigation specification into all four files creates four places that can become inconsistent.

### Terms you will use

| Term | Meaning | Example |
|---|---|---|
| Functional requirement | Something the website must do | Open a navigation panel |
| Non-functional requirement | A quality or constraint on the website | Remain usable at the agreed review widths |
| Dependency | Something that must be ready first | A confirmed destination for a link |
| Acceptance criterion | A condition the completed task must satisfy | The specified close control closes the panel |
| Verification | How you check that condition | Open the panel, activate the close control and observe the result |
| Trace | A connection from a requirement to its sources, task and checks | REQ-NAV-01 → source → TASK-NAV-01 → recorded checks |

A screenshot can help verify appearance. It cannot, by itself, prove that an interactive control works.

## 2. Prepare the sources before drafting

Use your reference register and document map to confirm:

1. The actual document filenames and locations.
2. Which documents already exist.
3. The approved reference versions for the selected scope.
4. What the starter inspection established.
5. Which relevant decisions remain unresolved.

Do not overwrite existing documents simply to match the example filenames.

Use a small source table:

| Source | Actual location and version | What it establishes | Approval or availability gap |
|---|---|---|---|
| Business brief | [Fill in] | Purpose, audience and scope | [Fill in] |
| IA and journeys | [Fill in] | Pages, labels and destinations | [Fill in] |
| Design and interaction references | [Fill in] | Layout, responsive states and behaviour | [Fill in] |
| Approved copy and assets | [Fill in] | Wording and selected files | [Fill in] |
| Starter inspection | [Fill in] | Existing implementation and commands | [Fill in] |

If a required source is missing, record the affected scope. Continue independent drafting that the available evidence supports.

## 3. Draft the PRD

The PRD describes the intended website and its required outcomes. Keep code-level implementation decisions in the architecture document.

Start with this skeleton, adapting it to the existing project:

```markdown
# Product requirements

Status: Draft for review

## Purpose and audience
[Business purpose and supported visitor needs.]

## Scope
[Included pages, journeys and features.]

## Out of scope
[Explicit exclusions.]

## Requirements
[Requirement ID, intended behaviour, supporting source and acceptance.]

## Quality requirements
[Applicable accessibility, responsive, browser and performance requirements.]

## Content, assets and dependencies
[Required materials; link to unresolved items in the dependency record.]

## Acceptance
[How the agreed scope will be reviewed and who records the decision.]
```

Use specific, checkable requirements. Replace “navigation should be good” with the behaviour established by the approved interaction specification.

Do not invent numerical performance targets, accessibility commitments or browser coverage. Record the applicable requirement or the decision needed.

### Worked example: one navigation requirement

**Everything in this worked example is illustrative.** Suppose a supplied interaction specification requires the mobile panel to open from a button, close through its close button or Escape, and display the approved navigation links. This does not establish those requirements for your starter.

A PRD entry could read:

```markdown
### REQ-NAV-01 Mobile navigation

Outcome: Visitors can open the mobile navigation, follow its approved
links and close the panel using the specified controls.

Sources: [Actual navigation specification and version];
[actual mobile interaction reference and version].

Required behaviour:
- The trigger opens the panel.
- The close button and Escape close the panel.
- Labels, order and destinations match the navigation specification.
- Keyboard and focus behaviour follow the interaction specification.

Acceptance: Required behaviour and presentation are verified at the
agreed layouts. See TASK-NAV-01 for checks and evidence.
```

In your project, replace this example with an actual supported requirement. Do not add Escape or another behaviour simply because the example includes it.

## 4. Describe the architecture from evidence

Architecture should distinguish **observed** implementation from **proposed** changes.

Record enough detail to guide work without describing every file in the repository.

```markdown
# Architecture

Status: Draft for review

## Observed starter
[Framework and version evidence; relevant source locations.]

## Routes and shared layout
[Existing routing convention, header, footer and page organisation.]

## Components and styling
[Reuse approach, styling method and approved shared values.]

## Content and assets
[Actual storage and loading approach.]

## Integrations and configuration
[Confirmed services, boundaries and required setting names, without secrets.]

## Development and verification commands
[Actual commands and where they are documented.]

## Proposed changes and unresolved decisions
[Clearly separated from what already exists.]
```

For version information, distinguish a declared dependency range from an exact resolved version. Record the evidence you actually inspected.

### Continue the navigation example

Suppose inspection confirms that a shared header exists but lacks the required mobile panel. Record that as an observation only if it is true in the inspected project.

```markdown
### Navigation implementation

Requirement: REQ-NAV-01.

Observed:
- A shared header is rendered by the site layout.
- Its current implementation does not include the required mobile panel.
- Existing shared control styles are available.

Evidence: [Actual header, layout and style paths inspected].

Proposed:
- Extend the existing header for the specified mobile behaviour.
- Reuse the established styling and routing approach.
- Preserve the approved desktop navigation.

Unresolved: [List actual gaps, or state that none were identified.]
```

Do not invent component paths or choose a new navigation library to complete this section.

## 5. Write the working rules

Working rules describe how to carry out changes within the project's agreed process.

```markdown
# Working rules

Status: Draft for review

## References and scope
[How to select applicable approved sources and the current task.]

## Existing work
[How to inspect and preserve relevant working changes.]

## Implementation conventions
[Actual TypeScript, TSX, component and styling conventions.]

## Content and assets
[Use approved materials; identify editorial or asset decisions.]

## Uncertainty and scope changes
[What can follow conventions and what needs clarification.]

## Verification and reporting
[Applicable checks; evidence and limitations to report.]

## Repository and external actions
[Existing authority for commits, pushes, deployments and other side effects.]
```

Describe decisions that need review without demanding repeated approval for routine, reversible choices already within the task.

### Continue the navigation example

```markdown
### Navigation changes

- Follow the sources linked by REQ-NAV-01.
- Preserve approved labels, order and destinations.
- Reuse the existing header, routing and styling conventions.
- Check affected desktop and mobile behaviour after shared changes.
- Record missing decisions; do not substitute invented destinations.
```

These rules reference the requirement instead of duplicating its entire specification.

## 6. Build the task plan

A task should deliver a meaningful result that can be checked separately.

Avoid treating the whole website as one implementation task. Also avoid limits such as “change only one file” before you understand the necessary supporting changes.

### Editable task template

Use this in `Task.md`, or follow the project's existing equivalent:

```markdown
## [Task ID]: [Title]

Status: Not started

Requirement and sources: [IDs, exact locations and versions.]
Outcome: [What should be true afterwards.]
Current state: [Relevant inspected behaviour and evidence.]
Scope: [Included work.]
Boundaries: [What must be preserved or handled separately.]
Dependencies: [Prerequisites and their actual status.]

### Acceptance and verification

| ID | Acceptance criterion | Verification method | Result/evidence |
|---|---|---|---|
| AC-01 | [Condition] | [Matching check and conditions] | Not checked |

### Reporting
[Changed files, check results, affected usages and remaining issues.]
```

An approved task remains **Not started** until implementation begins. Approval and progress are different records.

### Continue the navigation example

```markdown
## TASK-NAV-01: Implement the specified mobile navigation

Status: Not started

Requirement and sources: REQ-NAV-01 and its linked references.
Outcome: Visitors can use the specified mobile navigation.
Current state: Shared header exists; required panel is absent.
Evidence: [Actual inspected paths.]

Scope: Panel layout, controls, approved links and specified
keyboard/focus behaviour within the existing header.

Boundaries: Preserve desktop navigation, approved wording and
unrelated page behaviour. Follow existing project conventions.

Dependencies: Confirm availability of labels, destinations,
interaction states and review widths before the affected work.

### Acceptance and verification

| ID | Acceptance criterion | Verification method | Result/evidence |
|---|---|---|---|
| AC-01 | Trigger opens the panel | Activate the trigger at the specified mobile layout | Not checked |
| AC-02 | Specified controls close the panel | Open it, then test the close button and Escape separately | Not checked |
| AC-03 | Links match the specification | Compare labels/order and follow each confirmed destination | Not checked |
| AC-04 | Keyboard/focus behaviour matches the reference | Perform its specified keyboard sequence and inspect focus | Not checked |
| AC-05 | Presentation follows the approved reference | Compare required states at agreed review widths | Not checked |
| AC-06 | Desktop navigation remains usable | Repeat affected desktop navigation checks | Not checked |

### Reporting
Record changed files, criterion results, applicable project checks,
affected usages and outstanding limitations.
```

This is a planning example, not a claim that any check passed.

The broader task plan should order tasks by real dependencies. Do not assume build order must match the page's display order.

## 7. Trace the requirement across the pack

Check that another person can follow the same requirement without guessing.

| Link | Worked-example entry | What to confirm in your project |
|---|---|---|
| Approved source | Navigation and interaction references | Actual versions are accessible and applicable |
| PRD | REQ-NAV-01 | Required outcome is supported by those sources |
| Architecture | Navigation implementation | Existing state has file evidence; proposal is labelled |
| Rules | Navigation changes | Relevant conventions and preservation boundaries are clear |
| Task plan | TASK-NAV-01 | Outcome and prerequisites match the requirement |
| Verification | AC-01–AC-06 | Each criterion has a suitable check and evidence field |

A trace helps expose missing decisions. It does not prove implementation is complete.

Make sure the project's entry instructions or task prompt reference these documents. Do not assume Claude will inspect every Markdown file merely because it exists.

## 8. Record dependencies and unresolved decisions

Use the existing content and dependency register if supplied. Otherwise, use this table:

| ID | Missing item or decision | Affected requirement/task | Work that can proceed | Next action or responsible person, if known | Status |
|---|---|---|---|---|---|
| [ID] | [Specific gap] | [Actual IDs] | [Independent scope] | [Required action] | [Actual status] |

For example, an unconfirmed navigation destination blocks verifying that link. It may not block drafting the other documents or implementing an independently specified part of the interface.

Do not invent an owner, deadline, URL, price, recipient or service to fill an empty field. Use “Not confirmed” where appropriate.

Keep a document in draft until the relevant review decision is recorded.

## 9. Guided walkthrough: draft one connected slice first

Before asking Claude for four complete documents:

1. **Select one actual requirement.** Choose a small piece of approved behaviour with accessible references.
2. **Write its PRD entry.** State the outcome, source and required behaviour.
3. **Write its architecture note.** Describe what exists, cite inspected paths and separate the proposal.
4. **Add the relevant working rules.** Reuse existing conventions rather than inventing a new process.
5. **Write one task.** Include scope, prerequisites, criteria and matching checks.
6. **Complete the trace.** Check the IDs, sources and outcome agree across the documents.
7. **Record gaps.** Identify which part each gap affects.

Review this small slice before expanding the remaining pack. Correcting one misunderstood requirement is easier than correcting four documents built around it.

## 10. Ask Claude to help draft the pack

Use the prompt below after replacing its reference fields.

```text
Help prepare the PRD, architecture, working rules and task plan
for the supplied practice website.

Goal:
Produce connected draft instructions grounded in the approved
references and the actual starter. This is documentation work.

Before editing:
- Confirm the project location, relevant existing documents and Git state.
- Identify applicable source versions and existing work to preserve.
- Inspect only the files needed for the selected requirement and its
  necessary dependencies.
- Report any source or document-location conflict before overwriting work.

First draft one connected slice:
1. One supported PRD requirement with an ID.
2. An architecture note with observed evidence and a separate proposal.
3. Relevant working rules.
4. One bounded task with dependencies and criterion-to-check mapping.
5. A requirement-to-verification trace and actual unresolved gaps.

Keep the documents Draft for review. Stop after this slice and report it
for my review before expanding the remaining documentation.

Use established project conventions for routine choices.
Do not invent business facts, commands, routes, services or approvals.
Do not implement the website, install packages, commit, push or deploy.

Report sources inspected, document edits made, assumptions or gaps,
and the checks performed on the documentation.

Actual document locations:
[Insert paths or explicitly authorised new locations.]

Approved references and versions:
[Insert exact sources.]

Selected requirement and drafting scope:
[Insert the supported requirement and permitted document edits.]
```

After the slice is reviewed, authorise expansion to the remaining agreed scope. Check each new entry against its sources rather than approving plausible wording on appearance alone.

## 11. Practical exercise

**Task: Prepare the four draft instruction documents for Saffron Wellness Clinic.**

1. Confirm actual filenames, existing content and reference versions.
2. Complete one connected slice using the guided walkthrough.
3. Review and correct that slice against its sources.
4. Expand the PRD to cover the agreed website scope.
5. Complete architecture from the starter evidence, keeping proposals separate.
6. Complete the relevant working rules.
7. Order bounded tasks by their dependencies.
8. Complete one final trace using actual IDs and references.
9. Record outstanding decisions and check the drafts for contradictions.

Do not implement the website during this exercise. The readiness review follows in Lesson 3.4.

If the brief, designs or starter are unavailable, submit the supported draft scope and the precise gaps. Do not substitute the worked example for real project evidence.

## 12. Expected submission

Submit:

- The four draft documents at their agreed locations.
- The reference register with applicable versions and source status.
- One completed requirement-to-verification trace.
- The content/dependency record, or an explicit statement that no gaps were identified.
- A short summary of existing documents changed, new documents created and remaining limitations.

Keep findings and evidence in the existing registers where possible. Avoid creating duplicate trackers for the same issue.

## 13. Completion criteria

Check each item before submitting for the Lesson 3.4 readiness review.

- [ ] All four documents exist at their agreed locations and have distinct responsibilities.
- [ ] Required sections are populated, or missing information is explicitly recorded.
- [ ] Requirements link to applicable approved references.
- [ ] Architecture statements cite inspected evidence and distinguish observed state from proposals.
- [ ] Commands are taken from the actual project documentation or scripts.
- [ ] Working rules reflect project conventions and meaningful authority boundaries.
- [ ] Tasks have bounded outcomes, requirement links, prerequisites and actual progress statuses.
- [ ] Each task's acceptance criteria have matching verification methods.
- [ ] The selected trace can be followed from source to requirement, task and check.
- [ ] Documents agree on scope, destinations and integration decisions, or conflicts are recorded.
- [ ] Unconfirmed decisions are labelled against the affected tasks.
- [ ] Documents remain drafts; no implementation, test result or approval has been invented.

An incomplete item should be reported with its affected scope. It is not a reason to disguise a missing decision as a completed requirement.

## 14. Knowledge check

1. A PRD says “Use a new navigation library.” Which document should assess that implementation choice, and what evidence is needed?
2. The starter contains a shared header, but its required mobile panel is absent. How should the architecture distinguish the observation from the proposal?
3. A task says “The mobile menu works.” Rewrite it as one acceptance criterion and a matching check.
4. A link destination is unconfirmed. What should be recorded, and what independent drafting may still proceed?
5. The supervisor approves the task plan. What remains unproven about implementation and verification?

---

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


---

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


---

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


---

# Lesson 4.3: Building Shared Styles, Navigation and Reusable Components

### Learning objective

By the end of this lesson, you should be able to:

- Implement a bounded task from an approved plan.
- Apply shared styles consistently.
- Recognise when part of the interface should become a reusable component.
- Build navigation using approved labels and destinations.
- Review the code changes and check the resulting behaviour.

**Prerequisites:** Complete Lesson 4.2 and have a task that is ready for implementation.

**Required materials:** The TypeScript and TSX starter project, the approved style guide, navigation specification, component references and your reviewed task plan.

## 1. Build the shared foundation

Shared styles and components keep a website consistent as more pages are added.

| Foundation | Examples | Why it matters |
|---|---|---|
| **Shared styles** | Colours, typography, spacing and content widths | Each visual rule is defined once and applied everywhere |
| **Navigation** | Header links, mobile menu and footer links | Connects pages and visitor journeys |
| **Reusable components** | Buttons, treatment cards and section headings | One piece of code serves many places, so a fix in one place fixes all of them |

A **component** is a reusable piece of the interface, written in TSX, such as a button or a card.

Build the foundation through manageable tasks. This lesson covers all three areas, but each request to Claude should still have a defined scope.

## 2. Follow the existing project approach

Before editing, use your inspection findings to confirm:

- Where shared styles are defined.
- How components receive their content.
- How the framework handles links between pages.
- Which components already exist.
- Which checks the project provides.

Then ask Claude to extend the approach the project already uses.

For example, if the project defines shared colours as CSS variables, new styles should reuse them. If the project already has a button component, check it before anyone creates another.

**Consistency comes from following the approved system, not from making elements look roughly similar.**

## 3. Apply shared style values

Shared values give each approved design decision a single implementation.

In CSS, a **custom property**, often called a CSS variable, stores a value under a name so it can be reused. Custom property names start with two hyphens:

```css
:root {
  --colour-brand: #354536;
  --colour-surface: #f5f2e9;
  --radius-card: 16px;
}
```

A component can then use those values with `var()`:

```css
.treatment-card {
  background-color: var(--colour-surface);
  border-radius: var(--radius-card);
}
```

These values are illustrative. Use the approved values and naming conventions in the actual project. The CSS property name `background-color` uses American spelling because that is how CSS is written. Your own variable names can follow the project’s convention.

### Check the effect of shared changes

Changing a shared value can change many components at once.

Before changing one, find out:

1. Where it is used.
2. Whether the requested change should apply everywhere.
3. Which pages will need checking afterwards.

If only one section needs a different background, changing the global surface colour is probably the wrong approach, because it would change every other section too.

## 4. Build reusable components around a real need

A reusable component combines a consistent structure with inputs that change each time it is used. In React and TSX, these inputs are called **props**, short for properties. TypeScript describes which props a component accepts.

### Illustrative example

```tsx
type TreatmentCardProps = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  headingLevel?: "h2" | "h3";
};

export function TreatmentCard({
  title,
  description,
  href,
  linkLabel,
  headingLevel = "h3",
}: TreatmentCardProps) {
  const Heading = headingLevel;

  return (
    <article className="treatment-card">
      <Heading>{title}</Heading>
      <p>{description}</p>
      <a href={href}>{linkLabel}</a>
    </article>
  );
}
```

Different treatment cards can reuse the same structure:

```tsx
<TreatmentCard
  title="[Approved treatment name]"
  description="[Approved treatment summary]"
  href="[Approved treatment route]"
  linkLabel="[Approved link label]"
/>
```

All the values in square brackets are placeholders. Use approved content and confirmed destinations from the actual project.

This example makes two choices you should understand:

| Choice | Why |
|---|---|
| The heading level is a prop | The correct level depends on where the card appears. On a page where cards sit under a section heading at level 2, card titles are usually level 3. Lesson 5.1 asks you to check heading levels across the assembled page |
| The link text is a prop from approved content | People using screen readers often list all the links on a page. If every card says “View treatment”, that list is hard to use. Link text that includes the treatment name, or a label that is otherwise clear, helps. If the approved design uses the same label on every card, record it for the accessibility review in Lesson 8.3 rather than changing the wording yourself |

The example uses a plain `<a>` element. Many frameworks provide their own link component for moving between pages. Use the project’s established link component where one exists.

### Avoid unnecessary flexibility

A component does not need options for every possible future design.

Start with the approved uses. Add a **variant**, which is an alternative version of the component, only when an approved requirement needs it. If all approved treatment cards share one layout, do not create five unused layout variants.

## 5. Build navigation from the approved structure

Navigation combines content, destinations, presentation and behaviour. Check all four.

| Area | What to implement |
|---|---|
| **Content** | The exact approved labels, in the approved order |
| **Destinations** | The correct pages, page sections or external addresses |
| **Presentation** | The approved desktop and mobile layouts |
| **Behaviour** | Menu controls, keyboard use and the specified focus handling |

Use the framework’s established link component where it applies.

Do not make unfinished navigation look complete by pointing every link at `#` or sending unrelated links to the homepage. Visitors would reach the wrong place, and reviewers would think the links work.

If a destination is not ready, use the interim treatment agreed for the task and record the limitation.

### Match the element to its purpose

- Use a **link** to take the visitor to another page or place.
- Use a **button** to perform an action on the current page, such as opening a menu.
- Keep labels meaningful.
- Follow the approved interaction specification.

Browsers and assistive technology treat links and buttons differently, so choosing the right one matters even when they look the same.

A menu that looks right still needs its behaviour checked.

## 6. Direct Claude to implement the selected task

Use the reviewed task and plan from Lesson 4.2.

### Implementation prompt

```text
Implement the selected task according to the reviewed plan
and approved project references.

Before editing:
- Confirm the project location and current Git status.
- Check for changes made since the inspection.
- Confirm that the task's prerequisites are satisfied.

During implementation:
- Follow the existing TypeScript, TSX and styling conventions.
- Reuse existing components and shared values where appropriate.
- Preserve approved wording, labels, destinations and layouts.
- Keep changes within the task and necessary supporting files.
- Pause if an unresolved decision materially affects the result.

After implementation:
- Run the applicable documented project checks.
- Review the changed files for unrelated edits.
- Report the changes, checks performed, results and limitations.
- Identify any browser checks still requiring my review.

Do not commit, push or deploy as part of this task.

Task and reviewed plan:
[Paste or reference the task.]

Approved references:
[Provide the exact references.]
```

If the project’s rules require an extra decision before a particular action, follow them.

## 7. Review the changes yourself

Claude’s completion report tells you what Claude believes it did. Check the actual changes yourself.

Run these at the terminal command prompt, in the project folder.

See which files changed:

```bash
git status --short
```

See the changes inside files Git already tracks:

```bash
git diff
```

`git diff` does not show the contents of new, untracked files. Open those files separately to read them.

If changes have been **staged**, which means selected for the next commit, view them with:

```bash
git diff --staged
```

You may also see this written as `git diff --cached`. Both do the same thing.

Ask Claude to explain any change you do not understand, in plain language.

Look for:

- Files unrelated to the task.
- Unexpected configuration or package changes.
- Approved wording that has been rewritten.
- Duplicated components.
- Temporary placeholders.
- Changes to shared styles that affect other pages.

## 8. Check the result in the browser

Start the website using its documented command, then check the result against each acceptance criterion.

| Area | Example check |
|---|---|
| Shared styles | Typography, colours and spacing match the approved values |
| Component reuse | Several instances show their own supplied content correctly |
| Content variation | Longer approved text fits without being cut off |
| Navigation | Labels and destinations match the IA |
| Interaction | Menu controls do what the specification says |
| Keyboard use | Links and controls can be reached and operated with the keyboard |
| Responsive layout | Components remain usable at the agreed widths |
| Existing behaviour | Desktop layouts and other shared usages still work |

Run the applicable project checks as well.

If you did not perform a check, record it as **Not checked**, with the reason. Never count it as passed.

## 9. Common mistakes

| Mistake | Correction |
|---|---|
| Creating a new button for every section | Check for and reuse the shared button |
| Hard-coding slightly different colours in several places | Use the project’s approved shared values |
| Changing a global style to fix one local issue | Limit the change to the intended scope |
| Adding many unused component variants | Build only the variants the approved designs need |
| Treating a menu that looks right as complete | Test the destinations and the interaction |
| Accepting Claude’s report without checking | Review the files and the browser result yourself |

## 10. Practical exercise

**Task: Implement and verify one shared component.**

Use your implementation-ready task from Lesson 4.2. For the treatment card task:

1. Confirm the approved references and current project state.
2. Ask Claude to implement the reviewed plan.
3. Read the resulting TSX and styles.
4. Display at least two instances using supplied content.
5. Check content, links, heading levels, appearance and narrow-screen behaviour.
6. Run the relevant project checks.
7. Record any remaining issues.

Then inspect the existing navigation and record whether it already meets its approved requirements. Create a separate follow-up task for any gaps, rather than expanding the component task.

## 11. Expected submission

Submit:

- The task ID and implementation prompt.
- A summary of the files changed and why.
- Screenshots at the agreed review widths.
- Each acceptance criterion marked **Passed**, **Failed** or **Not checked**.
- Project check results.
- Remaining issues and proposed follow-up tasks.

## 12. Completion criteria

The lesson is complete when:

- The component follows the approved task.
- The project’s existing conventions are used consistently.
- Approved content and destinations are preserved.
- Reuse works across the required instances.
- Relevant checks have been performed and recorded.
- Unrelated changes and unresolved issues are identified.
- The work is ready for the design comparison in Lesson 4.4.

## 13. Knowledge check

1. Why should a change to a shared style be checked everywhere it is used?
2. When should a component gain a new variant?
3. Why are placeholder link destinations such as `#` not good enough?
4. Does `git diff` show the contents of new, untracked files?
5. What should you record when you have not performed a check?


---

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


---

# Lesson 5.1: Building the Homepage Section by Section

### Learning objective

By the end of this lesson, you should be able to:

- Break an approved homepage into sections you can build one at a time.
- Build the sections in an order that respects what each one depends on.
- Reuse the shared foundation from Unit 4.
- Assemble the sections into the correct page structure.
- Check each section before moving on to the next.

**Prerequisites:** Complete Unit 4 and have an approved homepage design and outline.

**Required materials:** The starter project, approved homepage references, style guide, IA, the content and assets available so far, and the task plan.

## 1. Treat the homepage as one connected page

Building one section at a time makes the work easier to check. The finished result must still work as a single, coherent page.

Each section should:

- Meet a defined visitor need.
- Follow the approved order and layout.
- Use the shared visual system from Unit 4.
- Connect properly to the rest of the website.

This lesson covers the page structure and its approved sections. The next two lessons build on it:

| Lesson | Focus |
|---|---|
| 5.1 | Structure and sections |
| 5.2 | Checking and completing copy, images and calls to action |
| 5.3 | Refining the page across screen sizes |

Use supplied, approved material throughout. If temporary content is allowed, keep a clear record of it so it cannot be mistaken for final content.

## 2. Map the approved sections

Start with the homepage outline approved during planning, and turn it into an implementation map.

| Field | What to record |
|---|---|
| Section | Its approved name and position on the page |
| Purpose | The visitor question it answers |
| Reference | The exact design frame or document |
| Content and assets | The materials it needs, and whether they are available |
| Shared components | Existing elements to reuse |
| Dependencies | Decisions or resources needed first |
| Acceptance criteria | Observable conditions for completion |

For example, **only if the approved Saffron Wellness Clinic design contains these sections**:

| Section | Purpose | Possible reuse |
|---|---|---|
| Hero | Introduce the business and the main next step | Shared link or button styles |
| Treatment overview | Help visitors explore treatments | Treatment cards |
| First-visit introduction | Explain where to learn about a first visit | Shared section heading |
| Outlet overview | Help visitors find a location | Location presentation pattern |

A **hero** is the large introductory section at the top of a page.

Do not add these sections just because they appear in this example. Build only what the approved design includes.

## 3. Check what already exists

Before building, find out whether the homepage already has:

- A **route**, which is the address path that shows the page, such as `/`, and the page component behind it.
- A **shared layout**, which is a component that wraps every page and usually provides the header and footer.
- Existing sections.
- Reusable components and styles.
- Temporary content from the starter project.
- Changes from earlier tasks.

Ask Claude to identify what can be kept, adapted or replaced within the approved scope.

**If the shared layout already provides the header and footer, do not add them to the homepage again.** Otherwise the page will show two of each.

Confirm that the project still matches what was recorded at the end of Unit 4.

## 4. Choose an implementation order

Follow dependencies rather than building everything at once.

A typical sequence is:

1. Confirm the homepage route and shared layout.
2. Set up the approved content container and section structure.
3. Build the first section.
4. Check its acceptance criteria.
5. Build the next section.
6. Review the assembled page.

The order you build in does not have to match the order on the page. For example, a shared component may need finishing before the section that uses it.

Keep the approved display order on the page unchanged unless a revision has been authorised.

### Handle blocked sections explicitly

A section is **blocked** when something it needs is missing.

If an image is missing:

- Check whether an approved placeholder is allowed.
- Build the surrounding structure only if that is useful.
- Record that the section is not visually complete.

If an essential layout decision is missing, pause that section and work on another task that can proceed.

## 5. Give each section a bounded task

### Example section task

**Task: Build the approved treatment overview section.**

| Area | Requirement |
|---|---|
| Outcome | Visitors can see the listed treatments and reach their agreed pages |
| References | Approved homepage section, style guide, IA and treatment content |
| Scope | Heading, introduction, card arrangement and supplied card instances |
| Reuse | The existing treatment card and shared spacing styles |
| Boundaries | Keep the approved wording, order and destinations |
| Verification | Compare the layout, check the content, test the links and run the relevant project checks |

Do not ask Claude to redesign neighbouring sections so that the selected section “fits better”.

If the shared card lacks something the design needs, identify the supporting change and check the card’s other usages before making it.

## 6. Build one section

Use the actual task ID and references in this prompt:

```text
Implement the selected homepage section using the approved task.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the homepage route, shared layout and existing components.
- Confirm the section's prerequisites.

Implementation:
- Follow the approved section order and design.
- Use the existing TypeScript, TSX and styling conventions.
- Reuse shared components and styles where appropriate.
- Use supplied approved content and assets.
- Apply only the agreed treatment for missing materials.
- Preserve unrelated sections and existing work.

After implementation:
- Run applicable documented checks.
- Explain files changed and any shared effects.
- Report which acceptance criteria were verified.
- List browser checks or dependencies still outstanding.

Do not add sections, invent content, install dependencies,
commit, push or deploy without the relevant authorisation.

Selected task:
[Insert task.]

References:
[Insert exact references.]
```

Review the result before asking for the next section.

## 7. Check each section

Use the review method from Lesson 4.4.

| Area | Question |
|---|---|
| Structure | Are all required elements present and correctly grouped? |
| Layout | Do the width, alignment and spacing follow the reference? |
| Shared styling | Are the correct typography, colours and component styles used? |
| Content | Is the supplied copy preserved? Are any placeholders recorded? |
| Links | Do the implemented links reach their agreed pages? |
| Integration | Does the section sit correctly inside the shared layout? |
| Basic resilience | Does the content stay usable when the browser window narrows? |

Lesson 5.3 covers the full responsive refinement. Still, fix obvious problems now, such as content spilling off the screen or becoming unusable.

## 8. Review the assembled homepage

Once all the planned sections are in place, look at the page as a whole.

Look for:

- Sections in the wrong order.
- Duplicate headers, footers or main content areas.
- Inconsistent content widths.
- Unexpected gaps between sections.
- Repeated or missing content.
- Heading levels that do not match the page structure.
- Broken links between sections or pages.
- Shared changes that affected earlier work.

### Check heading levels across the page

Headings form an outline of the page. Screen reader users often move from heading to heading to find what they need.

A typical homepage has one level 1 heading. Section headings are usually level 2. Headings inside a section, such as treatment card titles, are usually level 3. The treatment card from Lesson 4.3 lets you set its heading level so it fits the section it appears in.

Choose heading levels by their place in the outline, not by how large they look. Styles control size.

A section can pass on its own and still cause a problem when placed next to its neighbours.

### Record progress honestly

| Status | Meaning |
|---|---|
| Not started | Work has not begun |
| In progress | Work is underway |
| Blocked | A specific dependency is preventing progress |
| Implemented, awaiting verification | The code exists, but checks remain |
| Ready for review | The required checks are complete and the evidence is available |

Use the project’s own status labels if it already has them.

## 9. Practical exercise

**Task: Assemble the approved homepage through separate section tasks.**

1. Create the section implementation map.
2. Confirm the route and shared layout.
3. Identify dependencies and choose the build order.
4. Build each section through a bounded prompt.
5. Check each result before continuing.
6. Review the assembled page, including heading levels.
7. Record missing materials and unresolved findings.

Start a **temporary content register**, a simple table listing every placeholder or temporary asset, where it is used and what it is waiting for. Lesson 5.2 uses it.

If a section is blocked, submit the completed parts and explain exactly what remains blocked.

## 10. Expected submission

Submit:

- The homepage section map.
- The build order and dependencies.
- Task IDs and their current statuses.
- A summary of changed files.
- A screenshot of the assembled page.
- Verification results and remaining findings.
- The temporary content register, if temporary content is allowed.

## 11. Completion criteria

The lesson is complete when:

- The homepage follows the approved section structure.
- Shared layouts, components and styles are reused appropriately.
- Each implemented section has been checked.
- The assembled page has been reviewed for integration issues, including heading levels.
- Missing materials and incomplete checks remain visible.
- The work is ready for the content, image and call to action pass in Lesson 5.2.

## 12. Knowledge check

1. Why should the homepage be reviewed as a whole after checking individual sections?
2. Can the build order differ from the order on the page?
3. What should happen when a section’s required image is not available?
4. Why must you check the shared layout before adding a header or footer?
5. Does “implemented” mean the same as “verified”?


---

# Lesson 5.2: Adding and Checking Copy, Images and Calls to Action

### Learning objective

By the end of this lesson, you should be able to:

- Fill the homepage with approved content and assets.
- Check wording, spelling and grammar without rewriting approved copy.
- Prepare images for the place they will appear.
- Connect calls to action to confirmed destinations.
- Track missing materials and check the finished content.

**Prerequisites:** Complete Lesson 5.1 and have the assembled homepage running locally.

**Required materials:** Approved homepage copy, image assets, style guide, IA, confirmed call to action destinations and the temporary content register from Lesson 5.1.

## 1. Complete the content within the approved structure

Lesson 5.1 built the homepage sections. This lesson checks what visitors read, see and select inside them.

| Content type | What to establish |
|---|---|
| **Copy** | The correct approved wording appears in the correct place |
| **Images** | The intended images appear with suitable proportions and cropping |
| **Calls to action** | Labels and destinations match the approved visitor journey |
| **Temporary materials** | Placeholders are replaced, or remain clearly recorded |

**Copy** means the written text of the website.

Keep the approved section order and design.

If supplied content does not fit the layout, find out why before changing either the wording or the design. The fix may belong to the layout, not the words.

## 2. Confirm the source of each item

Before editing, identify the current approved source for each piece of content.

A file being available does not prove it is the approved version. Folders often contain older drafts.

Create a **content map** that links each location to its source:

| Location | Approved source | Current implementation | Required action |
|---|---|---|---|
| Hero heading | Homepage copy, approved version | Earlier wording | Replace with the approved text |
| Hero image | Asset register, selected photograph | Temporary image | Replace it and check the crop |
| Treatment cards | Approved treatment summaries | Supplied text present | Compare for accuracy |
| Main call to action | Confirmed navigation specification | Destination not yet checked | Check and test it |

Use the actual project references in your submission.

If two sources conflict, record the conflict and ask for clarification on that item. Continue with the items whose requirements are clear.

## 3. Check copy in two separate passes

Checking whether the website shows the approved text is different from checking whether the approved text itself is correct. Do them separately.

### Pass A: Compare with the approved copy

Check:

- Headings and paragraphs.
- Treatment and product names.
- Button and link labels.
- Prices, durations and contact details, where they appear.
- Capital letters and punctuation.
- Missing, duplicated or outdated text.

Where the website differs from the approved text, restore the approved wording.

### Pass B: Flag possible language errors

Now check the approved source itself for:

- Spelling mistakes.
- Grammar errors.
- Inconsistent terms for the same thing.
- Repeated words.
- Unclear sentences.
- Spelling that is not consistently UK English.

**An error in the implementation and a suspected error in the approved copy need different responses.**

| Finding | Response |
|---|---|
| The website differs from the approved text | Restore the approved text within the authorised task |
| The approved source appears to contain a typo | Propose a correction and follow the project’s editorial approval process |
| The copy is accurate, but you prefer different wording | Record it as an optional suggestion |
| A factual statement cannot be confirmed | Flag it for the responsible reviewer |

Do not quietly rewrite approved content to make it sound more polished. Someone approved that wording, possibly for reasons you cannot see.

### Example editorial finding

| Field | Example |
|---|---|
| Location | First-visit introduction |
| Approved wording | “Your therapist will explains each step.” |
| Proposed correction | “Your therapist will explain each step.” |
| Reason | The verb does not agree with its subject |
| Status | Awaiting editorial decision |

### Do not add claims

Do not add claims, prices, qualifications or treatment details that the supplied sources do not support.

If the website promotes health-related or treatment services, advertising rules may apply to what it can say, such as rules on claims about results or comparisons with competitors. Deciding whether wording complies is not your role. If a statement looks like it might be a claim of this kind, flag it for the responsible reviewer rather than editing or approving it yourself.

## 4. Place images deliberately

The right photograph can still look wrong if it is cropped or stretched differently from the design.

For each image, confirm that:

1. It is the selected, approved asset.
2. Its resolution is high enough for the size it is shown at.
3. Its proportions suit the space it fills.
4. The crop keeps the important subject visible.
5. It loads successfully.
6. It follows the project’s usual approach for images.

Use the framework’s image component or optimisation method if the project has one.

Do not stretch an image to fill a space. Stretching distorts faces and objects.

### Check the focal point

The **focal point** is the part of the image that must stay visible.

A wide photograph may look right on a desktop screen but lose the treatment activity when cropped for a narrow phone screen.

Check each image at the required widths. Adjust its position within the approved design where needed.

If no crop works, flag the mismatch rather than swapping in another image without authorisation.

### Keep the original files

Keep the original image files. Create smaller, optimised versions through the agreed asset workflow.

Do not alter faces, logos, products or other meaningful details as part of routine placement.

## 5. Write appropriate alternative text

**Alternative text**, often called alt text, is a short text description of an image. Screen readers read it aloud, and browsers show it if the image fails to load.

Good alternative text depends on why the image is there.

| Image purpose | Approach |
|---|---|
| Informative photograph | Briefly describe the relevant subject or activity |
| Decorative image | Use an empty alternative text value, `alt=""`, so screen readers skip it |
| Image used as a link | Make sure the link has an accessible name that says where it goes |
| Image containing essential text | Provide the same information as real text, rather than relying on the image |

An **accessible name** is the name assistive technology announces for an element, such as a link or button. For a text link, it is usually the link text. For an image link, it usually comes from the image’s alternative text.

For example:

> Therapist examining a client’s scalp during a consultation.

Use this only if it accurately describes the actual photograph.

Avoid:

- Lists of keywords.
- Interpretations the image does not support.
- Repeating a caption that is already next to the image.
- Starting every description with “Image of”. Screen readers already announce that it is an image.

Follow any approved asset descriptions and accessibility requirements.

## 6. Connect calls to action to the visitor journey

A **call to action**, or CTA, asks the visitor to take a next step, such as:

- View treatments.
- Find an outlet.
- Request an appointment.

For each call to action, check:

| Area | What to verify |
|---|---|
| **Label** | Matches the approved wording |
| **Purpose** | Makes the next step clear |
| **Destination** | Reaches the confirmed page, page section or external service |
| **Element** | Uses a link to go somewhere, or a button to perform an action |
| **Behaviour** | Does what the specification says |
| **Availability** | Does not suggest that an unfinished action works |

Test the actual destination in the browser. Seeing the right address in the code is not enough, because the route may not exist or may show the wrong content.

For an **anchor link**, which jumps to a section on the same page, confirm that the target section exists and is visible after the jump.

For an external booking or messaging service, check that the approved destination opens. Do not make a booking or send a message.

If a call to action opens a form, check only the behaviour authorised for this task. Do not add a new form connection as part of a content pass.

## 7. Track temporary and missing materials

Update the temporary content register you started in Lesson 5.1.

| Item | Location | Current treatment | Waiting for | Status |
|---|---|---|---|---|
| Hero photograph | Homepage hero | Approved temporary image | Final image selection | Awaiting asset |
| Appointment destination | Main call to action | Agreed interim treatment | Confirmed booking address | Blocked |
| Treatment summary | Second card | Approved final copy | Nothing | Replaced and verified |

Temporary materials must stay on the record until they are replaced, even if the page looks finished.

To find leftovers, search the relevant source files for known placeholder wording and also look through the rendered page. One search term will not find every placeholder.

## 8. Give Claude a bounded content task

```text
Complete the homepage copy, image and CTA pass within the
approved page structure.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the homepage and its content sources.
- Identify the approved copy, assets and CTA destinations.
- Check the temporary content register.

During implementation:
- Restore exact approved wording where implementation differs.
- Use UK English for any authorised new editorial text.
- Report suspected errors in approved copy separately.
- Replace temporary images only with selected approved assets.
- Preserve image proportions and check relevant focal points.
- Apply appropriate alternative text.
- Connect CTAs to confirmed destinations.
- Preserve the approved layout and unrelated work.

Do not invent claims, rewrite approved content, select
unapproved assets or add integrations.

After implementation:
- Compare rendered copy with the approved source.
- Check image loading and cropping.
- Test CTA destinations without submitting forms,
  making bookings or sending messages.
- Run applicable documented project checks.
- Update the temporary content register.
- Report changes, evidence and remaining limitations.

Do not commit, push or deploy.

Scope and references:
[Insert the selected sections and exact approved references.]
```

Review any suspected errors in the approved source before allowing them to be corrected, unless the project rules already permit those editorial changes.

## 9. Review the rendered result

Check content in the browser as well as in the source files, because the browser shows what visitors actually see.

Look for:

- Missing or duplicated text.
- Unexpected line breaks.
- Headings or button labels that are cut off.
- Incorrect characters, such as broken apostrophes.
- Images that do not load.
- Crops that hide important details.
- Calls to action that lead somewhere unexpected.
- Remaining temporary content.

Longer approved copy may reveal layout problems. Record them for the responsive refinement in Lesson 5.3, but fix anything that already stops the page being used.

## 10. Practical exercise

**Task: Complete the content pass for the approved homepage.**

1. Create the content map.
2. Compare the rendered wording with the approved source.
3. Record suspected editorial errors and possible claims separately.
4. Replace the temporary assets that are now available.
5. Check alternative text and image cropping.
6. Test each implemented call to action.
7. Update the temporary content register.
8. Record verification results and unresolved dependencies.

Do not invent findings to fill a quota.

## 11. Expected submission

Submit:

- The content map and the source versions used.
- A summary of changed files.
- Copy comparison results.
- Proposed editorial corrections and flagged claims, with their decision status.
- Image and alternative text checks.
- Call to action labels, destinations and test results.
- The updated temporary content register.
- Screenshots of the reviewed sections.

## 12. Completion criteria

The lesson is complete when:

- The website’s copy matches the approved source.
- Suspected source errors and possible claims are recorded and handled by the right people.
- Available approved images are correctly placed and checked.
- Alternative text reflects each image’s purpose.
- Call to action destinations have been checked within the authorised scope.
- Temporary materials and blocked items remain visible.
- The homepage is ready for responsive refinement.

## 13. Knowledge check

1. How does a copy error in the implementation differ from an error in the approved source?
2. Why should image cropping be checked at different widths?
3. When is empty alternative text appropriate?
4. Why is checking a call to action’s address in the code not enough?
5. What should happen when a final image or destination is still unavailable?


---

# Lesson 5.3: Refining the Homepage Across Screen Sizes

### Learning objective

By the end of this lesson, you should be able to:

- Check the homepage at the required viewport sizes.
- Recognise layout, content and interaction problems on narrower screens.
- Correct responsive problems within the approved design.
- Check shared changes everywhere they apply.
- Record evidence and any unresolved responsive issues.

**Prerequisites:** Complete Lesson 5.2 and have the homepage running locally.

**Required materials:** Approved desktop and mobile references, responsive requirements, style guide, homepage acceptance criteria and outstanding findings.

## 1. Understand responsive behaviour

A **responsive** website adapts to the space available in the browser while keeping its content and usability.

Adapting can involve:

- Changing the number of columns.
- Stacking content vertically.
- Adjusting spacing and text size.
- Switching to a mobile menu.
- Repositioning images.
- Letting buttons and labels wrap onto a second line.

**Responsive refinement keeps the approved content, hierarchy and visitor journey. It is not a chance to redesign the website for mobile.**

## 2. Set the review widths

Start with the viewport sizes the project specifies. Lesson 4.4 explained that the viewport is the part of the browser window that shows the page.

Sizes are measured in **CSS pixels**, the unit web pages use for layout. A CSS pixel does not always equal one physical pixel on the screen, so a phone with a very high-resolution screen still has a viewport only a few hundred CSS pixels wide.

If the project does not specify review widths, propose a practical set and record it before testing. For example:

| Review width | Purpose |
|---|---|
| 375 CSS pixels | Narrow phone layout |
| 768 CSS pixels | Intermediate layout |
| 1280 CSS pixels | Desktop layout |

These widths are illustrative. They are not required device sizes, and they are not automatically the points where the layout should change.

Also drag the browser window slowly between the selected widths. A layout can look right at the screenshot sizes and still break somewhere in between.

### Viewports and breakpoints are different

A **review viewport** is a size at which you inspect the page.

A **breakpoint** is a width at which the code changes the layout, such as switching from three columns to one.

In CSS, breakpoints are usually written as **media queries**. A media query applies a set of styles only when a condition is true, such as “the viewport is at least 768 CSS pixels wide”.

Use the project’s existing breakpoints where they work. Add or adjust one only when the content and the approved behaviour justify it.

## 3. Inspect before changing styles

Begin by checking:

1. The current Git status.
2. The existing responsive styles and media queries.
3. Shared containers and spacing values.
4. Layout rules for individual components.
5. The approved responsive references.
6. Outstanding findings from earlier lessons.

Find the cause of each problem before correcting it.

For example, **horizontal overflow**, where content is wider than the screen and the page scrolls sideways, might come from:

- An image with a fixed width.
- A grid column that cannot shrink.
- A long word or web address that cannot wrap.
- An oversized decorative element.
- A container wider than the viewport.

Hiding the overflow across the whole page can make the sideways scrolling disappear while cutting content off, so visitors cannot reach it. That hides the symptom without fixing the cause.

## 4. Review the page in a consistent order

Look at the whole page before the details.

| Area | What to inspect |
|---|---|
| **Page width** | No unintended sideways scrolling or cut-off content |
| **Header and navigation** | Correct layout, usable controls and working links |
| **Section structure** | Approved stacking and a sensible content order |
| **Typography** | Readable text, sensible wrapping and a clear hierarchy |
| **Spacing** | Consistent gaps between sections, padding and alignment |
| **Images** | Suitable proportions, positioning and focal points |
| **Cards and grids** | Appropriate columns, wrapping and card heights |
| **Calls to action** | Visible labels, usable controls and correct placement |
| **Footer** | Readable information and reachable links |
| **Overlays and fixed elements** | Nothing covers content or controls by mistake |

Check the relevant interaction states at each layout, including the open mobile menu. A screenshot of the closed menu cannot show whether the open menu works.

## 5. Keep a meaningful content order

On desktop, text and images often sit side by side. On mobile, they usually stack. Follow the approved order.

Check that:

- Headings introduce the content that follows them.
- Descriptions stay with their cards.
- Calls to action follow the information they relate to.
- Images stay next to their explanations.
- Moving through the page with the keyboard follows a sensible sequence.

Take care when CSS is used to rearrange content visually. Screen readers and keyboard users follow the order in the code, not the visual order. If the two differ, the page can become confusing.

If the supplied references conflict with a sensible reading order, record the issue for review.

## 6. Correct layout problems at their source

Use corrections that match the size of the problem.

| Problem | What to investigate |
|---|---|
| Cards extend beyond the screen | Grid sizing, minimum widths and container padding |
| A heading is cut off | Fixed heights, overflow rules and text sizing |
| A button label is cut off | Width, padding, wrapping and height limits |
| An image looks stretched | Its dimensions and how it is fitted to its space |
| A large empty space appears | Fixed heights, margins and hidden elements |
| The mobile menu covers its own close button | Positioning, stacking order and scrolling behaviour |

Avoid shrinking all the text to fix one crowded section.

Avoid removing approved content just because it is difficult to fit.

### Example

If three treatment cards no longer fit comfortably in one row, follow the approved responsive arrangement. That might mean fewer columns or a single stacked column.

Do not introduce a carousel, a sliding panel of cards, unless it is part of the agreed design.

## 7. Check interaction as well as appearance

A responsive review includes behaviour.

Check that:

- Navigation controls can be reached and operated.
- The mobile menu opens and closes as specified.
- Keyboard focus remains visible.
- Links and buttons are not covered by other elements.
- Interactive areas meet the project’s accessibility requirements.
- Content can still be reached when an overlay is open.
- **Sticky** elements, which stay fixed in place while the page scrolls, do not hide important content.

Use keyboard checks where relevant, alongside mouse or touch-style interaction.

Browser developer tools can **emulate**, or imitate, different screen sizes. This is useful, but it is not the same as using a real phone. Record whether any required checks on real devices are still outstanding.

## 8. Check text enlargement and reduced space

Some visitors enlarge text or zoom the browser to read comfortably. The page should still work when they do.

Use the project’s accessibility requirements for zoom and text enlargement.

Look for:

- Overlapping text.
- Missing content.
- Controls pushed outside their containers.
- Fixed elements covering most of the page.
- Information that can no longer be reached.

Record the browser, viewport and zoom level used.

Zooming in reduces the number of CSS pixels available, so a desktop page at high zoom may switch to its mobile layout. If it does, check that the mobile layout still works under those conditions.

Never disable browser zoom to protect the design. Lesson 8.3 covers the formal zoom and reflow checks in more detail.

## 9. Ask Claude for a focused responsive review

```text
Inspect the homepage's responsive behaviour against the
approved references and requirements.

Before reviewing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect existing responsive styles and shared components.

Review:
- The required viewport widths.
- Intermediate widths where layouts change.
- Relevant navigation and interaction states.
- Text wrapping, image cropping and content order.
- Overflow, clipping and obstructed controls.
- Applicable zoom and keyboard behaviour.

For each finding, report:
1. Location and reproduction conditions.
2. Expected behaviour and supporting reference.
3. Actual behaviour.
4. Evidence.
5. Likely cause and affected usages.
6. Suggested correction.

Separate implementation defects from missing specifications
and optional preferences.

Do not edit files during this review.
Do not claim checks that were not performed.

Scope and references:
[Insert the homepage scope, review widths and exact references.]
```

Check the findings yourself before asking for corrections.

### Correction prompt

```text
Correct the verified responsive findings listed below.

Follow the approved responsive references and existing
project conventions.

- Preserve approved copy, assets, section order and destinations.
- Correct the underlying layout causes.
- Reuse existing breakpoints and shared values where suitable.
- Explain any necessary change to shared styles.
- Avoid unrelated refactoring or new dependencies.

After editing:
- Repeat the checks that originally failed.
- Check intermediate widths.
- Check affected shared usages.
- Repeat relevant desktop checks.
- Run applicable documented project checks.
- Report results and remaining limitations.

Do not commit, push or deploy.

Verified findings:
[Insert findings and their supporting references.]
```

## 10. Retest shared changes

A correction to a shared container, heading style or card can change several sections at once.

After changing shared styles:

1. Retest the original issue.
2. Check the other places that use the changed style.
3. Recheck the relevant desktop layouts.
4. Check with both long and short approved content.
5. Update the findings record.

Adding a media query is not proof that a problem is fixed. Only the rendered page, checked under the original conditions, shows whether the issue is resolved.

## 11. Practical exercise

**Task: Complete the homepage responsive refinement pass.**

1. Record the review widths and required states.
2. Inspect the page at those widths and between them.
3. Record findings with the conditions needed to reproduce them.
4. Separate defects from specification gaps.
5. Ask Claude to correct verified defects in manageable groups.
6. Retest each correction and the places it affects.
7. Complete the required keyboard and zoom checks.
8. Submit the responsive review record.

If a required reference is missing, identify the decision it affects. Continue with the checks whose expected behaviour is already clear.

## 12. Expected submission

Submit:

- The responsive references and versions used.
- Viewport sizes, browser and zoom conditions.
- A completed responsive checklist.
- Findings with current statuses.
- A summary of changed files and shared effects.
- Before and after evidence for corrected issues.
- Project check results.
- Any outstanding real-device checks or specification decisions.

## 13. Completion criteria

The lesson is complete when:

- Required layouts and interaction states have been checked.
- Widths between the review sizes have been inspected.
- Verified defects have been corrected and retested.
- Approved content and visitor journeys are preserved.
- Shared changes have been checked wherever they apply.
- Keyboard and zoom checks are recorded.
- Remaining limitations are clearly identified.
- The homepage is ready for supervisor review.

## 14. Knowledge check

1. How does a review viewport differ from a breakpoint?
2. Why should you check widths between the supplied design references?
3. Why can hiding overflow fail to solve the real problem?
4. How can rearranging content with CSS affect keyboard and screen reader users?
5. What must be checked after changing a shared responsive style?


---

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


---

# Lesson 6.1: Planning and Building Internal Pages

### Learning objective

By the end of this lesson, you should be able to:

- Identify the requirements for an internal page.
- Separate shared page patterns from content that belongs to one page.
- Build an internal page from the approved IA and design.
- Connect the new page to the rest of the website.
- Check the page and any shared components it affects.

**Prerequisites:** Complete Unit 5 and have the homepage review decision recorded.

**Required materials:** Approved IA, internal-page designs, page content, assets, architecture document, shared components and task plan.

## 1. Understand what internal pages are for

An **internal page** is any page other than the homepage. Internal pages give visitors more detail or let them do something the homepage cannot.

Depending on the approved website, they might include:

- Treatment pages.
- An about page.
- Location pages.
- A contact page.
- Resource or article pages.

Build only the pages included in the approved scope.

Each page should meet a defined visitor need and connect to the rest of the website.

**An internal page needs its own requirements. It should not automatically copy the homepage’s section structure.**

## 2. Create a page implementation map

Use the approved IA to list the pages and how they relate to each other. For each page, record:

| Field | What to establish |
|---|---|
| Page name | Its approved name and purpose |
| Route | The confirmed address path, such as `/treatments` |
| Page type | Listing, detail, information or another approved type |
| References | The design, content and style guide that apply |
| Sections | The required content and its order |
| Shared elements | Existing layout and components to reuse |
| Assets | The files it needs, and whether they are available |
| Navigation | Links into the page and out of it |
| Dependencies | Missing decisions, content or connections to other services |
| Verification | Acceptance criteria and the checks that match them |

A **listing page** shows several items, such as all treatments. A **detail page** covers one item in depth, such as a single treatment.

Take routes from the IA. Do not make them up from page titles.

### Example

Only if these pages exist in the approved project:

| Page | Purpose | Possible shared elements |
|---|---|---|
| Treatment listing | Help visitors explore the available treatments | Treatment cards, page introduction |
| Treatment detail | Explain one treatment and its next step | Detail-page layout, call to action |
| Location detail | Give outlet information | Address block, location links |

These examples show how pages relate. They do not add pages to the project.

## 3. Check what already exists

Before creating a page, find out whether it already exists. Inspect:

1. The route structure.
2. The shared layouts.
3. Related pages.
4. Reusable components.
5. Where content is stored.
6. The relevant project checks.
7. The current Git changes.

A route may already contain a placeholder or a partly built page. Extend or replace it within the authorised scope. Do not create a second, competing route for the same page.

### Confirm the framework’s conventions

A **framework** is the toolkit the starter project is built on. It decides how files turn into pages and how routes work. Different TypeScript and TSX projects organise pages differently, so do not assume.

Before building, ask Claude to identify the relevant files and explain how the selected route is turned into a page in this project.

## 4. Recognise shared page patterns

Several pages may share a structure while showing different information.

For example, approved treatment detail pages might all include:

- A page introduction.
- An explanation of the treatment.
- What to expect.
- A relevant next step.

Reuse that structure where the approved designs support it. A reusable page structure like this is often called a **template**.

Looking similar is not enough reason to force pages into one template.

| Situation | Suitable approach |
|---|---|
| Several pages share an approved structure | Reuse a layout or page pattern |
| One component appears on different kinds of page | Reuse the component |
| One page has its own approved structure | Build its specific layout |
| Future pages are not yet defined | Do not add template options for them |

Do not introduce a **content management system (CMS)**, a tool for editing website content outside the code, or any new way of generating routes, just because several pages are planned. Follow the approved architecture.

## 5. Choose the first page to build

Choose a page whose prerequisites are all in place.

A good first page:

- Has approved content and design.
- Uses existing shared components.
- Has confirmed link destinations.
- Represents a pattern other pages will need.
- Can be reviewed on its own.

Do not start with a page that is blocked by an unresolved connection to another service when another approved page can go ahead.

### Example task

**Task: Build the approved treatment detail page.**

| Area | Requirement |
|---|---|
| Outcome | Visitors can read the approved treatment information and follow its confirmed next step |
| Scope | The selected route, required sections, supplied assets and page links |
| Reuse | The existing site layout, typography and suitable components |
| Boundaries | Keep the approved wording, structure and all unrelated pages |
| Dependencies | Approved content, a selected image and a confirmed call to action destination |
| Verification | Opening the route directly, design comparison, content checks, link tests and a responsive review |

Use the actual task ID and references.

## 6. Build the page within the existing site

Follow the approved section order and the shared visual system. Check that:

- The shared header and footer appear once.
- The page has a clear main heading at level 1.
- Heading levels reflect the page’s content structure.
- Approved text and assets appear in the right sections.
- Links use confirmed destinations.
- The layout works at the required widths.

Do not copy the whole homepage into a new route and delete sections until it looks right. That leaves hidden leftovers and makes the page hard to maintain. Reuse the parts of the foundation you actually need.

### Implementation prompt

```text
Implement the selected internal page using the approved task
and project references.

Before editing:
- Read the relevant project instructions.
- Confirm the project location and current Git status.
- Inspect the existing route, shared layout and related pages.
- Confirm that required content, assets and decisions are available.

During implementation:
- Follow the existing routing and content architecture.
- Use the approved page structure and exact supplied copy.
- Reuse applicable layouts, components and shared styles.
- Preserve the shared header and footer without duplication.
- Connect links to confirmed destinations.
- Follow approved responsive requirements.
- Preserve unrelated pages and existing work.

Do not introduce a CMS, new dependencies or a broader
page-template system unless required by the approved task.

After implementation:
- Check direct access to the route and browser refresh.
- Compare the page with the approved references.
- Verify content, images, links and responsive behaviour.
- Check shared usages affected by changes.
- Run applicable documented project checks.
- Report changes, evidence and remaining limitations.

Do not commit, push or deploy.

Selected task:
[Insert task ID and specification.]

Approved references:
[Insert exact paths or reference locations.]
```

## 7. Connect the page to the visitor journey

A page that opens at its address is not necessarily part of the website. Visitors also need a way to find it.

Check the approved **entry points**, the links visitors use to reach the page, such as:

- Header or footer links.
- Homepage treatment cards.
- A listing page.
- Related-content links.

Then check the page’s own outgoing links.

| Check | Expected result |
|---|---|
| Follow an approved entry link | The intended page opens |
| Type the route into the address bar | The page loads without needing a previous visit |
| Refresh the page | The page loads again correctly |
| Follow its call to action | The confirmed destination opens |
| Follow related links | Each destination matches its label |

Opening the route directly and refreshing matter because some setups only work when you arrive by clicking a link.

Add **breadcrumbs**, a trail of links showing where the page sits in the site, or other navigation only when the approved design or project rules require them.

If a destination is not built yet, use the agreed interim treatment and record the dependency.

## 8. Check the page and shared effects

Use the review methods from Units 4 and 5. Check:

- Structure and match with the design.
- Exact copy.
- Image loading, cropping and alternative text.
- Heading structure.
- Navigation and call to action destinations.
- Keyboard use.
- The required viewport sizes and the widths between them.
- The relevant project checks.

If you changed a shared component for this page, recheck where the homepage uses it. For example, adding an approved card variant must not accidentally change the existing homepage cards.

Record any check you did not perform as **Not checked**, with the reason.

## 9. Practical exercise

**Task: Build and check one approved internal page.**

1. Create the page implementation map.
2. Select a page whose prerequisites are in place.
3. Inspect its route and reusable components.
4. Write a bounded implementation task.
5. Ask Claude to build it.
6. Review the changed files.
7. Test direct access, refresh and the approved entry links.
8. Check appearance, content and responsive behaviour.
9. Record findings and shared effects.

If the page is blocked, identify the missing prerequisite and choose another authorised task if one is available.

## 10. Expected submission

Submit:

- The page implementation map.
- The selected task and implementation prompt.
- A summary of changed files.
- The implemented route and its approved entry points.
- Desktop and mobile screenshots.
- Acceptance criteria with statuses and evidence.
- Project check results.
- Outstanding findings and dependencies.

## 11. Completion criteria

The lesson is complete when:

- The page follows the approved IA, design and content.
- Existing architecture and shared components are used appropriately.
- The page loads directly and through its approved entry points.
- Its links reach the correct destinations.
- Required visual, responsive and functional checks are recorded.
- Affected shared usages have been checked.
- Remaining limitations are visible for supervisor review.

## 12. Knowledge check

1. Why should an internal page have its own requirements?
2. When is a shared page pattern appropriate?
3. Why should you check how the framework handles routes before creating a page?
4. How does opening a route directly differ from following a link to it?
5. What should be rechecked after changing a shared component?


---

# Lesson 6.2: Building Related Pages Without Duplicating Work

### Learning objective

By the end of this lesson, you should be able to:

- Identify which approved pages share a repeatable structure.
- Separate shared presentation from content that belongs to one page.
- Extend an existing page pattern without adding unnecessary complexity.
- Check that each page shows its own correct information.
- Check the effects of changes on related pages and existing usages.

**Prerequisites:** Complete Lesson 6.1 and have its first internal page checked, with any review conditions recorded.

**Required materials:** Approved IA, designs for the related pages, page-specific content and assets, the existing implementation, the architecture document and the task plan.

## 1. Build from a checked example

The first internal page gives you a working example. Before reusing it as a pattern, confirm which parts can actually be reused. Check:

- Whether its structure matches the related pages.
- Whether its content is written directly into the page or supplied separately.
- Whether any of its outstanding findings would carry over.
- Which elements belong to the shared site layout.
- Which elements belong only to that page.

**Copying a pattern that still has a defect copies the defect too, and multiplies the correction work.**

Fix shared defects before extending the pattern. Pages that do not depend on the defect can go ahead.

## 2. Compare the approved pages

Pages with similar names do not necessarily have identical requirements. Build a comparison table from the actual references.

| Element | Shared requirement | Possible page-specific difference |
|---|---|---|
| Page introduction | Consistent typography and container | Heading, summary and image |
| Main content | Approved presentation | Which sections appear, and their order |
| Supporting information | Shared component, where suitable | Whether it appears, and its wording |
| Call to action | Approved visual treatment | Label and destination |
| Related links | Consistent presentation | Which pages are linked |

Decide whether each part is:

- A genuinely shared structure.
- A shared component used inside different structures.
- A requirement that belongs to one page only.

Do not force unique content into an unsuitable template just to have fewer files.

## 3. Separate content from presentation

A repeated page pattern usually has three layers:

| Layer | Responsibility |
|---|---|
| **Shared presentation** | Layout, styling and repeated interaction |
| **Page content** | Headings, descriptions, images and destinations |
| **Route** | Makes the correct page available at its approved address |

Follow the project’s existing approach to these layers. For example, a project might store page content in:

- Individual page files.
- **Typed data objects**, which are lists of content written in TypeScript with a type describing their fields.
- **Markdown files**, plain text files with simple formatting marks.
- An existing content management system.

Do not move content into a different system during this task unless the approved architecture requires it.

### Illustrative example

A small shared introduction component can accept each page’s own content through props:

```tsx
type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({
  title,
  description,
}: PageIntroProps) {
  return (
    <section className="page-intro">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
```

This shares the presentation without forcing every page into an identical full-page template. It uses a level 1 heading because the introduction names the whole page.

Follow the actual project’s component conventions.

## 4. Define required and optional information

Some related pages may include information that others do not. For each field or section, decide whether it is:

- Required on every page.
- Optional under the approved pattern.
- Unique to one page.

| Situation | Expected treatment |
|---|---|
| Required content is available | Show it in the approved location |
| Required content is missing | Record the dependency. Do not invent the content |
| An optional section is absent | Leave it out cleanly, as the approved pattern specifies |
| A unique section is required | Build it without changing unrelated pages |

Do not show empty headings, blank boxes or controls that do nothing just because the template expects content.

Do not fill a gap with placeholder claims or with text copied from another page.

## 5. Choose a small batch

Build related pages in manageable groups. A suitable batch contains pages that:

- Share a checked pattern.
- Have approved content and assets.
- Have confirmed routes and destinations.
- Can be reviewed together without hiding their differences.

Start with just one more page. Real content often reveals assumptions the first page hid. For example, a longer approved title or an optional section may break a layout that looked fine before.

Do not generate all the remaining pages before you have checked the second one.

## 6. Ask Claude to extend the pattern

```text
Implement the selected related page using the verified
internal-page pattern and approved references.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the first implemented page and its outstanding findings.
- Compare the selected page's requirements with that pattern.
- Identify shared and page-specific elements.

During implementation:
- Follow the existing routing and content architecture.
- Reuse suitable components and styles.
- Preserve each page's approved wording, assets and destinations.
- Implement approved differences explicitly.
- Omit absent optional sections cleanly.
- Report missing required content rather than inventing it.
- Avoid speculative template options or unrelated refactoring.

After implementation:
- Verify the selected page independently.
- Check that content from another page has not carried over.
- Test direct access, refresh and approved entry links.
- Recheck existing pages affected by shared changes.
- Run applicable documented project checks.
- Report results and remaining limitations.

Do not add dependencies, migrate content systems,
commit, push or deploy.

Selected task:
[Insert the page and bounded task.]

Verified pattern:
[Insert the implementation reference.]

Approved sources:
[Insert exact page-specific references.]
```

If the new page shows a genuine limitation in the shared pattern, assess the change it needs before applying it to the other pages.

## 7. Check for copied content and mismatched details

Copying errors can hide inside a page that looks perfectly consistent. Check each page on its own.

| Item | What to check |
|---|---|
| Heading | Names the correct page or subject |
| Body copy | Matches that page’s approved source |
| Images | Belong to that page |
| Alternative text | Describes the actual image on that page |
| Call to action | Uses that page’s correct label and destination |
| Related links | Point to relevant approved pages |
| Contact or location details | Match the correct business location |
| Page metadata, where in scope | Describes that page, not another one |

**Metadata** is information about a page that sits behind the scenes, such as the title shown in the browser tab. Lesson 9.3 covers it in detail.

A correct layout does not make up for another page’s information appearing inside it.

To find leftovers, search the relevant files for distinctive text from the first page, then compare the rendered pages. Treat search results as places to look, not as proof of an error.

## 8. Check content variation

Test the shared pattern with the real variations in the supplied content, such as:

- Short and long headings.
- Different paragraph lengths.
- Pages with and without an optional section.
- Images with different focal points.
- Longer call to action labels.
- Different numbers of related links.

Use actual approved content.

Do not shorten approved copy just to make a shared component fit. If the pattern fails with valid content, fix the component or record the design decision that is needed.

## 9. Recheck the pages a change affects

A shared change can improve one page and break another. Checking that earlier work still works after a change is called **regression checking**.

After changing a shared pattern:

1. Find where it is actually used.
2. Repeat the checks the change could affect.
3. Compare representative desktop and mobile layouts.
4. Confirm that each page’s own content is still correct.
5. Record the results.

Match the regression checks to the change. Changing the introduction layout means checking the pages that use it. It does not mean retesting an unrelated form.

## 10. Practical exercise

**Task: Extend the checked pattern to another approved internal page.**

1. Compare the two pages’ requirements.
2. Identify shared and unique elements.
3. Confirm the second page’s prerequisites.
4. Build it through a bounded task.
5. Check for copied content and wrong destinations.
6. Check content variation at the required widths.
7. Retest the existing pages the change affects.
8. Record whether the pattern is ready for further reuse.

If no second page shares the structure, explain why. Reuse suitable components without inventing a full-page template.

## 11. Expected submission

Submit:

- The page comparison table.
- The selected task and implementation prompt.
- A summary of shared and page-specific changes.
- The implemented routes.
- Content and destination check results for each page.
- Screenshots showing relevant content variations.
- Regression and project check results.
- Outstanding findings and dependencies.

## 12. Completion criteria

The lesson is complete when:

- Reuse follows the approved page requirements.
- Shared presentation and page-specific content are handled consistently.
- Required content is present or recorded as missing.
- Optional sections leave no empty interface elements.
- Each page shows its own correct information.
- The pattern works with the approved content variations.
- Affected existing pages have been rechecked.
- Remaining issues are ready for supervisor review.

## 13. Knowledge check

1. Why should the first page be checked before its pattern is reused?
2. When is reusing a component more suitable than a full-page template?
3. How should missing required content be handled differently from an absent optional section?
4. Why should you check the second page before building a large batch?
5. What decides which existing pages need regression checks?


---

# Lesson 6.3: Connecting Pages and Checking Visitor Journeys

### Learning objective

By the end of this lesson, you should be able to:

- Connect the implemented pages as the approved IA describes.
- Check navigation labels, destinations and current-page indicators.
- Test complete visitor journeys across several pages.
- Find broken links, pages visitors cannot reach and unfinished destinations.
- Correct navigation problems and check the journeys they affect.

**Prerequisites:** Complete Lesson 6.2 and have the relevant internal pages running locally.

**Required materials:** Approved IA, navigation specification, visitor flows, implemented routes, call to action destinations and outstanding dependency records.

## 1. Review the connections between pages

Earlier lessons checked individual pages and their immediate links. This lesson checks how the pages work together.

A page can load correctly and still be hard to find. A link can open a real page and still lead to the wrong information.

Review at two levels:

| Review level | Question |
|---|---|
| **Individual link** | Does this link or control reach its intended destination? |
| **Visitor journey** | Can a visitor complete the approved sequence of steps? |

A **visitor flow** is the approved plan of these sequences, prepared during planning in Unit 2.

**Working routes are necessary, but they do not prove the website’s navigation is complete.**

## 2. Build a navigation inventory

A **navigation inventory** lists every link in scope, with its expected and actual destination. Start from the approved IA and navigation specification.

| Location | Label | Expected destination | Current result | Status |
|---|---|---|---|---|
| Header | Treatments | Approved treatment listing route | To be checked | Not checked |
| Homepage card | Approved treatment name | The matching detail route | To be checked | Not checked |
| Treatment page | Find an outlet | Approved location destination | To be checked | Not checked |
| Footer | Contact | Approved contact route | To be checked | Not checked |

These rows are illustrative. Use the project’s actual labels and destinations.

Include, where they exist:

- Header and mobile navigation.
- Footer links.
- Cards and links within text.
- Calls to action.
- Breadcrumbs, if specified.
- Related-content links.
- **Anchor links**, which jump to a section on the same page.
- Links to external websites and services.

Do not add links just because they appear in this example.

## 3. Confirm the expected destination

Decide what each link should do before testing it.

| Destination type | Expected behaviour |
|---|---|
| Internal page | Opens the confirmed route |
| Page section | Scrolls to the correct section without hiding its heading |
| External website | Opens the approved address |
| Email link | Opens the visitor’s email application with the configured address |
| Telephone link | Offers the confirmed number to a calling application |
| Booking or messaging service | Opens the approved service or conversation |

Follow the project’s rule on whether each link opens in the same tab or a new one. Do not make every external link open a new tab by default. Unexpected new tabs can disorient visitors, particularly those using screen readers.

For email and telephone links, checking that the right address or number is configured is different from sending an email or making a call. Record exactly what you checked.

## 4. Check the shared navigation

Review the header, mobile menu and footer on each implemented page. Check that:

- Labels and their order match the approved specification.
- Destinations are consistent wherever they should be.
- The logo links to the agreed destination.
- The right version of the navigation appears at each layout.
- The current-page indicator follows the approved design.
- Keyboard focus stays visible.
- The mobile menu closes or updates after a selection, as specified.

### Current-page indicators

Many designs highlight the navigation item for the page the visitor is on. Where the design does this, check the behaviour on both listing and detail pages. For example, a treatment detail page might highlight the parent “Treatments” item, if that is the approved rule.

Visual highlighting is not enough on its own, because screen reader users cannot see it. The HTML attribute `aria-current` tells assistive technology which link represents the current page, for example `aria-current="page"`. Follow the project’s existing accessibility conventions for this.

Do not rely on colour alone to show a required state. Some visitors cannot tell certain colours apart.

## 5. Find pages missing their entry points

Compare the implemented routes with the approved entry links. A page may load when you type its address but have no link leading to it where the IA requires one.

For each page, check:

1. Where visitors are supposed to discover it.
2. Whether that entry point exists.
3. Whether its label makes the destination clear.
4. Whether the link opens the correct page.

Not every page belongs in the main navigation. Some are meant to be reached through listings, links in context or a direct address. Judge each page against the approved structure, rather than adding every route to the header.

## 6. Write visitor journey checks

Use the approved visitor flows to write a small set of meaningful checks.

### Example journey

Only if the project supports it:

> Homepage → treatment listing → treatment detail → location page.

For each journey, record:

| Field | What to include |
|---|---|
| Journey ID | A unique reference |
| Visitor goal | What the person is trying to achieve |
| Starting point | The page where the check begins |
| Steps | The links or controls selected |
| Expected result | The correct page or state after each step |
| Test conditions | Browser, viewport and input method, such as mouse or keyboard |
| Outcome | Passed, Failed or Not checked |
| Evidence | Screenshots, observations or test output |

Test other starting points where required. Visitors often arrive directly on an internal page from a search engine, rather than starting at the homepage.

Do not add steps that are not in the approved journey.

## 7. Test the journeys in the browser

For each journey:

1. Open the recorded starting page.
2. Follow the specified links.
3. Confirm the destination after each step.
4. Check that the content matches the chosen subject.
5. Confirm that the next required action is available.
6. Record the result.

Repeat the relevant journeys using the mobile menu and using only the keyboard.

### Check browser history where relevant

Use the browser’s Back and Forward buttons to confirm that navigation still makes sense.

Some features keep track of what the visitor has chosen, such as filters or tabs. If the approved implementation includes features like these, check their documented behaviour when the visitor goes back. Do not add new behaviour of this kind that the task does not require.

### Respect external-action boundaries

Opening a destination does not give you permission to submit information there.

Do not send messages, make calls, create bookings or submit forms unless the task includes the authorisation and test arrangements to do so. Record any check you had to stop short.

## 8. Ask Claude for a navigation review

```text
Review the implemented page connections and selected
visitor journeys against the approved references.

Inspect:
- Relevant project instructions.
- Approved IA, navigation specification and visitor flows.
- Implemented routes and navigation components.
- CTA destinations and outstanding dependencies.

Check:
- Labels, order and destinations.
- Header, mobile menu and footer consistency.
- Current-page states where specified.
- Required entry points to internal pages.
- Contextual links and in-page anchors.
- The selected journeys at the required layouts.
- Relevant keyboard and browser history behaviour.

For each finding, report:
1. Location and reproduction steps.
2. Expected result and supporting reference.
3. Actual result.
4. Evidence.
5. Affected links, components or journeys.

Distinguish confirmed defects from missing decisions.
State which browser checks were actually performed.

Review only. Do not edit files, commit, push or deploy.
Do not submit forms, send messages or make bookings.

Scope and references:
[Insert routes, journey IDs and exact references.]
```

Check the findings yourself before asking for corrections.

## 9. Correct issues without restructuring the website

Typical corrections include:

- Restoring an approved link label.
- Correcting a route.
- Fixing an anchor link’s target.
- Adding a missing approved entry link.
- Correcting the current-page indicator.
- Repairing the mobile menu’s behaviour.

Do not reorganise the IA because a journey feels inconvenient to you. If the approved flow itself looks like a problem, record the concern separately for review.

### Correction prompt

```text
Correct the verified navigation findings listed below.

- Follow the approved IA and navigation specification.
- Preserve approved labels unless the finding restores them.
- Reuse the existing routing and navigation approach.
- Update shared navigation sources where appropriate.
- Preserve unrelated page content and behaviour.
- Do not substitute unfinished destinations with unrelated pages.

After editing:
- Repeat each failed link or journey check.
- Check other usages affected by shared changes.
- Verify relevant desktop and mobile navigation.
- Run applicable documented project checks.
- Report results and remaining dependencies.

Do not commit, push, deploy or trigger external transactions.

Verified findings:
[Insert findings and supporting references.]
```

Fixing one shared destination may correct several links at once. Retest each affected entry point rather than assuming they all updated correctly.

## 10. Practical exercise

**Task: Check the connections between the homepage and the implemented internal pages.**

1. Create the navigation inventory.
2. Compare the routes with the required entry points.
3. Select the applicable approved visitor journeys.
4. Test individual links and complete journeys.
5. Record defects and the limits of your checks.
6. Ask Claude to correct the verified issues.
7. Retest failed checks and the affected shared navigation.
8. Update the findings and dependency records.

If a journey ends at an unfinished page, record exactly how far it got and what is missing. Do not mark the whole journey as passed.

## 11. Expected submission

Submit:

- The navigation inventory.
- The selected journey specifications.
- The browsers and input methods used.
- Link and journey results.
- Evidence for findings and corrections.
- A summary of changed files.
- Regression and project check results.
- Outstanding destinations, decisions and verification limits.

## 12. Completion criteria

The lesson is complete when:

- Implemented connections match the approved IA and navigation requirements.
- Pages have their required entry points.
- The selected visitor journeys have been tested.
- Shared navigation behaves consistently across the relevant layouts.
- Verified defects have been corrected and retested.
- Incomplete journeys and external-action limits remain visible.
- The results are ready for supervisor review.

## 13. Knowledge check

1. How does testing a complete journey differ from checking one link?
2. Why does a page that opens directly still need its approved entry points?
3. Must every internal page appear in the main navigation?
4. What should you do if the approved visitor flow seems to need restructuring?
5. How should you report a journey that stops at an unfinished page?


---

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


---

# Lesson 7.1: Defining Forms and Interactive Features

### Learning objective

By the end of this lesson, you should be able to:

- Identify the interactive features included in the approved scope.
- Describe how each feature behaves, not only how it looks.
- Define form fields, validation rules and feedback messages.
- Tell a visual prototype apart from a feature connected to a real service.
- Prepare a bounded implementation task with suitable checks.

**Prerequisites:** Complete Unit 6 and have its review decision recorded.

**Required materials:** Approved requirements, interaction designs, visitor flows, the architecture document, existing components and integration decisions.

## 1. Identify what needs to work

An **interactive feature** responds when a visitor does something, such as clicking, typing or choosing an option. Depending on the approved project, these might include:

- Contact forms.
- Appointment request forms.
- **Accordions**, where each heading opens or closes a panel of content, often used for frequently asked questions.
- **Tabs**, where visitors switch between panels of related content.
- Search or filtering.
- Booking links or booking tools embedded from another service.

Build only the features included in the approved scope.

A picture of a feature is not enough to build it. Its requirements must say what happens when someone uses it.

| Feature | Behaviour to establish |
|---|---|
| Accordion | How panels open and close, and how they respond to the keyboard |
| Tabs | How visitors choose a panel, and how each tab is linked to its content |
| Filter | Which results change, and how choices are cleared |
| Form | Which fields are required, how sending works and what messages appear |
| Booking connection | Which service opens or receives information |

**A control can look finished while doing nothing at all.**

## 2. Check what already exists

Before specifying new work, check:

1. The relevant page and components.
2. Any interactive behaviour already built.
3. Installed **libraries**, which are packages of ready-made code, and the patterns the project already uses.
4. Any **backend** routes or service connections. The backend is the part of a website that runs on a server rather than in the visitor’s browser.
5. The configuration the project needs.
6. Existing tests and outstanding findings.
7. Current Git changes.

Never assume that a visible form is connected to anything.

Ask Claude to report separately:

- What the interface shows.
- What the browser checks.
- What happens when the form is sent.
- Where the information goes.
- What evidence confirms the result.

Where configuration matters, ask Claude to report the names of settings only. It should never print passwords, keys or other secret values.

## 3. Separate interface behaviour from integration

An **integration** is a connection between the website and another system, such as an email service or a booking platform.

A form usually has five parts:

| Part | Responsibility |
|---|---|
| **Interface** | Shows the fields, instructions and controls |
| **Validation** | Checks what the visitor entered against the agreed rules |
| **Submission handling** | Processes an attempt to send the form |
| **Destination** | Receives or stores the information |
| **Feedback** | Tells the visitor what happened |

These parts can be built at different times, but their status must always be clear.

### Example

A form may display correctly and show errors for missing fields while its destination is not yet set up. That shows progress on the interface and validation. It does not show that any message can be delivered.

Never show a success message just because the visitor pressed Submit. That tells the visitor something that may not be true.

If the task is a **prototype**, a working model built to show how something will behave, define exactly how it simulates the result. Make sure nobody can mistake it for a real, working form.

## 4. Specify the form fields

For each approved field, record:

| Field property | What to define |
|---|---|
| Label | The visible wording |
| Purpose | Why the information is needed |
| Input type | The right kind of control, such as a text box, email field or drop-down list |
| Requirement | Required or optional |
| Allowed values | Permitted choices or format rules |
| Help text | Instructions the visitor needs before filling it in |
| Error message | Clear wording for missing or invalid input |
| Destination mapping | Where the submitted value goes in the receiving system |

Use the approved list of fields. Do not collect extra information because it might be useful later. Every extra field is more personal data to protect.

### Illustrative field specification

| Field | Requirement | Validation | Error message |
|---|---|---|---|
| Name | Required | Must not be empty | Enter your name |
| Email address | Required | Must pass the agreed email format check | Enter a valid email address |
| Message | Required | Must meet the agreed length limits | Enter your message |

These are examples, not a required form.

Avoid strict rules about names, telephone numbers or addresses unless the requirements justify them. Real names and numbers vary much more than people expect, and an over-strict rule can block genuine visitors.

## 5. Define states and transitions

A **state** is the condition a feature is in at a given moment, such as “sending” or “failed”. A **transition** is the change from one state to another.

For a form, describe what visitors see before, during and after sending it:

| State | Expected behaviour |
|---|---|
| Initial | The fields and instructions are available |
| Invalid input | Errors explain what needs correcting |
| Submitting | Progress is shown, and repeated clicks are handled |
| Successful submission | The message reflects the confirmed outcome |
| Failed submission | A useful error appears, and the visitor can try again |
| Destination unavailable | The agreed fallback or failure message appears |

Also decide what happens to the visitor’s entries after success or failure. For example:

- Should their entries stay in the form after a failed attempt?
- When should the form be cleared?
- Where should keyboard focus move when validation fails?
- How should messages be announced to **assistive technology**, such as screen readers used by people who are blind or partially sighted?

Follow the project’s existing conventions where they already answer these questions.

Do not add automatic retrying without considering whether the first attempt may already have reached its destination. Otherwise one enquiry could arrive twice.

## 6. Establish integration prerequisites

Before planning a connected form, confirm:

- The approved receiving service.
- The **endpoint**, which is the web address that receives the submitted information, or the supported way of connecting to the service.
- Which form field goes where in the receiving system.
- The test environment to use.
- Who supplies the configuration.
- How successful receipt will be checked.
- Which notifications or other side effects a submission causes.
- Whether test submissions are authorised.

A success response on your own computer and a message actually received are different pieces of evidence.

### Record missing dependencies

| Dependency | Effect | Work that can still go ahead |
|---|---|---|
| Destination not confirmed | Connected sending is blocked | The approved interface and local validation |
| Test credentials unavailable | Integration testing is blocked | Unrelated component work |
| Error behaviour not specified | The affected messages are blocked | The other specified states |
| Notification recipient not confirmed | Delivery setup is blocked | Field and layout work |

Pause only the parts that are blocked.

Never substitute your personal inbox, a live production service or a made-up endpoint to make the feature look complete.

## 7. Define accessible interaction

Use the project’s accessibility requirements and existing components.

For forms, check that the specification covers:

- Visible labels connected to their fields in the code.
- Instructions explaining which fields are required.
- Error messages connected to the fields they describe.
- Full keyboard access.
- Visible focus.
- Suitable announcements of messages for screen reader users.
- Loading and disabled states that are still understandable.

**Placeholder text**, the faint example text inside an empty field, must not replace a label. It disappears as soon as the visitor starts typing, and it is often too faint to read.

For other controls, establish the expected interaction pattern. Accordions and tabs, for example, are built differently and respond to different keys.

Prefer a suitable existing component over building a new interaction system from scratch.

## 8. Match criteria to evidence

Write acceptance criteria for the selected feature, each with a matching check.

| Acceptance criterion | Suitable verification |
|---|---|
| The approved fields and labels appear | Compare the rendered form with its specification |
| Missing required input stops the form being sent | Try sending with required fields empty |
| Errors identify the affected fields | Check the messages and how they are connected to the fields |
| Keyboard users can complete the form | Complete it using only the keyboard |
| A failed attempt keeps the agreed entries | Use an approved way of simulating a failure |
| Success appears only after the defined confirmation | Check how the response is handled, and the approved integration result |

Do not send a real submission just to complete a planning exercise.

Note where a controlled test, or an authorised action outside the website, will be needed later.

## 9. Ask Claude to prepare the implementation plan

```text
Inspect and plan the selected interactive feature.

Read:
- Relevant project instructions.
- Approved requirements and interaction references.
- Existing components and related behaviour.
- Architecture and integration decisions.
- Applicable project checks.

Return:
1. What currently works, with supporting evidence.
2. Interface behaviour and external integration status separately.
3. Required fields or controls.
4. States, transitions and validation rules.
5. Accessibility behaviour.
6. Missing decisions and affected scope.
7. Proposed implementation steps and likely files.
8. Acceptance criteria with matching verification methods.
9. Tests requiring external actions or controlled environments.

Reuse established components and conventions.
Do not invent fields, recipients, endpoints or credentials.
Do not present simulated success as confirmed delivery.

Plan only. Do not edit files, install dependencies,
submit information, commit, push or deploy.

Selected feature:
[Insert the approved feature and task.]

References:
[Insert exact reference locations.]
```

Review the plan against the approved requirements. Resolve any decisions that materially affect the work before authorising it.

## 10. Practical exercise

**Task: Prepare one interactive feature for implementation.**

1. Select an approved feature.
2. Inspect how it currently works, if at all.
3. Define its controls, states and expected behaviour.
4. Identify any external destination and side effects.
5. Record prerequisites and missing decisions.
6. Write acceptance criteria and checks.
7. Ask Claude for a plan.
8. Review and correct the plan.

If the project has no form, use another approved interactive feature. Do not add a form just for this exercise.

## 11. Expected submission

Submit:

- The selected feature and task ID.
- Your findings on its current state.
- The field or control specification.
- The state and message requirements.
- Integration dependencies, where relevant.
- Acceptance criteria and their checks.
- Claude’s plan and your corrections.
- The task’s readiness status.

## 12. Completion criteria

The lesson is complete when:

- The selected feature has a defined purpose and scope.
- Its behaviour is specified, not just its appearance.
- Required states and validation rules are clear.
- Interface progress is kept separate from integration readiness.
- Accessibility requirements are included.
- Actions outside the website and test arrangements are identified.
- The plan is ready for review, with unresolved dependencies visible.

## 13. Knowledge check

1. Why does a visible form not prove that sending works?
2. How does the website handling a request differ from the destination confirming receipt?
3. Why should failure and recovery states be specified before building?
4. What work can go ahead when the integration configuration is unavailable?
5. Why must a simulated success never be mistaken for a connected form?


---

# Lesson 7.2: Implementing and Testing Interactive Behaviour

### Learning objective

By the end of this lesson, you should be able to:

- Build an interactive feature from its reviewed specification.
- Check its normal, invalid, loading and failure states, where they apply.
- Check keyboard behaviour and accessible messages.
- Test connections to other services within the agreed environment and permissions.
- Report exactly what works and what has not yet been confirmed.

**Prerequisites:** Complete Lesson 7.1 and have a task that is ready for implementation.

**Required materials:** The reviewed feature specification, approved interaction design, implementation plan, existing components and agreed test arrangements.

## 1. Confirm what you are authorised to build

Start with the task prepared in Lesson 7.1, and confirm which of these levels it covers:

| Scope | Expected outcome |
|---|---|
| Interface only | The approved controls and their appearance |
| Local interaction | Working states and behaviour inside the browser |
| Connected integration | Information reaches the approved service |
| End-to-end verification | The whole flow is confirmed, from the visitor’s action to the final destination |

One task can cover several levels, but its boundaries must be stated.

**Building the interface does not prove the whole feature works.**

If an integration is still blocked, build the parts that are authorised and report the limits clearly.

## 2. Recheck the project before editing

At the terminal command prompt, confirm the project location and working state:

```bash
pwd
```

```bash
git status --short
```

Then inspect:

- The selected component and its styles.
- Changes made since planning.
- Existing **utilities**, small shared pieces of code that do one job, and interaction components.
- The names of any required configuration settings.
- The project’s documented scripts.
- Outstanding prerequisites.

Do not overwrite changes you do not recognise.

If the code has changed since the plan was reviewed, check whether the plan still applies before continuing.

## 3. Build the smallest complete behaviour

Follow the reviewed specification and the project’s conventions.

For an accordion, this might mean:

- The approved trigger and panel.
- Opening and closing.
- Correct information about whether each panel is open, available to assistive technology.
- Keyboard operation.
- The specified rule for whether several panels can be open at once.

For a form, it might mean:

- The approved fields and labels.
- Validation.
- Submission handling.
- A message while sending is in progress.
- Success and failure messages.
- A connection to the receiving service, only where authorised and configured.

Do not add extra controls or features while building.

### Keep links and buttons distinct

Use:

- Links to go somewhere.
- Buttons to do something.
- Proper form controls to collect information.

Do not make a plain block of text clickable when a standard element already provides the right behaviour. Standard elements work with the keyboard and assistive technology automatically. Clickable text usually does not.

## 4. Put validation where it belongs

Checking a form in the browser helps visitors fix mistakes before sending.

The receiving system must also check what it receives. Browser checks can be bypassed easily, for example by someone sending information directly to the endpoint.

Within the approved architecture, decide which part handles each rule:

| Validation area | Example responsibility |
|---|---|
| Required input | Identify missing information |
| Format | Check the agreed structure, such as an email address |
| Allowed values | Reject anything outside the permitted choices |
| Length or size | Enforce the agreed limits |
| Submission rules | Apply the receiving system’s own requirements |

TypeScript checks your code while you write it. It does not check information that arrives while the website is running, which developers call **runtime**. A TypeScript type saying a field is an email address does not make the visitor’s entry a valid email address. Real validation code is still needed.

Keep error messages clear and consistent with the approved wording.

## 5. Show messages that match what actually happened

Feedback should only tell the visitor what the system actually knows.

| Situation | Appropriate message |
|---|---|
| Input is invalid | Explain what needs correcting |
| Sending is in progress | Show that sending is under way |
| The service confirms it accepted the request | Show the specified confirmation |
| The request fails | Explain the failure and what the visitor can do next |
| The outcome is uncertain | Follow the agreed recovery behaviour, without claiming success |

For example, a service accepting an appointment request is not the same as an appointment being confirmed. Use the approved wording that makes this difference clear to the visitor.

### Keep the visitor’s entries appropriately

Follow the specification on keeping or clearing what the visitor typed.

If the agreed behaviour is to keep entries after a failure, a failed request must not wipe them.

Do not automatically resend after an uncertain outcome unless the integration can safely handle duplicates.

## 6. Test the defined states

Write a state checklist before testing. For a form, it might include:

| Test case | Expected result |
|---|---|
| Send with required fields empty | The relevant errors appear |
| Enter an invalid value | The specified validation identifies it |
| Correct the invalid value | The error updates as specified |
| Send valid test information | The approved sending process begins |
| Press Submit several times quickly | Repeated attempts are handled as specified |
| Simulate a failure | The failure message and recovery work correctly |
| Complete an authorised successful test | The confirmation matches the verified outcome |

Use **synthetic** test information, which is made-up data that belongs to no real person. Never use real customer or patient details in a practice exercise.

For an accordion, tabs or a filter, use the states and transitions defined for that feature in Lesson 7.1 instead. Do not force every feature into a form checklist.

## 7. Check keyboard behaviour and messages

Use the feature with the keyboard only. Confirm that:

- Every relevant control can be reached.
- Focus is clearly visible.
- Controls respond to the expected keys.
- Focus moves, or stays, as the interaction specifies.
- There is no **keyboard trap**, where focus enters a component and cannot leave it.
- Errors and status messages are connected to the right fields and announced as required.

For forms, inspect how labels and errors are connected in the code, not only how they look.

A keyboard check does not prove that a screen reader announces messages correctly. Record which accessibility checks you actually performed. Lesson 8.3 covers a fuller accessibility review.

## 8. Test integrations in the agreed environment

Before sending any test submission, confirm the test arrangements agreed in Lesson 7.1:

- The endpoint or service.
- The environment.
- The test information.
- The recipient or destination.
- How receipt will be checked.

If the task authorises the test and its side effects, go ahead within that scope.

If a test would trigger an action outside what is authorised, leave it pending and name the specific action that needs a decision.

### Check each stage separately

When a form is sent, the browser makes a **request** to the endpoint, and the endpoint sends back a **response** saying what happened.

| Stage | Evidence |
|---|---|
| The browser sends the request | The request shown in the browser’s developer tools |
| The application handles the request | The response, or the application’s own output with personal data removed |
| The receiving service accepts it | The service’s response or a test record |
| The destination receives it | A confirmed record, an email in the test inbox or similar |
| The visitor sees an accurate message | Observation in the browser |

One stage succeeding does not prove the others did.

Keep credentials and submitted personal information out of screenshots and reports.

## 9. Direct Claude to build the feature

```text
Implement the selected interactive feature according to
the reviewed task, specification and plan.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect changes made since planning.
- Confirm prerequisites and the authorised integration scope.

During implementation:
- Reuse established components and project conventions.
- Implement the approved controls, states and transitions.
- Preserve approved wording and interaction design.
- Apply validation at the appropriate layers.
- Ensure feedback reflects the actual confirmed outcome.
- Follow the specified keyboard and focus behaviour.
- Keep credentials out of browser-delivered code and reports.

Verification:
- Test the applicable normal, invalid, loading and failure states.
- Check keyboard behaviour and accessibility associations.
- Use synthetic information.
- Perform external tests only within the agreed authority
  and test arrangements.
- Recheck affected shared usages.
- Run applicable documented project checks.

Report:
- Files changed and why.
- States and criteria verified.
- Integration stages actually confirmed.
- Checks not performed and their reasons.
- Remaining findings and dependencies.

Do not add unrelated features, commit, push or deploy.

Task and reviewed plan:
[Insert the task.]

References and test arrangements:
[Insert exact references.]
```

## 10. Review and retest the changes

Inspect the changed files and the behaviour in the browser. Look for:

- Unrelated edits.
- Unexpected new packages.
- Made-up success responses.
- Missing failure handling.
- Fields sent to the wrong place in the receiving system.
- Secret configuration that would reach the visitor’s browser.
- Shared changes that affect other components.

Ask Claude to explain any implementation choice you do not understand.

After any correction:

1. Repeat the check that originally failed.
2. Check the affected states and shared usages.
3. Run the relevant project checks.
4. Update the finding’s status.

Do not mark a feature complete while any required state is untested.

## 11. Practical exercise

**Task: Build and check the feature planned in Lesson 7.1.**

1. Confirm the authorised scope.
2. Ask Claude to build the reviewed plan.
3. Inspect the changed files.
4. Test the defined states.
5. Check keyboard behaviour and messages.
6. Run authorised integration tests, where they apply.
7. Correct verified defects.
8. Retest and record the results.

If connected testing is blocked, submit the parts you checked locally and state exactly what has not been confirmed.

## 12. Expected submission

Submit:

- The task ID and implementation prompt.
- A summary of changed files.
- State and acceptance criteria results.
- Keyboard and accessibility check results.
- Integration evidence, where relevant.
- Screenshots or test output, with personal data removed.
- Project check results.
- Outstanding findings and the limits of your checks.

## 13. Completion criteria

The lesson is complete when:

- The authorised scope of the feature is built.
- Required states and transitions have been checked.
- Validation and messages follow the specification.
- Keyboard behaviour has been checked.
- Integration claims match the available evidence.
- Affected shared usages have been rechecked.
- Remaining dependencies and unperformed checks are visible.
- The feature is ready for supervisor review.

## 14. Knowledge check

1. Why does a TypeScript type not check information that arrives at runtime?
2. How should a success message relate to the receiving system’s response?
3. Why should you test pressing Submit several times?
4. What evidence separates the website handling a request from the destination receiving it?
5. How should you report a feature that works locally while connected testing is blocked?


---

# Lesson 7.3: Debugging Interactive Features and Handling Failures

### Learning objective

By the end of this lesson, you should be able to:

- Reproduce an interactive defect reliably.
- Use the browser’s developer tools to collect relevant evidence.
- Tell interface, request and integration failures apart.
- Give Claude a focused investigation task.
- Check a correction and the way the feature recovers from failure.

**Prerequisites:** Complete Lesson 7.2 and have an implemented feature running locally.

**Required materials:** The feature specification, acceptance criteria, implementation, test arrangements and outstanding findings.

## 1. Start with what you observed

**Debugging** means investigating why a feature behaves differently from what was expected.

Start with what you saw happen, not with a guess at the fix.

| Jumping to a conclusion | Useful observation |
|---|---|
| The API is broken | Sending valid test information shows an error |
| The button needs replacing | Pressing the button does not produce the specified response |
| The database lost the submission | The expected test record cannot be found |
| The page needs refreshing | The loading indicator stays visible after the request finishes |

An **API**, or application programming interface, is a defined way for one piece of software to send requests to another.

The observation records what happened. The investigation finds out why.

**Do not ask Claude to change code because of a cause you have only assumed.**

## 2. Write steps someone else can repeat

A useful **defect report** lets another person reproduce the problem.

| Field | What to include |
|---|---|
| Location | The page and feature |
| Implementation state | Branch, commit and any relevant uncommitted changes |
| Environment | Your computer, or the approved test environment |
| Starting state | Conditions before the interaction |
| Steps | The exact actions taken |
| Expected result | What the specification says should happen |
| Actual result | What happened instead |
| Frequency | Every time, or only sometimes |
| Evidence | A screenshot, the relevant error or request details with personal data removed |

Use synthetic information.

### Example

> Open the contact page locally. Leave the required email field empty and press Submit. The specification requires an error message connected to the email field. No message appears, and keyboard focus stays on Submit. This happens on every attempt.

This report does not guess whether the cause is the validation, the display of the error or the handling of focus. It leaves that for the investigation.

## 3. Confirm the problem before investigating

Repeat the steps under the recorded conditions, and check whether:

- The right version of the code is running.
- The expected configuration is available.
- The browser has loaded the latest changes, rather than an old copy.
- The starting state matches the report.
- Earlier test data is affecting the result.
- The problem only happens at a certain screen size or in a certain state.

If you cannot reproduce the problem, record that, together with the conditions you tried.

An **intermittent** problem happens only some of the time. Do not close it just because one attempt worked.

Change one condition at a time. If you change several at once, you will not know which one made the difference.

## 4. Use browser tools for focused evidence

Browser **developer tools** are built into Chrome, Edge, Firefox and Safari. They show what is happening behind the page. Open them from the browser menu or with the browser’s documented keyboard shortcut.

| Panel | Useful evidence |
|---|---|
| **Console** | Errors and warnings produced by the page’s code while it runs |
| **Network** | Requests the page makes, their responses, timing and failed downloads |
| **Elements** | The page’s actual structure, attributes and styles |
| **Accessibility** | The names, roles and states that assistive technology receives |

Collect only the information relevant to the defect you are investigating.

### Console checks

Look for errors that appear when you reproduce the problem. Record the message and, where shown, the file and line it points to.

A warning in the console is not automatically the cause. Explain how the evidence connects to the failure you observed.

### Network checks

For a feature that sends a request:

1. Open the **Network** panel.
2. Reproduce the problem within the authorised test arrangements.
3. Find the relevant request in the list.
4. Inspect its method, destination, **status code** and response.
5. Compare what you see with the integration requirements.

A status code is a number the server returns to summarise the result. Codes in the 200s usually mean success, the 400s usually mean a problem with the request, and the 500s usually mean a problem on the server.

A request also carries **headers**, extra information about the request, and a **payload**, the information being sent. Both can contain credentials or personal information. Never share them in full. Remove sensitive values before including them in evidence.

## 5. Find the stage that fails

Trace the interaction through the stages that actually exist. For a form:

| Stage | Investigation question |
|---|---|
| Input | Does the field hold the value the visitor entered? |
| Validation | Does the right rule run and report its result? |
| Submission handling | Does the sending process start? |
| Request | Is a request sent to the approved destination? |
| Application handling | Does the application accept and process it as specified? |
| Receiving service | Does the service confirm the expected outcome? |
| Feedback | Does the page show an accurate message about that outcome? |

Only claim certainty as far as your evidence goes. For example, if no request was ever sent, checking the inbox will not explain anything.

For an accordion or tabs, trace the visitor’s action, the change of state and what the page shows instead.

## 6. Separate symptoms from causes

A **symptom** is something you can see going wrong. A **cause** is the reason behind it.

One defect can cause several symptoms. For example:

- A request fails.
- The loading indicator stays visible.
- The Submit button stays disabled.

The failed request and the missing recovery may need separate fixes.

Equally, several reported problems may share one cause.

A **hypothesis** is a proposed explanation that has not yet been confirmed. Ask Claude to explain:

1. Which evidence supports the proposed cause.
2. Which symptoms it explains.
3. What remains uncertain.
4. Which check would confirm or rule out the explanation.

Do not accept an explanation such as “probably a state issue” as a confirmed diagnosis.

## 7. Give Claude an investigation-only task

```text
Investigate the reported interactive defect.

Before investigating:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the feature specification and relevant implementation.
- Check the authorised test environment and external-action limits.

Investigate:
- Reproduce the reported behaviour where possible.
- Trace the interaction through the relevant stages.
- Inspect focused browser or application evidence.
- Distinguish observed facts from hypotheses.
- Identify related usages that may be affected.

Return:
1. Reproduction result and conditions.
2. Expected and actual behaviour.
3. Evidence collected.
4. Confirmed cause, or ranked hypotheses if unconfirmed.
5. Smallest suitable correction.
6. Affected files and related behaviour.
7. Verification needed after correction.

Do not edit files, install dependencies, commit, push or deploy.
Do not trigger external actions outside the agreed test scope.
Do not expose credentials or personal information.

Defect:
[Insert the reproducible report.]

References:
[Insert exact references and test arrangements.]
```

Review the diagnosis before authorising a correction.

If further testing needs an environment or configuration that is not available, record the dependency. Do not invent a result.

## 8. Correct the cause and the recovery

A good correction fixes the confirmed defect and keeps the approved behaviour.

For failure handling, check that the page:

- Stops showing progress at the right moment.
- Shows the specified error.
- Keeps the visitor’s entries, as agreed.
- Offers the permitted way to try again.
- Does not claim an outcome it cannot confirm.

Do not add automatic retrying just to make failures less visible.

### Correction prompt

```text
Correct the verified defect using the reviewed diagnosis.

- Address the confirmed cause.
- Preserve approved content and interaction behaviour.
- Follow existing project conventions.
- Include the specified failure and recovery behaviour.
- Keep changes within the defect and necessary supporting files.
- Avoid unrelated refactoring or new dependencies.

After editing:
- Repeat the original reproduction steps.
- Verify the expected result.
- Check relevant success, failure and recovery states.
- Recheck affected shared usages.
- Run applicable documented project checks.
- Report evidence and remaining limitations.

Do not commit, push or deploy.
Perform external tests only within existing authorisation.

Verified diagnosis:
[Insert diagnosis and evidence.]

Acceptance criteria:
[Insert the required outcomes.]
```

## 9. Test the recovery as well as the failure

Showing an error is only half of handling a failure. Check what the visitor can do next.

| Scenario | Recovery check |
|---|---|
| Required input is missing | The visitor can fill in the field and continue |
| Sending fails before the service accepts it | The agreed entries are kept and the permitted retry works |
| The outcome is uncertain | The message follows the specified next step and does not encourage an unsafe duplicate |
| A filter finds no results | The visitor can clear or change their choice |
| An image fails to load | The required information still makes sense, as agreed |

Use a controlled way of simulating failure where one is available.

Never deliberately disrupt a live service to create a failure.

## 10. Record the resolution

Update the finding with:

- The confirmed cause.
- The correction made.
- The files changed.
- The checks repeated.
- The evidence.
- Any remaining limits.

Use the existing finding statuses:

- **Open**
- **Corrected, awaiting verification**
- **Verified**
- **Awaiting decision**

If the investigation uncovers a separate problem, record it as a new, linked finding. Do not quietly expand the original task.

## 11. Practical exercise

**Task: Investigate and resolve one interactive defect.**

1. Select an existing verified finding.
2. Write steps that reproduce it.
3. Collect focused evidence.
4. Ask Claude to investigate without editing.
5. Review the diagnosis.
6. Authorise a bounded correction.
7. Retest the original problem and the relevant recovery.
8. Update the finding.

If there is no defect, use an exercise your supervisor provides or an approved local failure simulation. Never introduce a defect into shared or live work to complete the lesson.

## 12. Expected submission

Submit:

- The defect report.
- The reproduction conditions and results.
- Relevant evidence, with sensitive values removed.
- Claude’s diagnosis and your review of it.
- The correction task.
- A summary of changed files.
- Retest and recovery results.
- The updated finding status.

## 13. Completion criteria

The lesson is complete when:

- The problem is described through what can be observed.
- The evidence supports the diagnosis.
- The correction stays within the authorised scope.
- The original problem has been retested.
- The relevant failure and recovery behaviour has been checked.
- Affected usages and the project checks are covered.
- Uncertainty and remaining dependencies are reported accurately.

## 14. Knowledge check

1. Why should a defect report describe behaviour before proposing a fix?
2. What does a successful response in the browser fail to prove about delivery?
3. How can one failure produce several separate symptoms?
4. Why should recovery be tested after an error appears?
5. When can a corrected finding be marked verified?


---

# Lesson 7.4: Reviewing and Submitting Interactive Features

### Learning objective

By the end of this lesson, you should be able to:

- Review an interactive feature against its approved specification.
- Keep interface, integration and delivery evidence separate.
- Check that debugging changes have not broken existing behaviour.
- Prepare a clear handover for each feature.
- Record supervisor acceptance accurately and save the accepted work as a Git checkpoint.

**Prerequisites:** Complete Lessons 7.1 to 7.3.

**Required materials:** Feature specifications, implementation tasks, state checklists, integration evidence, debugging records and outstanding dependencies.

## 1. Define exactly what you are submitting

For each feature, record:

| Field | What to include |
|---|---|
| Feature | Its approved name and purpose |
| Location | The page, component or shared usages |
| Scope | Interface, local behaviour, integration or the whole end-to-end flow |
| References | The approved specification and design versions |
| Implementation state | Branch, commit and any relevant uncommitted changes |
| Test environment | Where the checks took place |
| Outstanding items | Dependencies, defects and checks not yet done |

**Accept a feature against a defined scope, not against a general claim that it “works”.**

For example, an accordion can be complete with no integration at all. A form connected to an email service needs evidence well beyond its appearance and local validation.

## 2. Compare with the approved list of features

Compare what has been built with the approved list of interactive features. Look for:

- Required features that are missing.
- Controls that look functional but do nothing.
- Features built beyond the approved scope.
- Temporary simulations still in place.
- Required states that have not been built.
- Integrations still waiting for configuration or testing.

### Example feature register

| Feature | Scope built | Verification status | Outstanding work |
|---|---|---|---|
| FAQ accordion | Approved local interaction | Verified | None identified |
| Contact form | Interface and validation | Verified locally | Connected sending blocked |
| Treatment filter | Approved filtering behaviour | Checks incomplete | Keyboard review outstanding |

Use the project’s actual features.

Do not hide an unfinished integration behind a single “Implemented” label.

## 3. Review the complete set of states

Bring together the requirements from Lesson 7.1 and the results from Lessons 7.2 and 7.3. For each state that applies, establish:

1. What should happen.
2. What has been built.
3. How it was checked.
4. Whether later changes affect that evidence.

| State or behaviour | Result | Evidence or limitation |
|---|---|---|
| Initial appearance | Passed / Failed / Not checked | Comparison with the reference |
| Valid interaction | Passed / Failed / Not checked | Observation in the browser |
| Invalid input | Passed / Failed / Not checked | Validation test |
| Loading | Passed / Failed / Not checked | Controlled request check |
| Success message | Passed / Failed / Not checked | Confirmed outcome |
| Failure message | Passed / Failed / Not checked | Approved failure simulation |
| Recovery | Passed / Failed / Not checked | Correction or retry check |
| Keyboard behaviour | Passed / Failed / Not checked | Recorded keyboard sequence |

Not every state applies to every feature. Use **Not applicable** with a reason. Do not invent a loading state for a simple interaction that has none.

## 4. Keep the integration evidence separate

For connected features, review each stage on its own:

| Stage | What the evidence shows |
|---|---|
| Request sent | The browser attempted the specified submission |
| Application response | The application handled the request in the way observed |
| Service acceptance | The receiving service accepted the request |
| Destination receipt | The expected record or message reached its destination |
| Visitor message | The page showed an accurate message about the confirmed outcome |

One stage succeeding does not prove the next.

### Example

> The application returned a successful response, but receipt at the destination has not been checked.

This is a valid, honest partial result. Do not rewrite it as:

> The message was delivered successfully.

If a stage falls outside the approved architecture or the agreed checks, explain that boundary rather than reporting it as a failure.

## 5. Check configuration and test boundaries

Confirm the feature uses the intended approach to **configuration**, the settings that tell the website how to connect to other services. Check whether:

- The names of required settings are documented.
- Test and live destinations can be told apart.
- Any temporary test behaviour is clearly identified.
- Missing configuration produces the agreed behaviour.
- Reports and screenshots contain no credentials or personal information.
- The receiving destination matches the approved integration decision.

Record each required setting by name and purpose. Never include secret values in the handover.

A pass on your computer, or in a test environment, does not prove that another environment is configured correctly.

Keep any checks after deployment separate, unless the task explicitly includes them.

## 6. Recheck the debugging changes

Use the findings resolved in Lesson 7.3 to decide which regression checks to run. Ask:

- Is the original problem still fixed?
- Do normal interactions still work?
- Does recovery still behave as specified?
- Did any shared change affect another page or feature?
- Is the earlier evidence still valid?

### Example

If a shared validation utility changed, find where it is used and repeat the checks it could affect.

If only one accordion’s approved text changed, retesting the whole form integration is unlikely to be relevant.

Match the checks to the changes. Do not repeat every test when valid evidence already covers the submitted version.

## 7. Prepare a feature acceptance matrix

Connect each acceptance criterion to its evidence.

| Criterion | Result | Evidence | Remaining action |
|---|---|---|---|
| Controls match the approved specification | Passed | Browser comparison | None |
| Keyboard interaction follows the agreed pattern | Passed | Recorded keyboard check | None |
| Invalid input produces connected error messages | Passed | Validation results | None |
| The approved destination receives test information | Not checked | Test configuration unavailable | Complete the authorised integration test |
| A failure keeps the agreed entries | Passed | Controlled failure check | None |

Use the actual criteria from the reviewed task. Keep separate:

- Confirmed defects.
- Missing dependencies.
- Checks not yet done.
- Optional improvements.

An optional suggestion must not quietly become a new acceptance requirement.

## 8. Ask Claude for a final feature review

```text
Review the selected interactive features for submission.

Read:
- Relevant project instructions.
- Approved feature specifications and interaction designs.
- Task acceptance criteria.
- Current implementation and Git working state.
- State checks, integration evidence and debugging records.
- Outstanding findings and dependencies.

Assess:
1. Whether the submitted scope is implemented.
2. Whether required states and transitions are covered.
3. Whether keyboard and feedback behaviour match the specification.
4. Whether integration claims match the available evidence.
5. Whether debugging changes have unresolved effects.
6. Whether temporary simulations or configuration gaps remain.
7. Which checks or decisions are still outstanding.

Return:
- Sources and implementation state actually inspected.
- Feature-by-feature readiness.
- Acceptance criteria with evidence and results.
- New or unresolved findings.
- Evidence affected by later changes.
- A readiness recommendation for the defined scope.

Review only. Do not edit files, install dependencies,
commit, push or deploy.

Do not submit information or trigger external actions
outside the existing test authorisation.

Do not treat your recommendation as supervisor acceptance.
State which browser and integration checks were actually performed.

Submission scope and references:
[Insert features, task IDs and exact references.]
```

Confirm any new findings yourself before creating correction tasks.

## 9. Prepare the handover

The handover should let the supervisor review each feature without having to piece together its history.

| Item | Required information |
|---|---|
| Submitted features | Names, locations and scope |
| Reference baseline | The approved specifications followed |
| Implementation state | Version and any relevant uncommitted changes |
| Review access | The project’s existing instructions for opening and testing the feature |
| Verification | The acceptance matrix and supporting evidence |
| Integration status | The stages confirmed and the remaining limits |
| Outstanding work | Findings, dependencies and checks not yet done |
| Requested decision | The exact scope submitted for acceptance |

### Example readiness statement

> The contact form’s interface, validation and failure recovery are ready for review. Connected sending is still blocked by the missing test configuration. This submission makes no claim about delivery.

Use wording that matches the actual evidence. Do not call the whole form complete when only its local behaviour has been checked.

## 10. Record the supervisor’s decision

Leave the decision as **Awaiting review** until the supervisor responds. Then record:

- The reviewer and decision date.
- The implementation version reviewed.
- The features and scope accepted.
- Required corrections.
- Outstanding integration conditions.
- Follow-up tasks.

Acceptance can cover a whole feature or a clearly defined part of one. For example, accepting a form’s interface does not mean its untested delivery has been accepted.

Acceptance does not authorise deployment or further tests that involve outside services.

## 11. Save a Git checkpoint after acceptance

Once the supervisor accepts the features, or a defined part of them, save the accepted work as a Git checkpoint, following the steps in Lesson 4.4 and the project’s Git rules:

1. Run `git status` to see every change.
2. Stage only the files that belong to the accepted scope, using `git add` with each file path.
3. Check the staged changes with `git diff --staged`.
4. Make sure no environment file, credential or test data with personal information is staged.
5. Commit with a clear message that follows the project’s convention.
6. Add the commit identifier to the decision record.

If any temporary simulation is still in the code, say so in the commit message and the decision record, so nobody mistakes it for a finished integration.

## 12. Practical exercise

**Task: Submit the interactive features built in Unit 7.**

1. Complete the feature register.
2. Bring together the state and integration evidence.
3. Check the debugging corrections and the places they affect.
4. Complete the acceptance matrix.
5. Run the outstanding project checks.
6. Ask Claude for a final review.
7. Resolve verified defects within the authorised scope.
8. Prepare the handover.
9. Record the supervisor’s decision when it arrives.
10. After acceptance, save a Git checkpoint and record its identifier.

If connected testing is still blocked, submit the completed scope with a precise boundary.

## 13. Expected submission

Submit:

- The feature register.
- The state coverage results.
- The acceptance matrix.
- Integration evidence and its limits.
- Resolved and outstanding findings.
- Regression and project check results.
- Representative screenshots or test output, with personal data removed.
- The handover and the supervisor’s decision.
- The checkpoint commit identifier, once the work is accepted.

## 14. Completion criteria

The lesson is complete when:

- The scope of each submitted feature is clearly defined.
- Required behaviour has been reviewed against the specification.
- Integration claims are supported by the right evidence.
- Debugging changes have been checked for relevant regressions.
- Temporary behaviour and configuration gaps remain visible.
- The handover identifies the exact version being reviewed.
- The supervisor’s decision and follow-up work are recorded accurately.
- Accepted work is saved as a Git checkpoint, if the project rules allow.

## 15. Knowledge check

1. Why should accepting the interface be separate from accepting the integration?
2. What does the service accepting a request fail to prove about receipt at the destination?
3. When can earlier verification evidence be reused?
4. Why must temporary simulations stay visible in the submission?
5. How should you describe a feature that has only been partly checked?


---

# Lesson 8.1: Planning and Running a Website QA Review

### Learning objective

By the end of this lesson, you should be able to:

- Plan a quality assurance review across the whole implemented website.
- Choose checks based on the requirements, shared components and visitor journeys.
- Tell functional, visual, content and accessibility findings apart.
- Record defects that others can reproduce, with suitable priorities.
- Prepare bounded correction tasks without redesigning the site.

**Prerequisites:** Complete Unit 7 and have its review decision recorded.

**Required materials:** Approved requirements, IA, designs, content, the implemented website, acceptance records and outstanding findings.

## 1. Move from individual submissions to the whole website

Earlier units reviewed pages and features one at a time. **Quality assurance (QA)** is a planned review that checks whether the whole website meets its requirements. A website-wide QA review checks whether all the parts work together within the agreed scope.

It can reveal problems such as:

- Different pages using shared styles inconsistently.
- Navigation behaving differently on different kinds of page.
- A shared correction causing a problem somewhere else.
- Temporary content left on a page that is rarely visited.
- A visitor journey that fails between pages that each work on their own.

**QA gives evidence about the version you reviewed. It cannot prove the website has no defects.**

This review is not approval to deploy, and it is not a chance to change the approved design.

## 2. Record what you are reviewing

Record the starting point before testing.

| Field | What to record |
|---|---|
| Scope | The pages, features and journeys included |
| Implementation | Branch, commit and any relevant uncommitted changes |
| Environment | Your computer or the approved test environment |
| References | The approved versions that apply |
| Browsers | The required browsers and their versions |
| Viewports | The required review sizes |
| Test data | The approved synthetic information |
| Known limitations | Missing configuration, assets or checks that cannot be done |

Every result must be traceable to the version you reviewed.

If the code changes during QA, record the change and work out which earlier results need repeating.

## 3. Build the QA plan from the requirements

Start from the registers you already have: the page completion register from Lesson 6.4, the feature register from Lesson 7.4 and the navigation inventory from Lesson 6.3.

Do not start from a generic checklist found elsewhere and assume it covers this project.

Organise the review into categories:

| Category | Example checks |
|---|---|
| **Structure and content** | Required pages, section order, approved wording and assets |
| **Visual presentation** | Typography, colours, spacing and shared components |
| **Navigation** | Destinations, current-page indicators and entry points |
| **Responsive behaviour** | Required widths, the layouts between them and text wrapping |
| **Interaction** | Controls, validation, messages and recovery |
| **Accessibility** | Keyboard use, labels, focus and content checks |
| **Technical behaviour** | Routes opening directly, files that fail to load and errors in the console |
| **Visitor journeys** | The approved sequences across pages and features |

Some requirements need a specialist, such as a full accessibility, security or legal review. Identify these separately. A general QA review must never be described as a complete specialist audit.

## 4. Decide what to check on every page

Some checks must be done on every page. Others only need checking where a shared piece of code is implemented.

| Check type | Coverage approach |
|---|---|
| Page title, heading and approved copy | Check every submitted page |
| Page-specific images and destinations | Check every page where they appear |
| Shared component behaviour | Check its code and a representative set of the places it is used |
| A page with its own unique layout | Check that page directly |
| A change to a shared style | Recheck the places it affects |
| An approved critical journey | Test the whole sequence |

**Sampling** means checking a representative selection instead of every instance. It is only appropriate when the selection genuinely supports the requirement you are assessing.

For example, checking the shared header once can support conclusions about every page that uses it. It does not prove that the treatment links on every page are correct, because those links differ from page to page.

Record what you covered, and its limits, in a **coverage matrix**: a table showing which checks were applied to which pages and features.

## 5. Write test cases others can follow

A **test case** describes one check precisely enough for another reviewer to repeat it.

| Field | Purpose |
|---|---|
| Test ID | Identifies the check |
| Requirement | The expected behaviour, and where it comes from |
| Preconditions | What must be true before starting |
| Steps | The actions to take |
| Expected result | What should happen |
| Conditions | Browser, viewport and input method |
| Result | Passed, Failed, Not checked or Not applicable |
| Evidence | What supports the recorded result |

### Example test case

**ID:** QA-NAV-01  
**Requirement:** The approved treatment card opens its matching detail page.

**Precondition:** The treatment listing page is available.

**Steps:**

1. Open the treatment listing.
2. Find the selected approved treatment.
3. Activate its link.
4. Check the address and the main heading of the page that opens.

**Expected result:** The correct treatment detail page opens and shows the matching approved heading.

Replace this example with real project requirements.

## 6. Prepare safe, repeatable test conditions

Use the agreed environment and test information. Before testing:

- Confirm which actions involving outside services are authorised.
- Identify any notifications or records a test would create.
- Use synthetic information.
- Set up the starting state for features that remember choices.
- Check whether records from earlier tests could affect the results.

Never enter real customer or patient information.

If a test needs a service that is not available, mark it **Not checked** and record the dependency.

Never test a simulation instead and report the connected flow as passed.

## 7. Run the checks in a useful order

Start with problems that would stop the rest of the review. A practical order is:

1. Confirm the site starts and the required routes open.
2. Check the shared navigation and the main page structure.
3. Test the approved critical journeys.
4. Check each page’s own content and destinations.
5. Review responsive and keyboard behaviour.
6. Check the relevant failure and recovery states.
7. Run any outstanding project checks.

If an early defect blocks later checks, record which checks it blocked. For example, a route that will not open stops its content review, but the other routes can still be checked.

Do not keep retesting a known failure unless something has changed or there is new evidence.

## 8. Record findings separately from test results

A **failed test** records what happened during one check. A **finding** describes the underlying problem that needs investigating or fixing. One finding may explain several failed tests.

| Finding field | What to include |
|---|---|
| ID | A unique reference |
| Location | The affected page, component or journey |
| Reproduction | Starting conditions and steps |
| Expected | The requirement and its source |
| Actual | What was observed |
| Evidence | A screenshot or output, with sensitive data removed |
| Impact | How the problem affects visitors or the requirements |
| Status | Its current resolution state |

Link all the related test IDs to one finding, rather than recording the same defect several times.

Keep suspected causes separate from confirmed causes.

## 9. Assign priority by impact

Use the project’s own priority scale if it has one. If not, propose a simple one:

| Priority | Typical effect |
|---|---|
| Blocks use | A required page or important action cannot be used |
| Major | Important information or behaviour differs significantly from the requirements |
| Minor | A small mismatch with limited practical effect |

Priority decides the order of corrections. It does not change whether a requirement is met.

Also classify each item:

- **Defect:** the implementation differs from a requirement.
- **Specification gap:** the expected behaviour is unclear.
- **Dependency:** a required material or service is unavailable.
- **Suggestion:** a proposed change outside the approved baseline.

Never turn a personal preference into a defect.

## 10. Ask Claude to help with the QA review

```text
Review the implemented website within the defined QA scope.

Before testing:
- Read the relevant project instructions.
- Confirm the implementation and Git working state.
- Inspect approved requirements and existing review records.
- Identify available browser tools and test arrangements.

Prepare and execute applicable checks for:
- Required pages and content.
- Shared visual consistency.
- Navigation and selected visitor journeys.
- Responsive behaviour.
- Approved interactive features.
- Relevant keyboard and accessibility requirements.
- Direct route loading and relevant runtime errors.

Use existing valid evidence where applicable.
State coverage, sampling and verification limits.
Use synthetic information.

Return:
1. Test coverage and conditions.
2. Checks actually performed and results.
3. Findings with reproduction steps and evidence.
4. Dependencies and unperformed checks.
5. Recommended correction order.

Review only. Do not edit files, install dependencies,
commit, push or deploy.

Perform external actions only within existing authorisation.
Do not claim a complete specialist audit.

Scope and references:
[Insert the QA scope, implementation and exact references.]
```

Check Claude’s evidence and classifications yourself before asking for any corrections.

## 11. Turn verified findings into correction tasks

Group findings that share a confirmed cause. For each correction task, define:

- The outcome.
- The findings it includes.
- The parts of the website affected.
- The approved references.
- The boundaries.
- Which checks to repeat afterwards.
- Which regression checks are relevant.

Never ask Claude to “fix everything” from an unreviewed list of findings. A broad correction can change so much that most of the evidence you have just collected no longer applies. Prefer proportionate corrections with clear checks.

Lesson 8.2 covers making and checking the corrections.

## 12. Practical exercise

**Task: Run a QA review across the implemented website.**

1. Define the scope and record the implementation version.
2. Create the coverage matrix.
3. Write test cases for the selected requirements.
4. Confirm the test arrangements.
5. Run the checks.
6. Record findings and dependencies.
7. Check Claude’s review results yourself.
8. Prepare prioritised correction tasks.

This lesson produces the QA record and a correction plan. Do not mark any finding resolved until its correction has been checked.

## 13. Expected submission

Submit:

- The QA scope and implementation state.
- The coverage matrix and test cases.
- Browser, viewport and test conditions.
- Results and supporting evidence.
- Combined findings with priorities.
- Checks not performed, and dependencies.
- Proposed correction tasks.

## 14. Completion criteria

The lesson is complete when:

- QA coverage follows the approved requirements.
- Results show exactly what was checked.
- Findings can be reproduced and are supported by evidence.
- Priorities reflect practical impact.
- Defects are kept separate from gaps, dependencies and suggestions.
- Outstanding work is organised into bounded correction tasks.
- The QA record is ready for supervisor review.

## 15. Knowledge check

1. Why is a website-wide review worthwhile after individual pages have been accepted?
2. Which checks need to be done on every page?
3. How does a failed test differ from a finding?
4. Why should the limits of sampling be recorded?
5. Why should correction tasks be prepared before asking Claude to fix the findings?


---

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


---

# Lesson 8.3: Running a Focused Accessibility Review

### Learning objective

By the end of this lesson, you should be able to:

- Confirm the accessibility requirement that applies to the website.
- Plan a focused review across representative pages, components and states.
- Check page structure, colour contrast, keyboard focus, zoom and reflow.
- Use automated scanners while recognising what they cannot detect.
- Record accessibility findings in the existing QA record without overstating coverage.

**Prerequisites:** Complete Lesson 8.2 and have the current QA record and correction statuses available.

**Required materials:** Approved accessibility requirement, approved designs and style guide, implemented website, QA record from Lessons 8.1 and 8.2, and earlier keyboard and form evidence from Units 5 to 7.

## 1. Bring the accessibility checks together

**Accessibility** means people can perceive, understand, navigate and operate the website, including people who use assistive technology such as screen readers, screen magnifiers, voice control or keyboard-only navigation.

Earlier lessons already included accessibility checks:

| Earlier lesson | Accessibility checks already practised |
|---|---|
| 4.3 | Links for navigation, buttons for actions, keyboard reach |
| 5.2 | Alternative text for images |
| 5.3 | Content order, visible focus, zoom behaviour |
| 6.3 | Current-page states without relying on colour alone |
| 7.1 to 7.3 | Labels, error associations, focus movement and feedback |

Those checks were tied to individual tasks. This lesson reviews the assembled website systematically and adds checks that have not yet been covered, especially colour contrast, page structure and reflow.

**A focused accessibility review produces evidence about selected checks. It is not a full conformance audit and it does not replace testing with disabled people.**

## 2. Confirm the requirement

Before checking anything, establish which standard the project uses.

Many projects adopt the **Web Content Accessibility Guidelines (WCAG)**, published by the World Wide Web Consortium (W3C). WCAG 2.2 is the current W3C Recommendation. Its requirements are called **success criteria**, grouped into Levels A, AA and AAA. Level AA is a common project target.

Check the approved PRD, working rules or brief for:

| Question | Why it matters |
|---|---|
| Which standard and level apply? | Determines what counts as a defect |
| Are any pages or features excluded? | Defines the review scope |
| Is a specialist audit planned? | Clarifies what this review does not cover |
| Are there legal or contractual obligations? | These need a supervisor or specialist decision |

If no requirement is recorded, do not choose one silently. Record a **specification gap**, propose a target such as WCAG 2.2 Level AA for review, and continue only with checks the supervisor agrees to.

Do not decide whether the business meets a legal obligation. Report what you checked.

## 3. Plan representative coverage

You do not need to test every success criterion on every page to produce useful evidence. You do need to state what you covered.

Select:

- Each distinct page layout or template.
- Each unique page that does not share a template.
- Each interactive feature from Unit 7, in its relevant states.
- The approved critical visitor journeys.
- The open mobile menu and any other overlays.

| Coverage item | Example selection |
|---|---|
| Templates | Homepage, one treatment detail page, one information page |
| Unique pages | Any page with its own layout |
| Components | Header, mobile menu, footer, cards, form |
| States | Menu open, form error, form success, focused controls |
| Journeys | The approved journeys already tested in Lesson 6.3 |

Use the actual pages and features in your project. Record the selection in the QA coverage matrix from Lesson 8.1 rather than creating a separate register.

### Reuse valid evidence

If an earlier keyboard or form check still applies to the current implementation, cite it. Repeat it only when later changes affected that component or page.

## 4. Check page structure

Screen reader users often move through a page by headings, landmarks and links. A clear structure helps them find information quickly.

Check each selected page for:

| Check | Expected result |
|---|---|
| Page title | Describes the page and differs between pages |
| Page language | The `lang` attribute on the `html` element matches the content language |
| Main heading | One clear main heading that names the page’s purpose |
| Heading order | Heading levels reflect the content hierarchy without skipping for visual effect |
| Landmarks | Header, navigation, main content and footer are identifiable |
| Skip link | Present and working if the project requires one |
| Link text | Each link’s purpose is clear from its text or its context |
| Lists and tables | Use list and table markup when the content is a list or a table |

A **landmark** is a region of the page that assistive technology can jump to, such as the main content or the site navigation. In HTML and TSX, elements such as `<header>`, `<nav>`, `<main>` and `<footer>` create landmarks.

### Illustrative layout structure

```tsx
import type { ReactNode } from "react";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header>
        <nav aria-label="Main">{/* Existing navigation */}</nav>
      </header>
      <main id="main-content">{children}</main>
      <footer>{/* Existing footer */}</footer>
    </>
  );
}
```

This example shows the structure to look for. It is not a requirement to restructure your layout. Inspect how the actual starter already provides these regions before proposing changes.

### How to inspect structure

1. Open the page in Chrome or Edge.
2. Open developer tools and select the **Elements** panel.
3. Inspect the `html` element for the `lang` attribute.
4. Locate the main heading and the landmark elements.
5. Use the accessibility pane, where available, to see each element’s role and accessible name.

Do not judge heading order by font size. A heading that looks small can still be a level 2 heading, and large text is not automatically a heading.

## 5. Check colour contrast

**Contrast ratio** compares the brightness of two colours, such as text and its background. Low contrast makes content hard to read for many people, including people with low vision.

WCAG 2.2 Level AA sets these minimums:

| Content | Minimum ratio | Success criterion |
|---|---|---|
| Normal text | 4.5:1 | 1.4.3 Contrast (Minimum) |
| Large text | 3:1 | 1.4.3 Contrast (Minimum) |
| Visual information needed to identify controls and their states, such as input borders and focus indicators | 3:1 against adjacent colours | 1.4.11 Non-text Contrast |
| Parts of graphics needed to understand the content | 3:1 against adjacent colours | 1.4.11 Non-text Contrast |

WCAG defines large text precisely. Use the definition in the W3C guidance rather than estimating by eye.

### How to check contrast

1. Inspect the text element in developer tools.
2. Select the colour value in the **Styles** pane. Chrome and Edge show a contrast ratio for text colours.
3. For text over an image or gradient, check the lowest-contrast area the text actually sits on, at each required viewport width.
4. Check hover, focus, visited and disabled states that the design specifies, but note that WCAG does not set a contrast requirement for inactive components.

Ratios are thresholds. A computed ratio of 4.49:1 does not meet 4.5:1.

### When the approved colours fail

The colours come from the approved design and style guide. If an approved combination fails the agreed requirement:

1. Record the finding with the measured ratio, location and colours.
2. Classify it as a conflict between two approved requirements.
3. Escalate it as a design decision.

Do not change brand colours yourself to pass a contrast check. Changing a shared colour value affects every page that uses it.

## 6. Check keyboard access and focus

Repeat keyboard checks across the assembled website, focusing on what has changed since Unit 7 and on areas never checked together.

Use the **Tab** key to move forwards, **Shift** and **Tab** to move backwards, **Enter** to follow links, and **Enter** or **Space** to activate buttons.

| Check | Expected result | Success criterion |
|---|---|---|
| Every control can be reached | Links, buttons and form controls receive focus | 2.1.1 Keyboard |
| Focus order makes sense | Focus follows the visual and reading order | 2.4.3 Focus Order |
| Focus is visible | A visible indicator shows where focus is | 2.4.7 Focus Visible |
| Focus is not hidden | A focused control is not entirely covered by a sticky header, cookie banner or other author-created content | 2.4.11 Focus Not Obscured (Minimum) |
| No keyboard trap | Focus can always move away from a component | 2.1.2 No Keyboard Trap |
| Pointer targets are usable | Targets are at least 24 by 24 CSS pixels, or meet the spacing or other exceptions in WCAG | 2.5.8 Target Size (Minimum) |

Focus Not Obscured and Target Size (Minimum) were added in WCAG 2.2. Sticky headers are a common cause of the first issue: as you tab down the page, a focused link may scroll underneath the header.

Measure target size in developer tools rather than estimating. Read the exceptions in the W3C Understanding document before recording a small inline text link as a defect.

## 7. Check zoom, text resizing and reflow

Some people enlarge content to read it.

| Check | How to test | Success criterion |
|---|---|---|
| Text resizing | Zoom the browser to 200% and confirm content and functions remain available | 1.4.4 Resize Text |
| Reflow | Set the browser to a width of 1280 CSS pixels and zoom to 400%, which gives a viewport equivalent to 320 CSS pixels wide | 1.4.10 Reflow |

At the reflow width, check that:

- Content can be read by scrolling vertically only.
- No information or control disappears.
- The mobile navigation remains usable.
- Sticky elements do not cover most of the screen.
- Long words, email addresses or links wrap rather than forcing horizontal scrolling.

Some content, such as a map or a data table, may need two-dimensional scrolling. WCAG allows exceptions for content that requires it. Record the exception and its reason rather than ignoring it.

Lesson 5.3 checked zoom on the homepage. Repeat the check on the other selected templates.

## 8. Recheck forms, feedback and motion

Use the evidence from Unit 7 and recheck only where later changes affected it.

For forms, confirm that:

- Each control has a visible label that is programmatically associated with it.
- Required fields are identified in text, not by colour alone.
- Errors identify the field and describe the problem.
- Status messages, such as a submission result, are announced or reachable as specified.

For moving content, check whether the site includes:

| Content | Requirement to check |
|---|---|
| Carousels or auto-advancing content | A way to pause, stop or hide it if it moves for more than five seconds (2.2.2 Pause, Stop, Hide) |
| Animation | Follows any approved reduced-motion requirement |
| Video or audio | Captions or alternatives as required by the approved scope |

Only check features that exist. Do not add a carousel, video or animation to complete the review.

## 9. Use automated scanners correctly

Automated scanners check pages against rules and report likely issues. Common options include:

- The **Accessibility** category in Lighthouse, available in Chrome developer tools.
- The axe DevTools browser extension.

Lighthouse’s accessibility checks are powered by the axe engine.

Automated tools are useful for finding issues such as missing labels, missing alternative text attributes, some contrast failures and invalid attribute values. They cannot judge many requirements, for example:

- Whether alternative text accurately describes the image.
- Whether a heading actually describes its section.
- Whether focus order makes sense.
- Whether an error message is understandable.
- Whether content over a photograph is readable everywhere the text falls.

**A clean automated scan means the tool found no issues it can detect. It does not mean the page is accessible.**

### How to run a Lighthouse accessibility scan

1. Open the page in Chrome.
2. Open developer tools and select the **Lighthouse** panel.
3. Under categories, select **Accessibility**. You may deselect the others for speed.
4. Select the device type to match the review conditions.
5. Run the analysis.
6. Open each failed audit and inspect the affected elements yourself.

Record the tool, its version where shown, the page, the device setting and the date. Scores are not findings. Each reported issue still needs verification before it becomes a finding.

Lesson 8.4 shows how to run an automated scan as part of Playwright tests.

## 10. Perform a screen reader spot check

A **screen reader** reads page content aloud and lets people navigate by headings, landmarks, links and form controls.

Use the screen reader available on your computer, such as VoiceOver on macOS or NVDA on Windows. Learn its basic commands from its official guide before starting.

For one representative page and one form:

1. Listen to the page title when the page loads.
2. Move through the headings and confirm they describe the content.
3. Move to the main landmark.
4. Move through the links and confirm their purpose is clear.
5. Complete the form with synthetic data, trigger one validation error and confirm the error is announced or reachable.

Record what you checked, which screen reader and browser you used, and their versions.

A beginner’s spot check is limited evidence. Screen readers and browsers combine differently, and experienced users navigate differently from a new tester. Do not report the site as screen reader compatible on the basis of this check.

## 11. Record accessibility findings

Add findings to the existing QA record from Lesson 8.1.

For accessibility findings, include the success criterion where one applies.

| Field | Example |
|---|---|
| ID | QA-A11Y-03 |
| Location | Treatment detail template, introduction section |
| Conditions | Desktop Chrome, 1280 by 800 viewport, 100% zoom |
| Expected | Body text contrast of at least 4.5:1 (WCAG 2.2, 1.4.3) |
| Actual | Measured 3.9:1, text colour against the section background |
| Evidence | Screenshot of the contrast reading in developer tools |
| Impact | Affects all pages using this template |
| Classification | Conflict with approved style guide colours |
| Status | Awaiting decision |

This example is illustrative. Record actual measurements from your project.

Use the priorities from Lesson 8.1. A defect that prevents keyboard users from completing a required action usually blocks use. A small contrast shortfall on a decorative caption is usually lower priority.

Correct verified defects using the process from Lesson 8.2: bounded correction tasks, retesting under the original conditions and targeted regression checks.

## 12. Ask Claude to assist with the review

```text
Run a focused accessibility review of the selected pages,
components and states.

Before reviewing:
- Read the relevant project instructions.
- Confirm the accessibility requirement recorded for the project.
- Confirm the implementation and Git working state.
- Read the existing QA record and earlier accessibility evidence.
- Identify which browser and scanning tools you can actually use.

Check, where applicable:
- Page titles, page language, headings and landmarks.
- Link purpose and alternative text presence.
- Text and non-text contrast for the selected states.
- Keyboard reach, focus order, visible focus and focus
  hidden by sticky or overlapping content.
- Target sizes for small controls.
- Reflow at a viewport equivalent to 320 CSS pixels wide
  and text resizing to 200%.
- Form labels, error identification and status messages.
- Moving content and pause controls, if present.

Reuse valid earlier evidence and state where you did so.
For each finding, report the location, conditions, expected
result with the relevant success criterion, actual result,
evidence, likely affected scope and suggested classification.

Separate automated tool results from checks you verified.
List checks you could not perform and why.

Review only. Do not edit files, install dependencies,
commit, push or deploy. Do not claim conformance.
Use synthetic information in any form.

Scope and references:
[Insert selected pages, components, states and the
recorded accessibility requirement.]
```

Check Claude’s findings yourself before recording them. If Claude reports a contrast ratio, confirm it with your own measurement.

## 13. Practical exercise

**Task: Run a focused accessibility review of the implemented website.**

1. Confirm the recorded accessibility requirement, or record the gap.
2. Select representative templates, unique pages, components and states.
3. Check page structure on each selected page.
4. Measure contrast for text and key interface elements.
5. Complete keyboard, focus and target size checks.
6. Test 200% text resizing and 320 CSS pixel reflow.
7. Run an automated scan and verify each reported issue.
8. Complete a screen reader spot check on one page and one form.
9. Add verified findings to the QA record.
10. Prepare correction tasks for verified defects and escalate design conflicts.

Do not invent defects to fill the exercise. If a check passes, record the evidence.

## 14. Expected submission

Submit:

- The accessibility requirement used, or the recorded specification gap.
- The coverage selection with reasons.
- Structure, contrast, keyboard, zoom and reflow results.
- Automated scan results with your verification of each item.
- Screen reader spot check notes, tools and versions.
- New and updated findings in the QA record.
- Proposed correction tasks and escalated decisions.
- A statement of what this review did not cover.

## 15. Completion criteria

The lesson is complete when:

- The applicable requirement is identified or its absence is recorded.
- Coverage is representative and its limits are stated.
- Each check type has recorded conditions and results.
- Automated results are verified before becoming findings.
- Design conflicts are escalated rather than changed unilaterally.
- Findings cite evidence and, where relevant, a success criterion.
- No claim of full conformance or screen reader compatibility is made.

## 16. Knowledge check

1. Why does a clean automated scan not prove that a page is accessible?
2. What contrast ratio does WCAG 2.2 Level AA require for normal body text?
3. How can a sticky header cause a keyboard accessibility failure?
4. How do you create a viewport equivalent to 320 CSS pixels wide for a reflow check?
5. What should you do if an approved brand colour fails the contrast requirement?


---

# Lesson 8.4: Automating Key Checks with Playwright

### Learning objective

By the end of this lesson, you should be able to:

- Explain what automated browser tests can and cannot verify.
- Decide which existing manual checks are worth automating.
- Confirm whether Playwright is already set up, or request authorisation to add it.
- Write and run short Playwright tests in TypeScript for key routes, journeys and form validation.
- Interpret test results and handle failures without weakening the tests.

**Prerequisites:** Complete Lesson 8.3 and have the QA record, visitor journey checks and feature state checklists available.

**Required materials:** Implemented website, documented project scripts, QA test cases from Lesson 8.1, journey checks from Lesson 6.3, form specification from Lesson 7.1 and any existing test configuration.

## 1. Understand automated browser testing

So far, you have checked the website by hand. Manual checks are essential, but repeating them after every change takes time, and repeated manual checks are easy to skip.

An **automated browser test** is a script that opens the website in a real browser, performs actions such as selecting a link, and checks that the expected result appears.

**Playwright** is a testing tool that does this in Chromium, Firefox and WebKit, the engine used by Safari. Its test runner, Playwright Test, uses TypeScript.

Automated tests are good at:

| Strength | Example |
|---|---|
| Repeating the same steps exactly | Following the same journey after every change |
| Checking many routes quickly | Confirming each approved page loads with a main heading |
| Catching regressions early | Noticing that a navigation change broke a link |
| Producing consistent evidence | A report showing which checks passed |

Automated tests cannot:

- Judge whether a page matches the approved design.
- Decide whether copy is accurate or appropriate.
- Prove that a message reached a real inbox.
- Check anything they do not explicitly assert.

**A passing test proves only what the test checks, in the conditions it ran.**

Automated tests support the manual checks from earlier lessons. They do not replace them.

## 2. Check what already exists

Before writing tests, inspect the project.

At the terminal command prompt, from the project folder:

```bash
git status --short
```

Then look for:

| Item | Where to look | What it tells you |
|---|---|---|
| Playwright dependency | `devDependencies` in `package.json` | Whether Playwright is installed |
| Configuration | `playwright.config.ts` in the project root | How tests run |
| Test files | A `tests` or `e2e` folder, or files ending in `.spec.ts` | Existing tests |
| Test scripts | The `scripts` section of `package.json` | Documented test commands |
| Project rules | Working rules and architecture documents | Whether a testing approach is already decided |

Ask Claude to report what exists without changing anything.

If Playwright is already configured, use the existing setup and conventions.

## 3. Get authorisation before adding Playwright

Adding Playwright adds **dependencies**, which are packages from other developers that the project relies on, and it adds configuration files. Lesson 9.1 covers dependency risks in more detail.

Adding a testing tool is a project decision. Check whether:

- The architecture or working rules already include Playwright.
- The supervisor has authorised adding it.
- Another testing tool has been chosen instead.

If none of these apply, request the decision. Explain the purpose, the files that will change and the checks you plan to automate.

Do not add Playwright merely because this lesson describes it.

## 4. Install Playwright when authorised

These commands come from the Playwright documentation. Check the current installation guide before running them, because tools change.

From the project root folder, at the terminal command prompt:

```bash
npm init playwright@latest
```

This command adds Playwright to an existing project. It asks several questions. For this project, choose:

| Prompt | Choice |
|---|---|
| Language | TypeScript |
| Tests folder | Follow the project’s existing convention, or accept the suggested name and record it |
| GitHub Actions workflow | No, unless continuous integration has been authorised separately |
| Install browsers | Yes |

The installer typically creates a configuration file, an example test and changes to `package.json` and the lock file.

After installation:

1. Run `git status --short` to see every new and changed file.
2. Review the changes with `git diff`.
3. Check the installed version:

```bash
npx playwright --version
```

4. Record the version in your submission.

If the project uses a different package manager, such as pnpm or Yarn, use the matching command from the Playwright documentation.

## 5. Point the tests at the local website

Playwright needs to know where the website runs. The configuration file can also start the development server before the tests run.

### Illustrative configuration

```ts
import { defineConfig, devices } from "@playwright/test";

// Replace with the address your project actually uses.
const baseURL = process.env.BASE_URL ?? "http://localhost:PORT";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    // Replace with the documented development command.
    command: "npm run DEV_SCRIPT",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
```

Before using this pattern:

- Replace `PORT` and `DEV_SCRIPT` with the values documented in the actual project.
- Keep the browser projects that match the agreed review conditions from Lesson 8.1.
- Compare it with the configuration the installer generated rather than replacing that file wholesale.

Reading `BASE_URL` from an environment variable means the same tests can later run against the staging site in Lesson 9.4.

A **trace** is a recording of each test step. Playwright can open it later to show what happened when a test failed.

## 6. Decide what to automate

Automate checks that are stable, important and repeated often.

| Good candidates | Poor candidates |
|---|---|
| Each approved route loads and shows its main heading | Judging spacing against the design |
| Header links reach their approved destinations | Reviewing copy for tone |
| Approved critical visitor journeys | One-off checks that will never be repeated |
| Form validation messages for empty or invalid input | Submissions that would send real messages or create real records |
| An automated accessibility scan of key pages | Checks whose expected behaviour is still Awaiting decision |

Start small. Three to five meaningful tests that you understand are better than a large suite you cannot explain.

Base each test on an existing test case or journey from Lessons 6.3, 7.1 and 8.1. Each automated test should trace back to an approved requirement.

## 7. Write your first test

A test file contains one or more tests. Each test has a name, steps and **assertions**. An assertion is a statement of what must be true, such as “this heading is visible”.

### Example: a route loads with its approved heading

```ts
import { test, expect } from "@playwright/test";

// Use the exact heading from the approved content source.
const APPROVED_HOMEPAGE_HEADING = "[Approved homepage heading]";

test("homepage loads with its approved main heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: APPROVED_HOMEPAGE_HEADING }),
  ).toBeVisible();
});
```

What each part does:

| Code | Meaning |
|---|---|
| `test("...", async ({ page }) => { ... })` | Defines a test and gives it a browser page |
| `page.goto("/")` | Opens the homepage, using the configured base URL |
| `page.getByRole("heading", ...)` | Finds the element the way assistive technology would, by its role and accessible name |
| `expect(...).toBeVisible()` | Asserts that the element appears |

Playwright recommends locating elements by role where possible, because it reflects how people and assistive technology perceive the page. Role-based locators give early warning about structure problems, but they do not replace the accessibility review from Lesson 8.3.

Replace the placeholder with the exact approved heading. Do not copy wording from the current implementation, because the implementation might contain the error you are trying to catch.

## 8. Automate a visitor journey

Use an approved journey from Lesson 6.3.

### Example: listing to detail page

Only if this journey exists in the approved project:

```ts
import { test, expect } from "@playwright/test";

const TREATMENT_LINK_NAME = "[Approved treatment link label]";
const TREATMENT_ROUTE = "[Approved detail route]";
const TREATMENT_HEADING = "[Approved detail page heading]";

test("visitor can open a treatment from the listing", async ({ page }) => {
  await page.goto("[Approved listing route]");

  await page.getByRole("link", { name: TREATMENT_LINK_NAME }).click();

  await expect(page).toHaveURL(TREATMENT_ROUTE);
  await expect(
    page.getByRole("heading", { level: 1, name: TREATMENT_HEADING }),
  ).toBeVisible();
});
```

This checks both the destination and that the destination shows the correct content. Checking only the URL would miss a correct route displaying the wrong page’s information.

Playwright waits automatically for elements and conditions in assertions. Do not add fixed pauses such as `page.waitForTimeout(3000)`. Fixed pauses make tests slow and still fail when the site is slower than expected.

## 9. Automate form validation safely

Automate only the local behaviour that is safe to repeat.

### Example: required field error

```ts
import { test, expect } from "@playwright/test";

test("contact form reports a missing email address", async ({ page }) => {
  await page.goto("[Approved contact route]");

  await page.getByLabel("[Approved name label]").fill("Test Visitor");
  await page.getByRole("button", { name: "[Approved submit label]" }).click();

  await expect(page.getByText("[Approved email error message]")).toBeVisible();
});
```

`getByLabel` finds a control by its visible label. If this locator cannot find the field, the label may not be associated with the control, which is itself worth investigating.

Before running any form test, confirm what happens when the form is submitted with valid information. If a test could send a real message, create a booking or trigger a notification, it must not run unless the agreed test arrangements from Lesson 7.1 authorise it.

If you are unsure whether a test could reach an external service, ask Claude to inspect the submission handling first and report it. Do not run the test until you know.

## 10. Add an automated accessibility scan

The `@axe-core/playwright` package runs the axe accessibility engine inside Playwright tests. It is a separate dependency, so it needs the same authorisation as Playwright.

The Playwright documentation shows this pattern:

```ts
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage has no automatically detectable WCAG A or AA violations", async ({
  page,
}) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});
```

The tags limit the scan to rules linked to particular WCAG levels. Check the axe documentation for tags that match your project’s recorded requirement before changing them.

The scan checks the page in its current state. To scan the open mobile menu, open it in the test before running the scan.

As Lesson 8.3 explained, automated scans detect only some problems. Keep the manual accessibility checks in your QA plan.

Do not use the tool’s options for excluding elements or disabling rules to make a failing test pass. If a known issue must be excluded temporarily, record the finding, its approval and the exclusion together.

## 11. Run the tests and read the results

Run these commands at the terminal command prompt in the project folder.

| Command | What it does |
|---|---|
| `npx playwright test` | Runs all tests without showing browser windows |
| `npx playwright test --headed` | Runs tests with visible browser windows |
| `npx playwright test --ui` | Opens UI mode, where you can step through each test |
| `npx playwright test tests/[file].spec.ts` | Runs one test file |
| `npx playwright test --project=chromium` | Runs tests for one configured browser project |
| `npx playwright show-report` | Opens the HTML report from the last run |

If the project defines its own test script in `package.json`, use that documented script.

The terminal shows how many tests passed and failed and in which browser projects. Record:

- The command used.
- The Playwright version.
- The browser projects that ran.
- The implementation version tested.
- The pass and fail counts.

## 12. Handle failing tests honestly

When a test fails, first establish why. There are three main possibilities:

| Cause | Response |
|---|---|
| The website has a defect | Record a finding and follow the correction process from Lesson 8.2 |
| The test is wrong | Correct the test so it matches the approved requirement |
| The environment is wrong | Fix the setup, such as the server not starting or the base URL being incorrect |

Use UI mode or the trace to see each step and what the page looked like.

**Never change a test only to make it pass.** Loosening an assertion, deleting a check, adding a long pause or skipping the test without recording why hides the problem rather than solving it.

A **flaky test** passes sometimes and fails at other times without any code change. Treat flakiness as a finding about the test or the site. Do not rerun until it passes and then report a pass.

## 13. Ask Claude to write the tests

```text
Write Playwright tests in TypeScript for the selected checks.

Before writing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Confirm whether Playwright is installed and how it is configured.
- Inspect the existing test files and conventions.
- Read the selected test cases and their approved requirements.

For each test:
- Trace it to the listed test case or requirement.
- Use the exact approved text from the content source,
  not text copied from the current implementation.
- Prefer role, label and text locators.
- Use web-first assertions; do not use fixed timeouts.
- Keep tests independent of each other.
- Use synthetic information only.

Do not write tests that submit information to external
services, send messages or create bookings, unless the
test arrangements I provide authorise it.

After writing:
- Run the new tests using the documented command.
- Report each test, its source requirement and its result.
- For any failure, state whether the evidence points to the
  website, the test or the environment.
- Do not weaken, skip or delete a test to make it pass.

Do not install dependencies, change unrelated files,
commit, push or deploy.

Selected checks and approved references:
[Insert test case IDs, routes, journeys and exact approved text.]
```

Read every test Claude writes. You should be able to explain what each one checks.

## 14. Record and maintain the tests

Add the automated tests to your QA record from Lesson 8.1.

| Field | What to record |
|---|---|
| Test file and name | Where the automated check lives |
| Source requirement | The test case or requirement it covers |
| What it asserts | The specific conditions checked |
| What it does not check | The manual checks that remain necessary |
| Latest result | Pass or fail, with the implementation version |

When approved content or routes change, the tests must change with them. Out-of-date tests either fail for the wrong reason or, worse, keep passing while checking the wrong thing.

If the project’s instructions do not yet document how to run the tests, propose an update for supervisor review.

## 15. Practical exercise

**Task: Automate a small set of key checks.**

1. Inspect the project for an existing test setup.
2. Confirm authorisation before adding Playwright or `@axe-core/playwright`.
3. Select three to five checks from your QA record.
4. Write tests for at least one route, one journey and one safe form validation check, where these exist.
5. Run the tests and record the results.
6. Investigate any failure and classify its cause.
7. Record the automated coverage and its limits in the QA record.

If authorisation to add Playwright is not given, submit the selected checks, the draft tests and the authorisation request. Do not install it without approval.

## 16. Expected submission

Submit:

- The existing test setup findings.
- The authorisation decision for any new dependencies.
- The Playwright version and configuration summary.
- The test files, each traced to a requirement.
- The command used and the test results.
- Classification of any failures.
- The updated QA record showing automated and manual coverage.

## 17. Completion criteria

The lesson is complete when:

- New dependencies were added only with authorisation.
- Each test traces to an approved requirement.
- Tests use approved text and stable locators.
- No test triggers unauthorised external actions.
- Results are recorded with versions and conditions.
- Failures are investigated, not hidden.
- Remaining manual checks are clearly identified.

## 18. Knowledge check

1. What does a passing Playwright test prove?
2. Why should tests use the approved content source rather than text copied from the implementation?
3. Why should you avoid fixed pauses such as `waitForTimeout`?
4. What are three possible causes of a failing test?
5. Why is it unsafe to automate a form submission without checking where the information goes?


---

# Lesson 9.1: Handling Credentials, Personal Data and Dependencies Safely

### Learning objective

By the end of this lesson, you should be able to:

- Identify credentials and keep them out of code, Git, screenshots and prompts.
- Explain which configuration values reach the visitor’s browser.
- Respond correctly if a credential is exposed.
- Limit personal data collection and handling to the approved scope.
- Review dependencies before adding or updating them, and interpret `npm audit` results.

**Prerequisites:** Complete Unit 8 and have the QA record and its review decision available.

**Required materials:** Project instructions, architecture document, integration specification, form specification from Lesson 7.1, `package.json`, the lock file, and any existing configuration documentation.

## 1. Understand the three risk areas

This lesson covers three areas where small mistakes can cause serious harm.

| Area | Example risk |
|---|---|
| **Credentials** | An access key committed to Git lets someone use a paid service or read private data |
| **Personal data** | A visitor’s enquiry appears in a screenshot shared in a chat |
| **Dependencies** | A package with a known vulnerability, or a malicious lookalike package, is added to the project |

**This lesson teaches safe working habits. It is not a security audit or a legal review.** Specialist security testing and decisions about legal obligations belong to the people authorised to make them.

## 2. Identify credentials

A **credential** is information that proves identity or grants access.

Common examples:

- API keys and access tokens.
- Passwords.
- Database connection strings.
- Email service or form service secret keys.
- Private keys and certificates.
- Webhook signing secrets.

A **secret** is a credential, or other value, that must not be shared publicly.

Some values look harmless but are still secret, such as a URL that contains a token. If you are unsure, treat the value as secret and ask.

### Where credentials must never appear

| Location | Why it is unsafe |
|---|---|
| Source code | Anyone with access to the code can read it |
| Git commits | Git keeps history, so a later deletion does not remove the earlier copy |
| Screenshots and screen recordings | Easily shared beyond the intended audience |
| Prompts to Claude or other tools | The value leaves the controlled configuration |
| Chat messages, tickets and handover documents | Copied and stored in places you do not control |
| Browser-delivered code | Every visitor can read it |

When you need to refer to a credential, use its **name**, such as `FORM_SERVICE_KEY`, and never its value.

## 3. Keep local configuration out of Git

Projects usually read credentials from **environment variables**: named values supplied to the application from outside the code.

During local development, these are often stored in a file such as `.env` or `.env.local`. The exact file names depend on the framework and the project’s instructions.

### Check that the file is ignored

Git uses a `.gitignore` file to decide which files it should not track.

At the terminal command prompt, from the project folder:

```bash
git check-ignore -v .env.local
```

Replace `.env.local` with the file name your project uses.

| Result | Meaning |
|---|---|
| A line naming `.gitignore` and a rule | Git ignores the file |
| No output | Git does not ignore the file; stop and report this before adding any value |

Also check that the file has never been committed:

```bash
git log --all --oneline -- .env.local
```

No output means no branch in your local repository has history for that file name. Any output means the file was committed at some point, which needs reporting.

### Document names, not values

Many projects include an example file, such as `.env.example`, that lists the required variable names with empty or placeholder values. It can be committed safely because it contains no secrets.

```text
# Example only. Values are supplied separately.
FORM_SERVICE_KEY=
FORM_RECIPIENT_ID=
```

Use the variable names defined in the project’s integration specification. Do not invent them.

## 4. Know what reaches the browser

Code that runs in the visitor’s browser can be read by anyone who visits the website. Any value included in that code is public.

Frameworks use naming rules to decide which environment variables are included in browser code. For example:

| Framework | Prefix that exposes a value to the browser |
|---|---|
| Next.js | `NEXT_PUBLIC_` |
| Vite | `VITE_` |

These are examples from the frameworks’ documentation. Check which framework the starter uses and read its current documentation.

**A secret must never use a browser-exposed prefix.** If a feature seems to need a secret in the browser, the design is wrong. The secret belongs in server-side code or in the receiving service’s configuration. Raise it as a finding rather than working around it.

Some keys are designed to be public, such as certain site keys for spam protection or map services. The service’s documentation and the integration specification should state this. Do not assume a key is safe to expose because it works.

## 5. Respond to an exposed credential

A credential is **exposed** if it appears anywhere it should not, including a commit that was never pushed, a screenshot or a prompt.

If you discover an exposure:

1. Stop work on the affected task.
2. Do not copy or share the value further, even to explain the problem.
3. Report it to your supervisor immediately, stating where it appeared and when.
4. Let the authorised person **rotate** or revoke the credential, which means replacing it with a new one so the old value stops working.
5. Record the incident and the actions taken.

Deleting the value in a new commit does not remove it from Git history. Rewriting Git history is a specialised operation that can disrupt other people’s work. Do not attempt it unless the supervisor directs it.

**Rotation is the only reliable fix for an exposed secret.** Removing it from view does not stop someone who has already copied it.

Report exposures immediately, even if you caused them. Delay increases the harm.

## 6. Handle personal data carefully

**Personal data** is information about an identifiable person, such as a name, email address, telephone number or details of an enquiry.

A visitor’s interest in a particular treatment can reveal sensitive information about them. Handle all enquiry information with care.

### Collect only what is approved

The form specification from Lesson 7.1 defines which fields to collect. Do not add fields because the information might be useful later.

### Use synthetic data in testing

Continue using clearly fictitious information, such as `test.visitor@example.com`. The domain `example.com` is reserved for documentation and testing, so it does not belong to a real person.

### Keep personal data out of working records

Check that personal data does not appear in:

| Location | What to check |
|---|---|
| Browser console | `console.log` statements printing form values |
| Server or service logs | Submitted values written to logs |
| Error messages | Errors that repeat what the visitor entered |
| Screenshots | Visible names, emails or messages |
| Prompts | Real enquiry content pasted for debugging |
| Test fixtures | Real customer details reused as test data |

Remove debugging statements that print form values before submission. Sanitise screenshots before sharing them.

### Leave policy decisions to the responsible people

Several decisions affect personal data but are not implementation choices:

- Whether a privacy notice or consent wording is required, and what it says.
- How long submitted information is kept.
- Which services may receive personal data.
- Whether analytics or tracking scripts may be added.

The data protection law that applies depends on where the business operates and who it serves. For example, a business in Singapore would need to consider the Personal Data Protection Act. Identifying obligations is a supervisor or specialist decision.

If the approved scope does not answer one of these questions, record it as a specification gap. Do not add tracking scripts, third-party embeds or new data recipients without approval.

## 7. Understand dependencies

A **dependency** is a package of code written by someone else that the project uses.

| File | Purpose |
|---|---|
| `package.json` | Lists the packages the project depends on and the version ranges allowed |
| Lock file, such as `package-lock.json` | Records the exact versions installed, including indirect dependencies |

Packages listed under `dependencies` are generally used by the website itself. Packages under `devDependencies` are used during development and testing, such as Playwright.

Every dependency is code the project trusts. It can introduce vulnerabilities, licence obligations, extra download size and maintenance work.

## 8. Review a dependency before adding it

Adding a package is a project decision, as Lesson 8.4 explained for Playwright.

Before requesting approval, answer:

| Question | Why it matters |
|---|---|
| Is it needed? | The existing project may already provide the capability |
| Is it the correct package? | Lookalike names can be malicious |
| Is it maintained? | Abandoned packages do not receive security fixes |
| What licence does it use? | Licences can impose obligations on the business |
| How large is it? | Large packages can slow the website |
| Is it used in the browser? | Browser dependencies affect every visitor |

### Verify the package name

Attackers publish packages with names similar to popular ones, hoping someone mistypes the name. This is called **typosquatting**.

Claude and other AI tools can suggest package names that are wrong or do not exist. Before installing any suggested package, confirm the exact name on its official documentation or registry page.

## 9. Check dependencies for known vulnerabilities

`npm audit` compares the project’s installed dependencies against a database of known vulnerabilities. It requires `package.json` and a lock file.

At the terminal command prompt, from the project folder:

```bash
npm audit
```

The report lists affected packages, the severity of each issue, the dependency path and, where available, a recommended fix.

| Severity | Typical meaning |
|---|---|
| Critical or high | Needs prompt review |
| Moderate | Review in context |
| Low or info | Usually lower priority |

Severity alone does not decide urgency. A high-severity issue in a development-only tool that never runs on the website may matter less than a moderate issue in browser code. The advisory linked in the report explains when the vulnerability applies.

### Be careful with automatic fixes

`npm audit fix` installs compatible updates to vulnerable dependencies. `npm audit fix --force` can install major version updates, which may change how a package behaves and break the website.

Updating dependencies changes the project. Treat it as a bounded task:

1. Record the audit findings.
2. Propose the update for approval if project rules require it.
3. Make the change on its own, not mixed with other work.
4. Run the project checks, Playwright tests and relevant manual checks afterwards.

Do not run `npm audit fix --force` without authorisation.

No reported vulnerabilities means none are currently known for the installed versions. It does not mean the project is secure.

## 10. Ask Claude for a safety review

```text
Review the project for credential, personal data and
dependency risks within the scope below.

Before reviewing:
- Read the relevant project instructions, architecture
  and integration specification.
- Confirm the current Git status.

Check:
- Whether local environment files are ignored by Git and
  absent from Git history.
- Whether any credential-like values appear in source
  files, configuration, tests or documentation.
- Which environment variables are exposed to browser code,
  and whether any appear to be secrets.
- Whether form handling logs, prints or echoes submitted
  values.
- Whether any analytics, tracking or third-party scripts
  are present, and whether they are in the approved scope.
- The output of npm audit, with each issue's severity,
  dependency path and whether it affects browser code.
- Any dependencies that appear unused or outside the
  approved architecture.

Report variable NAMES and file locations only.
Never print, quote or summarise a secret value.
If you find an apparent exposed secret, report its
location and stop reviewing that file.

Review only. Do not edit files, install, update or
remove dependencies, run npm audit fix, rewrite Git
history, commit, push or deploy.

Scope and references:
[Insert the project scope and exact references.]
```

Check Claude’s report yourself. If it reports an exposed secret, follow Section 5 immediately.

## 11. Record findings and incidents

Add findings to the existing QA record, using a security or data category.

| Finding type | Where it goes |
|---|---|
| Missing `.gitignore` rule | QA record, as a defect |
| Debug statement printing form values | QA record, as a defect |
| Vulnerable dependency | QA record, with severity and affected path |
| Undefined data retention or consent requirement | QA record, as a specification gap |
| Exposed credential | Report to supervisor immediately, then record the incident |

Do not include secret values or real personal data in any finding.

## 12. Practical exercise

**Task: Complete a safety review of the project.**

1. Identify the environment variables the project uses, by name.
2. Confirm that local environment files are ignored and have no Git history.
3. Check which variables reach browser code.
4. Search for debugging output that prints form values.
5. Check for tracking or third-party scripts outside the approved scope.
6. Run `npm audit` and assess each reported issue.
7. Ask Claude for an independent safety review.
8. Record verified findings and prepare bounded correction tasks.

If you find an exposed credential, stop and report it before continuing.

## 13. Expected submission

Submit:

- The list of environment variable names and where each is used.
- Git ignore and history check results.
- The browser exposure review.
- Personal data handling findings.
- The `npm audit` summary with your assessment of each issue.
- Claude’s safety review and your verification.
- New findings in the QA record and any incident record.
- Specification gaps for data handling decisions.

Do not include any secret values or real personal data.

## 14. Completion criteria

The lesson is complete when:

- Credentials are identified by name and absent from tracked files.
- Browser-exposed configuration contains no secrets.
- Any exposure has been reported and recorded.
- Personal data handling follows the approved scope.
- Dependency risks are assessed in context.
- No dependency changes were made without authorisation.
- Policy questions are recorded as decisions for the responsible people.

## 15. Knowledge check

1. Why does deleting a committed secret in a new commit not fix the exposure?
2. What happens to an environment variable with a browser-exposed prefix?
3. What should you do first if you find a credential in a screenshot?
4. Why should you verify a package name suggested by an AI tool?
5. Why can `npm audit fix --force` break a working website?


---

# Lesson 9.2: Improving Images, Loading Speed and Build Quality

### Learning objective

By the end of this lesson, you should be able to:

- Explain the main measures of loading speed, responsiveness and visual stability.
- Measure performance under recorded, repeatable conditions.
- Identify the causes of slow loading and layout shifts from a Lighthouse report.
- Improve image delivery without changing the approved design.
- Confirm that the production build completes cleanly and re-measure after changes.

**Prerequisites:** Complete Lesson 9.1 and have its findings recorded.

**Required materials:** Implemented website, documented build and preview commands, approved asset register, style guide, QA record and Playwright tests from Lesson 8.4.

## 1. Treat performance as part of the visitor experience

A slow page affects visitors directly. They wait for content, tap the wrong button when the layout moves, or leave before the page finishes loading. Visitors on mobile data or older phones feel these problems most.

Google publishes three **Core Web Vitals** to describe key parts of the experience:

| Metric | What it measures | Good threshold |
|---|---|---|
| **Largest Contentful Paint (LCP)** | How quickly the main content, often a hero image or heading, appears | 2.5 seconds or less |
| **Interaction to Next Paint (INP)** | How quickly the page responds visually after a click, tap or key press | 200 milliseconds or less |
| **Cumulative Layout Shift (CLS)** | How much visible content moves unexpectedly while the page loads and is used | 0.1 or less |

These thresholds apply to real visits, measured at the 75th percentile. That means at least three out of four page visits should meet the threshold.

**Your local measurements are estimates under test conditions. They are not the experience of real visitors.**

## 2. Understand lab and field data

| Data type | Where it comes from | What it is good for |
|---|---|---|
| **Lab data** | A tool loads the page in controlled conditions, such as Lighthouse in developer tools | Finding and debugging problems before launch |
| **Field data** | Measurements from real visitors over time | Understanding actual experience after launch |

A practice or pre-launch website usually has no field data. You will use lab data.

Lighthouse cannot measure INP, because INP needs a real person interacting with the page. Lighthouse reports **Total Blocking Time (TBT)** instead, which estimates how much the page’s scripts block the browser from responding. Improving TBT often improves INP, but they are different measures.

## 3. Measure the production build

The development server is designed for fast editing, not fast loading. It adds extra code for features such as automatic reloading. Measuring it gives misleading results.

Measure a **production build**, which is the optimised version prepared for deployment.

1. Find the documented build command and the command that serves the built site locally. These are often scripts in `package.json`, but use what your project actually documents.
2. Run the build at the terminal command prompt in the project folder.
3. Confirm the build completes without errors.
4. Start the local preview of the built site using the documented command.
5. Open the local address it reports.

If the project does not document a way to serve the production build locally, record this as a gap and ask how performance should be measured.

## 4. Run Lighthouse under recorded conditions

1. Open the page in Chrome. Use a browser profile without extensions where possible, because extensions can slow pages and distort results.
2. Open developer tools and select the **Lighthouse** panel.
3. Choose **Navigation** mode, which measures a fresh page load.
4. Select **Mobile** as the device, unless the agreed conditions say otherwise.
5. Select the **Performance** category.
6. Run the analysis.

Lighthouse results vary between runs, because the computer and network do slightly different things each time. Run the analysis at least three times for each page and record the median, which is the middle result.

Record:

| Field | Example |
|---|---|
| Page | Homepage |
| Build | Production build from the recorded commit |
| Tool | Lighthouse in Chrome developer tools, with version |
| Mode and device | Navigation, Mobile |
| Runs | Three |
| Median LCP, TBT and CLS | Measured values |
| LCP element | The element Lighthouse identifies |

Measure the homepage and each distinct page template from Lesson 8.3’s coverage selection.

The overall Lighthouse score is a summary. Focus on the measurements and the specific issues behind them.

## 5. Read the report for causes

Lighthouse lists diagnostics and opportunities below the scores. Use them to find causes, not as a list of tasks to complete automatically.

| Symptom | Common causes to investigate |
|---|---|
| Slow LCP | Large hero image, image loaded late, slow server response, render-blocking styles or fonts |
| High TBT | Large amounts of JavaScript, heavy third-party scripts, expensive work during load |
| High CLS | Images without reserved space, fonts swapping size, content inserted above existing content |

For each problem, identify:

1. The affected element or resource.
2. The evidence from the report.
3. Whether it affects one page or a shared component.
4. Whether fixing it would change anything approved.

## 6. Improve image delivery

Images are often the largest files on a page. Lesson 5.2 placed the approved images. This lesson checks how efficiently they are delivered.

| Check | Why it matters |
|---|---|
| File dimensions suit the largest display size | A 4000-pixel-wide photograph displayed at 800 pixels wastes data |
| Format and compression follow the agreed asset workflow | Modern formats such as WebP or AVIF are often smaller |
| Different sizes are available for different screens | Phones should not download desktop-sized images |
| Width and height, or an aspect ratio, are specified | The browser reserves space, preventing layout shift |
| Images far down the page load lazily | They load only when the visitor approaches them |
| The main image near the top does not load lazily | Delaying it slows LCP |

Many frameworks provide an image component that handles resizing, formats and lazy loading. Lesson 5.2 asked you to follow the project’s established approach. Check what it already does before adding anything.

### Illustrative example without a framework image component

```tsx
type TreatmentImageProps = {
  src: string;
  alt: string;
};

// Below the first screen: load only when needed.
export function TreatmentImage({ src, alt }: TreatmentImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={800}
      height={600}
      loading="lazy"
      decoding="async"
    />
  );
}
```

The `width` and `height` values tell the browser the image’s proportions so it can reserve space. They should match the actual image proportions. CSS can still make the image responsive.

Do not add `loading="lazy"` to the hero image or any image that is likely to be the LCP element.

### Preserve the approved assets

- Keep the original files. Create optimised versions through the agreed asset workflow.
- Check that compression does not visibly damage faces, products or text in images.
- Recheck crops and focal points at each required width after any change, as in Lesson 5.2.

Visible quality loss is a defect, even if the file is smaller.

## 7. Check fonts, scripts and third-party content

### Fonts

Web fonts can delay text or cause it to shift when the font loads. Check:

- How fonts are loaded, and whether the framework provides an optimised method.
- Whether only the approved font weights and styles are loaded.

Do not replace or remove approved fonts to improve performance. Raise the trade-off as a design decision.

### JavaScript

Large amounts of JavaScript slow loading and responsiveness. Check:

- Whether any dependency is unexpectedly large for what it does.
- Whether code is loaded on pages that do not use it.
- Whether a package added for a small feature could be replaced by existing code.

Lesson 9.1 covered reviewing dependencies. Removing or replacing one is a bounded task with its own verification.

### Third-party content

Embedded maps, booking widgets, video players, chat tools and analytics scripts often add significant load. Check whether each is in the approved scope and loaded as specified. Some can be loaded only when the visitor needs them, but the loading behaviour must be agreed, because it changes what the visitor sees.

## 8. Confirm build quality

A website can display correctly while its build reports problems.

Run the documented checks and record their results:

| Check | What to look for |
|---|---|
| Production build | Completes without errors; review any warnings |
| Type check | No TypeScript errors |
| Lint | No errors under the project’s rules |
| Automated tests | Playwright tests from Lesson 8.4 pass |
| Browser console on the built site | No errors on the selected pages |
| Network panel | No failed requests for images, fonts or scripts |

Warnings do not always need fixing, but each should be understood. A warning about a missing image size or an oversized bundle may explain a performance finding.

Use only the commands the project documents. Do not add new tools to complete this checklist.

## 9. Prioritise improvements by evidence

Prioritise changes that:

1. Have clear evidence from repeated measurements.
2. Affect important pages or shared templates.
3. Can be made without changing approved content or design.
4. Can be verified by re-measuring.

Avoid optimising blindly. Changes made only because a tool suggested them can add complexity without measurable benefit.

Do not chase a perfect score. A recorded improvement against agreed thresholds is a stronger result.

## 10. Ask Claude to investigate and improve performance

### Investigation prompt

```text
Investigate the performance of the selected pages using
the production build.

Before investigating:
- Read the relevant project instructions and asset workflow.
- Confirm the current Git status.
- Identify the documented build and preview commands.

Investigate:
- The LCP element on each page and why it loads when it does.
- Sources of layout shift.
- Image dimensions, formats, responsive sizes and lazy loading.
- Font loading.
- JavaScript size and third-party scripts on each page.
- Production build warnings and browser console errors.

For each issue, report:
1. The affected page, element or resource.
2. The evidence.
3. Whether it affects a shared component.
4. A proportionate improvement.
5. Whether the improvement would change approved
   content, assets, fonts or behaviour.

Investigate only. Do not edit files, install dependencies,
commit, push or deploy. State which measurements you
actually ran and under what conditions.

Pages and references:
[Insert pages, baseline measurements and exact references.]
```

### Correction prompt

```text
Implement the selected performance improvements.

- Follow the project's established image and asset approach.
- Preserve approved content, assets, crops, fonts and behaviour.
- Keep original asset files unchanged.
- Do not lazy-load the LCP image.
- Do not add dependencies or change unrelated files.

After editing:
- Run the production build and documented checks.
- Run the Playwright tests.
- Report the changes and any build warnings.

Do not commit, push or deploy.

Selected improvements:
[Insert the reviewed improvements.]
```

## 11. Re-measure and check for regressions

After each change:

1. Rebuild the production version.
2. Run Lighthouse under the same recorded conditions, at least three times.
3. Compare the medians with the baseline.
4. Check image quality, crops and focal points at the required widths.
5. Check that layouts did not shift or change.
6. Run the documented checks and Playwright tests.
7. Update the QA record.

Report the comparison honestly. If a change made no measurable difference, say so. If one metric improved while another worsened, report both.

## 12. Practical exercise

**Task: Measure and improve the website’s loading performance.**

1. Build the production version and serve it locally.
2. Measure the selected pages with Lighthouse, three runs each.
3. Record the baseline conditions and median values.
4. Identify causes using the report and Claude’s investigation.
5. Select improvements that preserve the approved design.
6. Implement them through bounded tasks.
7. Re-measure under the same conditions.
8. Check images, layouts and automated tests for regressions.
9. Record results and remaining issues in the QA record.

If a page already meets the agreed thresholds, record the evidence. Do not change it only to raise a score.

## 13. Expected submission

Submit:

- Build, preview and measurement conditions.
- Baseline measurements for each selected page.
- Identified causes with evidence.
- Selected improvements and the reasons for each.
- A summary of changed files.
- Before and after measurements.
- Image quality and regression check results.
- Build, type check, lint and test results.
- Remaining performance findings and decisions needed.

## 14. Completion criteria

The lesson is complete when:

- Measurements use the production build under recorded conditions.
- Results come from repeated runs.
- Improvements address identified causes.
- Approved content, assets and design are preserved.
- Before and after results are compared under the same conditions.
- Build quality checks are recorded.
- Limits of lab measurement are stated.

## 15. Knowledge check

1. Why should you measure the production build rather than the development server?
2. Why can Lighthouse not measure INP, and what does it report instead?
3. Why should the hero image not use lazy loading?
4. How do image width and height attributes help prevent layout shift?
5. Why should you run Lighthouse several times and record the median?


---

# Lesson 9.3: Checking Page Metadata, Headings and Search Readiness

### Learning objective

By the end of this lesson, you should be able to:

- Explain what page metadata does and who approves its wording.
- Check page titles, descriptions, headings and link text across the website.
- Identify duplicate routes and confirm preferred page addresses.
- Distinguish controls that block crawling from controls that block indexing.
- Verify the rendered metadata and record search readiness without promising rankings.

**Prerequisites:** Complete Lesson 9.2 and have its findings recorded.

**Required materials:** Approved IA and routes, approved page copy, any approved metadata or SEO brief, page completion register from Lesson 6.4, QA record and Playwright tests from Lesson 8.4.

## 1. Understand search readiness

**Search engine optimisation (SEO)** covers the work that helps search engines find, understand and present a website’s pages.

SEO includes strategy work, such as choosing which topics and search terms to target, and technical work, such as making sure pages can be found and described correctly.

This lesson covers **search readiness**: the technical foundations that let search engines crawl, index and describe the approved pages accurately.

| Term | Meaning |
|---|---|
| **Crawling** | A search engine’s program, such as Googlebot, visits and reads a page |
| **Indexing** | The search engine stores the page so it can appear in results |
| **Metadata** | Information about a page, mostly in the HTML `head`, that browsers and search engines read |

**Search readiness does not guarantee rankings or traffic.** Rankings depend on many factors outside the implementation. Do not promise them in a submission.

Keyword strategy and content planning belong to the approved brief and content. This lesson does not ask you to create them.

## 2. Treat metadata wording as content

Page titles and descriptions are visible to people. They appear in browser tabs, bookmarks, search results and shared links. Their wording is content, and it follows the same editorial rules as page copy from Lesson 5.2.

Before implementing metadata, confirm the source:

| Situation | Response |
|---|---|
| Approved metadata exists | Implement it exactly |
| The brief defines a pattern, such as “Page name, then business name” | Apply the pattern and check each result |
| No approved metadata or pattern exists | Record a specification gap and propose wording for review |

If you propose wording, mark it **Awaiting editorial decision**. Do not add claims, prices, results, credentials or comparisons that the approved content does not support. Advertising rules may apply to health-related services, and metadata is part of the advertising message.

## 3. Check page titles

The page title is set by the `title` element in the HTML `head`. It appears in the browser tab and is often used as the clickable headline in search results.

Check each page:

| Check | Expected result |
|---|---|
| Present | Every page has a title |
| Unique | No two pages share the same title |
| Descriptive | Identifies the page’s subject |
| Consistent | Follows the approved pattern, such as including the business name |
| Accurate | Matches the page content and the approved wording |
| Readable | Written for people, not a list of search terms |

Lesson 8.3 checked titles for accessibility. Screen reader users hear the title when a page loads. Reuse that evidence where it still applies.

### How titles are set in TSX projects

The method depends on the framework. For example, in a Next.js project using the App Router, a page can export its metadata:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Approved page title]",
  description: "[Approved page description]",
};
```

This is an example only for that framework. Other starters use different methods. Ask Claude to identify how the actual starter sets metadata before changing anything, and reuse any shared pattern it already has.

## 4. Check meta descriptions

A **meta description** is a short summary of the page, set with a `meta` element:

```html
<meta name="description" content="[Approved page description]" />
```

Search engines may show it below the title in results, but they may also choose different text from the page.

Check that each page’s description:

- Exists, where the approved scope requires one.
- Is unique to that page.
- Summarises the page accurately.
- Uses the approved wording or pattern.

A copied description is a common error when building related pages from a shared pattern, as Lesson 6.2 warned about content carrying over between pages.

## 5. Confirm headings and link text

Search engines, like screen reader users, use headings and link text to understand a page.

Lesson 8.3 checked heading structure and link purpose. For this lesson, confirm only that:

- Each page’s main heading matches its approved subject.
- The main heading, page title and description describe the same page.
- Link text describes its destination, such as an approved treatment name, rather than “Click here”.
- Images have the alternative text recorded in Lesson 5.2.

Do not rewrite headings or add search terms to them. Headings are approved content.

## 6. Identify duplicate routes and preferred addresses

The same page can sometimes load at more than one address.

| Variation | Example |
|---|---|
| Trailing slash | `/treatments` and `/treatments/` |
| Capital letters | `/Treatments` and `/treatments` |
| Query parameters | `/treatments?ref=footer` |
| Old or duplicate routes | Two routes rendering the same page |

Search engines may treat these as separate pages, splitting their signals or showing the wrong address.

Check how the website handles each variation for a sample of pages:

1. Open the approved route.
2. Open the same route with and without a trailing slash.
3. Open it with a query parameter added.
4. Record whether each loads, redirects or returns a not found page.

### Canonical addresses

A **canonical URL** tells search engines which address is the preferred version of a page. It is set with a `link` element:

```html
<link rel="canonical" href="https://[production domain]/[approved route]" />
```

Canonical URLs normally use the full production address. The production domain is a deployment decision. If it has not been confirmed, record the dependency rather than inventing one.

Check that each page’s canonical URL, where implemented:

- Points to the page’s own preferred address, not to the homepage or another page.
- Uses the confirmed production domain.
- Matches the route in the approved IA.

A canonical URL pointing every page to the homepage is a serious error. It tells search engines that the other pages are duplicates.

## 7. Understand crawling and indexing controls

Different controls do different jobs. Mixing them up is a common and costly mistake.

| Control | What it does | What it does not do |
|---|---|---|
| `robots.txt` file | Tells crawlers which addresses not to visit | Does not reliably keep a page out of search results |
| `noindex` rule | Tells search engines not to include a page in results | Does not stop people visiting the page |
| Password protection | Stops crawlers and people without access | Requires configuration on the host |

According to Google’s documentation, a page blocked by `robots.txt` can still appear in results if other pages link to it, because the search engine never reads the page itself. A `noindex` rule only works if the crawler can access the page to read it. Google does not support `noindex` inside `robots.txt`.

The `noindex` rule can be set in the page’s HTML:

```html
<meta name="robots" content="noindex" />
```

Or as an HTTP response header sent by the server or host:

```text
X-Robots-Tag: noindex
```

### Two situations to check

| Environment | Expected state |
|---|---|
| Staging or preview | Protected, or marked `noindex`, so test versions do not appear in search results |
| Production | No `noindex` on pages that should appear in search results |

A `noindex` rule left over from staging can remove an entire website from search results after launch. This is a common launch error.

Find out how the project controls indexing for each environment. It may be set in code, in configuration or on the host. Lesson 9.4 checks the staging environment directly.

## 8. Check optional search features only when in scope

Some features help search engines or social platforms present pages. Implement and check them only when the approved scope includes them.

| Feature | Purpose | Check if in scope |
|---|---|---|
| **XML sitemap** | Lists the pages the website wants crawled | Lists only approved, indexable production pages |
| **Social sharing metadata**, such as Open Graph | Controls the title, description and image when a page is shared | Uses approved wording and images |
| **Structured data** | Describes the page in a format search engines can read, such as business details | Matches the visible page content exactly |

Structured data must not describe information that is not on the page, such as invented reviews or ratings. Business details, opening hours and addresses must come from approved sources.

## 9. Verify the rendered metadata

Source code shows what the implementation intends. The rendered page shows what visitors and search engines receive.

For each selected page:

1. Open the page in the browser.
2. Open developer tools and select the **Elements** panel.
3. Expand the `head` element.
4. Check the `title`, description, canonical link and any robots rules.

Some websites add or change metadata with JavaScript after the page loads. Compare the Elements panel with the browser’s **View page source** option, which shows the original HTML. If they differ, record which values search engines may see first and ask Claude to explain how the starter renders metadata.

### Use Lighthouse

The Lighthouse **SEO** category checks basic search readiness, such as whether the page has a title and description, whether it is blocked from indexing and whether links have descriptive text. Like the accessibility category, it checks only what it can detect automatically.

### Automate stable checks

Extend the Playwright tests from Lesson 8.4 for metadata that should not change accidentally:

```ts
import { test, expect } from "@playwright/test";

const APPROVED_TITLE = "[Approved page title]";
const APPROVED_DESCRIPTION = "[Approved page description]";

test("treatment page has its approved title and description", async ({
  page,
}) => {
  await page.goto("[Approved route]");

  await expect(page).toHaveTitle(APPROVED_TITLE);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    APPROVED_DESCRIPTION,
  );
});
```

Add a test that checks production pages do not carry a `noindex` rule only when the project has a way to test the production configuration. Do not run tests against the live production website without authorisation.

## 10. Record metadata in the existing page register

Add metadata columns to the page completion register from Lesson 6.4 rather than creating a new register.

| Page | Route | Title status | Description status | Canonical | Indexing | Notes |
|---|---|---|---|---|---|---|
| Treatment listing | Approved route | Matches approved | Matches approved | Correct | Indexable | None |
| Treatment detail | Approved route | Matches approved | Copied from another page | Correct | Indexable | Finding QA-SEO-02 |
| Location page | Approved route | Proposed wording | Proposed wording | Domain unconfirmed | Not checked | Awaiting editorial decision |

These rows are illustrative. Record actual pages and results.

Add defects to the QA record with the category “Search readiness” and follow the correction process from Lesson 8.2.

## 11. Ask Claude to review search readiness

```text
Review search readiness for the selected pages.

Before reviewing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Identify how the starter sets page titles, descriptions,
  canonical links and robots rules.
- Read the approved metadata, IA routes and page copy.

Check for each selected page:
- Rendered title and description against approved wording.
- Uniqueness of titles and descriptions across pages.
- Main heading consistency with the title and description.
- Canonical link target, where implemented.
- Robots rules in the HTML and, where visible, response headers.
- Behaviour of the route with and without a trailing slash
  and with a query parameter.
- Sitemap, social sharing metadata or structured data,
  only if they are in the approved scope.

Compare source code with the rendered head.
Report how indexing is controlled for each environment.
Identify any noindex rule that could reach production.

For each finding, report the page, expected result and
source, actual result, evidence and affected scope.
Do not propose new wording unless I ask for it.
Do not promise ranking outcomes.

Review only. Do not edit files, commit, push or deploy.

Scope and references:
[Insert selected pages, routes and exact references.]
```

## 12. Practical exercise

**Task: Check search readiness across the implemented pages.**

1. Confirm the approved metadata source, or record the gap.
2. Identify how the starter sets metadata.
3. Check titles and descriptions for every submitted page.
4. Confirm heading and link text consistency.
5. Test route variations for a sample of pages.
6. Check canonical links and indexing controls.
7. Check optional features only if they are in scope.
8. Verify rendered metadata in the browser and with Lighthouse.
9. Add metadata tests where appropriate.
10. Update the page register and QA record.

If metadata wording is missing, propose it for review and leave it marked as awaiting a decision.

## 13. Expected submission

Submit:

- The metadata source used, or the recorded gap.
- How the starter sets metadata.
- The updated page register with metadata columns.
- Route variation results.
- Canonical and indexing control findings for each environment.
- Lighthouse SEO results with your verification.
- New or updated Playwright tests.
- Proposed wording, clearly marked as awaiting a decision.
- New findings in the QA record.

## 14. Completion criteria

The lesson is complete when:

- Every submitted page has been checked for title and description.
- Metadata wording follows approved sources or awaits a decision.
- Duplicate route behaviour is recorded.
- Canonical links point to the correct preferred addresses.
- Indexing controls are understood for each environment.
- Rendered metadata has been verified in the browser.
- No ranking outcomes are promised.

## 15. Knowledge check

1. How does crawling differ from indexing?
2. Why might a page blocked by `robots.txt` still appear in search results?
3. Why is a `noindex` rule left over from staging dangerous after launch?
4. Who approves the wording of page titles and descriptions?
5. What is wrong with every page’s canonical link pointing to the homepage?


---

# Lesson 9.4: Reviewing Git Changes, Deploying to Staging and Verifying the Result

### Learning objective

By the end of this lesson, you should be able to:

- Confirm that work is ready and authorised for a staging deployment.
- Review, stage and commit only the intended changes.
- Follow the project’s documented deployment method without improvising.
- Verify the staging website against the local results.
- Record the deployment and its verification separately from acceptance.

**Prerequisites:** Complete Lessons 9.1 to 9.3, with their findings recorded and reviewed.

**Required materials:** Project instructions, documented branching and deployment process, deployment authorisation, environment variable names from Lesson 9.1, QA record, Playwright tests and the page register from Lesson 9.3.

## 1. Understand staging

A **staging environment** is a copy of the website hosted online for testing before release. It should behave like the production website, the live public version, while being protected from public use.

| Environment | Purpose | Who uses it |
|---|---|---|
| Local | Building and testing on your computer | You |
| Staging | Testing the deployed website in a hosted environment | The project team and reviewers |
| Production | The public website | Visitors |

Staging reveals problems that local testing cannot, such as:

- Configuration missing on the host.
- Routes that fail when the page is refreshed.
- File names that differ only in capital letters.
- Assets that load locally but not from the hosted path.

**This lesson deploys to staging only. Production deployment is a separate decision and is not part of this lesson.**

## 2. Confirm authorisation and the documented method

Deployment changes something outside your computer. Before deploying, confirm:

| Question | Where to find the answer |
|---|---|
| Is a staging deployment authorised for this scope? | Supervisor decision or project rules |
| Which hosting service and project are used? | Architecture or deployment documentation |
| How is deployment triggered? | Deployment documentation |
| Which branch deploys to staging? | Branching rules |
| Who supplies environment configuration on the host? | Integration specification or supervisor |
| How is staging protected from public access and indexing? | Deployment documentation |
| How can a deployment be reversed? | Deployment documentation |

Deployment methods vary. Common approaches include:

- **Git-connected hosting**, where pushing a branch automatically builds a preview or staging deployment.
- **A deployment command** run from the terminal using the host’s command-line tool.
- **A manual process** carried out through the host’s website.

The practice project’s hosting arrangements have not been supplied with this curriculum. Use the method your project actually documents.

If the method is not documented, stop and ask. Do not choose a hosting service, create accounts or connect repositories yourself.

## 3. Check readiness before deploying

Deploy work that has been reviewed, not work in progress.

| Readiness item | Evidence |
|---|---|
| Scope | Pages and features included in this deployment |
| Review status | Relevant supervisor decisions from earlier units |
| Open findings | Outstanding issues, with any accepted for deployment recorded |
| Project checks | Type check, lint and production build pass |
| Automated tests | Playwright tests pass locally |
| Safety review | Lesson 9.1 findings resolved or accepted |
| Configuration | Required environment variable names identified |

A staging deployment can include known issues if the supervisor accepts that. Record which issues are included so reviewers do not report them as new.

## 4. Review the changes in Git

Lesson 4.3 introduced reviewing changes with Git, and Lesson 4.4 introduced saving accepted work as a checkpoint. Before committing for deployment, review everything that will be included.

Use VS Code’s Source Control view, with the terminal commands as equivalents. Run the commands in the integrated terminal, from the project folder.

### See what has changed

In the Source Control view, the **Changes** and **Staged Changes** lists show every modified, staged and untracked file. Select a file to see its diff. In the terminal:

```bash
git status
```

This lists modified, staged and untracked files.

### Review unstaged changes

```bash
git diff
```

### Review recent commits

The Source Control Graph in the Source Control view shows the commit history and which commits have not yet been pushed. In the terminal:

```bash
git log --oneline -10
```

This shows the last ten commits on the current branch.

### What to look for

| Concern | Example |
|---|---|
| Credentials | An environment file or a key in code |
| Personal data | Real enquiry details in test files |
| Debugging leftovers | `console.log` statements, commented-out code |
| Temporary files | Screenshots, test reports or local notes |
| Unrelated changes | Edits outside the deployment scope |
| Generated output | Build folders that the project does not track |

Check `.gitignore` covers build output and test reports where the project expects it, such as the Playwright report folder.

If you find something that should not be committed, do not commit it. Investigate and correct it first.

## 5. Stage and commit deliberately

**Staging** in Git means selecting which changes go into the next commit. This is a different use of the word from the staging environment.

Stage specific files rather than everything. In the Source Control view, select **+** (Stage Changes) beside each reviewed file. In the terminal:

```bash
git add path/to/changed-file.tsx
```

Then review exactly what is staged, by selecting each file in the Staged Changes list or with:

```bash
git diff --staged
```

`git diff --staged` and `git diff --cached` are the same command, as Lesson 4.3 explained.

Avoid **Stage All Changes**, `git add .` and `git add -A` unless you have just confirmed that every listed change belongs in the commit.

Commit with a clear message that follows the project’s conventions, by typing it in the message box and selecting **Commit**, or in the terminal:

```bash
git commit -m "[Message following the project convention]"
```

A useful message describes what changed and why, such as which finding or task it addresses.

### Follow the branching rules

Push only to the branch the project documents for this purpose. Check the branch shown at the bottom left of VS Code first.

In the Source Control view, select **More Actions (...) > Push**. Use Push rather than **Sync Changes**: Sync also pulls changes from GitHub, so it does more than you intend here. In the terminal:

```bash
git push origin [branch-name]
```

After pushing, confirm on GitHub that the commit appears on the documented branch.

Do not push directly to the main branch, force push or delete branches unless the project rules authorise it.

If a push is rejected, read the message and ask for help. Do not use options that override the rejection.

## 6. Configure the staging environment

The staging website needs its own configuration.

| Item | Expected treatment |
|---|---|
| Environment variables | Set on the host by the authorised person, using staging or test values |
| Credentials | Test credentials, not production ones, unless the supervisor decides otherwise |
| Form destinations | Approved test destinations from Lesson 7.1 |
| Access protection | Password or other protection as documented |
| Indexing | `noindex` or protection, as checked in Lesson 9.3 |
| Analytics and tracking | Disabled unless approved for staging |

You may need to provide the list of required variable names from Lesson 9.1. Never send values through chat, email or prompts. Follow the project’s method for sharing secrets.

## 7. Deploy and record the deployment

Follow the documented method exactly.

After deployment, record:

| Field | What to record |
|---|---|
| Date and time | When the deployment completed |
| Commit | The commit identifier deployed |
| Branch | The branch deployed |
| Method | How the deployment was triggered |
| Staging address | Where the website can be reviewed |
| Build result | Whether the host’s build succeeded, with any warnings |
| Performed by | Who deployed |

If the host’s build fails, read its build log. Common causes include missing environment variables, a different Node.js version or a file name case mismatch. Record the error and investigate it as a finding. Do not repeatedly redeploy without a change.

## 8. Verify the staging website

A successful build does not prove the website works. Verify it.

### Confirm the deployed version

Check that staging is running the recorded commit. Many hosts display the commit for each deployment. If yours does not, ask how to confirm it.

### Smoke test the website

A **smoke test** is a quick check that the main parts work before detailed testing.

| Check | Expected result |
|---|---|
| Homepage loads over HTTPS | No browser security warnings |
| Each approved route loads directly | Correct page, not an error |
| Refreshing an internal page | The page reloads correctly |
| Header and footer links | Reach the approved destinations |
| Images, fonts and styles | Load correctly |
| Browser console | No errors on the selected pages |
| Network panel | No failed requests |

Refreshing internal pages is important. Some hosting configurations serve only the homepage correctly, so internal routes work when reached by a link but fail on refresh or direct visit.

### Check environment-dependent behaviour

| Check | Expected result |
|---|---|
| Features using environment variables | Work with the staging configuration |
| Forms | Reach the approved test destination, only within the authorised test arrangements |
| Indexing controls | Staging is protected or marked `noindex`, as Lesson 9.3 established |
| Access protection | Unauthorised visitors cannot view the website, if required |

### Run the automated tests against staging

If the Playwright configuration reads the address from an environment variable, as in Lesson 8.4, you can run the tests against staging. In a macOS or Linux terminal:

```bash
BASE_URL=[staging address] npx playwright test
```

The syntax for setting an environment variable differs in Windows terminals. Check the project’s instructions for your terminal.

If staging is password protected, the tests may need authorised access configuration. Ask before adding any credentials to the test setup.

Only run tests that are safe for the staging environment. Do not run tests that submit forms to real destinations.

### Compare with local results

Run Lighthouse on the key pages, as in Lessons 8.3, 9.2 and 9.3. Hosting can change performance, so results may differ from local measurements. Record both.

## 9. Record differences between local and staging

Any behaviour that differs between local and staging is a finding.

| Finding | Possible cause to investigate |
|---|---|
| Internal page returns not found on refresh | Host routing configuration |
| Image missing on staging only | File name case or path |
| Form fails on staging only | Missing environment variable on the host |
| Staging appears in search results | Missing protection or `noindex` |
| Different layout | Cached old files or a build difference |

Add these to the QA record and follow the correction process from Lesson 8.2. Retest on staging after corrections are redeployed.

## 10. Know how to reverse a deployment

Before a problem happens, know the documented way to restore the previous working staging deployment. Many hosts allow this from their dashboard.

If staging is badly broken:

1. Record the evidence.
2. Inform the supervisor.
3. Follow the documented reversal method if you are authorised to use it.

Do not improvise a fix directly on the host or reverse commits in Git without direction.

## 11. Ask Claude to support the deployment

### Pre-deployment review prompt

```text
Review readiness for a staging deployment.

Before reviewing:
- Read the project instructions, branching rules and
  deployment documentation.
- Confirm the current branch, Git status and recent commits.

Check:
- Which changes would be included, file by file.
- Any credentials, personal data, debugging output,
  temporary files or generated output in the changes.
- Whether .gitignore covers environment files, build
  output and test reports.
- Whether the type check, lint, production build and
  Playwright tests pass.
- Which environment variable names the staging host needs.
- Whether the documented deployment method, branch and
  reversal method are clear.

Report findings and any missing documentation.
Never print secret values.

Review only. Do not stage, commit, push or deploy.

Deployment scope:
[Insert the scope and authorisation reference.]
```

### Staging verification prompt

```text
Verify the staging website against the deployment scope.

Staging address and deployed commit:
[Insert address and commit.]

Check:
- The deployed commit matches the recorded commit.
- Each approved route loads directly and after refresh.
- Navigation, images, fonts and styles load correctly.
- Browser console errors and failed network requests.
- Indexing controls and access protection on staging.
- Behaviour that depends on environment configuration.

Compare results with the local evidence in the QA record.
Report every difference as a finding with evidence.

Do not submit forms, send messages or trigger external
actions outside the authorised test arrangements.
Do not edit files, commit, push or deploy.
State which checks you actually performed.
```

## 12. Keep deployment separate from acceptance

| Record | What it shows |
|---|---|
| Deployment record | What was deployed, when and how |
| Staging verification | What was checked on staging and the results |
| Supervisor decision | Whether the staged work is accepted |
| Production authorisation | Whether release to the public is approved |

A successful staging deployment does not mean the work is accepted. Acceptance does not authorise production deployment. Keep each decision separate in your records.

## 13. Practical exercise

**Task: Deploy reviewed work to staging and verify it.**

1. Confirm authorisation and the documented deployment method.
2. Complete the readiness check.
3. Review all changes with Git.
4. Stage and commit only the intended changes.
5. Push to the documented branch.
6. Confirm the staging configuration with the authorised person.
7. Deploy using the documented method and record it.
8. Verify the deployed version and smoke test the website.
9. Check environment-dependent behaviour and indexing controls.
10. Run safe automated tests against staging.
11. Record differences as findings.

If deployment is not authorised or the method is not documented, complete steps 2 to 4, prepare the deployment request and stop.

## 14. Expected submission

Submit:

- The deployment authorisation reference.
- The readiness check.
- A summary of the reviewed Git changes and the commit message.
- The deployment record.
- Staging verification results.
- Automated test results against staging.
- Lighthouse comparison between local and staging.
- New findings for local and staging differences.
- Confirmation that no secrets were shared outside the documented method.

## 15. Completion criteria

The lesson is complete when:

- Deployment was authorised and followed the documented method.
- Only intended, reviewed changes were committed.
- The deployment record identifies the deployed commit.
- Staging has been verified, not only built.
- Indexing and access controls on staging are confirmed.
- Differences from local behaviour are recorded as findings.
- Deployment, acceptance and production authorisation remain separate.

## 16. Knowledge check

1. Why should you avoid Stage All Changes or `git add .` without first reviewing the changes?
2. Why is refreshing an internal page an important staging check?
3. Why should staging use test configuration and destinations?
4. What should you do if the host’s build fails?
5. Does a successful staging deployment mean the work is accepted?

---

# Lesson 10.1: Interpret a Change Brief and Update the Project Instructions

### Learning objective

By the end of this lesson, you should be able to:

- Explain how the Unit 10 assessment works and how it is judged.
- Extract the required outcome, scope and constraints from a change brief.
- Identify ambiguities and ask focused clarification questions.
- Analyse which parts of the project a change affects.
- Propose updates to the project instructions and task plan for supervisor approval.

**Prerequisites:** Complete Unit 9 and have its review decisions recorded.

**Required materials:** A change brief supplied by your supervisor, the approved instruction baseline from Unit 3, the current implementation, QA record, page register, Playwright tests and the staging deployment record.

## 1. Understand the Unit 10 assessment

Units 1 to 9 taught each part of the workflow with detailed guidance. Unit 10 asks you to use that workflow with less guidance.

Your supervisor will give you a **change brief**: a short request to change the website. You will:

| Lesson | Your work |
|---|---|
| 10.1 | Interpret the brief and propose updates to the project instructions |
| 10.2 | Plan and implement the change |
| 10.3 | Test the change and submit evidence |
| 10.4 | Present the website, known issues and handover |

These lessons give less step-by-step instruction than earlier units. They point you back to the earlier lessons that cover each skill.

### What independence means here

Working independently does not mean working without asking questions.

| Independent behaviour | Not independent |
|---|---|
| Making routine decisions using established conventions | Asking the supervisor to approve every small choice |
| Asking focused questions when a decision is genuinely missing | Guessing at decisions that belong to someone else |
| Recording assumptions and decisions | Making silent assumptions |
| Checking Claude’s work yourself | Accepting Claude’s report without review |
| Reporting limits honestly | Presenting unchecked work as finished |

**Asking the right question at the right time is a skill being assessed, not a weakness.**

### How the assessment is judged

Your supervisor will use the project’s assessment criteria. If none have been set, the following areas reflect what this curriculum has taught:

| Area | What the supervisor looks for |
|---|---|
| Understanding | The change’s outcome, scope and constraints are understood correctly |
| Instructions | Project documents are updated accurately and only where needed |
| Planning | Tasks are bounded, with verifiable acceptance criteria |
| Implementation | The change follows approved references and existing conventions |
| Verification | Evidence supports each claim, and limits are stated |
| Communication | Questions, decisions, findings and handover are clear and honest |

This table is guidance for the supervisor. It does not replace any assessment criteria the supervisor provides.

## 2. Read the brief for its essential parts

Read the whole brief before acting. Then extract:

| Element | Question to answer |
|---|---|
| **Outcome** | What should be true after the change? |
| **Reason** | Why is the change needed? |
| **Scope** | Which pages, features or content are included? |
| **Exclusions** | What is explicitly not included? |
| **Supplied materials** | Which copy, images or decisions are provided? |
| **Constraints** | Deadlines, design rules or technical limits |
| **Acceptance** | How will the requester judge success? |

### Illustrative brief

> Saffron Wellness Clinic wants to add an approved new treatment to the website. The treatment should appear in the treatment listing and have its own detail page. Copy and one image are attached. The homepage does not need to change.

Only use this example to practise. Your supervisor will supply the actual brief.

From this illustrative brief:

| Element | Extracted answer |
|---|---|
| Outcome | Visitors can find and read about the new treatment |
| Scope | Treatment listing and a new detail page |
| Exclusion | Homepage |
| Supplied | Copy and one image |
| Not stated | Route, metadata, position in the listing, alternative text, call to action destination |

The “Not stated” row is as important as the rest. It shows where questions or proposals are needed.

## 3. Identify ambiguities and conflicts

Compare the brief with the approved baseline from Unit 3 and the current implementation.

Look for:

- Information the brief does not provide.
- Statements that conflict with approved documents.
- Wording that could mean more than one thing.
- Supplied materials that do not fit the existing design.
- Effects the requester may not have considered.

### Classify each issue

| Type | Example | Response |
|---|---|---|
| **Blocking question** | The detail page’s route is not defined and no IA pattern covers it | Ask before implementing that part |
| **Stated assumption** | The new card follows the existing treatment card design | Record the assumption and proceed unless told otherwise |
| **Conflict** | The supplied image has a different aspect ratio from existing cards | Report it with options for a decision |
| **Out of scope** | You notice an unrelated typo on another page | Record it as a separate finding |

An assumption is acceptable when existing conventions clearly support it. Record it so the supervisor can correct it early.

### Write focused questions

A good question can be answered quickly and states why it matters.

| Weak question | Focused question |
|---|---|
| What do you want the page to look like? | Should the new detail page use the existing treatment detail template? The brief does not say, and the supplied copy has no section for pricing. |
| Is the image okay? | The supplied image is portrait, but treatment cards use a landscape crop. Should we request a landscape version, or crop the supplied image? |

Group your questions in one message rather than sending them one at a time.

## 4. Analyse the impact on the project

Inspect the current project, as in Lesson 4.1, to find everything the change touches.

| Area | Questions | Earlier lesson |
|---|---|---|
| Routes and IA | Does the change add, rename or remove a route? | 6.1, 6.3 |
| Components | Does an existing component support it, or does it need a change? | 4.3, 6.2 |
| Content and assets | Are copy, images and alternative text supplied and approved? | 5.2 |
| Navigation and journeys | Which links and journeys change? | 6.3 |
| Interactive features | Does the change affect forms or other features? | 7.1 |
| Accessibility | Which checks apply to the new or changed content? | 8.3 |
| Automated tests | Which tests need adding or updating? | 8.4 |
| Data and dependencies | Does the change involve personal data or new packages? | 9.1 |
| Performance | Do new images or scripts affect loading? | 9.2 |
| Metadata and search | Does the change need titles, descriptions or sitemap updates? | 9.3 |
| Deployment | Will the change be deployed to staging? | 9.4 |

Shared components deserve particular attention. Adding a new treatment card might seem local, but a change to the card component affects every page using it.

## 5. Propose updates to the project instructions

Unit 3 established the project’s instruction documents, such as the PRD, architecture, working rules and task plan, as the implementation baseline. A change to the website should be reflected in those documents before implementation.

For each document, decide whether the change affects it:

| Document | Typical update |
|---|---|
| PRD or requirements | Add or change the requirement the brief introduces |
| IA or sitemap | Add the new route and its entry points |
| Architecture | Only if the change affects structure, data or integrations |
| Working rules | Rarely, unless the change introduces a new rule |
| Task plan | Add the new tasks with acceptance criteria and verification |
| Content and asset registers | Add the supplied materials and their status |

Update only what the change requires. Do not reorganise or rewrite unrelated sections.

### Record each change clearly

Each update should show what changed and why:

| Field | Example |
|---|---|
| Document | Task plan |
| Section | Treatment pages |
| Change | Added tasks T-NEW-01 to T-NEW-03 for the new treatment |
| Reason | Change brief, dated and identified |
| Affected tasks | New tasks only; existing treatment tasks unchanged |
| Status | Awaiting review |

Use the project’s existing version or change-note format if it has one.

Keep the updated documents marked **Awaiting review** until the supervisor approves them. Approved updates become the new instruction baseline for Lesson 10.2.

## 6. Write the change tasks

Use the task structure from Lesson 4.2. For each task, include:

- One clear outcome.
- Scope and boundaries.
- References, including the brief and any answers to your questions.
- Prerequisites and blocking questions.
- Acceptance criteria.
- Verification methods, including manual checks and automated tests.
- Regression scope.

### Example acceptance criteria

For the illustrative brief:

| Acceptance criterion | Verification |
|---|---|
| The listing includes a card for the new treatment, in the approved position | Browser check and Playwright test |
| The card links to the new detail page | Journey test from the listing |
| The detail page shows the supplied copy exactly | Comparison with the supplied source |
| The image displays with approved alternative text and crop | Browser check at required widths |
| The page has an approved title and description | Rendered metadata check and Playwright test |
| Existing treatment cards and pages are unchanged | Regression checks on representative pages |

Replace these with criteria for the actual brief.

## 7. Ask Claude for an impact review

```text
Review the change brief against the current project and
its approved instructions.

Before reviewing:
- Read the project instructions and approved baseline.
- Confirm the current Git status.
- Read the change brief and any answers already received.

Report:
1. The required outcome, scope and exclusions, as stated
   in the brief.
2. Information the brief does not provide.
3. Conflicts with approved documents or the implementation.
4. Routes, components, content, tests, metadata and other
   areas the change affects, with file references.
5. Shared components whose other usages may be affected.
6. Project documents that need updating, and the sections.
7. Questions that block implementation, separately from
   assumptions supported by existing conventions.

Do not invent answers to open questions.
Do not propose design changes beyond the brief.

Review only. Do not edit files, install dependencies,
commit, push or deploy.

Change brief:
[Insert the brief.]
```

Compare Claude’s analysis with your own. The assessment is of your understanding. Use Claude’s review to check for gaps, not as a replacement for your analysis.

## 8. Submit the change analysis

Combine your work into one submission for the supervisor:

1. The extracted brief elements.
2. Questions, grouped and focused.
3. Stated assumptions.
4. The impact analysis.
5. Proposed document updates, marked Awaiting review.
6. The change tasks with acceptance criteria.

Wait for answers and approval before implementing blocked tasks. Tasks that are not blocked may proceed in Lesson 10.2 once their instruction updates are approved.

## 9. Practical exercise

**Task: Interpret the supervisor’s change brief and prepare the instruction updates.**

1. Read the brief and extract its essential parts.
2. Compare it with the approved baseline and current implementation.
3. Classify ambiguities, conflicts and assumptions.
4. Send focused questions to the supervisor.
5. Complete the impact analysis.
6. Propose updates to the affected project documents.
7. Write the change tasks with acceptance criteria and verification.
8. Ask Claude for an impact review and compare it with yours.
9. Submit the change analysis.

Use only the brief your supervisor provides. If no brief has been supplied, request one. Do not create your own brief for the assessment.

## 10. Expected submission

Submit:

- The extracted brief elements.
- Questions sent and answers received.
- Recorded assumptions.
- The impact analysis.
- Proposed document updates with change notes.
- Change tasks with acceptance criteria and verification methods.
- Claude’s impact review and how it compared with yours.
- The supervisor’s approval decision once received.

## 11. Completion criteria

The lesson is complete when:

- The brief’s outcome, scope and gaps are identified correctly.
- Questions are focused and grouped.
- Assumptions are recorded, not hidden.
- The impact analysis covers shared effects.
- Document updates are limited to what the change requires.
- Tasks have verifiable acceptance criteria.
- Updated instructions await or have received supervisor approval.

## 12. Knowledge check

1. When is it reasonable to proceed on a stated assumption rather than ask a question?
2. Why should project instructions be updated before implementation?
3. Why does a change to one card need a check of other pages?
4. What makes a clarification question focused?
5. Why should your own impact analysis come before Claude’s?


---

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


---

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


---

# Lesson 10.4: Present the Website, Known Issues and Handover

### Learning objective

By the end of this lesson, you should be able to:

- Prepare handover notes that let another person run, check and continue the website.
- Maintain an honest known issues list with impact and status.
- Plan and deliver a demonstration of the website and the change.
- Answer questions by distinguishing verified facts from assumptions.
- Record the assessment outcome separately from website acceptance and deployment authority.

**Prerequisites:** Complete Lesson 10.3 with the evidence package submitted.

**Required materials:** The evidence package, QA record, page register, decision log, deployment records, project instructions and any presentation format the supervisor has specified.

## 1. Understand the purpose of the handover

A **handover** transfers responsibility for work to someone else, such as a supervisor, another team member or the client.

The person receiving it should be able to:

- Understand what was built and what was changed.
- Run the website and its checks.
- Find the evidence behind each claim.
- See what is incomplete or uncertain.
- Continue the work without reconstructing its history.

**A good handover is honest about limits. A handover that hides problems transfers them to someone who does not know they exist.**

This lesson also includes the final assessment presentation. The presentation shows your work. The handover notes are the lasting record.

## 2. Write the handover notes

Combine the records from earlier units into one document. Link to existing records rather than copying them.

| Section | What to include | Source |
|---|---|---|
| **Overview** | What the website is and its current state, in a few sentences | Project brief |
| **Scope delivered** | Pages, features and the Unit 10 change | Page and feature registers |
| **Instruction baseline** | Approved document versions | Unit 3 baseline, Lesson 10.1 updates |
| **Running locally** | Where the project is and the documented commands | Project instructions |
| **Checks and tests** | How to run the type check, lint, build and Playwright tests | Lessons 8.4 and 9.2 |
| **Environments** | Local and staging addresses, and the deployed commit | Lesson 9.4 |
| **Configuration** | Environment variable names and their purpose, never their values | Lesson 9.1 |
| **Content and assets** | Content sources, asset register and remaining temporary materials | Lessons 5.1 and 5.2 |
| **Quality status** | Accessibility, performance and search readiness results, with their limits | Lessons 8.3, 9.2 and 9.3 |
| **Known issues** | See Section 3 | QA record |
| **Open decisions** | Questions awaiting an answer, and who owns each | Decision log and QA record |
| **Recommended next steps** | Specific actions, in priority order | Your assessment |

### Write for a new reader

Imagine someone who has never seen the project reading the notes.

- Define project-specific terms.
- Use exact commands from the project’s documentation.
- State where each record is kept.
- Explain anything that only works in a particular way.

Ask a colleague to follow the running instructions, if possible. Instructions that work only for their author are not finished.

## 3. Maintain an honest known issues list

Draw the known issues from the QA record. Include every open finding, every accepted limitation and every unchecked area that matters.

| Field | What to include |
|---|---|
| ID | The QA record reference |
| Issue | What is wrong or unverified |
| Impact | Who it affects and how |
| Priority | From the QA record |
| Status | Open, Awaiting decision or accepted limitation |
| Workaround | Any temporary way around the issue |
| Owner | Who needs to act |

### Example

| ID | Issue | Impact | Priority | Status | Owner |
|---|---|---|---|---|---|
| QA-A11Y-03 | Section text contrast below the agreed requirement | Harder to read for some visitors on all detail pages | Major | Awaiting decision on brand colour | Supervisor |
| QA-CH-02 | New treatment image crops the subject at narrow widths | Reduced image clarity on phones | Minor | Awaiting replacement image | Supervisor |
| Not checked | Real-device testing on iOS | Unknown behaviour on Safari on iPhone | To be assessed | Not performed | To be assigned |

These are illustrative. Use your actual findings.

Unchecked areas belong in the list. “Not checked” is a known gap, and the reader needs to know about it.

## 4. Plan the presentation

Confirm the presentation format with your supervisor:

- Who will attend.
- How long you have.
- Whether to present locally, on staging or both.
- What the supervisor most wants to see.

A useful structure:

| Part | Content |
|---|---|
| Context | The website’s purpose and the approved scope, briefly |
| Walkthrough | The approved visitor journeys, on the agreed environment |
| The change | The brief, your interpretation, the questions you asked and how you implemented it |
| Evidence | How you verified the change, using the acceptance matrix |
| Known issues | The most important open issues and decisions |
| Next steps | What should happen next |
| Questions | Time for the supervisor’s questions |

Keep the walkthrough focused on approved journeys. Show the evidence rather than describing it from memory.

### Prepare for problems

Live demonstrations can fail for reasons unrelated to your work, such as a network outage.

- Test the demonstration path in advance on the same environment.
- Have screenshots or a short recording of the main journeys ready.
- Know which features you will not demonstrate live, and why.

## 5. Demonstrate safely

The presentation is not a reason to bypass earlier rules.

- Use the agreed environment, normally local or staging.
- Use synthetic information in any form.
- Do not trigger real messages, bookings or other external actions unless they are authorised.
- Do not display configuration values, credentials or private records on screen.
- Close unrelated tabs, notifications and files before sharing your screen.

If a feature can only be shown by performing an unauthorised external action, show its evidence instead and explain the boundary.

## 6. Answer questions accurately

During questions, distinguish what you know from what you assume.

| Situation | Useful response |
|---|---|
| You verified it | “Yes. The acceptance matrix shows the test and its conditions.” |
| You did not check it | “I didn’t check that. It is listed as not checked in the handover.” |
| You assumed it | “I assumed that based on the existing card design. It is recorded in the decision log.” |
| You do not know | “I don’t know. I can find out and add the answer to the handover.” |

“I don’t know” followed by a way to find out is a strong answer. A confident guess that turns out to be wrong damages trust in the rest of your evidence.

Record any follow-up actions that arise from questions and add them to the handover notes.

## 7. Ask Claude to review the handover

```text
Review the handover notes for accuracy and completeness.

Read:
- The handover notes.
- The QA record, page register and decision log.
- The evidence package and acceptance matrix.
- Deployment records and project instructions.

Check:
1. Every claim in the notes is supported by a linked record.
2. The known issues list includes every open finding,
   accepted limitation and unchecked area from the records.
3. The running and testing instructions match the
   documented commands.
4. Configuration is described by variable names only,
   with no values.
5. Environments and deployed commits are identified.
6. A new team member could run the website and checks
   using only these notes and the linked records.
7. Nothing overstates completion, quality or compliance.

Report each gap or inaccuracy with a specific reference.

Review only. Do not edit files, commit, push or deploy.
```

Correct genuine gaps. If Claude reports an issue you believe is wrong, check the record and note your reasoning.

## 8. Record the outcome

After the presentation, the supervisor records their decisions. Keep these separate:

| Record | What it decides | Who decides |
|---|---|---|
| **Assessment outcome** | Whether you have met the curriculum’s assessment requirements | Supervisor |
| **Website acceptance** | Whether the implemented website and change are accepted, and for what scope | Supervisor or client |
| **Deployment authority** | Whether any version may be released to production | The person authorised by the project |

These decisions are independent. You may pass the assessment while the website still has open issues. The website may be accepted for staging while production release is not authorised.

Leave each decision as **Awaiting review** until the supervisor records it. Record the reviewer, date, scope and any conditions.

Curriculum approval of this lesson is a separate matter again. It concerns the lesson text, not your work.

## 9. Reflect on your progress

Write a short reflection to help you and your supervisor plan your next steps:

- Which parts of the workflow do you now complete confidently?
- Where did you need the most help?
- Which decision would you make differently next time, and why?
- What would you like to learn next?

Be specific. “I need more practice with debugging” is less useful than “I found it hard to tell whether a failing test was caused by the site or the test.”

## 10. Practical exercise

**Task: Complete the handover and present your work.**

1. Write the handover notes, linking to existing records.
2. Compile the known issues list from the QA record.
3. Ask a colleague to follow the running instructions, if possible.
4. Ask Claude to review the handover and correct genuine gaps.
5. Confirm the presentation format with your supervisor.
6. Prepare and rehearse the walkthrough and fallback materials.
7. Deliver the presentation.
8. Record follow-up actions from questions.
9. Record the supervisor’s decisions separately.
10. Write your reflection.

## 11. Expected submission

Submit:

- The handover notes.
- The known issues list.
- The presentation materials and fallback evidence.
- Claude’s handover review and your corrections.
- Follow-up actions from the presentation.
- The assessment outcome, website acceptance and deployment authority records, once decided.
- Your reflection.

## 12. Completion criteria

The lesson is complete when:

- The handover lets a new reader run, check and continue the website.
- Every claim links to supporting records.
- Known issues, open decisions and unchecked areas are listed honestly.
- No credentials, personal data or private values appear in any material.
- The presentation used safe, agreed environments and data.
- Questions were answered without overstating evidence.
- Assessment, acceptance and deployment decisions are recorded separately.

## 13. Knowledge check

1. Why should unchecked areas appear in the known issues list?
2. How should you answer a question about something you did not verify?
3. Why prepare screenshots or a recording before a live demonstration?
4. How do the assessment outcome, website acceptance and deployment authority differ?
5. What makes handover instructions usable by someone other than their author?
