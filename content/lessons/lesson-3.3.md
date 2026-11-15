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
