import React from "react";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";

const Team = () => {
  return (
    <section class="team section-padding" id="team">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-header text-center pb-5">
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipisicing elit. Non, quo.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card text-center">
              <div class="card-body">
                <img alt="" class="img-fluid rounded-circle" src={team1} />
                <h3 class="card-title py-2">Jack Wilson</h3>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam.
                </p>
                <p class="socials">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                  <i class="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card text-center">
              <div class="card-body">
                <img alt="" class="img-fluid rounded-circle" src={team2} />
                <h3 class="card-title py-2">Jack Wilson</h3>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam.
                </p>
                <p class="socials">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                  <i class="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card text-center">
              <div class="card-body">
                <img alt="" class="img-fluid rounded-circle" src={team3} />
                <h3 class="card-title py-2">Jack Wilson</h3>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam.
                </p>
                <p class="socials">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                  <i class="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card text-center">
              <div class="card-body">
                <img alt="" class="img-fluid rounded-circle" src={team4} />
                <h3 class="card-title py-2">Jack Wilson</h3>
                <p class="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sequi ipsam nostrum illo tempora esse quibusdam.
                </p>
                <p class="socials">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                  <i class="bi bi-instagram text-dark mx-1"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
