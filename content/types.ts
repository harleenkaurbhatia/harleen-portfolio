export type Episode = {
  title: string;
  summary: string;
  body: string;
  readTime?: string;
};

export type Category = "experience" | "projects" | "education";

export type ShowEntry = {
  slug: string;
  category: Category;
  title: string;
  subtitle?: string;
  years: string;
  tags: string[];
  synopsis: string;
  color: string;
  episodes: Episode[];
  repoUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  status?: "published" | "draft";
  color: string;
  body: string;
};

