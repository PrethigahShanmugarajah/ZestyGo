// Front-End / src / components / Header / Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Delicious Meals, Delivered to You</h2>
        <p>
          Explore a wide variety of freshly prepared dishes made with care and
          quality ingredients. At ZestyGo, we bring flavor, convenience, and joy
          straight to your table.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
