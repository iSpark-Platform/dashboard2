import { Wrapper } from "@/layout";
import EventDetailsMain from "@/components/event-details";
import { event_data } from "@/data";

export const metadata = {
  title: 'Event Details'
}

const EventDetailsPage = () => {
  const event = event_data[0]
    return (
        <Wrapper>
            <EventDetailsMain event={event} />
        </Wrapper>
    )
}

export default EventDetailsPage;