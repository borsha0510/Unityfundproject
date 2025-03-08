import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import PlaceDonation from "./Page/PlaceDonation/PlaceDonation";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false);
  return (
    <>
      {ShowLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-donation" element={<PlaceDonation />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
