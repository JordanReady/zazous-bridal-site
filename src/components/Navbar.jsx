import React, { forwardRef, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Zazou's Bridal Boutique & Tuxedos
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="aboutDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </a>
            <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
              <li>
                <Link className="dropdown-item" to="/our-story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/vendors">
                  Vendors
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dressesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dresses
            </a>
            <ul className="dropdown-menu" aria-labelledby="dressesDropdown">
              <li>
                <Link className="dropdown-item" to="/bridal">
                  Bridal
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/bridesmaids-mothers">
                  Bridesmaids & Mothers
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/prom">
                  Prom
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/flowergirl-firstcommunion">
                  Flower Girl & First Communion
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/accessories">
                  Accessories
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/suits-tuxedos">
                  Suits & Tuxedos
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/how-to-measure-yourself">
                  How to Measure Yourself
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="appointmentsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Appointments
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="appointmentsDropdown"
            >
              <li>
                <Link className="dropdown-item" to="/schedule-appointment">
                  Schedule Appointment
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/plan-appointment">
                  Plan Appointment
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/private-appointment">
                  Private Appointment
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="reviewsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Reviews
            </a>
            <ul className="dropdown-menu" aria-labelledby="reviewsDropdown">
              <li>
                <Link className="dropdown-item" to="/rave-reviews">
                  Rave Reviews
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/write-review">
                  Write Review
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
