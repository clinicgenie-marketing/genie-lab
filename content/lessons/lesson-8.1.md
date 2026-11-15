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
