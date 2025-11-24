import { Wrapper } from "@/layout";
import BlogDetailsMain from "@/components/blog-details";
import { blog_data } from "@/data";

export const metadata = {
  title: 'Blog Details'
}

const BlogDetailsPage = () => {
  const blog = blog_data[0];
  return (
    <Wrapper>
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  )
}

export default BlogDetailsPage;