////////////////////////////
////// SIGNUP INDEX ////////
////////////////////////////

import React from "react";

import fbLogo from "../../assets/logos/fb_logo.png";
import twitLogo from "../../assets/logos/twit_logo.png";
import instaLogo from "../../assets/logos/ig_logo.png";

function signup() {
  return (
    <main className="flex-row justify-right mb-4">
      <div>
        <div className="card">
          <h4 className="card-header">Join our mailing list!</h4>
          <div className="card-body">

            {/* MAILCHIMP FORM ACTION */}
            <form action="https://xom.us4.list-manage.com/subscribe/post" method="POST">
                <input type="hidden" name="u" value="4f93ba4dded6177a1e663084f" />
                <input type="hidden" name="id" value="ad01b68579" />

              <input
                className="form-input"
                placeholder="Email"
                type="email"
                name="MERGE0"
                id="MERGE0"
              />

              <input
                className="form-input"
                placeholder="First Name"
                type="text"
                name="MERGE1"
                id="MERGE1"
              />

              <input
                className="form-input"
                placeholder="Last Name"
                type="text"
                name="MERGE2"
                id="MERGE2"
              />

              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>



            <div className="socials">
              <h4 className="card-header">Follow us for updates!</h4>

              <a
                href="https://www.facebook.com/spectrasonic/"
                className="fbLogo"
                rel="noreferrer"
                target="_blank"
              >
                <img src={fbLogo} alt="link to spectrasonic facebook page" />
              </a>

              <a
                href="https://twitter.com/spectrasonic"
                className="twLogo"
                rel="noreferrer"
                target="_blank"
              >
                <img src={twitLogo} alt="link to spectrasonic twitter page" />
              </a>

              <a
                href="https://instagram.com/spectrasonic"
                className="igLogo"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={instaLogo}
                  alt="link to spectrasonic instagram page"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default signup;
