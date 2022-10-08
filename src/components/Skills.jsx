import React from "react";

function Skills() {
  const Skills = ["Javascript", "Html", "CSS", "bootsrap"];
  return (
    <div className="skills">
      {Skills.map((list) => (
        <ul>{list}</ul>
      ))}
    </div>
  );
}

export default Skills;
