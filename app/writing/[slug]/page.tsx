import { notFound } from "next/navigation";
import Link from "next/link";
import Label from "@/components/site/Label";
import Prose from "@/components/site/Prose";
import { publishedPosts } from "@/lib/content";

export function generateStaticParams() {
  return publishedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} · Harleen Kaur` : "Harleen Kaur" };
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = publishedPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="wrap narrow">
      <Link href="/writing" className="back">
        ← All writing
      </Link>
      <section className="detail-head">
        <Label>
          {post.readTime} · {post.date}
        </Label>
        <h1 className="h-page">{post.title}</h1>
        <p className="lede">{post.summary}</p>
      </section>
      <Prose text={post.body} />
    </main>
  );
}
