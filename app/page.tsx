/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

const modes = [
  { n: "01", line: "I think in conversations.", color: "#59B292" },
  { n: "02", line: "I move in decisions.", color: "#FA6781" },
  { n: "03", line: "I ship in code.", color: "#6B4E7A" },
];

const stats = [
  { figure: "1st", label: "hire at Akroventures" },
  { figure: "~10 hrs", label: "saved every week" },
  { figure: "4", label: "companies shipped for" },
  { figure: "5", label: "production systems built" },
];

export default function Home() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <>
      <main className="overflow-x-hidden">
        {/* 1 — HERO · animated prism background, full height ── */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <img
            src="/media/animations/05-projects-prism.gif"
            alt="A glass prism splitting a beam of white light into a band of colors"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/65 via-transparent to-paper/25" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-20">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              <span>Capital</span>
              <span className="h-3 w-px bg-ink/30" />
              <span>GTM</span>
              <span className="h-3 w-px bg-ink/30" />
              <span>AI automation</span>
            </p>
            <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.4rem,9vw,7.5rem)] font-normal leading-[0.92] tracking-tight">
              I figure it out, then I build it.
            </h1>
            <p className="mt-8 max-w-[46ch] text-[clamp(1.15rem,2.2vw,1.5rem)] text-ink/80">
              I think in conversations, move in decisions, and ship in code. Real
              mandates closed, real systems running in production.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
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

        {/* 2 — STATS · tight numeric strip ──────────────── */}
        <section className="border-y border-ink/15 bg-ink px-[clamp(20px,5vw,64px)] py-10 text-paper">
          <div className="mx-auto flex max-w-content flex-wrap gap-y-6">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                className={`flex-1 min-w-[150px] ${
                  i > 0 ? "md:border-l md:border-paper/20 md:pl-6" : ""
                }`}
              >
                <p className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-none">
                  {s.figure}
                </p>
                <p className="mt-2 text-sm text-paper/65">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 3 — APPROACH · oversized manifesto ───────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-28">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="mb-10 text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                How I work
              </p>
            </Reveal>
            {modes.map((m, i) => (
              <Reveal key={m.n} delay={i * 90}>
                <p
                  className="flex items-baseline gap-3 font-display text-[clamp(1.7rem,7.5vw,5.5rem)] font-normal leading-[1.08] tracking-tight md:gap-8"
                  style={{ color: m.color }}
                >
                  <span className="text-[0.32em] tabular-nums text-ink-soft">
                    {m.n}
                  </span>
                  {m.line}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <p className="mt-10 max-w-[52ch] text-[clamp(1.05rem,2vw,1.3rem)] text-ink-soft">
                Most problems live in the gap between strategy and execution. I
                am comfortable owning the whole stretch, the hard calls included.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 4 — WORK · one featured + slim list ──────────── */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-28">
          <div className="mx-auto max-w-content">
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <h2 className="max-w-[18ch] font-display text-[clamp(2.2rem,6vw,4rem)] font-normal leading-[1]">
                Muddy input in, sorted certainty out.
              </h2>
              <Link
                href="/work"
                className="shrink-0 text-sm font-semibold underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
              >
                All work →
              </Link>
            </Reveal>

            {/* featured */}
            <Reveal>
              <Link
                href={`/work/${featured.slug}`}
                className="group grid items-center gap-8 md:grid-cols-2"
              >
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.22em]"
                    style={{ color: featured.accent }}
                  >
                    Featured · {featured.org}
                  </span>
                  <h3 className="mt-3 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.02]">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-[clamp(1.05rem,2vw,1.2rem)] text-ink-soft">
                    {featured.tagline}
                  </p>
                  <span className="mt-6 inline-block text-sm font-semibold transition-transform group-hover:translate-x-1">
                    Read the build →
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* the rest, as a slim list */}
            <div className="mt-14">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 50}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-ink/15 py-5 last:border-b md:grid-cols-[3rem_1.4fr_1.4fr_2rem] md:gap-8"
                  >
                    <span
                      className="font-display text-lg"
                      style={{ color: p.accent }}
                    >
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <h4 className="font-display text-[clamp(1.2rem,2.4vw,1.7rem)] leading-tight transition-transform group-hover:translate-x-1">
                      {p.title}
                    </h4>
                    <p className="hidden text-sm text-ink-soft md:block">
                      {p.tagline}
                    </p>
                    <span className="hidden text-xl text-ink-soft transition-all group-hover:translate-x-1.5 group-hover:text-ink md:block">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — EXPERIENCE · giant pull-figure ───────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-28">
          <Reveal className="mx-auto grid max-w-content items-center gap-x-12 gap-y-6 md:grid-cols-[auto_1fr]">
            <p className="font-display text-[clamp(3.4rem,15vw,11rem)] leading-[0.85] tracking-tight text-coral">
              ₹20<span className="block text-[0.42em] text-ink">crore</span>
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Experience
              </p>
              <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-[1.08]">
                A fundraising mandate I helped close as the first hire at
                Akroventures.
              </h2>
              <p className="mt-4 max-w-[48ch] text-ink-soft">
                I built the tech and GTM from zero. Before that: agentic AI at
                Oyelabs, automation at Halo Interiors, product at ScoutNexa.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-block rounded-full border-[1.5px] border-ink px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Read the full story
              </Link>
            </div>
          </Reveal>
        </section>

        {/* 6 — CONTACT · color-block finale ─────────────── */}
        <section className="bg-coral px-[clamp(20px,5vw,64px)] py-28 text-paper">
          <Reveal className="mx-auto max-w-content">
            <h2 className="max-w-[18ch] font-display text-[clamp(2rem,7vw,5rem)] font-normal leading-[1]">
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
