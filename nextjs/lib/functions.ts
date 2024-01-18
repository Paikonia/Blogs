import fs from "fs";
import matter from "gray-matter";

import { PostType } from "@/components/BlogsPostPreview";

export const getPostMetadata = (): PostType[] => {
  const folder = "Posts/";
  const files = fs.readdirSync(folder);
  const markdown = files.filter((r) => r.endsWith(".md"));
  const ret: PostType[] = markdown.map((filename) => {
    const fileData = fs.readFileSync(`${folder}${filename}`, "utf-8");
    const frontmatter = matter(fileData);
    const t = filename.replace(".md", "");
    return {
      title: frontmatter.data.title,
      desc: frontmatter.data.desc,
      href: "/blogs/" + t,
      id: t,
      featuredImage: frontmatter.data.featuredImage,
      date: frontmatter.data.date,
      published: frontmatter.data.published
    };
  });

  return ret.filter(r => r.published);
};

export const getPostContent = (slug: string) => {
  const folder = "Posts/";
  const fileData = fs.readFileSync(`${folder}${slug}.md`, "utf-8");

  return matter(fileData);
};

export const getMostRecents = (): PostType[] => {
  const data = getPostMetadata()
  const sorted = data.sort(function (a, b) {
   return  (new Date(a.date)).getTime() -(new Date(b.date)).getTime();
  })
  return [sorted[0], sorted[1]];
}

