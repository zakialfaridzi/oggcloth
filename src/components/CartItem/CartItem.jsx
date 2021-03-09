import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x Rp {price * 1000}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
