import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
const Login = ({ setShowLogin }) => {
  const [currState, setcurrState] = useState("Sign Up");
  return (
    <div className="login">
      <from className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs"></div>
        {currState === "Login" ? (
          <> </>
        ) : (
          <input type="text" placeholder="Your name" required />
        )}
        <input type="email" placeholder="Your email" required />
        <input type="password" placeholder="Your password" required />

        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            {" "}
            Create a new account?
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            {" "}
            Already have an account?
            <span onClick={() => setcurrState("Login")}>Click here</span>
          </p>
        )}
      </from>
    </div>
  );
};

export default Login;
