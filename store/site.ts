import type { NavLink } from "./types";

export const owner = {
  firstName: "Kyler",
  wordmark: "Kyler",
  role: "Senior Software Engineer · Python & AI · Full-Stack",
  location: "Toronto, ON",
  timezone: "UTC−5",
  responseTime: "24h response",
  available: true,
};

export const contactInfo = {
  /** Empty → BookButton degrades to a plain mailto (email-only, no Calendly). */
  calendlyUrl: "" as string,
  email: "kylerlee759@outlook.com" as string,
  github: "https://github.com/golden0559",
  githubLabel: "github.com/golden0559",
};

export const bookCall = {
  emailSubject: "Project / role inquiry",
  emailBody:
    "Hi Kyler,\n\nI came across your portfolio and wanted to reach out.\n\nA bit of context on what I'm working on:\n\n\nThanks,\n",
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export const footer = {
  left: "Kyler",
  center: "© 2026 · Senior Software Engineer · Toronto, ON",
  right: "Selected work · Vol. 01",
};
