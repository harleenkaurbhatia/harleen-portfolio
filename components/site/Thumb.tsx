import type { ShowEntry } from "@/content/types";

export default function Thumb({ entry, className = "" }: { entry: ShowEntry; className?: string }) {
  return (
    <div className={`thumb ${className}`}>
      {entry.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={entry.image} alt={`${entry.title} screenshot`} className="thumb-phone" loading="lazy" />
      ) : (
        <span className="thumb-title">{entry.title}</span>
      )}
    </div>
  );
}
