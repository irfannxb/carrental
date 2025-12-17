import React from "react";
import TripForm from "./TripForm";

const HeroSlider = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: "url('/images/hero_1_a.jpg')" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="row mb-5">
              <div className="col-lg-7 intro">
                <h1>
                  <strong>Rent a car</strong> is within your finger tips.
                </h1>
              </div>
            </div>
            <TripForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
