import React from "react";
import Periods from "../Periods/Periods";
import "./styles.css";

interface headerTypes {
  name: string;
  desc: string;
}

const Header: React.FC<headerTypes> = ({ name, desc }) => {
  return (
    <div className="header">
      <h3>
        {name} <Periods reverse={false} />
      </h3>
      <h1>{desc}</h1>
    </div>
  );
};

export default Header;
