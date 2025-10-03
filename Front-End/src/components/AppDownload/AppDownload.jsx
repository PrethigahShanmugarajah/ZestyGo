// Front-End / src / components / AppDownload / AppDownload.jsx
import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Get ZestyGo on your phone today! <br />
        Enjoy fresh meals delivered fast, track your orders, and never miss a
        tasty deal.
      </p>

      <div className="app-download-platforms">
        <i className="bi bi-google-play"></i>
        <i className="bi bi-apple"></i>
      </div>
    </div>
  );
};

export default AppDownload;
