import React from "react";

import "../styles/StoreInfo.css";

const StoreInfo = ({ style, col, customClass }) => {
  return (
    <div
      className={`${col} info-box d-flex justify-content-center align-items-center ${customClass} `}
      style={{ "--i": style }}
    >
      <div className="text-center">
        <h3 className="mb-4 title-text info-title">
          Zazou's Bridal Boutique & Tuxedos
        </h3>
        <p className="mb-4 info">955 Washington Street - Suite 104</p>
        <p className="mb-4 info">Dubuque, IA 52001</p>
        <p className="mb-4 info">563-213-2049</p>
        <p className="mb-4 info">info@zazousbridalandtuxedos.com</p>
      </div>
    </div>
  );
};

export default StoreInfo;
