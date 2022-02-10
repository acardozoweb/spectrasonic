import React from "react";
// import Signup from "../components/Signup"

const Contact = () => {
  return (
    <div className="contactPage">



      <div className="about">
        <h2 className="pageTitle">about us</h2>

        <p className="about-text">
          spectrasonic brings a wide range of acts to Ottawa and beyond, ranging
          from punk to folk to metal to comedy.
        </p>
        <p>
          our first show was with Fugazi in a community centre basement in 1989
          and we haven't looked back. booking national and international touring
          acts in bars, concert halls, theatres and arenas while continuing to
          develop new bands in intimate venues.
        </p>
      </div>

      <br></br>

      <div className="contact-details">
        <h2 className="pageTitle">contact</h2>

        <p className="contact-text">
          PO Box 57043, RPO Gladstone, Ottawa, ON, K1R1A1
        </p>
        <p className="contact-text">
          general info:{" "}
          <a href="mailto:info@spectrasonic.com">
            send an email to info AT spectrasonic DOT com
          </a>
        </p>
        <p className="contact-text">
          ticket counts:{" "}
          <a href="mailto:counts@spectrasonic.com">
            send an email to counts AT spectrasonic DOT com
          </a>
        </p>
        <p className="contact-text">
          artist submissions:{" "}
          <a href="mailto:opener@spectrasonic.com">
            send an email to opener AT spectrasonic DOT com
          </a>
        </p>
      </div>


    </div>
  );
};

export default Contact;
