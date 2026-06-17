import type { Project } from "./types";

export const projects: Project[] = [
  // ─── Featured (Tier 1) ──────────────────────────────────────────────
  {
    id: "mestios",
    name: "Mestios",
    tier: 1,
    featuredOrder: 1,
    capability: "Architecture & Systems",
    tags: ["Data", "Media", "SaaS", "AI"],
    hook: "Four databases, one platform — Elasticsearch for search, Yugabyte for scale, ArangoDB for relationships, Postgres for the rest — microservices on Kubernetes because the problem genuinely needed it.",
    description:
      "Global news aggregation, AI summarization, entity-graph mapping, and opinion/sentiment scoring — four databases each doing what it does best, behind a unified GraphQL surface.",
    stack: [
      "Angular",
      "NestJS",
      "GraphQL",
      "Elasticsearch",
      "Yugabyte",
      "ArangoDB",
      "Postgres",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    caseStudy: {
      problem:
        "Aggregate global news, summarize it with AI, extract topics and entities, map them into a graph of relationships, let users submit statements and opinions, and compute sentiment impact scores across all of it.",
      constraint:
        "The data isn't one shape. News text needs semantic search. Opinions need relational queries. Entity relationships are a graph problem. Subscription state is relational. Forcing one database to do all four poorly wasn't an option.",
      built:
        "Rebuilt the Angular frontend pixel-perfect from Figma. Architected the backend as NestJS microservices behind GraphQL. Elasticsearch for semantic search, Yugabyte for distributed SQL at scale, ArangoDB for the topic/entity graph, Postgres for auth and subscriptions, Redis for caching and ELK for observability. AI summarization and context extraction from sources like BBC. Dockerized services orchestrated on Kubernetes; Stripe for subscriptions.",
      hardPart:
        "The hard part was making four databases behave like one coherent platform. News ingestion is write-heavy and bursty — the moment a story lands it has to be searchable in Elasticsearch, linked in the ArangoDB entity graph, and consistent in Postgres and Yugabyte, without the frontend ever reading a half-written record. I designed a unified ingestion pipeline that wrote to each store in the order its consistency guarantees allowed, and composed a single GraphQL view across all four so the client never knew there were seams underneath.",
      outcome:
        "A platform where semantic news discovery, opinion graphs, and user analytics all query fast — because each database is doing the job it's actually good at.",
    },
  },
  {
    id: "tutrx",
    name: "Tutrx",
    tier: 1,
    featuredOrder: 2,
    capability: "Production SaaS",
    tags: ["EdTech", "SaaS", "AI"],
    hook: "A Udemy-class LMS taken solo from zero to an angel-funded MVP in 8 months — then re-architected for the team that scaled it.",
    description:
      "Modern LMS with course creation, booking, real-time messaging, AI content generation, and performance tracking. Built solo to MVP, then scaled with a team I onboarded and led.",
    stack: [
      "React",
      "TypeScript",
      "Express",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "AWS EC2",
      "Docker",
      "Nginx",
      "Stripe",
      "Twilio",
      "OpenAI",
    ],
    liveUrl: "https://tutrx.org",
    caseStudy: {
      problem:
        "A non-technical founding team needed a modern LMS that could credibly compete with Udemy — dashboards, course creation, booking, real-time messaging, AI content generation, performance tracking — shipped before the funding window closed.",
      constraint:
        "Solo engineering through MVP. The architecture had to survive the eventual transition to a team without a rewrite. No luxury of throwing people at problems, no time to second-guess foundational choices.",
      built:
        "Designed frontend and backend for modularity from day one. Built the core UI prototype and design system from scratch with MUI + Tailwind. Led backend — auth, course management, AI content generation, payments (Stripe + PayPal), real-time messaging over WebSockets, SendGrid + Twilio notifications. Wrote the full roadmap and architecture docs before onboarding anyone.",
      hardPart:
        "The hard part was making solo decisions that wouldn't have to be unmade when a team arrived. With no one else reading the code, the temptation is to skip the boundaries, docs, and seams that only matter at scale. I drew module boundaries and wrote the architecture docs as if three engineers were already on the team — so when they actually were, onboarding took days instead of a rewrite. The features I'd redo are the ones I rushed; the months I saved came from discipline kept when no one was watching.",
      outcome:
        "MVP shipped solo in 8 months. Angel investment closed. Product scaled with a 3–4 engineer team I onboarded and mentored through code reviews and roadmap planning.",
    },
  },
  {
    id: "dental-clinic-voice-ai",
    name: "Dental Clinic Voice AI",
    tier: 1,
    featuredOrder: 3,
    capability: "Automation & Integration",
    tags: ["HealthTech", "AI", "Automation"],
    hook: "A sub-500ms voice agent that phones patients to fill cancellations — Twilio → Deepgram → OpenAI → ElevenLabs, with a 5-state conversation FSM that knows when *not* to call a tool.",
    description:
      "Automated patient calling for gap-filling and rescheduling. Full-duplex audio pipeline, sequential candidate queue, dual answering-machine strategy, real-time calendar sync over WebSockets.",
    stack: [
      "Node.js",
      "Fastify",
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Twilio",
      "Deepgram",
      "OpenAI GPT-4o",
      "ElevenLabs",
      "FFmpeg",
    ],
    caseStudy: {
      problem:
        "Front desks lose revenue to last-minute cancellations and no-shows. The clinic needed a system that calls patients in natural voice to reschedule and fill gaps — without spamming everyone or burning staff time.",
      constraint:
        "It's a live phone call. Every hop — speech-to-text, LLM, text-to-speech, audio format conversion — adds latency, and a half-second of dead air makes the AI sound broken. It also had to know when to stop: fill one slot, then halt.",
      built:
        "A full-duplex pipeline streaming Twilio audio through Deepgram STT → OpenAI GPT-4o → ElevenLabs TTS and back, with on-the-fly MP3→mu-law 8kHz conversion via FFmpeg. A stateful CallHandler with a 5-state FSM (Greeting → Listening → Processing → Speaking → Ended), a sequential gap-filling queue that advances on decline and halts on accept, OpenAI function-calling for check_availability / book_appointment, and a Next.js calendar with drag-to-reschedule and WebSocket live updates.",
      hardPart:
        "The hard part was latency and turn-taking. Deepgram sometimes never sent a final transcript, so I built a timeout-based interim-promotion strategy to keep patient speech from being lost, plus a dual answering-machine strategy — skip detection on interactive calls, instant SMS fallback on one-way notifications. The FSM had to know when not to call a tool, so the AI didn't book against itself mid-sentence. The result holds a natural conversation and stops the moment a slot is filled — zero spam, zero wasted calls.",
      outcome:
        "One UI action triggers three distinct scenarios (dentist-sick, gap-filling, delay-notification); the agent calls candidates one by one and books the first to accept, with the calendar updating live across every connected receptionist.",
    },
  },
  {
    id: "celeblink",
    name: "Celeblink",
    tier: 1,
    featuredOrder: 4,
    capability: "Production SaaS",
    tags: ["SaaS", "Media"],
    hook: "A subscription platform that gets regular people featured in Forbes — on a CMS-backed architecture most engineers would have over-built into a custom admin.",
    description:
      "Subscription SaaS connecting users with PR opportunities, Instagram growth, and celebrity giveaways. Stripe-billed tiers, Wagtail-powered content the business team owns.",
    stack: ["Next.js", "Django", "Wagtail CMS", "Stripe", "Docker", "Nginx", "VPS"],
    liveUrl: "https://www.influize.com/",
    caseStudy: {
      problem:
        "Build a subscription SaaS connecting users with PR opportunities, Instagram growth campaigns, and celebrity giveaways — paid tiers, automated billing, and content management non-technical operators could own.",
      constraint:
        "Content changes constantly (campaigns, partnerships, listings). A fully custom CMS would slow the business to the speed of engineering; a generic WordPress setup wouldn't hold the subscription model.",
      built:
        "Next.js + Tailwind frontend, pixel-perfect from Figma. Django backend with Wagtail CMS so operators edit their own pages. Stripe for recurring subscriptions, OAuth 2.0 + JWT auth, Pandas/NumPy for data handling. Dockerized with Docker Compose, VPS-hosted behind Nginx with GitHub CI/CD.",
      hardPart:
        "The hard part was choosing Wagtail over a custom admin — and then bending it to gate content behind Stripe subscriptions without losing the non-technical-editor ergonomics that made it the right call. Operators needed to edit campaigns themselves, but paid tiers had to stay enforced server-side. I kept Wagtail's editing experience intact while wiring subscription state into the content-delivery layer, so the business ships content at their speed and the paywall never depends on the client.",
      outcome:
        "A SaaS the business team runs without touching code, payment infrastructure that handles recurring churn, and a deploy pipeline that ships without downtime.",
    },
  },

  // ─── Production SaaS (Tier 2) ───────────────────────────────────────
  {
    id: "kayos",
    name: "Kayos",
    tier: 2,
    capability: "Production SaaS",
    tags: ["AI", "SaaS", "Marketing"],
    hook: "When one LLM provider goes down, the content pipeline shouldn't — dual-provider fallback across Anthropic and OpenAI.",
    description:
      "AI content generation with template-driven flows and dual-provider routing for posts, articles, letters, and outreach.",
    stack: ["React", "FastAPI", "MongoDB", "Anthropic API", "OpenAI API"],
    liveUrl: "https://www.kayos.pro",
  },
  {
    id: "surfa",
    name: "Surfa",
    tier: 2,
    capability: "Production SaaS",
    tags: ["SaaS", "AI", "Marketing"],
    hook: "Usage quotas enforced server-side with atomic counters, not client flags — because plan-gating a user can bypass isn't plan-gating.",
    description:
      "AI local-SEO platform syncing listings across Google Business, Yelp, Facebook, Apple Maps, and Bing Places. GPT-4 content across 4 formats with tuned prompts per type.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Stripe", "OpenAI GPT-4"],
  },
  {
    id: "roasted-revolution",
    name: "Roasted Revolution",
    tier: 2,
    capability: "Production SaaS",
    tags: ["SaaS", "E-commerce"],
    hook: "Vue 3 + Laravel instead of Shopify — when the client needed custom checkout logic a theme-based platform wouldn't survive.",
    description:
      "Premium coffee storefront with Stripe/PayPal, MySQL-backed product and order management, Tailwind UI.",
    stack: ["Vue 3", "Vite", "Laravel", "MySQL", "Stripe", "PayPal"],
    liveUrl: "https://roastedrevolution.ca",
  },
  {
    id: "date-matchmaker-assistant",
    name: "Date Matchmaker Assistant",
    tier: 2,
    capability: "Production SaaS",
    tags: ["SaaS", "Social"],
    hook: "Make.com for the AI chatbot, Node.js for everything Make couldn't reach — a hybrid MVP shipped in weeks, not months.",
    description:
      "Cross-border matchmaking MVP with WebSocket chat, Twilio video/voice, region-gated Stripe subscriptions.",
    stack: ["Make.com", "Node.js", "React", "Twilio", "Stripe", "Google Sheets"],
  },

  // ─── Automation & Integration (Tier 2) ──────────────────────────────
  {
    id: "insurance-affiliate-middleware",
    name: "Insurance Affiliate Middleware",
    tier: 2,
    capability: "Automation & Integration",
    tags: ["InsurTech", "FinTech", "Automation"],
    hook: "VIU Hub fires no webhooks, so I faked them with polling + diff detection — 100% agent attribution across a 12-status funnel.",
    description:
      "FastAPI event dispatcher feeding GoHighLevel dashboards, workflows, and sub-affiliate funnels. AWS EC2, Cloudflare routing.",
    stack: ["FastAPI", "AWS EC2", "Cloudflare", "GoHighLevel", "Python"],
  },
  {
    id: "n8n-recruiter-workflow",
    name: "N8N Recruiter Workflow",
    tier: 2,
    capability: "Automation & Integration",
    tags: ["Automation", "HR"],
    hook: "Email in, OCR across any format, AI-written reply, scheduled to dodge the \"instant robot\" tell — automation that reads human.",
    description:
      "Certification screening: IMAP trigger → OCR → custom validation → DeepSeek AI → scheduled SMTP reply.",
    stack: ["N8N", "Tesseract", "DeepSeek AI", "IMAP", "SMTP"],
  },
  {
    id: "betwatch-scraper",
    name: "Betwatch Scraper",
    tier: 2,
    capability: "Automation & Integration",
    tags: ["Data", "Automation", "Sports"],
    hook: "A real-time scraper isn't real-time unless the dashboard updates without a refresh — GraphQL subscriptions + Sheets sync, no polling gaps.",
    description:
      "Automated sports-betting data pipeline syncing MongoDB and Google Sheets.",
    stack: ["Python", "GraphQL", "REST", "MongoDB", "Google Sheets API"],
    liveUrl: "https://betwatch.com",
  },

  // ─── Architecture & Systems (Tier 2) ────────────────────────────────
  {
    id: "torontoo-3d-map",
    name: "Torontoo 3D Map",
    tier: 2,
    capability: "Architecture & Systems",
    tags: ["Geospatial", "SaaS"],
    hook: "A 1.6GB map won't render in a browser — a tile pyramid sliced by a custom Python script does, smoothly.",
    description:
      "Interactive 3D Toronto map migrated from Leaflet to OpenSeadragon, with an admin dashboard for pins. VPS + Docker + NGINX.",
    stack: ["Next.js", "OpenSeadragon", "Python", "Supabase", "MongoDB", "Docker", "Nginx"],
    liveUrl: "https://www.torontoo.co",
  },
  {
    id: "ai-legal-job-platform",
    name: "AI Legal Job Platform",
    tier: 2,
    capability: "Architecture & Systems",
    tags: ["LegalTech", "SaaS", "AI"],
    hook: "Users can be employer *and* employee on one account — a UX call that breaks half the backend if you don't design for it on day one.",
    description:
      "Freelance marketplace with Telegram-style real-time chat, multilingual AI translation, embedding-based job matching, AI contract generation.",
    stack: ["React", "TypeScript", "ShadCN UI", "FastAPI", "Postgres", "Redis", "Text Embeddings", "Docker"],
  },

  // ─── Specialized & R&D (Tier 3) ─────────────────────────────────────
  {
    id: "volt-win-auction",
    name: "Volt.win Auction",
    tier: 3,
    capability: "Specialized & R&D",
    tags: ["Web3", "FinTech", "AI"],
    hook: "Wagmi wallet integration over a hyper-deflationary TitanX token — an auction mechanism that breaks if the settlement logic is even slightly off.",
    description:
      "Decentralized auction system with React + FastAPI, MongoDB for off-chain state, Web3.js.",
    stack: ["React", "FastAPI", "MongoDB", "Wagmi", "Web3.js", "TitanX", "OpenAI API"],
  },
  {
    id: "iris-recognition",
    name: "Iris Recognition",
    tier: 3,
    capability: "Specialized & R&D",
    tags: ["AI", "Security"],
    hook: "Biometric auth isn't a library call — it's a CV model, encrypted storage, and a REST surface that survives real-world lighting.",
    description:
      "Flask + OpenCV deep-learning pipeline for iris-based authentication, with a PostgreSQL-backed biometric store and REST API.",
    stack: ["Flask", "OpenCV", "Deep Learning", "PostgreSQL", "MongoDB", "REST"],
  },
  {
    id: "unify-access-gateway",
    name: "Unify Access Gateway",
    tier: 3,
    capability: "Specialized & R&D",
    tags: ["IoT", "Security"],
    hook: "A boat-ramp owner shouldn't drive to the door to let a paying customer in — one-time QR/PIN over a Unifi API bridge, with a real-time audit log.",
    description:
      "Node.js middleware between a web admin panel and Unifi Network hardware. Docker + NGINX.",
    stack: ["Node.js", "Docker", "Nginx", "Unifi API"],
    liveUrl: "https://mastersonsdata.com",
  },
];

export const featuredProjects = projects
  .filter((p) => p.tier === 1)
  .sort(
    (a, b) =>
      (a.featuredOrder ?? Number.POSITIVE_INFINITY) -
      (b.featuredOrder ?? Number.POSITIVE_INFINITY),
  );
export const tier2Projects = projects.filter((p) => p.tier === 2);
export const tier3Projects = projects.filter((p) => p.tier === 3);

export function projectsByCapability(capability: Project["capability"]) {
  return projects.filter((p) => p.capability === capability);
}
