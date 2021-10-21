import React from "react";
import "../css/BlogsCardLarge.css";
function BlogsCardLarge({ description, title, topic }) {
  return (
    <div className="card_main">
      <div className="card_left">
        <img src="https://images.wallpaperscraft.com/image/laptop_keyboard_glow_170138_300x168.jpg"></img>
      </div>
      <div className="card_right">
        <div className="card_right_main">
          <div className="card1_topic">
            <h1>{topic}</h1>
          </div>
          <div className="card1_title">
            <h3>{title}</h3>
          </div>
          <div className="card1_des">
            <p>{description}</p>
          </div>
        </div>
        <div className="author">
          <div className="author_img"></div>
          <h3>Vinod Kamat</h3>
        </div>
      </div>
    </div>
  );
}

export default BlogsCardLarge;
