import React from "react";
import "../css/EventsCard.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function EventsCard({
  description,
  date,
  topic,
  conductedBy,
  imageLink1,
  imageLink2,
  imageLink3,
}) {
  return (
    <div className="Events_main">
      <div className="Events_left">
        <Carousel>
          <Carousel.Item>
            <div style={{ width: "40vw", height: "50vh" }}>
              <img
                className="d-block w-100 carousel-img"
                src={imageLink1}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ width: "40vw", height: "50vh" }}>
              <img
                className="d-block w-100"
                src={imageLink2}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ width: "40vw", height: "50vh" }}>
              <img
                className="d-block w-100"
                src={imageLink3}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Events_right">
        <div className="Events_right_main">
          <div className="Events_title">
            <h3>
              {date}
            </h3>
          </div>
          <div className="Events_topic">
            <h1>{topic}</h1>
          </div>

          <div className="Events_des">
            <p>{description}</p>
          </div>
        </div>
        <div className="author">
          <div className="author_img"></div>
          <h3>{conductedBy}</h3>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
