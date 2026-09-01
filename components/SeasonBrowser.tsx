"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Category, ShowEntry } from "@/content/types";
import { seasonMeta, seasonOrder } from "@/lib/content";

type SeasonKey = Category | "all";

export default function SeasonBrowser({
  initialSeason,
  showsByCategory,
}: {
  initialSeason: SeasonKey;
  showsByCategory: Record<Category, ShowEntry[]>;
}) {
  const router = useRouter();
  const [season, setSeason] = useState<SeasonKey>(initialSeason);
  const [open, setOpen] = useState(true);

  function pick(key: SeasonKey) {
    setSeason(key);
    setOpen(false);
    router.replace(key === "all" ? "/browse" : `/browse?season=${key}`, { scroll: false });
  }

  const allEntries = seasonOrder.flatMap((k) => showsByCategory[k]);
  const entries: ShowEntry[] = season === "all" ? allEntries : showsByCategory[season];

  const label = season === "all" ? "All Seasons" : seasonMeta[season].label;
  const noteBadge = season === "all" ? "Everything" : seasonMeta[season].noteBadge;
  const note = season === "all" ? "The whole archive, in one order." : seasonMeta[season].note;

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold md:text-[25px]">Episodes</h2>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2.5 rounded border-[1.5px] border-text px-4.5 py-2.5 text-sm font-bold"
        >
          {label}
          <svg
            viewBox="0 0 20 20"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points={open ? "5,12 10,7 15,12" : "5,8 10,13 15,8"} />
          </svg>
        </button>
      </div>

      <p className="mb-4.5 flex flex-wrap items-center gap-2.5 text-[13px] text-text-muted">
        <span className="flex-shrink-0 border border-text-faint px-1.5 py-px text-[11px] font-bold text-text-muted">
          {noteBadge}
        </span>
        {note}
      </p>

      <div>
        {entries.map((show, i) => (
          <Link
            key={show.slug}
            href={`/show/${show.slug}`}
            className={`flex items-center gap-5 px-3.5 py-4.5 ${
              i === 0 ? "rounded-lg bg-bg-raised" : "border-t border-white/8"
            }`}
          >
            <span className="font-display w-7 flex-shrink-0 text-center text-2xl font-bold text-text-faint">
              {i + 1}
            </span>
            <span
              className="card-art-texture relative h-[86px] w-[148px] flex-shrink-0 overflow-hidden rounded-md"
              style={{ background: `linear-gradient(150deg, ${show.color}, oklch(0.18 0.05 40))` }}
            />
            <span className="min-w-0 flex-1">
              <span className="mb-1 block text-base font-bold">
                {show.title}
                {show.subtitle ? ` — ${show.subtitle}` : ""}
              </span>
              <span className="block text-[13px] leading-snug text-text-muted">{show.synopsis}</span>
            </span>
            <span className="flex-shrink-0 whitespace-nowrap text-[13px] text-text-faint">{show.years}</span>
          </Link>
        ))}
      </div>

      {open && (
        <div className="absolute right-0 top-[52px] z-10 w-[300px] rounded-md border border-white/12 bg-bg-raised py-2 shadow-2xl">
          {seasonOrder.map((key) => (
            <button
              key={key}
              onClick={() => pick(key)}
              className={`flex w-full items-baseline justify-between gap-3 px-5 py-3 text-left text-[15px] font-bold ${
                season === key ? "text-accent" : "text-text"
              }`}
            >
              {seasonMeta[key].label}
              <span className="text-[12.5px] font-medium text-text-faint">
                {showsByCategory[key].length} {showsByCategory[key].length === 1 ? "Entry" : "Entries"}
              </span>
            </button>
          ))}
          <div className="my-1.5 h-px bg-white/10" />
          <button onClick={() => pick("all")} className="w-full px-5 py-3 text-left text-sm font-bold">
            See All Entries
          </button>
        </div>
      )}
    </div>
  );
}
