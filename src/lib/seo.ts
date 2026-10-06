import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  keywords?: string[];
  absoluteTitle?: boolean;
};

export const defaultImage = { url: "/images/og-p19-versatile-fab.jpg", alt: `${site.name} — ${site.tagline}` };

export function pageMetadata({ title, description, path, image, keywords, absoluteTitle }: PageMeta): Metadata {
  const ogImage = image ?? defaultImage;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords, ...site.keywords.slice(0, 4)] : site.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
