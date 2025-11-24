import { Wrapper } from "@/layout";
import WishlistMain from "@/components/wishlist";

export const metadata = {
  title: 'Wishlist'
}

const WishlistPage = () => {
    return (
        <Wrapper>
            <WishlistMain />
        </Wrapper>
    )
}

export default WishlistPage;