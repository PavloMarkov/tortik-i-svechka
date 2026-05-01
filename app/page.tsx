import { Gift, Heart, Infinity, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/imageWithFallback";

export default async function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="relative overflow-hidden bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-950 dark:via-pink-950 dark:to-indigo-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-16 h-16 text-pink-400 dark:text-pink-300 animate-bounce" />
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Welcome to Magical Toys
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover a world of handmade treasures crafted with love, just
                for you! ✨
              </p>
              <Link
                href="/portfolio"
                className="inline-block bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Explore Our Collection ✨
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={
                    "https://scontent-iad6-1.cdninstagram.com/v/t51.2885-19/296947201_1764954893858502_7878095604808791701_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-iad6-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2gH6anZd1Mvexi_v_UlKZvoDTMlne3Pf4KK33Tl1mdxGNU30fFIfo740BuNOaAp7fjM&_nc_ohc=OUI5qqzy9egQ7kNvwFHehpx&_nc_gid=wB0ejY-wZlgE72N59WfHTw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af0i_RhpBKRRsXMGiouZWOUJKbI-1EFlwdEU6hCQeZPO_Q&oe=69EEBD30&_nc_sid=7a9f4b"
                  }
                  alt="Tortik-i-svechka Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-purple-200 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-red-600 dark:text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                      <Infinity className="text-pink-500" /> Positive Vibes
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Successfully Provided
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Why You&apos;ll Love Our Toys
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-3xl bg-linear-to-br from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Heart className="w-16 h-16 text-pink-500 dark:text-pink-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Made with Love
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every toy is carefully handcrafted with attention to detail and
                lots of love
              </p>
            </div>

            <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Star className="w-16 h-16 text-purple-500 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Unique & Special
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                One-of-a-kind pieces that you won&apos;t find anywhere else in
                the world
              </p>
            </div>

            <div className="text-center p-6 rounded-3xl bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-16 h-16 text-blue-500 dark:text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                Safe & Natural
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Made from eco-friendly materials that are safe for children and
                the planet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Ready to Find Your Perfect Toy?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Browse our magical collection and discover toys that will bring joy
            and wonder! 🌟
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Start Shopping →
          </Link>
        </div>
      </section>
    </div>
  );
}
