import React from "react";
import "../css/Blogs.css";
import BlogsCardLarge from "./BlogsCardLarge";
import BlogsCardSmall from "./BlogsCardSmall";
import BlogIllustration from "../assets/images/blog-illustration.png";

function Blogs() {
  return (
    <div className="blogs">
      <section className="blogs-header">
        <div>
          <h1>Blogs</h1>
          <p>Read. Learn. Grow.</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "80%" }}
            src={BlogIllustration}
            alt="blog-illustration"
          />
        </div>
      </section>
      <section style={{ backgroundColor: "#e9edf0" }}>
        {/* <div className="blogs_up">
          <div className="blogcardlarge">
            <BlogsCardLarge
              description='The use of the term "technology" has changed significantly over
          the last 200 years. The use of the term "technology" has changed
          significantly over The use of the term "technology" has changed
          significantly over Before the 20th century, the term was The use'
              title="How Technology is Growing"
              topic="Technology"
            ></BlogsCardLarge>
          </div>
        </div> */}
        <div className="blogs_down">
          <div className="blogcardsmall">
            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Sports"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsw3BO67SfolXpA5NBL8B6iUsaKTpT8JuEUQ&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>
            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Web"
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_77Q9--9lc-p54oWmdHl2q6W5sSSwa82KA&usqp=CAU"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>

            <div className="blog_cards">
              <BlogsCardSmall
                topic="Speech"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                author="Arya Kulkarni"
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOHI6nFgXMndkpEVGW_6imj060603waHbwQ&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>

            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                topic="Analogy"
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9bQUGJJvVIiybIl90Ed-_qqwYxYlzqAPLA&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>
            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="History"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyTNl0d90hz-R9Vdj4B7xqKw5b06YsLq3pQ&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>

            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Poetry"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfnBTsKHT9Ld0OJlSd6EVjjX6M939fsI1sA&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>

            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Narrative"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdrG_lnNj9LfqtqGGpgFa0Lc8urM8n8IZdQ&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>

            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Pun"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYUahu4p0hd4DvjdS_ita4mCkR-zYcaa_zw&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>
            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Blo0k"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKimrjFWdSL-1d7EGY0excHnxtFU0AN29WNw&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>
            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Historical Fiction"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BRtWKdTJobzBKvB6N0t_P26MBd642ORUyA&usqp=CAU"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>
            <div className="blog_cards">
              <BlogsCardSmall
                author="Arya Kulkarni"
                topic="Magical"
                des='The use of the term "technology" has changed significantly over the
              last 200 years. Before the 20th century, the term was uncommon in
              English, and it was used either to refer to the description or study
              of the useful arts'
                ImageUrl="https://i.gadgets360cdn.com/large/realme_v15_5g_image_small_1_1610106067464.jpg"
                AuthorImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjXeHpaZHyFx2UDnOOxyk8mSMadIa1owVsg&usqp=CAU"
              ></BlogsCardSmall>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
