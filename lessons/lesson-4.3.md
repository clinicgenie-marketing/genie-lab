# Lesson 4.3: Building Shared Styles, Navigation and Reusable Components

### Learning objective

By the end of this lesson, you should be able to:

- Implement a bounded task from an approved plan.
- Apply shared styles consistently.
- Recognise when part of the interface should become a reusable component.
- Build navigation using approved labels and destinations.
- Review the code changes and check the resulting behaviour.

**Prerequisites:** Complete Lesson 4.2 and have a task that is ready for implementation.

**Required materials:** The TypeScript and TSX starter project, the approved style guide, navigation specification, component references and your reviewed task plan.

## 1. Build the shared foundation

Shared styles and components keep a website consistent as more pages are added.

| Foundation | Examples | Why it matters |
|---|---|---|
| **Shared styles** | Colours, typography, spacing and content widths | Each visual rule is defined once and applied everywhere |
| **Navigation** | Header links, mobile menu and footer links | Connects pages and visitor journeys |
| **Reusable components** | Buttons, treatment cards and section headings | One piece of code serves many places, so a fix in one place fixes all of them |

A **component** is a reusable piece of the interface, written in TSX, such as a button or a card.

Build the foundation through manageable tasks. This lesson covers all three areas, but each request to Claude should still have a defined scope.

## 2. Follow the existing project approach

Before editing, use your inspection findings to confirm:

- Where shared styles are defined.
- How components receive their content.
- How the framework handles links between pages.
- Which components already exist.
- Which checks the project provides.

Then ask Claude to extend the approach the project already uses.

For example, if the project defines shared colours as CSS variables, new styles should reuse them. If the project already has a button component, check it before anyone creates another.

**Consistency comes from following the approved system, not from making elements look roughly similar.**

## 3. Apply shared style values

Shared values give each approved design decision a single implementation.

In CSS, a **custom property**, often called a CSS variable, stores a value under a name so it can be reused. Custom property names start with two hyphens:

```css
:root {
  --colour-brand: #354536;
  --colour-surface: #f5f2e9;
  --radius-card: 16px;
}
```

A component can then use those values with `var()`:

```css
.treatment-card {
  background-color: var(--colour-surface);
  border-radius: var(--radius-card);
}
```

These values are illustrative. Use the approved values and naming conventions in the actual project. The CSS property name `background-color` uses American spelling because that is how CSS is written. Your own variable names can follow the project’s convention.

### Check the effect of shared changes

Changing a shared value can change many components at once.

Before changing one, find out:

1. Where it is used.
2. Whether the requested change should apply everywhere.
3. Which pages will need checking afterwards.

If only one section needs a different background, changing the global surface colour is probably the wrong approach, because it would change every other section too.

## 4. Build reusable components around a real need

A reusable component combines a consistent structure with inputs that change each time it is used. In React and TSX, these inputs are called **props**, short for properties. TypeScript describes which props a component accepts.

### Illustrative example

```tsx
type TreatmentCardProps = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  headingLevel?: "h2" | "h3";
};

export function TreatmentCard({
  title,
  description,
  href,
  linkLabel,
  headingLevel = "h3",
}: TreatmentCardProps) {
  const Heading = headingLevel;

  return (
    <article className="treatment-card">
      <Heading>{title}</Heading>
      <p>{description}</p>
      <a href={href}>{linkLabel}</a>
    </article>
  );
}
```

Different treatment cards can reuse the same structure:

```tsx
<TreatmentCard
  title="[Approved treatment name]"
  description="[Approved treatment summary]"
  href="[Approved treatment route]"
  linkLabel="[Approved link label]"
/>
```

All the values in square brackets are placeholders. Use approved content and confirmed destinations from the actual project.

This example makes two choices you should understand:

| Choice | Why |
|---|---|
| The heading level is a prop | The correct level depends on where the card appears. On a page where cards sit under a section heading at level 2, card titles are usually level 3. Lesson 5.1 asks you to check heading levels across the assembled page |
| The link text is a prop from approved content | People using screen readers often list all the links on a page. If every card says “View treatment”, that list is hard to use. Link text that includes the treatment name, or a label that is otherwise clear, helps. If the approved design uses the same label on every card, record it for the accessibility review in Lesson 8.3 rather than changing the wording yourself |

The example uses a plain `<a>` element. Many frameworks provide their own link component for moving between pages. Use the project’s established link component where one exists.

### Avoid unnecessary flexibility

A component does not need options for every possible future design.

Start with the approved uses. Add a **variant**, which is an alternative version of the component, only when an approved requirement needs it. If all approved treatment cards share one layout, do not create five unused layout variants.

## 5. Build navigation from the approved structure

Navigation combines content, destinations, presentation and behaviour. Check all four.

| Area | What to implement |
|---|---|
| **Content** | The exact approved labels, in the approved order |
| **Destinations** | The correct pages, page sections or external addresses |
| **Presentation** | The approved desktop and mobile layouts |
| **Behaviour** | Menu controls, keyboard use and the specified focus handling |

Use the framework’s established link component where it applies.

Do not make unfinished navigation look complete by pointing every link at `#` or sending unrelated links to the homepage. Visitors would reach the wrong place, and reviewers would think the links work.

If a destination is not ready, use the interim treatment agreed for the task and record the limitation.

### Match the element to its purpose

- Use a **link** to take the visitor to another page or place.
- Use a **button** to perform an action on the current page, such as opening a menu.
- Keep labels meaningful.
- Follow the approved interaction specification.

Browsers and assistive technology treat links and buttons differently, so choosing the right one matters even when they look the same.

A menu that looks right still needs its behaviour checked.

## 6. Direct Claude to implement the selected task

Use the reviewed task and plan from Lesson 4.2.

### Implementation prompt

```text
Implement the selected task according to the reviewed plan
and approved project references.

Before editing:
- Confirm the project location and current Git status.
- Check for changes made since the inspection.
- Confirm that the task's prerequisites are satisfied.

During implementation:
- Follow the existing TypeScript, TSX and styling conventions.
- Reuse existing components and shared values where appropriate.
- Preserve approved wording, labels, destinations and layouts.
- Keep changes within the task and necessary supporting files.
- Pause if an unresolved decision materially affects the result.

After implementation:
- Run the applicable documented project checks.
- Review the changed files for unrelated edits.
- Report the changes, checks performed, results and limitations.
- Identify any browser checks still requiring my review.

Do not commit, push or deploy as part of this task.

Task and reviewed plan:
[Paste or reference the task.]

Approved references:
[Provide the exact references.]
```

If the project’s rules require an extra decision before a particular action, follow them.

## 7. Review the changes yourself

Claude’s completion report tells you what Claude believes it did. Check the actual changes yourself.

Run these at the terminal command prompt, in the project folder.

See which files changed:

```bash
git status --short
```

See the changes inside files Git already tracks:

```bash
git diff
```

`git diff` does not show the contents of new, untracked files. Open those files separately to read them.

If changes have been **staged**, which means selected for the next commit, view them with:

```bash
git diff --staged
```

You may also see this written as `git diff --cached`. Both do the same thing.

Ask Claude to explain any change you do not understand, in plain language.

Look for:

- Files unrelated to the task.
- Unexpected configuration or package changes.
- Approved wording that has been rewritten.
- Duplicated components.
- Temporary placeholders.
- Changes to shared styles that affect other pages.

## 8. Check the result in the browser

Start the website using its documented command, then check the result against each acceptance criterion.

| Area | Example check |
|---|---|
| Shared styles | Typography, colours and spacing match the approved values |
| Component reuse | Several instances show their own supplied content correctly |
| Content variation | Longer approved text fits without being cut off |
| Navigation | Labels and destinations match the IA |
| Interaction | Menu controls do what the specification says |
| Keyboard use | Links and controls can be reached and operated with the keyboard |
| Responsive layout | Components remain usable at the agreed widths |
| Existing behaviour | Desktop layouts and other shared usages still work |

Run the applicable project checks as well.

If you did not perform a check, record it as **Not checked**, with the reason. Never count it as passed.

## 9. Common mistakes

| Mistake | Correction |
|---|---|
| Creating a new button for every section | Check for and reuse the shared button |
| Hard-coding slightly different colours in several places | Use the project’s approved shared values |
| Changing a global style to fix one local issue | Limit the change to the intended scope |
| Adding many unused component variants | Build only the variants the approved designs need |
| Treating a menu that looks right as complete | Test the destinations and the interaction |
| Accepting Claude’s report without checking | Review the files and the browser result yourself |

## 10. Practical exercise

**Task: Implement and verify one shared component.**

Use your implementation-ready task from Lesson 4.2. For the treatment card task:

1. Confirm the approved references and current project state.
2. Ask Claude to implement the reviewed plan.
3. Read the resulting TSX and styles.
4. Display at least two instances using supplied content.
5. Check content, links, heading levels, appearance and narrow-screen behaviour.
6. Run the relevant project checks.
7. Record any remaining issues.

Then inspect the existing navigation and record whether it already meets its approved requirements. Create a separate follow-up task for any gaps, rather than expanding the component task.

## 11. Expected submission

Submit:

- The task ID and implementation prompt.
- A summary of the files changed and why.
- Screenshots at the agreed review widths.
- Each acceptance criterion marked **Passed**, **Failed** or **Not checked**.
- Project check results.
- Remaining issues and proposed follow-up tasks.

## 12. Completion criteria

The lesson is complete when:

- The component follows the approved task.
- The project’s existing conventions are used consistently.
- Approved content and destinations are preserved.
- Reuse works across the required instances.
- Relevant checks have been performed and recorded.
- Unrelated changes and unresolved issues are identified.
- The work is ready for the design comparison in Lesson 4.4.

## 13. Knowledge check

1. Why should a change to a shared style be checked everywhere it is used?
2. When should a component gain a new variant?
3. Why are placeholder link destinations such as `#` not good enough?
4. Does `git diff` show the contents of new, untracked files?
5. What should you record when you have not performed a check?
