import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <>
      <main className="row-start-2">
        <h1 className="text-3xl text-gray-50">404</h1>
      </main>
      <footer className="row-start-3 flex flex-wrap mt-16">
        <Link
          href="/"
          className="text-gray-50 hover:bg-gray-50 hover:text-gray-700 group flex gap-x-3 rounded-md p-2 pl-3 text-lg leading-6">
          &#8249; back &nbsp;
        </Link>
      </footer>
    </>
  );
}
