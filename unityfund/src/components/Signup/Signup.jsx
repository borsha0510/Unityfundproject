import React, { useState } from "react";
import "./Signup.css";
import Login from "../Login/Login";

const Signup = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="container">
      <div className="left-side">
        <div className="overlay"></div>
      </div>
      <div className="right-side">
        <div className="form-container">
          <h2 className="title">Sign Up</h2>
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Name..." />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email address..." />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Username..." />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input type="password" placeholder="********" />
            </div>
            <div className="checkbox-container">
              <input type="checkbox" />
              <p>
                I agree to the <a href="#">Terms of User</a>
              </p>
            </div>
            <button className="signup-button">Sign Up</button>
          </form>
          <p className="signin-text">
            Already have an account?{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="toggle-button"
            >
              Sign in →
            </button>
          </p>
        </div>
      </div>
      {showLogin && <Login />}
    </div>
  );
};

export default Signup;
