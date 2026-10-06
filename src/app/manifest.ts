import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "P19 Fab",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5ed",
    theme_color: "#f6f5ed",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: site.logo, sizes: "831x619", type: "image/png" },
    ],
  };
}
