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

import { DressCard } from "../components";

import "../styles/Bridal.css";

const Bridal = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Bridal Collection
      </h2>
      <hr style={{ color: "#d39660" }} />

      <div className="bridal-text text-center">
        <p className="bridal-animation bridal-animation-2">
          Below are our wedding dress designers. Please keep in mind that we
          only carry a select amount of dresses from each designer. Zazou's has
          an open sales floor, allowing you to get close and personal with all
          the gowns. We have over 300 bridal gowns, ranging from $99-$3,100.
        </p>
      </div>

      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-3">
          <DressCard
            image={Img1}
            designer={"Allure"}
            collection={"Romance"}
            link={"https://allurebridals.com/collections/allure-romance/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-4">
          <DressCard
            image={Img2}
            designer={"Allure"}
            collection={"Madison James"}
            link={"http://www.allurebridals.com/category/madisonjamesbridal"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-5">
          <DressCard
            image={Img3}
            designer={"Allure"}
            collection={"Couture"}
            link={"http://www.allurebridals.com/category/couture"}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-6">
          <DressCard
            image={Img4}
            designer={"Allure"}
            collection={"Wilderly"}
            link={"https://allurebridals.com/wilderly-bride"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-7">
          <DressCard
            image={Img5}
            designer={"Allure"}
            collection={"Abella"}
            link={"https://allurebridals.com/abella"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-8">
          <DressCard
            image={Img6}
            designer={"Allure"}
            collection={"Bridal"}
            link={"http://www.allurebridals.com/category/allure"}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-9">
          <DressCard
            image={Img7}
            designer={"Justin Alexander"}
            collection={"Signature"}
            link={"https://allurebridals.com/wilderly-bride"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-10">
          <DressCard
            image={Img8}
            designer={"Justin Alexander"}
            collection={"Sincerity"}
            link={"https://allurebridals.com/abella"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-11">
          <DressCard
            image={Img9}
            designer={"Justin Alexander"}
            collection={"Adore"}
            link={"http://www.allurebridals.com/category/allure"}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-12">
          <DressCard
            image={Img10}
            designer={"Maggie Sottero"}
            collection={"Maggie Sottero"}
            link={"https://allurebridals.com/wilderly-bride"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-13">
          <DressCard
            image={Img11}
            designer={"Maggie Sottero"}
            collection={"Sottero & Midgley"}
            link={"https://allurebridals.com/abella"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-14">
          <DressCard
            image={Img12}
            designer={"Justin Alexander"}
            collection={"Rebecca Ingram"}
            link={"http://www.allurebridals.com/category/allure"}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-2"></div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-15">
          <DressCard
            image={Img13}
            designer={"Casablanca"}
            collection={"Bridal"}
            link={"https://www.casablancabridal.com/collections/gowns/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridal-animation bridal-animation-16">
          <DressCard
            image={Img14}
            designer={"Casablanca"}
            collection={"Beloved"}
            link={"https://www.belovedbycasablancabridal.com/"}
          />
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Bridal;
