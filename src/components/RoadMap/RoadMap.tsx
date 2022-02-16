import React from "react";
import "./roadMap.css";
import Header from "../Header/Header";
import Periods from "../Periods/Periods";

const RoadMap: React.FC = () => {
  return (
    <div id="RoadMap" className="road-map">
      <div className="team-header">
        <div>
          <Periods reverse={true} />
          <h3>TEAM MEMBERS</h3>
          <Periods reverse={false} />
        </div>
        <h1>MEET THE CREW</h1>
      </div>
      <div className="vertical-time-line">
        <span className="vertical-divider web-v-divider"></span>
        <div className="inner-line left">
          <div className="percent left">Phase 1</div>
          <div className="line-detail left">
            <p>Bitdollars Dex: defi coin and decentralized exchange</p>
          </div>
        </div>
        <div className="inner-line right">
          <div className="percent right">Phase 2</div>
          <div className="line-detail right">
            <p>crowdfunding: raise funds for your causes</p>
          </div>
        </div>
        <div className="inner-line left">
          <div className="percent left">Phase 3</div>
          <div className="line-detail left">
            <p>
              development.com : NFT and Metaverse platform (like decentraland)
            </p>
          </div>
        </div>
        <div className="inner-line right">
          <div className="percent right">Phase 4</div>
          <div className="line-detail right">
            <p>complex digital assets platform (name to be determined)</p>
          </div>
        </div>
        <div className="inner-line left">
          <div className="percent left">Phase 5</div>
          <div className="line-detail left">
            <p>privacy coin exchange, built on mrwho.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
