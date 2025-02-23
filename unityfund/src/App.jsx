import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import DonationForm from "./components/Donate/DonationForm";
import Login from "./components/Login/Login";

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
