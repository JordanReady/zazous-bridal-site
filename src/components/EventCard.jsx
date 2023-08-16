import React from "react";
import { ScheduleAppointmentBtn } from "../components";

import "../styles/EventCard.css";

const EventCard = ({
  title,
  date,
  time,
  info,
  scheduleButton,
  customClass,
}) => {
  return (
    <div className={customClass + " card event-card"}>
      <div className="card-body">
        <div className="event-header-container">
          <h5 className="event-card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted event-card-subtitle">
            {date} - {time}
          </h6>
        </div>
        <p className="card-text event-card-text">{info}</p>
        {scheduleButton && <ScheduleAppointmentBtn />}
      </div>
    </div>
  );
};

export default EventCard;
