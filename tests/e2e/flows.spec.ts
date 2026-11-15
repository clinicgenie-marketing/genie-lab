import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { FLOW_PORT } from "../../playwright.config";

// The IA plan's five user flows, end to end, in order, on a fresh server.
// Today is Wed 18 Nov 2026: Days 1 to 3 are open and Day 3 is today.
// Lesson 1.1 uses the clearly fake TEST FIXTURE knowledge check.
test.use({ baseURL: `http://localhost:${FLOW_PORT}` });
test.describe.configure({ mode: "serial" });

async function axe(page: Page) {
  const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  return r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
}
const saved = (page: Page) => page.waitForResponse((r) => r.request().method() === "POST" && r.ok());

async function tickAll(page: Page, scope: string) {
  // Wait for the boxes to render, since this often follows a client-side navigation.
  await expect(page.locator(scope).getByRole("checkbox").first()).toBeVisible();
  for (const box of await page.locator(scope).getByRole("checkbox").all()) {
    if (await box.isChecked()) continue;
    const s = saved(page);
    await box.check();
    await s;
  }
}

async function fillAndSubmit(page: Page, prefix: string) {
  await expect(page).toHaveURL(/\/submit$/);
  const items = page.locator("fieldset.gl-evidence__item");
  await expect(items.first()).toBeVisible();
  for (let i = 0; i < (await items.count()); i++) await items.nth(i).getByLabel("Your text").fill(`${prefix} ${i + 1}.`);
  await page.locator("form.gl-evidence").getByRole("button", { name: "Submit evidence" }).click();
  await page.getByRole("dialog", { name: "Submit your evidence?" }).getByRole("button", { name: "Submit evidence" }).click();
}

let shareUrl = "";

test("1. First sign-in: the Welcome tour, then Start Lesson 1.1", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/welcome$/);
  for (const [n, title] of [[1, "What you will build"], [2, "How a lesson works"], [3, "How review works"], [4, "Get set up for Day 1"]] as const) {
    await expect(page.getByText(`Step ${n} of 4`)).toBeVisible();
    await expect(page.getByRole("heading", { level: 2 })).toHaveText(title);
    if (n < 4) await page.getByRole("link", { name: "Next" }).click();
  }
  await page.getByRole("button", { name: "Start Lesson 1.1" }).click();
  await expect(page).toHaveURL(/\/lesson\/1-1#section-1$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("How Websites Work and the Vibe Coding Workflow");
  await page.goto("/");
  await expect(page).toHaveURL(/\/home$/);
  await expect(page.locator(".gl-page-head")).toContainText("Day 3 of 10");
});

test("2. The daily loop: Continue, read, tick, submit, check, complete, next lesson", async ({ page }) => {
  await page.goto("/home");
  await page.getByRole("link", { name: "Continue lesson" }).click();
  await expect(page.locator("#lesson-position")).toHaveText("Section 1 of 6");
  for (let n = 2; n <= 6; n++) {
    await page.getByRole("link", { name: "Next section" }).click();
    await expect(page.locator("#lesson-position")).toHaveText(`Section ${n} of 6`);
  }
  await page.getByRole("link", { name: "Go to your task" }).click();
  await expect(page).toHaveURL(/\/lesson\/1-1\/task$/);
  await tickAll(page, ".gl-task");
  await expect(page.getByText("Task steps: Done.")).toBeVisible();

  await page.getByRole("link", { name: "Submit evidence" }).first().click();
  await fillAndSubmit(page, "Daily loop evidence");
  await page.waitForURL(/\/work\/1-1\?submitted=1$/);
  await expect(page.getByRole("status").filter({ hasText: "Submitted" })).toBeVisible();

  await page.goto("/lesson/1-1/check");
  for (const [i, a] of ["Option B", "Option A", "Option C", "Option D", "Option A"].entries()) {
    await page.getByLabel(a).check();
    await page.getByRole("button", { name: "Check answer" }).click();
    await page.getByRole("button", { name: i === 4 ? "Finish" : "Next question" }).click();
  }
  await expect(page.getByText("Knowledge check passed")).toBeVisible();

  await page.getByRole("link", { name: "Back to your task" }).first().click();
  await tickAll(page, ".gl-selfcheck");
  await expect(page.locator(".gl-condition--ok")).toHaveCount(4);
  await page.getByRole("button", { name: "Mark lesson complete" }).click();
  await expect(page.getByText("You marked this lesson complete.")).toBeVisible();
  await page.getByRole("link", { name: "Start Lesson 1.2" }).click();
  await expect(page).toHaveURL(/\/lesson\/1-2/);

  await page.goto("/home");
  await expect(page.locator(".gl-today h2")).toHaveText("Setting Up Claude Code CLI and the Terminal");
  await expect(page.locator(".gl-today")).toContainText("7 lessons behind");
  await page.goto("/day/1");
  await expect(page.locator(".gl-lessoncard").first().locator(".gl-badge")).toHaveText("Complete");
});

test("3. Changes requested: share, record, see it first on Home, resubmit, back to Awaiting review", async ({ page, browser }) => {
  await page.goto("/lesson/2-4/submit");
  await fillAndSubmit(page, "Brief and structure, first version, item");
  await page.waitForURL(/\/work\/2-4\?submitted=1$/);
  await page.getByRole("button", { name: "Create share link" }).click();
  await expect(page.locator("#share-url")).toHaveValue(/\/share\//);
  shareUrl = await page.locator("#share-url").inputValue();
  const supervisor = await (await browser.newContext()).newPage();
  await supervisor.goto(shareUrl);
  await expect(supervisor.getByText("Brief and structure, first version, item 1.")).toBeVisible();

  await page.getByLabel("Changes requested").check();
  await page.getByLabel(/Reviewer's name/).fill("Test Reviewer");
  await page.getByLabel(/supervisor's notes/).fill("The booking journey is missing.");
  await page.getByRole("button", { name: "Record review outcome" }).click();
  await expect(page.locator(".gl-inline-status .gl-tag")).toHaveText("Changes requested");

  await page.goto("/home");
  const first = page.locator("main .gl-section").first();
  await expect(first.getByRole("heading", { level: 2 })).toHaveText("Needs your attention");
  await expect(first).toContainText("The booking journey is missing.");
  await first.getByRole("link", { name: "Resubmit Lesson 2.4" }).click();
  await page.getByRole("link", { name: "Resubmit" }).click();
  await expect(page.locator("fieldset.gl-evidence__item").first().getByLabel("Your text")).toHaveValue("Brief and structure, first version, item 1.");
  await fillAndSubmit(page, "Brief and structure, second version, item");
  await page.waitForURL(/\/work\/2-4\?submitted=2$/);
  await expect(page.locator(".gl-inline-status .gl-tag")).toHaveText("Awaiting review");
  await expect(page.locator("details.gl-version summary")).toHaveText(["Version 1"]);
  await supervisor.reload();
  await expect(supervisor.getByText("Brief and structure, second version, item 1.")).toBeVisible();

  await page.goto("/home");
  await expect(page.getByRole("heading", { name: "Needs your attention" })).toHaveCount(0);
  const waiting = page.locator("section").filter({ has: page.getByRole("heading", { name: "Waiting on your supervisor" }) });
  await expect(waiting).toContainText("Lesson 2.4");
});

test("4. Getting unstuck: Help, Toolkit search, the earlier lesson, contact the supervisor, back to the same place", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/lesson/2-3#section-1");
  await expect(page.locator(".ob-callout--dependency")).toContainText("Lesson 2.1: Understanding the Business, Audience and Industry");
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(150);
  const before = await page.evaluate(() => window.scrollY);
  expect(before).toBeGreaterThan(300);

  // From 1024px the lesson bar stays in view, so Help is reachable without scrolling back up.
  // Click by position, as a pointer does; Playwright's own click scrolls a sticky element's
  // original position into view first, which a real click never does.
  const help = page.getByRole("banner").getByRole("button", { name: "Help" });
  await expect(help).toBeInViewport();
  const box = (await help.boundingBox())!;
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  expect(Math.abs((await page.evaluate(() => window.scrollY)) - before)).toBeLessThanOrEqual(2);
  const drawer = page.getByRole("dialog", { name: "Help" });
  await drawer.getByLabel("Lessons, prompts, commands, templates and terms").fill("journeys");
  await drawer.getByRole("button", { name: "Search", exact: true }).click();
  await expect(drawer.getByText(/results? for “journeys”/)).toBeVisible();
  await expect(drawer.getByRole("link", { name: "Lesson 2.3: Planning the Sitemap, User Journeys and Page Sections" })).toBeVisible();
  await expect(drawer).toContainText("Section 1 of 8");
  await drawer.getByRole("button", { name: "Copy lesson and section" }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain("Lesson 2.3: Planning the Sitemap, User Journeys and Page Sections · Section 1:");
  await page.keyboard.press("Escape");
  await expect(drawer).toBeHidden();
  await expect(help).toBeFocused();
  await expect(page).toHaveURL(/\/lesson\/2-3#section-1$/);
  expect(Math.abs((await page.evaluate(() => window.scrollY)) - before)).toBeLessThanOrEqual(2);
  // By keyboard: Enter opens it, Escape closes it, and the place is kept.
  await page.keyboard.press("Enter");
  await expect(drawer).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(help).toBeFocused();
  expect(Math.abs((await page.evaluate(() => window.scrollY)) - before)).toBeLessThanOrEqual(2);

  // Reread the earlier lesson the current one depends on, then come back.
  await page.locator(".ob-callout--dependency").getByRole("link", { name: /Lesson 2\.1/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Understanding the Business, Audience and Industry");
  await page.goBack();
  await expect(page).toHaveURL(/\/lesson\/2-3#section-1$/);
  await expect(page.locator("#lesson-position")).toHaveText("Section 1 of 8");
});

test("5. Returning after a break: Home first, Continue reopens the exact section with ticks intact", async ({ page, browser }) => {
  // Before the break: Lesson 1.2, section 4, two steps ticked.
  const s = saved(page);
  await page.goto("/lesson/1-2#section-4");
  await s;
  for (const i of [0, 1]) {
    const t = saved(page);
    await page.locator(".gl-lesson__task").getByRole("checkbox").nth(i).check();
    await t;
  }
  // After the break: a new browser session.
  const later = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();
  await later.goto(`http://localhost:${FLOW_PORT}/`);
  await expect(later).toHaveURL(/\/home$/);
  await expect(later.locator(".gl-today")).toContainText("You stopped at section 4 of 8");
  await later.getByRole("link", { name: "Continue lesson" }).click();
  await expect(later.locator("#lesson-position")).toHaveText("Section 4 of 8");
  const steps = later.locator(".gl-lesson__task").getByRole("checkbox");
  await expect(steps.nth(0)).toBeChecked();
  await expect(steps.nth(1)).toBeChecked();
  await expect(steps.nth(2)).not.toBeChecked();
  await expect(later.locator(".gl-task__count")).toHaveText("2 of 8 steps done");
});

// Pages that need real state (a completed lesson, versions, a recorded decision, a share link), at every width.
const WIDTHS = [320, 360, 390, 720, 768, 1024, 1280, 1440];
for (const route of ["/home", "/syllabus", "/day/1", "/day/2", "/work", "/work/2-4", "/work/1-1", "/lesson/1-1/task", "/lesson/1-1/check", "/lesson/1-2#section-4", "/lesson/2-4/submit", "SHARE"]) {
  test(`with real progress: ${route} at every width, no sideways scrolling and no axe violations`, async ({ page }) => {
    for (const width of WIDTHS) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route === "SHARE" ? shareUrl : route);
      await expect(page.locator("main h1")).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth), `${route} at ${width}px`).toBeLessThanOrEqual(0);
      expect(await axe(page), `${route} at ${width}px`).toEqual([]);
    }
  });
}
