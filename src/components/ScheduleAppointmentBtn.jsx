import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ScheduleAppointmentBtn.css";

const ScheduleAppointmentBtn = ({ customClass, text, link }) => {
  const targetURL = link || "#/schedule-appointment";

  return (
    <a className={"hero-button btn" + ` ${customClass}`} href={`${targetURL}`}>
      {text || "Schedule Appointment"}
    </a>
  );
};

export default ScheduleAppointmentBtn;
