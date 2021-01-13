import React from "react";
import "../css/BlogsCardSmall.css";
function BlogsCardSmall({ topic, ImageUrl, author, des, AuthorImageUrl }) {
  return (
    <div className="blogscardsmall">
      <div className="blog_image">
        <img src={ImageUrl}></img>
      </div>
      <div className="blog_info">
        <div>
          <h1>{topic}</h1>
          <h3>Lets Play Sports</h3>
          <p>{des}</p>
        </div>
        <div className="author_small_card">
          <div className="author_img_smallcard">
            <img src={AuthorImageUrl}></img>
          </div>
          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
}

export default BlogsCardSmall;
