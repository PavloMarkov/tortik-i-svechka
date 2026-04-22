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
      className="group relative bg-white rounded-2xl overflow-hidden max-w-sm w-full"
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
          height: 200,
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
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        {(author || date) && (
          <div
            style={{
              fontSize: 11,
              color: "#a1a1aa",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            {author && <span>{author}</span>}
            {author && date && (
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#d4d4d8",
                  display: "inline-block",
                }}
              />
            )}
            {date && <span>{formattedDate}</span>}
          </div>
        )}

        <h2
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#18181b",
            lineHeight: 1.3,
            margin: 0,
            transition: "color 0.3s",
            cursor: "default",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#18181b")}
        >
          {title}
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "#71717a",
            lineHeight: 1.65,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {body}
        </p>

        <div style={{ paddingTop: 6 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#6366f1",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
            }}
          >
            Read more
            <svg
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};
