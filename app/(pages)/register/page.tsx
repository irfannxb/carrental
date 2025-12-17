"use client";
import React from "react";
import Banner from "../../components/Banner";

import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Banner />
      <div className="site-section bg-light" id="register-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-7 text-center mb-5">
              <h2>Contact Us Or Use This Form To Rent A Car</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                assumenda, dolorum necessitatibus eius earum voluptates sed!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form onSubmit={handleSubmit} method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="lastName"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      name="phone"
                      required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name="about"
                      id="about-field"
                      className="form-control"
                      placeholder="About yourself"
                      cols={30}
                      rows={10}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5"
                      value="Register"
                    />
                  </div>
                </div>
              </form>

              <div className="row">
                <span>
                  <button
                    onClick={() => signIn("github")}
                    style={{ padding: "10px 20px", margin: "10px" }}
                  >
                    Login with GitHub
                  </button>
                </span>
              </div>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-black mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Address:</span>
                    <span>34 Street Name, City Name Here, United States</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Phone:</span>
                    <span>+1 242 4942 290</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Email:</span>
                    <span>info@yourdomain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
