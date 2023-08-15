import React, { useState } from "react";

import {
  EventCard,
  PastEventsCard,
  PageHeading,
  ThankYouEmailList,
  SubmitBtn,
} from "../components";

import "../styles/Events.css";

const Events = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Phone Number: ", phoneNumber);
    console.log("Email: ", email);
    console.log("Message: ", message);
    // Any other actions related to form submission
    setShowThankYou(true);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="container">
      <PageHeading name={"Events"} animationDirection={""} />
      <div className="row">
        <div className="col-lg-6 event-page-card">
          <h2 className="event-title text-center mb-3 event-animation event-animation-1">
            Upcoming Events
          </h2>
          <div className="event-card-container event-animation event-animation-3">
            <EventCard
              title={"Bridal Bash Sale"}
              date={"OCTOBER 10-23"}
              time={"All Day!"}
              info={`Explore our exquisite collection of 100+ stunning dresses, all priced
            at $500 and under. We offer sizes ranging from 2 to 32, ensuring the perfect fit for every
            body shape. Don't miss out on finding your dream dress — schedule your appointment now!`}
              scheduleButton={true}
              customClass={"event-card event-card-fill"}
            />
          </div>
        </div>
        <div className="col-lg-6 event-page-card">
          <h2 className="event-title text-center mb-3 event-animation event-animation-2">
            Past Events
          </h2>
          <div className="past-event-card-container event-animation event-animation-4">
            <PastEventsCard />
          </div>
        </div>
      </div>
      <div className="signup-section mt-3 mb-3">
        {showThankYou ? (
          <ThankYouEmailList
            firstName={firstName}
            email={email}
            phoneNumber={phoneNumber}
          />
        ) : (
          <>
            <h2 className="event-title text-center event-page-email-title event-animation event-animation-5">
              Sign up for our email list!
            </h2>
            <p className="sign-up-subtext text-center mb-4 event-page-email-subtitle event-page-email-title event-animation event-animation-6">
              Receive emails for our sales, promotions, and events!
            </p>
            <form
              className="contact-form email-form event-page-email-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row name-row d-flex event-animation event-animation-7">
                <div className="col-md-6">
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
                <div className="col-md-6 last-name-col">
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
              <div className="form-group event-animation event-animation-8">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div className="form-group event-animation event-animation-9">
                <label htmlFor="email">
                  Email Address <span className="required-label">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group event-animation event-animation-10">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
              <div className="form-btn-container d-flex justify-content-center event-animation event-animation-10">
                <SubmitBtn text={"Sign Up"} />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
