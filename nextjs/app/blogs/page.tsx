import BlogPostsList from "@/components/BlogPostsList";
import { getPostMetadata } from "@/lib/functions";



const Blogs = () => {
  const postMetaData = getPostMetadata();

  return (
    <div className="p-6 mb-4">
      <h2 className="mb-8">Patrick&apos;s blogs</h2>
      <BlogPostsList posts={postMetaData} />
    </div>
  );
};


export default Blogs;
