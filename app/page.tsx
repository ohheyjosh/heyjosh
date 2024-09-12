import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "hey josh",
  description: "portfolio + writings by a person named josh",
};

const navigation = [
  { name: "photography", href: "/photography" },
  {
    name: "isthisaleapyear.com",
    href: "https://www.isthisaleapyear.com/",
    target: "_blank",
  },
  {
    name: "wordle wizard",
    href: "https://wordle-wizard.netlify.app",
    target: "_blank",
  },
  { name: "github", href: "https://github.com/ohheyjosh", target: "_blank" },
];

export default function Home() {
  return (
    <main className="row-start-2">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.target ? (
                <a
                  className="text-gray-50 hover:bg-gray-50 hover:text-gray-700 group flex gap-x-3 rounded-md p-2 pl-3 text-lg leading-6"
                  href={item.href}
                  target={item.target}>
                  {item.name}
                </a>
              ) : (
                <Link
                  className="text-gray-50 hover:bg-gray-50 hover:text-gray-700 group flex gap-x-3 rounded-md p-2 pl-3 text-lg leading-6"
                  href={item.href}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
