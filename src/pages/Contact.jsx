import React from "react";
import { StoreHours, StoreInfo, StoreAwards } from "../components";
import Logo from "../assets/Logos/Zazous-logo-1.jpg";

import "../styles/Contact.css";

import { PageHeading } from "../components";

const Contact = () => {
  return (
    <div className="container">
      <PageHeading name={"Contact Us"} animationDirection={""} />
      <div className="row">
        <div className="col-lg-6">
          <div>
            <div className="row d-flex justify-content-center align-items-center">
              <StoreInfo
                col={"col-8"}
                style={3}
                customClass={"mt-2 mb-4 contact-animation contact-animation-1"}
              />
              <StoreHours
                col={"col-8"}
                customClass={
                  "mb-4 mt-4 contact-store-hours contact-animation contact-animation-2"
                }
                style={5}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="contact-form contact-animation contact-animation-3">
            <div className="form-row name-row d-flex">
              <div className="col-md-6 contact-animation contact-animation-4">
                <label htmlFor="firstName ">
                  First Name <span className="required-label ">*</span>
                </label>
                <input
                  type="text"
                  className="form-control name-field"
                  id="firstName"
                  required
                />
              </div>
              <div className="col-md-6 last-name-col contact-animation contact-animation-5">
                <label htmlFor="lastName">
                  Last Name <span className="required-label ">*</span>
                </label>
                <input
                  type="text"
                  className="form-control name-field last-name-field"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <div className="form-group contact-animation contact-animation-6">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <div className="form-group contact-animation contact-animation-7">
              <label htmlFor="email">
                Email Address <span className="required-label">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group contact-animation contact-animation-8">
              <label htmlFor="subject">
                Subject <span className="required-label">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                required
              />
            </div>
            <div className="form-group contact-animation contact-animation-9">
              <label htmlFor="message">
                Message <span className="required-label">*</span>
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                required
              />
            </div>
            <div className="form-btn-container d-flex justify-content-center">
              <button
                type="submit"
                className="contact-btn btn btn-primary mt-2 contact-animation contact-animation-10"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="row d-flex justify-content-center align-items-center flex-direction-row-reverse">
            <div className="col-md-6">
              <div className="row d-flex justify-content-center align-items-center contact-logo-container">
                <img
                  src={Logo}
                  alt="Logo"
                  className="logo-image contact-animation contact-animation-11"
                  style={{ "--i": 7 }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row d-flex justify-content-center align-items-center contact-animation contact-animation-12">
                <StoreAwards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
