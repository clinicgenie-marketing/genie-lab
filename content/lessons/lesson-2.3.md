# Lesson 2.3: Planning the Sitemap, User Journeys and Page Sections

### Learning objective

By the end of this lesson, you should be able to:

- Explain the difference between a sitemap, navigation, a visitor journey and a page outline.
- Connect approved business needs to proposed pages.
- Define page addresses and how pages relate, for review.
- Describe each page section by what it does for the visitor.
- Identify missing content and decisions before design or building begins.

**Prerequisites:** Complete Lessons 2.1 and 2.2.

**Required materials:** The reviewed brief, research findings, scope and any supplied page structure or visitor flows.

## 1. Understand the planning documents

These four documents together make up the website’s **information architecture (IA)**: the plan of its pages, their names and how they connect. Later lessons refer to it as “the approved IA”.

| Document | Question it answers |
|---|---|
| **Sitemap** | Which pages exist, and how are they related? |
| **Navigation specification** | Which links appear in each menu or link area? |
| **Visitor journey** | Which steps does someone take to reach a goal? |
| **Page outline** | What content appears on one page, and in what order? |

In some projects the word “IA” refers mainly to the sitemap. Use the project’s own terms.

These documents connect, but they are not interchangeable. A footer link is not a separate page. A section of a page does not automatically need its own address. A journey may use only part of the sitemap.

## 2. Start from the approved scope

If an approved IA already exists, inspect and document it. Do not create a competing structure during this exercise.

If you are authorised to propose a structure, start from the visitor needs in the brief and work out which pages they require.

Every proposed page should have:

- A clear purpose.
- A reason it must be a separate page.
- Its expected content.
- An **entry point**, the link visitors use to reach it.
- A useful next step, where appropriate.

Do not add pages just because most websites seem to have them. Each page needs a real requirement behind it.

## 3. Prepare the page inventory

A **page inventory** lists every page with its key details.

| Page ID | Name | Purpose | Route | Parent or relationship | Required content | Status |
|---|---|---|---|---|---|---|
| | | | | | | |

A **route** is the address path for a page, such as `/treatments`.

Choose route names that are meaningful and consistent with the rest of the project. If approved routes already exist, do not rename them without identifying every affected link and getting a decision.

Where a route has not been decided, label it **Proposed**. Writing it in a neat table must not make it look confirmed.

## 4. Specify the navigation separately

Record the approved or proposed:

- Header link labels and their order.
- How the mobile menu behaves.
- Footer link groups and their destinations.
- Links in the body of pages, and related-content links.
- Where the logo leads.

Some pages are reached through a listing or a link in the text rather than the main menu. That is normal.

Do not put every page in the header to avoid deciding how pages relate. A crowded header makes every page harder to find.

## 5. Map the visitor journeys

Choose journeys the brief supports. For each one, record the visitor’s goal, where they start, the steps they take and where they should end up.

| Step | Page or state | Visitor action | Expected result |
|---|---|---|---|
| | | | |

Include the information the visitor needs before making a decision. Do not remove necessary explanation just to reduce the number of clicks.

If the final step uses an outside service, such as a booking system, record its destination and the dependency. Planning a journey does not authorise making a real booking or submission.

## 6. Outline the page sections

For each page, list its sections in order:

| Position | Section | Visitor question it answers | Required content and assets | Links or actions | Dependency |
|---|---|---|---|---|---|
| | | | | | |

Describing each section by the visitor’s question keeps the page focused on what visitors need, rather than on what looks familiar.

Use the supplied content and design constraints. If a design is already approved, keep its structure and record any gaps instead of rearranging it.

Note patterns that repeat across pages, such as a card used on several listings. They may later become reusable components, as Lesson 4.3 explains. Do not decide the technical architecture just because things look similar.

## 7. Check the connections

Trace one visitor need through the documents:

1. Its page in the inventory.
2. The link visitors use to reach it.
3. The information it must provide.
4. The next step it offers.
5. Any content or integration it depends on.

Look for two pages serving the same purpose, links whose destination is unclear and pages with no way to reach them.

## 8. Ask Claude to review the structure

```text
Review the supplied sitemap, navigation, visitor journeys and page outlines
against the business brief and authorised scope.

Identify unsupported pages, missing required content, duplicate purposes,
unclear labels, unreachable destinations and unresolved decisions.
Trace one visitor need through its page, entry point and next action.

Separate defects in the proposal from optional suggestions.
Do not invent approval, add business offerings or implement routes.

References:
[Insert exact brief, structure and content locations.]
```

Check each finding yourself before changing the plan.

## 9. Practical exercise

**Task: Prepare the practice website’s structure for review.**

1. Build or inspect the page inventory, as authorised.
2. Record each navigation area and its destinations.
3. Map the required visitor journeys.
4. Outline the selected pages.
5. Identify dependencies and inconsistencies.
6. Review Claude’s findings and correct the valid issues.

## 10. Expected submission

Submit:

- The page inventory.
- The navigation specification.
- The visitor journey maps.
- The page outlines.
- Open questions.

## 11. Completion criteria

The lesson is complete when:

- The planning documents agree with each other.
- Every proposed page has a supported purpose.
- Unresolved decisions are clearly labelled for review.

## 12. Knowledge check

1. How does a sitemap differ from the navigation?
2. Can a page exist without appearing in the header menu?
3. What makes a page section useful to a visitor?
4. Why should proposed routes be labelled as proposed?
5. What should you check at the end of a visitor journey?
