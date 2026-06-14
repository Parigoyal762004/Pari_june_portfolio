/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const modes = [
  {
    n: "01",
    title: "I think in conversations",
    body: "Strategy, founders, the room. The deal is half-won before the deck ever opens.",
    color: "#59B292",
  },
  {
    n: "02",
    title: "I move in decisions",
    body: "What to build, what to cut, what actually matters this week. I make the call and own it.",
    color: "#FFC94D",
  },
  {
    n: "03",
    title: "I ship in code",
    body: "Working systems in production, not slideware. Usually before anyone asked twice.",
    color: "#FA6781",
  },
];

const stats = [
  { figure: "₹20 Cr", label: "fundraising mandate closed", color: "#FA6781" },
  { figure: "1st", label: "hire at Akroventures", color: "#59B292" },
  { figure: "~10 hrs", label: "saved weekly by automation", color: "#FFC94D" },
  { figure: "4", label: "companies shipped for", color: "#6B4E7A" },
];

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* 1 — HERO with animated background ─────────────── */}
        <section className="relative flex min-h-[92svh] items-center overflow-hidden">
          <img
            src="/media/animations/03-skills-loom.gif"
            alt="Many colored threads weaving together into a single patterned cloth"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-paper/30" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              Capital · GTM · AI automation
            </p>
            <h1 className="mt-5 max-w-[16ch] font-display text-[clamp(3rem,9vw,7rem)] font-normal leading-[0.9] tracking-tight">
              I figure it out, then I build it.
            </h1>
            <p className="mt-7 max-w-[46ch] text-[clamp(1.15rem,2.2vw,1.5rem)] text-ink/80">
              I think in conversations, move in decisions, and ship in code. Real
              mandates closed, real systems running in production.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                See the work
              </Link>
              <a
                href="/Pari_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="rounded-full border-[1.5px] border-ink px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Resume
              </a>
            </div>
          </Reveal>
        </section>

        {/* 2 — STATS (inline, no boxes) ─────────────────── */}
        <section className="border-y border-ink/15 bg-paper-2 px-[clamp(20px,5vw,64px)] py-12">
          <div className="mx-auto flex max-w-content flex-wrap justify-between gap-y-8">
            {stats.map((s) => (
              <Reveal
                key={s.label}
                className="min-w-[140px] flex-1 px-2 first:pl-0"
              >
                <p
                  className="font-display text-[clamp(2.4rem,5.5vw,3.6rem)] leading-none"
                  style={{ color: s.color }}
                >
                  {s.figure}
                </p>
                <p className="mt-2 max-w-[20ch] text-sm text-ink-soft">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 3 — APPROACH (editorial rows, no cards) ───────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                How I work
              </p>
              <h2 className="mb-12 mt-3 max-w-[14ch] font-display text-[clamp(2.2rem,6vw,4rem)] font-normal leading-[1]">
                Three modes, one person.
              </h2>
            </Reveal>
            {modes.map((m, i) => (
              <Reveal key={m.n} delay={i * 70}>
                <div className="grid grid-cols-1 items-baseline gap-3 border-t border-ink/15 py-8 last:border-b md:grid-cols-[auto_1fr_1.4fr] md:gap-10">
                  <span
                    className="font-display text-[clamp(2rem,4vw,3rem)] leading-none"
                    style={{ color: m.color }}
                  >
                    {m.n}
                  </span>
                  <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-ink-soft md:text-[1.05rem]">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4 — SELECTED WORK (editorial list, no cards) ──── */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                  Selected work
                </p>
                <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(2.2rem,6vw,4rem)] font-normal leading-[1]">
                  Muddy input in, sorted certainty out.
                </h2>
              </div>
              <Link
                href="/work"
                className="shrink-0 text-sm font-semibold underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
              >
                All work →
              </Link>
            </Reveal>
            <div>
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 50}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-ink/15 py-6 last:border-b md:grid-cols-[3rem_1.5fr_1.3fr_2rem] md:gap-8"
                  >
                    <span
                      className="font-display text-xl"
                      style={{ color: p.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-tight transition-transform group-hover:translate-x-1">
                      {p.title}
                    </h3>
                    <p className="hidden text-ink-soft md:block">{p.tagline}</p>
                    <span className="hidden text-2xl text-ink-soft transition-all group-hover:translate-x-1.5 group-hover:text-ink md:block">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — EXPERIENCE (color block + animated bg) ────── */}
        <section className="relative overflow-hidden bg-plum px-[clamp(20px,5vw,64px)] py-24 text-paper">
          <img
            src="/media/animations/04-experience-mycelium.gif"
            alt="A seed sending a root network outward through soil"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-plum/80" />
          <Reveal className="relative z-10 mx-auto grid max-w-content items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-paper/70">
                Experience
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-normal leading-[1.02]">
                First hire. ₹20 crore mandate. Systems that run themselves.
              </h2>
            </div>
            <div>
              <p className="text-[clamp(1.05rem,2vw,1.25rem)] text-paper/90">
                At Akroventures I built the tech and GTM from zero and helped
                close a fundraising mandate worth up to ₹20 crore. Before that:
                agentic AI at Oyelabs, automation at Halo Interiors, product at
                ScoutNexa.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-block rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Read the full story
              </Link>
            </div>
          </Reveal>
        </section>

        {/* 6 — CONTACT (closing block) ──────────────────── */}
        <section className="bg-coral px-[clamp(20px,5vw,64px)] py-28 text-paper">
          <Reveal className="mx-auto max-w-content">
            <h2 className="max-w-[18ch] font-display text-[clamp(2.6rem,7vw,5rem)] font-normal leading-[0.98]">
              The next thing is not here yet. I am already moving toward it.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[clamp(1.1rem,2vw,1.35rem)] text-paper/90">
              Looking for a funded startup where my thinking and my execution
              both matter. GTM, BD, or founder&apos;s office.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:goyalpari70@gmail.com"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                goyalpari70@gmail.com
              </a>
              <Link
                href="/contact"
                className="rounded-full border-[1.5px] border-paper px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
