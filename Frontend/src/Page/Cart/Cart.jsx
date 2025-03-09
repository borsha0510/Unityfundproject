import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const calculateTotal = () => {
    let total = 0;
    for (let itemId in cartItems) {
      const item = food_list.find((food) => food._id === itemId);
      total += item.price * cartItems[itemId];
    }
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-summary">
        <p className="total">Total: Tk {calculateTotal()}</p>
        <button
          className="proceed-btn"
          onClick={() => alert("Proceed to payment")}
        >
          Proceed to Donate
        </button>
      </div>
    </div>
  );
};

export default Cart;
