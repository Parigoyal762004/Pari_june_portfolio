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
    slug: "deal-flow-engine",
    title: "Deal-Flow Engine",
    org: "Akroventures",
    year: "2026",
    image: "/media/images/project-investment-sieve.png",
    accent: "#FFC94D",
    tagline: "Thousands of companies in. The deals worth backing out.",
    problem:
      "Sourcing meant trawling Crunchbase and the news by hand every week, and most of what you read was noise. The cost was not just the hours, it was the deals that slipped past while someone was reading the wrong fifty companies.",
    build:
      "As the first hire, I built the sourcing engine end to end. It pulls from Crunchbase and Google News, scores each company against the fund's thesis, surfaces a short investable list, and fires the first founder outreach on its own the moment a company clears the bar. I made the calls on what signal mattered and what to ignore.",
    result:
      "Sourced multiple live deals, including one worth up to twenty crore, the largest in the pipeline. It runs on its own every week, so sourcing never stops and nobody trawls Crunchbase by hand again.",
    stack: ["Crunchbase", "Google News", "n8n", "Supabase", "LLM APIs"],
  },
  {
    slug: "outreach-engine",
    title: "Personalized Outreach Engine",
    org: "Akroventures + Personal",
    year: "2026",
    image: "/media/animations/06-contact-wave.gif",
    accent: "#FA6781",
    tagline: "Cold outreach that reads like it was written for one person. Because it was.",
    problem:
      "Generic blasts get ignored. Real outreach means researching each person and writing something they will actually answer, and that does not scale by hand. So either the volume drops or the quality does.",
    build:
      "A system that researches each target, pulls the one hook that matters to them, drafts a first email in a consistent voice, and routes it for a quick human check before it sends. The same engine powers investor-to-founder outreach at Akro and my own job outreach, because the principle is identical: lead with proof of what you built, tie it to their world, ask for fifteen minutes.",
    result:
      "Turns hours of research and writing into a short review. It books real conversations instead of landing in spam, and it is the clearest proof of what I can ship: a working system, used in production, that does a human's job well.",
    stack: ["n8n", "Supabase", "LLM APIs", "Gmail API"],
  },
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
