import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://philipnguyen.dev",
      lastModified: new Date().toString(),
    },
    {
      url: "https://restaurant.philipnguyen.dev",
      lastModified: new Date().toString(),
    },
    {
      url: "https://fitheroes.philipnguyen.dev",
      lastModified: new Date().toString(),
    },
    {
      url: "https://shop.philipnguyen.dev",
      lastModified: new Date().toString(),
    },
  ];
}
