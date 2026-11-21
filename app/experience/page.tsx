import Label from "@/components/site/Label";
import ExperienceRows from "@/components/site/ExperienceRows";
import { experience } from "@/lib/content";

export const metadata = { title: "Experience · Harleen Kaur" };

export default function ExperiencePage() {
  return (
    <main className="wrap">
      <section className="page-head">
        <Label>Experience</Label>
        <h1 className="h-page">Where I&apos;ve worked.</h1>
        <p className="lede">Real deadlines, real ambiguity, the occasional 2am Slack message.</p>
      </section>
      <ExperienceRows entries={experience} />
    </main>
  );
}
