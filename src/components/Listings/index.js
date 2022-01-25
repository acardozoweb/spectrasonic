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
          <img src={placeholder} className="card-img" />
        </div>
        <div className="card-body">
            <p>Artist Name</p>
            <p>Date</p>
            <p>Venue</p>
            <p>Doortime, Start time</p>
            <p>Price</p>
            <p>19+/AA/etc</p>
            <button className="ticket-btn">
              <a className="ticket-link">tickets</a>  
            </button>
        </div>
      </div>
    </div>
  );
}


export default eventListings;