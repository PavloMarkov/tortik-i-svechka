import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "../components/InstagramIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog by Kseniia Markova",
  description:
    "Blog by Kseniia Markova about hand-made toys, fun videos, and other stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO || "/next.svg";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <header className="w-full gap-3 bg-white dark:bg-black flex items-center justify-start max-w-4xl p-4">
            <Link href="/">
              <Image
                className="rounded-4xl"
                src={logoUrl}
                alt="Logo"
                width={100}
                height={20}
                priority
              />
            </Link>
            <div className="flex w-full items-center justify-between">
              <div className="text-2xl">Blog by Kseniia Markova</div>
              <a
                href="https://www.instagram.com/tortik_i_svechka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-black dark:text-white hover:text-blue-400">
                  <InstagramIcon />
                </div>
              </a>
            </div>
          </header>
          <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between mx-auto bg-white dark:bg-black sm:items-center px-3">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
