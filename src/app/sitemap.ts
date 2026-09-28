import type { MetadataRoute } from "next";
import { housePlans } from "./house-plans/plansData";

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

  const mainPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));

  const housePlanPages: MetadataRoute.Sitemap = housePlans.map((plan) => ({
    url: `${baseUrl}/house-plans/${plan.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...mainPages, ...housePlanPages];
}