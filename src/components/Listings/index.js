//////////////////////////////
////// LISTINGS INDEX ////////
//////////////////////////////

import React from "react";

function eventListings() {
  return (
    <div>
      <div className="event-card mb-3">
        <div className="card-header">
          <p>
            <span>
                Date: Artist Name
            </span>
          </p>
        </div>
        <div className="card-body">
            <p>Venue</p>
            <p>Doortime, Start time</p>
            <p>Ticket Price</p>
            <p>19+ / All Ages / etc</p>
        </div>
      </div>
    </div>
  );
}


export default eventListings;