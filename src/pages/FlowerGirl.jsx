import React from "react";
import Img1 from "../assets/flowerGirl/flowergirl-image-1.jpg";
import Img2 from "../assets/flowerGirl/flowergirl-image-2.jpg";
import Img3 from "../assets/flowerGirl/flowergirl-image-3.jpg";
import Img4 from "../assets/flowerGirl/flowergirl-image-4.jpg";
import Img5 from "../assets/flowerGirl/flowergirl-image-5.jpg";
import Img6 from "../assets/flowerGirl/flowergirl-image-6.jpg";
import Img7 from "../assets/flowerGirl/flowergirl-image-7.jpg";
import Img8 from "../assets/flowerGirl/flowergirl-image-8.jpg";

import { DressCard, PageHeading } from "../components";

import "../styles/FlowerGirl.css";

const FlowerGirl = () => {
  return (
    <div className="container flowergirl-container">
      <PageHeading
        name={"Flower Girl & First Communion Collection"}
        animationDirection={""}
      />

      <div className="flowergirl-text text-center flowergirl-animation flowergirl-animation-1">
        <p>
          Zazou's also offers a wide variety of flower girl and first communion
          dresses. Our featured designer, Rosebud Fashions, leaves little to be
          desired. Each gown is offered in a variety of colors. We offer Joan
          Calabrese off the rack.
        </p>
      </div>

      <div className="row mb-4 four-card-row ">
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-2 d-flex justify-content-center">
          <DressCard
            image={Img1}
            designer={"Rosebud Fashion"}
            collection={"flowergirl"}
            link={"https://rosebudfashions.com/"}
            customClass={"flowergirl-card"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-3 d-flex justify-content-center">
          <DressCard
            image={Img2}
            designer={"Rosebud Fashion"}
            collection={"flowergirl"}
            link={"https://rosebudfashions.com/"}
            customClass={"flowergirl-card"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-4 d-flex justify-content-center">
          <DressCard
            image={Img3}
            designer={"Rosebud Fashion"}
            collection={"flowergirl"}
            link={"https://rosebudfashions.com/"}
            customClass={"flowergirl-card"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-5 d-flex justify-content-center">
          <DressCard
            image={Img4}
            designer={"Rosebud Fashion"}
            collection={"flowergirl"}
            link={"https://rosebudfashions.com/"}
            customClass={"flowergirl-card"}
          />
        </div>
      </div>
      <div className="row mb-4 four-card-row">
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-6 d-flex justify-content-center">
          <DressCard
            image={Img5}
            designer={"Joan Calabrese"}
            collection={"flowergirl"}
            link={"https://joancalabrese.ie/"}
            customClass={"flowergirl-card"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-7 d-flex justify-content-center">
          <DressCard
            image={Img6}
            designer={"Joan Calabrese"}
            collection={"flowergirl"}
            link={"https://joancalabrese.ie/"}
            customClass={"flowergirl-card"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-8 d-flex justify-content-center">
          <DressCard
            image={Img7}
            designer={"Joan Calabrese"}
            collection={"flowergirl"}
            link={"https://joancalabrese.ie/"}
            customClass={"flowergirl-card"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 flowergirl-animation flowergirl-animation-9 d-flex justify-content-center">
          <DressCard
            image={Img8}
            designer={"Joan Calabrese"}
            collection={"flowergirl"}
            link={"https://joancalabrese.ie/"}
            customClass={"flowergirl-card"}
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerGirl;
