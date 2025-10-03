// Front-End / src / components / Footer / Footer.jsx
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.Logo} alt="ZestyGo Logo" className="footer-logo" />
          <p>
            ZestyGo brings your favorite meals straight to your doorstep. We
            partner with the best restaurants to deliver fresh, delicious, and
            affordable food — anytime, anywhere. Taste convenience, taste
            happiness!
          </p>

          <div className="footer-social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 000-000-0000</li>
            <li>zestygo@zestygo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      {/* <p className="footer-copyright">
        © {new Date().getFullYear()} ZestyGo.com - All Rights Reserved
      </p> */}

      <p className="footer-copyright">
        © {new Date().getDate().toString().padStart(2, "0")}/
        {(new Date().getMonth() + 1).toString().padStart(2, "0")}/
        {new Date().getFullYear()} ZestyGo.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
