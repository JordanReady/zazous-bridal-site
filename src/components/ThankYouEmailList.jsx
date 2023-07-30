import React from "react";

import { ThankYouLogo } from "../components";

import "../styles/ThankYouEmailList.css";

const ThankYouEmailList = ({ firstName, email, phoneNumber }) => {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  return (
    <div className="thank-you-message thank-you-email-list thank-you-email-list-animation thank-you-email-list-animation-start">
      <h2 className="thank-you-email-list-heading thank-you-email-list-animation thank-you-email-list-animation-1">
        Thank You, {firstName}!
      </h2>
      {phoneNumber && !email && (
        <p className="thank-you-text thank-you-email-list-animation thank-you-email-list-animation-2">
          Keep an eye out for sales, promotions, and events to your phone
          number: {phoneNumber}.
        </p>
      )}
      {!phoneNumber && email && (
        <p className="thank-you-text thank-you-email-list-animation thank-you-email-list-animation-2">
          Keep an eye out for sales, promotions, and events to your email:{" "}
          {email}.
        </p>
      )}
      {phoneNumber && email && (
        <p className="thank-you-text thank-you-email-list-animation thank-you-email-list-animation-2">
          Keep an eye out for sales, promotions, and events to your phone
          number: {phoneNumber} and your email: {email}.
        </p>
      )}
      <div className="thank-you-email-list-animation thank-you-email-list-animation-3">
        <ThankYouLogo customClass={""} />
      </div>
    </div>
  );
};

export default ThankYouEmailList;
