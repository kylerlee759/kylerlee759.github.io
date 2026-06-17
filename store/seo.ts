/**
 * SEO content lives here per the data-store rule. Components and
 * Next.js metadata exports read from these constants.
 */

const fallbackUrl = "http://localhost:3000";

export const seo = {
  /** Used as metadataBase + JSON-LD canonical. Set NEXT_PUBLIC_SITE_URL on Vercel before launch. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,

  siteName: "Kyler",
  locale: "en_US",

  home: {
    title: "Kyler — Senior Software Engineer (Python · AI · Full-Stack)",
    description:
      "Senior software engineer with 8+ years across backend architecture, AI/ML systems, and cloud-native platforms. Built recommendation engines and learning platforms in edtech, and trading and risk systems in fintech. Deep in Python and machine learning, fluent across the modern full-stack.",
    keywords: [
      "senior software engineer",
      "Python engineer",
      "AI/ML engineer",
      "backend engineer",
      "full-stack engineer",
      "FastAPI",
      "Django",
      "machine learning",
      "LLM",
      "microservices",
      "Kubernetes",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },

  work: {
    title: "The archive",
    description:
      "Sixteen production projects across backend, AI/ML, frontend, and cloud — edtech, fintech, healthtech, data, automation, web3, and more. Grouped by what they prove.",
  },

  /** Subject of the OpenGraph image. Pulled by app/opengraph-image.tsx. */
  ogImage: {
    eyebrow: "Vol. 01 · Portfolio · 2026",
    status: "Open to remote",
    name: "Kyler.",
    taglinePrefix: "I build ",
    taglineEmphasis: "intelligent, scalable systems",
    taglineSuffix: ".",
    role: "Senior Software Engineer · Python & AI",
  },

  /** Hooked into the icon generator. */
  icon: {
    letter: "K",
    accentChar: ".",
  },

  /** Owner identity for schema.org Person markup. */
  person: {
    name: "Kyler",
    jobTitle: "Senior Software Engineer",
    description:
      "Senior software engineer specializing in Python backend, AI/ML, and cloud-native systems, with full-stack range across React, Next.js, Vue, Angular, NestJS, Django, and Laravel. 8+ years across edtech and fintech.",
    knowsAbout: [
      "Software Architecture",
      "Backend Engineering",
      "Machine Learning",
      "LLMs & NLP",
      "Microservices",
      "Distributed Systems",
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Angular",
      "NestJS",
      "Django",
      "FastAPI",
      "Kubernetes",
      "AWS",
      "Cloud-Native Systems",
    ],
    /** Public profile URLs. */
    sameAs: ["https://github.com/golden0559"] as string[],
  },
};
