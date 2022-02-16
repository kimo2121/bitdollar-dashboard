import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Participate from "./components/Participate/Participate";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Periods from "./components/Periods/Periods";
import Team from "./components/Team/Team";
import Partners from "./components/Partners/Partners";
import Social from "./components/Social/Social";
import Backdrop from "./components/Backdrop/Backdrop";
import logo from "./assets/logo.png";
import crystal from "./assets/crystal.png";
import alienjet from "./assets/alienjet.png";
import Features from "./components/Features/Features";
import Timer from "../src/components/Timer/Timer";
import RoadMap from "./components/RoadMap/RoadMap";
function App() {
  const [move, setMove] = useState(1);
  const [posY, setPosY] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  window.onscroll = () => {
    const scrolltop = window.pageYOffset;
    const winHeight = window.innerHeight;
    if (scrolltop <= winHeight / 0.5) {
      setScrollY(scrolltop);
      setPosY(1 - scrollY / (winHeight / 1.9));
    } else {
      setPosY(0);
    }

    return () => (window.onscroll = null);
  };

  useEffect(() => {
    setMove(posY);
  });
  let rep = window.innerWidth;
  return (
    <div className="App">
      {/* <img className="crystal-ball" src={crystal} alt="" /> */}
      <div className="banner">
        <Backdrop />
        <img
          style={{
            left:
              window.innerWidth > 1700
                ? 1350 * move
                : window.innerWidth < 1700
                ? 850 * move
                : undefined,
          }}
          className="alien-jet"
          src={alienjet}
          alt=""
        />
        <img
          style={{
            left:
              window.innerWidth < 1200
                ? 580 * move
                : window.innerWidth < 900
                ? 200 * move
                : undefined,
          }}
          className="alien-jet2"
          src={alienjet}
          alt=""
        />
        <img
          style={{
            left:
              window.innerWidth < 900
                ? 200 * move
                : window.innerWidth < 420
                ? 100 * move
                : undefined,
          }}
          className="alien-jet3"
          src={alienjet}
          alt=""
        />
        <img
          style={{
            left: window.innerWidth < 420 ? 100 * move : undefined,
          }}
          className="alien-jet4"
          src={alienjet}
          alt=""
        />
        <Navbar />
        <div className="banner-title">
          <h1>METAVERSE WEB 3.0</h1>
          <h1>GAMING LAUNCHPAD & IGO</h1>
          <p>The next generation gaming ecosystem for IGOs and NFT</p>
          <a href="https://app.bitdollars.io/swap" className="explore-btn">
            Buy BTCD
          </a>
        </div>
      </div>
      <Timer mintStartAt={1645500654} />
      <Participate />
      <Tokenomics />
      <RoadMap />
      <div className="team-social-partners">
        <Backdrop />
        <Team />
        <Partners />
        <div className="email">
          <h1>Enter your email to receive Airdrops</h1>
          <input type="text" placeholder="Enter your email" />
        </div>
        <Social />
        <div className="footer">
          <img src={logo} alt="" />
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">How it works</a>
            <a href="#">Token info</a>
            <a href="#">About us</a>
            <a href="#">Social media</a>
            <a href="#">Terms of service</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p>Copyright ⓒ 2022. All Rights Reserved by GaFi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
