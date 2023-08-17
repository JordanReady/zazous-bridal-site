import React from "react";

import "../styles/ThankYouContactMessage.css";

import { ThankYouLogo } from "../components";

const ThankYouContactMessage = ({
  firstName,
  email,
  phoneNumber,
  contactType,
  subject,
}) => {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  return (
    <div className=" thank-you-message thank-you-contact-animation thank-you-contact-animation-start thank-you-contact-message">
      <h2 className="thank-you-contact-message-heading thank-you-contact-animation thank-you-contact-animation-1">
        Thank You {firstName}!
      </h2>
      <div className="thank-you-contact-text-container">
        <p className="thank-you-contact-animation thank-you-contact-animation-2">
          Your message has been sent regarding {subject}.
        </p>
        <p className="thank-you-contact-animation thank-you-contact-animation-3">
          We will contact you by{" "}
          {contactType === "Phone" && phoneNumber ? (
            <span>phone at {phoneNumber}</span>
          ) : (
            <span>email at {email}</span>
          )}{" "}
          ASAP!
        </p>
        <div className="thank-you-contact-animation thank-you-contact-animation-4">
          <ThankYouLogo customClass={""} />
        </div>
      </div>
    </div>
  );
};

export default ThankYouContactMessage;
