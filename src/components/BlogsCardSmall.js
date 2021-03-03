import React from "react";
import "../css/BlogsCardSmall.css";
import { Avatar } from '@material-ui/core';
function BlogsCardSmall({title, topic, ImageUrl, author, des, AuthorImageUrl,link }) {
  return (
    <a href = {link} target = "_blank" className = "blogLink">
      <div className="blogscardsmall" >
      <div className="blog_image">
        <img src={ImageUrl}/>
      </div>
      <div className="blog_info">
        <div>
          <h1>{topic}</h1>
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
        <div className="author_small_card">
          {/* <div className="author_img_smallcard">
            <Avatar src={AuthorImageUrl} className="avImg"/>
          </div> */}
          <h5>By :- {author}</h5>
        </div>
      </div>
    </div>
    </a>
    
  );
}

export default BlogsCardSmall;
