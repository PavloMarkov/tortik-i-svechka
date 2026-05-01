import { ImageWithFallback } from "@/components/imageWithFallback";
import { supabase } from "@/lib/supabaseClient";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default async function Portfolio() {
  const { data } = await supabase
    .from("posts")
    .select("id, title, image_url, body, created_at");

  const postList = data || [];

  const categories = ["Handmade toys", "fun videos", "other stuff"];

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-pink-500 dark:text-pink-300 animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Our Magical Collection
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Handcrafted with love, made just for you! ✨
            </p>
          </div>

          {/* Categories */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-linear-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-md"
              >
                {category}
              </span>
            ))}
          </div> */}

          {/* Toys Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {postList.map((toy) => (
              <Link
                key={toy.id}
                href={`/portfolio/${toy.id}`}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={toy.image_url}
                    alt={toy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-pink-400 dark:bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {/* ${toy.price} */}
                    $1
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-full">
                      {categories[0]}
                      {/* {toy.category} */}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                    {toy.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {toy.body}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-pink-500 dark:text-pink-400 font-semibold">
                    <span>View Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
