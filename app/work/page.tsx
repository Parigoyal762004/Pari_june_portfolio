/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected systems by Pari Goyal: deal-flow sourcing, personalized outreach, AI lead qualification, daily content, and video automation. Built end to end, running in production.",
};

export default function WorkIndex() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* HERO · full-height prism ──────────────────────── */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <img
            src="/media/animations/04-experience-mycelium.gif"
            alt="A seed sending a branching root network outward through soil"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/88 to-paper/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-paper/25" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              Selected work
            </p>
            <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.3rem,8vw,7rem)] font-normal leading-[0.95] tracking-tight">
              Each one took a manual mess and made it run on its own.
            </h1>
            <p className="mt-8 max-w-[44ch] text-[clamp(1.15rem,2.2vw,1.5rem)] text-ink/80">
              Five systems, four companies, one operator. Built end to end, used
              in production.
            </p>
          </Reveal>
        </section>

        {/* PROJECTS · alternating large showcases ─────────── */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content space-y-24 md:space-y-32">
            {projects.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={p.slug}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group grid items-center gap-8 md:grid-cols-2 md:gap-14"
                  >
                    <div
                      className={`overflow-hidden rounded-[24px] ${
                        flip ? "md:order-2" : ""
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className={flip ? "md:order-1" : ""}>
                      <div className="flex items-center gap-4">
                        <span
                          className="font-display text-[clamp(2rem,4vw,3rem)] leading-none"
                          style={{ color: p.accent }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="h-px flex-1"
                          style={{ background: p.accent, opacity: 0.45 }}
                        />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                          {p.org} · {p.year}
                        </span>
                      </div>
                      <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3.2rem)] leading-[1.02]">
                        {p.title}
                      </h2>
                      <p className="mt-4 max-w-[44ch] text-[clamp(1.05rem,2vw,1.25rem)] text-ink-soft">
                        {p.tagline}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <li
                            key={s}
                            className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-soft"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-block text-sm font-semibold transition-transform group-hover:translate-x-1">
                        Read the build →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* CTA · color block ──────────────────────────────── */}
        <section className="bg-teal px-[clamp(20px,5vw,64px)] py-24">
          <Reveal className="mx-auto flex max-w-content flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-[16ch] font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.02] text-ink">
              Want the same kind of system for your team?
            </h2>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
