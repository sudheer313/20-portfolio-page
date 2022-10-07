import React from "react";

function Portfolio() {
  const Projects = ["AFL", "Pizza Bar and Restaurent", "Social Netoworking"];
  return (
    <div>
      {Projects.map((list) => (
        <ol>{list}</ol>
      ))}
    </div>
  );
}

export default Portfolio;
