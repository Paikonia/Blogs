import BlogPostsList from "@/components/BlogPostsList";
import { PostType } from "@/components/BlogsPostPreview";
import fs from "fs";
import matter from 'gray-matter'

const getPostMetadata = ():PostType[] => {
  const folder = "Posts/";
  const files = fs.readdirSync(folder);
  const markdown = files.filter((r) => r.endsWith(".md"));
  const ret:PostType[] =  markdown.map((filename) =>{
    const fileData = fs.readFileSync(`${folder}${filename}`, 'utf-8')
    const frontmatter = matter(fileData)
   const t = filename.replace('.md', '')
    return {
      title: frontmatter.data.title,
      desc: frontmatter.data.desc,
      href: '/blogs/'+t,
      id: t,
      featuredImage: frontmatter.data.featuredImage,
    }
  })

  return ret
};

const Blogs = () => {
  const postMetaData = getPostMetadata();

  

  return (
    <div className="p-6 mb-4">
      <h2 className="mb-8">Patrick's blogs</h2>
      <BlogPostsList posts={postMetaData} />
    </div>
  );
};

export default Blogs;
