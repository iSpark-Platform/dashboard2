import { Wrapper } from "@/layout";
import FaqMain from "@/components/faq";

export const metadata = {
  title: 'Faq Page'
}

const FaqPage = () => {
    return (
        <Wrapper>
            <FaqMain />
        </Wrapper>
    )
}

export default FaqPage;