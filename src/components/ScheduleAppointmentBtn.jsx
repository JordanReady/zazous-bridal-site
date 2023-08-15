import React from "react";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ScheduleAppointmentBtn.css";

const ScheduleAppointmentBtn = ({ style, customClass, text, link }) => {
  const history = createBrowserHistory();

  const handleButtonClick = () => {
    const targetURL = link || "#/schedule-appointment"; // Use relative URL
    history.push(targetURL);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={"hero-button btn" + ` ${customClass}`}
      onClick={handleButtonClick}
      style={{ "--i": style }}
    >
      {text || "Schedule Appointment"}
    </button>
  );
};

export default ScheduleAppointmentBtn;
