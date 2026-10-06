import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about-us.html", destination: "/about-us", permanent: true },
      { source: "/product.html", destination: "/products", permanent: true },
      { source: "/our-process.html", destination: "/products", permanent: true },
      { source: "/contact-us.html", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
