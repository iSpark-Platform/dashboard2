import { Wrapper } from "@/layout";
import HomeDistantLearningMain from "@/components/homes/home-distant-learning";

export const metadata = {
  title: 'Home DistantLearning'
}

const HomeDistantLearningPage = () => {
    return (
        <Wrapper>
            <HomeDistantLearningMain />
        </Wrapper>
    )
}

export default HomeDistantLearningPage;