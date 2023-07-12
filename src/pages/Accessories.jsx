import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Img1 from "../assets/property-pic-1.jpg";
import Img2 from "../assets/property-pic-2.jpg";
import Img3 from "../assets/property-pic-3.jpg";
import Img4 from "../assets/property-pic-4.jpg";
import Img5 from "../assets/property-pic-5.jpg";

import "../styles/Accessories.css";

const Accessories = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Accessories
      </h2>
      <hr style={{ color: "#d39660" }} />
      <div className="accessories-text text-center">
        {/* Paragraph */}
        <p className="accessories-animation accessories-animation-1">
          Whether you need a bracelet, necklace, or earrings we’ve got you
          covered! We carry a wide selection of belts, straps, jewelry, veils,
          hair pieces, shawls, etc. If you aren’t finding what you’re looking
          for, we have access to many vendors that we can order from. Most
          accessories tend to be in stock and can be shipped within business
          days, however there are those times where they are not in stock and
          may take up to 12 weeks to get in.
        </p>
      </div>

      {/* First row of three images */}
      <div className="row">
        <div className="col-md-4">
          <img
            src={Img1}
            alt="Image 1"
            className="img-fluid accessories-img-large accessories-animation accessories-animation-2"
          />
        </div>
        <div className="col-md-4">
          <img
            src={Img2}
            alt="Image 2"
            className="img-fluid accessories-img-large accessories-animation accessories-animation-3"
          />
        </div>
        <div className="col-md-4">
          <img
            src={Img3}
            alt="Image 3"
            className="img-fluid accessories-img-large accessories-animation accessories-animation-4"
          />
        </div>
      </div>

      {/* Second row of four images */}
      <div className="row">
        <div className="col-md-6 col-lg-3 mt-3">
          <img
            src={Img4}
            alt="Image 4"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-5"
          />
        </div>
        <div className="col-md-6 col-lg-3 mt-3">
          <img
            src={Img5}
            alt="Image 5"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-6"
          />
        </div>
        <div className="col-md-6 col-lg-3 mt-3">
          <img
            src={Img2}
            alt="Image 6"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-7"
          />
        </div>
        <div className="col-md-6 col-lg-3 mt-3">
          <img
            src={Img3}
            alt="Image 7"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
