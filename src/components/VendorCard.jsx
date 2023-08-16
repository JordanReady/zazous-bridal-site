import React from "react";

import "../styles/VendorCard.css";

const VendorCard = ({ title, items, cardIndex }) => {
  return (
    <div className="vendor-card-grid" style={{ "--card-index": cardIndex }}>
      <div className="vendor-card mt-4">
        <div className="vendor-card-header">
          <h2 className="vendor-card-title d-flex justify-content-center">
            {title}
          </h2>
        </div>
        <div className="vendor-card-vendors">
          {items.map((item, index) => (
            <a
              href={item.link}
              className="list-item mb-2"
              key={index}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
