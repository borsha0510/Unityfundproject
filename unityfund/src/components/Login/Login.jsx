import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  return (
    <div className="login-container">
      <div className="card">
        <button className="btn-close" onClick={() => setShowLogin(false)}>
          ✖
        </button>
        <h2>Sign In</h2>

        <form>
          <input type="text" placeholder="Username" className="form-control" />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn-primary">
            Log In
          </button>
        </form>
        <p>or sign in with</p>
        <div className="social-login">
          <button>
            <i className="fab fa-facebook"></i>
          </button>
          <button>
            <i className="fab fa-twitter"></i>
          </button>
          <button>
            <i className="fab fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
