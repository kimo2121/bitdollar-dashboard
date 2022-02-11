import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Participate from "./components/Participate/Participate";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Periods from "./components/Periods/Periods";
import Team from "./components/Team/Team";
import Partners from "./components/Partners/Partners";
import Social from "./components/Social/Social";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <Navbar />
      </div>
      <Participate />
      <Tokenomics />
      <Team />
      <Partners />
      <Social />
    </div>
  );
}

export default App;
