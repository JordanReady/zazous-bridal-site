import React, { forwardRef, useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../styles/ScheduleAppointment.css";

import { ThankYouMessage, PageHeading, SubmitBtn } from "../components";

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
  <button className="custom-date-input" onClick={onClick} ref={ref}>
    {value}
  </button>
));

const ScheduleAppointment = () => {
  const [appointmentType, setAppointmentType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [budgetType, setBudgetType] = useState("");
  const [referalType, setReferalType] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [contactType, setContactType] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [stateType, setStateType] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [comments, setComments] = useState("");
  const [mailingList, setMailingList] = useState(false);
  const [textAlerts, setTextAlerts] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const appointmentRowRef = useRef(null);

  const handleScrollTopOfForm = () => {
    if (window.innerWidth <= 768) {
      const scrollOffset = 950;
      window.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const handleScrollMidOfForm = () => {
    if (window.innerWidth <= 768) {
      const scrollOffset = 1330;
      window.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const appointmentTypeOptions = [
    { value: "", name: "Select Appointment Type" },
    { value: "Accessories", name: "Accessories" },
    { value: "Bridal", name: "Bridal" },
    { value: "Bridesmaids", name: "Bridesmaids" },
    { value: "First Communion", name: "First Communion" },
    { value: "Flower Girl", name: "Flower Girl" },
    { value: "Mother of Bride/Groom", name: "Mother of Bride/Groom" },
    { value: "Prom", name: "Prom" },
    { value: "Steaming DROP-OFF", name: "Steaming DROP-OFF" },
    { value: "Tuxedo", name: "Tuxedo" },
  ];
  const handleAppointmentTypeChange = (e) => {
    setAppointmentType(e.target.value);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const appointmentTimeOptions = [
    { value: "", name: "Select Appointment Time" },
    { value: "10:00 AM", name: "10:00 AM" },
    { value: "10:30 AM", name: "10:30 AM" },
    { value: "11:00 AM", name: "11:00 AM" },
    { value: "11:30 AM", name: "11:30 AM" },
    { value: "12:00 PM", name: "12:00 PM" },
    { value: "12:30 PM", name: "12:30 PM" },
    { value: "1:00 PM", name: "1:00 PM" },
    { value: "1:30 PM", name: "1:30 PM" },
    { value: "2:00 PM", name: "2:00 PM" },
    { value: "2:30 PM", name: "2:30 PM" },
    { value: "3:00 PM", name: "3:00 PM" },
    { value: "3:30 PM", name: "3:30 PM" },
    { value: "4:00 PM", name: "4:00 PM" },
    { value: "4:30 PM", name: "4:30 PM" },
  ];
  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(sanitizedValue);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const budgetTypeOptions = [
    { value: "", name: "Select Your Budget" },
    { value: "500", name: "Less than $500" },
    { value: "1000", name: "Less than $100" },
    { value: "1500", name: "Less than $1500" },
    { value: "2000", name: "Less than $2000" },
    { value: "2500", name: "Less than $2500" },
    { value: "3000", name: "Less than $3000" },
    { value: "3500", name: "Less than $3500" },
  ];
  const handleBudgetTypeChange = (e) => {
    setBudgetType(e.target.value);
  };

  const referalTypeOptions = [
    { value: "", name: "Select Referral Type" },
    { value: "Bridal Show", name: "Bridal Show" },
    { value: "Facebook", name: "Facebook" },
    { value: "Internet Search", name: "Internet Search" },
    { value: "Pintrest", name: "Pintrest" },
    { value: "Radio", name: "Radio" },
    { value: "Referal", name: "Referal" },
    { value: "Word of Mouth", name: "Word of Mouth" },
    { value: "Yelp", name: "Yelp" },
    { value: "Other", name: "Other" },
  ];
  const handleReferalTypeChange = (e) => {
    setReferalType(e.target.value);
  };

  const handleNumberPeopleChange = (e) => {
    setNumberPeople(e.target.value);
  };

  const contactTypeOptions = [
    { value: "", name: "Select Contact Type" },
    { value: "Email", name: "Email" },
    { value: "Phone", name: "Phone" },
  ];
  const handleContactTypeChange = (e) => {
    setContactType(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressTwoChange = (e) => {
    setAddressTwo(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const stateTypeOptions = [
    { value: "", name: "Select State" },
    { value: "Alabama", name: "Alabama" },
    { value: "Alaska", name: "Alaska" },
    { value: "Arizona", name: "Arizona" },
    { value: "Arkansas", name: "Arkansas" },
    { value: "California", name: "California" },
    { value: "Colorado", name: "Colorado" },
    { value: "Connecticut", name: "Connecticut" },
    { value: "Delaware", name: "Delaware" },
    { value: "Florida", name: "Florida" },
    { value: "Georgia", name: "Georgia" },
    { value: "Hawaii", name: "Hawaii" },
    { value: "Idaho", name: "Idaho" },
    { value: "Illinois", name: "Illinois" },
    { value: "Indiana", name: "Indiana" },
    { value: "Iowa", name: "Iowa" },
    { value: "Kansas", name: "Kansas" },
    { value: "Kentucky", name: "Kentucky" },
    { value: "Louisiana", name: "Louisiana" },
    { value: "Maine", name: "Maine" },
    { value: "Maryland", name: "Maryland" },
    { value: "Massachusetts", name: "Massachusetts" },
    { value: "Michigan", name: "Michigan" },
    { value: "Minnesota", name: "Minnesota" },
    { value: "Mississippi", name: "Mississippi" },
    { value: "Missouri", name: "Missouri" },
    { value: "Montana", name: "Montana" },
    { value: "Nebraska", name: "Nebraska" },
    { value: "Nevada", name: "Nevada" },
    { value: "New Hampshire", name: "New Hampshire" },
    { value: "New Jersey", name: "New Jersey" },
    { value: "New Mexico", name: "New Mexico" },
    { value: "New York", name: "New York" },
    { value: "North Carolina", name: "North Carolina" },
    { value: "North Dakota", name: "North Dakota" },
    { value: "Ohio", name: "Ohio" },
    { value: "Oklahoma", name: "Oklahoma" },
    { value: "Oregon", name: "Oregon" },
    { value: "Pennsylvania", name: "Pennsylvania" },
    { value: "Rhode Island", name: "Rhode Island" },
    { value: "South Carolina", name: "South Carolina" },
    { value: "South Dakota", name: "South Dakota" },
    { value: "Tennessee", name: "Tennessee" },
    { value: "Texas", name: "Texas" },
    { value: "Utah", name: "Utah" },
    { value: "Vermont", name: "Vermont" },
    { value: "Virginia", name: "Virginia" },
    { value: "Washington", name: "Washington" },
    { value: "West Virginia", name: "West Virginia" },
    { value: "Wisconsin", name: "Wisconsin" },
    { value: "Wyoming", name: "Wyoming" },
  ];
  const handleStateTypeChange = (e) => {
    setStateType(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showThankYou) {
      console.log("Appointment Type:", appointmentType);
      console.log("Start Date:", startDate);
      console.log("Appointment Time:", appointmentTime);
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Phone Number:", phoneNumber);
      console.log("Email:", email);
      console.log("Budget Type:", budgetType);
      console.log("Referral Type:", referalType);
      console.log("Number of People:", numberPeople);
      console.log("Contact Type:", contactType);
      console.log("Address:", address);
      console.log("Address Two:", addressTwo);
      console.log("City:", city);
      console.log("State Type:", stateType);
      console.log("Zip Code:", zipCode);
      console.log("Comments:", comments);
      console.log("Mailing List:", mailingList);
      console.log("Text Alerts:", textAlerts);
      setShowThankYou(true);
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
    }
  };

  return (
    <div className="container">
      <PageHeading name={"Schedule Your Appointment"} animationDirection={""} />
      <div className="row">
        <div className="col-md-6">
          {showThankYou ? (
            <div className="col-md-6">
              <div className="row">
                <div className="col">
                  <ThankYouMessage
                    appointmentType={appointmentType}
                    startDate={startDate}
                    appointmentTime={appointmentTime}
                    email={email}
                    phoneNumber={phoneNumber}
                    contactType={contactType}
                    mailingList={mailingList}
                    textAlerts={textAlerts}
                    firstName={firstName}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="schedule-your-appointment-text">
              <p className="schedule-your-appointment-animation schedule-your-appointment-animation-1">
                Scheduling an appointment is the best way to make sure you get
                the complete and undivided attention you deserve from your
                consultant. We will take walk-ins if availability allows. Bridal
                appointments are scheduled for 1 ½-2 hours.
              </p>
              <p className="schedule-your-appointment-animation schedule-your-appointment-animation-2">
                We ask that you limit your guests to 4 (not including yourself).
                Please reach out if you’d like to bring a larger group and we’d
                be happy to try accommodating by spreading out our appointments
                if possible.
              </p>
              <p className="schedule-your-appointment-animation schedule-your-appointment-animation-3">
                We recommend scheduling your bridal appointment 9-12+ months
                prior to your wedding date to ensure you're able to get the
                dress of your dreams! There are instances such as a designer
                being ahead of schedule or buying a dress "off the rack" that
                would result in you receiving your gown sooner.
              </p>
              <div className="disclaimer schedule-your-appointment-animation schedule-your-appointment-animation-6">
                <h2 className="schedule-your-appointment-header ">
                  Please Note:
                </h2>
                <p className="bold-text">
                  This form does not guarantee your time slot. You will receive
                  an email/text confirmation once we approve your appointment
                  date/time. Our form below does not recognize our current
                  bookings, so we will contact you ASAP if we need to reschedule
                  due to overbooking. Thank you for your understanding! Please
                  call us with any questions.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2 className="schedule-your-appointment-header schedule-your-appointment-animation schedule-your-appointment-animation-4">
            Request Your Appointment
          </h2>
          <form
            onSubmit={handleSubmit}
            className="schedule-your-appointment-animation schedule-your-appointment-animation-5"
          >
            <div
              className="row schedule-your-appointment-animation schedule-your-appointment-animation-7"
              ref={appointmentRowRef}
            >
              <div className="col-6 col-md-8">
                <label htmlFor="appointmentType" className="form-label">
                  Appointment Type <span className="required-label ">*</span>
                </label>
                <select
                  className="form-control"
                  id="appointmentType"
                  value={appointmentType}
                  onChange={handleAppointmentTypeChange}
                  onClick={handleScrollTopOfForm}
                  required
                >
                  {appointmentTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6 col-md-4">
                <div className=" date-picker-row">
                  <label htmlFor="appointmentDate" className="form-label">
                    Appointment Date <span className="required-label ">*</span>
                  </label>
                  <div className="date-picker-container">
                    <DatePicker
                      type="date"
                      className="custom-date-input"
                      required
                      readonly="readonly"
                      inputmode="none"
                      renderCustomHeader={({
                        monthDate,
                        customHeaderCount,
                        decreaseMonth,
                        increaseMonth,
                      }) => (
                        <div>
                          <button
                            aria-label="Previous Month"
                            className="react-datepicker__navigation react-datepicker__navigation--previous"
                            style={
                              customHeaderCount === 1
                                ? { visibility: "hidden" }
                                : null
                            }
                            onClick={decreaseMonth}
                          >
                            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">
                              {"<"}
                            </span>
                          </button>
                          <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <button
                            aria-label="Next Month"
                            className="react-datepicker__navigation react-datepicker__navigation--next"
                            style={
                              customHeaderCount === 0
                                ? { visibility: "hidden" }
                                : null
                            }
                            onClick={increaseMonth}
                          >
                            <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next">
                              {">"}
                            </span>
                          </button>
                        </div>
                      )}
                      selected={startDate}
                      onChange={handleDateChange}
                      monthsShown={2}
                      popperPlacement="top"
                      portalId="datepicker-portal"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-8">
              <label htmlFor="appointmentTime" className="form-label">
                Appointment Time <span className="required-label ">*</span>
              </label>
              <select
                className="form-control"
                id="appointmentTime"
                value={appointmentTime}
                onChange={handleTimeChange}
                required
              >
                {appointmentTimeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="row g-2 schedule-your-appointment-animation schedule-your-appointment-animation-9">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First Name <span className="required-label ">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Jane"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  Last Name <span className="required-label ">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doe"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-10">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number <span className="required-label ">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="(555) 555-5555"
                id="phoneNumber"
                pattern="[0-9]*"
                inputMode="numeric"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-11">
              <label htmlFor="email" className="form-label">
                Email <span className="required-label ">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="example@email.com"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-12">
              <label htmlFor="budget" className="form-label">
                Budget <span className="required-label ">*</span>
              </label>
              <select
                className="form-control"
                id="budget"
                value={budgetType}
                onChange={handleBudgetTypeChange}
                onClick={handleScrollMidOfForm}
                required
              >
                {budgetTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-13">
              <label htmlFor="hearAboutUs" className="form-label">
                How did you hear about us?
              </label>
              <select
                className="form-control"
                id="hearAboutUs"
                value={referalType}
                onChange={handleReferalTypeChange}
              >
                {referalTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-14">
              <label htmlFor="numPeopleJoining" className="form-label">
                Number of People Joining You
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Got company?"
                id="numPeopleJoining"
                value={numberPeople}
                onChange={handleNumberPeopleChange}
              />
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-15">
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
            <div className="row g-2 schedule-your-appointment-animation schedule-your-appointment-animation-16">
              <div className="col">
                <label htmlFor="address1" className="form-label">
                  Address 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Address"
                  id="address1"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className="col">
                <label htmlFor="address2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your 2nd Address"
                  id="address2"
                  value={addressTwo}
                  onChange={handleAddressTwoChange}
                />
              </div>
            </div>
            <div className="row g-2 schedule-your-appointment-animation schedule-your-appointment-animation-17">
              <div className="col">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your City"
                  id="city"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
              <div className="col">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-control"
                  id="state"
                  value={stateType}
                  onChange={handleStateTypeChange}
                >
                  {stateTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <label htmlFor="zipCode" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="99999"
                  id="zipCode"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                />
              </div>
            </div>
            <div className="schedule-your-appointment-animation schedule-your-appointment-animation-18">
              <label htmlFor="questionsComments" className="form-label">
                Questions and Comments
              </label>
              <textarea
                className="form-control"
                placeholder="Please share any questions, comments, or concerns you may have"
                id="questionsComments"
                rows="3"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
            <div className=" notification-preferences-container d-flex flex-wrap justify-content-center schedule-your-appointment-animation schedule-your-appointment-animation-19">
              <label className="form-label">Notification Preferences</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mailingList"
                  checked={mailingList}
                  onChange={(e) => setMailingList(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="mailingList">
                  Subscribe to our mailing list
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="accountAlerts"
                  checked={textAlerts}
                  onChange={(e) => setTextAlerts(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="accountAlerts">
                  Receive account text alerts
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col text-center schedule-your-appointment-animation schedule-your-appointment-animation-20">
                <SubmitBtn text={"Request Appointment"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
