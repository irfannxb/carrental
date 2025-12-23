import React from "react";
import Banner from "../../components/Banner";
import Image from "next/image";
import { team, team_interface } from "../../../lib/team";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const AboutPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <Banner />
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
      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5 section-2-title">
            <div className="col-md-6">
              <h2 className="mb-4">Meet Our Team</h2>
            </div>
          </div>
          <div className="row align-items-stretch">
            {team.map((member: team_interface) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-5">
                <div className="post-entry-1 h-100 person-1">
                  <Image
                    src={member.image}
                    alt="Image"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />

                  <div className="post-entry-1-contents">
                    <span className="meta">{member.job}</span>
                    <h2>{member.name}</h2>
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
