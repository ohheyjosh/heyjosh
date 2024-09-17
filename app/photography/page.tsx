import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import nyc1 from "@/public/nyc1.jpg";
import chicago1 from "@/public/chicago1.jpg";
import chicago2 from "@/public/chicago2.jpg";
import chicago3 from "@/public/chicago3.jpg";
import chicago4 from "@/public/chicago4.jpg";
import chicago5 from "@/public/chicago5.jpg";
import florida1 from "@/public/florida1.jpg";
import florida2 from "@/public/florida2.jpg";
import florida3 from "@/public/florida3.jpg";

export const metadata: Metadata = {
  title: "photography",
  description: "pictures taken by a person named josh",
};

export default function Photography() {
  return (
    <>
      <main className="row-start-2">
        <ul role="list" className="flex flex-1 flex-col space-y-6 sm:px-16">
          <li className="w-full h-auto">
            <Image src={nyc1} alt={"NYC"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={chicago1} alt={"Chicago"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={chicago2} alt={"Chicago"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={chicago3} alt={"Chicago"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={chicago4} alt={"Chicago"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={chicago5} alt={"Chicago"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={florida1} alt={"Florida"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={florida2} alt={"Florida"} sizes="100vw" placeholder="blur" />
          </li>
          <li className="w-full h-auto">
            <Image src={florida3} alt={"Florida"} sizes="100vw" placeholder="blur" />
          </li>
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
