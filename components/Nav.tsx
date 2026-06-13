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
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-4 md:px-10">
      <Link
        href="/"
        className="rounded-full bg-paper/70 px-3 py-1 font-display text-xl tracking-tight backdrop-blur-md"
      >
        PARI
      </Link>
      <div className="flex gap-1 rounded-full bg-paper/70 px-2 py-1 text-sm backdrop-blur-md">
        {links.map(([label, href]) => {
          const active = path === href || path.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3 py-1 transition-colors ${
                active ? "bg-ink text-paper" : "text-ink-soft hover:text-coral"
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
