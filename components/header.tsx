import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import { FC } from "react";

export const HeaderComponent: FC = () => {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO || "/next.svg";
  return (
    <header className="container gap-3 bg-white dark:bg-black/90 flex items-center justify-start max-w-5xl p-4 mx-auto">
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
        <div className="text-2xl dark:text-white">Blog by Kseniia Markova</div>
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
  );
};
