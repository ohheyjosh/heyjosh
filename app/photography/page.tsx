import type { Metadata } from "next";
import Image from "next/image";

import chicago1 from "./chicago1.jpg";
import chicago2 from "./chicago2.jpg";
import chicago3 from "./chicago3.jpg";
import chicago4 from "./chicago4.jpg";
import chicago5 from "./chicago5.jpg";
import florida1 from "./florida1.jpg";
import florida2 from "./florida2.jpg";
import florida3 from "./florida3.jpg";
import nyc1 from "./nyc1.jpg";

export const metadata: Metadata = {
  title: "photography",
  description: "pictures taken by a person named josh",
};

const pics = [
  { src: chicago1, alt: "Chicago" },
  { src: chicago2, alt: "Chicago" },
  { src: chicago3, alt: "Chicago" },
  { src: chicago4, alt: "Chicago" },
  { src: chicago5, alt: "Chicago" },
  { src: florida1, alt: "Florida" },
  { src: florida2, alt: "Florida" },
  { src: florida3, alt: "Florida" },
  { src: nyc1, alt: "NYC" },
];

export default function Photography() {
  const randomPics = pics.sort(() => Math.random() - 0.5);
  return (
    <main className="row-start-2">
      <ul role="list" className="flex flex-1 flex-col space-y-6 sm:px-16">
        {randomPics.map((pic) => (
          <li key={pic.src.toString()}>
            <Image
              src={pic.src}
              alt={pic.alt}
              sizes="100vw"
              className="w-full h-auto"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
