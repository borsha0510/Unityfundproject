import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMore from "../../Components/ExploreMore/ExploreMore";
import ItemDisplay from "../../Components/ItemDisplay/ItemDisplay";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMore />
      <ItemDisplay />
    </div>
  );
};

export default Home;
