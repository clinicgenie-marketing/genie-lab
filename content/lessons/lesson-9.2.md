# Lesson 9.2: Improving Images, Loading Speed and Build Quality

### Learning objective

By the end of this lesson, you should be able to:

- Explain the main measures of loading speed, responsiveness and visual stability.
- Measure performance under recorded, repeatable conditions.
- Identify the causes of slow loading and layout shifts from a Lighthouse report.
- Improve image delivery without changing the approved design.
- Confirm that the production build completes cleanly and re-measure after changes.

**Prerequisites:** Complete Lesson 9.1 and have its findings recorded.

**Required materials:** Implemented website, documented build and preview commands, approved asset register, style guide, QA record and Playwright tests from Lesson 8.4.

## 1. Treat performance as part of the visitor experience

A slow page affects visitors directly. They wait for content, tap the wrong button when the layout moves, or leave before the page finishes loading. Visitors on mobile data or older phones feel these problems most.

Google publishes three **Core Web Vitals** to describe key parts of the experience:

| Metric | What it measures | Good threshold |
|---|---|---|
| **Largest Contentful Paint (LCP)** | How quickly the main content, often a hero image or heading, appears | 2.5 seconds or less |
| **Interaction to Next Paint (INP)** | How quickly the page responds visually after a click, tap or key press | 200 milliseconds or less |
| **Cumulative Layout Shift (CLS)** | How much visible content moves unexpectedly while the page loads and is used | 0.1 or less |

These thresholds apply to real visits, measured at the 75th percentile. That means at least three out of four page visits should meet the threshold.

**Your local measurements are estimates under test conditions. They are not the experience of real visitors.**

## 2. Understand lab and field data

| Data type | Where it comes from | What it is good for |
|---|---|---|
| **Lab data** | A tool loads the page in controlled conditions, such as Lighthouse in developer tools | Finding and debugging problems before launch |
| **Field data** | Measurements from real visitors over time | Understanding actual experience after launch |

A practice or pre-launch website usually has no field data. You will use lab data.

Lighthouse cannot measure INP, because INP needs a real person interacting with the page. Lighthouse reports **Total Blocking Time (TBT)** instead, which estimates how much the page’s scripts block the browser from responding. Improving TBT often improves INP, but they are different measures.

## 3. Measure the production build

The development server is designed for fast editing, not fast loading. It adds extra code for features such as automatic reloading. Measuring it gives misleading results.

Measure a **production build**, which is the optimised version prepared for deployment.

1. Find the documented build command and the command that serves the built site locally. These are often scripts in `package.json`, but use what your project actually documents.
2. Run the build at the terminal command prompt in the project folder.
3. Confirm the build completes without errors.
4. Start the local preview of the built site using the documented command.
5. Open the local address it reports.

If the project does not document a way to serve the production build locally, record this as a gap and ask how performance should be measured.

## 4. Run Lighthouse under recorded conditions

1. Open the page in Chrome. Use a browser profile without extensions where possible, because extensions can slow pages and distort results.
2. Open developer tools and select the **Lighthouse** panel.
3. Choose **Navigation** mode, which measures a fresh page load.
4. Select **Mobile** as the device, unless the agreed conditions say otherwise.
5. Select the **Performance** category.
6. Run the analysis.

Lighthouse results vary between runs, because the computer and network do slightly different things each time. Run the analysis at least three times for each page and record the median, which is the middle result.

Record:

| Field | Example |
|---|---|
| Page | Homepage |
| Build | Production build from the recorded commit |
| Tool | Lighthouse in Chrome developer tools, with version |
| Mode and device | Navigation, Mobile |
| Runs | Three |
| Median LCP, TBT and CLS | Measured values |
| LCP element | The element Lighthouse identifies |

Measure the homepage and each distinct page template from Lesson 8.3’s coverage selection.

The overall Lighthouse score is a summary. Focus on the measurements and the specific issues behind them.

## 5. Read the report for causes

Lighthouse lists diagnostics and opportunities below the scores. Use them to find causes, not as a list of tasks to complete automatically.

| Symptom | Common causes to investigate |
|---|---|
| Slow LCP | Large hero image, image loaded late, slow server response, render-blocking styles or fonts |
| High TBT | Large amounts of JavaScript, heavy third-party scripts, expensive work during load |
| High CLS | Images without reserved space, fonts swapping size, content inserted above existing content |

For each problem, identify:

1. The affected element or resource.
2. The evidence from the report.
3. Whether it affects one page or a shared component.
4. Whether fixing it would change anything approved.

## 6. Improve image delivery

Images are often the largest files on a page. Lesson 5.2 placed the approved images. This lesson checks how efficiently they are delivered.

| Check | Why it matters |
|---|---|
| File dimensions suit the largest display size | A 4000-pixel-wide photograph displayed at 800 pixels wastes data |
| Format and compression follow the agreed asset workflow | Modern formats such as WebP or AVIF are often smaller |
| Different sizes are available for different screens | Phones should not download desktop-sized images |
| Width and height, or an aspect ratio, are specified | The browser reserves space, preventing layout shift |
| Images far down the page load lazily | They load only when the visitor approaches them |
| The main image near the top does not load lazily | Delaying it slows LCP |

Many frameworks provide an image component that handles resizing, formats and lazy loading. Lesson 5.2 asked you to follow the project’s established approach. Check what it already does before adding anything.

### Illustrative example without a framework image component

```tsx
type TreatmentImageProps = {
  src: string;
  alt: string;
};

// Below the first screen: load only when needed.
export function TreatmentImage({ src, alt }: TreatmentImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={800}
      height={600}
      loading="lazy"
      decoding="async"
    />
  );
}
```

The `width` and `height` values tell the browser the image’s proportions so it can reserve space. They should match the actual image proportions. CSS can still make the image responsive.

Do not add `loading="lazy"` to the hero image or any image that is likely to be the LCP element.

### Preserve the approved assets

- Keep the original files. Create optimised versions through the agreed asset workflow.
- Check that compression does not visibly damage faces, products or text in images.
- Recheck crops and focal points at each required width after any change, as in Lesson 5.2.

Visible quality loss is a defect, even if the file is smaller.

## 7. Check fonts, scripts and third-party content

### Fonts

Web fonts can delay text or cause it to shift when the font loads. Check:

- How fonts are loaded, and whether the framework provides an optimised method.
- Whether only the approved font weights and styles are loaded.

Do not replace or remove approved fonts to improve performance. Raise the trade-off as a design decision.

### JavaScript

Large amounts of JavaScript slow loading and responsiveness. Check:

- Whether any dependency is unexpectedly large for what it does.
- Whether code is loaded on pages that do not use it.
- Whether a package added for a small feature could be replaced by existing code.

Lesson 9.1 covered reviewing dependencies. Removing or replacing one is a bounded task with its own verification.

### Third-party content

Embedded maps, booking widgets, video players, chat tools and analytics scripts often add significant load. Check whether each is in the approved scope and loaded as specified. Some can be loaded only when the visitor needs them, but the loading behaviour must be agreed, because it changes what the visitor sees.

## 8. Confirm build quality

A website can display correctly while its build reports problems.

Run the documented checks and record their results:

| Check | What to look for |
|---|---|
| Production build | Completes without errors; review any warnings |
| Type check | No TypeScript errors |
| Lint | No errors under the project’s rules |
| Automated tests | Playwright tests from Lesson 8.4 pass |
| Browser console on the built site | No errors on the selected pages |
| Network panel | No failed requests for images, fonts or scripts |

Warnings do not always need fixing, but each should be understood. A warning about a missing image size or an oversized bundle may explain a performance finding.

Use only the commands the project documents. Do not add new tools to complete this checklist.

## 9. Prioritise improvements by evidence

Prioritise changes that:

1. Have clear evidence from repeated measurements.
2. Affect important pages or shared templates.
3. Can be made without changing approved content or design.
4. Can be verified by re-measuring.

Avoid optimising blindly. Changes made only because a tool suggested them can add complexity without measurable benefit.

Do not chase a perfect score. A recorded improvement against agreed thresholds is a stronger result.

## 10. Ask Claude to investigate and improve performance

### Investigation prompt

```text
Investigate the performance of the selected pages using
the production build.

Before investigating:
- Read the relevant project instructions and asset workflow.
- Confirm the current Git status.
- Identify the documented build and preview commands.

Investigate:
- The LCP element on each page and why it loads when it does.
- Sources of layout shift.
- Image dimensions, formats, responsive sizes and lazy loading.
- Font loading.
- JavaScript size and third-party scripts on each page.
- Production build warnings and browser console errors.

For each issue, report:
1. The affected page, element or resource.
2. The evidence.
3. Whether it affects a shared component.
4. A proportionate improvement.
5. Whether the improvement would change approved
   content, assets, fonts or behaviour.

Investigate only. Do not edit files, install dependencies,
commit, push or deploy. State which measurements you
actually ran and under what conditions.

Pages and references:
[Insert pages, baseline measurements and exact references.]
```

### Correction prompt

```text
Implement the selected performance improvements.

- Follow the project's established image and asset approach.
- Preserve approved content, assets, crops, fonts and behaviour.
- Keep original asset files unchanged.
- Do not lazy-load the LCP image.
- Do not add dependencies or change unrelated files.

After editing:
- Run the production build and documented checks.
- Run the Playwright tests.
- Report the changes and any build warnings.

Do not commit, push or deploy.

Selected improvements:
[Insert the reviewed improvements.]
```

## 11. Re-measure and check for regressions

After each change:

1. Rebuild the production version.
2. Run Lighthouse under the same recorded conditions, at least three times.
3. Compare the medians with the baseline.
4. Check image quality, crops and focal points at the required widths.
5. Check that layouts did not shift or change.
6. Run the documented checks and Playwright tests.
7. Update the QA record.

Report the comparison honestly. If a change made no measurable difference, say so. If one metric improved while another worsened, report both.

## 12. Practical exercise

**Task: Measure and improve the website’s loading performance.**

1. Build the production version and serve it locally.
2. Measure the selected pages with Lighthouse, three runs each.
3. Record the baseline conditions and median values.
4. Identify causes using the report and Claude’s investigation.
5. Select improvements that preserve the approved design.
6. Implement them through bounded tasks.
7. Re-measure under the same conditions.
8. Check images, layouts and automated tests for regressions.
9. Record results and remaining issues in the QA record.

If a page already meets the agreed thresholds, record the evidence. Do not change it only to raise a score.

## 13. Expected submission

Submit:

- Build, preview and measurement conditions.
- Baseline measurements for each selected page.
- Identified causes with evidence.
- Selected improvements and the reasons for each.
- A summary of changed files.
- Before and after measurements.
- Image quality and regression check results.
- Build, type check, lint and test results.
- Remaining performance findings and decisions needed.

## 14. Completion criteria

The lesson is complete when:

- Measurements use the production build under recorded conditions.
- Results come from repeated runs.
- Improvements address identified causes.
- Approved content, assets and design are preserved.
- Before and after results are compared under the same conditions.
- Build quality checks are recorded.
- Limits of lab measurement are stated.

## 15. Knowledge check

1. Why should you measure the production build rather than the development server?
2. Why can Lighthouse not measure INP, and what does it report instead?
3. Why should the hero image not use lazy loading?
4. How do image width and height attributes help prevent layout shift?
5. Why should you run Lighthouse several times and record the median?
