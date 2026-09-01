"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/browse?season=experience", label: "Experience", season: "experience" },
  { href: "/browse?season=projects", label: "Projects", season: "projects" },
  { href: "/browse?season=education", label: "Education", season: "education" },
  { href: "/blog", label: "Blog" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeSeason = searchParams.get("season");

  function isActive(link: (typeof LINKS)[number]) {
    if (link.label === "Home") return pathname === "/";
    if (link.label === "Blog") return pathname.startsWith("/blog");
    return pathname === "/browse" && activeSeason === link.season;
  }

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-10 bg-gradient-to-b from-bg via-bg/90 to-transparent px-8 py-5 backdrop-blur-sm md:px-14">
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="font-display text-xl font-bold italic tracking-wide"
          style={{ color: "var(--color-logo-red)" }}
        >
          Harleen
        </Link>
        <nav className="hidden items-center gap-1.5 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(link) ? "bg-white/15 text-text" : "text-text-muted hover:text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Search"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:text-text"
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="9" r="6" />
            <line x1="14" y1="14" x2="18" y2="18" />
          </svg>
        </button>
        <button
          aria-label="Notifications"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:text-text"
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 15v-4a5 5 0 0 1 10 0v4l1.5 2h-13L5 15z" />
            <path d="M8.3 18.5a1.7 1.7 0 0 0 3.4 0" />
          </svg>
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent ring-2 ring-bg" />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[oklch(0.5_0.1_40)] to-[oklch(0.32_0.08_30)] text-[11px] font-bold">
          HK
        </div>
      </div>
    </header>
  );
}
