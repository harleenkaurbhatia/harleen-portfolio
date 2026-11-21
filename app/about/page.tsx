import Label from "@/components/site/Label";
import Prose from "@/components/site/Prose";
import { education } from "@/lib/content";

export const metadata = { title: "About · Harleen Kaur" };

const bio = `I'm a product person who ended up building AI agents on the side, and somewhere along the way stopped being able to tell which one is the "real" job. At P&G I run capital projects that touch real budgets and real factory floors. At MagiLabs, I build things solo that ship in days, not quarters.

This site is both halves: the work that pays the bills, and the things I build because I can't stop myself.`;

export default function AboutPage() {
  return (
    <main className="wrap">
      <section className="page-head">
        <Label>About</Label>
        <h1 className="h-page">Hi, I&apos;m Harleen.</h1>
      </section>
      <section className="prose-row">
        <h2>Background</h2>
        <Prose text={bio} />
      </section>

      {education.map((edu) => (
        <div key={edu.slug}>
          <section className="prose-row">
            <h2>
              Education
              <span className="sub">{edu.years}</span>
            </h2>
            <div className="prose">
              <p>
                <b>{edu.title}</b>
                <br />
                {edu.subtitle} · {edu.tags.filter((t) => t !== "Completed").join(" · ")}
              </p>
              <p>{edu.synopsis}</p>
            </div>
          </section>
          {edu.episodes.map((ep) => (
            <section key={ep.title} className="prose-row">
              <h2>
                {ep.title}
                <span className="sub">{ep.summary}</span>
              </h2>
              <Prose text={ep.body} />
            </section>
          ))}
        </div>
      ))}
    </main>
  );
}
