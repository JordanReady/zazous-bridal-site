import React, { useState } from "react";
import { PageHeading } from "../components";
import ReactRating from "react-rating";
import classNames from "classnames";

import { ThankYouReviewMessage, SubmitBtn } from "../components";

import "../styles/WriteReview.css";

const WriteReview = () => {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [publishComments, setPublishComments] = useState(true);
  const [datePublished, setDatePublished] = useState(new Date());
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const roleOptions = [
    { value: "", label: "Select your role" },
    { value: "Bride", label: "Bride" },
    { value: "Groom", label: "Groom" },
    { value: "Bridesmaid", label: "Bridesmaid" },
    { value: "Groomsman", label: "Groomsman" },
    { value: "Usher", label: "Usher" },
    { value: "Personal Attendent", label: "Personal Attendent" },
    { value: "Mohter of Bride", label: "Mohter of Bride" },
    { value: "Mother of Groom", label: "Mother of Groom" },
    { value: "Father of Bride", label: "Father of Bride" },
    { value: "Father of Groom", label: "Father of Groom" },
    { value: "Grandparent", label: "Grandparent" },
    { value: "Vendor", label: "Vendor" },
  ];
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePublishCommentsChange = (event) => {
    setPublishComments(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
    console.log("Rating: " + rating);
    console.log("Feedback: " + feedback);
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Role: " + role);
    console.log("Location: " + location);
    console.log("Publish Comments: " + publishComments);
    console.log("Date Published: " + datePublished);
    setShowThankYouMessage(true);
    if (window.innerWidth <= 798) {
      setTimeout(() => {
        const scrollOffset = 110;
        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
        });
      }, 100);
    } else {
      setTimeout(() => {
        const scrollOffset = 0;
        window.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const starClassName = (index) => {
    const starSelected = rating >= index;
    return classNames("star", {
      "star-selected": starSelected,
      "star-unselected": !starSelected,
    });
  };

  return (
    <div className="container">
      <PageHeading name={"Write A Review"} animationDirection={""} />
      <div className="col d-flex justify-content-center align-items-center flex-column">
        {showThankYouMessage ? ( // Show the thank you message if showThankYouMessage is true
          <ThankYouReviewMessage
            firstName={firstName}
            rating={rating}
            publish={publishComments}
          />
        ) : (
          <>
            <p className="write-review-text text-center write-review-animation write-review-animation-1">
              We would love to hear your feedback! Please leave a review below:
            </p>
            <div className="col-12 d-flex justify-content-center align-items-center flex-column">
              <div className="form-container write-review-form-container">
                <form
                  className="contact-form contact-animation contact-animation-3"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row name-row d-flex">
                    <div className="col-12">
                      <label
                        htmlFor="rating"
                        className="write-review-animation write-review-animation-3"
                      >
                        Rating <span className="required-label">*</span>
                      </label>
                      <div className="rating-container d-flex">
                        <ReactRating
                          initialRating={rating}
                          emptySymbol={
                            <i
                              className={classNames(
                                "far fa-star",
                                "empty-star ",
                                starClassName(1)
                              )}
                            />
                          }
                          fullSymbol={
                            <i
                              className={classNames(
                                "fas fa-star",
                                "full-star write-review-animation write-review-animation-3",
                                starClassName(1)
                              )}
                            />
                          }
                          quiet={false}
                          onChange={handleRatingChange}
                        />

                        <div className="stars-count-box write-review-animation write-review-animation-2">
                          {rating} star{rating !== 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="write-review-animation write-review-animation-3">
                    <label htmlFor="feedback">
                      Feedback <span className="required-label">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="feedback"
                      rows="5"
                      value={feedback}
                      onChange={handleFeedbackChange}
                      required
                    />
                  </div>
                  <div className="form-row name-row d-flex">
                    <div className="col-md-6 write-review-animation write-review-animation-4">
                      <label htmlFor="firstName">
                        First Name <span className="required-label">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control name-field"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 last-name-col write-review-animation write-review-animation-5">
                      <label htmlFor="lastName">
                        Last Name <span className="required-label">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control name-field last-name-field"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group write-review-animation write-review-animation-6">
                    <label htmlFor="role">Role</label>
                    <select
                      className="form-control"
                      id="role"
                      value={role}
                      onChange={handleRoleChange}
                    >
                      {roleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group write-review-animation write-review-animation-7">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      value={location}
                      onChange={handleLocationChange}
                    />
                  </div>
                  <div className="form-group write-review-animation write-review-animation-8">
                    <label htmlFor="publishComments">
                      May we publish your comments?
                    </label>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="publishComments"
                          checked={publishComments}
                          onChange={handlePublishCommentsChange}
                        />{" "}
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="form-btn-container d-flex justify-content-center write-review-animation write-review-animation-9 write-review-btn">
                    <SubmitBtn text={"Send your Feedback"} />
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WriteReview;
