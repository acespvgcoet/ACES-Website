import React from "react";
import { NavLink } from "react-router-dom";

import "../css/globalStyles.css";
import "../css/Footer.css";

import Instagram from "../assets/icons/instagramcolor.svg";
import Facebook from "../assets/icons/facebookcolor.svg";
import LinkedIn from "../assets/icons/linkedincolor.svg";
import ACES from "../assets/images/aces.png";
import YouTube from "../assets/icons/youtubecolor.svg";

function Footer() {

  return (
    <div className="footer">
      <div className="footer-main">
        {/* <div className="site-links">
          <h3 style={{ fontSize: "24px" }}>More from ACES</h3>
          <ul>
            <li>
              <NavLink to={{ pathname: "/", hash: "#about-us" }}>
                About Us
              </NavLink>
            </li>
            <li>
              <a href="">Submit Idea</a>
            </li>
            <li>
              <NavLink to="/teams">Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div> */}
        <div className="social-media-container">
          <h3 style={{ fontSize: "24px" }}>Get Connected</h3>
          <div className="social-media-links">
            <ul style={{ marginRight: "10px" }}>
              <li>
                <a
                  href="https://www.instagram.com/acespvg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="social-media-icon"
                    src={Instagram}
                    alt="instagram-icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/acespvgcoet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="social-media-icon"
                    src={Facebook}
                    alt="facebook-icon"
                 
             
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCCJMlulQSD1k8DO1gIVyKhw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="social-media-icon"
                    src={YouTube}
                    alt="youtube-icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/school/acespvg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="social-media-icon"
                    src={LinkedIn}
                    alt="linkedin-icon"
                  />
                </a>
              </li>
            </ul>
            <ul>
              <li style={{ paddingTop: "5px" }}>Follow Us</li>
              <li style={{ paddingTop: "25px" }}>Like Us</li>
              <li style={{ paddingTop: "25px" }}>Subscribe Us</li>
              <li style={{ paddingTop: "25px" }}>Follow Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-brand">
          <img src={ACES} alt="ACES-logo" />
          <p>
            &copy; {new Date().getFullYear()}
            <br />
            <strong>Association of Computer Engineering Students</strong>
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
