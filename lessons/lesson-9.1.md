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
