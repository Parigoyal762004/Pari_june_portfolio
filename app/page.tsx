import Cinema, { Panel } from "@/components/Cinema";
import { projects } from "@/lib/projects";

const panels: Panel[] = [
  {
    id: "intro",
    eyebrow: "Capital · GTM · AI automation",
    heading: "I figure it out, then I build it.",
    body: "I think in conversations, move in decisions, and ship in code. Real mandates closed, real systems running in production, usually before anyone asked twice.",
    anim: "/media/animations/01-hero-murmuration.gif",
    alt: "A murmuration of many small birds turning together and briefly forming an ordered pattern",
    cue: true,
  },
  {
    id: "approach",
    eyebrow: "How I work",
    heading: "Three modes, one person.",
    body: "I think in conversations, move in decisions, and ship in code. Most problems sit in the gap between strategy and execution, and I am comfortable owning the whole stretch, the hard calls included.",
    anim: "/media/animations/03-skills-loom.gif",
    alt: "A loom weaving many colored threads into a single patterned cloth",
  },
  {
    id: "work",
    eyebrow: "Selected work",
    heading: "Muddy input in, sorted certainty out.",
    anim: "/media/animations/05-projects-prism.gif",
    alt: "A glass prism splitting a beam of white light into a band of colors",
    links: projects.map((p, i) => ({
      num: String(i + 1).padStart(2, "0"),
      title: p.title,
      tag: p.tagline,
      href: `/work/${p.slug}`,
    })),
    actions: [{ label: "See all work", href: "/work" }],
  },
  {
    id: "experience",
    eyebrow: "Experience",
    heading: "First hire. ₹20 crore mandate. Systems that run themselves.",
    body: "At Akroventures I built the tech and GTM from zero and helped close a fundraising mandate worth up to ₹20 crore. Before that: agentic AI at Oyelabs, automation at Halo Interiors, product at ScoutNexa.",
    anim: "/media/animations/04-experience-mycelium.gif",
    alt: "Top down view of a seed dropping into soil and sending a root network outward",
    actions: [{ label: "Read the full story", href: "/about" }],
  },
  {
    id: "contact",
    eyebrow: "Contact",
    heading: "The next thing is not here yet. I am already moving toward it.",
    body: "Looking for a real role at a funded startup where my thinking and my execution both matter. GTM, BD, or founder's office.",
    anim: "/media/animations/06-contact-wave.gif",
    alt: "An ocean wave drawn up and held at the moment just before it breaks",
    actions: [
      { label: "Get in touch", href: "/contact" },
      { label: "Resume", href: "/Pari_Goyal_Resume.pdf", external: true },
    ],
  },
];

export default function Home() {
  return <Cinema panels={panels} />;
}
