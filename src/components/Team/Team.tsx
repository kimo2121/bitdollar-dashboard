import React from "react";
import Periods from "../Periods/Periods";
import "./styles.css";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import fourth from "../../assets/4.png";
import fifth from "../../assets/5.png";
import sixth from "../../assets/6.png";
import seventh from "../../assets/7.png";
import eighth from "../../assets/8.png";
import Member from "../Member/Member";

export interface data {
  Data: {
    img: string;
    name: string;
    job: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  }[];
}

const team: data["Data"] = [
  {
    img: first,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "www.facebook.com",
    linkedin: "www.linkedin.com",
    twitter: "www.twitter.com",
  },
  {
    img: second,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "",
    linkedin: "www.linkedin.com",
    twitter: "www.twitter.com",
  },
  {
    img: third,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "",
    linkedin: "",
    twitter: "www.twitter.com",
  },
  {
    img: fourth,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "www.facebook.com",
    linkedin: "www.linkedin.com",
    twitter: "",
  },
  {
    img: fifth,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "",
    linkedin: "",
    twitter: "www.twitter.com",
  },
  {
    img: sixth,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "",
    linkedin: "www.linkedin.com",
    twitter: "",
  },
  {
    img: seventh,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "www.facebook.com",
    linkedin: "",
    twitter: "",
  },
  {
    img: eighth,
    name: "lorem ipsem",
    job: "lorem ipsem",
    facebook: "www.facebook.com",
    linkedin: "",
    twitter: "",
  },
];
const Team = () => {
  return (
    <div className="team">
      <div className="team-header">
        <div>
          <Periods reverse={true} />
          <h3>TEAM MEMBERS</h3>
          <Periods reverse={false} />
        </div>
        <h1>MEET THE CREW</h1>
      </div>
      <div className="members">
        {team.map((item, index) => (
          <Member key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
