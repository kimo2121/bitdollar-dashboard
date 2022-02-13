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
          <div>
            <img src={swap} alt="" />
            <h2>SWAP</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ducimus adipisci, exercitationem laborum earum veniam
              minus unde alias sapiente temporibus accusamus praesentium
              necessitatibus animi incidunt, fugit, nisi recusandae similique
              cumque.
            </span>
          </div>
        </a>
        <a href="#">
          <div>
            <Liquidity />
            <h2>LIQUIDITY</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ducimus adipisci, exercitationem laborum earum veniam
              minus unde alias sapiente temporibus accusamus praesentium
              necessitatibus animi incidunt, fugit, nisi recusandae similique
              cumque.
            </span>
          </div>
        </a>
        <a href="#">
          <div>
            <img src={farming} alt="" />
            <h2>FARM</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ducimus adipisci, exercitationem laborum earum veniam
              minus unde alias sapiente temporibus accusamus praesentium
              necessitatibus animi incidunt, fugit, nisi recusandae similique
              cumque.
            </span>
          </div>
        </a>
        <a href="#">
          <div>
            <img src={pool} alt="" />
            <h2>POOL</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ducimus adipisci, exercitationem laborum earum veniam
              minus unde alias sapiente temporibus accusamus praesentium
              necessitatibus animi incidunt, fugit, nisi recusandae similique
              cumque.
            </span>
          </div>
        </a>
        <a href="#">
          <div>
            <img src={lottery} alt="" />
            <h2>LOTTERY</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ducimus adipisci, exercitationem laborum earum veniam
              minus unde alias sapiente temporibus accusamus praesentium
              necessitatibus animi incidunt, fugit, nisi recusandae similique
              cumque.
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Features;
