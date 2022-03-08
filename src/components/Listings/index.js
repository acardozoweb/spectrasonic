//////////////////////////////
////// LISTINGS INDEX ////////
//////////////////////////////

import React, { useState } from "react";

import placeholder from "../../assets/images/Placeholder.png"
import STWpic from "../../assets/pics/STW.jpeg"
import knorth from "../../assets/pics/knorth.jpeg"
import BDV from "../../assets/pics/BDV.jpeg"
import GRS from "../../assets/pics/GRS.jpeg"
import mod from "../../assets/pics/mod.jpeg"
import wilcox from "../../assets/pics/wilcox.jpeg"
import aucoin from "../../assets/pics/aucoin.jpeg"
import wonder from "../../assets/pics/wonder.jpeg"
import cbats from "../../assets/pics/cancerbats.jpeg"

function eventListings() {

  

  return (
    <div>

      <h2 className="listingsTitle">upcoming shows</h2>

      <div className="event-card mb-3">

        <div>
          <img src={STWpic} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Said The Whale - Dandelion Tour</h3>
            <p>Wed Mar 9</p>
            <p>Club SAW, Ottawa, ON</p>
            <p>8:30PM, Doors 8:00</p>
            <p>$25 (plus fees)</p>
            <p>Ages 19+</p>
            <div className="tik-btn-container">
              <button className="ticket-btn">
                <a 
                  alt="button for purchasing tickets" 
                  className="ticket-link"
                  href="https://www.ticketweb.ca/event/said-the-whale-club-saw-tickets/11209125?pl=spectrasonic"
                  rel="noreferrer"
                  target="_blank"
                  >
                  tickets
                </a>  
                {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
              </button>
            </div>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={STWpic} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Said The Whale - Dandelion Tour</h3>
            <p>Thu Mar 10</p>
            <p>The Mansion, Kingston, ON</p>
            <p>8:30POM, Doors 8:00PM</p>
            <p>$25 (plus fees)</p>
            <p>Ages 19+</p>
            <button className="ticket-btn">
              <a 
              alt="button for purchasing tickets" 
              className="ticket-link" 
              href="https://www.ticketweb.ca/event/said-the-whale-the-mansion-tickets/11209035?pl=spectrasonic"
              rel="noreferrer"
              target="_blank"
              >
                tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={knorth} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Kirstian North</h3>
            <p>Fri Mar 11</p>
            <p>Club SAW, Ottawa, ON</p>
            <p>8:30PM, Doors 8:00pm</p>
            <p>$12 (plus fees)</p>
            <p>Ages 19+</p>
            <button className="ticket-btn">
              <a 
              alt="button for purchasing tickets" 
              className="ticket-link" 
              href="https://www.ticketweb.ca/event/kristian-north-fire-antlers-isbel-club-saw-tickets/11803875?pl=spectrasonic"
              rel="noreferrer"
              target="_blank"
              >
                tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={BDV} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>By Divine Right</h3>
            <p>Fri Mar 11</p>
            <p>Dominion Tavern</p>
            <p>8:30PM, Doors 8:00PM</p>
            <p>$15 (plus fees)</p>
            <p>19+/AA/etc</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketweb.ca/event/by-divine-right-hotkid-teenage-dominion-tavern-tickets/11772605?pl=spectrasonic"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={GRS} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Guest Room Status</h3>
            <p>Sat Mar 12</p>
            <p>Dominion Tavern</p>
            <p>8:30PM, Doors 8:00PM</p>
            <p>$15 (plus fees)</p>
            <p>Ages 19+</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketweb.ca/event/guest-room-status-summer-heights-dominion-tavern-tickets/11782825?pl=spectrasonic"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={mod} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Mod Nite: 1960's rock &...</h3>
            <p>Sat Mar 12</p>
            <p>Club SAW, Ottawa, ON</p>
            <p>10:00 - 1:45AM, Doors 10:00PM</p>
            <p>$5-15 (plus fees)</p>
            <p>Ages 19+</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketweb.ca/event/mod-nite-1960s-rock-club-saw-tickets/11868145?pl=spectrasonic"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={wilcox} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>David Wilcox</h3>
            <p>Thu Mar 17</p>
            <p>Bronson Centre, Ottawa, ON</p>
            <p>Doors 7:00PM</p>
            <p>$39.50 - $50 (plus fees)</p>
            <p>All Ages</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketmaster.ca/david-wilcox-ottawa-ontario-03-17-2022/event/31005855A5684087"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={aucoin} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Rich Aucoin</h3>
            <p>Fri Mar 18</p>
            <p>Club SAW, Ottawa, ON</p>
            <p>8:30PM, Doors 8:00PM</p>
            <p>$17 (plus fees)</p>
            <p>Ages 19+</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketweb.ca/event/rich-aucoin-stoby-bucko-club-saw-tickets/11610115?pl=spectrasonic"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={wonder} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>The Wonder Years: The Upsides ...</h3>
            <p>Sat Mar 19</p>
            <p>Algonquin Commons Theatre, Ottawa, ON</p>
            <p>6:00PM</p>
            <p>$43.50 (plus fees)</p>
            <p>All Ages</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketmaster.ca/the-wonder-years-the-upsides-suburbia-ottawa-ontario-03-19-2022/event/31005B7EE1C14185"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      <div className="event-card mb-3">
        <div>
          <img src={cbats} className="card-img" alt="promo shot of the artist"/>
        </div>
        <div className="card-body">
            <h3>Cancer Bats & Comeback Kid</h3>
            <p>Sat Mar 19</p>
            <p>The Brass Monkey, Ottawa, ON</p>
            <p>7:00PM, Doors 6:30PM</p>
            <p>$30 (plus fees)</p>
            <p>All Ages</p>
            <button className="ticket-btn">
              <a 
                alt="button for purchasing tickets" 
                className="ticket-link" 
                href="https://www.ticketweb.ca/event/cancer-bats-comeback-kid-the-brass-monkey-tickets/11249615?pl=spectrasonic"
                rel="noreferrer"
                target="_blank"
                >
                  tickets
              </a>  
              {/* NEEDS A GENERATED LINK TO TW EVENT PAGE */}
            </button>
        </div>
      </div>

      


    </div>
  );
}


export default eventListings;