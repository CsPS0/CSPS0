"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["Home", "/"],
  ["Favorites", "/favorites"],
] as const;

export default function SiteNav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-mono text-sm text-zinc-400 hover:text-white">
          CsPS0<span className="text-zinc-500">_</span>
        </Link>
        <ul className="flex gap-6 text-sm">
          {items.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={path === href ? "page" : undefined}
                className={
                  path === href
                    ? "text-white underline decoration-zinc-300 decoration-2 underline-offset-8"
                    : "text-zinc-400 hover:text-white"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
