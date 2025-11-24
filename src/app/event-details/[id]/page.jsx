import { Wrapper } from "@/layout";
import EventDetailsMain from "@/components/event-details";
import { event_data } from "@/data";

export const metadata = {
  title: 'Event Details'
}

const EventDetailsPage = ({params}) => {
  const event = event_data.find(item => Number(item.id) === Number(params.id))
    return (
        <Wrapper>
            <EventDetailsMain event={event} />
        </Wrapper>
    )
}

export default EventDetailsPage;