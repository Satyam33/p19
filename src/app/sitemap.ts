import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/products"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/about-us"), lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: absoluteUrl("/contact-us"), lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: absoluteUrl(`/products/${p.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl(p.image)],
  }));

  return [...pages, ...productPages];
}
