import React from "react";
import Logo from "../assets/Logos/Zazous-Logo-Green.png";

import "../styles/ThankYouLogo.css";

const ThankYouLogo = ({ customClass }) => {
  return (
    <div className="row d-flex justify-content-center align-items-center contact-logo-container">
      <img
        src={Logo}
        alt="Logo"
        className={`thank-you-logo-image ${customClass}`}
      />
    </div>
  );
};

export default ThankYouLogo;
