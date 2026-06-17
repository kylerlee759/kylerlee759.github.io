import type { HeroFocus, MastheadStrip, Stat } from "./types";

export const masthead: MastheadStrip = {
  left: "Vol. 01 · Portfolio · 2026",
  right: "Toronto, ON · Open to remote · 24h response",
  availabilityDot: "green",
};

export const heroEyebrow = "Senior Software Engineer · Python & AI · Full-Stack";

export const heroHeadline = {
  line1: "Kyler",
  line2Prefix: "I build ",
  line2Emphasis: "intelligent, scalable systems",
  line2Suffix: ".",
};

export const heroLede =
  "Senior software engineer with **8+ years** across **backend architecture, AI/ML systems, and cloud-native platforms**. I've built recommendation engines and learning platforms in **edtech**, and trading and risk systems in **fintech** — turning complex data and real user needs into systems that adapt, scale, and last. Deep in **Python and machine learning**, fluent across the modern full-stack.";

export const heroPrimaryCta = {
  label: "View projects →",
  href: "/work",
};

export const heroSecondaryCta = {
  label: "Get in touch →",
  href: "#contact",
};

export const heroStats: Stat[] = [
  { value: "8+", label: "Years shipping production systems" },
  { value: "15+", label: "Projects across the full stack" },
  { value: "20+", label: "Technologies in active rotation" },
];

export const heroFocus: HeroFocus = {
  badge: "FOCUS",
  label: "Currently working in",
  title: "AI-native backends.",
  description:
    "LLM and NLP features, recommendation systems, and the cloud-native services that run them — built to ship and stay up.",
  link: {
    label: "See featured work →",
    href: "/work",
  },
};

export const heroTerminalStatuses: string[] = [
  "▸ shipping LLM-powered recommendations on FastAPI",
  "▸ tuning embedding search over Elasticsearch",
  "▸ orchestrating microservices on Kubernetes",
  "▸ wiring CI/CD + observability into every deploy",
];

export const heroTerminalRotationMs = 4500;
