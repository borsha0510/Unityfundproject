import React from "react";
import "./Header.css";

//import donate from "../../Assets/donate.png";

const Header = () => {
  return (
    <div className="header ">
      <div className=" header-contents">
        <h2>Be The Reason Someone Smiles Today</h2>
        <p>
          We work to connect individuals or organizations seeking financial
          support with potential donors allowing them to overcome their poverty
          and deal with sudden accidents.
        </p>
        <button>Explore more {/*<img src={donate} alt="" />*/}</button>
      </div>
    </div>
  );
};

export default Header;
