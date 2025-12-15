import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            <Image
              src="/images/hero_2.jpg"
              alt="Image"
              width={500}
              height={500}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-4 mr-auto">
            <h2>Car Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              suscipit, repudiandae similique accusantium eius nulla quam
              laudantium sequi.
            </p>
            <p>
              Debitis voluptates corporis saepe molestias tenetur ab quae, quo
              earum commodi, laborum dolore, fuga aliquid delectus cum ipsa?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
