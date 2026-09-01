import { notFound } from "next/navigation";
import Link from "next/link";
import { blog, getBlogBySlug } from "@/lib/content";

export function generateStaticParams() {
  return blog.filter((post) => post.status !== "draft").map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post || post.status === "draft") notFound();

  const paragraphs = post.body.trim().split(/\n\n+/);

  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-16 md:px-10">
      <Link href="/blog" className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted hover:text-text">
        <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="13,4 7,10 13,16" />
        </svg>
        Back to Blog
      </Link>

      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">{post.readTime} · {post.date}</p>
      <h1 className="font-display mb-8 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

      <div className="flex flex-col gap-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[16px] leading-relaxed text-text-muted">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
