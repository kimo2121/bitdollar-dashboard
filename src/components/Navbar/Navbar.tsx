import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import logo from "../../assets/logo.png";

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
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            Home
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="About">
            IGOs
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="RoadMap">
            Staking
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            Pages
          </Link>
        </div>
        <button className="connect-btn">Enter App</button>
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div>
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <button onClick={toggleAccordion} className="menu-slide-btn">
              <HiMenu
                className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
              />
            </button>
          </div>
          <button className="connect-btn">Enter App</button>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Home"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            IGOs
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            Staking
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            Pages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
