import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../assets/property-pic-1.jpg";
import Img2 from "../assets/property-pic-2.jpg";
import Img3 from "../assets/property-pic-3.jpg";
import Img4 from "../assets/property-pic-4.jpg";
import Img5 from "../assets/property-pic-5.jpg";

import "../styles/HeroCarousel.css";

const HeroCarousel = () => {
  return (
    <>
      <div
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause={true}
      >
        <div className="carousel-inner">
          <div className="carousel-item active ratio-4x3" style={{ "--i": 1 }}>
            <img
              src={Img1}
              className="d-block w-100 carousel-image"
              alt="Slide 1"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 1 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img2}
              className="d-block w-100 carousel-image"
              alt="Slide 2"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 2 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img3}
              className="d-block w-100 carousel-image"
              alt="Slide 3"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 3 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img4}
              className="d-block w-100 carousel-image"
              alt="Slide 4"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 4 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img5}
              className="d-block w-100 carousel-image"
              alt="Slide 5"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 5 Title</h3>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href=".carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href=".carousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
        <ol className="carousel-indicators thumbnail-imgs">
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="0"
            className="active"
            style={{ backgroundImage: `url(${Img1})`, "--i": 2 }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="1"
            style={{ backgroundImage: `url(${Img2})`, "--i": 3 }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="2"
            style={{ backgroundImage: `url(${Img3})`, "--i": 4 }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="3"
            style={{ backgroundImage: `url(${Img4})`, "--i": 5 }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="4"
            style={{ backgroundImage: `url(${Img5})`, "--i": 6 }}
          />
        </ol>
      </div>
      <div className="thumbnail-spacer"></div>
    </>
  );
};

export default HeroCarousel;
