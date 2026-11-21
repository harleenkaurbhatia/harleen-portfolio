import Link from "next/link";
import type { ShowEntry } from "@/content/types";
import Thumb from "./Thumb";

export default function WorkCard({ entry }: { entry: ShowEntry }) {
  return (
    <Link href={`/work/${entry.slug}`} className="card">
      <Thumb entry={entry} />
      <div className="card-body">
        <div className="meta">
          {entry.subtitle} · {entry.years}
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.synopsis}</p>
        <div className="chips">
          {entry.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
