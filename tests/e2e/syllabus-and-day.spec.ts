import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { UNSCHEDULED_PORT } from "../../playwright.config";

// The main server runs with development dates: start Monday 16 November 2026, today
// Wednesday 18 November 2026, so Days 1 to 3 are open and Day 3 is today.

const dayCard = (page: import("@playwright/test").Page, n: number) => page.locator("section.gl-daycard").filter({ has: page.locator(`#day-${n}`) });

test.describe("Syllabus", () => {
  test("shows the programme from content, with real progress counts", async ({ page }) => {
    await page.goto("/syllabus");
    await expect(page.getByText("10 days, 40 lessons.")).toBeVisible();
    const stat = page.locator(".gl-stat");
    await expect(stat.locator(".ob-stat__figure")).toHaveText("0");
    await expect(stat).toContainText("of 40 lessons in the programme");
    await expect(page.locator("section.gl-daycard")).toHaveCount(10);
  });

  test("opens days by the calendar and says when the rest open", async ({ page }) => {
    await page.goto("/syllabus");
    for (const n of [1, 2, 3]) await expect(dayCard(page, n).locator(".gl-chip")).toHaveText("Open");
    await expect(dayCard(page, 4).locator(".gl-chip")).toHaveText("Locked");
    await expect(dayCard(page, 4)).toContainText("Opens on 19 November");
    await expect(dayCard(page, 6)).toContainText("Opens on 23 November");
    await expect(dayCard(page, 10)).toContainText("Opens on 27 November");
    await expect(page.getByText(/Opens when/)).toHaveCount(0);
  });

  test("expands only the current day and gives it the one primary action", async ({ page }) => {
    await page.goto("/syllabus");
    await expect(dayCard(page, 3)).toContainText("Day 3 of 10 · Today");
    await expect(dayCard(page, 3).locator("details")).toHaveAttribute("open", "");
    for (const n of [1, 2, 4, 10]) await expect(dayCard(page, n).locator("details")).not.toHaveAttribute("open", "");
    await expect(page.locator("main .ob-btn--primary")).toHaveCount(1);
    await expect(page.locator("main .ob-btn--primary")).toHaveText("Open Day 3");
  });

  test("lists lessons with their status and estimated time", async ({ page }) => {
    await page.goto("/syllabus");
    const rows = dayCard(page, 3).locator(".ob-row");
    await expect(rows).toHaveCount(4);
    await expect(rows.first()).toContainText("Following the Approved Design, Style Guide and Content");
    await expect(rows.first()).toContainText("about 90 minutes");
    await expect(rows.first().locator(".gl-badge")).toHaveText("Not started");
    await expect(rows.first().getByRole("link", { name: "Start lesson: Lesson 3.1" })).toHaveAttribute("href", "/lesson/3-1");
    await dayCard(page, 6).locator("summary").click();
    const locked = dayCard(page, 6).locator(".ob-row");
    await expect(locked.locator(".gl-badge")).toHaveText(["Locked", "Locked", "Locked", "Locked"]);
    await expect(locked.getByRole("link")).toHaveCount(0);
  });

  test("shows each proposed review point with its decision as a tag", async ({ page }) => {
    await page.goto("/syllabus");
    await expect(page.getByText(/^Review point: Lesson/)).toHaveCount(11);
    await expect(dayCard(page, 1)).not.toContainText("Review point");
    await expect(dayCard(page, 10).getByText(/^Review point: Lesson/)).toHaveText(["Review point: Lesson 10.1", "Review point: Lesson 10.3", "Review point: Lesson 10.4"]);
    await expect(dayCard(page, 2).locator(".gl-tag")).toHaveText("Not submitted");
  });

  test("shows Unit 7's platform title", async ({ page }) => {
    await page.goto("/syllabus");
    await expect(dayCard(page, 7).locator("h2")).toHaveText("Forms and Interactive Features");
    await expect(page.getByText("Content, SEO and Accessibility")).toHaveCount(0);
  });
});

test.describe("Day page", () => {
  test("an open day: goal, materials, lessons in order, review point, one primary action", async ({ page }) => {
    await page.goto("/day/3");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Design and Markdown Instructions");
    await expect(page.locator(".gl-chip")).toHaveText("Open");
    await expect(page.getByText("Goal: Not yet supplied")).toBeVisible();
    const primary = page.locator("main .ob-btn--primary");
    await expect(primary).toHaveCount(1);
    await expect(primary).toHaveText("Start Lesson 3.1");
    await expect(primary).toHaveAttribute("href", "/lesson/3-1");

    await expect(page.getByRole("heading", { name: "What you need today" })).toBeVisible();
    await expect(page.locator(".gl-needs dt")).toHaveText([
      "Lesson 3.1: Following the Approved Design, Style Guide and Content",
      "Lesson 3.2: Understanding the Project Markdown Files and Instruction Hierarchy",
      "Lesson 3.3: Preparing the PRD, Architecture, Rules and Task Plan",
      "Lesson 3.4: Review the Instructions Before Building",
    ]);
    await expect(page.locator(".gl-needs dd").first()).toHaveText("The supplied design frames, style guide, approved content, IA and any interaction specifications.");

    await expect(page.getByText("Suggested order · about 6 hours in total · 0 of 4 complete")).toBeVisible();
    const cards = page.locator(".gl-lessoncard");
    await expect(cards).toHaveCount(4);
    await expect(cards.locator("h3")).toHaveText([/^Lesson 3\.1/, /^Lesson 3\.2/, /^Lesson 3\.3/, /^Lesson 3\.4/]);
    await cards.first().getByText("What you'll be able to do").click();
    await expect(cards.first().locator(".gl-bullets li").first()).toBeVisible();

    const review = page.locator(".gl-review");
    await expect(review).toHaveCount(1);
    await expect(review).toContainText("Lesson 3.4: Review the Instructions Before Building");
    await expect(review.locator(".gl-tag")).toHaveText("Not submitted");
    await expect(review).toContainText("Your supervisor: Accepts the instruction baseline");
  });

  test("a locked day says when it opens and offers no lesson actions", async ({ page }) => {
    await page.goto("/day/6");
    await expect(page.locator(".gl-chip")).toHaveText("Locked");
    await expect(page.getByText("Opens on 23 November")).toHaveCount(1);
    await expect(page.locator("main .ob-btn--primary")).toHaveCount(0);
    await expect(page.locator(".gl-lessoncard .gl-badge")).toHaveText(["Locked", "Locked", "Locked", "Locked"]);
    await expect(page.locator(".gl-lessoncard").getByRole("link")).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "What you need", exact: true })).toBeVisible();
  });

  test("Day 1 has no review point but still asks for evidence", async ({ page }) => {
    await page.goto("/day/1");
    await expect(page.getByText("No review point today. You still submit evidence for each lesson.")).toBeVisible();
  });

  test("Day 10 lists its three review points", async ({ page }) => {
    await page.goto("/day/10");
    await expect(page.locator(".gl-review")).toHaveCount(3);
  });

  test("every badge pairs an icon with a word", async ({ page }) => {
    for (const route of ["/syllabus", "/day/3", "/day/6"]) {
      await page.goto(route);
      const badges = page.locator(".gl-badge");
      const n = await badges.count();
      expect(n).toBeGreaterThan(0);
      for (let i = 0; i < n; i++) {
        await expect(badges.nth(i).locator("svg")).toHaveCount(1);
        // textContent, not innerText: badges inside collapsed day lists are hidden but still need their word.
        expect((await badges.nth(i).textContent())?.trim().length).toBeGreaterThan(0);
      }
    }
  });
});

test.describe("before the start date is set", () => {
  const base = `http://localhost:${UNSCHEDULED_PORT}`;

  test("the Syllabus explains that opening dates are not set and locks every day", async ({ page }) => {
    await page.goto(`${base}/syllabus`);
    await expect(page.getByText("Opening dates are not set yet")).toBeVisible();
    await expect(page.locator(".gl-chip")).toHaveText(Array(10).fill("Locked"));
    await expect(page.getByText("Opening date not set yet")).toHaveCount(10);
    await expect(page.getByText(/Opens on/)).toHaveCount(0);
    expect((await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze()).violations).toEqual([]);
  });

  test("a Day page offers no lesson to start", async ({ page }) => {
    await page.goto(`${base}/day/1`);
    await expect(page.getByText("This day opens once your cohort's start date is confirmed. Earlier days stay open.")).toBeVisible();
    await expect(page.locator("main .ob-btn--primary")).toHaveCount(0);
  });
});
