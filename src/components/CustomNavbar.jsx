import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logos/Logo-Nav-Green.png";

import "../styles/CustomNavbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownTimerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLogoClick = () => {
    const targetURL = "#/";
    window.location.href = targetURL;
  };

  const handleMenuClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      expand="xl"
      variant="light"
      className="mt-3 mb-3 navbar navbar-animation navbar-animation-1"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Navbar.Brand className="navbar-brand" onClick={handleLogoClick}>
        <div className="logo-container">
          <img className="zazous-nav-logo" src={Logo} alt="Zazou's Logo" />
          <span className="zazous-bridal">azou's Bridal </span>
        </div>
        <span className="brand-break">&nbsp;Boutique & Tuxedos</span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarNav"
        className={isSticky ? "toggle-menu sticky" : "toggle-menu"}
        onClick={handleMenuClick}
      >
        Menu
      </Navbar.Toggle>
      <Navbar.Collapse
        id="navbarNav"
        className={`custom-navbar-collapse ${
          expanded ? "navbar-slide-down" : ""
        }`}
      >
        <Nav className="ml-auto nav-links">
          <Nav.Link
            as={Link}
            to="/"
            onClick={handleNavItemClick}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Nav.Link>
          <NavDropdown
            title="About Us"
            id="aboutDropdown"
            onMouseEnter={() => handleDropdownEnter("aboutDropdown")}
            onMouseLeave={() => handleDropdownLeave("aboutDropdown")}
            show={activeDropdown === "aboutDropdown"}
            className={
              location.pathname.includes("/our-story") ||
              location.pathname.includes("/vendors")
                ? "active-dropdown dropdown"
                : "dropdown"
            }
          >
            <NavDropdown.Item
              as={Link}
              to="/our-story"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/our-story" ? "active-link" : ""
              }
            >
              Our Story
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/vendors"
              onClick={handleNavItemClick}
              className={location.pathname === "/vendors" ? "active-link" : ""}
            >
              Vendors
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Dresses"
            id="dressesDropdown"
            onMouseEnter={() => handleDropdownEnter("dressesDropdown")}
            onMouseLeave={() => handleDropdownLeave("dressesDropdown")}
            show={activeDropdown === "dressesDropdown"}
            className={
              location.pathname.includes("/bridal") ||
              location.pathname.includes("/bridesmaids-mothers") ||
              location.pathname.includes("/prom") ||
              location.pathname.includes("/flowergirl-firstcommunion") ||
              location.pathname.includes("/accessories") ||
              location.pathname.includes("/suits-tuxedos") ||
              location.pathname.includes("/how-to-measure-yourself")
                ? "active-dropdown dropdown"
                : "dropdown"
            }
          >
            <NavDropdown.Item
              as={Link}
              to="/bridal"
              onClick={handleNavItemClick}
              className={location.pathname === "/bridal" ? "active-link" : ""}
            >
              Bridal
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/bridesmaids-mothers"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/bridesmaids-mothers"
                  ? "active-link"
                  : ""
              }
            >
              Bridesmaids & Mothers
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/prom"
              onClick={handleNavItemClick}
              className={location.pathname === "/prom" ? "active-link" : ""}
            >
              Prom
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/flowergirl-firstcommunion"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/flowergirl-firstcommunion"
                  ? "active-link"
                  : ""
              }
            >
              Flower Girl & First Communion
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/accessories"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/accessories" ? "active-link" : ""
              }
            >
              Accessories
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/suits-tuxedos"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/suits-tuxedos" ? "active-link" : ""
              }
            >
              Suits & Tuxedos
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/how-to-measure-yourself"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/how-to-measure-yourself"
                  ? "active-link"
                  : ""
              }
            >
              How to Measure Yourself
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Appointments"
            id="appointmentsDropdown"
            onMouseEnter={() => handleDropdownEnter("appointmentsDropdown")}
            onMouseLeave={() => handleDropdownLeave("appointmentsDropdown")}
            show={activeDropdown === "appointmentsDropdown"}
            className={
              location.pathname.includes("/schedule-appointment") ||
              location.pathname.includes("/plan-appointment") ||
              location.pathname.includes("/private-appointment")
                ? "active-dropdown dropdown"
                : "dropdown"
            }
          >
            <NavDropdown.Item
              as={Link}
              to="/schedule-appointment"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/schedule-appointment"
                  ? "active-link"
                  : ""
              }
            >
              Schedule Appointment
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/plan-appointment"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/plan-appointment" ? "active-link" : ""
              }
            >
              Plan Appointment
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/private-appointment"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/private-appointment"
                  ? "active-link"
                  : ""
              }
            >
              Private Appointment
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Reviews"
            className={
              location.pathname.includes("/rave-reviews") ||
              location.pathname.includes("/write-review")
                ? "active-dropdown dropdown"
                : "dropdown"
            }
            id="reviewsDropdown"
            onMouseEnter={() => handleDropdownEnter("reviewsDropdown")}
            onMouseLeave={() => handleDropdownLeave("reviewsDropdown")}
            show={activeDropdown === "reviewsDropdown"}
          >
            <NavDropdown.Item
              as={Link}
              to="/rave-reviews"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/rave-reviews" ? "active-link" : ""
              }
            >
              Rave Reviews
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/write-review"
              onClick={handleNavItemClick}
              className={
                location.pathname === "/write-review" ? "active-link" : ""
              }
            >
              Write Review
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
            to="/events"
            onClick={handleNavItemClick}
            className={location.pathname === "/events" ? "active-link" : ""}
          >
            Events
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            onClick={handleNavItemClick}
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
