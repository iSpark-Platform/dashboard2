import { Wrapper } from "@/layout";
import HomeGymTrainingMain from "@/components/homes/home-gym-training";

export const metadata = {
  title: 'Home Gym Training'
}

const HomeGymTrainingPage = () => {
    return (
        <Wrapper>
            <HomeGymTrainingMain />
        </Wrapper>
    )
}

export default HomeGymTrainingPage;