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
    tagline: "I stopped sourcing deals by hand and let the system do it.",
    problem:
      "Sourcing meant manually trawling Crunchbase and the news every single week. Slow, and the best companies slipped past while you were reading the wrong fifty.",
    build:
      "First hire, so I built the sourcing engine end to end. It pulls from Crunchbase and Google News, scores every company against the fund's thesis, surfaces a tight investable list, and fires the first founder email itself the moment one clears the bar. I decided what signal mattered and threw out the rest.",
    result:
      "It feeds the live pipeline behind a fundraising mandate worth up to ₹20 crore. Runs itself every week. Nobody trawls Crunchbase by hand anymore, and the deals stopped slipping through.",
    stack: ["Crunchbase", "Google News", "n8n", "Supabase", "LLM APIs"],
  },
  {
    slug: "outreach-engine",
    title: "Personalized Outreach Engine",
    org: "Akroventures + Personal",
    year: "2026",
    image: "/media/animations/06-contact-wave.gif",
    accent: "#FA6781",
    tagline: "Cold outreach that reads like one human wrote it for one human.",
    problem:
      "Generic blasts get ignored. Real outreach means researching each person and writing something they will actually answer, and that does not scale by hand. So either the volume drops or the quality does. Usually both.",
    build:
      "A system that researches each target, pulls the one hook that actually matters to them, drafts a first email in a consistent voice, and routes it for a quick human check before it sends. The same engine runs investor-to-founder outreach at Akro and my own job outreach, because the principle does not change: lead with proof, tie it to their world, ask for fifteen minutes.",
    result:
      "Hours of research and writing collapse into a short review. It books real conversations instead of landing in spam, and it is the cleanest proof of what I ship: a working system, in production, doing a human's job well.",
    stack: ["n8n", "Supabase", "LLM APIs", "Gmail API"],
  },
  {
    slug: "lead-qualification",
    title: "AI Lead Qualification & Quotation Pipeline",
    org: "Oyelabs",
    year: "2026",
    image: "/media/images/project-lead-comb.png",
    accent: "#5FC7A4",
    tagline: "Hot, warm, cold. Sorted and quoted before anyone touched it.",
    problem:
      "Leads arrived faster than anyone could sort, qualify, and quote them. Triage was manual and slow, and the quality of each follow-up depended on who happened to grab it.",
    build:
      "A form submission triggers a second form by email, checks Supabase for an existing lead, then an AI layer classifies each one hot, warm, or cold. From the lead data it drafts a quotation and routes it to the manager for approval before it ever reaches the customer.",
    result:
      "A Stripe workflow and automated notifications close the loop. Nothing waits for a human to chase it, and every lead gets the same sharp first response, every time.",
    stack: ["n8n", "Supabase", "LLM APIs", "Stripe"],
  },
  {
    slug: "content-pipeline",
    title: "Daily Content Pipeline",
    org: "Akroventures",
    year: "2026",
    image: "/media/images/project-content-bloom.png",
    accent: "#C7B4F0",
    tagline: "Ten hours a week of content busywork, gone.",
    problem:
      "Keeping the brand posting daily ate hours and still felt reactive, always scrambling for what to say next.",
    build:
      "A pipeline pulls from news sources every morning and surfaces ready-to-post options, so the job becomes a ten-minute review instead of a blank page and a deadline.",
    result:
      "Saves close to 10 hours a week and keeps the brand posting consistently, no daily content meeting required.",
    stack: ["n8n", "News APIs", "LLM APIs"],
  },
  {
    slug: "video-automation",
    title: "AI Video Automation Agents",
    org: "Halo Interiors LLC",
    year: "2025",
    image: "/media/animations/05-projects-prism.gif",
    accent: "#8FCBE3",
    tagline: "The manual video grind, automated out of existence.",
    problem:
      "Cross-platform video processing was repetitive, error-prone, and broke in quiet ways that were painful to trace.",
    build:
      "Agents built with Claude and n8n handle download, metadata extraction, captioning, and CSV or Markdown generation. I debugged the rate limits and tool mismatches, then restructured the logic into modules so the whole thing actually held.",
    result:
      "Cut out most of the manual steps and opened the door to educational content ingestion and structured knowledge extraction.",
    stack: ["Claude", "n8n", "REST APIs"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
