# Lesson 6.1: Planning and Building Internal Pages

### Learning objective

By the end of this lesson, you should be able to:

- Identify the requirements for an internal page.
- Separate shared page patterns from content that belongs to one page.
- Build an internal page from the approved IA and design.
- Connect the new page to the rest of the website.
- Check the page and any shared components it affects.

**Prerequisites:** Complete Unit 5 and have the homepage review decision recorded.

**Required materials:** Approved IA, internal-page designs, page content, assets, architecture document, shared components and task plan.

## 1. Understand what internal pages are for

An **internal page** is any page other than the homepage. Internal pages give visitors more detail or let them do something the homepage cannot.

Depending on the approved website, they might include:

- Treatment pages.
- An about page.
- Location pages.
- A contact page.
- Resource or article pages.

Build only the pages included in the approved scope.

Each page should meet a defined visitor need and connect to the rest of the website.

**An internal page needs its own requirements. It should not automatically copy the homepage’s section structure.**

## 2. Create a page implementation map

Use the approved IA to list the pages and how they relate to each other. For each page, record:

| Field | What to establish |
|---|---|
| Page name | Its approved name and purpose |
| Route | The confirmed address path, such as `/treatments` |
| Page type | Listing, detail, information or another approved type |
| References | The design, content and style guide that apply |
| Sections | The required content and its order |
| Shared elements | Existing layout and components to reuse |
| Assets | The files it needs, and whether they are available |
| Navigation | Links into the page and out of it |
| Dependencies | Missing decisions, content or connections to other services |
| Verification | Acceptance criteria and the checks that match them |

A **listing page** shows several items, such as all treatments. A **detail page** covers one item in depth, such as a single treatment.

Take routes from the IA. Do not make them up from page titles.

### Example

Only if these pages exist in the approved project:

| Page | Purpose | Possible shared elements |
|---|---|---|
| Treatment listing | Help visitors explore the available treatments | Treatment cards, page introduction |
| Treatment detail | Explain one treatment and its next step | Detail-page layout, call to action |
| Location detail | Give outlet information | Address block, location links |

These examples show how pages relate. They do not add pages to the project.

## 3. Check what already exists

Before creating a page, find out whether it already exists. Inspect:

1. The route structure.
2. The shared layouts.
3. Related pages.
4. Reusable components.
5. Where content is stored.
6. The relevant project checks.
7. The current Git changes.

A route may already contain a placeholder or a partly built page. Extend or replace it within the authorised scope. Do not create a second, competing route for the same page.

### Confirm the framework’s conventions

A **framework** is the toolkit the starter project is built on. It decides how files turn into pages and how routes work. Different TypeScript and TSX projects organise pages differently, so do not assume.

Before building, ask Claude to identify the relevant files and explain how the selected route is turned into a page in this project.

## 4. Recognise shared page patterns

Several pages may share a structure while showing different information.

For example, approved treatment detail pages might all include:

- A page introduction.
- An explanation of the treatment.
- What to expect.
- A relevant next step.

Reuse that structure where the approved designs support it. A reusable page structure like this is often called a **template**.

Looking similar is not enough reason to force pages into one template.

| Situation | Suitable approach |
|---|---|
| Several pages share an approved structure | Reuse a layout or page pattern |
| One component appears on different kinds of page | Reuse the component |
| One page has its own approved structure | Build its specific layout |
| Future pages are not yet defined | Do not add template options for them |

Do not introduce a **content management system (CMS)**, a tool for editing website content outside the code, or any new way of generating routes, just because several pages are planned. Follow the approved architecture.

## 5. Choose the first page to build

Choose a page whose prerequisites are all in place.

A good first page:

- Has approved content and design.
- Uses existing shared components.
- Has confirmed link destinations.
- Represents a pattern other pages will need.
- Can be reviewed on its own.

Do not start with a page that is blocked by an unresolved connection to another service when another approved page can go ahead.

### Example task

**Task: Build the approved treatment detail page.**

| Area | Requirement |
|---|---|
| Outcome | Visitors can read the approved treatment information and follow its confirmed next step |
| Scope | The selected route, required sections, supplied assets and page links |
| Reuse | The existing site layout, typography and suitable components |
| Boundaries | Keep the approved wording, structure and all unrelated pages |
| Dependencies | Approved content, a selected image and a confirmed call to action destination |
| Verification | Opening the route directly, design comparison, content checks, link tests and a responsive review |

Use the actual task ID and references.

## 6. Build the page within the existing site

Follow the approved section order and the shared visual system. Check that:

- The shared header and footer appear once.
- The page has a clear main heading at level 1.
- Heading levels reflect the page’s content structure.
- Approved text and assets appear in the right sections.
- Links use confirmed destinations.
- The layout works at the required widths.

Do not copy the whole homepage into a new route and delete sections until it looks right. That leaves hidden leftovers and makes the page hard to maintain. Reuse the parts of the foundation you actually need.

### Implementation prompt

```text
Implement the selected internal page using the approved task
and project references.

Before editing:
- Read the relevant project instructions.
- Confirm the project location and current Git status.
- Inspect the existing route, shared layout and related pages.
- Confirm that required content, assets and decisions are available.

During implementation:
- Follow the existing routing and content architecture.
- Use the approved page structure and exact supplied copy.
- Reuse applicable layouts, components and shared styles.
- Preserve the shared header and footer without duplication.
- Connect links to confirmed destinations.
- Follow approved responsive requirements.
- Preserve unrelated pages and existing work.

Do not introduce a CMS, new dependencies or a broader
page-template system unless required by the approved task.

After implementation:
- Check direct access to the route and browser refresh.
- Compare the page with the approved references.
- Verify content, images, links and responsive behaviour.
- Check shared usages affected by changes.
- Run applicable documented project checks.
- Report changes, evidence and remaining limitations.

Do not commit, push or deploy.

Selected task:
[Insert task ID and specification.]

Approved references:
[Insert exact paths or reference locations.]
```

## 7. Connect the page to the visitor journey

A page that opens at its address is not necessarily part of the website. Visitors also need a way to find it.

Check the approved **entry points**, the links visitors use to reach the page, such as:

- Header or footer links.
- Homepage treatment cards.
- A listing page.
- Related-content links.

Then check the page’s own outgoing links.

| Check | Expected result |
|---|---|
| Follow an approved entry link | The intended page opens |
| Type the route into the address bar | The page loads without needing a previous visit |
| Refresh the page | The page loads again correctly |
| Follow its call to action | The confirmed destination opens |
| Follow related links | Each destination matches its label |

Opening the route directly and refreshing matter because some setups only work when you arrive by clicking a link.

Add **breadcrumbs**, a trail of links showing where the page sits in the site, or other navigation only when the approved design or project rules require them.

If a destination is not built yet, use the agreed interim treatment and record the dependency.

## 8. Check the page and shared effects

Use the review methods from Units 4 and 5. Check:

- Structure and match with the design.
- Exact copy.
- Image loading, cropping and alternative text.
- Heading structure.
- Navigation and call to action destinations.
- Keyboard use.
- The required viewport sizes and the widths between them.
- The relevant project checks.

If you changed a shared component for this page, recheck where the homepage uses it. For example, adding an approved card variant must not accidentally change the existing homepage cards.

Record any check you did not perform as **Not checked**, with the reason.

## 9. Practical exercise

**Task: Build and check one approved internal page.**

1. Create the page implementation map.
2. Select a page whose prerequisites are in place.
3. Inspect its route and reusable components.
4. Write a bounded implementation task.
5. Ask Claude to build it.
6. Review the changed files.
7. Test direct access, refresh and the approved entry links.
8. Check appearance, content and responsive behaviour.
9. Record findings and shared effects.

If the page is blocked, identify the missing prerequisite and choose another authorised task if one is available.

## 10. Expected submission

Submit:

- The page implementation map.
- The selected task and implementation prompt.
- A summary of changed files.
- The implemented route and its approved entry points.
- Desktop and mobile screenshots.
- Acceptance criteria with statuses and evidence.
- Project check results.
- Outstanding findings and dependencies.

## 11. Completion criteria

The lesson is complete when:

- The page follows the approved IA, design and content.
- Existing architecture and shared components are used appropriately.
- The page loads directly and through its approved entry points.
- Its links reach the correct destinations.
- Required visual, responsive and functional checks are recorded.
- Affected shared usages have been checked.
- Remaining limitations are visible for supervisor review.

## 12. Knowledge check

1. Why should an internal page have its own requirements?
2. When is a shared page pattern appropriate?
3. Why should you check how the framework handles routes before creating a page?
4. How does opening a route directly differ from following a link to it?
5. What should be rechecked after changing a shared component?
