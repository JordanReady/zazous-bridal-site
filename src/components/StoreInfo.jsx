import React from "react";

import "../styles/StoreInfo.css";

const StoreInfo = ({ style, col, customClass }) => {
  return (
    <div
      className={`${col} info-box d-flex justify-content-center align-items-center ${customClass} `}
      style={{ "--i": style }}
    >
      <div className="store-text-container">
        <h3 className="title-text info-title">
          Zazou's Bridal Boutique & Tuxedos
        </h3>
      </div>
      <div className="store-info-container">
        <div className="store-info">
          <p className="mb-4 info">955 Washington Street - Suite 104</p>
          <p className="mb-4 info">Dubuque, IA 52001</p>
          <p className="mb-4 info">563-213-2049</p>
          <p className="mb-4 info">
            info<span className="at-sign">@</span>zazousbridalandtuxedos.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
