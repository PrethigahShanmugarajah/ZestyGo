import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <i
            className="bi bi-plus-circle-fill add"
            onClick={() => addToCart(id)}
          ></i>
        ) : (
          <div className="food-item-counter">
            <i
              className="bi bi-dash-circle-fill"
              onClick={() => removeFromCart(id)}
            ></i>

            <p>{cartItems[id]}</p>
            <i
              className="bi bi-plus-circle-fill add"
              onClick={() => addToCart(id)}
            ></i>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt="" /> */}
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star"></i>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          {currency} {price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
