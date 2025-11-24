import { Wrapper } from "@/layout";
import HomeBusinessCoachMain from "@/components/homes/home-business-coach";

export const metadata = {
  title: 'Home Business Coach'
}

const HomeBusinessCoachPage = () => {
    return (
        <Wrapper>
          <HomeBusinessCoachMain/>
        </Wrapper>
    )
}

export default HomeBusinessCoachPage;