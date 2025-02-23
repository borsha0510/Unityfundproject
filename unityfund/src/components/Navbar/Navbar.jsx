import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="/">
            <button className="btn"> Home </button>
          </Link>
        </li>
        <li>
          <Link to="/donate">
            <button className="btn"> Donate </button>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button className="btn"> Register </button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
