/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const modes = [
  {
    n: "01",
    title: "I think in conversations",
    body: "Strategy, founders, the room. The deal is won before the deck opens.",
    color: "#59B292",
  },
  {
    n: "02",
    title: "I move in decisions",
    body: "What to build, what to cut, what actually matters this week.",
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
  { figure: "~10 hrs", label: "saved every week by automation", color: "#FFC94D" },
  { figure: "4", label: "companies shipped for, end to end", color: "#6B4E7A" },
];

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* 1 — HERO ─────────────────────────────────────── */}
        <section className="px-[clamp(20px,5vw,64px)] pb-20 pt-32 md:pt-40">
          <div className="mx-auto grid max-w-content items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">
                Capital · GTM · AI automation
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.9rem,7.5vw,5.6rem)] font-normal leading-[0.95] tracking-tight">
                I figure it out, then I build it.
              </h1>
              <p className="mt-7 max-w-[44ch] text-[clamp(1.1rem,2vw,1.35rem)] text-ink-soft">
                I think in conversations, move in decisions, and ship in code.
                Real mandates closed, real systems running in production.
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
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[28px] border border-ink/12 bg-cream/40">
                <img
                  src="/media/animations/01-hero-murmuration.gif"
                  alt="A murmuration of small birds turning together and briefly forming an ordered pattern"
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-paper/85 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
                  Order out of many small parts
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 — APPROACH (triptych) ──────────────────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">
                How I work
              </p>
              <h2 className="mb-12 mt-3 max-w-[14ch] font-display text-[clamp(2.2rem,6vw,4rem)] font-normal leading-[1]">
                Three modes, one person.
              </h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {modes.map((m, i) => (
                <Reveal key={m.n} delay={i * 80}>
                  <div
                    className="h-full rounded-[20px] border-t-4 bg-paper-2 p-7 transition-transform hover:-translate-y-1"
                    style={{ borderTopColor: m.color }}
                  >
                    <span
                      className="font-display text-3xl"
                      style={{ color: m.color }}
                    >
                      {m.n}
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-ink-soft">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — STATS band ───────────────────────────────── */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-20">
          <div className="mx-auto grid max-w-content gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="border-t-2 border-ink/15 pt-5">
                  <p
                    className="font-display text-[clamp(2.6rem,6vw,4rem)] leading-none"
                    style={{ color: s.color }}
                  >
                    {s.figure}
                  </p>
                  <p className="mt-3 max-w-[22ch] text-sm uppercase tracking-wide text-ink-soft">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 5 — SELECTED WORK (grid) ─────────────────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">
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
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 80}>
                  <Link
                    href={`/work/${p.slug}`}
                    className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-ink/12 bg-cream/40 transition-transform hover:-translate-y-1 ${
                      i === 0 ? "md:col-span-2 md:flex-row" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        i === 0 ? "md:w-1/2" : ""
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                          i === 0 ? "h-56 md:h-full" : "h-52"
                        }`}
                      />
                      <span
                        className="absolute left-0 top-0 h-full w-1.5"
                        style={{ background: p.accent }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{ color: p.accent }}
                      >
                        {p.org} · {p.year}
                      </p>
                      <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-ink-soft">{p.tagline}</p>
                      <span className="mt-auto pt-5 text-sm font-semibold text-ink-soft transition-colors group-hover:text-ink">
                        Read the build →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — EXPERIENCE (color block) ─────────────────── */}
        <section className="bg-plum px-[clamp(20px,5vw,64px)] py-24 text-paper">
          <Reveal className="mx-auto grid max-w-content items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-paper/70">
                Experience
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-normal leading-[1.02]">
                First hire. ₹20 crore mandate. Systems that run themselves.
              </h2>
            </div>
            <div>
              <p className="text-[clamp(1.05rem,2vw,1.25rem)] text-paper/85">
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

        {/* 7 — CONTACT (closing block) ──────────────────── */}
        <section className="bg-coral px-[clamp(20px,5vw,64px)] py-28 text-paper">
          <Reveal className="mx-auto max-w-content">
            <h2 className="max-w-[18ch] font-display text-[clamp(2.6rem,7vw,5rem)] font-normal leading-[0.98]">
              The next thing is not here yet. I am already moving toward it.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[clamp(1.1rem,2vw,1.35rem)] text-paper/85">
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
