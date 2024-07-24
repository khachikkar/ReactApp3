import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Nav.css";

export default function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <li id="little" onClick={toggleMenu}>
        Menu
      </li>
      {menuVisible && (
        <div className="menu-overlay">
          <div className="menu-content">
            <ul>
              <li>Appartements</li>
              <li>Contact Us</li>
              <li onClick={toggleMenu}>
                <Link className="lil" to="/src/Images">
                  Images
                </Link>
              </li>
              <li>
                <button className="primaryButton">Get Start</button>
              </li>
            </ul>
            <button className="close-menu" onClick={toggleMenu}>Close</button>
          </div>
        </div>
      )}
      <button id="little-btn" className="primaryButton">
        Get Start
      </button>
    </div>
  );
}
