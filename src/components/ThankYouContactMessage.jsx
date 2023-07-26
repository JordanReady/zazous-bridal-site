import React from "react";

import "../styles/ThankYouContactMessage.css";

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
    <div className=" thank-you-message thank-you-animation thank-you-animation-start thank-you-contact-message">
      <h2 className="thank-you-message-heading thank-you-animation thank-you-animation-1">
        Thank You {firstName}!
      </h2>
      <p className="thank-you-animation thank-you-animation-2">
        Your message has been sent regarding {subject}.
      </p>
      <p className="thank-you-animation thank-you-animation-3">
        We will contact you by{" "}
        {contactType === "Phone" && phoneNumber ? (
          <span>phone at {phoneNumber}</span>
        ) : (
          <span>email at {email}</span>
        )}{" "}
        ASAP!
      </p>
    </div>
  );
};

export default ThankYouContactMessage;
