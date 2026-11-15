# Lesson 8.4: Automating Key Checks with Playwright

### Learning objective

By the end of this lesson, you should be able to:

- Explain what automated browser tests can and cannot verify.
- Decide which existing manual checks are worth automating.
- Confirm whether Playwright is already set up, or request authorisation to add it.
- Write and run short Playwright tests in TypeScript for key routes, journeys and form validation.
- Interpret test results and handle failures without weakening the tests.

**Prerequisites:** Complete Lesson 8.3 and have the QA record, visitor journey checks and feature state checklists available.

**Required materials:** Implemented website, documented project scripts, QA test cases from Lesson 8.1, journey checks from Lesson 6.3, form specification from Lesson 7.1 and any existing test configuration.

## 1. Understand automated browser testing

So far, you have checked the website by hand. Manual checks are essential, but repeating them after every change takes time, and repeated manual checks are easy to skip.

An **automated browser test** is a script that opens the website in a real browser, performs actions such as selecting a link, and checks that the expected result appears.

**Playwright** is a testing tool that does this in Chromium, Firefox and WebKit, the engine used by Safari. Its test runner, Playwright Test, uses TypeScript.

Automated tests are good at:

| Strength | Example |
|---|---|
| Repeating the same steps exactly | Following the same journey after every change |
| Checking many routes quickly | Confirming each approved page loads with a main heading |
| Catching regressions early | Noticing that a navigation change broke a link |
| Producing consistent evidence | A report showing which checks passed |

Automated tests cannot:

- Judge whether a page matches the approved design.
- Decide whether copy is accurate or appropriate.
- Prove that a message reached a real inbox.
- Check anything they do not explicitly assert.

**A passing test proves only what the test checks, in the conditions it ran.**

Automated tests support the manual checks from earlier lessons. They do not replace them.

## 2. Check what already exists

Before writing tests, inspect the project.

At the terminal command prompt, from the project folder:

```bash
git status --short
```

Then look for:

| Item | Where to look | What it tells you |
|---|---|---|
| Playwright dependency | `devDependencies` in `package.json` | Whether Playwright is installed |
| Configuration | `playwright.config.ts` in the project root | How tests run |
| Test files | A `tests` or `e2e` folder, or files ending in `.spec.ts` | Existing tests |
| Test scripts | The `scripts` section of `package.json` | Documented test commands |
| Project rules | Working rules and architecture documents | Whether a testing approach is already decided |

Ask Claude to report what exists without changing anything.

If Playwright is already configured, use the existing setup and conventions.

## 3. Get authorisation before adding Playwright

Adding Playwright adds **dependencies**, which are packages from other developers that the project relies on, and it adds configuration files. Lesson 9.1 covers dependency risks in more detail.

Adding a testing tool is a project decision. Check whether:

- The architecture or working rules already include Playwright.
- The supervisor has authorised adding it.
- Another testing tool has been chosen instead.

If none of these apply, request the decision. Explain the purpose, the files that will change and the checks you plan to automate.

Do not add Playwright merely because this lesson describes it.

## 4. Install Playwright when authorised

These commands come from the Playwright documentation. Check the current installation guide before running them, because tools change.

From the project root folder, at the terminal command prompt:

```bash
npm init playwright@latest
```

This command adds Playwright to an existing project. It asks several questions. For this project, choose:

| Prompt | Choice |
|---|---|
| Language | TypeScript |
| Tests folder | Follow the project’s existing convention, or accept the suggested name and record it |
| GitHub Actions workflow | No, unless continuous integration has been authorised separately |
| Install browsers | Yes |

The installer typically creates a configuration file, an example test and changes to `package.json` and the lock file.

After installation:

1. Run `git status --short` to see every new and changed file.
2. Review the changes with `git diff`.
3. Check the installed version:

```bash
npx playwright --version
```

4. Record the version in your submission.

If the project uses a different package manager, such as pnpm or Yarn, use the matching command from the Playwright documentation.

## 5. Point the tests at the local website

Playwright needs to know where the website runs. The configuration file can also start the development server before the tests run.

### Illustrative configuration

```ts
import { defineConfig, devices } from "@playwright/test";

// Replace with the address your project actually uses.
const baseURL = process.env.BASE_URL ?? "http://localhost:PORT";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    // Replace with the documented development command.
    command: "npm run DEV_SCRIPT",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
});
```

Before using this pattern:

- Replace `PORT` and `DEV_SCRIPT` with the values documented in the actual project.
- Keep the browser projects that match the agreed review conditions from Lesson 8.1.
- Compare it with the configuration the installer generated rather than replacing that file wholesale.

Reading `BASE_URL` from an environment variable means the same tests can later run against the staging site in Lesson 9.4.

A **trace** is a recording of each test step. Playwright can open it later to show what happened when a test failed.

## 6. Decide what to automate

Automate checks that are stable, important and repeated often.

| Good candidates | Poor candidates |
|---|---|
| Each approved route loads and shows its main heading | Judging spacing against the design |
| Header links reach their approved destinations | Reviewing copy for tone |
| Approved critical visitor journeys | One-off checks that will never be repeated |
| Form validation messages for empty or invalid input | Submissions that would send real messages or create real records |
| An automated accessibility scan of key pages | Checks whose expected behaviour is still Awaiting decision |

Start small. Three to five meaningful tests that you understand are better than a large suite you cannot explain.

Base each test on an existing test case or journey from Lessons 6.3, 7.1 and 8.1. Each automated test should trace back to an approved requirement.

## 7. Write your first test

A test file contains one or more tests. Each test has a name, steps and **assertions**. An assertion is a statement of what must be true, such as “this heading is visible”.

### Example: a route loads with its approved heading

```ts
import { test, expect } from "@playwright/test";

// Use the exact heading from the approved content source.
const APPROVED_HOMEPAGE_HEADING = "[Approved homepage heading]";

test("homepage loads with its approved main heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: APPROVED_HOMEPAGE_HEADING }),
  ).toBeVisible();
});
```

What each part does:

| Code | Meaning |
|---|---|
| `test("...", async ({ page }) => { ... })` | Defines a test and gives it a browser page |
| `page.goto("/")` | Opens the homepage, using the configured base URL |
| `page.getByRole("heading", ...)` | Finds the element the way assistive technology would, by its role and accessible name |
| `expect(...).toBeVisible()` | Asserts that the element appears |

Playwright recommends locating elements by role where possible, because it reflects how people and assistive technology perceive the page. Role-based locators give early warning about structure problems, but they do not replace the accessibility review from Lesson 8.3.

Replace the placeholder with the exact approved heading. Do not copy wording from the current implementation, because the implementation might contain the error you are trying to catch.

## 8. Automate a visitor journey

Use an approved journey from Lesson 6.3.

### Example: listing to detail page

Only if this journey exists in the approved project:

```ts
import { test, expect } from "@playwright/test";

const TREATMENT_LINK_NAME = "[Approved treatment link label]";
const TREATMENT_ROUTE = "[Approved detail route]";
const TREATMENT_HEADING = "[Approved detail page heading]";

test("visitor can open a treatment from the listing", async ({ page }) => {
  await page.goto("[Approved listing route]");

  await page.getByRole("link", { name: TREATMENT_LINK_NAME }).click();

  await expect(page).toHaveURL(TREATMENT_ROUTE);
  await expect(
    page.getByRole("heading", { level: 1, name: TREATMENT_HEADING }),
  ).toBeVisible();
});
```

This checks both the destination and that the destination shows the correct content. Checking only the URL would miss a correct route displaying the wrong page’s information.

Playwright waits automatically for elements and conditions in assertions. Do not add fixed pauses such as `page.waitForTimeout(3000)`. Fixed pauses make tests slow and still fail when the site is slower than expected.

## 9. Automate form validation safely

Automate only the local behaviour that is safe to repeat.

### Example: required field error

```ts
import { test, expect } from "@playwright/test";

test("contact form reports a missing email address", async ({ page }) => {
  await page.goto("[Approved contact route]");

  await page.getByLabel("[Approved name label]").fill("Test Visitor");
  await page.getByRole("button", { name: "[Approved submit label]" }).click();

  await expect(page.getByText("[Approved email error message]")).toBeVisible();
});
```

`getByLabel` finds a control by its visible label. If this locator cannot find the field, the label may not be associated with the control, which is itself worth investigating.

Before running any form test, confirm what happens when the form is submitted with valid information. If a test could send a real message, create a booking or trigger a notification, it must not run unless the agreed test arrangements from Lesson 7.1 authorise it.

If you are unsure whether a test could reach an external service, ask Claude to inspect the submission handling first and report it. Do not run the test until you know.

## 10. Add an automated accessibility scan

The `@axe-core/playwright` package runs the axe accessibility engine inside Playwright tests. It is a separate dependency, so it needs the same authorisation as Playwright.

The Playwright documentation shows this pattern:

```ts
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage has no automatically detectable WCAG A or AA violations", async ({
  page,
}) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});
```

The tags limit the scan to rules linked to particular WCAG levels. Check the axe documentation for tags that match your project’s recorded requirement before changing them.

The scan checks the page in its current state. To scan the open mobile menu, open it in the test before running the scan.

As Lesson 8.3 explained, automated scans detect only some problems. Keep the manual accessibility checks in your QA plan.

Do not use the tool’s options for excluding elements or disabling rules to make a failing test pass. If a known issue must be excluded temporarily, record the finding, its approval and the exclusion together.

## 11. Run the tests and read the results

Run these commands at the terminal command prompt in the project folder.

| Command | What it does |
|---|---|
| `npx playwright test` | Runs all tests without showing browser windows |
| `npx playwright test --headed` | Runs tests with visible browser windows |
| `npx playwright test --ui` | Opens UI mode, where you can step through each test |
| `npx playwright test tests/[file].spec.ts` | Runs one test file |
| `npx playwright test --project=chromium` | Runs tests for one configured browser project |
| `npx playwright show-report` | Opens the HTML report from the last run |

If the project defines its own test script in `package.json`, use that documented script.

The terminal shows how many tests passed and failed and in which browser projects. Record:

- The command used.
- The Playwright version.
- The browser projects that ran.
- The implementation version tested.
- The pass and fail counts.

## 12. Handle failing tests honestly

When a test fails, first establish why. There are three main possibilities:

| Cause | Response |
|---|---|
| The website has a defect | Record a finding and follow the correction process from Lesson 8.2 |
| The test is wrong | Correct the test so it matches the approved requirement |
| The environment is wrong | Fix the setup, such as the server not starting or the base URL being incorrect |

Use UI mode or the trace to see each step and what the page looked like.

**Never change a test only to make it pass.** Loosening an assertion, deleting a check, adding a long pause or skipping the test without recording why hides the problem rather than solving it.

A **flaky test** passes sometimes and fails at other times without any code change. Treat flakiness as a finding about the test or the site. Do not rerun until it passes and then report a pass.

## 13. Ask Claude to write the tests

```text
Write Playwright tests in TypeScript for the selected checks.

Before writing:
- Read the relevant project instructions.
- Confirm the current Git status.
- Confirm whether Playwright is installed and how it is configured.
- Inspect the existing test files and conventions.
- Read the selected test cases and their approved requirements.

For each test:
- Trace it to the listed test case or requirement.
- Use the exact approved text from the content source,
  not text copied from the current implementation.
- Prefer role, label and text locators.
- Use web-first assertions; do not use fixed timeouts.
- Keep tests independent of each other.
- Use synthetic information only.

Do not write tests that submit information to external
services, send messages or create bookings, unless the
test arrangements I provide authorise it.

After writing:
- Run the new tests using the documented command.
- Report each test, its source requirement and its result.
- For any failure, state whether the evidence points to the
  website, the test or the environment.
- Do not weaken, skip or delete a test to make it pass.

Do not install dependencies, change unrelated files,
commit, push or deploy.

Selected checks and approved references:
[Insert test case IDs, routes, journeys and exact approved text.]
```

Read every test Claude writes. You should be able to explain what each one checks.

## 14. Record and maintain the tests

Add the automated tests to your QA record from Lesson 8.1.

| Field | What to record |
|---|---|
| Test file and name | Where the automated check lives |
| Source requirement | The test case or requirement it covers |
| What it asserts | The specific conditions checked |
| What it does not check | The manual checks that remain necessary |
| Latest result | Pass or fail, with the implementation version |

When approved content or routes change, the tests must change with them. Out-of-date tests either fail for the wrong reason or, worse, keep passing while checking the wrong thing.

If the project’s instructions do not yet document how to run the tests, propose an update for supervisor review.

## 15. Practical exercise

**Task: Automate a small set of key checks.**

1. Inspect the project for an existing test setup.
2. Confirm authorisation before adding Playwright or `@axe-core/playwright`.
3. Select three to five checks from your QA record.
4. Write tests for at least one route, one journey and one safe form validation check, where these exist.
5. Run the tests and record the results.
6. Investigate any failure and classify its cause.
7. Record the automated coverage and its limits in the QA record.

If authorisation to add Playwright is not given, submit the selected checks, the draft tests and the authorisation request. Do not install it without approval.

## 16. Expected submission

Submit:

- The existing test setup findings.
- The authorisation decision for any new dependencies.
- The Playwright version and configuration summary.
- The test files, each traced to a requirement.
- The command used and the test results.
- Classification of any failures.
- The updated QA record showing automated and manual coverage.

## 17. Completion criteria

The lesson is complete when:

- New dependencies were added only with authorisation.
- Each test traces to an approved requirement.
- Tests use approved text and stable locators.
- No test triggers unauthorised external actions.
- Results are recorded with versions and conditions.
- Failures are investigated, not hidden.
- Remaining manual checks are clearly identified.

## 18. Knowledge check

1. What does a passing Playwright test prove?
2. Why should tests use the approved content source rather than text copied from the implementation?
3. Why should you avoid fixed pauses such as `waitForTimeout`?
4. What are three possible causes of a failing test?
5. Why is it unsafe to automate a form submission without checking where the information goes?
