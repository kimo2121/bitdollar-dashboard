import React from "react";
import Periods from "../Periods/Periods";
import "./styles.css";

const Features = () => {
  return (
    <div className="features">
      <div>
        <Periods reverse={true} />
        <h3>Features</h3>
        <Periods reverse={false} />
      </div>
      <div className="sub-features">
        <h2>SWAP</h2>|<h2>LIQUIDITY</h2>|<h2>FARM</h2>|<h2>POOL</h2>|
        <h2>LOTTERY</h2>
      </div>
    </div>
  );
};

export default Features;
