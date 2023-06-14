import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import mapPin from "../img/feather/map-pin.svg"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Apres Cafe" style={{ }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/menu">
              Menu
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            </li>
          <li className="navbar-end has-text-centered">
            <div className="navbar-item">
              <button
                className="button is-responsive"
                href="https://www.google.com/maps?daddr=4695+Racquet+Club+Drive+81657,+Vail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                      src={mapPin}
                      alt="Map"
                      style={{ width: "1.3em", height: "auto", marginRight: "5px" }}
                    />
                    Get Directions
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
