import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAMS" title="Choose sector to donate" />
        <Programs />
        <About />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>

      {showLogin && (
        <div className="modal">
          <Login setShowLogin={setShowLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
