import React from "react";
import Img1 from "../assets/property-pic-1.jpg";
import Img2 from "../assets/property-pic-2.jpg";
import Img3 from "../assets/property-pic-3.jpg";
import Img4 from "../assets/property-pic-4.jpg";
import Img5 from "../assets/property-pic-5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/OurStory.css";

const OurStory = () => {
  return (
    <div className="container">
      <h2 className="title d-flex justify-content-center">Our Story</h2>
      <div className="row mt-4">
        <div className="col-lg-6 d-flex flex-column align-items-center">
          <img src={Img1} alt="Image" className="main-img" />
        </div>
        <div className=" story-text col-lg-6 d-flex flex-column align-items-center mt-4 mt-md-0">
          <p>
            Not only does Zazou's pride itself in being innovative, but we also
            have a strong foundation based on a true love and passion for the
            bridal industry. Opening our doors in Dubuque in 2013, Zazou's has
            since grown into a thriving and progressive business. Located in the
            heart of the Millwork District of Dubuque, our boutique has a fresh
            and trendy vibe that make men and women feel welcomed and invited.
          </p>
          <p>
            We offer a different look for every variety of bride and can work
            with just about any budget. Our bridal consultants are well-versed
            in helping each bride feel comfortable and making the journey
            towards finding their dream dress as smooth as possible right here
            in Dubuque, IA. We also offer bridesmaids dresses, mother of the
            bride & groom dresses, tuxedos, prom dresses, jewelry, hair pieces,
            veils, and so much more!
          </p>
          <button className="btn btn-primary">Button</button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
          <img className="small-img" src={Img3} alt="Image" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
          <img className="small-img" src={Img3} alt="Image" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
          <img className="small-img" src={Img4} alt="Image" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <img className="small-img" src={Img5} alt="Image" />{" "}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
