import React from "react";
import Typewriter from "typewriter-effect";
// This is used for typing text on home page
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;