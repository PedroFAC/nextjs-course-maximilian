import { useRouter } from "next/dist/client/router";
import React, { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import Button from "../../components/events/ui/button";
import ErrorAlert from "../../components/events/ui/error-alert";
import { getEventById } from "../../dummy-data";

export default function EventDetailPage() {
  const { query } = useRouter();
  const eventId = query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
        <div className="center">
          <Button link="/">Show All Events</Button>
        </div>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
