import Link from "next/link";
import type { ShowEntry } from "@/content/types";

export default function ExperienceRows({ entries }: { entries: ShowEntry[] }) {
  return (
    <ul className="rows">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <Link href={`/experience/${entry.slug}`}>
            <span className="mono">{entry.years}</span>
            <b>{entry.title}</b>
            <span className="role">{entry.subtitle}</span>
            <span className="arrow">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
