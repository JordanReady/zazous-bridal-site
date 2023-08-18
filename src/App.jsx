import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/brands.css";

import { CustomNavbar, Footer, WelcomeHome } from "./components";

import {
  Home,
  Contact,
  HowToMeasureYourself,
  Bridal,
  FlowerGirl,
  Accessories,
  SuitsTuxedos,
  Prom,
  Vendors,
  OurStory,
  Bridesmaids,
  ScheduleAppointment,
  PlanAppointment,
  PrivateAppointment,
  RaveReviews,
  WriteReview,
  Events,
} from "./pages";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     const timeout = setTimeout(() => {
  //       setShowWelcome(false);
  //     }, 4000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   } else {
  //     setShowWelcome(false); // Disable animation for non-home URLs
  //   }
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {showWelcome ? (
        <WelcomeHome />
      ) : (
        <div className="App">
          <div className="page-content">
            <CustomNavbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/our-story" exact element={<OurStory />} />
              <Route path="/vendors" exact element={<Vendors />} />
              <Route path="/bridal" exact element={<Bridal />} />
              <Route
                path="/bridesmaids-mothers"
                exact
                element={<Bridesmaids />}
              />
              <Route path="/prom" exact element={<Prom />} />
              <Route
                path="/flowergirl-firstcommunion"
                exact
                element={<FlowerGirl />}
              />
              <Route path="/accessories" exact element={<Accessories />} />
              <Route path="/suits-tuxedos" exact element={<SuitsTuxedos />} />
              <Route
                path="/how-to-measure-yourself"
                exact
                element={<HowToMeasureYourself />}
              />
              <Route
                path="/schedule-appointment"
                exact
                element={<ScheduleAppointment />}
              />
              <Route
                path="/plan-appointment"
                exact
                element={<PlanAppointment />}
              />
              <Route
                path="/private-appointment"
                exact
                element={<PrivateAppointment />}
              />
              <Route path="/rave-reviews" exact element={<RaveReviews />} />
              <Route path="/write-review" exact element={<WriteReview />} />
              <Route path="/events" exact element={<Events />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
