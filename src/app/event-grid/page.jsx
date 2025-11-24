import { Wrapper } from "@/layout";
import EventGridMain from "@/components/event-grid";

export const metadata = {
  title: 'Event Grid'
}

const EventGridPage = () => {
    return (
        <Wrapper>
            <EventGridMain />
        </Wrapper>
    )
}

export default EventGridPage;