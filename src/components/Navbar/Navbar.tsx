import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import logo from "../../assets/logo.png";
import BasicModal from "../Modal/Modal";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);

  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="navbar">
      <div className="web-nav">
        <div className="nav-links">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <Link smooth={true} duration={800} to="Features">
            Features
          </Link>
          <Link smooth={true} duration={800} to="Participate">
            Participate
          </Link>
          <Link smooth={true} duration={800} to="Tokenomics">
            Tokenomics
          </Link>
          <Link smooth={true} duration={800} to="Team">
            Team
          </Link>
          <Link smooth={true} duration={800} to="Partners">
            Partners
          </Link>
        </div>
        <a href="https://app.bitdollars.io/" className="connect-btn">
          Enter App
        </a>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div>
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <BasicModal />
            {/* <button onClick={toggleAccordion} className="menu-slide-btn">
              <HiMenu
                className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
              />
            </button> */}
          </div>
          <a href="https://app.bitdollars.io/" className="connect-btn">
            Enter App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
