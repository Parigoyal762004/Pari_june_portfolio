import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "For your AI & automation",
  description:
    "What Pari Goyal would build in her first 30 days owning the AI and automation layer — and the proof she's already shipped it.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/ai-automation" },
};

const monthOne = [
  {
    title: "An AI opportunity audit — with one already shipped",
    body: "Week one: the three highest-leverage places to put AI in your ops, and one of them built as a working flow you can actually use. Not a slide.",
    color: "#FA6781",
  },
  {
    title: "Internal tools that delete manual work",
    body: "The spreadsheet someone updates by hand, the report that eats a morning, the copy-paste between two systems — I'd automate them end to end.",
    color: "#59B292",
  },
  {
    title: "Agentic workflows in production",
    body: "I've shipped agents on n8n + LLM APIs that other people ended up depending on. I'd own that layer for you and keep it running, not demo it once.",
    color: "#6B4E7A",
  },
  {
    title: "Dashboards & team enablement",
    body: "Make the whole team faster with AI — the tools, the prompts, the playbooks — so adoption actually sticks instead of fizzling after the launch.",
    color: "#8FCBE3",
  },
];

const proof = [
  "Built agentic AI for live client projects at Oyelabs — n8n, Supabase, and LLM APIs.",
  "Designed a global prompt framework that cross-checked SOPs before any workflow ran — saved a full day, every week.",
  "Automated cross-platform video processing at Halo Interiors — cut out most of the manual steps.",
  "Built a deal-flow + outreach engine and a content pipeline that saved ~10 hours a week, end to end.",
];

export default function AiAutomation() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* HERO */}
        <section className="px-[clamp(20px,5vw,64px)] pt-32 pb-20">
          <Reveal className="mx-auto w-full max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              For the founder bringing AI into the company
            </p>
            <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.2rem,7vw,5.2rem)] font-normal leading-[0.98] tracking-tight">
              I'd build the automations your team keeps doing by hand.
            </h1>
            <p className="mt-8 max-w-[54ch] text-[clamp(1.1rem,2.1vw,1.4rem)] text-ink/80">
              I'm Pari Goyal — I build AI agents and automations that real
              businesses end up depending on. n8n, Supabase, LLM APIs, Next.js.
              I'm looking to do that full-time, owning the AI and automation
              layer of one company.
            </p>
          </Reveal>
        </section>

        {/* MONTH ONE */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Your first 30 days with me
              </p>
              <h2 className="mb-12 mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
                What I'd build, week one.
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {monthOne.map((m, i) => (
                <Reveal key={m.title} delay={i * 60}>
                  <div
                    className="h-full rounded-[20px] border-t-2 bg-paper p-7"
                    style={{ borderTopColor: m.color }}
                  >
                    <h3 className="font-display text-[clamp(1.3rem,2.4vw,1.7rem)] leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-ink-soft">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              This isn't hypothetical
            </p>
            <h2 className="my-3 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
              I've already shipped this, four times.
            </h2>
            <ul className="mt-8 grid gap-4">
              {proof.map((p, i) => (
                <li key={i} className="flex gap-4 border-t border-ink/12 pt-4 text-[clamp(1.05rem,1.8vw,1.25rem)]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ASK */}
        <section className="bg-mint px-[clamp(20px,5vw,64px)] py-24 text-ink">
          <Reveal className="mx-auto max-w-content">
            <h2 className="max-w-[24ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
              If that's the layer you need owned.
            </h2>
            <p className="mt-6 max-w-[56ch] text-[clamp(1.1rem,2vw,1.35rem)] text-ink/80">
              I'm looking for a full-time AI / automation role with a small,
              funded team — somewhere I own the build and it visibly makes the
              company faster. If that's you — now or down the line — I'd love to
              talk.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="mailto:goyalpari70@gmail.com"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                goyalpari70@gmail.com
              </a>
              <a
                href="/Pari_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Resume
              </a>
              <a href="/" className="text-sm font-semibold text-ink/70 underline-offset-4 hover:underline">
                See the full portfolio →
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
