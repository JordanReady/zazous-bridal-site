import React from "react";
import WeddingWire1 from "../assets/logos/wedding-wire-1.jpg";
import WeddingWire2 from "../assets/logos/wedding-wire-2.jpg";

const StoreAwards = ({ col, style, customClass }) => {
  return (
    <div
      className={`${col} mt-4 mb-4 d-flex justify-content-center align-items-center wedding-wire-container ${customClass}`}
      style={{ "--i": style }}
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
  );
};

export default StoreAwards;
