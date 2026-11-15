import { mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { WORK_PORT } from "../../playwright.config";

// The work server: development dates (Days 1 to 3 open), its own throwaway data, and the
// clearly fake TEST FIXTURE knowledge check for Lesson 1.1 only.
test.use({ baseURL: `http://localhost:${WORK_PORT}` });

const files = join(tmpdir(), "genie-e2e-files");
mkdirSync(files, { recursive: true });
writeFileSync(join(files, "proof.txt"), "Proof of work for the test.\n");
writeFileSync(join(files, "page.html"), "<p>not allowed</p>");

async function axe(page: Page) {
  const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  return r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
}

const items = (page: Page) => page.locator("fieldset.gl-evidence__item");
const saved = (page: Page) => page.waitForResponse((r) => r.request().method() === "POST" && r.ok());

/** Fills every evidence item with text and submits through the confirmation dialog. */
async function submitAll(page: Page, slug: string, prefix = "Evidence") {
  await page.goto(`/lesson/${slug}/submit`);
  const n = await items(page).count();
  for (let i = 0; i < n; i++) {
    const item = items(page).nth(i);
    await item.getByLabel("Paste text").check();
    await item.getByLabel("Your text").fill(`${prefix} for item ${i + 1}.`);
  }
  await page.locator("form.gl-evidence").getByRole("button", { name: "Submit evidence" }).click();
  await page.getByRole("dialog", { name: "Submit your evidence?" }).getByRole("button", { name: "Submit evidence" }).click();
  await page.waitForURL(new RegExp(`/work/${slug}\\?submitted=\\d+`));
  return n;
}

test.describe("Submit evidence", () => {
  test("lists every missing item, links to each field, and clears an error once it is fixed", async ({ page }) => {
    await page.goto("/lesson/2-1/submit");
    await expect(items(page)).toHaveCount(4);
    await page.locator("form.gl-evidence").getByRole("button", { name: "Submit evidence" }).click();
    const summary = page.locator(".gl-error-summary");
    await expect(summary).toBeFocused();
    await expect(summary.getByRole("link")).toHaveCount(4);
    expect(await axe(page)).toEqual([]);
    await summary.getByRole("link", { name: /Item 2 is empty/ }).click();
    await expect(page).toHaveURL(/#item-e2$/);
    await items(page).first().getByLabel("Your text").fill("Something");
    await expect(items(page).first().locator(".ob-error-text")).toHaveCount(0);
    await expect(items(page).nth(1).locator(".ob-error-text")).toHaveCount(1);
    await expect(page.getByRole("dialog")).toBeHidden();
  });

  test("a refused upload says why and offers Try again and Remove; an allowed file uploads", async ({ page }) => {
    await page.goto("/lesson/2-2/submit");
    const item = items(page).first();
    await item.getByLabel("Upload a file").check();
    await expect(item.getByText("PNG, JPG, WebP, GIF, PDF, TXT, Markdown, CSV or JSON, up to 10 MB.")).toBeVisible();
    await item.locator("input[type=file]").setInputFiles(join(files, "page.html"));
    const failed = item.locator(".gl-upload-failed");
    await expect(failed).toContainText("page.html is not a file type you can upload.");
    await expect(failed.getByRole("button", { name: "Try again" })).toBeVisible();
    await failed.getByRole("button", { name: "Remove" }).click();
    await expect(failed).toHaveCount(0);
    await item.locator("input[type=file]").setInputFiles(join(files, "proof.txt"));
    await expect(item.locator(".gl-filechip")).toContainText("proof.txt");
    await expect(item.locator(".gl-filechip")).toContainText("uploaded");
  });

  test("Save draft keeps entries across a reload and says so only after saving", async ({ page }) => {
    await page.goto("/lesson/2-3/submit");
    await items(page).first().getByLabel("Your text").fill("A draft answer.");
    await expect(page.getByText("You have unsaved changes.")).toBeVisible();
    const save = saved(page);
    await page.getByRole("button", { name: "Save draft" }).click();
    await save;
    await expect(page.getByRole("status").filter({ hasText: "Draft saved" })).toBeVisible();
    await page.reload();
    await expect(items(page).first().getByLabel("Your text")).toHaveValue("A draft answer.");
    await expect(page.getByText(/Draft last saved/)).toBeVisible();
  });

  test("a lesson that is not a review point shows Submitted and no review outcome", async ({ page }) => {
    await submitAll(page, "3-2");
    await expect(page.getByRole("status").filter({ hasText: "Submitted" })).toContainText("Your evidence is saved as version 1.");
    await expect(page.locator(".ob-badge--submitted")).toHaveText("Submitted");
    await expect(page.getByRole("heading", { name: "Review outcome" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Share with supervisor" })).toBeVisible();
  });
});

test.describe.serial("a review point from submission to acceptance (Lesson 2.4)", () => {
  let shareUrl = "";

  test("submit with a file: confirmation lists what is saved, then Awaiting review", async ({ page }) => {
    await page.goto("/lesson/2-4/submit");
    const n = await items(page).count();
    for (let i = 0; i < n; i++) await items(page).nth(i).getByLabel("Your text").fill(`First try, item ${i + 1}.`);
    await items(page).nth(1).getByLabel("Upload a file").check();
    await items(page).nth(1).locator("input[type=file]").setInputFiles(join(files, "proof.txt"));
    await expect(items(page).nth(1).locator(".gl-filechip")).toContainText("proof.txt");
    await page.locator("form.gl-evidence").getByRole("button", { name: "Submit evidence" }).click();
    const dialog = page.getByRole("dialog", { name: "Submit your evidence?" });
    await expect(dialog).toContainText("This saves the following as version 1.");
    await expect(dialog.getByRole("listitem")).toHaveCount(n);
    await expect(dialog).toContainText("Item 2: file: proof.txt");
    expect(await axe(page)).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await page.locator("form.gl-evidence").getByRole("button", { name: "Submit evidence" }).click();
    await dialog.getByRole("button", { name: "Submit evidence" }).click();
    await page.waitForURL(/\/work\/2-4\?submitted=1$/);
    await expect(page.locator(".gl-tag")).toHaveText("Awaiting review");
    await expect(page.getByText("No decision recorded yet. This submission is awaiting review.")).toBeVisible();
    const file = await page.request.get(await page.getByRole("link", { name: /proof\.txt/ }).getAttribute("href") ?? "");
    expect(file.status()).toBe(200);
    expect(file.headers()["x-content-type-options"]).toBe("nosniff");
    expect(await file.text()).toBe("Proof of work for the test.\n");
  });

  test("share a read-only link that opens with no navigation or editing", async ({ page, browser }) => {
    await page.goto("/work/2-4#share");
    await page.getByRole("button", { name: "Create share link" }).click();
    await expect(page.locator("#share-url")).toHaveValue(/\/share\/[A-Za-z0-9_-]{32}$/);
    shareUrl = await page.locator("#share-url").inputValue();
    const supervisor = await (await browser.newContext()).newPage();
    const res = await supervisor.goto(shareUrl);
    expect(res?.status()).toBe(200);
    expect(res?.headers()["x-robots-tag"]).toBe("noindex, nofollow");
    await expect(supervisor.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(supervisor.getByRole("heading", { level: 1 })).toHaveText("Submit the Website Brief and Structure for Review");
    await expect(supervisor.getByRole("navigation")).toHaveCount(0);
    await expect(supervisor.locator("form, input, textarea, button")).toHaveCount(0);
    await expect(supervisor.getByText("First try, item 1.")).toBeVisible();
    const fileHref = await supervisor.getByRole("link", { name: /proof\.txt/ }).getAttribute("href");
    expect((await supervisor.request.get(fileHref!)).status()).toBe(200);
    expect((await supervisor.request.get(`${shareUrl}/files/${"0".repeat(32)}`)).status()).toBe(404);
    expect(await axe(supervisor)).toEqual([]);
  });

  test("record Changes requested: it needs a reviewer name and shows first under Needs action", async ({ page }) => {
    await page.goto("/work/2-4#record");
    await expect(page.getByText("Record the decision your supervisor shared with you.")).toBeVisible();
    await page.getByLabel("Changes requested").check();
    await page.getByRole("button", { name: "Record review outcome" }).click();
    await expect(page.getByText("Add the reviewer's name.")).toBeVisible();
    await page.getByLabel(/Reviewer's name/).fill("Test Reviewer");
    await page.getByLabel(/supervisor's notes/).fill("Add the booking journey.\nThen resubmit.");
    await page.getByRole("button", { name: "Record review outcome" }).click();
    await expect(page.locator(".gl-review-record .gl-tag").first()).toHaveText("Changes requested");
    await expect(page.getByText("Recorded by you from an external review")).toBeVisible();
    await expect(page.getByText(/verified|approved by|authorised by/i)).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Resubmit" })).toBeVisible();
    await page.goto("/work");
    await expect(page.getByRole("navigation", { name: "Filter submissions" }).getByRole("link", { name: "Needs action (1)" })).toHaveAttribute("aria-current", "page");
    await expect(page.locator(".gl-sub")).toHaveCount(1);
    await expect(page.locator(".gl-sub")).toContainText("Lesson 2.4");
    await page.goto("/syllabus");
    await expect(page.locator("section.gl-daycard").filter({ has: page.locator("#day-2") }).locator(".gl-tag")).toHaveText("Changes requested");
  });

  test("Resubmit keeps version 1, returns to Awaiting review, and the share link shows the latest", async ({ page }) => {
    await page.goto("/work/2-4");
    await page.getByRole("link", { name: "Resubmit" }).click();
    await expect(page).toHaveURL(/\/lesson\/2-4\/submit$/);
    await expect(items(page).first().getByLabel("Your text")).toHaveValue("First try, item 1.");
    await items(page).first().getByLabel("Your text").fill("Second try, item 1.");
    await page.locator("form.gl-evidence").getByRole("button", { name: "Submit evidence" }).click();
    const dialog = page.getByRole("dialog", { name: "Submit your evidence?" });
    await expect(dialog).toContainText("version 2. Earlier versions are kept.");
    await dialog.getByRole("button", { name: "Submit evidence" }).click();
    await page.waitForURL(/\/work\/2-4\?submitted=2$/);
    await expect(page.locator(".gl-inline-status .gl-tag")).toHaveText("Awaiting review");
    await expect(page.getByRole("heading", { name: "Earlier versions" })).toBeVisible();
    await expect(page.locator("details.gl-version summary")).toHaveText(["Version 1"]);
    const supervisor = await (await page.context().browser()!.newContext()).newPage();
    await supervisor.goto(shareUrl);
    await expect(supervisor.getByText("Second try, item 1.")).toBeVisible();
    await expect(supervisor.locator("details.gl-version summary")).toHaveText(["Version 1"]);
  });

  test("record Accepted for version 2", async ({ page }) => {
    await page.goto("/work/2-4#record");
    await page.getByLabel("Accepted").check();
    await page.getByLabel(/Reviewer's name/).fill("Test Reviewer");
    await page.getByRole("button", { name: "Record review outcome" }).click();
    await expect(page.locator(".gl-inline-status .gl-tag")).toHaveText("Accepted");
    await page.goto("/work?filter=accepted");
    await expect(page.locator(".gl-sub")).toContainText("Lesson 2.4");
  });

  test("turning off the share link stops it opening", async ({ page }) => {
    await page.goto("/work/2-4#share");
    await page.getByRole("button", { name: "Turn off link" }).click();
    const dialog = page.getByRole("dialog", { name: "Turn off this share link?" });
    await dialog.getByRole("button", { name: "Turn off link" }).click();
    await expect(page.getByRole("button", { name: "Create share link" })).toBeVisible();
    const res = await page.request.get(shareUrl);
    expect(res.status()).toBe(404);
  });
});

test.describe("knowledge checks", () => {
  test("a lesson without a multiple-choice file shows its questions as reflection questions", async ({ page }) => {
    await page.goto("/lesson/1-2/check");
    await expect(page.getByText("Multiple-choice check not yet available")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reflection questions" })).toBeVisible();
    await expect(page.locator(".gl-prose ol > li")).toHaveCount(5);
    await expect(page.getByRole("radio")).toHaveCount(0);
  });

  test("one question at a time, marked at once, with retries, until all five are correct", async ({ page }) => {
    await page.goto("/lesson/1-1/check");
    await expect(page.getByText("Question 1 of 5")).toBeVisible();
    await page.getByRole("button", { name: "Check answer" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "Choose an answer" })).toBeVisible();
    await page.getByLabel("Option A").check();
    await page.getByRole("button", { name: "Check answer" }).click();
    await expect(page.getByText("Not quite. Try again.")).toBeVisible();
    await expect(page.getByText("TEST FIXTURE: option B is correct.")).toBeVisible();
    expect(await axe(page)).toEqual([]);
    const answers = ["Option B", "Option A", "Option C", "Option D", "Option A"];
    for (const [i, a] of answers.entries()) {
      await page.getByLabel(a).check();
      await page.getByRole("button", { name: "Check answer" }).click();
      await expect(page.getByText("Correct", { exact: true })).toBeVisible();
      await page.getByRole("button", { name: i === 4 ? "Finish" : "Next question" }).click();
    }
    await expect(page.getByText("Knowledge check passed")).toBeVisible();
    await expect(page.getByText("This does not mean your supervisor has accepted your work")).toBeVisible();
    await page.reload();
    await expect(page.getByText("Knowledge check passed")).toBeVisible();
  });
});

test.describe("completing a lesson", () => {
  test("Mark lesson complete waits for all four conditions, never for a supervisor", async ({ page }) => {
    await page.goto("/lesson/1-3/task");
    const button = page.getByRole("button", { name: "Mark lesson complete" });
    await expect(button).toBeDisabled();
    await expect(page.locator("#complete-why")).toHaveText("To finish, tick every task step, submit your evidence and tick every self-check item.");
    await expect(page.getByText("Knowledge check: Done. Not yet available for this lesson, so it is skipped.")).toBeVisible();
    expect(await axe(page)).toEqual([]);

    for (const box of await page.locator(".gl-task").getByRole("checkbox").all()) {
      const s = saved(page);
      await box.check();
      await s;
    }
    for (const box of await page.locator(".gl-selfcheck").getByRole("checkbox").all()) {
      const s = saved(page);
      await box.check();
      await s;
    }
    await expect(button).toBeDisabled();
    await expect(page.locator("#complete-why")).toHaveText("To finish, submit your evidence.");

    await submitAll(page, "1-3");
    await page.goto("/lesson/1-3/task");
    await expect(button).toBeEnabled();
    await button.click();
    await expect(page.getByText("You marked this lesson complete.")).toBeVisible();
    await expect(page.locator(".gl-complete .gl-badge")).toHaveText("Complete");
    await expect(page.getByRole("link", { name: "Start Lesson 1.4" })).toBeVisible();
    await page.goto("/day/1");
    await expect(page.locator(".gl-lessoncard").nth(2).locator(".gl-badge")).toHaveText("Complete");
    await page.goto("/syllabus");
    await expect(page.locator(".gl-stat .ob-stat__figure")).toHaveText("1");
  });

  test("Lesson 1.2's alternative criteria are a single required choice", async ({ page }) => {
    await page.goto("/lesson/1-2/task");
    const options = page.locator(".gl-selfcheck").getByRole("radio");
    await expect(options).toHaveCount(2);
    await expect(page.getByText("Self-check: Not yet. No statement chosen.")).toBeVisible();
    let s = saved(page);
    await options.first().check();
    await s;
    await expect(page.getByText("Self-check: Done. Statement chosen.")).toBeVisible();
    s = saved(page);
    await options.nth(1).check();
    await s;
    await page.reload();
    await expect(page.locator(".gl-selfcheck").getByRole("radio").nth(1)).toBeChecked();
    await expect(page.locator(".gl-selfcheck").getByRole("radio").first()).not.toBeChecked();
  });
});

test.describe("layout and accessibility", () => {
  for (const route of ["/lesson/2-1/submit", "/work", "/work/3-2", "/lesson/1-1/check", "/lesson/1-3/task"]) {
    for (const width of [320, 390, 720, 1280]) {
      test(`${route} at ${width}px: no sideways scrolling and no axe violations`, async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(route);
        await expect(page.locator("main h1")).toBeVisible();
        expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
        expect(await axe(page)).toEqual([]);
      });
    }
  }
});
