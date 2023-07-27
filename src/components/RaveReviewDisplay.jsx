import React from "react";

import "../styles/RaveReviewDisplay.css";

const RaveReviewDisplay = ({ review, style }) => {
  const {
    firstName,
    lastName,
    role,
    rating,
    feedback,
    publish,
    datePublished,
  } = review;

  const starIcons = [];
  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= rating ? "fas fa-star" : "far fa-star"; // Show filled star or empty star based on the rating
    starIcons.push(<i key={i} className={starClassName}></i>);
  }

  const displayName = publish ? `${firstName} ${lastName}` : "Anonymous";

  return (
    <div className="rave-review rave-review-animation" style={style}>
      <div className="row rave-review-name-rating-row">
        <div className="col-8">
          <h2 className="rave-review-title">{displayName}</h2>
        </div>
        <div className="col-4 p-0">
          <div className="rave-review-rating">{starIcons}</div>
        </div>
      </div>
      <div className="row rave-review-role-date-row">
        <div className="col-8">
          <p>{role}</p>
        </div>
        <div className="col-4">
          <p className="rave-review-date-published">{datePublished}</p>
        </div>
      </div>
      <hr className="rave-review-hr" />
      <p className="rave-review-feedback">{feedback}</p>
    </div>
  );
};

export default RaveReviewDisplay;
