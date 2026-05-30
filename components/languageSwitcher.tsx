"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { FC } from "react";

const localeLabels: Record<(typeof routing.locales)[number], string> = {
  en: "EN 🇺🇲",
  uk: "UK 🇺🇦",
  tr: "TR 🇹🇷",
};

export const LanguageSwitcher: FC = () => {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      aria-label={t("label")}
      className="px-3 py-2 rounded-full bg-pink-200 dark:bg-pink-700 text-gray-700 dark:text-gray-200 text-sm font-semibold border-0 cursor-pointer hover:bg-pink-300 dark:hover:bg-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-pink-400"
    >
      {routing.locales.map((loc) => (
        <option key={loc} value={loc}>
          {localeLabels[loc]}
        </option>
      ))}
    </select>
  );
};
