import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const MovePage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <Login onSignupClick={() => setShowLogin(false)} />
      ) : (
        <Signup onLoginClick={() => setShowLogin(true)} />
      )}
    </div>
  );
};

export default MovePage;
