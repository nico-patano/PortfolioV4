import React from "react";

function About() {
  return (
    <div>
      <h3 className="text-black border-bottom border-2 py-2 mb-3" id="about-me">
        About Me
      </h3>
      <img
        className="float-sm-start rounded mt-2 mt-sm-1 me-sm-3 pb-2"
        id="cuteRobot"
        src={process.env.PUBLIC_URL + "/images/cuterobot.png"}
        alt="cuterobot"
      ></img>
      <p>
        Hi there, and welcome to my portfolio page. It is a working process and
        I hope to be adding alot more in the future. A little about me to start,
        I just enrolled in a full stack developemnt program in order to start my
        coding journey. Things I like include: video games, cats and skiing.
        Feel free to stay a while and .... browse. Thank You!
      </p>
    </div>
  );
}

export default About;
