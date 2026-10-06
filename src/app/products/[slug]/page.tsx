import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { getProduct, products } from "@/lib/products";
import { organizationId } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
    image: { url: product.image, alt: product.imageAlt },
    keywords: product.keywords,
  });
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const index = products.findIndex((p) => p.slug === product.slug);
  const related = [1, 2].map((offset) => products[(index + offset) % products.length]);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.metaDescription,
          image: absoluteUrl(product.image),
          url: absoluteUrl(`/products/${product.slug}`),
          category: "Fabric",
          brand: { "@type": "Brand", name: site.name },
          manufacturer: { "@id": organizationId },
        }}
      />
      <PageHero
        title={product.name}
        intro={product.excerpt}
        crumbs={[
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="reveal relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(min-width: 1290px) 1230px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-20">
            <div className="reveal lg:col-span-7">
              <p className="eyebrow">About this fabric</p>
              <h2 className="display-2 mt-5">Why Choose Our {product.shortName}</h2>
              <div className="prose-fab mt-7 text-lg">
                {product.description.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>

              <h3 className="mt-14 text-3xl">Key Features</h3>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {product.features.map((f, i) => (
                  <li key={f} className="flex items-baseline gap-4 py-4 font-serif text-xl text-ink">
                    <span className="text-base text-body/60">{String(i + 1).padStart(2, "0")}.</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="reveal lg:col-span-5">
              <div className="bg-white p-8 md:p-10">
                <h3 className="text-3xl">Ideal For</h3>
                <ul className="mt-6 space-y-3">
                  {product.applications.map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <span className="h-px w-5 bg-gold" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-line pt-8">
                  <p className="font-serif text-2xl text-ink">Enquire about {product.shortName}</p>
                  <p className="mt-3">Custom designs, colours and bulk quantities available.</p>
                  <div className="mt-7 flex flex-col gap-3">
                    <Link href={`/contact-us?fabric=${product.slug}`} className="btn">
                      Request a Quote
                    </Link>
                    <a href={site.phoneHref} className="btn btn-outline">
                      Call {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="bg-white py-24 md:py-32">
        <div className="container-site">
          <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Explore more</p>
              <h2 id="related-title" className="display-2 mt-5">
                Related Fabrics
              </h2>
            </div>
            <Link href="/products" className="link-underline text-lg">
              View all fabrics
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} index={products.indexOf(p)} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
