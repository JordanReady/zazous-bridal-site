import React from "react";

const HeroCarouselItem = ({ img, caption }) => {
  return (
    <>
      <img src={img} className="d-block w-100 carousel-image" alt="Slide 1" />
      {caption && (
        <div className="carousel-caption">
          <h3 className="caption-text">{caption}</h3>
        </div>
      )}
    </>
  );
};

export default HeroCarouselItem;
