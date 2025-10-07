// Front-End / src / pages / MyOrders / MyOrders.jsx
import React from "react";
import "./MyOrders.css";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      console.log("API Response:", response.data);

      if (response.data.success && response.data.data) {
        setData(Array.isArray(response.data.data) ? response.data.data : []);
      } else if (response.data.orders) {
        setData(
          Array.isArray(response.data.orders) ? response.data.orders : []
        );
      } else {
        console.warn("No orders found in response");
        setData([]);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to fetch orders");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              {/* <img src={assets.parcel_icon} alt="" /> */}
              <i className="bi bi-box"></i>
              <p>
                {order.items.map((item, index) => {
                  const quantity = item.quantity || item.quanity || 1;
                  if (index === order.items.length - 1) {
                    return item.name + "X" + quantity;
                  } else {
                    return item.name + "X" + quantity + ",";
                  }
                })}
              </p>
              <p>${order.amount}</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>TRACK ORDER</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
