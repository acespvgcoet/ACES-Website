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
  link
}) {
 
  return (
    // <a href = {link} target = "_blank">
       <a href = {link} target = "_blank"className="Events_main">
      <div className="Events_left">
        <Carousel>
          <Carousel.Item>
            <div style={{ width: "380px", height: "300px" }}>
              <img
                className=" carousel-img"
                src={imageLink1}
                alt=""
              />
            </div>
            <Carousel.Caption>
              <h3 className="Caro-Cap">First slide label</h3>
              <p  className="Caro-Cap">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ width: "380px", height: "300px" }}>
              <img
               className=" carousel-img"
                src={imageLink2}
                alt=""
              />
            </div>
            <Carousel.Caption>
              <h3 className="Caro-Cap">Second slide label</h3>
              <p className="Caro-Cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ width: "380px", height: "300px" }}>
              <img
                className=" carousel-img"
                src={imageLink3}
                alt=""
              />
            </div>
            <Carousel.Caption>
              <h3 className="Caro-Cap">Third slide label</h3>
              <p className="Caro-Cap">
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
    {/* </div> */}
    </a>
   
  
  );
}

export default EventsCard;
