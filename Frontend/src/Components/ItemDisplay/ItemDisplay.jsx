import React, { useContext } from "react";
import "./ItemDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Item from "../Item/Item";

const ItemDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="item-display" id="item-display">
      <h2>Items to Donate</h2>
      <div className="item-display-list">
        {food_list.map((item, index) => {
          return (
            <Item
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemDisplay;
