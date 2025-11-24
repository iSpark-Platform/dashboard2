import { Wrapper } from "@/layout";
import ComingSoonArea from "@/components/coming-soon/coming-soon-area";

export const metadata = {
  title: 'Coming soon'
}

const ComingSoonPage = () => {
    return (
        <Wrapper>
            <ComingSoonArea />
        </Wrapper>
    )
}

export default ComingSoonPage;