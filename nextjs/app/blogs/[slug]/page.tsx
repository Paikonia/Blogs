import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";
import { getPostContent } from "@/lib/functions";


type BlogProps = {
  params: { slug: string };
};


const Blog = ({ params }: BlogProps) => {
  const blog = getPostContent(params.slug);

  return (
    <div className="min-h-[100vh] py-4 mb-12">
      <Link href="/blogs" className="flex justify-start items-center">
        <ArrowLeft />
        Back
      </Link>
      <Container narrow={true}>
        <div className="flex justify-center items-center w-full ">
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
      </Container>
    </div>
  );
};

export default Blog;
