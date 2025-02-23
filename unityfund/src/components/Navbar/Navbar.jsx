import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = ({ setShowLogin }) => {
  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        {/*<li>Program</li>*/}
        <li>Donate</li>
        <li>About us</li>
        <li>
          <button className="btn" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </li>
        {/*<li>Reviews</li>*/}
        <li>
          {/*<button className="btn" onClick={() => setShowLogin(true)}>
            Contact us
          </button>*/}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
