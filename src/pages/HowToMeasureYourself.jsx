import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MeasurementPic from "../assets/Measurement.png";

import "../styles/HowToMeasureYourself.css";

const HowToMeasureYourself = () => {
  return (
    <div className="container how-to-measure-container">
      <h2
        className="our-story-title d-flex justify-content-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Measurements
      </h2>
      <hr style={{ color: "#d39660" }} />
      <div className="row quick-tips-row">
        <h2 className="d-flex justify-content-center quick-tips-title text-center  measure-page-animation-2 measure-page">
          Tips to Measure Yourself for a Bridesmaid Dress at Home
        </h2>
        <div className="quick-tips-inner-row  measure-page-animation-3 measure-page">
          <div className="col-md-1 quick-tips-spacer"></div>
          <div className="col-md-4 d-flex justify-content-center">
            {/* Left column with the image */}
            <img src={MeasurementPic} alt="Measurement" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            {/* Right column with bullet points */}
            <ul className="quick-tips-bullet-points">
              <li>
                <span className="bullet-point">&#8226;</span>Use soft and
                flexible measuring tape
              </li>
              <li>
                <span className="bullet-point">&#8226;</span>Use pencil and
                paper to write down measurements
              </li>
              <li>
                <span className="bullet-point">&#8226;</span>
                Use same (or similar) undergarments you’ll wear on the wedding
                day
              </li>
              <li>
                <span className="bullet-point">&#8226;</span>
                Use full-length mirror to ensure you have the tape measure even
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-1 quick-tips-spacer"></div>
      </div>

      {/* List of measurements */}
      <div className="measurements">
        <h2 className="quick-tips-title text-center mt-4  measure-page-animation-4 measure-page">
          Where to Measure Yourself
        </h2>
        <ol className="where-to-measure-list">
          <li className="measure-page-animation-5 measure-page">
            <span className="number-title">
              <strong>1.)</strong> <strong>Bust:</strong>
            </span>
            <br />
            Wrap the measuring tape around your bust (under your armpits) at the
            fullest point of your chest and widest part of your back, being
            careful not to measure above or below it. Check to make sure the
            tape forms a full, even circle around your bust and doesn’t slope
            upward or droop in back. (Also note: Your bust measurement is not
            necessarily your bra size).
          </li>
          <li className="measure-page-animation-6 measure-page">
            <span className="number-title">
              <strong>2.)</strong> <strong>Waist:</strong>
            </span>
            <br />
            People often confuse their waist and hips. Your waist is the
            narrowest part of your body and falls between your bust and hips,
            typically just below your rib cage and above your belly button. Not
            sure how to find it? Bend to one side to find where there’s a
            natural crease: That’s your waist. Before measuring, remember not to
            suck in—instead, breathe normally so your dress doesn’t end up being
            uncomfortably tight.
          </li>
          <li className="measure-page-animation-7 measure-page">
            <span className="number-title">
              <strong>3.)</strong> <strong>Hips:</strong>
            </span>
            <br />
            To measure, stand up straight, but relaxed, with your feet together.
            Then wrap the tape around the widest part of your hips and backside.
          </li>
          <li className="measure-page-animation-8 measure-page">
            <span className="number-title">
              <strong>4.)</strong> <strong>Height:</strong>
            </span>
            <br />
            Place the tape measure on the wall to get an accurate height
            measurement if you are not sure. This helps ensure if you need extra
            length on your gown.
          </li>
          <li className="measure-page-animation-9 measure-page">
            <span className="number-title">
              <strong className="quick-tips-email-title">Email Us: </strong>
            </span>
            Send your measurements to zazousbridalboutique@gmail.com and we will
            match them with the designer size chart to give you a recommended
            size.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowToMeasureYourself;
