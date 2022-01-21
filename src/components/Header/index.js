////////////////////////
///// HEADER INDEX /////
////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import spectraLogo from "../../assets/logos/spectrasonic_logo_k-192.jpg";
// import { Nav } from '../Nav/index.js'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img
            src={spectraLogo}
            className="spectraLogo"
            // style={{ width: "35%" }}
            alt="spectrasonic logo"
          />
        </Link>
 
        <nav className="nav">
          <button className="nav-btn">
            <Link className="nav-link" to="/shows">
              shows
            </Link>
          </button>

          <button className="nav-btn">
            <Link className="nav-link" to="/calendar">
              calendar
            </Link>
          </button>

          <button className="nav-btn">
            <Link className="nav-link" to="/faq">
              faq
            </Link>
          </button>

          <button className="nav-btn">
            <Link className="nav-link" to="/contact">
              contact
            </Link>
          </button>

          <Link to="#header"></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
