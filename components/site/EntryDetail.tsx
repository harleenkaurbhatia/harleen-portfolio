import Link from "next/link";
import type { ShowEntry } from "@/content/types";
import Label from "./Label";
import Prose from "./Prose";
import Media from "./Media";
import { explainers } from "./Explainers";

type Props = { entry: ShowEntry; backHref: string; backLabel: string; kicker: string };

export default function EntryDetail({ entry, backHref, backLabel, kicker }: Props) {
  return (
    <main className="wrap">
      <Link href={backHref} className="back">
        ← {backLabel}
      </Link>

      <section className="detail-head">
        <Label>{kicker}</Label>
        <h1 className="h-page">{entry.title}</h1>
        <p className="lede">{entry.synopsis}</p>

        <div className="facts">
          <div>
            <span>{entry.category === "experience" ? "Role" : "Context"}</span>
            <b>{entry.subtitle}</b>
          </div>
          <div>
            <span>Timeline</span>
            <b>{entry.years}</b>
          </div>
          <div>
            <span>Focus</span>
            <b>{entry.tags.join(", ")}</b>
          </div>
        </div>

        {(entry.liveUrl || entry.repoUrl) && (
          <div className="links">
            {entry.liveUrl && (
              <a href={entry.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                {entry.liveLabel ?? "Open app"} ↗
              </a>
            )}
            {entry.repoUrl && (
              <a href={entry.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </section>

      {(entry.video || entry.image || explainers[entry.slug]) && <Media entry={entry} className="shot" />}

      {entry.episodes.map((ep) => (
        <section key={ep.title} className="prose-row">
          <h2>
            {ep.title}
            <span className="sub">{ep.summary}</span>
          </h2>
          <Prose text={ep.body} />
        </section>
      ))}
    </main>
  );
}
