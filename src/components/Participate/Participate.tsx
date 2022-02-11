import React from "react";
import Header from "../Header/Header";
import "./styles.css";

const Participate = () => {
  return (
    <div className="participate">
      <div className="participate-container">
        <div className="participate-top">
          <Header name="3 EASY STEPS" desc="HOW TO PARTICIPATE" />
          <div></div>
        </div>
        <div className="participate-bottom">
          <div className="step1">
            <h1>1</h1>
            <div>
              <p>Submit KYC</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                consectetur sequi quasi voluptates cumque cupiditate nostrum
                doloremque
              </span>
            </div>
          </div>
          <div className="step2">
            <h1>2</h1>
            <div>
              <p>Verify Walltet</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                consectetur sequi quasi voluptates cumque cupiditate nostrum
                doloremque
              </span>
            </div>
          </div>
          <div className="step3">
            <h1>3</h1>
            <div>
              <p>Start Staking</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                consectetur sequi quasi voluptates cumque cupiditate nostrum
                doloremque
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
