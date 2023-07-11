import React from "react";

import "../styles/PastEventsCard.css";

const PastEventsCard = () => {
  const pastEvents = [
    "Dyersville Commercial Club Bridal Show",
    "Bridal Expo",
    "Iowa Wedding Expo",
    "Chicago Bridal Market",
    "Steeple Square Bridal Show",
    "Tri-State Wedding Extravaganza",
  ];

  return (
    <div className="card past-event-card">
      <ul className="d-flex flex-column justify-content-center">
        {pastEvents.map((event) => (
          <li key={event.id} className="list-group-item ">
            <span className="bullet-point">&#8226;</span>
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastEventsCard;
