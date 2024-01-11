import Image from "next/image";
import Link from "next/link";

export type FeaturedImages = {
  id: number;
  blog_post: number;
  image: string;
  position: number
}
export type PostType = {
  featuredImage: string;
  title: string;
  href: string;
  desc: string;
  id: string;
};

type PreviewProps = {
  post: PostType;
};

const BlogPostPreview = ({ post }: PreviewProps) => {
  
  return (
    <li className="blog-post__preview">
      <Link className="blog-post__link" href={post.href}>
        <Image width={650} height={400} alt="Post Image" src={post.featuredImage} />
        <h3 >{post.title}</h3>
        {post.desc && <p>{post.desc}</p>}
      </Link>
    </li>
  );
};

export default BlogPostPreview;



