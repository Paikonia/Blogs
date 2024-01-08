export type PostType = {
  featuredImage: string;
  title: string;
  href: string;
  desc: string;
};

type PreviewProps = {
  post: PostType;
};

const BlogPostPreview = ({ post }: PreviewProps) => {
  return (
    <li className="blog-post__preview">
      <a href={post.href}>
        <img src={post.featuredImage} />
        <h3>{post.title}</h3>
        {post.desc && <p>{post.desc}</p>}
      </a>
    </li>
  );
};

export default BlogPostPreview;
