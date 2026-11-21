import Label from "@/components/site/Label";
import WorkCard from "@/components/site/WorkCard";
import { projects } from "@/lib/content";

export const metadata = { title: "Work · Harleen Kaur" };

export default function WorkPage() {
  return (
    <main className="wrap">
      <section className="page-head">
        <Label>Work</Label>
        <h1 className="h-page">Things I&apos;ve built.</h1>
        <p className="lede">Some for a grade, some for a hackathon, one for 20 million Mumbaikars.</p>
      </section>
      <div className="grid">
        {projects.map((p) => (
          <WorkCard key={p.slug} entry={p} />
        ))}
      </div>
    </main>
  );
}
