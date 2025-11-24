import { Wrapper } from "@/layout";
import CheckoutMain from "@/components/checkout";

export const metadata = {
  title: 'Checkout'
}

const CheckoutPage = () => {
    return (
        <Wrapper>
            <CheckoutMain />
        </Wrapper>
    )
}

export default CheckoutPage;