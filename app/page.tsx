import { ArrowRight, Gem, Gift, Infinity } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/imageWithFallback";

export default async function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
                  Welcome to My Blog
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Making Hand-Made Toys With Care And Love
              </h1>
              <p className="text-xl text-gray-600">
                Super-cute girl creating amazing beautiful, lovely handmade
                toys.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View My <Gem className="w-5 h-5" />
                </Link>
              </div>
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
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Infinity /> Positive Vibes
                    </div>
                    <div className="text-sm text-gray-600">
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
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  What I Do
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized skills and services I offer
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Web Development",
                    description:
                      "Building responsive and performant web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
                    color: "blue",
                  },
                  {
                    icon: Palette,
                    title: "UI/UX Design",
                    description:
                      "Creating beautiful and intuitive user interfaces that provide excellent user experiences and drive engagement.",
                    color: "purple",
                  },
                  {
                    icon: Zap,
                    title: "Performance Optimization",
                    description:
                      "Optimizing applications for speed, accessibility, and SEO to ensure the best possible user experience.",
                    color: "yellow",
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  const colorClasses = {
                    blue: "bg-blue-100 text-blue-600",
                    purple: "bg-purple-100 text-purple-600",
                    yellow: "bg-yellow-100 text-yellow-600",
                  };
                  return (
                    <div
                      key={index}
                      className="p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <div
                        className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}

      {/* Stats Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: "50+", label: "Sells" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "5+", label: "Years Experience" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Purchase?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Select the toy you like and make your life a little easier and more
            fun. I will be happy to create a custom toy just for you!
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            View Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
