import BlogPostPreview, { PostType } from "./BlogsPostPreview";
type BlogProps = {
  posts: PostType[];
};

const BlogPostsList = ({ posts }: BlogProps) => {
  return (
    <ul className="blog-posts-list__list">
      {posts?.map((post) => {
        return <BlogPostPreview post={post} />;
      })}
    </ul>
  );
};

export default BlogPostsList;
