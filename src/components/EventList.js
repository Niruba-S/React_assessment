import React from 'react';
import './EventList.css';

const EventList = () => {
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
  ];

  return (
    <div className="event-list">
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
