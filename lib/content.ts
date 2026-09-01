import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { education } from "@/content/education";
import { blog } from "@/content/blog";
import type { Category, ShowEntry } from "@/content/types";

export const allShows: ShowEntry[] = [...experience, ...projects, ...education];

export function getShowBySlug(slug: string): ShowEntry | undefined {
  return allShows.find((show) => show.slug === slug);
}

export function getShowsByCategory(category: Category): ShowEntry[] {
  if (category === "experience") return experience;
  if (category === "projects") return projects;
  return education;
}

export const seasonMeta: Record<Category, { label: string; note: string; noteBadge: string }> = {
  experience: {
    label: "Experience",
    noteBadge: "Ongoing",
    note: "Real deadlines, real ambiguity, the occasional 2am Slack message.",
  },
  projects: {
    label: "Projects",
    noteBadge: "Shipped",
    note: "Some for a grade, some for a hackathon, one for 20 million Mumbaikars.",
  },
  education: {
    label: "Education",
    noteBadge: "Completed",
    note: "The origin story — now streaming the full run.",
  },
};

export const seasonOrder: Category[] = ["experience", "projects", "education"];

export function getBlogBySlug(slug: string) {
  return blog.find((post) => post.slug === slug);
}

export { experience, projects, education, blog };
