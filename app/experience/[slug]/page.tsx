import { notFound } from "next/navigation";
import EntryDetail from "@/components/site/EntryDetail";
import { experience } from "@/lib/content";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/experience/[slug]">) {
  const { slug } = await params;
  const entry = experience.find((e) => e.slug === slug);
  return { title: entry ? `${entry.title} · Harleen Kaur` : "Harleen Kaur" };
}

export default async function ExperienceDetailPage({ params }: PageProps<"/experience/[slug]">) {
  const { slug } = await params;
  const entry = experience.find((e) => e.slug === slug);
  if (!entry) notFound();
  return (
    <EntryDetail entry={entry} backHref="/experience" backLabel="All experience" kicker={`Experience · ${entry.years}`} />
  );
}
