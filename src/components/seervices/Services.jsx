import React from "react";
import { Slack, Subtract, Playstation } from "react-bootstrap-icons";

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique labore, <br />
                perspiciatis quisquam alias eum aut. Non deserunt quidem dicta
                dolorum?
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <Slack />
                <h3 className="card-title">best quality</h3>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, voluptatum distinctio nesciunt consequuntur tempora
                  excepturi accusamus nisi aspernatur neque, ipsa accusantium
                  totam itaque eligendi eum sequi iste impedit unde rerum!
                </p>
                <button className="btn btn-warning text-dark">read more</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <Subtract />
                <h3 className="card-title">Integrity</h3>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, voluptatum distinctio nesciunt consequuntur tempora
                  excepturi accusamus nisi aspernatur neque, ipsa accusantium
                  totam itaque eligendi eum sequi iste impedit unde rerum!
                </p>
                <button className="btn btn-warning text-dark">read more</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 box">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <Playstation />
                <h3 className="card-title">sustainability </h3>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, voluptatum distinctio nesciunt consequuntur tempora
                  excepturi accusamus nisi aspernatur neque, ipsa accusantium
                  totam itaque eligendi eum sequi iste impedit unde rerum!
                </p>
                <button className="btn btn-warning text-dark">read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
