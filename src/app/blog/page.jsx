import { Wrapper } from "@/layout";
import BlogMain from "@/components/blog";

export const metadata = {
  title: 'Blog Standard'
}

const BlogStandardPage = () => {
    return (
        <Wrapper>
            <BlogMain />
        </Wrapper>
    )
}

export default BlogStandardPage;