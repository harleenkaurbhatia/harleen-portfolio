import CloseButton from "@/components/CloseButton";
import SeasonBrowser from "@/components/SeasonBrowser";
import { experience, projects, education } from "@/lib/content";
import type { Category } from "@/content/types";

const VALID_SEASONS: Category[] = ["experience", "projects", "education"];

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ season?: string }>;
}) {
  const { season } = await searchParams;
  const initialSeason = VALID_SEASONS.includes(season as Category) ? (season as Category) : "experience";

  return (
    <div className="mx-auto max-w-4xl px-6 pb-20 pt-6 md:px-10">
      <div
        className="relative mb-2 overflow-hidden rounded-xl px-9 pb-9 pt-11"
        style={{
          background:
            "radial-gradient(ellipse 700px 320px at 30% 0%, oklch(0.28 0.06 45 / 0.55), transparent 65%), linear-gradient(180deg, oklch(0.2 0.025 48) 0%, var(--color-bg) 100%)",
        }}
      >
        <CloseButton />
        <h1 className="font-display mb-1 text-4xl font-bold">Harleen Kaur</h1>
        <p className="mb-4.5 text-[13px] italic text-text-faint">The Complete Story — All Seasons</p>
        <p className="mb-5 text-[13px] text-text-muted">
          2022 – Present <span className="mx-2">·</span> 3 Seasons <span className="mx-2">·</span> Product &amp; AI
        </p>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2.5 rounded-md bg-text px-5.5 py-2.75 text-[13.5px] font-bold text-bg">
            <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
              <path d="M5 3l12 7-12 7V3z" />
            </svg>
            Play Latest Episode
          </button>
          <button
            aria-label="Add to list"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-text"
          >
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="10" y1="4" x2="10" y2="16" />
              <line x1="4" y1="10" x2="16" y2="10" />
            </svg>
          </button>
          <button
            aria-label="Mark as reviewed"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-text"
          >
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 9l3 3 7-7" />
              <circle cx="10" cy="10" r="8" />
            </svg>
          </button>
        </div>
      </div>

      <div className="pt-8">
        <SeasonBrowser
          initialSeason={initialSeason}
          showsByCategory={{ experience, projects, education }}
        />
      </div>
    </div>
  );
}
