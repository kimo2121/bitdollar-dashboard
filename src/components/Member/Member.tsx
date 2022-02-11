import React from "react";
import "./styles.css";

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Member = ({ item }: any) => {
  return (
    <div className="member">
      <div className="member-container">
        <img src={item.img} alt="" />
        <h2>{item.name}</h2>
        <p>{item.job}</p>
        <div>
          {item.facebook && (
            <a href={item.facebook}>
              <AiOutlineFacebook />
            </a>
          )}
          {item.linkedin && (
            <a href={item.linkedin}>
              <AiOutlineLinkedin />
            </a>
          )}
          {item.twitter && (
            <a href={item.twitter}>
              <AiOutlineTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;
