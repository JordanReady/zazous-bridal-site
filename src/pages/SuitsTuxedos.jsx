import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Img1 from "../assets/suitsTuxedos/suits-tux-img-1.jpg";
import Img2 from "../assets/suitsTuxedos/suits-tux-img-2.jpg";
import Img3 from "../assets/suitsTuxedos/suits-tux-img-3.jpg";
import Img4 from "../assets/suitsTuxedos/suits-tux-img-4.jpg";

import "../styles/SuitsTuxedos.css";

import { ScheduleAppointmentBtn } from "../components";

const SuitsTuxedos = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Suits & Tuxedos
      </h2>
      <hr style={{ color: "var(--primary-color)" }} />
      <div className="suits-tuxedos-text text-center">
        {/* Paragraphs */}
        <p className="suits-tuxedos-animation suits-tuxedos-animation-1 ">
          At Zazou's, our guys are just as important as our ladies! We work
          hand-in-hand with an Iowa based vendor, Skeffington's, to help men
          look their absolute best for their wedding or special occasion.
          Working with Skeffington's allow us to stay up-to-date with all the
          new and trendy styles, while keeping the price affordable. We offer
          different packages to complete your look!
        </p>
        <p className="suits-tuxedos-animation suits-tuxedos-animation-2 ">
          We recommend setting up an appointment at least four months prior to
          your event to ensure you get the exact look you've envisioned. Have
          guys out of town? No problem! We will work with you on getting
          accurate measurements.
        </p>
        <p className="suits-tuxedos-promotion-text suits-tuxedos-animation suits-tuxedos-animation-8 ">
          <span className="suits-tuxedos-promotion">Special Promotion!</span>
          <br />
          If you find your gown at Zazou’s and get 5+ guys (groomsmen, ushers,
          dads, littles, etc) in tuxedos, the grooms rental fee is waived!
        </p>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-4 d-flex align-items-start justify-content-center">
          {/* First image */}
          <img
            src={Img1}
            alt="Image 1"
            className="img-fluid suits-larger-img suits-tuxedos-img suits-tuxedos-animation suits-tuxedos-animation-4"
          />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          {/* Stacked images */}
          <div className="row align-itmes-center">
            <div className="col-md-12 d-flex justify-content-center">
              <img
                src={Img2}
                alt="Image 2-1"
                className="img-fluid mb-0 mb-sm-3 suits-tuxedos-img suits-smaller-img suits-tuxedos-animation suits-tuxedos-animation-6"
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <img
                src={Img3}
                alt="Image 2-2"
                className="img-fluid suits-tuxedos-img suits-smaller-img suits-tuxedos-animation suits-tuxedos-animation-7"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-start justify-content-center">
          {/* Third image */}
          <img
            src={Img4}
            alt="Image 3"
            className="img-fluid suits-larger-img suits-tuxedos-img suits-tuxedos-animation suits-tuxedos-animation-5"
          />
        </div>
      </div>
      <ScheduleAppointmentBtn style={9} customClass="suits-tuxedos-btn mt-3" />
    </div>
  );
};

export default SuitsTuxedos;
