import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { products } from "@/lib/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-white/60">
      <div className="container-site pb-14 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${site.name} — Home`} className="inline-block">
              <Image
                src={site.logoLight}
                alt={`${site.name} logo`}
                width={831}
                height={619}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-8 font-serif text-4xl font-light leading-tight text-white md:text-5xl">
              We weave &amp; create fabrics that last
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-[1fr_1.35fr_1fr] lg:col-span-7">
            <div>
              <h2 className="eyebrow !text-white">Address</h2>
              <address className="mt-5 not-italic leading-relaxed">
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {site.address.full}
                </a>
              </address>
            </div>
            <div>
              <h2 className="eyebrow !text-white">Say Hello</h2>
              <ul className="mt-5 space-y-2">
                <li>
                  <a href={`mailto:${site.email}`} className="[overflow-wrap:anywhere] hover:text-gold">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="font-serif text-2xl text-white hover:text-gold">
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="eyebrow !text-white">Mill Hours</h2>
              <ul className="mt-5 space-y-3">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span className="block text-white">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <h2 className="eyebrow !text-white">Our Fabrics</h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-7 text-sm md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>
            © {year} {site.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
