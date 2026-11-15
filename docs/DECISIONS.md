# Genie Lab: build decisions

Decisions that settle conflicts between the design system (`design-system/README.md`), the IA plan (`docs/IA_AND_USER_FLOWS.md`) and the build brief. The design system decides how things look and the IA plan decides what the platform does; this file records where one overrides the other.

## Settled in the build brief

| Topic | Decision |
|---|---|
| Active navigation item | `canvas` capsule, `ink` text, `aria-current="page"`, visible text label |
| Notifications | None in version 1 |
| Platform name | "Genie Lab" in plain type as the Home link; description "Clinic Genie Vibe Coding Intern Platform" on the Welcome tour and in page titles ("Syllabus · Genie Lab"). No logo |
| Top bar | Left: Genie Lab. Centre: Home, Syllabus, My work, Toolkit. Right: Help, Settings, initials avatar |
| Locked days | "Opens on [date]" |
| Missing lesson file | "Coming soon", never "Locked" |
| Recorded review decisions | "Recorded by you from an external review" |
| Settings | Name, text size, reduced motion. No theme switch: the design system defines a light theme only |

## Settled on 15 November 2026 (Phase 0)

| # | Topic | Decision |
|---|---|---|
| 1 | Navigation on narrow screens | Follow the design system: Home, Syllabus, My work and Toolkit stay visible as text at every width. Below 1024 px they wrap onto their own full-width row (`ob-topbar--compact`). Below 768 px Settings and the avatar move into an accessible account menu; Help stays in the bar at every width because it fits (changed in Phase 1). No hamburger menu for the four items |
| 2 | Lesson screen bar | Use the focused lesson bar from the brief and IA plan (back link to the day, breadcrumb, "Section 3 of 9" with progress, Outline, Help, Home) instead of the four-item top bar |
| 3 | Badge treatments (revised in Phase 3, option b) | The design system has no radius below 14px, so a tag cannot look rectangular at badge height. The three kinds differ by fill, outline and icon instead. Lesson progress: filled pill with a round icon and a word, no outline. Review decision: outlined tag (`border-control` edge), "Not submitted" on `surface`, an icon and a word. Day access: icon and word with no container. Colours follow the design system's status vocabulary |
| 4 | Lesson widths at 1280 px and over | Outline rail 240 px, Your task panel 280 px, reading column takes the remaining width up to `width-prose` |
| 5 | Breakpoints | Layout changes at 1280 and 1024 px (IA plan). Frame, type scale and gutters change at 1200 and 768 px (design system). At 720 px: one column, `-sm` type styles, `gutter-mobile` |
| 6 | Submission badge | Evidence from lessons that are not review points shows "Submitted" (`lavender`) |
| 7 | Welcome tour | Four steps following the IA plan ("Step 1 of 4"), with Skip tour |
| 8 | Sign in and Sign out | No sign-in page and no Sign out in version 1 |
| 9 | Design system source | `design-system/` holds a read-only snapshot of the Intern Onboarding design system artifact (version `1794732072-685e`): `README.md` plus `tokens.json` and `bundle.css` copied byte for byte |
