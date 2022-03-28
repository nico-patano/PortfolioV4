import React from "react";

function Resume() {
  return (
    <div>
      <h3 className="text-black border-bottom border-2 py-2 mb-3" id="resume">
        Resume
      </h3>

      <h4>Current Resume:</h4>
      <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
        <h6>Download PDF Link</h6>
      </a>

      <img
        className="card-img img-fluid w-100"
        src={process.env.PUBLIC_URL + "/images/resume.png"}
        alt="resume"
      ></img>
      <br></br>
      <br></br>
      <br></br>
      <h3 className="text-green border-bottom border-2 py-2 mb-3" id="resume">
        List of the Developer’s Proficiencies
      </h3>

      <ul class="list-group list-group-flush m-2">
        <li class="list-group-item">HTML</li>
        <li class="list-group-item">CSS</li>
        <li class="list-group-item">JavaScript</li>
        <li class="list-group-item">NodeJS</li>
        <li class="list-group-item">Express</li>
        <li class="list-group-item">SQL</li>
        <li class="list-group-item">PWA</li>
        <li class="list-group-item">React</li>
        <li class="list-group-item">Express</li>
      </ul>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Resume;
