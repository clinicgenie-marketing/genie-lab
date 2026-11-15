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
