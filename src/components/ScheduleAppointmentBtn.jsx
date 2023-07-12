import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ScheduleAppointmentBtn.css";

const ScheduleAppointmentBtn = ({ style, customClass, text, link }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = link || "/schedule-appointment";
  };

  return (
    <button
      className={"hero-button btn" + ` ${customClass}`}
      onClick={handleClick}
      style={{ "--i": style }}
    >
      {text || "Schedule Appointment"}
    </button>
  );
};

export default ScheduleAppointmentBtn;
