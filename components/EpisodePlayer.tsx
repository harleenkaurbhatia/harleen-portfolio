"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Episode } from "@/content/types";

type EpisodePlayerProps = {
  episode: Episode | null;
  index: number;
  total: number;
  color: string;
  showTitle: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function EpisodePlayer({ episode, index, total, color, showTitle, onClose, onPrev, onNext }: EpisodePlayerProps) {
  const open = episode !== null;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < total - 1) onNext();
      if (e.key === "ArrowLeft" && index > 0) onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, total, onClose, onNext, onPrev]);

  const playbackSeconds = episode?.readTime ? Math.min(Math.max(parseInt(episode.readTime, 10) * 1.4, 4), 10) : 6;

  return (
    <AnimatePresence>
      {open && episode && (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-bg"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 1100px 620px at 75% 12%, color-mix(in srgb, ${color} 38%, transparent), transparent 62%), linear-gradient(180deg, oklch(0.15 0.02 40) 0%, oklch(0.12 0.015 40) 55%, var(--color-bg) 100%)`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 4px)",
            }}
          />

          <button
            onClick={onClose}
            aria-label="Close player"
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-text backdrop-blur-sm hover:bg-black/70"
          >
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>

          <div className="relative flex min-h-full flex-col justify-center px-8 py-24 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              className="max-w-2xl"
            >
              <div className="mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-accent">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20">
                  <svg viewBox="0 0 20 20" width="8" height="8" fill="currentColor" className="ml-px">
                    <path d="M5 3l12 7-12 7V3z" />
                  </svg>
                </span>
                Now Playing · {showTitle} · Episode {index + 1} of {total}
              </div>

              <h1 className="font-display mb-6 text-4xl font-bold leading-tight md:text-5xl">{episode.title}</h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                className="text-[17px] leading-relaxed text-text-muted"
              >
                {episode.body}
              </motion.p>
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent px-8 pb-6 pt-10 md:px-16">
            <div className="mb-3 h-[3px] w-full overflow-hidden rounded-full bg-white/15">
              <motion.div
                key={`bar-${index}`}
                className="h-full"
                style={{ background: color }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: playbackSeconds, ease: "linear" }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={onPrev}
                disabled={index === 0}
                className="flex items-center gap-2 text-sm font-semibold text-text-muted disabled:opacity-30 hover:text-text"
              >
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="12,4 6,10 12,16" />
                </svg>
                Previous
              </button>
              {episode.readTime && <span className="text-xs text-text-faint">{episode.readTime} read</span>}
              <button
                onClick={onNext}
                disabled={index === total - 1}
                className="flex items-center gap-2 text-sm font-semibold text-text-muted disabled:opacity-30 hover:text-text"
              >
                Next
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="8,4 14,10 8,16" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
