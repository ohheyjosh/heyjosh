import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "photography",
  description: "pictures taken by a person named josh",
};

const pics = [
  { src: "/chicago1.jpg", alt: "Chicago", width: 2383, height: 3575 },
  { src: "/chicago2.jpg", alt: "Chicago", width: 3988, height: 2659 },
  { src: "/chicago3.jpg", alt: "Chicago", width: 3813, height: 5720 },
  { src: "/chicago4.jpg", alt: "Chicago", width: 4309, height: 2873 },
  { src: "/chicago5.jpg", alt: "Chicago", width: 3397, height: 5095 },
  { src: "/florida1.jpg", alt: "Florida", width: 3697, height: 4929 },
  { src: "/florida2.jpg", alt: "Florida", width: 4000, height: 6000 },
  { src: "/florida3.jpg", alt: "Florida", width: 5356, height: 3570 },
  { src: "/nyc1.jpg", alt: "NYC", width: 5922, height: 3947 },
];

export default function Photography() {
  const randomPics = pics.sort(() => Math.random() - 0.5);
  return (
    <>
      <main className="row-start-2">
        <ul role="list" className="flex flex-1 flex-col space-y-6 sm:px-16">
          {randomPics.map((pic) => (
            <li key={pic.src.toString()}>
              <Image
                src={pic.src}
                alt={pic.alt}
                width={pic.width}
                height={pic.height}
                sizes="100vw"
                className="w-full h-auto"
              />
            </li>
          ))}
        </ul>
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
