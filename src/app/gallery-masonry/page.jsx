import { Wrapper } from "@/layout";
import GalleryMasonryMain from "@/components/gallery-masonry";

export const metadata = {
  title: 'Gallery Masonry'
}

const GalleryMasonryPage = () => {
    return (
        <Wrapper>
            <GalleryMasonryMain />
        </Wrapper>
    )
}

export default GalleryMasonryPage;