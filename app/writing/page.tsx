import Link from "next/link";
import Label from "@/components/site/Label";
import { blog } from "@/lib/content";

export const metadata = { title: "Writing · Harleen Kaur" };

export default function WritingPage() {
  return (
    <main className="wrap">
      <section className="page-head">
        <Label>Writing</Label>
        <h1 className="h-page">Notes on product and AI.</h1>
      </section>
      <ul className="rows">
        {blog.map((post) => {
          const draft = post.status === "draft";
          const row = (
            <>
              <span className="mono">{draft ? "Coming soon" : post.date}</span>
              <b>{post.title}</b>
              <span className="role">{post.summary}</span>
              <span className="arrow">{draft ? "" : "→"}</span>
            </>
          );
          return (
            <li key={post.slug}>
              {draft ? <a aria-disabled style={{ opacity: 0.5 }}>{row}</a> : <Link href={`/writing/${post.slug}`}>{row}</Link>}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
