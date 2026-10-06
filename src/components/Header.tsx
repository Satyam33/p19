"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (document.body.style.position === "fixed") return;
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { body, documentElement: html } = document;
    const scrollY = window.scrollY;
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: html.style.overflow };

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    const close = () => window.matchMedia("(min-width: 1024px)").matches && setOpen(false);
    window.addEventListener("resize", close);

    return () => {
      window.removeEventListener("resize", close);
      html.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "bg-cream shadow-[0_1px_0_var(--color-line)]"
          : scrolled
            ? "bg-cream/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur"
            : "bg-transparent"
      }`}
    >
      <div
        className={`container-site flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-24 md:h-28"
        }`}
      >
        <Link href="/" aria-label={`${site.name} — Home`} className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={831}
            height={619}
            priority
            className={`w-auto transition-all duration-500 ${scrolled ? "h-12" : "h-14 md:h-16"}`}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="link-underline text-[1.05rem]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-3 font-serif text-ink transition-colors hover:text-gold xl:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-line">
              <PhoneIcon />
            </span>
            {site.phone}
          </a>
          <Link href="/contact-us" className="btn hidden !px-7 !py-3.5 md:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto overscroll-contain bg-cream transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="container-site flex h-full flex-col justify-between py-10">
          <ul className="space-y-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`font-serif text-4xl font-light ${isActive(item.href) ? "text-gold" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-line pt-8">
            <a href={site.phoneHref} className="block font-serif text-2xl text-ink">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-body">
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
