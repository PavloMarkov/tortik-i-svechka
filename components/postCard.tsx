"use client";

import Image from "next/image";
import { FC } from "react";

interface PostCardProps {
  image: string;
  title: string;
  body: string;
  author?: string;
  date?: string;
}

export const PostCard: FC<PostCardProps> = ({
  image,
  title,
  body,
  author,
  date,
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;
  return (
    <article
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full"
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        border: "1px solid #f0f0f0",
        transition: "box-shadow 0.4s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.13)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)")
      }
    >
      {/* Image */}
      <div
        style={{
          height: 500,
          overflow: "hidden",
          background: "#f4f4f5",
          position: "relative",
        }}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-2">
        {(author || date) && (
          <div className="text-gray-500 dark:text-gray-400 flex gap-2 items-center uppercase text-xs font-semibold">
            {author && <span>{author}</span>}
            {author && date && (
              <span className="inline-block size-1 bg-[#d4d4d8] rounded-[50%]" />
            )}
            {date && (
              <span className="text-gray-500 dark:text-gray-400">
                {formattedDate}
              </span>
            )}
          </div>
        )}

        <h2 className="dark:text-white font-bold text-xl">{title}</h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {body}
        </p>
      </div>
    </article>
  );
};
