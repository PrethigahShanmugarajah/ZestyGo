// Front-End / src / pages / PlaceOrder / PlaceOrder.jsx
import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const {
    food_list,
    cartItems,
    getTotalCartAmount,
    url,
    token,
    getDeliveryFee,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    district: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    // console.log(orderItems);

    let OrderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + getDeliveryFee(),
    };

    let response = await axios.post(url + "/api/order/place", OrderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url, order } = response.data;
      toast.success(
        `${order.firstName}, your order of ${order.items.length} item(s) totaling ${currency} ${order.amount} has been placed! Redirecting to payment...`,
        { autoClose: 5000 }
      );
      window.location.replace(session_url);
    } else {
      toast.error("Failed to place order. Please try again.");
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>

        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />

        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />

        <div className="multi-field">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>

        <div className="multi-field">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="district"
            onChange={onChangeHandler}
            value={data.district}
            type="text"
            placeholder="Your District"
          />
        </div>

        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="tel"
          placeholder="Phone"
        />
      </div>

      <div className="place-order-right">
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
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
