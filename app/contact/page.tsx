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
      <main>
        <section className="relative flex min-h-[60svh] items-center overflow-hidden">
          <img
            src="/media/animations/06-contact-wave.gif"
            alt="An ocean wave drawn up and held at the moment just before it breaks"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/40" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Contact
            </p>
            <h1 className="my-5 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-[1.02] tracking-tight">
              The next thing is not here yet. I am already moving toward it.
            </h1>
            <p className="max-w-[46ch] text-[clamp(1.05rem,2vw,1.35rem)] text-ink-soft">
              B.E. Computer Science, Thapar Institute, graduating 2026. Looking
              for a funded startup where my thinking and execution both matter.
              GTM, BD, or founder's office.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="mailto:goyalpari70@gmail.com"
                className="rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-paper transition-all duration-300 shadow-soft hover:bg-ink hover:text-paper hover:-translate-y-0.5"
              >
                goyalpari70@gmail.com
              </a>
              <a
                href="tel:+916284013296"
                className="rounded-full border border-ink/20 bg-cream/50 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-cream hover:border-ink/40 hover:-translate-y-0.5"
              >
                +91 62840 13296
              </a>
              <a
                href="/Pari_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="rounded-full border border-ink/20 bg-cream/50 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-cream hover:border-ink/40 hover:-translate-y-0.5"
              >
                Download resume
              </a>
            </div>
          </Reveal>
        </section>

        <section className="px-[clamp(20px,5vw,64px)] py-20">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              FAQ
            </p>
            <h2 className="mb-10 mt-3 font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
              The short answers.
            </h2>
            <div className="grid gap-0">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-t border-ink/15 py-6 last:border-b"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-display text-[clamp(1.15rem,2.6vw,1.55rem)] hover:text-teal transition-colors">
                    {f.q}
                    <span className="text-xl text-teal transition-transform group-open:rotate-45 font-semibold">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-ink-soft text-sm leading-relaxed">
                    {f.a}
                  </p>
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
