import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import QualityBars from "@/components/QualityBars";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { products } from "@/lib/products";
import { organizationId } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const description =
  "Learn about P19 Versatile Fab — a weaving factory in Palsana, Surat producing cotton, woolen, polyester, chiffon, georgette, taffeta and jacquard fabrics from trusted raw materials.";

export const metadata = pageMetadata({
  title: "About Us — Weaving Factory in Surat",
  description,
  path: "/about-us",
  image: { url: "/images/p19-factory-surat.jpg", alt: "P19 Versatile Fab factory in Palsana, Surat" },
  keywords: ["about P19 Versatile Fab", "weaving mill Palsana", "textile company Surat"],
});

const values = [
  {
    title: "Trusted Raw Materials",
    text: "We buy yarn only from legitimate, reliable suppliers, so every fabric starts with a strong foundation.",
  },
  {
    title: "Skilled Weaving",
    text: "Two sets of yarn interlaced at right angles — done with precision on our looms for consistent, flawless cloth.",
  },
  {
    title: "Tested Quality",
    text: "Tensile, tear, seam and pilling tests ensure the fabric performs in real garments, not just on paper.",
  },
  {
    title: "On-Time Delivery",
    text: "Clients rely on us for urgent and bulk orders because we deliver faster than most mills — and on time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About P19 Versatile Fab",
          description,
          url: absoluteUrl("/about-us"),
          mainEntity: { "@id": organizationId },
        }}
      />
      <PageHero title="About Us" crumbs={[{ name: "About Us", path: "/about-us" }]} />

      <section className="pb-24 md:pb-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal grid grid-cols-2 gap-5 lg:col-span-7">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/p19-factory-surat.jpg"
                alt="P19 Versatile Fab factory building with the team in Palsana, Surat"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-16 aspect-[3/4] overflow-hidden">
              <Image
                src="/images/fabric-swatches.jpg"
                alt="Range of colourful woven fabric samples"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">Who We Are</p>
            <h2 className="display-2 mt-5">A Weaving Factory Making Every Kind of Fabric</h2>
            <p className="mt-7">
              P19 Versatile Fab is a weaving factory located in Rajhans Texpa, Palsana — in the heart of Surat&apos;s
              textile hub. We make all kinds of fabric for your needs and work with every kind of fabric flowing in the
              market.
            </p>
            <p className="mt-4">
              Weaving is a method of textile production in which two distinct sets of yarns or threads are interlaced at
              right angles to form a fabric or cloth. We source raw materials from legitimate suppliers and produce high
              quality fabric from them. Some of our fabrics:
            </p>
            <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {products.map((p) => (
                <li key={p.slug} className="flex items-center gap-3">
                  <CheckIcon />
                  <Link href={`/products/${p.slug}`} className="text-ink hover:text-gold">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/products" className="btn mt-10">
              Explore Our Fabrics
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-night py-24 text-white/70 md:py-32">
        <div className="container-site">
          <div className="reveal max-w-2xl">
            <p className="eyebrow !text-gold">Our Promise</p>
            <h2 className="display-2 mt-5 !text-white">We Work with All Types of Fabrics</h2>
          </div>
          <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="reveal bg-night p-8 md:p-10">
                <span className="font-serif text-lg text-gold">{String(i + 1).padStart(2, "0")}.</span>
                <h3 className="mt-6 text-2xl !text-white">{v.title}</h3>
                <p className="mt-4">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Stats />

      <section id="quality" className="bg-sand py-24 md:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="reveal relative aspect-[5/6] overflow-hidden">
            <Image
              src="/images/fabric-quality.jpg"
              alt="Quality tested festive fabric"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">Fabric Testing</p>
            <h2 className="display-2 mt-5">Quality You Can Measure</h2>
            <p className="mb-12 mt-6 max-w-lg">
              Our fabric is tested on the key performance parameters before it leaves the mill — so it stitches well,
              wears well and lasts.
            </p>
            <QualityBars />
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="shrink-0 text-gold" width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M1 5.5 5 9.5 13 1.5" />
    </svg>
  );
}
