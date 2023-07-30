import React from "react";
import Img1 from "../assets/bridal/bridal-image-1.png";
import Img2 from "../assets/bridal/bridal-image-3.png";
import Img3 from "../assets/bridal/bridal-image-2.png";
import Img4 from "../assets/bridal/bridal-image-4.png";
import Img5 from "../assets/bridal/bridal-image-5.png";
import Img6 from "../assets/bridal/bridal-image-6.png";
import Img7 from "../assets/bridal/bridal-image-7.png";
import Img8 from "../assets/bridal/bridal-image-8.png";
import Img9 from "../assets/bridal/bridal-image-9.png";
import Img10 from "../assets/bridal/bridal-image-10.png";
import Img11 from "../assets/bridal/bridal-image-11.png";
import Img12 from "../assets/bridal/bridal-image-12.png";
import Img13 from "../assets/bridal/bridal-image-13.png";
import Img14 from "../assets/bridal/bridal-image-14.png";

import { DressCard, PageHeading } from "../components";

import "../styles/Bridal.css";

const Bridal = () => {
  return (
    <div className="container bridal-container">
      <PageHeading name={"Bridal Collection"} animationDirection={""} />

      <div className="bridal-text text-center">
        <p className="bridal-animation bridal-animation-2">
          Below are our wedding dress designers. Please keep in mind that we
          only carry a select amount of dresses from each designer. Zazou's has
          an open sales floor, allowing you to get close and personal with all
          the gowns. We have over 300 bridal gowns, ranging from $99-$3,100.
        </p>
      </div>

      <div className="row mb-4 three-card-row">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-3 d-flex justify-content-center">
          <DressCard
            image={Img1}
            designer={"Allure"}
            collection={"Romance"}
            link={"https://allurebridals.com/collections/allure-romance/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-4 d-flex justify-content-center">
          <DressCard
            image={Img2}
            designer={"Allure"}
            collection={"Madison James"}
            link={"http://www.allurebridals.com/category/madisonjamesbridal"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-5 d-flex justify-content-center">
          <DressCard
            image={Img3}
            designer={"Allure"}
            collection={"Couture"}
            link={"http://www.allurebridals.com/category/couture"}
          />
        </div>
      </div>
      <div className="row mb-4 three-card-row">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-6 d-flex justify-content-center">
          <DressCard
            image={Img4}
            designer={"Allure"}
            collection={"Wilderly"}
            link={"https://allurebridals.com/wilderly-bride"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-7 d-flex justify-content-center">
          <DressCard
            image={Img5}
            designer={"Allure"}
            collection={"Abella"}
            link={"https://allurebridals.com/abella"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-8 d-flex justify-content-center">
          <DressCard
            image={Img6}
            designer={"Allure"}
            collection={"Bridal"}
            link={"http://www.allurebridals.com/category/allure"}
          />
        </div>
      </div>
      <div className="row mb-4 three-card-row">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-9 d-flex justify-content-center">
          <DressCard
            image={Img7}
            designer={"Justin Alexander"}
            collection={"Signature"}
            link={"https://www.justinalexander.com/justin-alexander-signature/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-10 d-flex justify-content-center">
          <DressCard
            image={Img8}
            designer={"Justin Alexander"}
            collection={"Sincerity"}
            link={
              "https://www.justinalexander.com/sincerity-bridal/collection/wedding-dresses/"
            }
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-11 d-flex justify-content-center">
          <DressCard
            image={Img9}
            designer={"Justin Alexander"}
            collection={"Adore"}
            link={"https://www.justinalexander.com/adore-justin-alexander/"}
          />
        </div>
      </div>
      <div className="row mb-4 three-card-row">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-12 d-flex justify-content-center">
          <DressCard
            image={Img10}
            designer={"Maggie Sottero"}
            collection={"Maggie Sottero"}
            link={"https://www.maggiesottero.com/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-13 d-flex justify-content-center">
          <DressCard
            image={Img11}
            designer={"Maggie Sottero"}
            collection={"Sottero & Midgley"}
            link={
              "https://www.maggiesottero.com/find-your-style#page=sottero-and-midgley"
            }
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-14 d-flex justify-content-center">
          <DressCard
            image={Img12}
            designer={"Maggie Sottero"}
            collection={"Rebecca Ingram"}
            link={"https://www.maggiesottero.com/find-your-style#designers=3-4"}
          />
        </div>
      </div>
      <div className="row mb-4 two-card-row">
        <div className="col-lg-2 dress-card-spacer"></div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-15 d-flex justify-content-center">
          <DressCard
            image={Img13}
            designer={"Casablanca"}
            collection={"Bridal"}
            link={"https://www.casablancabridal.com/collections/gowns/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-16 d-flex justify-content-center">
          <DressCard
            image={Img14}
            designer={"Casablanca"}
            collection={"Beloved"}
            link={"https://www.belovedbycasablancabridal.com/"}
          />
        </div>
        <div className="col-lg-2 dress-card-spacer"></div>
      </div>
    </div>
  );
};

export default Bridal;
