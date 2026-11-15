# Lesson 5.1: Building the Homepage Section by Section

### Learning objective

By the end of this lesson, you should be able to:

- Break an approved homepage into sections you can build one at a time.
- Build the sections in an order that respects what each one depends on.
- Reuse the shared foundation from Unit 4.
- Assemble the sections into the correct page structure.
- Check each section before moving on to the next.

**Prerequisites:** Complete Unit 4 and have an approved homepage design and outline.

**Required materials:** The starter project, approved homepage references, style guide, IA, the content and assets available so far, and the task plan.

## 1. Treat the homepage as one connected page

Building one section at a time makes the work easier to check. The finished result must still work as a single, coherent page.

Each section should:

- Meet a defined visitor need.
- Follow the approved order and layout.
- Use the shared visual system from Unit 4.
- Connect properly to the rest of the website.

This lesson covers the page structure and its approved sections. The next two lessons build on it:

| Lesson | Focus |
|---|---|
| 5.1 | Structure and sections |
| 5.2 | Checking and completing copy, images and calls to action |
| 5.3 | Refining the page across screen sizes |

Use supplied, approved material throughout. If temporary content is allowed, keep a clear record of it so it cannot be mistaken for final content.

## 2. Map the approved sections

Start with the homepage outline approved during planning, and turn it into an implementation map.

| Field | What to record |
|---|---|
| Section | Its approved name and position on the page |
| Purpose | The visitor question it answers |
| Reference | The exact design frame or document |
| Content and assets | The materials it needs, and whether they are available |
| Shared components | Existing elements to reuse |
| Dependencies | Decisions or resources needed first |
| Acceptance criteria | Observable conditions for completion |

For example, **only if the approved Saffron Wellness Clinic design contains these sections**:

| Section | Purpose | Possible reuse |
|---|---|---|
| Hero | Introduce the business and the main next step | Shared link or button styles |
| Treatment overview | Help visitors explore treatments | Treatment cards |
| First-visit introduction | Explain where to learn about a first visit | Shared section heading |
| Outlet overview | Help visitors find a location | Location presentation pattern |

A **hero** is the large introductory section at the top of a page.

Do not add these sections just because they appear in this example. Build only what the approved design includes.

## 3. Check what already exists

Before building, find out whether the homepage already has:

- A **route**, which is the address path that shows the page, such as `/`, and the page component behind it.
- A **shared layout**, which is a component that wraps every page and usually provides the header and footer.
- Existing sections.
- Reusable components and styles.
- Temporary content from the starter project.
- Changes from earlier tasks.

Ask Claude to identify what can be kept, adapted or replaced within the approved scope.

**If the shared layout already provides the header and footer, do not add them to the homepage again.** Otherwise the page will show two of each.

Confirm that the project still matches what was recorded at the end of Unit 4.

## 4. Choose an implementation order

Follow dependencies rather than building everything at once.

A typical sequence is:

1. Confirm the homepage route and shared layout.
2. Set up the approved content container and section structure.
3. Build the first section.
4. Check its acceptance criteria.
5. Build the next section.
6. Review the assembled page.

The order you build in does not have to match the order on the page. For example, a shared component may need finishing before the section that uses it.

Keep the approved display order on the page unchanged unless a revision has been authorised.

### Handle blocked sections explicitly

A section is **blocked** when something it needs is missing.

If an image is missing:

- Check whether an approved placeholder is allowed.
- Build the surrounding structure only if that is useful.
- Record that the section is not visually complete.

If an essential layout decision is missing, pause that section and work on another task that can proceed.

## 5. Give each section a bounded task

### Example section task

**Task: Build the approved treatment overview section.**

| Area | Requirement |
|---|---|
| Outcome | Visitors can see the listed treatments and reach their agreed pages |
| References | Approved homepage section, style guide, IA and treatment content |
| Scope | Heading, introduction, card arrangement and supplied card instances |
| Reuse | The existing treatment card and shared spacing styles |
| Boundaries | Keep the approved wording, order and destinations |
| Verification | Compare the layout, check the content, test the links and run the relevant project checks |

Do not ask Claude to redesign neighbouring sections so that the selected section “fits better”.

If the shared card lacks something the design needs, identify the supporting change and check the card’s other usages before making it.

## 6. Build one section

Use the actual task ID and references in this prompt:

```text
Implement the selected homepage section using the approved task.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the homepage route, shared layout and existing components.
- Confirm the section's prerequisites.

Implementation:
- Follow the approved section order and design.
- Use the existing TypeScript, TSX and styling conventions.
- Reuse shared components and styles where appropriate.
- Use supplied approved content and assets.
- Apply only the agreed treatment for missing materials.
- Preserve unrelated sections and existing work.

After implementation:
- Run applicable documented checks.
- Explain files changed and any shared effects.
- Report which acceptance criteria were verified.
- List browser checks or dependencies still outstanding.

Do not add sections, invent content, install dependencies,
commit, push or deploy without the relevant authorisation.

Selected task:
[Insert task.]

References:
[Insert exact references.]
```

Review the result before asking for the next section.

## 7. Check each section

Use the review method from Lesson 4.4.

| Area | Question |
|---|---|
| Structure | Are all required elements present and correctly grouped? |
| Layout | Do the width, alignment and spacing follow the reference? |
| Shared styling | Are the correct typography, colours and component styles used? |
| Content | Is the supplied copy preserved? Are any placeholders recorded? |
| Links | Do the implemented links reach their agreed pages? |
| Integration | Does the section sit correctly inside the shared layout? |
| Basic resilience | Does the content stay usable when the browser window narrows? |

Lesson 5.3 covers the full responsive refinement. Still, fix obvious problems now, such as content spilling off the screen or becoming unusable.

## 8. Review the assembled homepage

Once all the planned sections are in place, look at the page as a whole.

Look for:

- Sections in the wrong order.
- Duplicate headers, footers or main content areas.
- Inconsistent content widths.
- Unexpected gaps between sections.
- Repeated or missing content.
- Heading levels that do not match the page structure.
- Broken links between sections or pages.
- Shared changes that affected earlier work.

### Check heading levels across the page

Headings form an outline of the page. Screen reader users often move from heading to heading to find what they need.

A typical homepage has one level 1 heading. Section headings are usually level 2. Headings inside a section, such as treatment card titles, are usually level 3. The treatment card from Lesson 4.3 lets you set its heading level so it fits the section it appears in.

Choose heading levels by their place in the outline, not by how large they look. Styles control size.

A section can pass on its own and still cause a problem when placed next to its neighbours.

### Record progress honestly

| Status | Meaning |
|---|---|
| Not started | Work has not begun |
| In progress | Work is underway |
| Blocked | A specific dependency is preventing progress |
| Implemented, awaiting verification | The code exists, but checks remain |
| Ready for review | The required checks are complete and the evidence is available |

Use the project’s own status labels if it already has them.

## 9. Practical exercise

**Task: Assemble the approved homepage through separate section tasks.**

1. Create the section implementation map.
2. Confirm the route and shared layout.
3. Identify dependencies and choose the build order.
4. Build each section through a bounded prompt.
5. Check each result before continuing.
6. Review the assembled page, including heading levels.
7. Record missing materials and unresolved findings.

Start a **temporary content register**, a simple table listing every placeholder or temporary asset, where it is used and what it is waiting for. Lesson 5.2 uses it.

If a section is blocked, submit the completed parts and explain exactly what remains blocked.

## 10. Expected submission

Submit:

- The homepage section map.
- The build order and dependencies.
- Task IDs and their current statuses.
- A summary of changed files.
- A screenshot of the assembled page.
- Verification results and remaining findings.
- The temporary content register, if temporary content is allowed.

## 11. Completion criteria

The lesson is complete when:

- The homepage follows the approved section structure.
- Shared layouts, components and styles are reused appropriately.
- Each implemented section has been checked.
- The assembled page has been reviewed for integration issues, including heading levels.
- Missing materials and incomplete checks remain visible.
- The work is ready for the content, image and call to action pass in Lesson 5.2.

## 12. Knowledge check

1. Why should the homepage be reviewed as a whole after checking individual sections?
2. Can the build order differ from the order on the page?
3. What should happen when a section’s required image is not available?
4. Why must you check the shared layout before adding a header or footer?
5. Does “implemented” mean the same as “verified”?
