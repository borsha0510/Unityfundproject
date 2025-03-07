import React from "react";
import "./ExploreMore.css";
import { menu_list } from "../../assets/assets";

const ExploreMore = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>ExploreMore</h1>
      <p className="explore-menu-text"> Helping Hands, Changing Lives</p>
      <div className="explore-menu-list">
        {menu_list.map((menu, index) => {
          return (
            <div key={index} className="explore-menu-item">
              <img src={menu.menu_image} alt="" />
              <p>{menu.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
