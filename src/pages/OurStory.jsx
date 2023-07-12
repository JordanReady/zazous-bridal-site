import React from "react";
import Img1 from "../assets/ourStory/store-img-1.jpeg";
import Img2 from "../assets/ourStory/store-img-2.jpeg";
import Img3 from "../assets/ourStory/store-img-3.jpeg";
import Img4 from "../assets/ourStory/store-img-4.jpeg";
import Img5 from "../assets/ourStory/store-img-5.jpeg";

import { ScheduleAppointmentBtn } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/OurStory.css";

const OurStory = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Our Story
      </h2>
      <hr style={{ color: "var(--primary-color)" }} />
      <div className="row mt-4">
        <div
          className="col-lg-6 d-flex flex-column align-items-center"
          style={{ "--i": 2 }}
        >
          <img src={Img1} alt="Image" className="main-img" />
        </div>
        <div className=" story-text col-lg-6 d-flex flex-column align-items-center mt-4 mt-md-0">
          <p style={{ "--i": 3 }}>
            Not only does Zazou's pride itself in being innovative, but we also
            have a strong foundation based on a true love and passion for the
            bridal industry. Opening our doors in Dubuque in 2013, Zazou's has
            since grown into a thriving and progressive business. Located in the
            heart of the Millwork District of Dubuque, our boutique has a fresh
            and trendy vibe that make men and women feel welcomed and invited.
          </p>
          <p style={{ "--i": 4 }}>
            We offer a different look for every variety of bride and can work
            with just about any budget. Our bridal consultants are well-versed
            in helping each bride feel comfortable and making the journey
            towards finding their dream dress as smooth as possible right here
            in Dubuque, IA. We also offer bridesmaids dresses, mother of the
            bride & groom dresses, tuxedos, prom dresses, jewelry, hair pieces,
            veils, and so much more!
          </p>

          <ScheduleAppointmentBtn style={5} />
        </div>
      </div>

      <div className="row mt-4 small-img-row">
        <div
          className="col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center"
          style={{ "--i": 6 }}
        >
          <img className="small-img" src={Img2} alt="Image" />
        </div>
        <div
          className="col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center"
          style={{ "--i": 7 }}
        >
          <img className="small-img" src={Img3} alt="Image" />
        </div>
        <div
          className="col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center"
          style={{ "--i": 8 }}
        >
          <img className="small-img" src={Img4} alt="Image" />
        </div>
        <div
          className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center"
          style={{ "--i": 9 }}
        >
          <img className="small-img" src={Img5} alt="Image" />{" "}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
