/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogPostsList from "@/components/BlogPostsList";
import { PostType } from "@/components/BlogsPostPreview";
import Container from "@/components/Container";
import { useLoaderData } from "react-router-dom";

// {
//   "id": 5,
//   "layout": "../../../layouts/Post.astro",
//   "title": "Test 5",
//   "description": "This is the third description",
//   "publish_date": "2024-01-03",
//   "excerpt": "This is the third description",
//   "tags": [
//     "Test"
//   ],
//   "featured_images": [
//     {
//       "id": 12,
//       "blog_post": 5,
//       "image": "http://127.0.0.1:8000/blog/images/Screenshot_from_2023-12-31_13-13-04_MQYf7ln.png",
//       "position": 1
//     }
//   ]
// }

export const BlogsLoader = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/blogs");
    const data = await res.json();

    return data?.map(
      (d: {
        featured_images: any[];
        title: any;
        id: any;
        description: any;
      }) => {
        const blog: PostType = {
          featuredImage: d.featured_images.find(
            (r: { position: number }) => r.position === 1
          ).image,
          title: d.title,
          href: `http:127.0.0.1:8000/api/blogs/${d.id}`,
          desc: d.description,
          id: d.id,
        };
        return blog;
      }
    );
  } catch (err) {
    return err;
  }
};

const Blogs = () => {
  const data = useLoaderData();
  console.log(data);
  const posts: PostType[] = data as PostType[];

  return (
    <Container narrow={false}>
      <section className="blog-posts-list__section">
        <h2>Recent Posts</h2>
        <BlogPostsList posts={posts} />
      </section>
    </Container>
  );
};

export default Blogs;
