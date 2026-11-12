import { permanentRedirect } from "next/navigation";
import BrowseView from "@/components/BrowseView";
import type { Category } from "@/content/types";

const VALID_SEASONS: Category[] = ["experience", "projects", "education"];

// Old links like /browse?season=projects now live at /projects.
export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ season?: string }>;
}) {
  const { season } = await searchParams;
  if (VALID_SEASONS.includes(season as Category)) permanentRedirect(`/${season}`);
  return <BrowseView initialSeason="all" />;
}
