import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ScheduleAppointmentBtn.css";

const ScheduleAppointmentBtn = ({ style }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "/schedule-appointment";
  };

  return (
    <button
      className="hero-button btn"
      onClick={handleClick}
      style={{ "--i": style }}
    >
      Schedule Appointment
    </button>
  );
};

export default ScheduleAppointmentBtn;
