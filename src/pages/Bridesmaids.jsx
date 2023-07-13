import React from "react";
import Img1 from "../assets/bridesmaids/bridesmaids-image-1.jpg";
import Img2 from "../assets/bridesmaids/bridesmaids-image-3.jpg";
import Img3 from "../assets/bridesmaids/bridesmaids-image-2.jpg";
import Img4 from "../assets/bridesmaids/bridesmaids-image-4.jpg";
import Img5 from "../assets/bridesmaids/bridesmaids-image-5.jpg";

import { DressCard } from "../components";

import "../styles/Bridesmaids.css";

const Bridesmaids = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center text-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Bridesmaids & Mothers Collection
      </h2>
      <hr style={{ color: "var(--primary-color)" }} />

      <div className="bridesmaids-text text-center">
        <p className="bridesmaids-animation bridesmaids-animation-1">
          With Zazou's being a one-stop-shop for your wedding attire needs, we
          offer a wide selection of bridesmaids and mother’s dresses. From
          sequins to chiffon and just about any color under the sun, we can help
          anyone find the perfect dresses to compliment their gown!
          Bridesmaids/mothers dresses typically take 6 - 12 weeks to order,
          depending on the manufacturer's guidelines.
        </p>
        <div className="bridesmaids-promotion-container bridesmaids-animation bridesmaids-animation-2">
          <span className="bridesmaids-promotion">Special Promotion!</span>
          <br />
          <p className="">
            If you find your gown at Zazou’s, your gals (bridesmaids, mothers,
            littles) get 10% off their gown!
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-3">
          <DressCard
            image={Img1}
            designer={"Allure"}
            collection={"Romance"}
            link={"https://allurebridesmaidss.com/collections/allure-romance/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-4">
          <DressCard
            image={Img2}
            designer={"Allure"}
            collection={"Madison James"}
            link={
              "http://www.allurebridesmaidss.com/category/madisonjamesbridesmaids"
            }
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-5">
          <DressCard
            image={Img3}
            designer={"Allure"}
            collection={"Couture"}
            link={"http://www.allurebridesmaidss.com/category/couture"}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-2"></div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-6">
          <DressCard
            image={Img4}
            designer={"Casablanca"}
            collection={"bridesmaids"}
            link={"https://www.casablancabridesmaids.com/collections/gowns/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-7">
          <DressCard
            image={Img5}
            designer={"Casablanca"}
            collection={"Beloved"}
            link={"https://www.belovedbycasablancabridesmaids.com/"}
          />
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Bridesmaids;
