import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { name: string; path: string };

export default function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="pb-16 pt-40 text-center md:pb-20 md:pt-48">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="container-site">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-gold">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display-1 mx-auto max-w-4xl">{title}</h1>
        {intro && <p className="mx-auto mt-6 max-w-2xl text-lg">{intro}</p>}
        <svg
          className="mx-auto mt-8 text-ink"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M1 1.5l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
