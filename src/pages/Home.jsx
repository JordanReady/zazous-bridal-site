import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import Img1 from "../assets/property-pic-1.jpg";
import Img2 from "../assets/property-pic-2.jpeg";
import Img3 from "../assets/property-pic-3.jpg";
import Img4 from "../assets/property-pic-4.jpg";

import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carouselElement = document.querySelector(".carousel");
    new Carousel(carouselElement);
  }, []);

  return (
    <div className="container">
      <div className="carousel slide carousel-fade" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="0"
            className="active"
          />
          <li data-bs-target=".carousel" data-bs-slide-to="1" />
          <li data-bs-target=".carousel" data-bs-slide-to="2" />
          <li data-bs-target=".carousel" data-bs-slide-to="3" />
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active ratio-4x3">
            <img
              src={Img3}
              className="d-block w-100 carousel-image"
              alt="Slide 1"
            />
            <div className="carousel-caption">
              <h3>Slide 1 Title</h3>
              <p>Slide 1 Description</p>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img2}
              className="d-block w-100 carousel-image"
              alt="Slide 2"
            />
            <div className="carousel-caption">
              <h3>Slide 2 Title</h3>
              <p>Slide 2 Description</p>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img3}
              className="d-block w-100 carousel-image"
              alt="Slide 3"
            />
            <div className="carousel-caption">
              <h3>Slide 3 Title</h3>
              <p>Slide 3 Description</p>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img2}
              className="d-block w-100 carousel-image"
              alt="Slide 4"
            />
            <div className="carousel-caption">
              <h3>Slide 4 Title</h3>
              <p>Slide 4 Description</p>
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
      </div>
      <section className="hero-text-container">
        <h2 className="hero-text">
          Zazou’s Bridal Boutique & Tuxedos prides ourselves on being innovative
          and unique when it comes to providing the ultimate bridal experience!
          We carry wedding gowns, tuxedos, bridesmaids, mothers, flower girls,
          prom, first communions, accessories, and more. Our modern atmosphere
          in the Dubuque Millwork District is the perfect environment to help
          any bride say, "I found the gown at Zazou's!”
        </h2>
        <button className="hero-button">Schedule Appointment</button>
      </section>
    </div>
  );
};

export default Home;
