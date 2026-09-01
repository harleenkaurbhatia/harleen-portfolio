import Hero from "@/components/Hero";
import Row from "@/components/Row";
import { Card, EpisodeCard } from "@/components/Card";
import { experience, projects, education, blog } from "@/lib/content";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <div className="px-8 pb-16 pt-2 md:px-14">
        <Row title="Experience">
          {experience.map((show) => (
            <Card
              key={show.slug}
              href={`/show/${show.slug}`}
              title={show.title}
              subtitle={`${show.subtitle} · ${show.years}`}
              color={show.color}
              badge={show.tags[0]}
            />
          ))}
        </Row>

        <Row title="Projects">
          {projects.map((show) => (
            <Card
              key={show.slug}
              href={`/show/${show.slug}`}
              title={show.title}
              subtitle={show.subtitle}
              color={show.color}
            />
          ))}
        </Row>

        <Row title="Education">
          {education.map((show) => (
            <Card
              key={show.slug}
              href={`/show/${show.slug}`}
              title={show.title}
              subtitle={show.subtitle}
              color={show.color}
              badge={show.tags[0]}
            />
          ))}
        </Row>

        <Row title="Blog — Continue the Series" href="/blog">
          {blog.map((post, i) => (
            <EpisodeCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              subtitle={post.readTime}
              color={post.color}
              badge={post.status === "draft" ? `Ep. ${i + 1} · Soon` : `Ep. ${i + 1}`}
              progress={post.status === "draft" ? undefined : 100}
              dimmed={post.status === "draft"}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
