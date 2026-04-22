import { PostCard } from "@/components/postCard";
import { supabase } from "@/lib/supabaseClient";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const ItemPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const { data } = await supabase
    .from("posts")
    .select("id, title, body, image_url, created_at")
    .eq("id", slug) // where id = slug
    .single();

  console.log(data);

  if (!data) {
    return notFound();
  }

  return (
    <div className="space-y-8">
      <Link
        href="/portfolio"
        className="flex items-center gap-2 text-sm text-gray-500 dark:text-blue-400 hover:text-gray-700 dark:hover:text-blue-700"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Portfolio
      </Link>
      <PostCard
        image={data.image_url}
        title={data.title}
        body={data.body}
        date={data.created_at}
      />
    </div>
  );
};
export default ItemPage;
