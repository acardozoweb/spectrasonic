////////////////////////////
////// SIGNUP INDEX ////////
////////////////////////////

import React from "react";

import fbLogo from "../../assets/logos/fb_logo.png";
import twitLogo from "../../assets/logos/twit_logo.png";
import instaLogo from "../../assets/logos/ig_logo.jpg";

function signup() {
  return (
    <main className="flex-row justify-right mb-4">
      <div>
        <div className="card">
          <h4 className="card-header">Join our mailing list!</h4>
          <div className="card-body">
            <form>
              <input
                className="form-input"
                placeholder="Name"
                name="username"
                type="username"
                id="username"
              />
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                id="email"
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>

              <div className="socials">
                <h4 className="card-header">Stay in the loop!</h4>
                <a href="https://www.facebook.com/spectrasonic/" rel="noreferrer" target="_blank">
                  <img src={fbLogo} alt="link to spectrasonic facebook page" />
                </a>
                <a href="https://twitter.com/spectrasonic" rel="noreferrer" target="_blank">
                  <img src={twitLogo} alt="link to spectrasonic twitter page" />
                </a>
                <a href="https://instagram.com/spectrasonic" rel="noreferrer" target="_blank">
                  <img src={instaLogo} alt="link to spectrasonic instagram page" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default signup;
