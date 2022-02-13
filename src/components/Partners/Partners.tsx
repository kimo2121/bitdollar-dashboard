import React from "react";
import Periods from "../Periods/Periods";
import "./styles.css";
import bsc from "../../assets/bsc.png";
import polk from "../../assets/polk.png";
import ether from "../../assets/ether.png";
import sol from "../../assets/sol.png";
import poly from "../../assets/poly.png";
import kusama from "../../assets/kusama.png";
const partnersImages = [bsc, polk, ether, sol, poly, kusama];

const Partners = () => {
  return (
    <div id="Partners" className="partners">
      <h2>
        <Periods reverse={true} />
        OUR PARTNERS
        <Periods reverse={false} />
      </h2>
      <div className="part-container">
        {partnersImages.map((item, index) => (
          <a href="#">
            <img key={index} src={item} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
