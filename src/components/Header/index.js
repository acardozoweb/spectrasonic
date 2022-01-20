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
      <div className="nav container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img
            src={spectraLogo}
            className="spectraLogo"
            style={{ width: "35%" }}
            alt="spectrasonic logo"
          />
        </Link>

        <nav className="text-center">
          <button>
            <Link to="/faq">FAQ</Link>
          </button>

          <button>
            <Link to="/contact">Contact</Link>
          </button>

          <Link to="#header"></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
