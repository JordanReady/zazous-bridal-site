import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ScheduleAppointmentBtn.css";

const ScheduleAppointmentBtn = ({ style, customClass, text, link }) => {
  const copyAndRedirect = (e) => {
    e.preventDefault();

    const currentURL = window.location.href;

    const lastSlashIndex = currentURL.lastIndexOf("/");

    const baseURL = currentURL.substring(0, lastSlashIndex);

    const targetURL = baseURL + (link || "/schedule-appointment");

    navigator.clipboard.writeText(targetURL).then(
      () => {
        window.location.href = targetURL;
      },
      (error) => {
        console.error("Copy failed:", error);
      }
    );
  };

  return (
    <button
      className={"hero-button btn" + ` ${customClass}`}
      onClick={copyAndRedirect}
      style={{ "--i": style }}
    >
      {text || "Schedule Appointment"}
    </button>
  );
};

export default ScheduleAppointmentBtn;
