import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { education } from "@/content/education";
import { blog } from "@/content/blog";

export const publishedPosts = blog.filter((post) => post.status !== "draft");

export const featuredSlugs = ["curio", "sahayak", "mumbai-flood-warning-system", "dynamic-ad-placement"];

export { experience, projects, education, blog };
