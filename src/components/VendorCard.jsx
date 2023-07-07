import React from "react";

import "../styles/VendorCard.css";

const VendorCard = ({ title, items, cardIndex }) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12"
      style={{ "--card-index": cardIndex }}
    >
      <div className="vendor-card d-flex flex-column justify-content-center align-items-center mt-4">
        <h2 className="vendor-card-title d-flex justify-content-center">
          {title}
        </h2>
        {items.map((item, index) => (
          <a href={item.link} className="list-item mb-2" key={index}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VendorCard;
