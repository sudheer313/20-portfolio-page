import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";

function Footer() {
  const handleGithubClick = (type) => {
    if (type === "github") {
      window.open("https://github.com/sudheer313", "_blank");
    } else if (type === "linkdin") {
      //add linkdin page
      console.log("linkdin");
    } else {
      //add twitter page
      console.log("twitter");
    }
  };

  return (
    <div className="footer">
      <GoMarkGithub size={30} onClick={() => handleGithubClick("github")} />
      <AiFillLinkedin size={30} onClick={() => handleGithubClick("linkdin")} />
      <SiTwitter size={30} onClick={() => handleGithubClick("twitter")} />
    </div>
  );
}

export default Footer;
