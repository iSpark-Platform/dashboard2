import { Wrapper } from "@/layout";
import CartMain from "@/components/cart";

export const metadata = {
  title: 'Cart Page'
}

const CartPage = () => {
    return (
        <Wrapper>
            <CartMain />
        </Wrapper>
    )
}

export default CartPage;