/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pari Goyal helps early-stage companies raise capital and scale from zero. Closed a fundraising mandate worth up to ₹20 crore, built GTM and AI systems from scratch. Experience at Akroventures, Oyelabs, Halo Interiors, and ScoutNexa.",
};

const roles = [
  {
    title: "First hire · Akroventures",
    org: "Akroventures",
    dates: "Apr 2026 to Present",
    lead: "Built the tech from zero. Closed a mandate that moved real capital.",
    points: [
      "Helped close a fundraising mandate worth up to ₹20 crore, owning the client relationship and the moving parts that turn a pitch into committed capital.",
      "Built the entire tech and GTM stack from scratch: a deal-flow engine that sources investable companies on its own, a personalized outreach system, lead-gen tooling, and the site you are reading this on.",
      "Built a daily content pipeline that turned a daily scramble into a ten-minute morning review and saved close to 10 hours a week. I own the call on what gets built next.",
    ],
  },
  {
    title: "Agentic AI Intern",
    org: "Oyelabs",
    dates: "Mar 2026 to May 2026",
    lead: "Built agents other people ended up depending on.",
    points: [
      "Built AI agents for live client projects on n8n, Supabase, and large language model APIs.",
      "Designed a global prompt framework that cross-checked SOPs before any workflow ran, saving the manager a full day every week of manual validation.",
      "Owned prompt engineering across several client projects and kept the docs clean enough that handoffs worked the first time.",
    ],
  },
  {
    title: "Marketing & AI Automation Intern",
    org: "Halo Interiors LLC",
    dates: "Nov 2025",
    lead: "Took the manual work out of video, then wrote it all down.",
    points: [
      "Automated cross-platform video processing with AI workflows and cut out most of the manual steps.",
      "Stress-tested Convex, Supabase, and Firebase to find what would actually hold at scale.",
      "Documented what broke and what worked, so the next person did not start from zero.",
    ],
  },
  {
    title: "Product Intern",
    org: "ScoutNexa",
    dates: "Feb 2026 to Mar 2026",
    lead: "Shipped fast, talked to users, learned how early stage really moves.",
    points: [
      "Researched competitors across Crunchbase to sharpen the product problem statement.",
      "Shipped an MVP in a few weeks with no-code tools, talked to early users, and iterated quickly.",
      "The founder shut the company down, which taught me more about focus and speed than a clean win would have.",
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

const wants = [
  {
    label: "The role",
    value: "GTM, BD, or founder's office",
    note: "Where strategy and execution sit in the same chair.",
    accent: "#5FC7A4",
  },
  {
    label: "The company",
    value: "Funded, early-stage, moving fast",
    note: "Chaos is fine. I work well in it.",
    accent: "#FFC94D",
  },
  {
    label: "The bar",
    value: "Where my thinking actually matters",
    note: "Not tickets. Outcomes I get to own.",
    accent: "#FA6781",
  },
];

export default function About() {
  const accents = ["#5FC7A4", "#FA6781", "#C7B4F0", "#FFC94D"];
  return (
    <>
      <main>
        <section className="px-[clamp(20px,5vw,64px)] pb-16 pt-32">
          <Reveal className="mx-auto grid max-w-content items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] bg-cream border border-ink/10 shadow-soft transition-all duration-500 hover:border-teal/40 hover:scale-[1.01]">
              <img
                src="/media/images/about-portrait.png"
                alt="Illustrated portrait of Pari Goyal with a root system spreading outward behind her"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                About
              </p>
              <h1 className="my-5 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-normal leading-[1.04]">
                I figure things out, move fast, and close what I start.
              </h1>
              <p className="mb-5 text-[clamp(1.05rem,2vw,1.3rem)] leading-relaxed">
                I help early-stage companies figure out how to raise capital and
                scale from scratch. I have closed real fundraising mandates,
                built GTM systems from zero, and automated what should never have
                been manual.
              </p>
              <p className="text-ink-soft leading-relaxed">
                I think in conversations, move in decisions, and execute in code.
                Right now I am finishing my CS degree while building at
                Akroventures. Before that: AI agents at Oyelabs, product research
                at ScoutNexa, video automation at Halo Interiors.
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
          <div className="absolute inset-0 bg-paper/55" />
          <div className="relative z-10 mx-auto flex h-full max-w-content items-center px-[clamp(20px,5vw,64px)]">
            <p className="max-w-[30ch] font-display text-[clamp(1.4rem,3.4vw,2.4rem)] leading-tight">
              Like kintsugi, the things I have broken and rebuilt are the parts I
              am proudest of.
            </p>
          </div>
        </section>

        <section className="px-[clamp(20px,5vw,64px)] py-20 relative">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Experience
            </p>
            <h2 className="mb-14 mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.04]">
              Four rooms, four problems, the same instinct.
            </h2>
          </Reveal>

          <div className="mx-auto max-w-content relative border-l border-ink/15 pl-6 md:pl-10 ml-2 md:ml-4 space-y-8">
            {roles.map((r, i) => {
              const roleAccent = accents[i % accents.length];
              return (
                <Reveal key={r.org} delay={i * 50} className="relative">
                  <span
                    className="absolute -left-[31px] md:-left-[47px] top-2.5 h-4 w-4 rounded-full border-[3px] border-paper z-20 transition-all duration-300 hover:scale-125"
                    style={{
                      backgroundColor: roleAccent,
                      boxShadow: `0 0 10px ${roleAccent}`,
                    }}
                  />

                  <article className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] bg-cream/60 border border-ink/10 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-ink/20 hover:bg-cream hover:shadow-soft">
                    <div>
                      <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.75rem)] leading-tight">
                        {r.title}
                      </h3>
                      <p
                        className="mt-1 text-sm font-semibold tracking-wide"
                        style={{ color: roleAccent }}
                      >
                        {r.org}
                      </p>
                      <p className="mt-2 text-xs text-ink-soft">{r.dates}</p>
                    </div>
                    <div>
                      <p className="mb-3 font-display text-lg text-plum font-medium">
                        {r.lead}
                      </p>
                      <ul className="grid list-disc gap-2 pl-5 text-ink-soft text-sm leading-relaxed">
                        {r.points.map((pt, j) => (
                          <li key={j}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-20 border-t border-ink/10">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-coral">
              What I am looking for
            </p>
            <h2 className="mb-10 mt-3 max-w-[24ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
              A seat where thinking and execution both count.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {wants.map((w) => (
                <div
                  key={w.label}
                  className="rounded-2xl border-t-2 bg-cream/60 p-6 transition-all duration-300 hover:bg-cream hover:shadow-soft"
                  style={{ borderTopColor: w.accent }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.22em]"
                    style={{ color: w.accent }}
                  >
                    {w.label}
                  </p>
                  <p className="mt-3 font-display text-[clamp(1.3rem,2.4vw,1.6rem)] leading-tight">
                    {w.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">{w.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Targeting ₹14–20 LPA. If the work is real, I am flexible on the
              rest.
            </p>
          </Reveal>
        </section>

        <section className="px-[clamp(20px,5vw,64px)] py-20">
          <Reveal className="mx-auto grid max-w-content items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] bg-cream border border-ink/10 shadow-soft transition-all duration-500 hover:border-teal/40 hover:scale-[1.01]">
              <img
                src="/media/images/project-scoutnexa-boat.png"
                alt="A small paper boat at the tideline, partly dissolving into the sand with ripples trailing behind it"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                What early stage taught me
              </p>
              <h2 className="my-3 font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
                The boat still left ripples.
              </h2>
              <div className="mt-6 grid gap-6">
                {lessons.map((l) => (
                  <div key={l.title} className="border-t border-ink/15 pt-4">
                    <h3 className="font-display text-xl">{l.title}</h3>
                    <p className="mt-1.5 text-ink-soft text-sm leading-relaxed">
                      {l.body}
                    </p>
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
