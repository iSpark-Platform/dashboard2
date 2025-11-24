import { Wrapper } from "@/layout";
import HomeOnlineArtMain from "@/components/homes/home-online-art";

export const metadata = {
  title: 'Home Online Art'
}

const HomeOnlineArtPage = () => {
    return (
        <Wrapper>
            <HomeOnlineArtMain/>
        </Wrapper>
    )
}

export default HomeOnlineArtPage;