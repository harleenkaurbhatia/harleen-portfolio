import type { ShowEntry } from "@/content/types";
import { explainers } from "./Explainers";

/** Fills a 16:9 box: real video, then screenshot, then a coded explainer, then the title. */
export default function Media({ entry, className = "" }: { entry: ShowEntry; className?: string }) {
  const Explainer = explainers[entry.slug];
  let content: React.ReactNode;

  if (entry.video) {
    content = (
      <video src={entry.video} poster={entry.poster} autoPlay muted loop playsInline preload="metadata" aria-label={`${entry.title} demo`} />
    );
  } else if (entry.image) {
    // eslint-disable-next-line @next/next/no-img-element
    content = <img src={entry.image} alt={`${entry.title} screenshots`} loading="lazy" />;
  } else if (Explainer) {
    content = <Explainer />;
  } else {
    content = <span className="thumb-title">{entry.title}</span>;
  }

  return <div className={`media ${className}`}>{content}</div>;
}
