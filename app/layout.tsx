"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`grid grid-rows-[0px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {pathname != "/" && (
          <footer className="row-start-3 flex flex-wrap mt-16">
            <Link href="/" className="text-gray-50 hover:bg-gray-50 hover:text-gray-700 group flex gap-x-3 rounded-md p-2 pl-3 text-lg leading-6">&#8249; back &nbsp;</Link>
          </footer>
        )}
      </body>
    </html>
  );
}
