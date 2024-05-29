import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "../assets/image 1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../CSS/Navbar.css";
import Call from "../assets/Frame 117.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Brand} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <details className="dropdown">
                <summary className="m-1 btn">
                  {" "}
                  <NavLink to="/">Product</NavLink>
                </summary>
                <ul className="df">
                  <li>
                    <NavLink to="/">Product1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Product2</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/">Stock</NavLink>
            </li>
            <li>
              <NavLink to="/">Infrasture</NavLink>
            </li>
            <li>
              <NavLink to="/">
                {" "}
                <img src={Call} alt="" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
