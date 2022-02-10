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
      <nav className="navbar">

        <div> 
            <Link to="/"><img src={spectraLogo} className="spectraLogo" alt="spectrasonic logo"/> </Link>
        </div>

        <a href="#" className="menu-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        
        <div className="navbar-links">
          <ul>
            <li> <a><Link to="/shows">shows</Link></a> </li>
            <li> <a><Link to="/calendar">calendar</Link></a> </li>
            <li> <a><Link to="/faq">faq</Link></a> </li>
            <li> <a><Link to="/contact">contact</Link></a> </li>
          </ul>
        </div>
      </nav>
      
    </header>

    // <header className="header">
    //   <div className="header-container">

    //     <div className="logo-container">
    //     <Link to="/">
    //       <img
    //         src={spectraLogo}
    //         className="spectraLogo"
    //         // style={{ width: "35%" }}
    //         alt="spectrasonic logo"
    //       />
    //     </Link>
    //     </div>
 
    //     <nav className="nav">

    //       <button className="nav-btn">
    //         <Link className="nav-link" to="/shows">
    //           shows
    //         </Link>
    //       </button>

    //       <button className="nav-btn">
    //         <Link className="nav-link" to="/calendar">
    //           calendar
    //         </Link>
    //       </button>

    //       <button className="nav-btn">
    //         <Link className="nav-link" to="/faq">
    //           faq
    //         </Link>
    //       </button>

    //       <button className="nav-btn">
    //         <Link className="nav-link" to="/contact">
    //           contact
    //         </Link>
    //       </button>

    //       <Link to="#header"></Link>
    //     </nav>
    //   </div>
    // </header>
  )
}

export default Header;
