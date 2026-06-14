/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pari Goyal. Open to GTM, BD, and founder's office roles at funded startups. Email goyalpari70@gmail.com.",
};

const faqs = [
  {
    q: "What does Pari actually do?",
    a: "I help early-stage companies raise capital and scale from zero. That means closing mandates, building GTM and AI systems from scratch, and automating the work that should never have been manual.",
  },
  {
    q: "What kind of role are you looking for?",
    a: "A real role at a funded startup where my thinking and my execution both matter, GTM, BD, or founder's office. I work best where strategy and execution sit in the same chair, not where I am handed tickets.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "n8n, Supabase, and large language model APIs for AI and automation, plus Claude Code and Cowork, and Python, Java, React, JavaScript, REST APIs, and SQL when I need to drop into code.",
  },
  {
    q: "Where are you studying?",
    a: "I am completing a B.E. in Computer Science and Engineering at Thapar Institute of Engineering and Technology, graduating in 2026.",
  },
];

export default function Contact() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* HERO · full-height kintsugi ───────────────────── */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden py-28">
          <img
            src="/media/animations/02-about-kintsugi.gif"
            alt="Broken ceramic pieces rejoining with the cracks filled in gold, in the style of kintsugi"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-paper/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper/75 via-transparent to-paper/30" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              Contact
            </p>
            <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,6.5vw,4.6rem)] font-normal leading-[1] tracking-tight">
              The next thing is not here yet. I am already moving toward it.
            </h1>
            <p className="mt-6 max-w-[48ch] text-[clamp(1.05rem,2vw,1.35rem)] text-ink/80">
              B.E. Computer Science, Thapar Institute, graduating 2026. Looking
              for a funded startup where my thinking and execution both matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:goyalpari70@gmail.com"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                goyalpari70@gmail.com
              </a>
              <a
                href="tel:+916284013296"
                className="rounded-full border-[1.5px] border-ink px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                +91 62840 13296
              </a>
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

        {/* FAQ · accordion ───────────────────────────────── */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-24">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              FAQ
            </p>
            <h2 className="mb-10 mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[1.04]">
              The short answers.
            </h2>
            <div className="grid gap-0">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-t border-ink/15 py-6 last:border-b"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[clamp(1.2rem,2.8vw,1.7rem)] transition-colors hover:text-coral">
                    {f.q}
                    <span className="shrink-0 text-xl text-coral transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
