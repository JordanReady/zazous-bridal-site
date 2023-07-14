import React from "react";

import "../styles/DressCard.css";

const DressCard = ({ image, designer, collection, link, customClass }) => {
  return (
    <div
      className={customClass + " dress-card mt-4 mb-4"}
      onClick={() => window.open(link)}
    >
      <img src={image} alt="Dress" className="dress-card-image" />
      <div className="dress-card-details">
        <h4 className="dress-card-designer">
          {" "}
          <strong>{designer}</strong>{" "}
        </h4>
        <p className="dress-card-collection">{collection}</p>
      </div>
    </div>
  );
};

export default DressCard;
