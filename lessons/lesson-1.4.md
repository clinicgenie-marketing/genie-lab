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
