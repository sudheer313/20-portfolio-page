import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img
          src={require("../images/IMG_1211.jpg")}
          alt=" not found"
          width="100%"
        />
      </div>

      <p>
        Hi, My name is Sudheer. I am doing coding course at Monash University. I
        always have passion for coding. But I never had a oppurtunity to learn.
        I find this as a an opputunity to learn coding and switch my career to
        web development. So I joined Coding Bootcamp at monash University. I
        find this really challanging and also I get to learn lot of new coding
        practices available in industry. In this coding Bootcamp, I learned
        HTML,CSS,JavaScript, NodeJS, MVC, MySql, MondoDB and also React.so far.
        I am also able to desing a React portfolio website with the learned
        skills.
      </p>
    </div>
  );
};

export default About;
