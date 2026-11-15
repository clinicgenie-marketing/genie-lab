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
