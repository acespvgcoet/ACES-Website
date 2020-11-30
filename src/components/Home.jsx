import React from "react";
import "../css/globalStyles.css";
import "../css/Home.css";

import Header from "./Header";

import ACES from "../assets/images/aces.png";
import Shuttle from "../assets/icons/shuttle.png";
import Lightbulb from "../assets/icons/lightbulb.png";
import Group from "../assets/icons/group.png";
import Blocks from "../assets/images/blocks.png";
import Globe from "../assets/images/globe.svg";

function Home() {
  return (
    <div>
      <section className="home-main">
        <Header />
        <div className="home-main-content">
          <h1>Welcome to ACES</h1>
          <p>
            Our mission is to work with passion towards the intellectual and
            cognitive growth of students, inculcating an environment of
            innovation, creativity, instilling the values of sharing, hard work,
            loyalty and respect towards knowledge and the society and evolve to
            be engaged community leaders.
          </p>
        </div>
        <div className="ACES-logo">
          <img src={ACES} alt="ACES-logo" />
        </div>
      </section>
      <section className="about-us-container">
        <div className="about-us-main">
          <h1>About Us</h1>
          <p>We are group of Computer Engineering students from PVGCOET.</p>
        </div>
        <div className="features">
          <div className="features-row">
            <div className="feature-card">
              <img src={Shuttle} alt="shuttle-icon" />
              <h3>Smol headline</h3>
              <p>
                We provide technical as well as non – technical grooming to the
                students by organizing various workshops and activities,
                catalyzing growth.
              </p>
            </div>
            <div className="feature-card">
              <img src={Lightbulb} alt="lightbulb-icon" />
              <h3>Smol headline</h3>
              <p>
                We provide a platform for students to showcase their talents and
                skills in various domains and all perceivable fields.
              </p>
            </div>
            <div className="feature-card">
              <img src={Group} alt="group-icon" />
              <h3>Smol headline</h3>
              <p>
                We encourage students to learn, share and inculcate the values
                of team work, leadership, management and soft skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-container">
        <div className="description">
          <div className="description-1">
            <div className="description-1-content">
              <h2>What do we do?</h2>
              <p>
                We at ACES look forward to the welfare of our students by
                conducting ambitious events and workshops. We take good care of
                their needs and supply them with the right knowledge at the
                right time. Our committee aims at making each event exciting and
                encourage the concept of 'fun and learn'.
              </p>
              <button>Learn More</button>
            </div>
            <div className="blocks-img">
              <img src={Blocks} alt="blocks-img" />
            </div>
          </div>
          <div className="description-2">
            <div className="description-2-content">
              <h2>Opportunities we provide</h2>
              <p>
                At ACES we promote participation and exploration of
                self-interests. Each event aims at the expansion of the skill
                sets of the participants. We provide the platform to showcase
                your talent. With our faculty and committee, we strive to
                provide an ocean of opportunities for you to dive in.
              </p>
              <button>Submit Idea</button>
            </div>
            <div className="globe-img">
              <img src={Globe} alt="globe-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="vision-container">
        <div className="vision-content">
          <h2 className="custom-underline">&nbsp;Our Vision</h2>
          
          <p>
            “To work with passion towards the intellectual and cognitive growth
            of students, inculcating an environment of innovation, creativity,
            instilling the values of sharing, hard work, loyalty and respect
            towards knowledge and the society and evolve to be engaged community
            leaders.”
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
