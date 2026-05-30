import { ImageWithFallback } from "@/components/imageWithFallback";
import { Link } from "@/i18n/navigation";
import { supabase } from "@/lib/supabaseClient";
import { ArrowLeft, CheckCircle, Heart, Star } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const ItemPage = async ({ params }: Props) => {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProductDetail");

  const { data } = await supabase
    .from("posts")
    .select("id, title, body, image_url, created_at, price, currency")
    .eq("id", slug)
    .single();

  const features = [
    t("features.softAndCuddly"),
    t("features.eyesAndNose"),
    t("features.easyToClean"),
  ];

  const materials = [
    t("materials.lowPileCotton"),
    t("materials.naturalDyes"),
    t("materials.machineWashable"),
  ];

  if (!data) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8 font-semibold group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          {t("backToCollection")}
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-white dark:bg-gray-800">
              <ImageWithFallback
                src={data.image_url}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-pink-500 dark:bg-pink-600 text-white px-6 py-3 rounded-full text-2xl font-bold shadow-lg">
                {`${data.price} ${data.currency}`}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-block text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full mb-3">
                {t("categoryHandmadeToys")}
              </span>
              <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {data.title}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                {data.body}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                {t("specialFeatures")}
              </h2>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 dark:text-pink-400 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linear-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-500 dark:text-pink-400" />
                {t("naturalMaterials")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {materials.map((material, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-md"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
