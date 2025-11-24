import { Wrapper } from "@/layout";
import PricingTableMain from "@/components/pricing-table";

export const metadata = {
  title: 'Pricing Table'
}

const PricingTablePage = () => {
    return (
        <Wrapper>
            <PricingTableMain />
        </Wrapper>
    )
}

export default PricingTablePage;