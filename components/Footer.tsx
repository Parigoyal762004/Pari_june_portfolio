import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-[clamp(20px,5vw,64px)] py-12">
      <div className="mx-auto flex max-w-content flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">Pari Goyal</p>
          <p className="mt-1 text-sm text-ink-soft">
            Building systems, not just outputs.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/work" className="text-ink-soft hover:text-coral">
            Work
          </Link>
          <Link href="/about" className="text-ink-soft hover:text-coral">
            About
          </Link>
          <Link href="/contact" className="text-ink-soft hover:text-coral">
            Contact
          </Link>
          <a
            href="mailto:goyalpari70@gmail.com"
            className="text-ink-soft hover:text-coral"
          >
            goyalpari70@gmail.com
          </a>
          <a
            href="/Pari_Goyal_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="text-ink-soft hover:text-coral"
          >
            Resume
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-content text-xs text-ink-soft">
        {new Date().getFullYear()} Pari Goyal. All rights reserved.
      </p>
    </footer>
  );
}
