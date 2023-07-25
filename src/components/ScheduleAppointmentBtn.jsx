import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ScheduleAppointmentBtn.css";

const ScheduleAppointmentBtn = ({ style, customClass, text, link }) => {
  const history = createBrowserHistory();

  const handleButtonClick = () => {
    const targetURL = link || "/zazous-bridal-site/schedule-appointment";
    history.push(targetURL);
    window.scrollTo(0, 0);
    window.location.reload();
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
