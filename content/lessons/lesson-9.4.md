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
