import { Wrapper } from "@/layout";
import BlogListMain from "@/components/blog-list";

export const metadata = {
  title: 'Blog List'
}

const BlogListPage = () => {
    return (
        <Wrapper>
            <BlogListMain />
        </Wrapper>
    )
}

export default BlogListPage;