// Front-End / src / pages / Cart / Cart.jsx
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const {
    food_list,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    getDeliveryFee,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>
                    {currency} {item.price}
                  </p>
                  <p>{cartItems[item._id]}</p>
                  <p>
                    {currency} {item.price * cartItems[item._id]}
                  </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>
                  {currency} {getTotalCartAmount()}
                </p>
              </div>

              <hr />

              <div className="cart-total-details">
                <p>Delivery Fee (5%)</p>
                <p>
                  {currency} {getDeliveryFee()}
                </p>
              </div>

              <hr />

              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  {currency} {getTotalCartAmount() + getDeliveryFee()}
                </b>
              </div>
            </div>

            <button onClick={() => navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
