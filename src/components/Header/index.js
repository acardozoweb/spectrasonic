////////////////////////
///// HEADER INDEX /////
////////////////////////

import React from 'react';
import spectraLogo from '../../assets/logos/spectrasonic_logo_k-192.jpg'

function Header() {
    return (
        <section>
            <img src={spectraLogo} className="spectraLogo" style={{ width: "35%" }} alt="spectrasonic logo"/>
        </section>
    );
}

export default Header;

