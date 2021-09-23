import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map(({ id, title, location, date, image }) => (
        <EventItem
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
          key={id}
        />
      ))}
    </ul>
  );
}
