# Lesson 1.3: Understanding Project Files, TypeScript and TSX

### Learning objective

By the end of this lesson, you should be able to:

- Recognise the main kinds of file in the supplied starter project.
- Explain the difference between `.ts` and `.tsx` files.
- Read a small typed component and identify the inputs it receives.
- Find the project’s commands without inventing them.
- Tell source files, configuration and generated files apart.

**Prerequisites:** Complete Lesson 1.2.

**Required materials:** The supplied TypeScript and TSX starter project, open in the VS Code workspace you set up in Lesson 1.2, and Claude access for inspection only.

## 1. Inspect the actual starter

A **starter project** is a ready-made set of files that gives you a working website to build on.

Projects do not all use the same folders or the same **framework**, the toolkit that decides how files become pages. A layout you saw in another tutorial may not match this project. Find out which files exist and what they do before assuming anything.

| File category | Typical purpose |
|---|---|
| **Source** | Pages, components and the code that makes the website work |
| **Styles** | Rules for how things look |
| **Assets** | Images, fonts and other media |
| **Configuration** | Settings for the framework and other tools |
| **Instructions** | Requirements and working rules, often in Markdown files |
| **Generated output** | Files produced automatically by builds or tools |

Generated output is recreated every time the tool runs, so editing it by hand is pointless. The next build overwrites your change.

Use VS Code’s Explorer, the file tree on the left, to see the project’s actual folders and files. Selecting a file opens it in the editor.

Common file names you see in examples are only examples. They do not prove your starter contains those files.

## 2. Understand TypeScript

**JavaScript** is the programming language browsers run. **TypeScript** is JavaScript with an added type system. A **type** describes the shape of a value the code expects, so the TypeScript tools can warn you when something does not fit.

```ts
type Treatment = {
  title: string;
  href: string;
};

const treatment: Treatment = {
  title: "Example treatment",
  href: "/example-treatment",
};
```

Here, the `Treatment` type says both `title` and `href` must be **strings**, meaning text. If someone wrote a number for `title`, the TypeScript tools would report an error.

The wording and the route are illustrative. They are not approved Saffron Wellness Clinic content.

A **type check** finds some mistakes in the code. It cannot prove that a page address exists, that wording has been approved or that information arriving from outside the website is valid. Lesson 7.2 returns to this last point.

## 3. Understand TSX

**JSX** is a way of writing interface elements, such as links and headings, inside code. It looks similar to HTML. **TSX** is TypeScript with JSX.

```tsx
type TreatmentLinkProps = {
  title: string;
  href: string;
};

export function TreatmentLink({ title, href }: TreatmentLinkProps) {
  return <a href={href}>{title}</a>;
}
```

This is a **component**: a reusable piece of the interface. It receives two inputs, `title` and `href`. Inputs to a component are called **props**, short for properties. The component uses them to produce a link.

In a TypeScript project, a file containing JSX uses the `.tsx` extension. Files with only TypeScript, and no JSX, usually use `.ts`.

The project’s configuration must also support JSX. Do not change that configuration during this lesson.

## 4. Recognise imports and shared components

Code is split across files called **modules**. A module can **export** a value or component so others can use it. Another module then **imports** it:

```tsx
import { TreatmentLink } from "./TreatmentLink";
```

The text in quotation marks is the path to the file being imported. Use the paths your actual project uses.

When several pages import the same shared component, changing that component changes every one of those pages. Before asking for a change, find out:

- Where the component is defined.
- Where else it is used.

In VS Code, right-click the component’s name and choose **Find All References** to list where it is used. You can also search the whole project with **Edit > Find in Files**.

Do not copy a shared component into a new file just because you could not find the original. Two copies drift apart, and fixes made to one never reach the other.

## 5. Find the project’s commands and packages

Most TypeScript projects have a file called `package.json` in their main folder. If your starter has one, inspect it.

| Information | What to find out |
|---|---|
| **Scripts** | The real commands for running the website and checking it |
| **Dependencies** | The packages of other people’s code the project uses |
| **Package manager** and **lock file** | Which tool installs packages (such as npm, pnpm or Yarn), and the file that records exact package versions |
| **Runtime documentation** | Which versions of tools such as Node.js are required |

A script is a named command stored in `package.json`. You run it through the package manager, for example `npm run` followed by the script name.

Do not assume `npm run dev`, or any other command you have seen elsewhere, exists in this project. Record the actual script names and the package manager the project uses.

Do not edit the lock file or install packages during this lesson.

## 6. Ask Claude to explain selected files

```text
Inspect the supplied TypeScript/TSX starter without editing it.

Identify:
1. Its framework and evidence for that conclusion.
2. Relevant source, style, asset and configuration locations.
3. One .ts file and one .tsx file, if present, and their roles.
4. One existing component's props and usages.
5. Actual documented development and verification commands.
6. Generated files that should not be edited directly.

Explain unfamiliar terms for a beginner. Do not invent absent files.
Do not install dependencies, start services, commit, push or deploy.
```

Check Claude’s answer against the files yourself. If it names a file, open it in the VS Code editor.

## 7. Practical exercise

**Task: Create a file map of the starter project.**

1. Record the relevant file categories and their actual paths.
2. Explain one existing type and one TSX component, including its props.
3. Identify one import, and say which file it comes from.
4. Record the actual scripts and what each one does.
5. List any missing setup information.

Do not change the starter project. At the end, confirm that nothing changed: the Source Control view should list no changes, and `git status --short` in the integrated terminal should print nothing.

## 8. Expected submission

Submit:

- Your file map.
- Your explanation of the component.
- The list of scripts.
- Confirmation of whether any files changed.

## 9. Completion criteria

The lesson is complete when:

- Your file map reflects the actual starter project.
- You can explain the difference between `.ts` and `.tsx` files.
- You can find the project’s commands without guessing them.

## 10. Knowledge check

1. How does a `.tsx` file differ from a `.ts` file?
2. What are component props?
3. Why can changing one component affect several pages?
4. Does a `string` type prove that a web address is correct?
5. Where should you look to find the project’s available scripts?

## 11. Official reference

- [TypeScript JSX documentation](https://www.typescriptlang.org/docs/handbook/jsx.html), checked 13 November 2026 by the uploading author for TSX and JSX configuration basics.
