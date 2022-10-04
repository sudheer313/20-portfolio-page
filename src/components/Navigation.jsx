import React, { useState } from "react";

const Navigation = () => {
  const [tabs, setTabs] = useState(["About", "Portfolio", "Contact", "Resume"]);
  return (
    <div>
      <ul>
        {tabs.map((tab) => (
          <li key={tab}>{tab}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
