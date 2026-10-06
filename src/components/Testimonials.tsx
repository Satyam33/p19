"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6500);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <section
      aria-labelledby="testimonials-title"
      className="py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow">Testimonials</p>
            <h2 id="testimonials-title" className="display-2 mt-5">
              What Our Clients Say
            </h2>
            <p className="mt-6">
              Garment makers, traders and designers trust P19 Versatile Fab for consistent quality, custom designs and
              on-time delivery.
            </p>
            <div className="mt-10 flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setIndex((i) => (i - 1 + count) % count)}
                className="flex h-14 w-14 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => (i + 1) % count)}
                className="flex h-14 w-14 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <Arrow />
              </button>
            </div>
          </div>

          <div className="relative lg:col-span-8">
            <svg className="text-gold" width="54" height="40" viewBox="0 0 54 40" fill="currentColor" aria-hidden="true">
              <path d="M0 40V24.4C0 10.9 7.3 2.8 21.8 0l2.3 5.3C16.2 7.4 12 12.3 11.6 20H22v20H0zm30 0V24.4C30 10.9 37.3 2.8 51.8 0l2.2 5.3C46.2 7.4 42 12.3 41.6 20H52v20H30z" />
            </svg>
            <div className="relative mt-8 grid">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  aria-hidden={i !== index}
                  className={`col-start-1 row-start-1 transition-all duration-700 ${
                    i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
                  }`}
                >
                  <blockquote className="font-serif text-2xl font-light leading-snug text-ink md:text-[2.1rem]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand font-serif text-xl text-gold">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-serif text-xl text-ink">{t.name}</span>
                      <span className="text-sm">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 flex gap-2" aria-hidden="true">
              {testimonials.map((t, i) => (
                <span
                  key={t.name}
                  className={`h-[2px] transition-all duration-500 ${i === index ? "w-12 bg-gold" : "w-6 bg-line"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M0 6h17M12 1l5 5-5 5" />
    </svg>
  );
}
