import React from "react";

import "../styles/ThankYouMessage.css";

import { ScheduleAppointmentBtn } from "../components";

const ThankYouMessage = ({
  appointmentType,
  startDate,
  appointmentTime,
  email,
  phoneNumber,
  contactType,
  mailingList,
  textAlerts,
  firstName,
}) => {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  if (phoneNumber.length === 10) {
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  } else if (phoneNumber.charAt(0) === "1" && phoneNumber.length === 11) {
    phoneNumber = phoneNumber.replace(
      /(\d{1})(\d{3})(\d{3})(\d{4})/,
      "+$1-$2-$3-$4"
    );
  }

  return (
    <div className="thank-you-message thank-you-animation thank-you-animation-start">
      <h2 className="thank-you-message-heading-top thank-you-animation thank-you-animation-1">
        Thank You {firstName}!
      </h2>
      <div className="appointment-details-container">
        <p className="thank-you-animation thank-you-animation-2">
          Your appointment request has been submitted successfully.
        </p>
        <div className="appointment-details">
          <h3 className="thank-you-message-heading thank-you-animation thank-you-animation-3">
            Your Appointment Details
          </h3>
          <p className="thank-you-detail thank-you-animation thank-you-animation-4">
            Appointment: {appointmentType}
          </p>
          <p className="thank-you-detail thank-you-animation thank-you-animation-5">
            Date: {startDate.toDateString()}
          </p>
          <p className="thank-you-detail thank-you-animation thank-you-animation-6">
            Time: {appointmentTime}
          </p>
        </div>
        <p className="thank-you-contact-method-text thank-you-animation thank-you-animation-7">
          We will contact you by{" "}
          {contactType === "Phone" ? (
            <span>phone at {phoneNumber}</span>
          ) : (
            <span>email at {email}</span>
          )}{" "}
          ASAP!
        </p>
        <p className="thank-you-questions-text thank-you-animation thank-you-animation-8">
          If you have any questions, or something changes regarding your
          request, please feel free to contact us!
        </p>
        <div className="thank-you-btn-container thank-you-animation thank-you-animation-9">
          <ScheduleAppointmentBtn
            text={"Contact Us"}
            link={"#/contact"}
            customClass={"thank-you-btn"}
          />
        </div>
        {mailingList && (
          <p className="thank-you-alert-message thank-you-animation thank-you-animation-10">
            Be sure to keep an eye out for our emails. You have subscribed to
            our mailing list.
          </p>
        )}
        {textAlerts && (
          <p className="thank-you-alert-message thank-you-animation thank-you-animation-11">
            Be sure to keep an eye out for text alerts about your account. You
            have opted to receive text alerts.
          </p>
        )}
      </div>
    </div>
  );
};

export default ThankYouMessage;
