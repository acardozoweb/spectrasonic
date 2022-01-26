//////////////////////////////
////// LISTINGS INDEX ////////
//////////////////////////////

import React from "react";

import placeholder from "../../assets/images/Placeholder.png"

function eventListings() {
  return (
    <div>
      <div className="event-card mb-3">
        <div>
          <img src={placeholder} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <p>Artist Name</p>
            <p>Date</p>
            <p>Venue</p>
            <p>Doortime, Start time</p>
            <p>Price</p>
            <p>19+/AA/etc</p>
            <button className="ticket-btn">
              <a alt="button for purchasing tickets" className="ticket-link" >tickets</a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>
    </div>
  );
}


export default eventListings;