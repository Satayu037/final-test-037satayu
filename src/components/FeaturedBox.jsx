import React from "react";
import avatar from "../assets/images/product1.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-name">
          Buy quickly,limited quantity<span className="typedText"></span>
        </div>
        
          <p>
            A store that sells cheap and good quality home products that are
            trusted by people who don't know.
          </p>
    
        
        <div className="button">
          <div className="button">
            <a href="">
              <i className="button"></i>
            </a>
          </div>
          <div className="icon">
            <a href="">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
