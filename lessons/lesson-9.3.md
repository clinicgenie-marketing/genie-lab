# Lesson 9.3: Checking Page Metadata, Headings and Search Readiness

### Learning objective

By the end of this lesson, you should be able to:

- Explain what page metadata does and who approves its wording.
- Check page titles, descriptions, headings and link text across the website.
- Identify duplicate routes and confirm preferred page addresses.
- Distinguish controls that block crawling from controls that block indexing.
- Verify the rendered metadata and record search readiness without promising rankings.

**Prerequisites:** Complete Lesson 9.2 and have its findings recorded.

**Required materials:** Approved IA and routes, approved page copy, any approved metadata or SEO brief, page completion register from Lesson 6.4, QA record and Playwright tests from Lesson 8.4.

## 1. Understand search readiness

**Search engine optimisation (SEO)** covers the work that helps search engines find, understand and present a website’s pages.

SEO includes strategy work, such as choosing which topics and search terms to target, and technical work, such as making sure pages can be found and described correctly.

This lesson covers **search readiness**: the technical foundations that let search engines crawl, index and describe the approved pages accurately.

| Term | Meaning |
|---|---|
| **Crawling** | A search engine’s program, such as Googlebot, visits and reads a page |
| **Indexing** | The search engine stores the page so it can appear in results |
| **Metadata** | Information about a page, mostly in the HTML `head`, that browsers and search engines read |

**Search readiness does not guarantee rankings or traffic.** Rankings depend on many factors outside the implementation. Do not promise them in a submission.

Keyword strategy and content planning belong to the approved brief and content. This lesson does not ask you to create them.

## 2. Treat metadata wording as content

Page titles and descriptions are visible to people. They appear in browser tabs, bookmarks, search results and shared links. Their wording is content, and it follows the same editorial rules as page copy from Lesson 5.2.

Before implementing metadata, confirm the source:

| Situation | Response |
|---|---|
| Approved metadata exists | Implement it exactly |
| The brief defines a pattern, such as “Page name, then business name” | Apply the pattern and check each result |
| No approved metadata or pattern exists | Record a specification gap and propose wording for review |

If you propose wording, mark it **Awaiting editorial decision**. Do not add claims, prices, results, credentials or comparisons that the approved content does not support. Advertising rules may apply to health-related services, and metadata is part of the advertising message.

## 3. Check page titles

The page title is set by the `title` element in the HTML `head`. It appears in the browser tab and is often used as the clickable headline in search results.

Check each page:

| Check | Expected result |
|---|---|
| Present | Every page has a title |
| Unique | No two pages share the same title |
| Descriptive | Identifies the page’s subject |
| Consistent | Follows the approved pattern, such as including the business name |
| Accurate | Matches the page content and the approved wording |
| Readable | Written for people, not a list of search terms |

Lesson 8.3 checked titles for accessibility. Screen reader users hear the title when a page loads. Reuse that evidence where it still applies.

### How titles are set in TSX projects

The method depends on the framework. For example, in a Next.js project using the App Router, a page can export its metadata:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Approved page title]",
  description: "[Approved page description]",
};
```

This is an example only for that framework. Other starters use different methods. Ask Claude to identify how the actual starter sets metadata before changing anything, and reuse any shared pattern it already has.

## 4. Check meta descriptions

A **meta description** is a short summary of the page, set with a `meta` element:

```html
<meta name="description" content="[Approved page description]" />
```

Search engines may show it below the title in results, but they may also choose different text from the page.

Check that each page’s description:

- Exists, where the approved scope requires one.
- Is unique to that page.
- Summarises the page accurately.
- Uses the approved wording or pattern.

A copied description is a common error when building related pages from a shared pattern, as Lesson 6.2 warned about content carrying over between pages.

## 5. Confirm headings and link text

Search engines, like screen reader users, use headings and link text to understand a page.

Lesson 8.3 checked heading structure and link purpose. For this lesson, confirm only that:

- Each page’s main heading matches its approved subject.
- The main heading, page title and description describe the same page.
- Link text describes its destination, such as an approved treatment name, rather than “Click here”.
- Images have the alternative text recorded in Lesson 5.2.

Do not rewrite headings or add search terms to them. Headings are approved content.

## 6. Identify duplicate routes and preferred addresses

The same page can sometimes load at more than one address.

| Variation | Example |
|---|---|
| Trailing slash | `/treatments` and `/treatments/` |
| Capital letters | `/Treatments` and `/treatments` |
| Query parameters | `/treatments?ref=footer` |
| Old or duplicate routes | Two routes rendering the same page |

Search engines may treat these as separate pages, splitting their signals or showing the wrong address.

Check how the website handles each variation for a sample of pages:

1. Open the approved route.
2. Open the same route with and without a trailing slash.
3. Open it with a query parameter added.
4. Record whether each loads, redirects or returns a not found page.

### Canonical addresses

A **canonical URL** tells search engines which address is the preferred version of a page. It is set with a `link` element:

```html
<link rel="canonical" href="https://[production domain]/[approved route]" />
```

Canonical URLs normally use the full production address. The production domain is a deployment decision. If it has not been confirmed, record the dependency rather than inventing one.

Check that each page’s canonical URL, where implemented:

- Points to the page’s own preferred address, not to the homepage or another page.
- Uses the confirmed production domain.
- Matches the route in the approved IA.

A canonical URL pointing every page to the homepage is a serious error. It tells search engines that the other pages are duplicates.

## 7. Understand crawling and indexing controls

Different controls do different jobs. Mixing them up is a common and costly mistake.

| Control | What it does | What it does not do |
|---|---|---|
| `robots.txt` file | Tells crawlers which addresses not to visit | Does not reliably keep a page out of search results |
| `noindex` rule | Tells search engines not to include a page in results | Does not stop people visiting the page |
| Password protection | Stops crawlers and people without access | Requires configuration on the host |

According to Google’s documentation, a page blocked by `robots.txt` can still appear in results if other pages link to it, because the search engine never reads the page itself. A `noindex` rule only works if the crawler can access the page to read it. Google does not support `noindex` inside `robots.txt`.

The `noindex` rule can be set in the page’s HTML:

```html
<meta name="robots" content="noindex" />
```

Or as an HTTP response header sent by the server or host:

```text
X-Robots-Tag: noindex
```

### Two situations to check

| Environment | Expected state |
|---|---|
| Staging or preview | Protected, or marked `noindex`, so test versions do not appear in search results |
| Production | No `noindex` on pages that should appear in search results |

A `noindex` rule left over from staging can remove an entire website from search results after launch. This is a common launch error.

Find out how the project controls indexing for each environment. It may be set in code, in configuration or on the host. Lesson 9.4 checks the staging environment directly.

## 8. Check optional search features only when in scope

Some features help search engines or social platforms present pages. Implement and check them only when the approved scope includes them.

| Feature | Purpose | Check if in scope |
|---|---|---|
| **XML sitemap** | Lists the pages the website wants crawled | Lists only approved, indexable production pages |
| **Social sharing metadata**, such as Open Graph | Controls the title, description and image when a page is shared | Uses approved wording and images |
| **Structured data** | Describes the page in a format search engines can read, such as business details | Matches the visible page content exactly |

Structured data must not describe information that is not on the page, such as invented reviews or ratings. Business details, opening hours and addresses must come from approved sources.

## 9. Verify the rendered metadata

Source code shows what the implementation intends. The rendered page shows what visitors and search engines receive.

For each selected page:

1. Open the page in the browser.
2. Open developer tools and select the **Elements** panel.
3. Expand the `head` element.
4. Check the `title`, description, canonical link and any robots rules.

Some websites add or change metadata with JavaScript after the page loads. Compare the Elements panel with the browser’s **View page source** option, which shows the original HTML. If they differ, record which values search engines may see first and ask Claude to explain how the starter renders metadata.

### Use Lighthouse

The Lighthouse **SEO** category checks basic search readiness, such as whether the page has a title and description, whether it is blocked from indexing and whether links have descriptive text. Like the accessibility category, it checks only what it can detect automatically.

### Automate stable checks

Extend the Playwright tests from Lesson 8.4 for metadata that should not change accidentally:

```ts
import { test, expect } from "@playwright/test";

const APPROVED_TITLE = "[Approved page title]";
const APPROVED_DESCRIPTION = "[Approved page description]";

test("treatment page has its approved title and description", async ({
  page,
}) => {
  await page.goto("[Approved route]");

  await expect(page).toHaveTitle(APPROVED_TITLE);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    APPROVED_DESCRIPTION,
  );
});
```

Add a test that checks production pages do not carry a `noindex` rule only when the project has a way to test the production configuration. Do not run tests against the live production website without authorisation.

## 10. Record metadata in the existing page register

Add metadata columns to the page completion register from Lesson 6.4 rather than creating a new register.

| Page | Route | Title status | Description status | Canonical | Indexing | Notes |
|---|---|---|---|---|---|---|
| Treatment listing | Approved route | Matches approved | Matches approved | Correct | Indexable | None |
| Treatment detail | Approved route | Matches approved | Copied from another page | Correct | Indexable | Finding QA-SEO-02 |
| Location page | Approved route | Proposed wording | Proposed wording | Domain unconfirmed | Not checked | Awaiting editorial decision |

These rows are illustrative. Record actual pages and results.

Add defects to the QA record with the category “Search readiness” and follow the correction process from Lesson 8.2.

## 11. Ask Claude to review search readiness

```text
Review search readiness for the selected pages.

Before reviewing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Identify how the starter sets page titles, descriptions,
  canonical links and robots rules.
- Read the approved metadata, IA routes and page copy.

Check for each selected page:
- Rendered title and description against approved wording.
- Uniqueness of titles and descriptions across pages.
- Main heading consistency with the title and description.
- Canonical link target, where implemented.
- Robots rules in the HTML and, where visible, response headers.
- Behaviour of the route with and without a trailing slash
  and with a query parameter.
- Sitemap, social sharing metadata or structured data,
  only if they are in the approved scope.

Compare source code with the rendered head.
Report how indexing is controlled for each environment.
Identify any noindex rule that could reach production.

For each finding, report the page, expected result and
source, actual result, evidence and affected scope.
Do not propose new wording unless I ask for it.
Do not promise ranking outcomes.

Review only. Do not edit files, commit, push or deploy.

Scope and references:
[Insert selected pages, routes and exact references.]
```

## 12. Practical exercise

**Task: Check search readiness across the implemented pages.**

1. Confirm the approved metadata source, or record the gap.
2. Identify how the starter sets metadata.
3. Check titles and descriptions for every submitted page.
4. Confirm heading and link text consistency.
5. Test route variations for a sample of pages.
6. Check canonical links and indexing controls.
7. Check optional features only if they are in scope.
8. Verify rendered metadata in the browser and with Lighthouse.
9. Add metadata tests where appropriate.
10. Update the page register and QA record.

If metadata wording is missing, propose it for review and leave it marked as awaiting a decision.

## 13. Expected submission

Submit:

- The metadata source used, or the recorded gap.
- How the starter sets metadata.
- The updated page register with metadata columns.
- Route variation results.
- Canonical and indexing control findings for each environment.
- Lighthouse SEO results with your verification.
- New or updated Playwright tests.
- Proposed wording, clearly marked as awaiting a decision.
- New findings in the QA record.

## 14. Completion criteria

The lesson is complete when:

- Every submitted page has been checked for title and description.
- Metadata wording follows approved sources or awaits a decision.
- Duplicate route behaviour is recorded.
- Canonical links point to the correct preferred addresses.
- Indexing controls are understood for each environment.
- Rendered metadata has been verified in the browser.
- No ranking outcomes are promised.

## 15. Knowledge check

1. How does crawling differ from indexing?
2. Why might a page blocked by `robots.txt` still appear in search results?
3. Why is a `noindex` rule left over from staging dangerous after launch?
4. Who approves the wording of page titles and descriptions?
5. What is wrong with every page’s canonical link pointing to the homepage?
