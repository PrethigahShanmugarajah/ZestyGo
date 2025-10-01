import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          {/* <img src={assets.add_icon} alt="Add Icon" /> */}
          <i className="bi bi-plus-circle"></i>
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          {/* <img src={assets.order_icon} alt="List Icon" /> */}
          <i className="bi bi-card-list"></i>
          <p>List Items</p>
        </NavLink>

        <NavLink to="orders" className="sidebar-option">
          {/* <img src={assets.order_icon} alt="Order Icon" /> */}
          <i className="bi bi-bag-check"></i>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
