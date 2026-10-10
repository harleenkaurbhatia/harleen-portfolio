"use client";

import { useEffect, useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  // close the mobile menu on route change, and never leave the page unscrollable behind it
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, activeSeason]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(link: (typeof LINKS)[number]) {
    if (link.label === "Home") return pathname === "/";
    if (link.label === "Blog") return pathname.startsWith("/blog");
    return pathname === "/browse" && activeSeason === link.season;
  }

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-10 bg-gradient-to-b from-bg via-bg/90 to-transparent px-5 py-5 backdrop-blur-sm sm:px-8 md:px-14">
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

      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="/Harleen_Kaur_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/25 px-4 py-1.5 text-sm font-semibold text-text-muted transition-colors hover:text-text md:block"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/harleenkauriitb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:text-text"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
        <button
          aria-label="Search"
          className="hidden h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:text-text sm:flex"
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="9" r="6" />
            <line x1="14" y1="14" x2="18" y2="18" />
          </svg>
        </button>
        <button
          aria-label="Notifications"
          className="relative hidden h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:text-text sm:flex"
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 15v-4a5 5 0 0 1 10 0v4l1.5 2h-13L5 15z" />
            <path d="M8.3 18.5a1.7 1.7 0 0 0 3.4 0" />
          </svg>
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-accent ring-2 ring-bg" />
        </button>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[oklch(0.5_0.1_40)] to-[oklch(0.32_0.08_30)] text-[11px] font-bold">
          HK
        </div>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-text-muted hover:text-text md:hidden"
        >
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="5" y1="5" x2="15" y2="15" />
                <line x1="15" y1="5" x2="5" y2="15" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-bg px-5 py-4 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-semibold ${
                  isActive(link) ? "bg-white/10 text-text" : "text-text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Harleen_Kaur_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3 text-base font-semibold text-text-muted"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
