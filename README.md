# Genie Lab

Clinic Genie Vibe Coding Intern Platform: a learning platform where design and vibe coding interns follow a fixed 10-day curriculum of 40 lessons, reading on the platform and doing the work in their own terminal with Claude Code.

## Where things are

| Path | What it is | Who changes it |
|---|---|---|
| `content/` | The locked lesson package: `curriculum.json`, `lessons/*.md` and its own `README.md` | Curriculum owner only. The platform renders it and never edits it |
| `design-system/` | Read-only snapshot of the design system (`README.md`, `tokens.json`, `bundle.css`) | Change the source artifact, then take a new snapshot |
| `docs/IA_AND_USER_FLOWS.md` | What the platform does: pages, flows, statuses, data | |
| `docs/DECISIONS.md` | Decisions that settle conflicts between the sources | |
| `config/` | Cohort calendar and other platform settings | |
| `src/` | The Next.js app | |
| `scripts/build-design-system.ts` | Turns `design-system/` into `src/styles/generated/` (runs before `dev` and `build`) | |

## Running it

Needs Node 22.18 or later.

```bash
npm install
```

```bash
npm run dev
```

Local development identity: set `GENIE_LAB_DEV=1`, and optionally `GENIE_LAB_DEV_NAME`, to sign in as a single development intern. Without a name, the platform shows that no name is set; it never invents one.

## Checks

```bash
npm run typecheck
```

```bash
npm test
```

Browser tests run against a production build:

```bash
npm run build && npm run e2e -- --trace off
```

`.npmrc` sets `legacy-peer-deps`: npm 10's resolver crashes on Vitest's optional `@vitest/browser-playwright` peer. Every peer the app needs is declared directly in `package.json`.
