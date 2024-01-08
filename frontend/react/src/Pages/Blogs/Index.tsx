import BlogPostsList from "@/components/BlogPostsList"
import { PostType } from "@/components/BlogsPostPreview"
import Container from "@/components/Container"
import { useLoaderData } from "react-router-dom"

export const BlogsLoader = async() => {
  const res = await fetch('http://localhost:8000/api/blogs')
  
  const data = await res.json()
  return data
}

const Blogs = () => {
  const data = useLoaderData()
  console.log(data)
  const posts:PostType[] = []

  return (
    <Container narrow={false}>
		<section className="blog-posts-list__section">
			<h2>Recent Posts</h2>
			<BlogPostsList posts={posts} />
		</section>
	</Container>
  )
}

export default Blogs