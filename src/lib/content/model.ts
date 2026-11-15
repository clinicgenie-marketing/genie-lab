/**
 * The typed content model the platform renders. Built at build time from the locked
 * package in content/ by scripts/build-content.ts, using parse.ts.
 *
 * Programme -> Day -> Lesson -> Section -> Block.
 */

// ---------- Inline content ----------

export type Inline =
  | { type: "text"; value: string }
  | { type: "strong"; children: Inline[] }
  | { type: "emphasis"; children: Inline[] }
  | { type: "delete"; children: Inline[] }
  | { type: "inlineCode"; value: string }
  | { type: "link"; url: string; children: Inline[] }
  | { type: "break" };

// ---------- Blocks ----------

/** How a fenced block is presented, from its language tag. */
export type CodeKind = "prompt" | "command" | "example" | "template" | "plain";

/** Text of a prompt, command or template, split so placeholders such as [Insert task.] can be highlighted. */
export type Segment = { text: string } | { placeholder: string };

export type CodeBlock = {
  type: "code";
  kind: CodeKind;
  /** The fence's language tag, or null when untagged. */
  lang: string | null;
  value: string;
  /** Present for prompt, command and template blocks. */
  segments?: Segment[];
  /** True when segments contain at least one placeholder. */
  hasPlaceholders?: boolean;
};

export type ListItem = { checked: boolean | null; children: Block[] };

export type TableCell = Inline[];

export type Block =
  | { type: "paragraph"; children: Inline[] }
  | { type: "heading"; depth: 3 | 4 | 5 | 6; children: Inline[] }
  | { type: "list"; ordered: boolean; start: number | null; items: ListItem[] }
  | { type: "blockquote"; children: Block[] }
  | { type: "table"; align: ("left" | "right" | "center" | null)[]; header: TableCell[]; rows: TableCell[][] }
  | { type: "thematicBreak" }
  | CodeBlock;

// ---------- Lesson ----------

export type Section = {
  /** The number in the lesson file's "## N. Heading". Also the URL anchor: #section-N. */
  number: number;
  title: string;
  blocks: Block[];
};

/** A checkable item: a task step, an evidence item or a completion criterion. */
export type CheckItem = {
  /** Stable within the lesson: s1, s2 (steps), e1 (evidence), c1 (criteria). */
  id: string;
  children: Block[];
};

export type TaskPart = {
  number: number;
  /** The "**Task: ...**" line, as authored. */
  heading: Inline[] | null;
  /** Content before the steps, such as "Use this request:" and a quoted request. */
  before: Block[];
  steps: CheckItem[];
  /** Notes after the steps, such as what to do when something is blocked. */
  after: Block[];
};

export type SubmissionPart = { number: number; intro: Block[]; items: CheckItem[]; after: Block[] };

export type CriteriaPart = {
  number: number;
  intro: Block[];
  /**
   * "all": every criterion must be ticked. "one": the intro says the lesson is complete
   * when "either" item holds (Lesson 1.2), so the items are alternatives.
   */
  mode: "all" | "one";
  /** True when the file writes the criteria as a "- [ ]" checklist. */
  checklist: boolean;
  items: CheckItem[];
  after: Block[];
};

export type KnowledgeCheckPart = {
  number: number;
  intro: Block[];
  /** The lesson's own questions, shown as reflection questions until multiple-choice checks exist. */
  questions: { id: string; children: Block[] }[];
};

export type CodeCounts = Record<CodeKind, number>;

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  day: number;
  order: number;
  estimatedMinutes: number;
  objective: { intro: Inline[]; items: Inline[][] };
  prerequisites: Inline[];
  requiredMaterials: Inline[];
  yourOutput: Inline[] | null;
  /** Lessons named in the prerequisites, such as "Complete Lesson 4.1". */
  prerequisiteLessons: string[];
  /** Teaching sections only, in file order. */
  sections: Section[];
  task: TaskPart;
  submission: SubmissionPart;
  criteria: CriteriaPart;
  knowledgeCheck: KnowledgeCheckPart;
  furtherReading: Section | null;
  codeCounts: CodeCounts;
};

// ---------- Programme ----------

export type LessonSummary = {
  id: string;
  slug: string;
  day: number;
  order: number;
  title: string;
  estimatedMinutes: number;
  /** False when the lesson's file is missing: shown as "Coming soon", never as "Locked". */
  available: boolean;
  objectiveItems: Inline[][];
  requiredMaterials: Inline[];
};

export type DaySummary = {
  n: number;
  title: string;
  estimatedMinutes: number;
  lessons: LessonSummary[];
};

export type ContentModel = {
  platform: { name: string; description: string };
  days: DaySummary[];
  /** Full lessons for every available lesson, keyed by ID. */
  lessons: Record<string, Lesson>;
};
