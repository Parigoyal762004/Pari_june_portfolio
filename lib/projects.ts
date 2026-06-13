export type Project = {
  slug: string;
  title: string;
  org: string;
  year: string;
  image: string;
  accent: string;
  tagline: string;
  problem: string;
  build: string;
  result: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "lead-qualification",
    title: "AI Lead Qualification and Quotation Pipeline",
    org: "Oyelabs",
    year: "2026",
    image: "/media/images/project-lead-comb.png",
    accent: "#59B292",
    tagline: "Hot, warm, cold. Decided and routed without anyone chasing it.",
    problem:
      "Leads arrived faster than anyone could sort, qualify, and quote them. The manual triage was slow, and the quality of each follow up depended on who happened to pick it up.",
    build:
      "A form submission triggers a second form by email, checks Supabase for an existing lead, then an AI layer classifies each one as hot, warm, or cold. From the lead data it drafts an AI written quotation and routes it to the manager for approval before it ever reaches the customer.",
    result:
      "A Stripe workflow and automated manager notifications close the loop. Nothing sits waiting for a human to chase it, and every lead gets a consistent first response.",
    stack: ["n8n", "Supabase", "LLM APIs", "Stripe"],
  },
  {
    slug: "investment-sourcing",
    title: "Investment Sourcing System",
    org: "Akroventures",
    year: "2026",
    image: "/media/images/project-investment-sieve.png",
    accent: "#FFC94D",
    tagline: "Thousands of companies in, a short investable list out.",
    problem:
      "Finding companies worth backing meant trawling Crunchbase and the news by hand, every single week, and most of what you read was noise.",
    build:
      "A pipeline pulls from Crunchbase and Google News, filters down to the few companies actually worth a conversation, and fires the first outreach email automatically once a company clears the filter.",
    result:
      "Built as a repeatable pipeline rather than a one time scrape, so the sourcing keeps running instead of needing to be redone from scratch.",
    stack: ["Crunchbase", "Google News", "n8n", "LLM APIs"],
  },
  {
    slug: "content-pipeline",
    title: "Daily Content Pipeline",
    org: "Akroventures",
    year: "2026",
    image: "/media/images/project-content-bloom.png",
    accent: "#FA6781",
    tagline: "A morning review instead of a daily scramble.",
    problem:
      "Keeping the brand posting every day ate hours and still felt reactive, always chasing what to say next.",
    build:
      "A pipeline pulls from news sources each day and surfaces ready to post options, so the work becomes a short morning review instead of a blank page.",
    result:
      "Saves close to 10 hours a week and keeps the brand posting consistently without a daily content meeting.",
    stack: ["n8n", "News APIs", "LLM APIs"],
  },
  {
    slug: "video-automation",
    title: "AI Video Automation Agents",
    org: "Halo Interiors LLC",
    year: "2025",
    image: "/media/animations/05-projects-prism.gif",
    accent: "#B9A7E0",
    tagline: "Manual video busywork, mostly gone.",
    problem:
      "Cross platform video processing was repetitive and error prone, and it broke in quiet ways that were hard to trace.",
    build:
      "Agents built with Claude and n8n handle video download, metadata extraction, captioning, and CSV or Markdown generation. I debugged API rate limits and tool mismatches, then restructured the logic into modules so the whole thing stayed stable.",
    result:
      "Removed most of the manual steps, and opened the door to educational content ingestion and structured knowledge extraction.",
    stack: ["Claude", "n8n", "REST APIs"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
