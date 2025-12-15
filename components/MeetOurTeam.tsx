import React from "react";
import Image from "next/image";
import { team, team_interface } from "../lib/team";

const MeetOurTeam = () => {
  return (
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
  );
};

export default MeetOurTeam;
