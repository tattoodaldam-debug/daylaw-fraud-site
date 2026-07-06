import type { MetadataRoute } from "next";
import { COLUMNS } from "@/lib/columns";
import { PRACTICES } from "@/lib/practices";
import { SITE_URL } from "@/lib/site";

/**
 * '준비 중'(noindex) 상태인 페이지는 콘텐츠 완성 후 여기에 추가합니다:
 * /fraud/investment-fraud/, /fraud/stock-fraud/, /fraud/illegal-fundraising/,
 * /fraud/fraud-crime/, /victim/complaint/, /victim/recovery/, /victim/civil-lawsuit/
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1.0 },
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

  const columnRoutes: MetadataRoute.Sitemap = COLUMNS.map((column) => ({
    url: `${SITE_URL}/column/${column.slug}/`,
    lastModified: new Date(column.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...fraudRoutes, ...columnRoutes];
}
