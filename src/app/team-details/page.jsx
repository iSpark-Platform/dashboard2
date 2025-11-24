import { Wrapper } from "@/layout";
import TeamDetailsMain from "@/components/teams/team-details";
import { instructors_data } from "@/data";

export const metadata = {
  title: 'Team Details Page'
}
const team = instructors_data[0]
const TeamDetailsPage = () => {
    return (
        <Wrapper>
            <TeamDetailsMain team={team} />
        </Wrapper>
    )
}

export default TeamDetailsPage;