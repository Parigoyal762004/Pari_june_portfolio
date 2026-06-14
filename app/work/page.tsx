/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected AI automation and agentic workflow projects by Pari Goyal: lead qualification, investment sourcing, daily content, and video automation.",
};

export default function WorkIndex() {
  return (
    <>
      <main className="px-[clamp(20px,5vw,64px)] pb-24 pt-32">
        <Reveal className="mx-auto max-w-content">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
            Selected work
          </p>
          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.6rem,7vw,5rem)] font-normal leading-[1.0] tracking-tight">
            Each one took a manual mess and made it run on its own.
          </h1>
        </Reveal>

        <div className="mx-auto mt-16 max-w-content space-y-4">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-1 items-center gap-6 border border-white/5 bg-white/[0.02] rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-teal/30 hover:shadow-[0_8px_30px_rgba(10,211,232,0.1)] md:grid-cols-[4rem_1.4fr_1fr_2rem]"
              >
                <span className="font-display text-2xl text-teal font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight text-white group-hover:text-teal transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-1.5 text-xs font-semibold tracking-wider uppercase opacity-80" style={{ color: p.accent }}>
                    {p.org} &bull; {p.year}
                  </p>
                </div>
                <p className="text-[0.97rem] text-ink-soft leading-relaxed">{p.tagline}</p>
                <span className="hidden text-2xl text-ink-soft transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white md:block">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
