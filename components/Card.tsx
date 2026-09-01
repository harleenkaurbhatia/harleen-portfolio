"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Card({
  href,
  title,
  subtitle,
  color,
  badge,
}: {
  href: string;
  title: string;
  subtitle?: string;
  color: string;
  badge?: string;
}) {
  return (
    <Link href={href} className="block flex-shrink-0" style={{ width: 220 }}>
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.15 }}
        className="card-art-texture relative h-[124px] overflow-hidden rounded-lg shadow-lg"
        style={{ background: `linear-gradient(150deg, ${color}, oklch(0.18 0.05 40))` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(6,6,8,0.92) 0%, rgba(6,6,8,0.15) 58%, transparent 78%)",
          }}
        />
        {badge && (
          <div className="absolute left-2.5 top-2.5 rounded bg-black/65 px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wide text-accent">
            {badge}
          </div>
        )}
        <div className="absolute bottom-2.5 left-3 right-3">
          <p className="mb-0.5 text-sm font-bold leading-tight">{title}</p>
          {subtitle && <p className="text-[11px] text-text-muted">{subtitle}</p>}
        </div>
      </motion.div>
    </Link>
  );
}

export function EpisodeCard({
  href,
  title,
  subtitle,
  color,
  badge,
  progress,
  dimmed,
}: {
  href: string;
  title: string;
  subtitle?: string;
  color: string;
  badge: string;
  progress?: number;
  dimmed?: boolean;
}) {
  return (
    <Link href={href} className="block flex-shrink-0" style={{ width: 220 }}>
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.15 }}
        className="card-art-texture relative h-[124px] overflow-hidden rounded-lg shadow-lg"
        style={{
          background: `linear-gradient(150deg, ${color}, oklch(0.18 0.05 40))`,
          opacity: dimmed ? 0.6 : 1,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(6,6,8,0.92) 0%, rgba(6,6,8,0.15) 58%, transparent 78%)",
          }}
        />
        <div className="absolute left-2.5 top-2.5 rounded bg-black/65 px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-wide text-accent">
          {badge}
        </div>
        <div className="absolute bottom-2.5 left-3 right-3">
          <p className="mb-0.5 text-sm font-bold leading-tight">{title}</p>
          {subtitle && <p className="text-[11px] text-text-muted">{subtitle}</p>}
        </div>
        {typeof progress === "number" && (
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
            <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
          </div>
        )}
      </motion.div>
    </Link>
  );
}
