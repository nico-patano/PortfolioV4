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
      <br></br>
      <br></br>
    </div>
  );
}

export default Resume;
