# Lesson 6.2: Building Related Pages Without Duplicating Work

### Learning objective

By the end of this lesson, you should be able to:

- Identify which approved pages share a repeatable structure.
- Separate shared presentation from content that belongs to one page.
- Extend an existing page pattern without adding unnecessary complexity.
- Check that each page shows its own correct information.
- Check the effects of changes on related pages and existing usages.

**Prerequisites:** Complete Lesson 6.1 and have its first internal page checked, with any review conditions recorded.

**Required materials:** Approved IA, designs for the related pages, page-specific content and assets, the existing implementation, the architecture document and the task plan.

## 1. Build from a checked example

The first internal page gives you a working example. Before reusing it as a pattern, confirm which parts can actually be reused. Check:

- Whether its structure matches the related pages.
- Whether its content is written directly into the page or supplied separately.
- Whether any of its outstanding findings would carry over.
- Which elements belong to the shared site layout.
- Which elements belong only to that page.

**Copying a pattern that still has a defect copies the defect too, and multiplies the correction work.**

Fix shared defects before extending the pattern. Pages that do not depend on the defect can go ahead.

## 2. Compare the approved pages

Pages with similar names do not necessarily have identical requirements. Build a comparison table from the actual references.

| Element | Shared requirement | Possible page-specific difference |
|---|---|---|
| Page introduction | Consistent typography and container | Heading, summary and image |
| Main content | Approved presentation | Which sections appear, and their order |
| Supporting information | Shared component, where suitable | Whether it appears, and its wording |
| Call to action | Approved visual treatment | Label and destination |
| Related links | Consistent presentation | Which pages are linked |

Decide whether each part is:

- A genuinely shared structure.
- A shared component used inside different structures.
- A requirement that belongs to one page only.

Do not force unique content into an unsuitable template just to have fewer files.

## 3. Separate content from presentation

A repeated page pattern usually has three layers:

| Layer | Responsibility |
|---|---|
| **Shared presentation** | Layout, styling and repeated interaction |
| **Page content** | Headings, descriptions, images and destinations |
| **Route** | Makes the correct page available at its approved address |

Follow the project’s existing approach to these layers. For example, a project might store page content in:

- Individual page files.
- **Typed data objects**, which are lists of content written in TypeScript with a type describing their fields.
- **Markdown files**, plain text files with simple formatting marks.
- An existing content management system.

Do not move content into a different system during this task unless the approved architecture requires it.

### Illustrative example

A small shared introduction component can accept each page’s own content through props:

```tsx
type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({
  title,
  description,
}: PageIntroProps) {
  return (
    <section className="page-intro">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
```

This shares the presentation without forcing every page into an identical full-page template. It uses a level 1 heading because the introduction names the whole page.

Follow the actual project’s component conventions.

## 4. Define required and optional information

Some related pages may include information that others do not. For each field or section, decide whether it is:

- Required on every page.
- Optional under the approved pattern.
- Unique to one page.

| Situation | Expected treatment |
|---|---|
| Required content is available | Show it in the approved location |
| Required content is missing | Record the dependency. Do not invent the content |
| An optional section is absent | Leave it out cleanly, as the approved pattern specifies |
| A unique section is required | Build it without changing unrelated pages |

Do not show empty headings, blank boxes or controls that do nothing just because the template expects content.

Do not fill a gap with placeholder claims or with text copied from another page.

## 5. Choose a small batch

Build related pages in manageable groups. A suitable batch contains pages that:

- Share a checked pattern.
- Have approved content and assets.
- Have confirmed routes and destinations.
- Can be reviewed together without hiding their differences.

Start with just one more page. Real content often reveals assumptions the first page hid. For example, a longer approved title or an optional section may break a layout that looked fine before.

Do not generate all the remaining pages before you have checked the second one.

## 6. Ask Claude to extend the pattern

```text
Implement the selected related page using the verified
internal-page pattern and approved references.

Before editing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect the first implemented page and its outstanding findings.
- Compare the selected page's requirements with that pattern.
- Identify shared and page-specific elements.

During implementation:
- Follow the existing routing and content architecture.
- Reuse suitable components and styles.
- Preserve each page's approved wording, assets and destinations.
- Implement approved differences explicitly.
- Omit absent optional sections cleanly.
- Report missing required content rather than inventing it.
- Avoid speculative template options or unrelated refactoring.

After implementation:
- Verify the selected page independently.
- Check that content from another page has not carried over.
- Test direct access, refresh and approved entry links.
- Recheck existing pages affected by shared changes.
- Run applicable documented project checks.
- Report results and remaining limitations.

Do not add dependencies, migrate content systems,
commit, push or deploy.

Selected task:
[Insert the page and bounded task.]

Verified pattern:
[Insert the implementation reference.]

Approved sources:
[Insert exact page-specific references.]
```

If the new page shows a genuine limitation in the shared pattern, assess the change it needs before applying it to the other pages.

## 7. Check for copied content and mismatched details

Copying errors can hide inside a page that looks perfectly consistent. Check each page on its own.

| Item | What to check |
|---|---|
| Heading | Names the correct page or subject |
| Body copy | Matches that page’s approved source |
| Images | Belong to that page |
| Alternative text | Describes the actual image on that page |
| Call to action | Uses that page’s correct label and destination |
| Related links | Point to relevant approved pages |
| Contact or location details | Match the correct business location |
| Page metadata, where in scope | Describes that page, not another one |

**Metadata** is information about a page that sits behind the scenes, such as the title shown in the browser tab. Lesson 9.3 covers it in detail.

A correct layout does not make up for another page’s information appearing inside it.

To find leftovers, search the relevant files for distinctive text from the first page, then compare the rendered pages. Treat search results as places to look, not as proof of an error.

## 8. Check content variation

Test the shared pattern with the real variations in the supplied content, such as:

- Short and long headings.
- Different paragraph lengths.
- Pages with and without an optional section.
- Images with different focal points.
- Longer call to action labels.
- Different numbers of related links.

Use actual approved content.

Do not shorten approved copy just to make a shared component fit. If the pattern fails with valid content, fix the component or record the design decision that is needed.

## 9. Recheck the pages a change affects

A shared change can improve one page and break another. Checking that earlier work still works after a change is called **regression checking**.

After changing a shared pattern:

1. Find where it is actually used.
2. Repeat the checks the change could affect.
3. Compare representative desktop and mobile layouts.
4. Confirm that each page’s own content is still correct.
5. Record the results.

Match the regression checks to the change. Changing the introduction layout means checking the pages that use it. It does not mean retesting an unrelated form.

## 10. Practical exercise

**Task: Extend the checked pattern to another approved internal page.**

1. Compare the two pages’ requirements.
2. Identify shared and unique elements.
3. Confirm the second page’s prerequisites.
4. Build it through a bounded task.
5. Check for copied content and wrong destinations.
6. Check content variation at the required widths.
7. Retest the existing pages the change affects.
8. Record whether the pattern is ready for further reuse.

If no second page shares the structure, explain why. Reuse suitable components without inventing a full-page template.

## 11. Expected submission

Submit:

- The page comparison table.
- The selected task and implementation prompt.
- A summary of shared and page-specific changes.
- The implemented routes.
- Content and destination check results for each page.
- Screenshots showing relevant content variations.
- Regression and project check results.
- Outstanding findings and dependencies.

## 12. Completion criteria

The lesson is complete when:

- Reuse follows the approved page requirements.
- Shared presentation and page-specific content are handled consistently.
- Required content is present or recorded as missing.
- Optional sections leave no empty interface elements.
- Each page shows its own correct information.
- The pattern works with the approved content variations.
- Affected existing pages have been rechecked.
- Remaining issues are ready for supervisor review.

## 13. Knowledge check

1. Why should the first page be checked before its pattern is reused?
2. When is reusing a component more suitable than a full-page template?
3. How should missing required content be handled differently from an absent optional section?
4. Why should you check the second page before building a large batch?
5. What decides which existing pages need regression checks?
