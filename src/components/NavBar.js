import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            BouPics
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link" onClick={handleClick}>
                Portfolio <i className="fas fa-caret-down"></i>
              </div>
              <ul className={click ? "dropdown-menu active" : "dropdown-menu"}>
                <li className="dropdown-item">
                  <NavLink
                    exact
                    to="/portfolio"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <p>Photography</p>
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink
                    exact
                    to="/portfolio/videography"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <p>Videography</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
