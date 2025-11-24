import { Wrapper } from "@/layout";
import EventListMain from "@/components/event-list";

export const metadata = {
  title: 'Event List'
}

const EventListPage = () => {
    return (
        <Wrapper>
            <EventListMain />
        </Wrapper>
    )
}

export default EventListPage;