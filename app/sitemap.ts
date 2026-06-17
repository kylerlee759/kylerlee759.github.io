import type { MetadataRoute } from "next";
import { seo } from "@/store";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${seo.siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${seo.siteUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
