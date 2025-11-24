import { Wrapper } from "@/layout";
import GalleryGridMain from "@/components/gallery-grid";

export const metadata = {
  title: 'Gallery Grid'
}

const GalleryGridPage = () => {
    return (
        <Wrapper>
            <GalleryGridMain />
        </Wrapper>
    )
}

export default GalleryGridPage;