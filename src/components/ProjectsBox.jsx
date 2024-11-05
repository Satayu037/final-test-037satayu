import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="Projects">
      <div className="top-header">
        <h1>Shop</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-broom-alt"></i>
          <h3>broom</h3>
          <label>25 us$ </label>
        </div>
        <div className="project-box">
          <i className="uil uil-pot"></i>
          <h3>Hot pot</h3>
          <label>25 us$</label>
        </div>
        <div className="project-box">
          <i className="uil uil-crockery"></i>
          <h3>spoon pack</h3>
          <label>30 us$</label>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
