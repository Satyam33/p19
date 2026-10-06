"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";

export type TabItem = {
  label: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  cta: { href: string; label: string };
};

export default function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div>
      <div role="tablist" aria-label="What makes us different" className="ml-auto grid max-w-3xl grid-cols-2 md:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.label}
            role="tab"
            type="button"
            id={`${baseId}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${i}`}
            onClick={() => setActive(i)}
            className={`border border-white px-4 py-4 font-serif text-[0.98rem] transition-colors duration-300 ${
              active === i ? "bg-ink text-white" : "bg-cream text-ink hover:bg-sand"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item, i) => (
        <div
          key={item.label}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="mt-12 grid items-center gap-10 md:mt-16 lg:grid-cols-2 lg:gap-20"
        >
          <div className="order-2 lg:order-1">
            <p className="eyebrow">{item.eyebrow}</p>
            <h3 className="display-2 mt-5">{item.title}</h3>
            <p className="mt-6 max-w-lg">{item.text}</p>
            <Link href={item.cta.href} className="btn mt-9">
              {item.cta.label}
            </Link>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden lg:order-2">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="animate-[fadeIn_0.8s_ease] object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
