import Link from "next/link";
import { blog } from "@/lib/content";

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-6 md:px-10 md:pt-16">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">Continue the Series</p>
      <h1 className="font-display mb-8 text-3xl font-bold sm:mb-10 sm:text-4xl">Blog</h1>

      <div className="flex flex-col gap-1">
        {blog.map((post, i) => (
          <Link
            key={post.slug}
            href={post.status === "draft" ? "#" : `/blog/${post.slug}`}
            aria-disabled={post.status === "draft"}
            className={`flex items-center gap-3 border-t border-white/8 py-4 sm:gap-5 sm:py-5 first:border-t-0 ${
              post.status === "draft" ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <span
              className="card-art-texture relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md sm:h-[64px] sm:w-[104px]"
              style={{ background: `linear-gradient(150deg, ${post.color}, oklch(0.18 0.05 40))` }}
            />
            <span className="min-w-0 flex-1">
              <span className="mb-1 block text-[11px] font-extrabold uppercase tracking-wide text-accent">
                Ep. {i + 1}
                {post.status === "draft" ? " · Soon" : ""}
              </span>
              <span className="mb-1 block text-[15px] font-bold leading-tight sm:text-[16px]">{post.title}</span>
              <span className="line-clamp-2 text-[13px] leading-snug text-text-muted sm:line-clamp-none">{post.summary}</span>
            </span>
            <span className="hidden flex-shrink-0 text-[12.5px] text-text-faint sm:block">{post.readTime}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
