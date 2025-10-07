// Admin / src / components / Sidebar / Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <i className="bi bi-plus-circle"></i>
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/list" className="sidebar-option">
          <i className="bi bi-card-list"></i>
          <p>List Items</p>
        </NavLink>

        <NavLink to="orders" className="sidebar-option">
          <i className="bi bi-bag-check"></i>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
