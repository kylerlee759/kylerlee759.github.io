import type { StackGroup } from "./types";

export const aboutBand = {
  eyebrow: "Background & stack",
  heading:
    "Eight years turning <em>hard problems</em> into systems people rely on.",
  body: "I'm a senior software engineer with deep roots in **Python backend and AI/ML**, and full-stack range across the modern web. My career runs through **edtech and fintech** — recommendation engines and learning platforms used by thousands of educators and learners, and trading and risk systems where correctness isn't optional. I care about clean architecture, intelligent automation, and code teams actually enjoy maintaining. <span class=\"italic text-paper/60\">Previously at Axonify, D2L (Brightspace), and Questrade. Based in Toronto, open to remote across Canada and beyond.</span>",
};

export const stackGroups: StackGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "Java"],
  },
  {
    category: "Backend & APIs",
    items: [
      "FastAPI",
      "Django",
      "Flask",
      "NestJS",
      "Node / Express",
      "Laravel",
      "GraphQL",
      "REST",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Hugging Face",
      "LLMs & NLP",
      "Embeddings",
      "OpenAI",
      "Anthropic",
    ],
  },
  {
    category: "Data & storage",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Yugabyte",
      "ArangoDB",
      "SQLite",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Caddy",
      "CI/CD",
      "Prometheus / Grafana / ELK",
    ],
  },
];

export const aboutCtas = {
  primary: { label: "See the work →", href: "/work" },
};
