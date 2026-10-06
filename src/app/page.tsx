import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import QualityBars from "@/components/QualityBars";
import RotatingBadge from "@/components/RotatingBadge";
import Stats from "@/components/Stats";
import Tabs, { type TabItem } from "@/components/Tabs";
import Testimonials from "@/components/Testimonials";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "P19 Versatile Fab | Weaving Factory & Fabric Manufacturer in Surat",
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

const tabs: TabItem[] = [
  {
    label: "Our Process",
    eyebrow: "From yarn to fabric",
    title: "Every Fabric Is Woven with Care",
    text: "Weaving interlaces two distinct sets of yarns at right angles to form cloth. We source raw material only from trusted suppliers and run it through modern looms, turning quality yarn into consistent, beautiful fabric.",
    image: "/images/weaving-mill.jpg",
    imageAlt: "Weaving looms with yarn bobbins inside a textile mill",
    cta: { href: "/about-us", label: "About Our Mill" },
  },
  {
    label: "Quality Testing",
    eyebrow: "Tested & trusted",
    title: "Fabric That Passes Every Check",
    text: "Each batch is tested for tensile strength, tear strength, seam properties and pilling resistance, so the fabric you receive performs as well as it looks.",
    image: "/images/fabric-quality.jpg",
    imageAlt: "Quality-checked festive fabric with fine embroidery",
    cta: { href: "/about-us#quality", label: "Our Quality Standards" },
  },
  {
    label: "Custom Designs",
    eyebrow: "Made to your brief",
    title: "Your Design, Woven to Perfection",
    text: "Need a fabric in a specific design, weight or colour? Share your requirement and our team will develop it for you — just like we do for designers and garment brands every day.",
    image: "/images/fabric-swatches.jpg",
    imageAlt: "Colourful woven fabric swatches showing custom colour options",
    cta: { href: "/contact-us", label: "Share Your Requirement" },
  },
  {
    label: "Bulk Supply",
    eyebrow: "On time, every time",
    title: "Reliable Supply for Growing Businesses",
    text: "From urgent orders to regular bulk supply, we deliver in comparatively less time than other mills — without compromising on quality.",
    image: "/images/p19-factory-surat.jpg",
    imageAlt: "P19 Versatile Fab factory building and team in Palsana, Surat",
    cta: { href: "/contact-us", label: "Request a Quote" },
  },
];

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fabrics manufactured by P19 Versatile Fab",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: absoluteUrl(`/products/${p.slug}`),
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={productListSchema} />

      {/* Hero */}
      <section className="pt-36 md:pt-44">
        <div className="container-site grid items-end gap-10 pb-14 md:pb-20 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="eyebrow eyebrow-gold mb-6">Weaving Factory · Surat, Gujarat</p>
            <h1 className="display-1">
              Premium Fabric Manufacturer with <em className="font-light">Impeccable</em> Quality
            </h1>
          </div>
        
        </div>
        <div className="relative h-[52vh] max-h-[820px] min-h-[340px] overflow-hidden md:h-[78vh]">
          <Image
            src="/images/fabric-rolls.jpg"
            alt="Rolls of patterned woven fabric produced by P19 Versatile Fab"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* About intro */}
      <section className="py-24 md:py-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/georgette-lehenga.jpg"
                alt="Flowing georgette lehenga made from fabric woven by P19 Versatile Fab"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <RotatingBadge
              text="P19 VERSATILE FAB • SURAT • GUJARAT • "
              className="absolute -bottom-10 right-3 overflow-hidden bg-cream text-ink md:-right-10"
            />
          </div>
          <div className="reveal lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">Premium Quality</p>
            <h2 className="display-2 mt-5">A Weaving Factory for Every Fabric Need</h2>
            <p className="mt-7 max-w-xl">
              We are a weaving factory that makes all kinds of fabric for your needs, working with every type of fabric
              flowing in the market. We source raw materials from legitimate suppliers and turn them into high quality
              fabric.
            </p>
            <ul className="mt-9 max-w-xl divide-y divide-line border-y border-line">
              {[
                "Top Quality Fabric",
                "Wide Modern Collection",
                "Custom Designs on Request",
              ].map((item, i) => (
                <li key={item} className="flex items-baseline gap-4 py-5 font-serif text-xl text-ink md:text-2xl">
                  <span className="text-base text-body/60">{String(i + 1).padStart(2, "0")}.</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about-us" className="btn mt-10">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      {/* Parallax */}
      <section
        aria-label="Inside our weaving mill"
        className="parallax relative flex h-[60vh] max-h-[780px] min-h-[380px] items-center justify-center md:h-[80vh]"
        style={{ backgroundImage: "url(/images/weaving-mill.jpg)" }}
      >
        <div className="absolute inset-0 bg-night/35" />
        <RotatingBadge text="WEAVING • TESTING • DELIVERING • " className="relative text-white" />
      </section>

      {/* What we offer */}
      <section className="pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="container-site reveal text-center">
          <p className="eyebrow">What We Offer</p>
          <h2 className="display-2 mx-auto mt-6 max-w-4xl">
            Our wide range of <em>woven fabrics</em> — from cotton to jacquard — offers solutions for{" "}
            <em>fashion and home textiles</em>
          </h2>
          <Link href="/products" className="btn mt-10">
            View All Fabrics
          </Link>
        </div>
      </section>

      {/* Products */}
      <section aria-label="Featured fabrics" className="pb-24 md:pb-32">
        <div className="container-site grid gap-x-8 gap-y-16 md:grid-cols-2">
          {products.slice(0, 4).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="bg-sand py-24 md:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="reveal">
            <p className="eyebrow">Fabric Testing</p>
            <h2 className="display-2 mt-5">Our Fabric Passes All Quality Checks</h2>
            <p className="mb-12 mt-6 max-w-lg">
              Quality is woven into every metre. Before dispatch, our fabric is tested on the parameters that matter
              most to garment makers.
            </p>
            <QualityBars />
          </div>
          <div className="reveal relative aspect-[5/6] overflow-hidden">
            <Image
              src="/images/fabric-quality.jpg"
              alt="Fine quality festive fabric after testing"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section aria-labelledby="why-title" className="bg-white py-24 md:py-32">
        <div className="container-site">
          <h2 id="why-title" className="sr-only">
            Why choose P19 Versatile Fab
          </h2>
          <Tabs items={tabs} />
        </div>
      </section>

      <Testimonials />

      <CtaBand />
    </>
  );
}
