import React from "react";
import "./styles.css";
import Header from "../Header/Header";
import Periods from "../Periods/Periods";

interface dataType {
  Data: {
    name: string;
    percent: string;
  }[];
}

const data: dataType["Data"] = [
  {
    name: "Team",
    percent: "7.50%",
  },
  {
    name: "Staking",
    percent: "9.50%",
  },
  {
    name: "Advisors",
    percent: "10.00%",
  },
  {
    name: "Liquidity",
    percent: "12.00%",
  },
  {
    name: "Ecosystem",
    percent: "16.33%",
  },
  {
    name: "Marketing",
    percent: "18.00%",
  },
  {
    name: "Private Sale",
    percent: "30.00%",
  },
];
const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <div className="tokenomics-container">
        <Header name="STATISTICS" desc="TOKENOMICS" />
        <div className="name-percent-bar">
          <div className="name-percent">
            {data.map((item, index) => (
              <div style={{ width: 120 + index * 10 }} key={index}>
                <p>{item.name}</p>
                <p>{item.percent}</p>
              </div>
            ))}
          </div>
          <div className="blocks-container">
            {data.map((item, index) => (
              <div className="blocks"></div>
            ))}
          </div>
        </div>
        <div className="numbers-projects-container">
          <div className="numbers-projects">
            <h1>158</h1>
            <p>Funded Projects</p>
          </div>
          <div className="numbers-projects">
            <h1>486</h1>
            <p>Unique Participants</p>
          </div>
          <div className="numbers-projects">
            <h1>$9M</h1>
            <p>Raised Capital</p>
          </div>
          <div className="numbers-projects">
            <h1>$18M+</h1>
            <p>Initial Market Cap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
