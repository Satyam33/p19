import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  index,
  headingLevel = "h3",
}: {
  product: Product;
  index: number;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const href = `/products/${product.slug}`;

  return (
    <article className="group reveal">
      <Link href={href} className="img-zoom relative block aspect-[4/3] overflow-hidden bg-sand" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>
      <div className="mt-6 flex items-end justify-between gap-6">
        <div>
          <Heading className="text-[1.7rem] md:text-3xl">
            <Link href={href} className="transition-colors hover:text-gold">
              <span className="mr-2 text-body/60">{String(index + 1).padStart(2, "0")}.</span>
              {product.name}
            </Link>
          </Heading>
          <p className="mt-3 max-w-md">{product.excerpt}</p>
        </div>
        <Link
          href={href}
          className="link-underline shrink-0 whitespace-nowrap text-[0.95rem]"
          aria-label={`Read more about ${product.name}`}
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
