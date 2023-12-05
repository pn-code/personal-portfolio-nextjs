import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://philipnguyen.dev",
      lastModified: new Date(),
    },
  ];
}
