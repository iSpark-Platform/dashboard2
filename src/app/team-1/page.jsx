import { Wrapper } from "@/layout";
import TeamOneMain from "@/components/teams/team-1";

export const metadata = {
  title: 'Team One'
}

const TeamOnePage = () => {
    return (
        <Wrapper>
            <TeamOneMain />
        </Wrapper>
    )
}

export default TeamOnePage;