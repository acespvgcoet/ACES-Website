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
    <div className="home">
      <section className="home-main">
        <Header />
        <div className="top-container">
          <div className="home-main-content">
            <h1>Welcome to ACES</h1>
            <p>
              Our mission is to work with passion towards the intellectual and
              cognitive growth of students, inculcating an environment of
              innovation, creativity, instilling the values of sharing, hard
              work, loyalty and respect towards knowledge and the society and
              evolve to be engaged community leaders.
            </p>
          </div>
          <div className="ACES-logo">
            <img src={ACES} alt="ACES-logo" />
            <p>
              <strong>A</strong>ssociation of <strong>C</strong>omputer
              <br />
              <strong>E</strong>ngineering <strong>S</strong>tudents
            </p>
          </div>
        </div>
      </section>
      <section className="about-us-container">
        <div className="about-us-main">
          <h1>About Us</h1>
          <p>
            ACES focuses on leveling up the competency levels for their
            undergraduates by providing them a platform to recognize their skill
            set deep insights about computational systems and related
            disciplines so that they can build their brand in the highly
            competitive field of Computer Engineering.
          </p>
        </div>
        <div className="features">
          <div className="features-row">
            <div className="feature-card">
              <img src={Shuttle} alt="shuttle-icon" />
              <h3>Invest</h3>
              <p>
                We provide technical as well as non technical support to the
                students by organising different workshops, events & Hackathons
              </p>
            </div>
            <div className="feature-card">
              <img src={Lightbulb} alt="lightbulb-icon" />
              <h3>Initiate</h3>
              <p>
                We hone the talents at the right time and help them grow by
                providing them a platform to showcase their skills in different
                domains
              </p>
            </div>
            <div className="feature-card">
              <img src={Group} alt="group-icon" />
              <h3>Influence</h3>
              <p>
                We encourage students to learn, share and inculcate the values
                of team work, leadership qualities, management and soft skills
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
                ACES looks forward to the welfare of its students by conducting
                ambitious conferences and workshops. Events are held to broaden
                the skill set of our students and assist them in their domain.
                At ACES, we encourage participation in academics as well as
                extra-curricular activities.
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
                ACES promotes participation and exploration of self-interests.
                Each event aims at the expansion of the skill sets of the
                students. We provide them with a platform to showcase their
                talent. With our faculty and committee, we strive to provide an
                ocean of opportunities for them to dive in.
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
