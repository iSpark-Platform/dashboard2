import { Wrapper } from "@/layout";
import PurchaseGuideMain from "@/components/purchase-guide";

export const metadata = {
  title: 'Purchase Guide'
}

const PurchaseGuidePage = () => {
    return (
        <Wrapper>
            <PurchaseGuideMain />
        </Wrapper>
    )
}

export default PurchaseGuidePage;