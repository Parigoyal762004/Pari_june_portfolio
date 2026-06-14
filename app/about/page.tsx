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
    dates: "Apr 2026 — Present",
    lead: "Built the tech from zero. Closed a mandate that moved real capital.",
    points: [
      "Helped close a fundraising mandate worth up to ₹20 crore, owning the client relationship and the moving parts that turn a pitch into committed capital.",
      "Built the entire tech and GTM stack from scratch: a deal-flow engine that sources investable companies on its own, a personalized outreach system, and the site you are reading this on.",
      "Built a daily content pipeline that turned a daily scramble into a ten-minute morning review and saved close to 10 hours a week.",
    ],
    color: "#FA6781",
  },
  {
    title: "Agentic AI Intern · Oyelabs",
    dates: "Mar 2026 — May 2026",
    lead: "Built agents other people ended up depending on.",
    points: [
      "Built AI agents for live client projects on n8n, Supabase, and large language model APIs.",
      "Designed a global prompt framework that cross-checked SOPs before any workflow ran, saving the manager a full day every week.",
      "Owned prompt engineering across several client projects and kept handoffs clean enough to work the first time.",
    ],
    color: "#59B292",
  },
  {
    title: "Marketing & AI Automation · Halo Interiors",
    dates: "Nov 2025",
    lead: "Took the manual work out of video, then wrote it all down.",
    points: [
      "Automated cross-platform video processing with AI workflows and cut out most of the manual steps.",
      "Stress-tested Convex, Supabase, and Firebase to find what would actually hold at scale.",
      "Documented what broke and what worked, so the next person did not start from zero.",
    ],
    color: "#6B4E7A",
  },
  {
    title: "Product Intern · ScoutNexa",
    dates: "Feb 2026 — Mar 2026",
    lead: "Shipped fast, talked to users, learned how early stage really moves.",
    points: [
      "Researched competitors across Crunchbase to sharpen the product problem statement.",
      "Shipped an MVP in a few weeks with no-code tools, talked to early users, and iterated quickly.",
      "The founder shut the company down, which taught me more about focus and speed than a clean win would have.",
    ],
    color: "#8FCBE3",
  },
];

const wants = [
  { label: "The role", value: "GTM, BD, or founder's office" },
  { label: "The company", value: "Funded, early-stage, moving fast" },
  { label: "The bar", value: "Where my thinking actually matters" },
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
      <main className="overflow-x-hidden">
        {/* HERO · full-height prism ──────────────────────── */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <img
            src="/media/animations/06-contact-wave.gif"
            alt="An ocean wave drawn up and held at the moment just before it breaks"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/88 to-paper/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-paper/25" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              About
            </p>
            <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.2rem,7.5vw,6rem)] font-normal leading-[0.95] tracking-tight">
              I figure things out, move fast, and close what I start.
            </h1>
            <p className="mt-8 max-w-[50ch] text-[clamp(1.15rem,2.2vw,1.45rem)] text-ink/80">
              I help early-stage companies raise capital and scale from scratch.
              I have closed real fundraising mandates, built GTM systems from
              zero, and automated what should never have been manual.
            </p>
            <a
              href="/Pari_Goyal_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="mt-9 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Resume
            </a>
          </Reveal>
        </section>

        {/* PORTRAIT + statement ──────────────────────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <Reveal className="mx-auto grid max-w-content items-center gap-[clamp(28px,5vw,72px)] md:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/media/images/about-portrait.png"
                alt="Illustrated portrait of Pari Goyal with a root system spreading outward behind her"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-normal leading-[1.2]">
              I think in conversations, move in decisions, and execute in code.
              I&apos;d rather ask the dumb question in the room than ship the
              wrong thing.
            </p>
          </Reveal>
        </section>

        {/* EXPERIENCE · editorial timeline rows ──────────── */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Experience
              </p>
              <h2 className="mb-12 mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.04]">
                Four rooms, four problems, the same instinct.
              </h2>
            </Reveal>
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 50}>
                <article className="grid gap-4 border-t-2 py-9 last:border-b-2 md:grid-cols-[1fr_2fr] md:gap-12"
                  style={{ borderTopColor: r.color }}
                >
                  <div>
                    <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] leading-tight">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft">
                      {r.dates}
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[clamp(1.15rem,2vw,1.5rem)] leading-snug">
                      {r.lead}
                    </p>
                    <ul className="mt-4 grid gap-2 text-ink-soft">
                      {r.points.map((pt, j) => (
                        <li key={j} className="flex gap-3">
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: r.color }}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHAT I'M LOOKING FOR · lavender color block ────── */}
        <section className="bg-lavender px-[clamp(20px,5vw,64px)] py-24 text-ink">
          <Reveal className="mx-auto max-w-content">
            <h2 className="max-w-[22ch] font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.04]">
              A seat where thinking and execution both count.
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {wants.map((w) => (
                <div key={w.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink/60">
                    {w.label}
                  </p>
                  <p className="mt-2 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight">
                    {w.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-ink/70">
              Targeting ₹14–20 LPA. If the work is real, I am flexible on the
              rest.
            </p>
          </Reveal>
        </section>

        {/* KINTSUGI quote band ───────────────────────────── */}
        <section className="relative h-[44svh] overflow-hidden">
          <img
            src="/media/animations/02-about-kintsugi.gif"
            alt="Broken ceramic pieces rejoining with the cracks filled in gold, in the style of kintsugi"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-paper/55" />
          <div className="relative z-10 mx-auto flex h-full max-w-content items-center px-[clamp(20px,5vw,64px)]">
            <p className="max-w-[24ch] font-display text-[clamp(1.6rem,4vw,3rem)] leading-tight">
              Like kintsugi, the things I have broken and rebuilt are the parts I
              am proudest of.
            </p>
          </div>
        </section>

        {/* LESSONS ───────────────────────────────────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <Reveal className="mx-auto grid max-w-content items-center gap-[clamp(28px,5vw,72px)] md:grid-cols-2">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/media/images/project-scoutnexa-boat.png"
                alt="A small paper boat at the tideline, partly dissolving into the sand with ripples trailing behind it"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                What early stage taught me
              </p>
              <h2 className="my-3 font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
                The boat still left ripples.
              </h2>
              <div className="mt-6 grid gap-6">
                {lessons.map((l) => (
                  <div key={l.title} className="border-t border-ink/15 pt-4">
                    <h3 className="font-display text-xl">{l.title}</h3>
                    <p className="mt-1.5 text-ink-soft">{l.body}</p>
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
