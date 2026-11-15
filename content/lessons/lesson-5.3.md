# Lesson 5.3: Refining the Homepage Across Screen Sizes

### Learning objective

By the end of this lesson, you should be able to:

- Check the homepage at the required viewport sizes.
- Recognise layout, content and interaction problems on narrower screens.
- Correct responsive problems within the approved design.
- Check shared changes everywhere they apply.
- Record evidence and any unresolved responsive issues.

**Prerequisites:** Complete Lesson 5.2 and have the homepage running locally.

**Required materials:** Approved desktop and mobile references, responsive requirements, style guide, homepage acceptance criteria and outstanding findings.

## 1. Understand responsive behaviour

A **responsive** website adapts to the space available in the browser while keeping its content and usability.

Adapting can involve:

- Changing the number of columns.
- Stacking content vertically.
- Adjusting spacing and text size.
- Switching to a mobile menu.
- Repositioning images.
- Letting buttons and labels wrap onto a second line.

**Responsive refinement keeps the approved content, hierarchy and visitor journey. It is not a chance to redesign the website for mobile.**

## 2. Set the review widths

Start with the viewport sizes the project specifies. Lesson 4.4 explained that the viewport is the part of the browser window that shows the page.

Sizes are measured in **CSS pixels**, the unit web pages use for layout. A CSS pixel does not always equal one physical pixel on the screen, so a phone with a very high-resolution screen still has a viewport only a few hundred CSS pixels wide.

If the project does not specify review widths, propose a practical set and record it before testing. For example:

| Review width | Purpose |
|---|---|
| 375 CSS pixels | Narrow phone layout |
| 768 CSS pixels | Intermediate layout |
| 1280 CSS pixels | Desktop layout |

These widths are illustrative. They are not required device sizes, and they are not automatically the points where the layout should change.

Also drag the browser window slowly between the selected widths. A layout can look right at the screenshot sizes and still break somewhere in between.

### Viewports and breakpoints are different

A **review viewport** is a size at which you inspect the page.

A **breakpoint** is a width at which the code changes the layout, such as switching from three columns to one.

In CSS, breakpoints are usually written as **media queries**. A media query applies a set of styles only when a condition is true, such as “the viewport is at least 768 CSS pixels wide”.

Use the project’s existing breakpoints where they work. Add or adjust one only when the content and the approved behaviour justify it.

## 3. Inspect before changing styles

Begin by checking:

1. The current Git status.
2. The existing responsive styles and media queries.
3. Shared containers and spacing values.
4. Layout rules for individual components.
5. The approved responsive references.
6. Outstanding findings from earlier lessons.

Find the cause of each problem before correcting it.

For example, **horizontal overflow**, where content is wider than the screen and the page scrolls sideways, might come from:

- An image with a fixed width.
- A grid column that cannot shrink.
- A long word or web address that cannot wrap.
- An oversized decorative element.
- A container wider than the viewport.

Hiding the overflow across the whole page can make the sideways scrolling disappear while cutting content off, so visitors cannot reach it. That hides the symptom without fixing the cause.

## 4. Review the page in a consistent order

Look at the whole page before the details.

| Area | What to inspect |
|---|---|
| **Page width** | No unintended sideways scrolling or cut-off content |
| **Header and navigation** | Correct layout, usable controls and working links |
| **Section structure** | Approved stacking and a sensible content order |
| **Typography** | Readable text, sensible wrapping and a clear hierarchy |
| **Spacing** | Consistent gaps between sections, padding and alignment |
| **Images** | Suitable proportions, positioning and focal points |
| **Cards and grids** | Appropriate columns, wrapping and card heights |
| **Calls to action** | Visible labels, usable controls and correct placement |
| **Footer** | Readable information and reachable links |
| **Overlays and fixed elements** | Nothing covers content or controls by mistake |

Check the relevant interaction states at each layout, including the open mobile menu. A screenshot of the closed menu cannot show whether the open menu works.

## 5. Keep a meaningful content order

On desktop, text and images often sit side by side. On mobile, they usually stack. Follow the approved order.

Check that:

- Headings introduce the content that follows them.
- Descriptions stay with their cards.
- Calls to action follow the information they relate to.
- Images stay next to their explanations.
- Moving through the page with the keyboard follows a sensible sequence.

Take care when CSS is used to rearrange content visually. Screen readers and keyboard users follow the order in the code, not the visual order. If the two differ, the page can become confusing.

If the supplied references conflict with a sensible reading order, record the issue for review.

## 6. Correct layout problems at their source

Use corrections that match the size of the problem.

| Problem | What to investigate |
|---|---|
| Cards extend beyond the screen | Grid sizing, minimum widths and container padding |
| A heading is cut off | Fixed heights, overflow rules and text sizing |
| A button label is cut off | Width, padding, wrapping and height limits |
| An image looks stretched | Its dimensions and how it is fitted to its space |
| A large empty space appears | Fixed heights, margins and hidden elements |
| The mobile menu covers its own close button | Positioning, stacking order and scrolling behaviour |

Avoid shrinking all the text to fix one crowded section.

Avoid removing approved content just because it is difficult to fit.

### Example

If three treatment cards no longer fit comfortably in one row, follow the approved responsive arrangement. That might mean fewer columns or a single stacked column.

Do not introduce a carousel, a sliding panel of cards, unless it is part of the agreed design.

## 7. Check interaction as well as appearance

A responsive review includes behaviour.

Check that:

- Navigation controls can be reached and operated.
- The mobile menu opens and closes as specified.
- Keyboard focus remains visible.
- Links and buttons are not covered by other elements.
- Interactive areas meet the project’s accessibility requirements.
- Content can still be reached when an overlay is open.
- **Sticky** elements, which stay fixed in place while the page scrolls, do not hide important content.

Use keyboard checks where relevant, alongside mouse or touch-style interaction.

Browser developer tools can **emulate**, or imitate, different screen sizes. This is useful, but it is not the same as using a real phone. Record whether any required checks on real devices are still outstanding.

## 8. Check text enlargement and reduced space

Some visitors enlarge text or zoom the browser to read comfortably. The page should still work when they do.

Use the project’s accessibility requirements for zoom and text enlargement.

Look for:

- Overlapping text.
- Missing content.
- Controls pushed outside their containers.
- Fixed elements covering most of the page.
- Information that can no longer be reached.

Record the browser, viewport and zoom level used.

Zooming in reduces the number of CSS pixels available, so a desktop page at high zoom may switch to its mobile layout. If it does, check that the mobile layout still works under those conditions.

Never disable browser zoom to protect the design. Lesson 8.3 covers the formal zoom and reflow checks in more detail.

## 9. Ask Claude for a focused responsive review

```text
Inspect the homepage's responsive behaviour against the
approved references and requirements.

Before reviewing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Inspect existing responsive styles and shared components.

Review:
- The required viewport widths.
- Intermediate widths where layouts change.
- Relevant navigation and interaction states.
- Text wrapping, image cropping and content order.
- Overflow, clipping and obstructed controls.
- Applicable zoom and keyboard behaviour.

For each finding, report:
1. Location and reproduction conditions.
2. Expected behaviour and supporting reference.
3. Actual behaviour.
4. Evidence.
5. Likely cause and affected usages.
6. Suggested correction.

Separate implementation defects from missing specifications
and optional preferences.

Do not edit files during this review.
Do not claim checks that were not performed.

Scope and references:
[Insert the homepage scope, review widths and exact references.]
```

Check the findings yourself before asking for corrections.

### Correction prompt

```text
Correct the verified responsive findings listed below.

Follow the approved responsive references and existing
project conventions.

- Preserve approved copy, assets, section order and destinations.
- Correct the underlying layout causes.
- Reuse existing breakpoints and shared values where suitable.
- Explain any necessary change to shared styles.
- Avoid unrelated refactoring or new dependencies.

After editing:
- Repeat the checks that originally failed.
- Check intermediate widths.
- Check affected shared usages.
- Repeat relevant desktop checks.
- Run applicable documented project checks.
- Report results and remaining limitations.

Do not commit, push or deploy.

Verified findings:
[Insert findings and their supporting references.]
```

## 10. Retest shared changes

A correction to a shared container, heading style or card can change several sections at once.

After changing shared styles:

1. Retest the original issue.
2. Check the other places that use the changed style.
3. Recheck the relevant desktop layouts.
4. Check with both long and short approved content.
5. Update the findings record.

Adding a media query is not proof that a problem is fixed. Only the rendered page, checked under the original conditions, shows whether the issue is resolved.

## 11. Practical exercise

**Task: Complete the homepage responsive refinement pass.**

1. Record the review widths and required states.
2. Inspect the page at those widths and between them.
3. Record findings with the conditions needed to reproduce them.
4. Separate defects from specification gaps.
5. Ask Claude to correct verified defects in manageable groups.
6. Retest each correction and the places it affects.
7. Complete the required keyboard and zoom checks.
8. Submit the responsive review record.

If a required reference is missing, identify the decision it affects. Continue with the checks whose expected behaviour is already clear.

## 12. Expected submission

Submit:

- The responsive references and versions used.
- Viewport sizes, browser and zoom conditions.
- A completed responsive checklist.
- Findings with current statuses.
- A summary of changed files and shared effects.
- Before and after evidence for corrected issues.
- Project check results.
- Any outstanding real-device checks or specification decisions.

## 13. Completion criteria

The lesson is complete when:

- Required layouts and interaction states have been checked.
- Widths between the review sizes have been inspected.
- Verified defects have been corrected and retested.
- Approved content and visitor journeys are preserved.
- Shared changes have been checked wherever they apply.
- Keyboard and zoom checks are recorded.
- Remaining limitations are clearly identified.
- The homepage is ready for supervisor review.

## 14. Knowledge check

1. How does a review viewport differ from a breakpoint?
2. Why should you check widths between the supplied design references?
3. Why can hiding overflow fail to solve the real problem?
4. How can rearranging content with CSS affect keyboard and screen reader users?
5. What must be checked after changing a shared responsive style?
