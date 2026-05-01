import { FC } from "react";
import { ThemeChanger } from "./themeChanger";
import InstagramIcon from "./InstagramIcon";

export const FooterComponent: FC = () => {
  return (
    <footer className=" bg-white dark:bg-black/90 shadow-inner py-4 px-8 mt-auto">
      <p className="text-gray-500 text-center">
        &copy; {new Date().getFullYear()} ❤️ Kseniia Markova ❤️
      </p>
      <div className="flex items-center justify-center">
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
      <div className="flex items-center justify-center">
        <ThemeChanger />
      </div>
    </footer>
  );
};
