import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import Img1 from "../assets/property-pic-1.jpg";
import Img2 from "../assets/property-pic-2.jpg";
import Img3 from "../assets/property-pic-3.jpg";
import Img4 from "../assets/property-pic-4.jpg";
import Img5 from "../assets/property-pic-5.jpg";
import WeddingWire1 from "../assets/wedding-wire-1.jpg";
import WeddingWire2 from "../assets/wedding-wire-2.jpg";

import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carouselElement = document.querySelector(".carousel");
    new Carousel(carouselElement);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "/schedule-appointment";
  };

  return (
    <div className="container">
      <div className="carousel slide carousel-fade" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="0"
            className="active"
            style={{ backgroundImage: `url(${Img1})` }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="1"
            style={{ backgroundImage: `url(${Img2})` }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="2"
            style={{ backgroundImage: `url(${Img3})` }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="3"
            style={{ backgroundImage: `url(${Img4})` }}
          />
          <li
            data-bs-target=".carousel"
            data-bs-slide-to="4"
            style={{ backgroundImage: `url(${Img5})` }}
          />
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active ratio-4x3">
            <img
              src={Img1}
              className="d-block w-100 carousel-image"
              alt="Slide 1"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 1 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img2}
              className="d-block w-100 carousel-image"
              alt="Slide 2"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 2 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img3}
              className="d-block w-100 carousel-image"
              alt="Slide 3"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 3 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img4}
              className="d-block w-100 carousel-image"
              alt="Slide 4"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 4 Title</h3>
            </div>
          </div>
          <div className="carousel-item ratio-4x3">
            <img
              src={Img5}
              className="d-block w-100 carousel-image"
              alt="Slide 5"
            />
            <div className="carousel-caption">
              <h3 className="caption-text">Slide 5 Title</h3>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href=".carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href=".carousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <div className="thumbnail-spacer"></div>
      <section className="hero-text-container">
        <h2 className="hero-text">
          Zazou’s Bridal Boutique & Tuxedos prides ourselves on being innovative
          and unique when it comes to providing the ultimate bridal experience!
          We carry wedding gowns, tuxedos, bridesmaids, mothers, flower girls,
          prom, first communions, accessories, and more. Our modern atmosphere
          in the Dubuque Millwork District is the perfect environment to help
          any bride say, "I found the gown at Zazou's!”
        </h2>
        <button className="hero-button btn btn-dark" onClick={handleClick}>
          Schedule Appointment
        </button>
      </section>
      <section className="home-info">
        <div class="row">
          <div class="col-md-4 mt-4">
            <div class="text-center">
              <h4>Store Hours</h4>
              <table class="table table-bordered">
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
          <div className="col-md-4 mt-4 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col">
                {/* Image 1 */}
                <img src={WeddingWire1} alt="Image 1" className="img-fluid" />
              </div>
              <div className="col">
                {/* Image 2 */}
                <img src={WeddingWire2} alt="Image 2" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3>Zazou's Bridal Boutique & Tuxedos</h3>
              <p>955 Washington Street - Suite 104</p>
              <p>Dubuque, IA 52001</p>
              <p>563-213-2049</p>
              <p>info@zazousbridalandtuxedos.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
