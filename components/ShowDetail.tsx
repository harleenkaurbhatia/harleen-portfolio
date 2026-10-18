"use client";

import { useState } from "react";
import type { ShowEntry } from "@/content/types";
import EpisodeAccordion from "./EpisodeAccordion";
import EpisodePlayer from "./EpisodePlayer";

export default function ShowDetail({ show }: { show: ShowEntry }) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const total = show.episodes.length;

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-3.5">
        <button
          onClick={() => setPlayingIndex(0)}
          className="flex items-center gap-2.5 rounded-md bg-text px-6 py-3 text-sm font-bold text-bg"
        >
          <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
            <path d="M5 3l12 7-12 7V3z" />
          </svg>
          Play Episode 1
        </button>
        <button
          aria-label="Add to list"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-text"
        >
          <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="10" y1="4" x2="10" y2="16" />
            <line x1="4" y1="10" x2="16" y2="10" />
          </svg>
        </button>
        <button
          aria-label="Mark as reviewed"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-text"
        >
          <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 9l3 3 7-7" />
            <circle cx="10" cy="10" r="8" />
          </svg>
        </button>
        {show.liveUrl && (
          <a
            href={show.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-[13px] font-semibold text-text hover:bg-white/20"
          >
            <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3v10M5.5 8.5 10 13l4.5-4.5M4 17h12" />
            </svg>
            {show.liveLabel ?? "Open app"}
          </a>
        )}
        {show.repoUrl && (
          <a
            href={show.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-[13px] font-semibold text-text-muted hover:text-text"
          >
            <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-3.5">
        <span className="text-[13px] text-text-muted">{show.years}</span>
        {show.subtitle && (
          <>
            <span className="h-[3px] w-[3px] rounded-full bg-text-faint" />
            <span className="text-[13px] text-text-muted">{show.subtitle}</span>
          </>
        )}
        <span className="h-[3px] w-[3px] rounded-full bg-text-faint" />
        <span className="text-[13px] text-text-muted">{show.episodes.length} Episodes</span>
        {show.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent"
            style={{ borderColor: "color-mix(in srgb, var(--color-accent) 50%, transparent)", background: "color-mix(in srgb, var(--color-accent) 10%, transparent)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-text-muted">{show.synopsis}</p>

      <h2 className="mb-1 text-xl font-bold">Episodes</h2>
      <EpisodeAccordion episodes={show.episodes} color={show.color} onPlay={setPlayingIndex} />

      <EpisodePlayer
        episode={playingIndex !== null ? show.episodes[playingIndex] : null}
        index={playingIndex ?? 0}
        total={total}
        color={show.color}
        showTitle={show.title}
        onClose={() => setPlayingIndex(null)}
        onPrev={() => setPlayingIndex((p) => (p !== null && p > 0 ? p - 1 : p))}
        onNext={() => setPlayingIndex((p) => (p !== null && p < total - 1 ? p + 1 : p))}
      />
    </>
  );
}
