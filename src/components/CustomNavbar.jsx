import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logos/Logo-Nav.png";

import "../styles/CustomNavbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimerRef = useRef(null);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const handleDropdownEnter = (eventKey) => {
    setActiveDropdown(eventKey);
    clearTimeout(dropdownTimerRef.current);
  };

  const handleDropdownLeave = (eventKey) => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Add a small delay before closing the dropdown
  };

  const handleNavDropdownLeave = () => {
    clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(null);
  };

  return (
    <Navbar
      expand="xl"
      variant="light"
      className="mt-3 mb-3 navbar"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Navbar.Brand className="navbar-brand">
        <div className="logo-container">
          <img className="zazous-nav-logo" src={Logo} alt="Zazou's Logo" />
          <span className="zazous-bridal">azou's Bridal </span>
        </div>
        <span className="brand-break">&nbsp;Boutique & Tuxedos</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" className="toggle-menu">
        Menu
      </Navbar.Toggle>
      <Navbar.Collapse
        id="navbarNav"
        className={`custom-navbar-collapse ${
          expanded ? "navbar-slide-down" : ""
        }`}
      >
        <Nav className="ml-auto nav-links">
          <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>
            Home
          </Nav.Link>
          <NavDropdown
            title="About Us"
            className="dropdown"
            id="aboutDropdown"
            onMouseEnter={() => handleDropdownEnter("aboutDropdown")}
            onMouseLeave={() => handleDropdownLeave("aboutDropdown")}
            show={activeDropdown === "aboutDropdown"}
          >
            <NavDropdown.Item
              as={Link}
              to="/our-story"
              onClick={handleNavItemClick}
            >
              Our Story
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/vendors"
              onClick={handleNavItemClick}
            >
              Vendors
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Dresses"
            className="dropdown"
            id="dressesDropdown"
            onMouseEnter={() => handleDropdownEnter("dressesDropdown")}
            onMouseLeave={() => handleDropdownLeave("dressesDropdown")}
            show={activeDropdown === "dressesDropdown"}
          >
            <NavDropdown.Item
              as={Link}
              to="/bridal"
              onClick={handleNavItemClick}
            >
              Bridal
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/bridesmaids-mothers"
              onClick={handleNavItemClick}
            >
              Bridesmaids & Mothers
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/prom" onClick={handleNavItemClick}>
              Prom
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/flowergirl-firstcommunion"
              onClick={handleNavItemClick}
            >
              Flower Girl & First Communion
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/accessories"
              onClick={handleNavItemClick}
            >
              Accessories
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/suits-tuxedos"
              onClick={handleNavItemClick}
            >
              Suits & Tuxedos
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/how-to-measure-yourself"
              onClick={handleNavItemClick}
            >
              How to Measure Yourself
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Appointments"
            className="dropdown"
            id="appointmentsDropdown"
            onMouseEnter={() => handleDropdownEnter("appointmentsDropdown")}
            onMouseLeave={() => handleDropdownLeave("appointmentsDropdown")}
            show={activeDropdown === "appointmentsDropdown"}
          >
            <NavDropdown.Item
              as={Link}
              to="/schedule-appointment"
              onClick={handleNavItemClick}
            >
              Schedule Appointment
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/plan-appointment"
              onClick={handleNavItemClick}
            >
              Plan Appointment
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/private-appointment"
              onClick={handleNavItemClick}
            >
              Private Appointment
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Reviews"
            className="dropdown"
            id="reviewsDropdown"
            onMouseEnter={() => handleDropdownEnter("reviewsDropdown")}
            onMouseLeave={() => handleDropdownLeave("reviewsDropdown")}
            show={activeDropdown === "reviewsDropdown"}
          >
            <NavDropdown.Item
              as={Link}
              to="/rave-reviews"
              onClick={handleNavItemClick}
            >
              Rave Reviews
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/write-review"
              onClick={handleNavItemClick}
            >
              Write Review
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/events" onClick={handleNavItemClick}>
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={handleNavItemClick}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
