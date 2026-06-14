"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between gap-2 px-4 py-3 md:px-12 md:py-5">
      <Link
        href="/"
        className="rounded-full bg-cream/80 border border-ink/15 px-3.5 py-1.5 font-display text-lg tracking-tight backdrop-blur-md text-ink transition-colors hover:border-ink/40 md:text-xl"
      >
        PARI
      </Link>
      <div className="flex gap-0.5 rounded-full bg-cream/80 border border-ink/15 px-1.5 py-1.5 text-xs backdrop-blur-md md:gap-1 md:px-2 md:text-sm">
        {links.map(([label, href]) => {
          const active = path === href || path.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-2.5 py-1 transition-colors md:px-3.5 ${
                active
                  ? "bg-ink text-paper font-semibold"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
