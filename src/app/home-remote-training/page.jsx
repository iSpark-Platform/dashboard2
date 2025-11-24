import { Wrapper } from "@/layout";
import HomeRemoteTrainingMain from "@/components/homes/home-remote-training";

export const metadata = {
  title: 'Home Remote Training'
}

const HomeRemoteTrainingPage = () => {
    return (
        <Wrapper>
            <HomeRemoteTrainingMain/>
        </Wrapper>
    )
}

export default HomeRemoteTrainingPage;