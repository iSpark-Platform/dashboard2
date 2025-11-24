import { Wrapper } from "@/layout";
import HealthCoachMain from "@/components/homes/health-coach";

export const metadata = {
  title: 'Home Health Coach'
}

const HomeHealthCoachPage = () => {
    return (
        <Wrapper>
            <HealthCoachMain/>
        </Wrapper>
    )
}

export default HomeHealthCoachPage;