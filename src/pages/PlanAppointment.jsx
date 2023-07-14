import React from "react";

import "../styles/PlanAppointment.css";

import { PageHeading } from "../components";

const PlanAppointment = () => {
  return (
    <div className="container">
      <PageHeading
        name={"Plan For Your Bridal Appointment"}
        animationDirection={""}
      />

      <div className="plan-appointment-text">
        <p className=" plan-appointment-header plan-appointment-animation plan-appointment-animation-1">
          Ultimately, the appointment is about YOU! As consultants, we're here
          to help you find the dress of your dreams and nothing less.
        </p>

        <ol className="plan-list">
          <li className="mb-3 plan-appointment-animation plan-appointment-animation-2">
            <strong className="plan-appointment-strong">
              How do you envision your day?
            </strong>
            <br />
            It's a good idea to research dress silhouettes and get an overall
            idea of the theme and style of your wedding or event. It's also
            helpful to set a budget on how much you want to spend on your gown.
            We have gowns $99-$3,100.
          </li>
          <li className="mb-3 plan-appointment-animation plan-appointment-animation-3">
            <strong className="plan-appointment-strong">
              Have an open mind.
            </strong>
            <br />
            There are going to be things you know you don’t like and don’t want
            to try on. However, it's important to trust your consultant when it
            comes to suggesting different options. Our job is to look at each
            client as an individual and to know what will compliment your body
            shape and your style.
          </li>
          <li className="mb-3 plan-appointment-animation plan-appointment-animation-4">
            <strong className="plan-appointment-strong">
              Choose the right entourage.
            </strong>{" "}
            <br />
            Make sure everyone is on the same page and understands how YOU see
            yourself on your wedding day or at your event. While suggestions are
            fine, if one's mindset is not ultimately in line with your vision,
            it can really derail the appointment. You want the members of your
            entourage to provide constructive criticism, so we suggest bringing
            people that are open and honest.
          </li>
          <li className="mb-3 plan-appointment-animation plan-appointment-animation-5">
            <strong className="plan-appointment-strong">
              What to bring to the appointment?
            </strong>{" "}
            <br />
            Don't forget to bring the appropriate undergarments, as they can
            ultimately change the fit and look of a dress. We recommend having a
            properly fitting strapless bra and nude underwear. If you plan to
            wear shapewear, bring that along too. Feel free to bring photos or
            ideas of what you're looking for in a dress to help your consultant
            get an idea of what you're envisioning.
          </li>
          <li className="mb-3 plan-appointment-animation plan-appointment-animation-6">
            <strong className="plan-appointment-strong">
              Know the appointment timeline.
            </strong>{" "}
            <br />
            For an initial bridal appointment, we plan about an hour and a half
            to two hours to ensure you have adequate time to try on various
            styles of dresses. We greatly appreciate at least 48 hours notice if
            you are going to cancel your appointment so we have the opportunity
            to fill your time slot. If you hope to look at bridesmaids or
            mother’s styles after your appointment, please include that in the
            notes so we can plan accordingly.
          </li>
          <li className="mb-3 plan-appointment-animation plan-appointment-animation-7">
            <strong className="plan-appointment-strong">Enjoy yourself!</strong>{" "}
            <br />
            We welcome photos, champagne, and anything that includes having a
            good time!
          </li>
        </ol>

        <p className=" plan-appointment-animation plan-appointment-animation-8">
          At the end of the day, we want what's best for you! We want your
          appointment to run as smoothly as possible and the tips listed above
          will help to ensure that happens. Always feel free to contact us with
          any questions regarding planning your appointment. We are here to help
          you look and feel your very best!
        </p>
      </div>
    </div>
  );
};

export default PlanAppointment;
