import { notFound } from "next/navigation";
import { allShows, getShowBySlug } from "@/lib/content";
import CloseButton from "@/components/CloseButton";
import ShowDetail from "@/components/ShowDetail";

export function generateStaticParams() {
  return allShows.map((show) => ({ slug: show.slug }));
}

export default async function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = getShowBySlug(slug);
  if (!show) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 pb-20 pt-6 md:px-10">
      <div
        className="relative mb-8 h-[280px] overflow-hidden rounded-xl md:h-[340px]"
        style={{ background: `linear-gradient(150deg, ${show.color}, oklch(0.18 0.04 40))` }}
      >
        <div className="card-art-texture absolute inset-0" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, var(--color-bg-elev) 0%, rgba(20,22,24,0.35) 45%, transparent 70%)" }}
        />
        <CloseButton />
        <div className="absolute bottom-7 left-8 right-8">
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">{show.title}</h1>
        </div>
      </div>

      <ShowDetail show={show} />
    </div>
  );
}
