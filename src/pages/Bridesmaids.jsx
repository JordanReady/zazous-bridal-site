import React from "react";
import Img1 from "../assets/bridesmaids/bridesmaids-image-1.jpg";
import Img2 from "../assets/bridesmaids/bridesmaids-image-3.jpg";
import Img3 from "../assets/bridesmaids/bridesmaids-image-2.jpg";
import Img4 from "../assets/bridesmaids/bridesmaids-image-4.jpg";
import Img5 from "../assets/bridesmaids/bridesmaids-image-5.jpg";

import { DressCard, PageHeading } from "../components";

import "../styles/Bridesmaids.css";

const Bridesmaids = () => {
  return (
    <div className="container">
      <PageHeading
        name={"Bridesmaids & Mothers Collection"}
        animationDirection={""}
      />

      <div className="bridesmaids-text text-center">
        <p className="bridesmaids-animation bridesmaids-animation-1">
          With Zazou's being a one-stop-shop for your wedding attire needs, we
          offer a wide selection of bridesmaids and mother’s dresses. From
          sequins to chiffon and just about any color under the sun, we can help
          anyone find the perfect dresses to compliment their gown! Bridesmaids
          / mothers dresses typically take 6 - 12 weeks to order, depending on
          the manufacturer's guidelines.
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

      <div className="row mb-4 three-card-row">
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-3 d-flex justify-content-center">
          <DressCard
            image={Img1}
            designer={"Allure"}
            collection={"Bridesmaids"}
            link={"https://allurebridals.com/collections/bridesmaids/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-4 d-flex justify-content-center">
          <DressCard
            image={Img2}
            designer={"Christina Wu"}
            collection={"Bridesmaids"}
            link={"https://houseofwu.com/collection/christina-wu-celebration/"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-5 d-flex justify-content-center">
          <DressCard
            image={Img3}
            designer={"Bill Levkoff"}
            collection={"Bridesmaids"}
            link={"https://www.billlevkoff.com/bridesmaid-dresses/"}
          />
        </div>
      </div>
      <div className="row mb-4 two-card-row">
        <div className="col-lg-2"></div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-6 d-flex justify-content-center">
          <DressCard
            image={Img4}
            designer={"Adrianna Papell Platinum"}
            collection={"Great for Mothers"}
            link={
              "https://houseofwu.com/collection/adrianna-papell-platinum-bridesmaids/"
            }
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 bridesmaids-animation bridesmaids-animation-7 d-flex justify-content-center">
          <DressCard
            image={Img5}
            designer={"Christina Wu Elegance"}
            collection={"Great for Mothers"}
            link={"https://houseofwu.com/collection/christina-wu-elegance/"}
          />
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default Bridesmaids;
