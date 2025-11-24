import { Wrapper } from "@/layout";
import HomeMotivationMain from "@/components/homes/home-motivation";


export const metadata = {
  title: 'Home Motivation'
}

const HomeMotivationPage = () => {
    return (
        <Wrapper>
            <HomeMotivationMain/>
        </Wrapper>
    )
}

export default HomeMotivationPage;