"use client";

import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

function groupByMonth(posts: BlogPost[]): { label: string; posts: BlogPost[] }[] {
  const map = new Map<string, BlogPost[]>();
  for (const post of posts) {
    const label = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    if (!map.has(label)) map.set(label, []);
    map.get(label)!.push(post);
  }
  return Array.from(map.entries()).map(([label, posts]) => ({ label, posts }));
}

export function Archives({ posts }: { posts: BlogPost[] }) {
  const groups = groupByMonth(posts);
  const [open, setOpen] = useState<Set<string>>(new Set([groups[0]?.label]));

  function toggle(label: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  return (
    <div className="flex flex-col">
      <p className="text-md font-mono text-black/40 uppercase tracking-widest mb-6">
        Archives
      </p>
      <div className="flex flex-col gap-1">
        {groups.map(({ label, posts }) => {
          const isOpen = open.has(label);
          return (
            <div key={label}>
              <button
                onClick={() => toggle(label)}
                className="flex items-center gap-2 w-full text-left py-1 hover:text-black/70 transition-colors group"
              >
                <span className="text-xs text-black/40 w-3 shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
                <span className="text-sm font-mono text-black/60 group-hover:text-black/80">
                  {label}
                </span>
              </button>
              {isOpen && (
                <div className="flex flex-col pl-5 pb-1">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="text-sm py-0.5 text-blue-400 hover:text-blue-600 transition-colors truncate"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
