# Lesson 6.3: Connecting Pages and Checking Visitor Journeys

### Learning objective

By the end of this lesson, you should be able to:

- Connect the implemented pages as the approved IA describes.
- Check navigation labels, destinations and current-page indicators.
- Test complete visitor journeys across several pages.
- Find broken links, pages visitors cannot reach and unfinished destinations.
- Correct navigation problems and check the journeys they affect.

**Prerequisites:** Complete Lesson 6.2 and have the relevant internal pages running locally.

**Required materials:** Approved IA, navigation specification, visitor flows, implemented routes, call to action destinations and outstanding dependency records.

## 1. Review the connections between pages

Earlier lessons checked individual pages and their immediate links. This lesson checks how the pages work together.

A page can load correctly and still be hard to find. A link can open a real page and still lead to the wrong information.

Review at two levels:

| Review level | Question |
|---|---|
| **Individual link** | Does this link or control reach its intended destination? |
| **Visitor journey** | Can a visitor complete the approved sequence of steps? |

A **visitor flow** is the approved plan of these sequences, prepared during planning in Unit 2.

**Working routes are necessary, but they do not prove the website’s navigation is complete.**

## 2. Build a navigation inventory

A **navigation inventory** lists every link in scope, with its expected and actual destination. Start from the approved IA and navigation specification.

| Location | Label | Expected destination | Current result | Status |
|---|---|---|---|---|
| Header | Treatments | Approved treatment listing route | To be checked | Not checked |
| Homepage card | Approved treatment name | The matching detail route | To be checked | Not checked |
| Treatment page | Find an outlet | Approved location destination | To be checked | Not checked |
| Footer | Contact | Approved contact route | To be checked | Not checked |

These rows are illustrative. Use the project’s actual labels and destinations.

Include, where they exist:

- Header and mobile navigation.
- Footer links.
- Cards and links within text.
- Calls to action.
- Breadcrumbs, if specified.
- Related-content links.
- **Anchor links**, which jump to a section on the same page.
- Links to external websites and services.

Do not add links just because they appear in this example.

## 3. Confirm the expected destination

Decide what each link should do before testing it.

| Destination type | Expected behaviour |
|---|---|
| Internal page | Opens the confirmed route |
| Page section | Scrolls to the correct section without hiding its heading |
| External website | Opens the approved address |
| Email link | Opens the visitor’s email application with the configured address |
| Telephone link | Offers the confirmed number to a calling application |
| Booking or messaging service | Opens the approved service or conversation |

Follow the project’s rule on whether each link opens in the same tab or a new one. Do not make every external link open a new tab by default. Unexpected new tabs can disorient visitors, particularly those using screen readers.

For email and telephone links, checking that the right address or number is configured is different from sending an email or making a call. Record exactly what you checked.

## 4. Check the shared navigation

Review the header, mobile menu and footer on each implemented page. Check that:

- Labels and their order match the approved specification.
- Destinations are consistent wherever they should be.
- The logo links to the agreed destination.
- The right version of the navigation appears at each layout.
- The current-page indicator follows the approved design.
- Keyboard focus stays visible.
- The mobile menu closes or updates after a selection, as specified.

### Current-page indicators

Many designs highlight the navigation item for the page the visitor is on. Where the design does this, check the behaviour on both listing and detail pages. For example, a treatment detail page might highlight the parent “Treatments” item, if that is the approved rule.

Visual highlighting is not enough on its own, because screen reader users cannot see it. The HTML attribute `aria-current` tells assistive technology which link represents the current page, for example `aria-current="page"`. Follow the project’s existing accessibility conventions for this.

Do not rely on colour alone to show a required state. Some visitors cannot tell certain colours apart.

## 5. Find pages missing their entry points

Compare the implemented routes with the approved entry links. A page may load when you type its address but have no link leading to it where the IA requires one.

For each page, check:

1. Where visitors are supposed to discover it.
2. Whether that entry point exists.
3. Whether its label makes the destination clear.
4. Whether the link opens the correct page.

Not every page belongs in the main navigation. Some are meant to be reached through listings, links in context or a direct address. Judge each page against the approved structure, rather than adding every route to the header.

## 6. Write visitor journey checks

Use the approved visitor flows to write a small set of meaningful checks.

### Example journey

Only if the project supports it:

> Homepage → treatment listing → treatment detail → location page.

For each journey, record:

| Field | What to include |
|---|---|
| Journey ID | A unique reference |
| Visitor goal | What the person is trying to achieve |
| Starting point | The page where the check begins |
| Steps | The links or controls selected |
| Expected result | The correct page or state after each step |
| Test conditions | Browser, viewport and input method, such as mouse or keyboard |
| Outcome | Passed, Failed or Not checked |
| Evidence | Screenshots, observations or test output |

Test other starting points where required. Visitors often arrive directly on an internal page from a search engine, rather than starting at the homepage.

Do not add steps that are not in the approved journey.

## 7. Test the journeys in the browser

For each journey:

1. Open the recorded starting page.
2. Follow the specified links.
3. Confirm the destination after each step.
4. Check that the content matches the chosen subject.
5. Confirm that the next required action is available.
6. Record the result.

Repeat the relevant journeys using the mobile menu and using only the keyboard.

### Check browser history where relevant

Use the browser’s Back and Forward buttons to confirm that navigation still makes sense.

Some features keep track of what the visitor has chosen, such as filters or tabs. If the approved implementation includes features like these, check their documented behaviour when the visitor goes back. Do not add new behaviour of this kind that the task does not require.

### Respect external-action boundaries

Opening a destination does not give you permission to submit information there.

Do not send messages, make calls, create bookings or submit forms unless the task includes the authorisation and test arrangements to do so. Record any check you had to stop short.

## 8. Ask Claude for a navigation review

```text
Review the implemented page connections and selected
visitor journeys against the approved references.

Inspect:
- Relevant project instructions.
- Approved IA, navigation specification and visitor flows.
- Implemented routes and navigation components.
- CTA destinations and outstanding dependencies.

Check:
- Labels, order and destinations.
- Header, mobile menu and footer consistency.
- Current-page states where specified.
- Required entry points to internal pages.
- Contextual links and in-page anchors.
- The selected journeys at the required layouts.
- Relevant keyboard and browser history behaviour.

For each finding, report:
1. Location and reproduction steps.
2. Expected result and supporting reference.
3. Actual result.
4. Evidence.
5. Affected links, components or journeys.

Distinguish confirmed defects from missing decisions.
State which browser checks were actually performed.

Review only. Do not edit files, commit, push or deploy.
Do not submit forms, send messages or make bookings.

Scope and references:
[Insert routes, journey IDs and exact references.]
```

Check the findings yourself before asking for corrections.

## 9. Correct issues without restructuring the website

Typical corrections include:

- Restoring an approved link label.
- Correcting a route.
- Fixing an anchor link’s target.
- Adding a missing approved entry link.
- Correcting the current-page indicator.
- Repairing the mobile menu’s behaviour.

Do not reorganise the IA because a journey feels inconvenient to you. If the approved flow itself looks like a problem, record the concern separately for review.

### Correction prompt

```text
Correct the verified navigation findings listed below.

- Follow the approved IA and navigation specification.
- Preserve approved labels unless the finding restores them.
- Reuse the existing routing and navigation approach.
- Update shared navigation sources where appropriate.
- Preserve unrelated page content and behaviour.
- Do not substitute unfinished destinations with unrelated pages.

After editing:
- Repeat each failed link or journey check.
- Check other usages affected by shared changes.
- Verify relevant desktop and mobile navigation.
- Run applicable documented project checks.
- Report results and remaining dependencies.

Do not commit, push, deploy or trigger external transactions.

Verified findings:
[Insert findings and supporting references.]
```

Fixing one shared destination may correct several links at once. Retest each affected entry point rather than assuming they all updated correctly.

## 10. Practical exercise

**Task: Check the connections between the homepage and the implemented internal pages.**

1. Create the navigation inventory.
2. Compare the routes with the required entry points.
3. Select the applicable approved visitor journeys.
4. Test individual links and complete journeys.
5. Record defects and the limits of your checks.
6. Ask Claude to correct the verified issues.
7. Retest failed checks and the affected shared navigation.
8. Update the findings and dependency records.

If a journey ends at an unfinished page, record exactly how far it got and what is missing. Do not mark the whole journey as passed.

## 11. Expected submission

Submit:

- The navigation inventory.
- The selected journey specifications.
- The browsers and input methods used.
- Link and journey results.
- Evidence for findings and corrections.
- A summary of changed files.
- Regression and project check results.
- Outstanding destinations, decisions and verification limits.

## 12. Completion criteria

The lesson is complete when:

- Implemented connections match the approved IA and navigation requirements.
- Pages have their required entry points.
- The selected visitor journeys have been tested.
- Shared navigation behaves consistently across the relevant layouts.
- Verified defects have been corrected and retested.
- Incomplete journeys and external-action limits remain visible.
- The results are ready for supervisor review.

## 13. Knowledge check

1. How does testing a complete journey differ from checking one link?
2. Why does a page that opens directly still need its approved entry points?
3. Must every internal page appear in the main navigation?
4. What should you do if the approved visitor flow seems to need restructuring?
5. How should you report a journey that stops at an unfinished page?
