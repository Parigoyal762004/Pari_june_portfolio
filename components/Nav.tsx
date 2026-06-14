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
        className="rounded-full bg-slate-950/40 border border-white/10 px-4 py-1.5 font-display text-xl tracking-tight backdrop-blur-md text-white transition-all hover:border-teal hover:shadow-[0_0_15px_rgba(10,211,232,0.25)]"
      >
        PARI
      </Link>
      <div className="flex gap-1 rounded-full bg-slate-950/40 border border-white/10 px-2 py-1.5 text-sm backdrop-blur-md">
        {links.map(([label, href]) => {
          const active = path === href || path.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3.5 py-1 transition-all duration-300 ${
                active
                  ? "bg-teal text-paper font-semibold shadow-[0_0_12px_rgba(10,211,232,0.3)]"
                  : "text-ink-soft hover:text-white hover:bg-white/5"
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
