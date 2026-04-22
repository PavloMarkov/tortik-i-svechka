import Image from "next/image";

import { supabase } from "@/lib/supabaseClient";
import { PostCard } from "@/components/postCard";

export default async function Home() {
  const { data } = await supabase.from("posts").select("*");

  const postList = data || [];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full gap-3 bg-white dark:bg-black flex flex-1 items-center justify-start max-w-4xl p-4">
        <Image
          className="dark:invert rounded-4xl"
          src={postList[0]?.image_url || "/next.svg"}
          alt="Logo"
          width={100}
          height={20}
          priority
        />
        <div className="text-2xl">Some little hobby to have some fun</div>
      </header>
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between mx-auto bg-white dark:bg-black sm:items-center">
        <div className="flex gap-2 flex-wrap items-center justify-center">
          {postList.map((post) => (
            <PostCard
              key={post.id}
              body={post.body}
              title={post.title}
              image={post.image_url}
              date={post.created_at}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
