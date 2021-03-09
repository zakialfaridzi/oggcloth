import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import Buttons from "../Buttons/Buttons";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Buttons inverted onClick={() => addItem(item)}>
        Add To Cart
      </Buttons>
    </div>
  );
};

const mapToDispatchProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapToDispatchProps)(CollectionItem);
