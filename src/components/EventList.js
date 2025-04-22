import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "React Advanced Patterns",
    speaker: "Jane Smith",
    time: "10:00 AM - 11:30 AM",
    description: "Learn advanced React patterns for scalable applications",
  },
  {
    id: 2,
    title: "State Management in 2023",
    speaker: "John Doe",
    time: "12:00 PM - 1:30 PM",
    description: "Comparison of modern state management solutions",
  },
  {
    id: 3,
    title: "CSS-in-JS Deep Dive",
    speaker: "Alex Johnson",
    time: "2:00 PM - 3:30 PM",
    description: "Master CSS-in-JS with practical examples",
  },
];

const EventList = ({ onSessionSelect }) => {
  return (
    <section className="event-list">
      <h2>Upcoming Sessions</h2>
      <div className="event-cards">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p className="speaker">{event.speaker}</p>
            <p className="time">{event.time}</p>
            <p className="description">{event.description}</p>
            <Link
              to="/register"
              className="register-button"
              onClick={() => onSessionSelect(event)}
            >
              Register
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;
