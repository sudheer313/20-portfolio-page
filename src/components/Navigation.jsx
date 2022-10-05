import React from "react";
import {Link} from "react-router-dom";



const Navigation = () => {
  const navigationTitles = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <div className={`links-container`} >
      <ul className="links">
        {
          navigationTitles.map((navTitle)=>(
            <li key={navTitle}>
              <Link to= {`${navTitle}`} className="link"></Link>
              {navTitle}
            </li>
          ))
        }
      </ul>
      
    </div>
  );
};

export default Navigation;
