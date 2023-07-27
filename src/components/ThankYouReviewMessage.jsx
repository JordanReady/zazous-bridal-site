import React from "react";
import "../styles/ThankYouReviewMessage.css";

const ThankYouReviewMessage = ({ firstName, rating, publish }) => {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  let message;
  if (rating === 1) {
    message =
      "We're sorry to hear that you had a bad experience and will work to improve.";
  } else if (rating === 2) {
    message = "We appreciate your feedback and will work to improve.";
  } else if (rating === 3) {
    message = "Thank you for your review. We'll keep striving to do better.";
  } else if (rating === 4) {
    message = "We're glad you had a good experience with us!";
  } else if (rating === 5) {
    message = "We're thrilled you had a great experience with us!";
  } else {
    message = "Thank you for your review!";
  }

  return (
    <div className="thank-you-message thank-you-review-animation thank-you-review-animation-start thank-you-review-message">
      <h2 className="thank-you-message-heading thank-you-review-animation thank-you-review-animation-1 mb-3">
        Thank You {firstName}!
      </h2>
      <p className="thank-you-review-animation thank-you-review-animation-2">
        Your {rating} star review has been submitted!
      </p>
      <p className="thank-you-review-animation thank-you-review-animation-3">
        {message}
      </p>
      <p className="thank-you-review-animation thank-you-review-animation-4">
        {publish
          ? "Thank you for allowing us to publish your review! We greatly appriciate your feedback!"
          : "We will not publish your review per your request. We greatly appriciate your feedback!"}
      </p>
    </div>
  );
};

export default ThankYouReviewMessage;
