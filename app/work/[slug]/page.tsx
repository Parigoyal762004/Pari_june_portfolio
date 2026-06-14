/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: `${p.title} (${p.org}, ${p.year}). ${p.tagline}`,
    openGraph: {
      title: `${p.title} | Pari Goyal`,
      description: p.tagline,
      images: [p.image],
    },
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  const blocks = [
    { label: "The problem", text: p.problem },
    { label: "What I built", text: p.build },
    { label: "The result", text: p.result },
  ];

  return (
    <>
      <main>
        <section className="relative flex min-h-[68svh] items-end overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/20" />
          <div className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pb-12 pt-32">
            <Link
              href="/work"
              className="text-sm text-ink-soft hover:text-coral"
            >
              &larr; All work
            </Link>
            <p
              className="mt-4 text-xs font-semibold uppercase tracking-[0.24em]"
              style={{ color: p.accent }}
            >
              {p.org}, {p.year}
            </p>
            <h1 className="mt-3 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-[1.02] tracking-tight">
              {p.title}
            </h1>
            <p className="mt-4 max-w-[42ch] text-[clamp(1.1rem,2vw,1.4rem)] text-ink-soft">
              {p.tagline}
            </p>
          </div>
        </section>

        <section className="px-[clamp(20px,5vw,64px)] py-20">
          <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[1fr_2.2fr]">
            <div className="md:sticky md:top-28 md:self-start bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white tracking-wide transition-all hover:border-teal/50 hover:bg-white/[0.08]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-12">
              {blocks.map((b) => (
                <Reveal key={b.label} className="bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-2xl">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.24em]"
                    style={{ color: p.accent }}
                  >
                    {b.label}
                  </p>
                  <p className="mt-4 text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-ink/90 font-light">
                    {b.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-[clamp(20px,5vw,64px)] py-16">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-content items-center justify-between gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-teal/30 hover:shadow-[0_8px_30px_rgba(10,211,232,0.1)]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                Next project
              </p>
              <p className="mt-2 font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-tight text-white group-hover:text-teal transition-colors">
                {next.title}
              </p>
            </div>
            <span className="text-3xl text-ink-soft transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
              &rarr;
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
