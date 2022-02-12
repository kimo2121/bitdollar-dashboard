import React from "react";
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
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <Backdrop />
        <Navbar />
        <div className="banner-title">
          <h1>METAVERSE WEB 3.0</h1>
          <h1>GAMING LAUNCHPAD & IGO</h1>
          <p>The next generation gaming ecosystem for IGOs and NFT</p>
          <button className="explore-btn">EXPLORE IGO</button>
        </div>
      </div>
      <Participate />
      <Tokenomics />
      <div className="team-social-partners">
        <Backdrop />
        <Team />
        <Partners />
        <Social />
        <div className="footer">
          <img src={logo} alt="" />
          <div className="footer-links">
            <a href="/">Features</a>
            <a href="/">How it works</a>
            <a href="/">Token info</a>
            <a href="/">About us</a>
            <a href="/">Social media</a>
            <a href="/">Terms of service</a>
            <a href="/">Privacy Policy</a>
          </div>
          <p>Copyright ⓒ 2022. All Rights Reserved by GaFi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
