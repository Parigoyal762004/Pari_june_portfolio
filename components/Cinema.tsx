"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type PanelLink = { num: string; title: string; tag: string; href: string };
export type PanelAction = { label: string; href: string; external?: boolean };
export type Panel = {
  id: string;
  eyebrow: string;
  heading: string;
  body?: string;
  anim: string;
  alt: string;
  links?: PanelLink[];
  actions?: PanelAction[];
  cue?: boolean;
};

const ACCENTS = ["#59B292", "#FFC94D", "#FA6781", "#6B4E7A", "#8FCBE3"];

const META: Record<string, { name: string; note: string }> = {
  intro: { name: "Murmuration", note: "order emerging from many small parts" },
  approach: { name: "Loom", note: "threads become cloth only where they cross" },
  work: { name: "Prism", note: "one input, cleanly separated outputs" },
  experience: { name: "Mycelium", note: "one seed, a whole network" },
  contact: { name: "Wave", note: "all the energy, just before it breaks" },
};

function Caption({ id, accent }: { id: string; accent: string }) {
  const m = META[id];
  if (!m) return null;
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-baseline gap-2 bg-paper/85 px-4 py-2.5 backdrop-blur-sm">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: accent }} />
      <span className="font-display text-sm">{m.name}</span>
      <span className="truncate text-xs text-ink-soft">{m.note}</span>
    </div>
  );
}

function Actions({ actions }: { actions: PanelAction[] }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {actions.map((a, i) => {
        const cls = `rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
          i === 0 ? "bg-ink text-paper hover:shadow-soft" : "border-[1.5px] border-ink"
        }`;
        return a.external ? (
          <a key={a.href} href={a.href} target="_blank" rel="noopener" className={cls}>
            {a.label}
          </a>
        ) : (
          <Link key={a.href} href={a.href} className={cls}>
            {a.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Cinema({ panels }: { panels: Panel[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(panels[0]?.id);
  const total = panels.length;

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root, threshold: 0.55 }
    );
    root.querySelectorAll("[data-cine]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (id?: string) =>
    id && document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={containerRef}
      className="no-scrollbar h-[100svh] snap-y snap-mandatory overflow-y-scroll"
    >
      <div className="fixed right-5 top-1/2 z-[90] hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {panels.map((p) => (
          <button
            key={p.id}
            aria-label={`Go to ${p.eyebrow}`}
            onClick={() => goTo(p.id)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              active === p.id ? "scale-125 bg-ink" : "bg-ink/25 hover:bg-ink/50"
            }`}
          />
        ))}
      </div>

      {panels.map((p, i) => {
        const accent = ACCENTS[i % ACCENTS.length];

        if (i === 0) {
          return (
            <section
              key={p.id}
              id={p.id}
              data-cine
              className="relative flex h-[100svh] w-full snap-start items-center"
            >
              <img src={p.anim} alt={p.alt} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-paper/20" />
              <div className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
                  {p.eyebrow}
                </p>
                <h1 className="mt-4 max-w-[15ch] font-display text-[clamp(2.8rem,8vw,6rem)] font-normal leading-[0.98] tracking-tight">
                  {p.heading}
                </h1>
                {p.body && (
                  <p className="mt-5 max-w-[42ch] text-[clamp(1.05rem,2vw,1.35rem)] text-ink-soft">
                    {p.body}
                  </p>
                )}
                {p.actions && <Actions actions={p.actions} />}
              </div>
              <div className="absolute bottom-6 left-[clamp(20px,5vw,64px)] z-10 flex items-baseline gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
                <span className="font-display text-sm">{META[p.id]?.name}</span>
                <span className="text-xs text-ink-soft">{META[p.id]?.note}</span>
              </div>
              {p.cue && (
                <button
                  onClick={() => goTo(panels[1]?.id)}
                  aria-label="Scroll down"
                  className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-2xl text-ink-soft"
                >
                  &darr;
                </button>
              )}
            </section>
          );
        }

        const mediaLeft = i % 2 === 0;
        const bg = i % 2 === 1 ? "bg-paper-2" : "bg-paper";

        return (
          <section
            key={p.id}
            id={p.id}
            data-cine
            className={`relative flex min-h-[100svh] w-full snap-start items-center ${bg}`}
          >
            <div className="mx-auto grid w-full max-w-content items-center gap-[clamp(28px,5vw,72px)] px-[clamp(20px,5vw,64px)] py-28 md:grid-cols-2">
              <div className={mediaLeft ? "md:order-2" : ""}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none" style={{ color: accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1" style={{ background: accent, opacity: 0.4 }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
                    {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: accent }}>
                  {p.eyebrow}
                </p>
                <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.03] tracking-tight">
                  {p.heading}
                </h2>
                {p.body && (
                  <p className="mt-4 max-w-[44ch] text-[clamp(1.02rem,1.8vw,1.25rem)] text-ink-soft">
                    {p.body}
                  </p>
                )}
                {p.links && (
                  <div className="mt-6">
                    {p.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-t border-ink/15 py-3 last:border-b hover:bg-ink/[0.03]"
                      >
                        <span className="font-display text-sm text-ink-soft">{l.num}</span>
                        <span className="font-display text-[clamp(1.05rem,2vw,1.3rem)] leading-tight">
                          {l.title}
                        </span>
                        <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}
                {p.actions && <Actions actions={p.actions} />}
              </div>

              <div className={mediaLeft ? "md:order-1" : ""}>
                <div className="relative mx-auto aspect-[4/3] max-h-[64svh] w-full overflow-hidden rounded-[20px] bg-cream shadow-soft">
                  <img src={p.anim} alt={p.alt} className="absolute inset-0 h-full w-full object-cover" />
                  <Caption id={p.id} accent={accent} />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
