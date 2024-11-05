import React from 'react'
import avatar from "../assets/images/pic1.jpg";
const AboutBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-name">
          About store<span className="typedText"></span>
        </div>

        <p>
          The store was built when 1990 By satayu sawangphongpheaw To
          distribute quality products at cheap prices
        </p>

        <div className="social_icons">
          <div className="">
            <a href="">
              <i className=""></i>
            </a>
          </div>
          <div className="">
            <a href="">
              <i className=""></i>
            </a>
          </div>
          <div className="">
            <a href="">
              <i className=""></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box"></div>
    </section>
  );
};
  
  


export default AboutBox