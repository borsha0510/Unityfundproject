import React from "react";
import Hero from "../Hero/Hero";
import Programs from "../Programs/Programs";
import Title from "../Title/Title";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAMS" title="Choose sector to donate" />
        <Programs />
        <About />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
};

export default Home;
