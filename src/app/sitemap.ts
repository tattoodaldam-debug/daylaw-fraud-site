import type { MetadataRoute } from "next";
import { COLUMNS } from "@/lib/columns";
import { PRACTICES } from "@/lib/practices";
import { VICTIM_TOPICS } from "@/lib/victimTopics";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1.0 },
    { path: "/fraud/", priority: 0.9 },
    { path: "/attorneys/", priority: 0.8 },
    { path: "/contact/", priority: 0.9 },
    { path: "/faq/", priority: 0.8 },
    { path: "/column/", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));

  const fraudRoutes: MetadataRoute.Sitemap = PRACTICES.map((practice) => ({
    url: `${SITE_URL}/fraud/${practice.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const victimRoutes: MetadataRoute.Sitemap = VICTIM_TOPICS.map((topic) => ({
    url: `${SITE_URL}/victim/${topic.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const columnRoutes: MetadataRoute.Sitemap = COLUMNS.map((column) => ({
    url: `${SITE_URL}/column/${column.slug}/`,
    lastModified: new Date(column.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...fraudRoutes, ...victimRoutes, ...columnRoutes];
}
