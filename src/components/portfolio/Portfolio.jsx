import React from "react";
import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpg";

const Portfolio = () => {
  return (
    <section class="portfolio section-padding p-5" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-header text-center pb-5">
              <h2>Our Projects</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipisicing elit. Non, quo.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img alt="" class="img-fluid" src={project1} />
                </div>
                <h3 class="card-title">Building Make</h3>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eligendi modi temporibus alias iste. Accusantium?
                </p>
                <button class="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img alt="" class="img-fluid" src={project2} />
                </div>
                <h3 class="card-title">Building Make</h3>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eligendi modi temporibus alias iste. Accusantium?
                </p>
                <button class="btn bg-warning text-dark">learn More</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img alt="" class="img-fluid" src={project3} />
                </div>
                <h3 class="card-title">Building Make</h3>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci eligendi modi temporibus alias iste. Accusantium?
                </p>
                <button class="btn bg-warning text-dark">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
