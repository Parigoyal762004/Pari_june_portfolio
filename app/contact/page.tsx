/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pari Goyal. Open to roles in AI automation, product, and growth. Email goyalpari70@gmail.com.",
};

const faqs = [
  {
    q: "What does Pari Goyal do?",
    a: "I build agentic AI systems and automation workflows that get used in production, across marketing, lead generation, and operations for real clients.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "n8n, Supabase, and large language model APIs for AI and automation, along with Claude Code and Cowork, plus Python, Java, React, JavaScript, REST APIs, and SQL.",
  },
  {
    q: "What kind of role are you looking for?",
    a: "Roles where I can build AI products end to end and own outcomes, not just isolated tasks. I work best where AI automation, product, and growth overlap.",
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
          <div className="absolute inset-0 bg-paper/65 backdrop-blur-[2px]" />
          <Reveal className="relative z-10 mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)] pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Contact
            </p>
            <h1 className="my-5 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-[1.02] tracking-tight text-white">
              The next thing is not here yet. I am already moving toward it.
            </h1>
            <p className="max-w-[44ch] text-[clamp(1.05rem,2vw,1.35rem)] text-ink-soft">
              B.E. Computer Science and Engineering, Thapar Institute of
              Engineering and Technology, graduating 2026. Open to roles in AI
              automation, product, and growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="mailto:goyalpari70@gmail.com"
                className="rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-paper transition-all duration-300 shadow-[0_4px_20px_rgba(10,211,232,0.25)] hover:shadow-[0_4px_25px_rgba(10,211,232,0.45)] hover:bg-white hover:text-paper hover:-translate-y-0.5"
              >
                goyalpari70@gmail.com
              </a>
              <a
                href="tel:+916284013296"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
              >
                +91 62840 13296
              </a>
              <a
                href="/Pari_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
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
            <h2 className="mb-10 mt-3 font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04] text-white">
              The short answers.
            </h2>
            <div className="grid gap-0">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border-t border-white/10 py-6 last:border-b"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-display text-[clamp(1.15rem,2.6vw,1.55rem)] text-white hover:text-teal transition-colors">
                    {f.q}
                    <span className="text-xl text-teal transition-transform group-open:rotate-45 font-semibold">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-ink-soft text-sm leading-relaxed">{f.a}</p>
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
