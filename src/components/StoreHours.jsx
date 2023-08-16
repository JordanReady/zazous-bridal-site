import React from "react";
import "../styles/StoreHours.css";

const StoreHours = ({ style, col, customClass }) => {
  return (
    <div
      className={`${col} info-box d-flex justify-content-center align-items-center ${customClass}`}
      style={{ "--i": style }}
    >
      <div className="store-text-container">
        <h3 className="title-text info-title store-hours-text">Store Hours</h3>
      </div>
      <div className="store-hours-container">
        <table className="table table-bordered store-hours-table">
          <tbody>
            <tr>
              <th>Monday</th>
              <td>10AM - 6PM</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>CLOSED</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>10AM - 6PM</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>10AM - 6PM</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>10AM - 6PM</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>10AM - 5PM</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>10AM - 5PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreHours;
