import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeddingWire1 from "../assets/wedding-wire-1.jpg";
import WeddingWire2 from "../assets/wedding-wire-2.jpg";

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
    <div className="container">
      <div className="carousel-container" style={{ "--i": 1 }}>
        <HeroCarousel />
      </div>
      <section className="hero-text-container">
        <h2 className="hero-text" style={{ "--i": 7 }}>
          Zazou’s Bridal Boutique & Tuxedos prides ourselves on being innovative
          and unique when it comes to providing the ultimate bridal experience!
          We carry wedding gowns, tuxedos, bridesmaids, mothers, flower girls,
          prom, first communions, accessories, and more. Our modern atmosphere
          in the Dubuque Millwork District is the perfect environment to help
          any bride say, "I found the gown at Zazou's!”
        </h2>
        <ScheduleAppointmentBtn style={8} />
      </section>
      <section className="home-info mt-4">
        <div class="row">
          <StoreHours
            style={9}
            col={"col-md-4"}
            customClass={"mt-4 home-store-hours"}
          />
          <div
            className="col-md-4 mt-4 mb-4 d-flex justify-content-center align-items-center wedding-wire-container"
            style={{ "--i": 10 }}
          >
            <div className="row">
              <div className="col">
                <img src={WeddingWire1} alt="Image 1" className="img-fluid" />
              </div>
              <div className="col">
                <img src={WeddingWire2} alt="Image 2" className="img-fluid" />
              </div>
            </div>
          </div>
          <StoreInfo style={11} col={"col-md-4"} customClass={"mt-4 mb-4"} />
        </div>
      </section>
    </div>
  );
};

export default Home;
