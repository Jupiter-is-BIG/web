import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((dir) => {
      const slug = dir.name;
      const raw = fs.readFileSync(path.join(BLOG_DIR, slug, "index.mdx"), "utf-8");
      const { data } = matter(raw);
      return { slug, ...data } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
