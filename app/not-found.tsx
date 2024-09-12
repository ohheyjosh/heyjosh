import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main className="row-start-2">
      <h1 className="text-3xl text-gray-50">404</h1>
    </main>
  );
}
