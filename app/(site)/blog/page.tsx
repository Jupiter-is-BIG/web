import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="w-full py-10 px-6 md:px-32 flex flex-col mt-16 md:mt-24">
      <p className="text-md font-mono text-black/40 uppercase tracking-widest mb-8">
        Writing
      </p>
      <div className="flex flex-col divide-y divide-black/10">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:opacity-60 transition-opacity group">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-sm">{post.title}</p>
              <p className="text-sm text-black/50">{post.description}</p>
              {post.tags && (
                <div className="flex gap-2 mt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 border border-black/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <span className="text-xs font-mono text-black/40 whitespace-nowrap">
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
