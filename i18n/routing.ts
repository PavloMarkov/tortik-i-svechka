import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "uk", "tr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
