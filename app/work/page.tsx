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

        <div className="mx-auto mt-14 max-w-content">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid grid-cols-1 items-center gap-6 border-t border-ink/15 py-8 last:border-b md:grid-cols-[8rem_1.4fr_1fr_2rem]"
              >
                <span className="font-display text-2xl text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-ink-soft">
                    {p.org}, {p.year}
                  </p>
                </div>
                <p className="text-[0.97rem] text-ink-soft">{p.tagline}</p>
                <span className="hidden text-2xl transition-transform group-hover:translate-x-1 md:block">
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
