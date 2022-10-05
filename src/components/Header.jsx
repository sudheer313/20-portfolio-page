import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  const [navState, setNavState] = useState(false);
  return (
    <div>
      <nav>
        <div className="brand-container">
          <div className="brand">
            <Link to="/" className="logo">
              Sudheer Kandula
            </Link>
          </div>
          <div className="toggle-container">
            <div className="toggle"></div>
          </div>
        </div>
        <Navigation navState={navState} setNavState={setNavState} />
      </nav>
    </div>
  );
};

export default Header;
