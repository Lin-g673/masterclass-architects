
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.apiyodesignstudio.co.ke";

  const pages = [
    "",
    "/architecture",
    "/house-plans",
    "/interiors",
    "/3d",
    "/projects",
    "/students",
    "/about",
    "/consultation",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}