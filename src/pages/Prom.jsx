import React from "react";
import Img1 from "../assets/prom/prom-image-1.jpg";
import Img2 from "../assets/prom/prom-image-3.jpg";
import Img3 from "../assets/prom/prom-image-2.jpg";
import Img4 from "../assets/prom/prom-image-4.jpg";
import Img5 from "../assets/prom/prom-image-5.jpg";
import Img6 from "../assets/prom/prom-image-6.jpg";

import { DressCard } from "../components";

import "../styles/Prom.css";

const Prom = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center text-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Prom Collection
      </h2>
      <hr style={{ color: "var(--primary-color)" }} />

      <div className="prom-text text-center">
        <p className="prom-animation prom-animation-1">
          Zazou's not only thrives in bridal, but also Prom! We offer many
          different styles and selections from our designers Faviana and Dave &
          Johnny. Stop in to check out our latest styles!
        </p>
      </div>

      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 prom-animation prom-animation-2 d-flex justify-content-center">
          <DressCard
            image={Img1}
            designer={"Faviana"}
            collection={"prom"}
            link={"https://www.faviana.com/prom-dresses.html"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 prom-animation prom-animation-3">
          <DressCard
            image={Img2}
            designer={"Faviana"}
            collection={"prom"}
            link={"https://www.faviana.com/prom-dresses.html"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 prom-animation prom-animation-4">
          <DressCard
            image={Img3}
            designer={"Faviana"}
            collection={"prom"}
            link={"https://www.faviana.com/prom-dresses.html"}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm-12 col-lg-4 mb-4 prom-animation prom-animation-5 d-flex justify-content-center">
          <DressCard
            image={Img4}
            designer={"Dave & Johnny"}
            collection={"prom"}
            link={"https://daveandjohnny.com/collections/prom-2023"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 prom-animation prom-animation-6">
          <DressCard
            image={Img5}
            designer={"Dave & Johnny"}
            collection={"prom"}
            link={"https://daveandjohnny.com/collections/prom-2023"}
          />
        </div>
        <div className="col-sm-12 col-lg-4 mb-4 prom-animation prom-animation-7">
          <DressCard
            image={Img6}
            designer={"Dave & Johnny"}
            collection={"prom"}
            link={"https://daveandjohnny.com/collections/prom-2023"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prom;
