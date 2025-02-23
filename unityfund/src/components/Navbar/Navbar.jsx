import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className='container'>
        <img src={logo} alt=""className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Login</li>
            <li>Registration</li>
            <li>Donation</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
=======
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
>>>>>>> bd2805a3b1916f08484373971242d8cbb74b1f3b
    </nav>
  );
};

export default Navbar;
