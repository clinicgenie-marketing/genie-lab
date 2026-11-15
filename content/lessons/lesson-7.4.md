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
