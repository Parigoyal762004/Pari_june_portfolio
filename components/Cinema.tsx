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
      <div className="fixed right-6 top-1/2 z-[90] hidden -translate-y-1/2 flex-col gap-4 md:flex">
        {panels.map((p, idx) => {
          const isActive = active === p.id;
          const panelAccent = ACCENTS[idx % ACCENTS.length];
          return (
            <button
              key={p.id}
              aria-label={`Go to ${p.eyebrow}`}
              onClick={() => goTo(p.id)}
              className={`h-2 w-2 rounded-full transition-all duration-350 ${
                isActive ? "scale-150" : "bg-ink/25 hover:bg-ink/50 hover:scale-125"
              }`}
              style={{
                backgroundColor: isActive ? panelAccent : undefined,
                boxShadow: isActive ? `0 0 12px ${panelAccent}` : undefined,
              }}
            />
          );
        })}
      </div>

      {panels.map((p, i) => {
        const accent = ACCENTS[i % ACCENTS.length];

        if (i === 0) {
          return (
            <section
              key={p.id}
              id={p.id}
              data-cine
              className="relative flex min-h-[100svh] w-full snap-start items-center"
            >
              <div className="mx-auto grid w-full max-w-content items-center gap-[clamp(28px,5vw,72px)] px-[clamp(20px,5vw,64px)] py-28 md:grid-cols-2 relative z-10">
                <div>
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-cream/50 px-3 py-1 text-xs font-semibold text-teal">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-pulse-ring" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                    </span>
                    Open to roles
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: accent }}>
                    {p.eyebrow}
                  </p>
                  <h1 className="mt-4 max-w-[15ch] font-display text-[clamp(2.8rem,6vw,4.6rem)] font-normal leading-[0.98] tracking-tight">
                    {p.heading}
                  </h1>
                  {p.body && (
                    <p className="mt-5 max-w-[42ch] text-[clamp(1.05rem,2vw,1.35rem)] text-ink-soft">
                      {p.body}
                    </p>
                  )}
                  {p.actions && <Actions actions={p.actions} />}
                </div>
                
                <div>
                  <div 
                    className="relative mx-auto aspect-[4/3] max-h-[64svh] w-full overflow-hidden rounded-[24px] bg-cream backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                    style={{ 
                      border: `1px solid ${accent}25`,
                      boxShadow: `0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${accent}15`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accent;
                      e.currentTarget.style.boxShadow = `0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 25px ${accent}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${accent}25`;
                      e.currentTarget.style.boxShadow = `0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${accent}15`;
                    }}
                  >
                    <img src={p.anim} alt={p.alt} className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-300 hover:opacity-100" />
                    <Caption id={p.id} accent={accent} />
                  </div>
                </div>
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
                  className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-2xl text-ink-soft hover:text-ink"
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
                  <div className="mt-6 space-y-2.5">
                    {p.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border border-ink/10 bg-cream/40 rounded-xl px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-cream/70 hover:border-teal/30 hover:shadow-[0_4px_20px_rgba(95,199,164,0.10)]"
                      >
                        <span className="font-display text-sm text-teal font-semibold">{l.num}</span>
                        <span className="font-display text-[clamp(1.05rem,2vw,1.25rem)] leading-tight text-ink group-hover:text-teal transition-colors">
                          {l.title}
                        </span>
                        <span className="text-lg text-ink-soft transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-ink">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}
                {p.actions && <Actions actions={p.actions} />}
              </div>

              <div className={mediaLeft ? "md:order-1" : ""}>
                <div 
                  className="relative mx-auto aspect-[4/3] max-h-[64svh] w-full overflow-hidden rounded-[24px] bg-cream backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                  style={{ 
                    border: `1px solid ${accent}25`,
                    boxShadow: `0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${accent}15`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent;
                    e.currentTarget.style.boxShadow = `0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 25px ${accent}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${accent}25`;
                    e.currentTarget.style.boxShadow = `0 20px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${accent}15`;
                  }}
                >
                  <img src={p.anim} alt={p.alt} className="absolute inset-0 h-full w-full object-cover opacity-85 transition-opacity duration-300 hover:opacity-100" />
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
