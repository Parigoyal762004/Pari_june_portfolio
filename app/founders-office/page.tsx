import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "For your founder's office",
  description:
    "What Pari Goyal would own in her first 30 days in a founder's office — and the proof she's already done it.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/founders-office" },
};

const monthOne = [
  {
    title: "The chaos you keep meaning to systematize",
    body: "The follow-ups, the tracking, the “someone should really own this” list. I'd turn the recurring scramble into systems that run without you in the loop.",
    color: "#FA6781",
  },
  {
    title: "Cross-functional execution",
    body: "I'd sit between you and the moving parts — sales, ops, hiring, fundraising — and make sure the things you decided in a meeting actually ship.",
    color: "#59B292",
  },
  {
    title: "An AI/automation audit — with one thing already built",
    body: "In week one I'd map the three places AI would save your team the most hours, and ship one of them as a working demo. Not a deck.",
    color: "#6B4E7A",
  },
  {
    title: "Fundraising & BD support",
    body: "I've closed real capital. I can own the deal-flow, the outreach, the data room — the parts that turn a pitch into committed money.",
    color: "#8FCBE3",
  },
];

const proof = [
  "Closed a fundraising mandate worth up to ₹20 crore as first hire — owned the client and the close.",
  "Built a deal-flow engine that sources investable companies on its own, plus a personalized outreach system, from zero.",
  "Built a daily content pipeline that saved ~10 hours a week — a daily scramble became a 10-minute morning review.",
  "Designed an AI SOP-check framework at Oyelabs that saved the manager a full day, every week.",
];

export default function FoundersOffice() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* HERO */}
        <section className="px-[clamp(20px,5vw,64px)] pt-32 pb-20">
          <Reveal className="mx-auto w-full max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              For the founder hiring their right hand
            </p>
            <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.2rem,7vw,5.2rem)] font-normal leading-[0.98] tracking-tight">
              I'd take the chaos off your plate — and ship it.
            </h1>
            <p className="mt-8 max-w-[54ch] text-[clamp(1.1rem,2.1vw,1.4rem)] text-ink/80">
              I'm Pari Goyal — a capital, GTM, and AI-automation operator. As the
              first hire at a capital advisory firm I closed a fundraising
              mandate worth up to ₹20 crore and built the firm's entire tech and
              GTM stack from zero. I'm looking to do that again, full-time, for
              one team that moves fast.
            </p>
          </Reveal>
        </section>

        {/* MONTH ONE */}
        <section className="bg-paper-2 px-[clamp(20px,5vw,64px)] py-24">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Your first 30 days with me
              </p>
              <h2 className="mb-12 mt-3 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
                What I'd own, week one.
              </h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {monthOne.map((m, i) => (
                <Reveal key={m.title} delay={i * 60}>
                  <div
                    className="h-full rounded-[20px] border-t-2 bg-paper p-7"
                    style={{ borderTopColor: m.color }}
                  >
                    <h3 className="font-display text-[clamp(1.3rem,2.4vw,1.7rem)] leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-ink-soft">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="px-[clamp(20px,5vw,64px)] py-24">
          <Reveal className="mx-auto max-w-content">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              This isn't hypothetical
            </p>
            <h2 className="my-3 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
              I've already done the job.
            </h2>
            <ul className="mt-8 grid gap-4">
              {proof.map((p, i) => (
                <li key={i} className="flex gap-4 border-t border-ink/12 pt-4 text-[clamp(1.05rem,1.8vw,1.25rem)]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ASK */}
        <section className="bg-lavender px-[clamp(20px,5vw,64px)] py-24 text-ink">
          <Reveal className="mx-auto max-w-content">
            <h2 className="max-w-[24ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.04]">
              If that's the seat you're filling.
            </h2>
            <p className="mt-6 max-w-[56ch] text-[clamp(1.1rem,2vw,1.35rem)] text-ink/80">
              I'm looking for a full-time founder's-office / ops / chief-of-staff
              role with a small, funded team where one person's work visibly
              moves the company. If that's you — now or down the line — I'd love
              to talk.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="mailto:goyalpari70@gmail.com"
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
              >
                goyalpari70@gmail.com
              </a>
              <a
                href="/Pari_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Resume
              </a>
              <a href="/" className="text-sm font-semibold text-ink/70 underline-offset-4 hover:underline">
                See the full portfolio →
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
