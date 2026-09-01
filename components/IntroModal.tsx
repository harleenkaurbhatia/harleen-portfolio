"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function IntroModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-lg rounded-xl bg-bg-elev p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-text hover:bg-white/20"
            >
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            </button>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">Intro · 1:24 (script)</p>
            <h2 className="font-display mb-4 text-2xl font-bold">Hi, I&apos;m Harleen.</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-text-muted">
              I&apos;m a product person who ended up building AI agents on the side, and somewhere along the way
              stopped being able to tell which one is the &quot;real&quot; job. At P&amp;G I run capital projects
              that touch real budgets and real factory floors. At MagiLabs, I build things solo that ship in
              days, not quarters.
            </p>
            <p className="text-[15px] leading-relaxed text-text-muted">
              This site is both halves, told the way I actually think about my own career: not a single
              straight line, but a series with seasons. Press play on any of them.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
