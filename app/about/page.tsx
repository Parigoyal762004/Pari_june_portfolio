/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pari Goyal is a Computer Science student building agentic AI systems across product, marketing, and operations. Experience at Oyelabs, Akroventures, Halo Interiors, and ScoutNexa.",
};

const roles = [
  {
    title: "Agentic AI Intern",
    org: "Oyelabs",
    dates: "Mar 2026 to May 2026",
    lead: "Building agents that other people end up depending on.",
    points: [
      "Built AI agents for live client projects on n8n, Supabase, and large language model APIs.",
      "Designed a global prompt framework that cross checked SOPs before any workflow ran, which saved the manager a full day every week of manual validation.",
      "Owned prompt engineering across several client projects and kept the documentation clean enough that handoffs worked the first time.",
    ],
  },
  {
    title: "Technology, Marketing and Operations Associate",
    org: "Akroventures",
    dates: "Apr 2026 to Present",
    lead: "First hire, empty slate. I built the engine that finds the deals.",
    points: [
      "Built a deal-flow engine that pulls from Crunchbase and Google News, scores companies against the fund's thesis, and fires the first founder outreach on its own. It sourced multiple live deals, including one worth up to twenty crore, the largest in the pipeline.",
      "Built a daily content pipeline that drafts ready to post options from the day's news, turning a daily scramble into a ten minute morning review and saving close to 10 hours a week.",
      "Stood up the whole digital operation solo, site, lead-gen tooling, and a personalized outreach engine, and own the decisions on what is worth building next.",
    ],
  },
  {
    title: "Marketing and AI Automation Intern",
    org: "Halo Interiors LLC",
    dates: "Nov 2025",
    lead: "Take the manual work out of video, then write it all down.",
    points: [
      "Automated cross platform video processing with AI workflows and removed most of the manual steps.",
      "Stress tested Convex, Supabase, and Firebase to find what would actually hold at scale.",
      "Documented what broke and what worked, so the next person did not start from zero.",
    ],
  },
  {
    title: "Product Intern",
    org: "ScoutNexa",
    dates: "Feb 2026 to Mar 2026",
    lead: "Ship fast, talk to users, learn how early stage really moves.",
    points: [
      "Researched competitors across Crunchbase to sharpen the product problem statement.",
      "Shipped an MVP in a few weeks with no code tools, talked to early users, and iterated quickly.",
      "The founder shut the company down, which taught me more about early stage speed and focus than a clean win would have.",
    ],
  },
];

const lessons = [
  {
    title: "Speed is a feature",
    body: "A rough MVP in front of real users beats a polished idea nobody has touched. The feedback is the product.",
  },
  {
    title: "Documentation is a gift",
    body: "Writing down what broke and what worked is a gift to the next person, including the version of me six weeks from now.",
  },
  {
    title: "A shutdown is not a stain",
    body: "When the founder closed ScoutNexa, I learned more about focus and pace than a clean win would have taught me.",
  },
];

export default function About() {
  return (
    <>
      <main>
        <section className="px-[clamp(20px,5vw,64px)] pb-16 pt-32">
          <Reveal className="mx-auto grid max-w-content items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-2">
            <div className="overflow-hidden rounded-[18px] bg-cream shadow-soft">
              <img
                src="/media/images/about-portrait.png"
                alt="Illustrated portrait of Pari Goyal with a root system spreading outward behind her"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
                About
              </p>
              <h1 className="my-4 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-normal leading-[1.04]">
                I do not get stuck in one corner of a problem.
              </h1>
              <p className="mb-4 text-[clamp(1.05rem,2vw,1.3rem)] text-ink-soft">
                I am a final-year Computer Science student, but the part that
                matters is what I have shipped: agentic AI systems that real
                teams depend on every day, across product, marketing, sourcing,
                and operations.
              </p>
              <p>
                I think in outcomes, not features. I care what changed because of
                the thing I built, a deal sourced, a week of work removed, a
                conversation booked. I make the calls on what to build and what
                to cut, I am comfortable making the case to founders and
                leadership, and I would rather ask the dumb question in the room
                than ship the wrong thing.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="relative h-[36svh] overflow-hidden">
          <img
            src="/media/animations/02-about-kintsugi.gif"
            alt="Broken ceramic pieces rejoining with the cracks filled in gold, in the style of kintsugi"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-paper/45" />
          <div className="relative z-10 mx-auto flex h-full max-w-content items-center px-[clamp(20px,5vw,64px)]">
            <p className="max-w-[30ch] font-display text-[clamp(1.4rem,3.4vw,2.4rem)] leading-tight">
              Like kintsugi, the things I have broken and rebuilt are the parts I
              am proudest of.
            </p>
          </div>
        </section>

        <section className="px-[clamp(20px,5vw,64px)] py-20">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
              Experience
            </p>
            <h2 className="mb-10 mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.04]">
              Four rooms, four problems, the same instinct.
            </h2>
          </Reveal>
          <div className="mx-auto max-w-content">
            {roles.map((r, i) => (
              <Reveal key={r.org} delay={i * 50}>
                <article className="grid grid-cols-1 gap-4 border-t border-ink/15 py-9 last:border-b md:grid-cols-[1fr_2fr]">
                  <div>
                    <h3 className="font-display text-[clamp(1.4rem,3vw,2rem)] leading-tight">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      {r.org}, {r.dates}
                    </p>
                  </div>
                  <div>
                    <p className="mb-3 font-display text-lg text-plum">
                      {r.lead}
                    </p>
                    <ul className="grid list-disc gap-2 pl-5 text-ink-soft">
                      {r.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-20">
          <Reveal className="mx-auto grid max-w-content items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-2">
            <div className="overflow-hidden rounded-[18px] bg-cream shadow-soft">
              <img
                src="/media/images/project-scoutnexa-boat.png"
                alt="A small paper boat at the tideline, partly dissolving into the sand with ripples trailing behind it"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
                What early stage taught me
              </p>
              <h2 className="my-3 font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
                The boat still left ripples.
              </h2>
              <div className="mt-4 grid gap-6">
                {lessons.map((l) => (
                  <div key={l.title} className="border-t border-ink/15 pt-4">
                    <h3 className="font-display text-xl">{l.title}</h3>
                    <p className="mt-1 text-ink-soft">{l.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
