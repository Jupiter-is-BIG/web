import { getAllPosts } from "@/lib/blog";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { Comments } from "@/components/blog/Comments";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const file = path.join(process.cwd(), "content/blog", decodeURIComponent(slug), "index.mdx");
  const raw = fs.readFileSync(file, "utf-8");
  const { content, data } = matter(raw);

  return (
    <div className="w-full py-10 px-6 md:px-32 mt-16 md:mt-24 max-w-full mx-auto">
      <p className="text-xs font-mono text-black/40 mb-2">
        {new Date(data.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-black/50 mb-8">{data.description}</p>

      <article className="prose prose-sm max-w-full w-full">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMath],
              rehypePlugins: [
                rehypeKatex,
                [rehypePrettyCode, { theme: "github-light" }],
              ],
            },
          }}
        />
      </article>

      <div className="mt-16">
        <Comments />
      </div>
    </div>
  );
}