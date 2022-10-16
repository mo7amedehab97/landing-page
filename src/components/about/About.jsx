/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import aboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="about section-padding p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-image">
              <img src={aboutImg} alt="" className="img-fluid " />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>
                we provide best quality <br /> services ever
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veniam nostrum quae tenetur quos! Laudantium voluptatibus
                aliquid quisquam iusto eos debitis iste itaque nulla, possimus
                dolores expedita nescient quos corrupti!
              </p>
              <a href="#" className="btn btn-warning text-transform-uppercase">
                learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
