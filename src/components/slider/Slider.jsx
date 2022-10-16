/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image1 from "../../assets/home-1.jpg";
import image2 from "../../assets/home-2.jpg";
import image3 from "../../assets/home-3.jpg";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption">
            <h5>your dream homes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              tempora quibusdam sed facere perspiciatis{" "}
            </p>

            <p>
              <a href="#" className="btn btn-warning mt-3 text-capitalize">
                see more
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption ">
            <h5>bueatiful homes</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              quae molestiae eaque nobis consequuntur aperiam.
            </p>
            <p>
              <a href="#" className="btn btn-warning mt-3 text-capitalize">
                see more
              </a>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block w-100 h-100" alt="..." />
          <div className="carousel-caption ">
            <h5>large green spaces</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ipsa nostrum perspiciatis necessitatibus eius esse?
            </p>
            <p>
              <a href="#" className="btn btn-warning mt-3 text-capitalize">
                see more
              </a>
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
