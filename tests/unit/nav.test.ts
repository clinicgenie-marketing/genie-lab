import { describe, expect, it } from "vitest";
import { navCurrent } from "@/lib/nav";
import { initials } from "@/lib/platform/auth";

describe("main navigation state", () => {
  it("marks the page itself as the current page", () => {
    expect(navCurrent("/home", "/home", "/home")).toBe("page");
    expect(navCurrent("/toolkit", "/toolkit/prompts", "/toolkit/prompts")).toBe("page");
  });
  it("marks the owning section on pages inside it", () => {
    expect(navCurrent("/syllabus", "/syllabus", "/day/3")).toBe("true");
    expect(navCurrent("/work", "/work", "/work/2-4")).toBe("true");
    expect(navCurrent("/toolkit", "/toolkit/prompts", "/toolkit/glossary")).toBe("true");
  });
  it("marks nothing on pages outside the four sections", () => {
    for (const p of ["/settings", "/help", "/welcome"]) {
      for (const s of ["/home", "/syllabus", "/work", "/toolkit"]) expect(navCurrent(s, s, p)).toBe(false);
    }
  });
});

describe("initials", () => {
  it("uses the first and last names", () => {
    expect(initials("Ada Lovelace")).toBe("AL");
    expect(initials("  ada   king lovelace ")).toBe("AL");
    expect(initials("Ada")).toBe("A");
  });
  it("returns null when no name is set", () => {
    expect(initials(null)).toBeNull();
    expect(initials("   ")).toBeNull();
  });
});
