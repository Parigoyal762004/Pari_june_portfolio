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
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-5 md:px-12">
      <Link
        href="/"
        className="rounded-full bg-cream/80 border border-ink/15 px-4 py-1.5 font-display text-xl tracking-tight backdrop-blur-md text-ink transition-colors hover:border-ink/40"
      >
        PARI
      </Link>
      <div className="flex gap-1 rounded-full bg-cream/80 border border-ink/15 px-2 py-1.5 text-sm backdrop-blur-md">
        {links.map(([label, href]) => {
          const active = path === href || path.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3.5 py-1 transition-colors ${
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
