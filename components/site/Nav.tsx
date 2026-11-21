"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PixelMark from "./PixelMark";

const links = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="nav-bar">
      <div className="wrap nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <PixelMark />
          Harleen Kaur
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/resume" className="btn btn-dark">
          Resume
        </Link>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="nav-mobile">
          {[...links, { href: "/resume", label: "Resume" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
