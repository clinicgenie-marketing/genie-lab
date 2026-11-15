import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

// Main server: development dates make Days 1 to 3 open (today Wed 18 Nov 2026), so Day 4
// lessons are locked. Progress goes to a throwaway folder. Tests that save progress each
// use their own lesson so they can run in parallel.

const WIDTHS = [320, 360, 390, 720, 768, 1024, 1280, 1440];

async function axe(page: Page) {
  const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  return r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
}

/** Waits for the next server action (a POST) to finish. */
const saved = (page: Page) => page.waitForResponse((r) => r.request().method() === "POST" && r.ok());

test.describe("reading a lesson section by section", () => {
  test("opens at section 1 with the lesson's position in the bar", async ({ page }) => {
    await page.goto("/lesson/1-1");
    await expect(page).toHaveURL(/\/lesson\/1-1#section-1$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("How Websites Work and the Vibe Coding Workflow");
    await expect(page.getByRole("heading", { level: 2, name: "1. Understand what a website is made of" })).toBeVisible();
    await expect(page.locator("#lesson-position")).toHaveText("Section 1 of 6");
    await expect(page.getByText("What you'll be able to do")).toBeVisible();
    await expect(page.getByText("Before you start")).toBeVisible();
  });

  test("Next section moves on, updates the bar and the address, and focuses the new heading", async ({ page }) => {
    await page.goto("/lesson/1-1#section-1");
    await page.getByRole("link", { name: "Next section" }).click();
    await expect(page).toHaveURL(/#section-2$/);
    await expect(page.locator("#lesson-position")).toHaveText("Section 2 of 6");
    const h2 = page.getByRole("heading", { level: 2, name: "2. Tell the working environments apart" });
    await expect(h2).toBeFocused();
    await page.getByRole("link", { name: "Back", exact: true }).click();
    await expect(page).toHaveURL(/#section-1$/);
  });

  test("every section has its own link", async ({ page }) => {
    await page.goto("/lesson/1-1#section-4");
    await expect(page.getByRole("heading", { level: 2, name: "4. Follow a controlled working cycle" })).toBeVisible();
    await expect(page.locator("#lesson-position")).toHaveText("Section 4 of 6");
  });

  test("the last section offers Go to your task and Further reading", async ({ page }) => {
    await page.goto("/lesson/1-3#section-6");
    const go = page.getByRole("link", { name: "Go to your task" });
    await expect(go).toHaveAttribute("href", "/lesson/1-3/task");
    await expect(page.getByRole("link", { name: "Next section" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Further reading" })).toBeVisible();
    const external = page.locator(".gl-further a[target=_blank]").first();
    await expect(external).toHaveAttribute("rel", /noopener/);
    await expect(external).toContainText("(opens in a new tab)");
  });

  test("a link to a task-side section goes to the task page", async ({ page }) => {
    await page.goto("/lesson/1-3#section-7");
    await expect(page).toHaveURL(/\/lesson\/1-3\/task$/);
    await expect(page.getByRole("heading", { level: 1, name: "Your task" })).toBeVisible();
  });

  test("section 1 warns about unfinished prerequisite lessons", async ({ page }) => {
    await page.goto("/lesson/2-3#section-1");
    const callout = page.locator(".ob-callout--dependency");
    await expect(callout).toContainText("Before you continue");
    await expect(callout.getByRole("link")).toHaveText(["Lesson 2.1: Understanding the Business, Audience and Industry", "Lesson 2.2: Researching Relevant References and Sources Efficiently"]);
  });
});

test.describe("saved position", () => {
  test("Continue reopens the section where the intern stopped", async ({ page }) => {
    const save = saved(page);
    await page.goto("/lesson/1-2#section-5");
    await save;
    await page.goto("/lesson/1-2");
    await expect(page).toHaveURL(/\/lesson\/1-2#section-5$/);
    await expect(page.locator("#lesson-position")).toHaveText("Section 5 of 8");
    // After the first visit the objective card starts collapsed.
    await page.goto("/lesson/1-2#section-1");
    await expect(page.locator("details.gl-introcard").first()).not.toHaveAttribute("open", "");
  });

  test("browser Back returns to the same scroll position in the previous section", async ({ page }) => {
    await page.goto("/lesson/2-2#section-1");
    // Scroll to where the Next section button is, as a reader would; that is the position Back should return to.
    const next = page.getByRole("link", { name: "Next section" });
    await next.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    const before = await page.evaluate(() => window.scrollY);
    expect(before).toBeGreaterThan(300);
    await next.click();
    await expect(page).toHaveURL(/#section-2$/);
    await page.goBack();
    await expect(page).toHaveURL(/#section-1$/);
    await expect(page.locator("#lesson-position")).toHaveText("Section 1 of 7");
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before - 10);
    expect(await page.evaluate(() => window.scrollY)).toBeLessThan(before + 10);
  });

  test("the lesson shows as In progress once started", async ({ page }) => {
    const save = saved(page);
    await page.goto("/lesson/2-1#section-1");
    await save;
    await page.goto("/day/2");
    await expect(page.locator(".gl-lessoncard").first().locator(".gl-badge")).toHaveText("In progress");
    await expect(page.locator("main .ob-btn--primary")).toHaveText("Continue Lesson 2.1");
  });
});

test.describe("Your task", () => {
  test("ticks save as they are made, survive a reload and Back, and are counted", async ({ page }) => {
    await page.goto("/lesson/2-4#section-1");
    const panel = page.locator(".gl-lesson__task");
    const step1 = panel.getByRole("checkbox").first();
    // Start from an unticked step, so the test also holds when run more than once.
    if (await step1.isChecked()) {
      const reset = saved(page);
      await step1.uncheck();
      await reset;
    }
    const save = saved(page);
    await step1.check();
    await save;
    await expect(panel.getByRole("status").filter({ hasText: "Saved" })).toBeVisible();
    await expect(panel.locator(".gl-task__count")).toHaveText("1 of 7 steps done");
    await page.getByRole("link", { name: "Next section" }).click();
    await page.goBack();
    await expect(panel.getByRole("checkbox").first()).toBeChecked();
    await page.reload();
    await expect(page.locator(".gl-lesson__task").getByRole("checkbox").first()).toBeChecked();
    await page.goto("/lesson/2-4/task");
    await expect(page.getByRole("checkbox").first()).toBeChecked();
  });

  test("a failed save puts the tick back and says what happened", async ({ page }) => {
    await page.goto("/lesson/3-1#section-1");
    await page.route("**/lesson/3-1**", (route) => (route.request().method() === "POST" ? route.abort() : route.continue()));
    const step = page.locator(".gl-lesson__task").getByRole("checkbox").first();
    await step.check({ force: true });
    // Scoped to the panel: Next.js adds its own route announcer with role="alert".
    await expect(page.locator(".gl-lesson__task").getByRole("alert")).toContainText("We couldn't save your tick. Check your connection, then try again.");
    await expect(step).not.toBeChecked();
    await expect(page.locator(".gl-lesson__task").getByRole("status").filter({ hasText: "Saved" })).toHaveCount(0);
  });
});

test.describe("layout by width", () => {
  test("1280px and over: outline rail, reading column and task panel", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/lesson/1-1#section-2");
    await expect(page.locator(".gl-lesson__rail").getByRole("navigation", { name: "Lesson outline" })).toBeVisible();
    await expect(page.locator(".gl-lesson__rail a[aria-current='location']")).toContainText("2. Tell the working environments apart");
    await expect(page.locator(".gl-lesson__task")).toBeVisible();
    await expect(page.getByRole("button", { name: "Outline" })).toBeHidden();
    await expect(page.getByRole("tablist")).toHaveCount(0);
  });

  test("1024 to 1279px: the outline is a drawer that contains focus and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 900 });
    await page.goto("/lesson/1-1#section-1");
    await expect(page.locator(".gl-lesson__rail")).toBeHidden();
    await expect(page.locator(".gl-lesson__task")).toBeVisible();
    const button = page.getByRole("button", { name: "Outline" });
    await button.click();
    const dialog = page.getByRole("dialog", { name: "Outline" });
    await expect(dialog).toBeVisible();
    expect(await axe(page)).toEqual([]);
    for (let i = 0; i < 25; i++) {
      await page.keyboard.press("Tab");
      expect(await page.evaluate(() => Boolean(document.activeElement?.closest("dialog")))).toBe(true);
    }
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(button).toBeFocused();
    await button.click();
    await dialog.getByRole("link", { name: /3\. Understand your role/ }).click();
    await expect(dialog).toBeHidden();
    await expect(page).toHaveURL(/#section-3$/);
    await expect(page.locator("#lesson-position")).toHaveText("Section 3 of 6");
  });

  test("under 1024px: Lesson and Your task tabs, with the step count", async ({ page }) => {
    await page.setViewportSize({ width: 720, height: 900 });
    await page.goto("/lesson/1-4#section-1");
    const lessonTab = page.getByRole("tab", { name: "Lesson" });
    const taskTab = page.getByRole("tab", { name: /Your task/ });
    await expect(lessonTab).toHaveAttribute("aria-selected", "true");
    await expect(taskTab).toContainText("0 of 8 steps done");
    await lessonTab.focus();
    await page.keyboard.press("ArrowRight");
    await expect(taskTab).toBeFocused();
    await expect(taskTab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel", { name: /Your task/ }).getByRole("checkbox")).toHaveCount(8);
    expect(await axe(page)).toEqual([]);
    await page.keyboard.press("ArrowLeft");
    await expect(lessonTab).toHaveAttribute("aria-selected", "true");
  });

  for (const route of ["/lesson/1-1#section-1", "/lesson/1-2#section-4", "/lesson/1-3#section-2", "/lesson/3-3#section-3", "/lesson/3-3#section-1"]) {
    for (const width of WIDTHS) {
      test(`${route} never scrolls sideways at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 });
        await page.goto(route);
        await expect(page.locator(".gl-section-title")).toBeVisible();
        expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
      });
    }
  }

  test("tables become stacked cards below 720px", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto("/lesson/1-1#section-1");
    const table = page.locator(".gl-table").first();
    expect((await table.locator("thead").boundingBox())?.width ?? 0).toBeLessThanOrEqual(1);
    const cell = table.locator("td[data-label]").first();
    expect(await cell.evaluate((el) => getComputedStyle(el, "::before").content)).toBe('"Part"');
    await expect(table.getByRole("table")).toHaveCount(1);
    await expect(table.getByRole("columnheader")).toHaveCount(3);
  });
});

test.describe("prompt, command, code and template cards", () => {
  test("label each card by where it is used", async ({ page }) => {
    await page.goto("/lesson/1-2#section-4");
    await expect(page.locator(".gl-code--command .gl-code__label").first()).toHaveText("Run in your terminal");
    await page.goto("/lesson/1-1#section-6");
    await expect(page.locator(".gl-code--prompt .gl-code__label").first()).toHaveText("Paste into Claude Code");
    await page.goto("/lesson/1-3#section-2");
    await expect(page.locator(".gl-code--example .gl-code__label").first()).toHaveText(/(TSX|TypeScript|CSS|HTML) example/);
    await page.goto("/lesson/3-3#section-3");
    await expect(page.locator(".gl-code--template .gl-code__label").first()).toHaveText("Template to copy");
    await expect(page.locator(".gl-code--template mark.gl-ph").first()).toHaveText("[Business purpose and supported visitor needs.]");
  });

  test("Copy shows Copied only after the clipboard has the text, with the placeholder reminder", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/lesson/3-3#section-3");
    const card = page.locator(".gl-code--template").first();
    await card.getByRole("button", { name: "Copy template" }).click();
    await expect(card.getByRole("status")).toHaveText("Copied. Replace the highlighted parts before sending.");
    const clip = await page.evaluate(() => navigator.clipboard.readText());
    expect(clip).toContain("## Purpose and audience");
    expect(clip).toContain("[Business purpose and supported visitor needs.]");
  });

  test("a failed copy says to select the text instead, and never says Copied", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("denied")) }, configurable: true });
    });
    await page.goto("/lesson/1-1#section-6");
    const card = page.locator(".gl-code--prompt").first();
    await card.getByRole("button", { name: "Copy prompt" }).click();
    await expect(card.getByRole("status")).toHaveText("Copy didn't work. Select the prompt and copy it yourself.");
    await expect(page.getByText("Copied")).toHaveCount(0);
  });
});

test.describe("lessons that are not open", () => {
  test("a lesson on a locked day says when it opens and shows no task", async ({ page }) => {
    await page.goto("/lesson/4-2");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Planning Small Tasks with Clear Acceptance Criteria");
    await expect(page.getByText("This lesson is locked. Opens on 19 November, with the rest of Day 4.")).toBeVisible();
    await expect(page.getByRole("checkbox")).toHaveCount(0);
    await expect(page.getByText("Coming soon")).toHaveCount(0);
    await page.goto("/lesson/4-2/task");
    await expect(page.getByText("This lesson is locked.", { exact: false })).toBeVisible();
    await expect(page.getByRole("checkbox")).toHaveCount(0);
  });
});

test.describe("accessibility of the lesson screen", () => {
  for (const [route, width] of [["/lesson/1-1#section-1", 1280], ["/lesson/1-3#section-6", 1280], ["/lesson/3-3#section-3", 1280], ["/lesson/1-1#section-1", 1100], ["/lesson/1-2#section-4", 390], ["/lesson/1-1/task", 1280], ["/lesson/4-2", 1280]] as const) {
    test(`${route} at ${width}px has no axe violations`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      await expect(page.locator("main h1")).toBeVisible();
      expect(await axe(page)).toEqual([]);
    });
  }
});
