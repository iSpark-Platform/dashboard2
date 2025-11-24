import { Wrapper } from "@/layout";
import HomeSalesCoachMain from "@/components/homes/home-sales-coach";

export const metadata = {
  title: 'Home Sales Coach'
}

const HomeSalesCoachPage = () => {
    return (
        <Wrapper>
            <HomeSalesCoachMain/>
        </Wrapper>
    )
}

export default HomeSalesCoachPage;