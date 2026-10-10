"use client";

import { useState } from "react";
import IntroModal from "./IntroModal";

export default function Hero() {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden px-5 pb-8 sm:px-8 sm:pb-0 md:h-[560px] md:px-14">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 78% 20%, oklch(0.32 0.09 40 / 0.55), transparent 60%), linear-gradient(180deg, oklch(0.19 0.03 45) 0%, oklch(0.155 0.02 48) 55%, var(--color-bg) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <button
        onClick={() => setIntroOpen(true)}
        className="absolute right-14 top-[108px] z-10 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="flex h-[78px] w-[78px] items-center justify-center rounded-full border-2 border-white/55 bg-black/30 backdrop-blur-sm">
          <svg viewBox="0 0 20 20" width="22" height="22" fill="currentColor" className="ml-1">
            <path d="M5 3l12 7-12 7V3z" />
          </svg>
        </span>
        <span className="rounded-full bg-black/55 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">Intro · 1:24</span>
      </button>

      <div className="absolute bottom-10 right-14 z-10 hidden gap-2.5 md:flex">
        <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/60 px-3.5 py-2 text-[12.5px] font-semibold backdrop-blur-sm">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" className="text-accent">
            <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15l-5.6 3.1 1.4-6.3L1 8.5l6.4-.6L10 1z" />
          </svg>
          Antler Crackathon — Top 75
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/60 px-3.5 py-2 text-[12.5px] font-semibold backdrop-blur-sm">
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <polyline points="2,14 8,8 12,12 18,4" />
            <polyline points="13,4 18,4 18,9" />
          </svg>
          $70M+ Value Shipped
        </div>
      </div>

      <div className="relative max-w-xl pb-8 md:pb-13">
        <h1 className="font-display mb-5 flex flex-wrap items-center gap-3 text-4xl font-bold leading-none sm:gap-4 sm:text-5xl md:text-6xl">
          Harleen <span className="inline-block border-[3px] border-text px-4 pb-2 pt-1">Kaur</span>
        </h1>
        <div className="mb-4 flex flex-wrap items-center gap-2.5 text-sm font-semibold text-text-muted">
          <span>Original Series</span>
          <span className="h-[3px] w-[3px] rounded-full bg-text-faint" />
          <span>Product · AI · Growth</span>
          <span className="h-[3px] w-[3px] rounded-full bg-text-faint" />
          <span>2022 – Present</span>
          <span className="h-[3px] w-[3px] rounded-full bg-text-faint" />
          <span className="border border-text-faint px-1.5 py-px text-[11px] font-bold text-text-muted">HK</span>
        </div>
        <p className="mb-6 text-[17px] leading-relaxed text-text-muted">
          I turn ambiguous problems into shipped products — from capital projects at P&amp;G to AI agents built
          solo overnight. This is the story so far, told the way I actually think about it: as a series.
        </p>
        <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
          <button
            onClick={() => setIntroOpen(true)}
            className="flex items-center gap-2 rounded-md bg-text px-4 py-2.5 text-sm font-bold text-bg sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[15px]"
          >
            <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" className="sm:h-[15px] sm:w-[15px]">
              <path d="M5 3l12 7-12 7V3z" />
            </svg>
            Play Intro
          </button>
          <a
            href="/browse?season=experience"
            className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold backdrop-blur-sm sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[15px]"
          >
            <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" className="sm:h-4 sm:w-4">
              <circle cx="10" cy="10" r="8" />
              <line x1="10" y1="9.2" x2="10" y2="14" />
              <circle cx="10" cy="6.3" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            More Info
          </a>
          <a
            href="/Harleen_Kaur_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold backdrop-blur-sm sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[15px]"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/harleenkauriitb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold backdrop-blur-sm sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[15px]"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <IntroModal open={introOpen} onClose={() => setIntroOpen(false)} />
    </div>
  );
}
