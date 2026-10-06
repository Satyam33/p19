import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { organizationId } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

const description = `Contact P19 Versatile Fab, fabric manufacturer in Palsana, Surat. Call ${site.phone}, email ${site.email} or visit us at ${site.address.full}.`;

export const metadata = pageMetadata({
  title: "Contact Us — Get a Fabric Quote",
  description,
  path: "/contact-us",
  keywords: ["contact fabric manufacturer Surat", "fabric quote", "P19 Versatile Fab contact"],
});

export default function ContactPage() {
  const cards = [
    {
      title: "Visit the Mill",
      body: site.address.full,
      href: site.mapLink,
      external: true,
      icon: <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
    },
    {
      title: "Call Us",
      body: site.phone,
      href: site.phoneHref,
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
      ),
    },
    {
      title: "Mail Us",
      body: site.email,
      href: `mailto:${site.email}`,
      icon: <path d="M3 5h18v14H3zM3 6l9 7 9-7" />,
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact P19 Versatile Fab",
          description,
          url: absoluteUrl("/contact-us"),
          mainEntity: { "@id": organizationId },
        }}
      />
      <PageHero
        title="Get in Touch"
        intro="Have a fabric requirement or a custom design in mind? Reach out — we would love to weave it for you."
        crumbs={[{ name: "Contact Us", path: "/contact-us" }]}
      />

      <section aria-label="Contact details" className="pb-20">
        <div className="container-site">
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="reveal group bg-cream p-10 text-center transition-colors hover:bg-white"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  {c.icon}
                </svg>
              </span>
              <h2 className="mt-6 text-2xl">{c.title}</h2>
              <p className="mx-auto mt-3 max-w-xs break-words">{c.body}</p>
            </a>
          ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow">Send an enquiry</p>
            <h2 className="display-2 mt-5">Tell Us What You Need</h2>
            <p className="mt-6">
              Share the fabric type, design and quantity you need. Our team will get back to you with the best solution.
            </p>
            <div className="mt-10 border-t border-line pt-8">
              <h3 className="text-2xl">Mill Opening Hours</h3>
              <ul className="mt-5 space-y-3">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4 border-b border-line pb-3">
                    <span className="text-ink">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reveal lg:col-span-8">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section aria-label="Location map">
        <iframe
          src={site.mapEmbed}
          title={`Map showing ${site.name} location in Palsana, Surat`}
          className="block h-[480px] w-full grayscale-[60%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
