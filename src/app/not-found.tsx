import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center pb-24 pt-40 text-center">
      <div className="container-site">
        <p className="stat-number">404</p>
        <h1 className="display-2 mt-4">Oops… this page is not woven yet</h1>
        <p className="mx-auto mt-5 max-w-md">The page you are looking for may have moved. Try one of these instead.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-outline">
            Browse Fabrics
          </Link>
        </div>
      </div>
    </section>
  );
}
