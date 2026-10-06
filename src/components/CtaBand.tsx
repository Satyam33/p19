import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Looking for a custom fabric or a bulk order?",
  text = "Share your requirement — fabric type, design, quantity and timeline — and our team will get back to you with the best solution.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-site reveal text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </span>
        <h2 className="display-3 mx-auto mt-6 max-w-2xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl">{text}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact-us" className="btn">
            Request a Quote
          </Link>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
