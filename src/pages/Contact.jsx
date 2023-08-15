import React, { useState } from "react";
import { StoreHours, StoreInfo, StoreAwards } from "../components";
import Logo from "../assets/Logos/Zazous-Logo-Green.png";

import "../styles/Contact.css";

import { PageHeading, ThankYouContactMessage, SubmitBtn } from "../components";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [contactType, setContactType] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const contactTypeOptions = [
    { value: "", name: "Select Contact Type" },
    { value: "Email", name: "Email" },
    { value: "Phone", name: "Phone" },
  ];
  const handleContactTypeChange = (e) => {
    setContactType(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // console all state
    console.log(
      "firstName: ",
      firstName,
      "lastName: ",
      lastName,
      "email: ",
      email,
      "phone: ",
      phone,
      "message: ",
      message,
      "subject: ",
      subject,
      "contactType: ",
      contactType
    );
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <PageHeading name={"Contact Us"} animationDirection={""} />
      <div className="row contact-row">
        <div className="col-lg-6 contact-store-info-row">
          <div className="row d-flex justify-content-center align-items-center">
            <StoreInfo
              col={"col-8"}
              style={3}
              customClass={
                "mt-2 mb-4 contact-animation contact-animation-1 contact-store-info"
              }
            />
            <StoreHours
              col={"col-8"}
              customClass={
                "mb-4 mt-4 contact-store-hours contact-animation contact-animation-2 contact-store-hours"
              }
              style={5}
            />
          </div>
        </div>
        <div className="col-lg-6">
          {formSubmitted ? (
            <ThankYouContactMessage
              firstName={firstName}
              phoneNumber={phone}
              email={email}
              contactType={contactType}
              subject={subject}
            />
          ) : (
            <form className="contact-form contact-animation contact-animation-3">
              <div className="form-row name-row d-flex">
                <div className="col-md-6 contact-animation contact-animation-4">
                  <label htmlFor="firstName">
                    First Name <span className="required-label ">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control name-field"
                    id="firstName"
                    onChange={handleFirstNameChange}
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
                    onChange={handleLastNameChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group contact-animation contact-animation-6">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="form-group contact-animation contact-animation-7">
                <label htmlFor="email">
                  Email Address <span className="required-label">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="contact-animation contact-animation-8">
                <label htmlFor="bestContactMethod" className="form-label">
                  Best Contact Method
                </label>
                <select
                  className="form-control"
                  id="bestContactMethod"
                  value={contactType}
                  onChange={handleContactTypeChange}
                >
                  {contactTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group contact-animation contact-animation-9">
                <label htmlFor="subject">
                  Subject <span className="required-label">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  onChange={handleSubjectChange}
                  required
                />
              </div>
              <div className="form-group contact-animation contact-animation-10">
                <label htmlFor="message">
                  Message <span className="required-label">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  onChange={handleMessageChange}
                  rows="5"
                  required
                />
              </div>
              <div
                className="form-btn-container d-flex justify-content-center contact-animation contact-animation-11"
                onClick={handleSubmit}
              >
                <SubmitBtn text={"Send Your Message"} />
              </div>
            </form>
          )}

          <div className="row d-flex justify-content-center align-items-center flex-direction-row-reverse">
            <div className="col-md-6">
              <div className="row d-flex justify-content-center align-items-center contact-logo-container">
                <img
                  src={Logo}
                  alt="Logo"
                  className="logo-image contact-animation contact-animation-12"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row d-flex justify-content-center align-items-center contact-animation contact-animation-13">
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
