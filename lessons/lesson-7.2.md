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
