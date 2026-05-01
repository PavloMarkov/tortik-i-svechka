"use client";
import { Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

const HeaderV2: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900 border-b-2 border-pink-200 dark:border-pink-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-8 h-8 text-pink-500 dark:text-pink-300" />
            <span className="text-2xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Blog by Kseniia Markova
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full transition-all ${
                isActive("/")
                  ? "bg-pink-300 dark:bg-pink-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-200 hover:bg-pink-200 dark:hover:bg-pink-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className={`px-4 py-2 rounded-full transition-all ${
                isActive("/portfolio")
                  ? "bg-pink-300 dark:bg-pink-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-200 hover:bg-pink-200 dark:hover:bg-pink-800"
              }`}
            >
              Toys
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-pink-200 dark:bg-pink-700 hover:bg-pink-300 dark:hover:bg-pink-600 transition-all hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-purple-700" />
              ) : (
                <Sun className="w-5 h-5 text-red-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderV2;
