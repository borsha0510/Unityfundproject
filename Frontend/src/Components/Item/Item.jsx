import React from "react";
import "./Item.css";

const Item = ({ id, name, price, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{name}</p> {}
        <p className="food-item-price">৳{price}</p>
      </div>
    </div>
  );
};

export default Item;
