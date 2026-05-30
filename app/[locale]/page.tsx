import { Gift, Heart, Infinity, Sparkles, Star } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AnimateIn } from "@/components/animateIn";
import { ImageWithFallback } from "@/components/imageWithFallback";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/30 dark:bg-pink-500/20 blur-3xl animate-pulse-soft"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-purple-300/30 dark:bg-purple-500/20 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-12 left-1/3 h-48 w-48 rounded-full bg-blue-300/25 dark:bg-blue-500/15 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className="flex justify-center mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Sparkles className="w-16 h-16 text-pink-400 dark:text-pink-300 animate-bounce" />
              </div>
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {t("heroTitle")}
              </h1>
              <p
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                {t("heroSubtitle")}
              </p>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <Link
                  href="/portfolio"
                  className="inline-block bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  {t("exploreCollection")}
                </Link>
              </div>
            </div>

            <div
              className="relative animate-fade-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl animate-float">
                <ImageWithFallback
                  src={
                    "https://bdpf67gedtuavjqh.public.blob.vercel-storage.com/296947201_1764954893858502_7878095604808791701_n.jpg"
                  }
                  alt={t("logoAlt")}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900 dark:via-purple-900 dark:to-blue-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-scale-in hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-purple-200 rounded-full flex items-center justify-center animate-pulse-soft">
                    <Gift className="w-6 h-6 text-red-600 dark:text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                      <Infinity className="text-pink-500 animate-pulse-soft" />{" "}
                      {t("positiveVibes")}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t("successfullyProvided")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {t("featuresTitle")}
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateIn animation="fade-in-up" delay={0}>
              <div className="text-center p-6 rounded-3xl bg-linear-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex justify-center mb-4">
                  <Heart className="w-16 h-16 text-pink-500 dark:text-pink-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 animate-pulse-soft" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {t("madeWithLoveTitle")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("madeWithLoveDescription")}
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={120}>
              <div className="text-center p-6 rounded-3xl bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex justify-center mb-4">
                  <Star className="w-16 h-16 text-purple-500 dark:text-purple-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-soft" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {t("uniqueTitle")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("uniqueDescription")}
                </p>
              </div>
            </AnimateIn>

            <AnimateIn animation="fade-in-up" delay={240}>
              <div className="text-center p-6 rounded-3xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex justify-center mb-4">
                  <Sparkles className="w-16 h-16 text-blue-500 dark:text-blue-300 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 animate-pulse-soft" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  {t("safeTitle")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("safeDescription")}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900">
        <AnimateIn animation="scale-in">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              {t("ctaTitle")}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("ctaSubtitle")}
            </p>
            <Link
              href="/portfolio"
              className="inline-block bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {t("startShopping")}
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
