<<<<<<< HEAD

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import DonationForm from "./components/Donate/DonationForm";
import Login from "./components/Login/Login";
>>>>>>> bd2805a3b1916f08484373971242d8cbb74b1f3b

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/login" element={<Login />} /> {/* Add Login Route */}
      </Routes>
    </Router>
  );
};

export default App;
