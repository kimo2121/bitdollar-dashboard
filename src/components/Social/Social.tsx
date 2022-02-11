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
        <div className="social-squre">
          <span></span>
          <a href="">
            <FiTwitter />
          </a>
          <span></span>
        </div>
        <div className="social-squre">
          <span></span>
          <a href="">
            <FaTelegramPlane />
          </a>
          <span></span>
        </div>
        <div className="social-squre">
          <span></span>
          <a href="">
            <SiMedium />
          </a>
          <span></span>
        </div>
        <div className="social-squre">
          <span></span>
          <a href="">
            <FaDiscord />
          </a>
          <span></span>
        </div>
        <div className="social-squre">
          <span></span>
          <a href="">
            <FiLinkedin />
          </a>
          <span></span>
        </div>
        <div className="social-squre">
          <span></span>
          <a href="">
            <FaInstagram />
          </a>
          <span></span>
        </div>
        <div className="social-squre">
          <span></span>
          <a href="">
            <AiOutlineFacebook />
          </a>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Social;
