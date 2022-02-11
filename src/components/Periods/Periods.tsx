import React from "react";
import "./styles.css";

interface Reverse {
  reverse: boolean;
}
const Periods: React.FC<Reverse> = ({ reverse }) => {
  return (
    <div className={reverse ? "periods reverse" : "periods"}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Periods;
