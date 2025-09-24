import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Craving? ZestyGo’s Got You!</h2>
        <p>
          Delicious meals delivered hot & fresh, straight to your door in
          minutes.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
