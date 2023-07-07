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
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <button
        className="back-to-top-btn btn mt-0 mb-3"
        onClick={handleScrollToTop}
      >
        Back to Top
      </button>
      <div className="social-buttons">
        <a
          href="https://www.facebook.com/zazousbridalboutique/"
          target="_blank"
          className="social-button facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="/contact" className="social-button email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.pinterest.com/ZazousBridal/"
          target="_blank"
          className="social-button pinterest"
        >
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a
          href="https://www.instagram.com/zazousbridalboutique/"
          target="_blank"
          className="social-button instagram"
        >
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
