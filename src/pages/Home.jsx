import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  ScheduleAppointmentBtn,
  StoreHours,
  StoreInfo,
  StoreAwards,
  HeroCarousel,
} from "../components";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container home-animation home-animation-start">
      <div className="carousel-container home-animation home-animation-1">
        <HeroCarousel />
      </div>
      <section className="hero-text-container">
        <h2 className="hero-text home-animation home-animation-2">
          Zazou’s Bridal Boutique & Tuxedos prides ourselves on being innovative
          and unique when it comes to providing the ultimate bridal experience!
          We carry wedding gowns, tuxedos, bridesmaids, mothers, flower girls,
          prom, first communions, accessories, and more. Our modern atmosphere
          in the Dubuque Millwork District is the perfect environment to help
          any bride say, "I found the gown at Zazou's!”
        </h2>
        <div className="home-btn-container home-animation home-animation-3">
          <ScheduleAppointmentBtn customClass={"hero-btn"} />
        </div>
      </section>
      <section className="home-info mt-4">
        <div class="row home-store-info-row">
          <StoreHours
            col={"col-xs-12 col-md-6"}
            customClass={
              "mt-4 home-store-hours home-animation home-animation-4"
            }
          />

          <StoreInfo
            col={"col-xs-12 col-md-6"}
            customClass={
              "mt-4 mb-4 home-store-info home-animation home-animation-7"
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
