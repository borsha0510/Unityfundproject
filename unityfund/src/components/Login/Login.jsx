import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import home from "../../assets/home.png";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import Signup from "../Signup/Signup";

const Login = ({ onSignupClick }) => {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="login-box">
        <h2> Sign In </h2>
        <form>
          <div className="form-group">
            <label> </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label> </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-check d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="#" className="forgot-password ml-auto">
              {" "}
              Forgot Password?{" "}
            </a>
          </div>
          <button type="submit" className="btn btn-success w-100">
            {" "}
            Log In{" "}
          </button>
        </form>
        <p className="text-center mt-3">Don't have an account?</p>
        <button onClick={onSignupClick} className="btn btn-primary w-100">
          Sign Up
        </button>
        <div className="social-icons d-flex justify-content-center mt-3">
          <FaFacebook className="social-icon fb" />
          <FaTwitter className="social-icon twitter" />
          <FaGoogle className="social-icon google" />
        </div>
      </div>
    </div>
  );
};

export default Login;
