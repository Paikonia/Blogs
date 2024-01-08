import { Link } from "react-router-dom";

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
  id: number;
};

type PreviewProps = {
  post: PostType;
};

const BlogPostPreview = ({ post }: PreviewProps) => {
  console.log(post);
  return (
    <li className="blog-post__preview">
      <Link className="blog-post__link" to={`${post.id}`}>
        <img src={post.featuredImage} />
        <h3 >{post.title}</h3>
        {post.desc && <p>{post.desc}</p>}
      </Link>
    </li>
  );
};

export default BlogPostPreview;



