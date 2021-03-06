import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
import StripeButton from "../../components/StripeButton/StripeButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./CheckOut.scss";

const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>TOTAL: Rp {total * 1000}</span>
    </div>
    <div className="test-warning">
      *Please use this test credit card for payments with Stripe*
      <br />
      4242 4242 4242 4242 - Exp: 05/21 - CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
