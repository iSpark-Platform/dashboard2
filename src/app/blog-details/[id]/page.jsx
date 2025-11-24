import { Wrapper } from "@/layout";
import BlogDetailsMain from "@/components/blog-details";
import { blog_data } from "@/data";

export const metadata = {
  title: 'Blog Details'
}

const BlogDetailsPage = ({params}) => {
  const blog = blog_data.find(item => Number(item.id) === Number(params.id))
  return (
    <Wrapper>
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  )
}

export default BlogDetailsPage;