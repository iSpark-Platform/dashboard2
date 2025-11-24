import { Wrapper } from "@/layout";
import HomeQuranLearningMain from "@/components/homes/home-quran-learning";

export const metadata = {
  title: 'Home Quran Learning'
}

const HomeQuranLearningPage = () => {
    return (
        <Wrapper>
            <HomeQuranLearningMain/>
        </Wrapper>
    )
}

export default HomeQuranLearningPage;