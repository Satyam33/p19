import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const description =
  "Explore fabrics manufactured by P19 Versatile Fab, Surat: cotton, woolen, polyester, chiffon, satin jacquard, diamond georgette, cotton jacquard, taffeta and polyester jacquard.";

export const metadata = pageMetadata({
  title: "Our Fabrics — Cotton, Polyester, Georgette & Jacquard",
  description,
  path: "/products",
  keywords: ["fabric products", "fabric catalogue Surat", "wholesale fabrics"],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Fabrics by P19 Versatile Fab",
          description,
          url: absoluteUrl("/products"),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: absoluteUrl(`/products/${p.slug}`),
            })),
          },
        }}
      />
      <PageHero
        title="Fabrics in Demand"
        intro="An extensive collection of fabrics we produce for everyday requirements — woven from trusted raw materials and tested for quality."
        crumbs={[{ name: "Products", path: "/products" }]}
      />

      <section aria-label="All fabrics" className="pb-24 md:pb-32">
        <div className="container-site grid gap-x-8 gap-y-16 md:grid-cols-2">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} headingLevel="h2" />
          ))}
        </div>
      </section>

      <CtaBand
        title="Don't see the fabric you need?"
        text="We work with every kind of fabric flowing in the market. Tell us what you are looking for and we will weave it for you."
      />
    </>
  );
}
