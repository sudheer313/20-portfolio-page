import React from "react";

function Skills() {
  const Skills = ["Javascript", "Html", "CSS", "bootsrap"];
  return (
    <div>
      {Skills.map((list) => (
        <ul>{list}</ul>
      ))}
    </div>
  );
}

export default Skills;
