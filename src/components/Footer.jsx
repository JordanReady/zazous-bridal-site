import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ChamberLogo from "../assets/chamber-logo.png";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-buttons">
        <a href="#" className="social-button facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-button email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="#" className="social-button pinterest">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="#" className="social-button instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="logo-container">
        <img src={ChamberLogo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
