import { Wrapper } from "@/layout";
import HomePhotographyMain from "@/components/homes/home-photography";

export const metadata = {
  title: 'Home Photography'
}

const HomePhotographyPage = () => {
    return (
        <Wrapper>
            <HomePhotographyMain/>
        </Wrapper>
    )
}

export default HomePhotographyPage;