import { notFound } from "next/navigation";
import EntryDetail from "@/components/site/EntryDetail";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const entry = projects.find((p) => p.slug === slug);
  return { title: entry ? `${entry.title} · Harleen Kaur` : "Harleen Kaur" };
}

export default async function WorkDetailPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const entry = projects.find((p) => p.slug === slug);
  if (!entry) notFound();
  return <EntryDetail entry={entry} backHref="/work" backLabel="All work" kicker={`Project · ${entry.years}`} />;
}
