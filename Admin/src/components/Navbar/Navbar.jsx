// Admin / src / components / Navbar / Navbar.jsx
import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.Logo_Admin} alt="Logo" />
      <img className="profile" src={assets.Profile_Image} alt="profile_image" />
    </div>
  );
};

export default Navbar;
