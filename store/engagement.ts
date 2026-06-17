import type { EngagementColumn, SectionHeader } from "./types";

export const engagementHeader: SectionHeader = {
  eyebrow: "§ 01 — How I work",
  title: "Three layers, <em>one engineer.</em><br>No seams to fall through.",
  kicker:
    "Most systems fail at the boundaries between frontend, backend, and infra. I own all three — so there are no boundaries to drop the ball at.",
};

export const engagementColumns: EngagementColumn[] = [
  {
    number: "1",
    category: "BACKEND & SYSTEMS",
    heading: "Backend &<br>distributed systems.",
    body: "APIs, services, and data layers that hold up under load. **FastAPI, Django, and Flask** in Python; **NestJS and Express** in Node; **Laravel** in PHP; microservices behind **GraphQL and REST**. I've run four databases under one platform and a single Postgres table under heavy write load — and chosen each on purpose.",
    details: "Python · FastAPI · Django · Flask · NestJS · Node · Laravel · GraphQL · REST",
  },
  {
    number: "2",
    category: "AI / ML & DATA",
    heading: "AI, ML &<br>data engineering.",
    body: "Recommendation engines, LLM and NLP features, real-time voice pipelines, embedding-based search, and the data pipelines that feed them. **PyTorch and TensorFlow** for models; **OpenAI, Anthropic, and Hugging Face** for generative work; **Elasticsearch and vector search** for retrieval.",
    details: "PyTorch · TensorFlow · scikit-learn · LLMs/NLP · Embeddings · OpenAI · Anthropic · Elasticsearch",
  },
  {
    number: "3",
    category: "FRONTEND & CLOUD",
    heading: "Frontend &<br>cloud-native delivery.",
    body: "Production interfaces in **React, Next.js, Vue, and Angular**, all in **TypeScript** — then containerized and shipped. **Docker and Kubernetes, Nginx and Caddy**, across **AWS, Azure, and GCP**, with CI/CD and observability wired in from day one.",
    details: "React · Next.js · Vue · Angular · TypeScript · Docker · Kubernetes · AWS/Azure/GCP",
  },
];

export const engagementClosingStatement =
  "I don't hand off at the boundary between frontend, backend, and infra. The whole system is the unit of work.";
