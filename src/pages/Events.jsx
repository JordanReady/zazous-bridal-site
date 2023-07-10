import React from "react";

import { EventCard, PastEventsCard } from "../components";

import "../styles/Events.css";

const Events = () => {
  return (
    <div className="container">
      <h2
        className="our-story-title d-flex justify-content-center"
        style={{ "--i": 1 }}
      >
        Events
      </h2>
      <hr style={{ color: "#d39660" }} />
      <div className="row">
        <div className="col-lg-6 event-page-card">
          <h2 className="event-title text-center mb-3"> Upcoming Events</h2>
          <EventCard
            title={"Bridal Bash Sale"}
            date={"OCTOBER 10-23"}
            time={"All Day!"}
            info={`Explore our exquisite collection of 100+ stunning dresses, all priced
            at $500 and under. We offer sizes ranging from 2 to 32, ensuring the perfect fit for every
            body shape. Don't miss out on finding your dream dress — schedule your appointment now!`}
            scheduleButton={true}
            customClass={"event-card"}
          />
        </div>
        <div className="col-lg-6 event-page-card">
          <h2 className="event-title text-center mb-3">Past Events</h2>
          <PastEventsCard />
        </div>
      </div>
      <div className="signup-section mt-3 mb-3">
        <h2 className="event-title text-center event-page-email-title">
          Sign up for our email list!
        </h2>
        <p className="sign-up-subtext text-center mb-4 event-page-email-subtitle">
          Receive emails for our sales, promotions, and events!
        </p>
        <form className="contact-form email-form event-page-email-form">
          <div className="form-row name-row d-flex">
            <div className="col-md-6">
              <label htmlFor="firstName">
                First Name <span className="required-label">(required)</span>
              </label>
              <input
                type="text"
                className="form-control name-field"
                id="firstName"
                required
              />
            </div>
            <div className="col-md-6 last-name-col">
              <label htmlFor="lastName">
                Last Name <span className="required-label">(required)</span>
              </label>
              <input
                type="text"
                className="form-control name-field last-name-field"
                id="lastName"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required-label">(required)</span>
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">
              Subject <span className="required-label">(required)</span>
            </label>
            <input type="text" className="form-control" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required-label">(required)</span>
            </label>
            <textarea className="form-control" id="message" rows="5" required />
          </div>
          <div className="form-btn-container d-flex justify-content-center">
            <button
              type="submit"
              className="contact-btn btn btn-primary mt-2 event-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Events;
