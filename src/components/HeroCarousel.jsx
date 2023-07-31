import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../assets/carousel/carousel-img-1.jpg";
import Img2 from "../assets/carousel/carousel-img-2.jpg";
import Img3 from "../assets/carousel/carousel-img-3.jpg";
import Img4 from "../assets/carousel/carousel-img-4.jpg";
import Img5 from "../assets/carousel/carousel-img-5.jpg";

import "../styles/HeroCarousel.css";

import { HeroCarouselItem } from "../components";

const HeroCarousel = () => {
  const carouselRef = useRef(null);
  let carousel;

  useEffect(() => {
    const loadCarouselScript = async () => {
      // Dynamically import the Bootstrap JS script
      const bootstrap = await import(
        "bootstrap/dist/js/bootstrap.bundle.min.js"
      );
      // Initialize the carousel once the script is loaded
      const carouselElement = carouselRef.current;
      carousel = new bootstrap.Carousel(carouselElement, {
        pause: "false",
        interval: 4000,
      });
      // Make the carousel available in the console for debugging
      window.carousel = carousel;

      // Start automatic slide change
      startAutomaticSlideChange();
    };

    loadCarouselScript();

    // Clear the interval and dispose the carousel when the component unmounts
    return () => {
      if (carousel) {
        clearInterval(carousel.interval);
        carousel.dispose();
      }
    };
  }, []);

  const startAutomaticSlideChange = () => {
    // Clear previous interval if any
    clearInterval(carousel.interval);
    // Start a new interval for automatic slide change
    carousel.interval = setInterval(() => {
      carousel.next();
    }, 4000);
  };

  const handleCarouselControlClick = () => {
    startAutomaticSlideChange();
  };

  return (
    <>
      <div
        className="carousel slide carousel-fade"
        ref={carouselRef}
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ratio-4x3">
            <HeroCarouselItem
              img={Img1}
              caption={"Brittney Hoffman Artistry"}
            />
          </div>
          <div className="carousel-item ratio-4x3">
            <HeroCarouselItem
              img={Img2}
              caption={"Ashlee Paige Spencer Photography"}
            />
          </div>
          <div className="carousel-item ratio-4x3">
            <HeroCarouselItem img={Img3} caption={"Tamara Hanson Photo"} />
          </div>
          <div className="carousel-item ratio-4x3">
            <HeroCarouselItem img={Img4} caption={false} />
          </div>
          <div className="carousel-item ratio-4x3">
            <HeroCarouselItem img={Img5} caption={"Elle May Photography"} />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href=".carousel"
          role="button"
          data-bs-slide="prev"
          onClick={handleCarouselControlClick}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href=".carousel"
          role="button"
          data-bs-slide="next"
          onClick={handleCarouselControlClick}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
        <ol className="carousel-indicators thumbnail-imgs">
          <div className="carousel-animation carousel-animation-1">
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="0"
              className="active"
              style={{ backgroundImage: `url(${Img1})`, "--i": 2 }}
              onClick={handleCarouselControlClick}
            />
          </div>
          <div className="carousel-animation carousel-animation-2">
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="1"
              style={{ backgroundImage: `url(${Img2})`, "--i": 3 }}
              onClick={handleCarouselControlClick}
            />
          </div>
          <div className="carousel-animation carousel-animation-3">
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="2"
              style={{ backgroundImage: `url(${Img3})`, "--i": 4 }}
              onClick={handleCarouselControlClick}
            />
          </div>
          <div className="carousel-animation carousel-animation-4">
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="3"
              style={{ backgroundImage: `url(${Img4})`, "--i": 5 }}
              onClick={handleCarouselControlClick}
            />
          </div>
          <div className="carousel-animation carousel-animation-5">
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="4"
              style={{ backgroundImage: `url(${Img5})`, "--i": 6 }}
              onClick={handleCarouselControlClick}
            />
          </div>
        </ol>
      </div>
      <div className="thumbnail-spacer"></div>
    </>
  );
};

export default HeroCarousel;
