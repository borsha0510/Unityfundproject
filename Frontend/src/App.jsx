import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Do not import BrowserRouter here
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import PlaceDonation from "./Page/PlaceDonation/PlaceDonation";

const App = () => {
  //const [ShowLogin, setShowLogin] = useState;
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-donation" element={<PlaceDonation />} />
      </Routes>
    </div>
  );
};

export default App;
