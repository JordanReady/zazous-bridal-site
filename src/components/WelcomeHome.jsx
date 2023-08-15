import React from "react";

import { ThankYouLogo } from "../components";
import "../styles/WelcomeHome.css";

const WelcomeHome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title welcome-animation welcome-animation-1">
        Zazou's Bridal Boutique & Tuxedos
      </h1>
      <h2 className="welcome-slogan welcome-animation welcome-animation-2">
        Welcome to the Family!
      </h2>
      <div className=" welcome-animation welcome-animation-3">
        <ThankYouLogo customClass={"welcome-logo"} />
      </div>
    </div>
  );
};

export default WelcomeHome;
