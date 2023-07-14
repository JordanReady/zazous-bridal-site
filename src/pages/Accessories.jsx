import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Img1 from "../assets/accessories/accessories-img-1.jpg";
import Img2 from "../assets/accessories/accessories-img-2.jpg";
import Img3 from "../assets/accessories/accessories-img-3.jpg";
import Img4 from "../assets/accessories/accessories-img-4.jpg";
import Img5 from "../assets/accessories/accessories-img-5.jpg";
import Img6 from "../assets/accessories/accessories-img-6.jpg";
import Img7 from "../assets/accessories/accessories-img-7.jpg";

import "../styles/Accessories.css";

import { PageHeading } from "../components";

const Accessories = () => {
  return (
    <div className="container">
      <PageHeading name={"Accessories"} animationDirection={""} />
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
      <div className="row mt-4">
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src={Img1}
            alt="Image 1"
            className="img-fluid accessories-img-large accessories-animation accessories-animation-2"
          />
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src={Img2}
            alt="Image 2"
            className="img-fluid accessories-img-large accessories-animation accessories-animation-3"
          />
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src={Img3}
            alt="Image 3"
            className="img-fluid accessories-img-large accessories-animation accessories-animation-4"
          />
        </div>
      </div>

      {/* Second row of four images */}
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <img
            src={Img4}
            alt="Image 4"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-5"
          />
        </div>
        <div className="col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <img
            src={Img5}
            alt="Image 5"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-6"
          />
        </div>
        <div className="col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <img
            src={Img6}
            alt="Image 6"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-7"
          />
        </div>
        <div className="col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
          <img
            src={Img7}
            alt="Image 7"
            className="img-fluid accessories-img-small accessories-animation accessories-animation-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
