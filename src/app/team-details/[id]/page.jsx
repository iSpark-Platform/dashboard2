import { Wrapper } from "@/layout";
import TeamDetailsMain from "@/components/teams/team-details";
import { instructors_data } from "@/data";

export const metadata = {
  title: 'Team Details Page'
}

const TeamDetailsPage = ({params}) => {
    const team = instructors_data.find(item => Number(item.id) === Number(params.id))
    return (
        <Wrapper>
            <TeamDetailsMain team={team} />
        </Wrapper>
    )
}

export default TeamDetailsPage;