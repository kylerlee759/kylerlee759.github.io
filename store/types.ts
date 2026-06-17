export type Capability =
  | "Production SaaS"
  | "Automation & Integration"
  | "Architecture & Systems"
  | "Specialized & R&D";

export type CaseStudyBody = {
  problem: string;
  constraint: string;
  built: string;
  hardPart: string;
  outcome: string;
};

export type Project = {
  id: string;
  name: string;
  tier: 1 | 2 | 3;
  capability: Capability;
  tags: string[];
  hook: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  caseStudy?: CaseStudyBody;
  /** Display order within the featured (tier-1) section. Lower = earlier. */
  featuredOrder?: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type MastheadStrip = {
  left: string;
  right: string;
  availabilityDot: "green" | "amber" | "red";
};

export type Stat = {
  value: string;
  label: string;
};

export type EngagementColumn = {
  /** "1" / "2" / "3" — rendered as a faded numeral in the corner */
  number: string;
  /** small mono category label, e.g. "BACKEND & SYSTEMS" */
  category: string;
  /** serif heading (HTML allowed for line breaks / em emphasis) */
  heading: string;
  /** body paragraph (markdown bold + raw HTML allowed via RichText) */
  body: string;
  /** mono detail line — the stack chips for this layer */
  details: string;
};

/** Hero right-column "currently working in" teaser. */
export type HeroFocus = {
  badge: string;
  label: string;
  title: string;
  description: string;
  link: { label: string; href: string };
};

/** One row of the dark About/Stack band. */
export type StackGroup = {
  category: string;
  items: string[];
};

export type SectionHeader = {
  eyebrow?: string;
  title: string;
  kicker?: string;
};
