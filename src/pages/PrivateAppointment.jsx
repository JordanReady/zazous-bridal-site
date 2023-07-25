import React from "react";
import Img1 from "../assets/privateAppointment/private-appointment-img-1.jpg";
import Img2 from "../assets/privateAppointment/private-appointment-img-2.jpg";
import Img3 from "../assets/privateAppointment/private-appointment-img-3.jpg";

import "../styles/PrivateAppointment.css";

import { ScheduleAppointmentBtn, PageHeading } from "../components";

const PrivateAppointment = () => {
  return (
    <div className="container">
      <PageHeading
        name={"Schedule Your Private Appointment"}
        animationDirection={""}
      />

      <div className="row">
        <div className="col-md-6 private-appointment-animation private-appointment-animation-1">
          <img
            src={Img1}
            alt="Appointment"
            className="img-fluid private-appointment-larger-img"
          />
        </div>
        <div className="col-md-6 private-appointment-text">
          <div className="d-flex flex-column h-100">
            <div>
              <p className="private-appointment-animation private-appointment-animation-2">
                You and up to 8 guests can shop the entire boutique to
                yourselves! Enjoy 2 hours of the ultimate bridal experience with
                a trained consultant. We provide a bottle of champagne and local
                sweets! Find your dream dress in a comfortable atmosphere while
                having a memorable experience.
              </p>
              <p className="private-appointment-animation private-appointment-animation-3">
                Availability: Thursdays 6-8pm (must be booked at least 5 days in
                advance)
              </p>
              <p className="private-appointment-animation private-appointment-animation-4">
                Cost: $200 at scheduling, with $100 credit towards any bridal
                gown purchase.
              </p>
              <div className="mt-4 d-flex justify-content-center align-items-center private-appointment-btn private-appointment-animation private-appointment-animation-5">
                <ScheduleAppointmentBtn
                  link={"/zazous-bridal-site/contact"}
                  text={"Contact Us"}
                  customClass={"private-appointment-btn"}
                />
              </div>
            </div>
            <div className="d-flex flex-end mt-auto">
              <div className="row">
                <div className="col-md-6 private-appointment-smaller-img-row">
                  <img
                    src={Img2}
                    alt="Image 1"
                    className="img-fluid private-appointment-smaller-img private-appointment-animation private-appointment-animation-6"
                  />
                </div>
                <div className="col-md-6 private-appointment-smaller-img-row">
                  <img
                    src={Img3}
                    alt="Image 2"
                    className="img-fluid private-appointment-smaller-img private-appointment-animation private-appointment-animation-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateAppointment;
