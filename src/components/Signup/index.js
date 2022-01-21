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
          <h3 className="card-header">Join our mailing list!</h3>
          <div className="card-body">
            {/* MAILCHIMP FORM ACTION */}
            <form
              action="https://xom.us4.list-manage.com/subscribe/post"
              method="POST"
            >
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

              <button className="signup-btn" type="submit">
                submit
              </button>
            </form>

            <div>
              <h3 className="card-header">Follow us for updates!</h3>

              <div className="sm-icons">
                <a
                  href="https://www.facebook.com/spectrasonic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="fbLogo"
                    src={fbLogo}
                    alt="link to spectrasonic facebook page"
                  />
                </a>

                <a
                  href="https://twitter.com/spectrasonic"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="twLogo"
                    src={twitLogo}
                    alt="link to spectrasonic twitter page"
                  />
                </a>

                <a
                  href="https://instagram.com/spectrasonic"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="igLogo"
                    src={instaLogo}
                    alt="link to spectrasonic instagram page"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default signup;
