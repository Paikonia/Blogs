import { useLoaderData } from "react-router-dom"

export const blogLoader = async ({params}) => {
  const res = await fetch(`http://localhost:8000/api/blogs/${params.id}`)
  const blog = res.json() 
  return blog
}

const Blog = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>{'Hello'}</div>
  )
}

export default Blog