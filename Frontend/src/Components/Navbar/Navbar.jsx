import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu(" Donate")}
          className={menu === "Donate" ? "active" : ""}
        >
          Donate
        </li>
        <li
          onClick={() => setMenu(" Review")}
          className={menu === "Review" ? "active" : ""}
        >
          Review
        </li>
        <li
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="sign-in-button">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
