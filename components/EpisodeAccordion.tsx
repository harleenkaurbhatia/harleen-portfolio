"use client";

import type { Episode } from "@/content/types";

type EpisodeAccordionProps = {
  episodes: Episode[];
  color: string;
  onPlay: (index: number) => void;
};

export default function EpisodeAccordion({ episodes, color, onPlay }: EpisodeAccordionProps) {
  return (
    <div>
      {episodes.map((ep, i) => (
        <div key={ep.title} id={`episode-${i}`} className="border-t border-white/8 first:border-t-0">
          <button onClick={() => onPlay(i)} className="flex w-full items-center gap-5 py-5 text-left">
            <span className="font-display w-7 flex-shrink-0 text-center text-2xl font-bold text-text-faint">
              {i + 1}
            </span>

            <span className="group relative h-[64px] w-[104px] flex-shrink-0 overflow-hidden rounded-md">
              <span
                className="card-art-texture absolute inset-0"
                style={{ background: `linear-gradient(150deg, ${color}, oklch(0.18 0.05 40))` }}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm">
                  <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor" className="ml-0.5">
                    <path d="M5 3l12 7-12 7V3z" />
                  </svg>
                </span>
              </span>
            </span>

            <span className="min-w-0 flex-1">
              <span className="mb-0.5 block text-[15px] font-bold">{ep.title}</span>
              <span className="block text-[13px] leading-snug text-text-muted">{ep.summary}</span>
            </span>

            <span className="flex flex-shrink-0 items-center gap-3">
              {ep.readTime && <span className="text-[12.5px] text-text-faint">{ep.readTime}</span>}
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-text-faint">
                <svg viewBox="0 0 20 20" width="10" height="10" fill="currentColor" className="ml-0.5">
                  <path d="M5 3l12 7-12 7V3z" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
