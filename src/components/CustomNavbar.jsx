import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo-1-outline1.png";

import "../styles/navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="xl" variant="light" className="mt-3 mb-3">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <div className="logo-container">
          <img className="zazous-nav-logo" src={Logo} alt="Zazou's Logo" />
          <span className="zazous-bridal">azou's Bridal </span>
        </div>
        <span className="brand-break">&nbsp;Boutique & Tuxedos</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" className="toggle-menu">
        Menu
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto nav-links">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="About Us" className="dropdown" id="aboutDropdown">
            <NavDropdown.Item as={Link} to="/our-story">
              Our Story
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/vendors">
              Vendors
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Dresses"
            className="dropdown"
            id="dressesDropdown"
          >
            <NavDropdown.Item as={Link} to="/bridal">
              Bridal
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/bridesmaids-mothers">
              Bridesmaids & Mothers
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/prom">
              Prom
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/flowergirl-firstcommunion">
              Flower Girl & First Communion
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/accessories">
              Accessories
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/suits-tuxedos">
              Suits & Tuxedos
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/how-to-measure-yourself">
              How to Measure Yourself
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Appointments"
            className="dropdown"
            id="appointmentsDropdown"
          >
            <NavDropdown.Item as={Link} to="/schedule-appointment">
              Schedule Appointment
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/plan-appointment">
              Plan Appointment
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/private-appointment">
              Private Appointment
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Reviews"
            className="dropdown"
            id="reviewsDropdown"
          >
            <NavDropdown.Item as={Link} to="/rave-reviews">
              Rave Reviews
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/write-review">
              Write Review
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/events">
            Events
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
