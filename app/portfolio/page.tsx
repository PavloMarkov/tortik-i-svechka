import { ImageWithFallback } from "@/components/imageWithFallback";
import { supabase } from "@/lib/supabaseClient";
import { ExternalLink, Calendar } from "lucide-react";

export default async function Portfolio() {
  const { data } = await supabase
    .from("posts")
    .select("id, title, image_url, body, created_at");

  const postList = data || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-br from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">My Works</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A collection of toys, videos, and other fun stuff that I&apos;ve
            created. Check out my latest projects and see what I&apos;m up to!
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {postList.map((post) => {
              const formattedDate = post.created_at
                ? new Date(post.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : null;
              return (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formattedDate}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.body}</p>
                    {/* <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <a
                        href={`/portfolio/${post.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600">Tools and technologies I work with</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
