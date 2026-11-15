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
