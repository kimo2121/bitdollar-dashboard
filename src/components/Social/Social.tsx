import React from "react";
import Periods from "../Periods/Periods";
import "./styles.css";
import { FaTelegramPlane, FaDiscord, FaInstagram } from "react-icons/fa";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { SiMedium } from "react-icons/si";

const Social = () => {
  return (
    <div className="socials">
      <h2>
        <Periods reverse={true} />
        FIND US ON SOCIAL
        <Periods reverse={false} />
      </h2>
      <div className="squares-container">
        <a className="social-squre" href="#">
          <FiTwitter />
        </a>
        <a className="social-squre" href="#">
          <FaTelegramPlane />
        </a>
        <a className="social-squre" href="#">
          <SiMedium />
        </a>
        <a className="social-squre" href="#">
          <FaDiscord />
        </a>
        <a className="social-squre" href="#">
          <FiLinkedin />
        </a>
        <a className="social-squre" href="#">
          <FaInstagram />
        </a>
        <a className="social-squre" href="#">
          <AiOutlineFacebook />
        </a>
      </div>
    </div>
  );
};

export default Social;
