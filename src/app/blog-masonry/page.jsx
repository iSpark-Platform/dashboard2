import { Wrapper } from "@/layout";
import BlogMasonryMain from "@/components/blog-masonry";

export const metadata = {
  title: 'Blog Masonry'
}

const BlogMasonryPage = () => {
    return (
        <Wrapper>
            <BlogMasonryMain />
        </Wrapper>
    )
}

export default BlogMasonryPage;