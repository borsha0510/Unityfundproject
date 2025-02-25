import React from "react";
import { Routes, Route } from "react-router-dom"; // Do not import BrowserRouter here
import Navbar from "./Components/Navbar";
import Home from "./Page/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
