////////////////////////
///// HEADER INDEX /////
////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import spectraLogo from "../../assets/logos/spectrasonic_logo_k-192.jpg";
// import { Nav } from '../Nav/index.js'

function Header() {
  return (
    <header>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img
            src={spectraLogo}
            className="spectraLogo"
            style={{ width: "35%" }}
            alt="spectrasonic logo"
          />
        </Link>

        <nav className="text-center">
          <Link to="#header"></Link>
          <Link to="/faq">FAQ</Link>

          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
