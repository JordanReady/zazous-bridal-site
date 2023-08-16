import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ChamberLogo from "../assets/logos/chamber-logo.png";
import WeddingWire1 from "../assets/Logos/wedding-wire-1-green.png";
import WeddingWire2 from "../assets/Logos/wedding-wire-2-green.png";

import "../styles/Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="social-buttons">
        <span className="footer-animation footer-animation-2">
          <a
            href="https://www.facebook.com/zazousbridalboutique/"
            target="_blank"
            className="social-button facebook "
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </span>
        <span className="footer-animation footer-animation-3">
          <a
            href="#/contact"
            className="social-button email footer-animation footer-animation-3"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </span>
        <span className="footer-animation footer-animation-4">
          <a
            href="https://www.pinterest.com/ZazousBridalBoutique/"
            target="_blank"
            className="social-button pinterest footer-animation footer-animation-4"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </span>
        <span className="footer-animation footer-animation-5">
          <a
            href="https://www.instagram.com/zazousbridalboutique/"
            target="_blank"
            className="social-button instagram footer-animation footer-animation-5"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>
      </div>
      <button
        className="back-to-top-btn btn mt-0 mb-3 footer-animation footer-animation-6"
        onClick={handleScrollToTop}
      >
        Back to Top
      </button>

      <div className="logo-container">
        <img
          className="footer-logo footer-animation footer-animation-7"
          src={WeddingWire1}
          alt="Logo"
        />
        <img
          className="footer-logo footer-chamber-logo footer-animation footer-animation-8"
          src={ChamberLogo}
          alt="Logo"
        />
        <img
          className="footer-logo footer-animation footer-animation-9"
          src={WeddingWire2}
          alt="Logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
