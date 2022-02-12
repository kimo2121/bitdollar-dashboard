import React from "react";
import Periods from "../Periods/Periods";
import "./styles.css";
import { ReactComponent as Liquidity } from "../../assets/liquidity.svg";
import lottery from "../../assets/lottery.png";
import swap from "../../assets/swap.png";
import pool from "../../assets/pool.png";
import farming from "../../assets/farming.png";

const Features = () => {
  return (
    <div id="Features" className="features">
      <div>
        <Periods reverse={true} />
        <h3>Features</h3>
        <Periods reverse={false} />
      </div>
      <div className="sub-features">
        <a href="#">
          <img src={swap} alt="" />
          <h2>SWAP</h2>
        </a>
        |
        <a href="#">
          <Liquidity />
          <h2>LIQUIDITY</h2>
        </a>
        |
        <a href="#">
          <img src={farming} alt="" />
          <h2>FARM</h2>
        </a>
        |
        <a href="#">
          <img src={pool} alt="" />
          <h2>POOL</h2>
        </a>
        |
        <a href="#">
          <img src={lottery} alt="" />
          <h2>LOTTERY</h2>
        </a>
      </div>
    </div>
  );
};

export default Features;
