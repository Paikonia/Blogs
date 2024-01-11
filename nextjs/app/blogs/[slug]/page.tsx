import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import {ArrowLeft} from 'lucide-react'
type BlogProps = {
  params: { slug: string };
};

const getPostContent = (slug: string) => {
  const folder = "Posts/";
  const fileData = fs.readFileSync(`${folder}${slug}.md`, "utf-8");

  return matter(fileData);
};

const Blog = ({ params }: BlogProps) => {
  const blog = getPostContent(params.slug);

  return (
    <div className="min-h-[100vh] py-4 px-8">
      <Link href='/blogs' className="flex justify-start items-center">
        <ArrowLeft />
        Back
      </Link>
      <div className="flex justify-center items-center">
        <Image
          width={600}
          height={300}
          className="rounded-xl"
          src={blog.data.featuredImage}
          alt="Featured Image"
        />
      </div>
      <h1>{blog.data.title}</h1>
      <Markdown>{blog.content}</Markdown>
    </div>
  );
};

export default Blog;
