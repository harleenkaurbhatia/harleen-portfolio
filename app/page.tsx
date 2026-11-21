import Link from "next/link";
import Label from "@/components/site/Label";
import WorkCard from "@/components/site/WorkCard";
import ExperienceRows from "@/components/site/ExperienceRows";
import { experience, projects, featuredSlugs } from "@/lib/content";

const featured = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

export default function HomePage() {
  return (
    <main>
      <section className="wrap hero">
        <h1 className="h-display">
          Hey, I&apos;m Harleen.
          <br />
          I turn ambiguous problems
          <br />
          into shipped products.
        </h1>
        <p className="lede">
          From capital projects at P&amp;G to AI agents built solo overnight. Product, AI and growth, with an
          IIT Bombay engineering degree underneath.
        </p>
        <div className="hero-actions">
          <Link href="/work" className="btn btn-dark">
            View work
          </Link>
          <Link href="/contact" className="btn btn-line">
            Get in touch
          </Link>
        </div>

        <div className="proof">
          <div>
            <b>$70M+</b>
            <span>value shipped</span>
          </div>
          <div>
            <b>Top 3</b>
            <span>of 1,200+ teams, Antler Crackathon</span>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <Label>Selected work</Label>
          <Link href="/work" className="more">
            All projects →
          </Link>
        </div>
        <div className="grid">
          {featured.map((p) => (
            <WorkCard key={p.slug} entry={p} />
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <Label>Experience</Label>
          <Link href="/experience" className="more">
            Full timeline →
          </Link>
        </div>
        <ExperienceRows entries={experience} />
      </section>
    </main>
  );
}
