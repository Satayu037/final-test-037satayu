import React from "react";

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += "responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Home supply store</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list"></ul>
        <li className="nav_list">
          <a href="#home" className="nav-link active-link">
            Home
          </a>
        </li>
        <li className="nav_list">
          <a href="#About" className="nav-link ">
            About
          </a>
        </li>
        <li className="nav_list">
          <a href="#Shop" className="nav-link ">
            Shop
          </a>
        </li>
        <li className="nav_list">
          <a href="#Contact" className="nav-link ">
            Contact
          </a>
        </li>
      </div>

      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
