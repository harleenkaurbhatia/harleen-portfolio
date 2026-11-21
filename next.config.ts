import type { NextConfig } from "next";
import { experience } from "./content/experience";
import { projects } from "./content/projects";

const nextConfig: NextConfig = {
  // Keep links from the old "series" site working.
  async redirects() {
    return [
      ...projects.map((p) => ({ source: `/show/${p.slug}`, destination: `/work/${p.slug}`, permanent: true })),
      ...experience.map((e) => ({ source: `/show/${e.slug}`, destination: `/experience/${e.slug}`, permanent: true })),
      { source: "/show/:slug", destination: "/about", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/education", destination: "/about", permanent: true },
      { source: "/browse", destination: "/", permanent: true },
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/blog/:slug", destination: "/writing/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
