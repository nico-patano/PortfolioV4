import React from "react";

function Footer() {
  return (
    <footer className="footer fixed-bottom mt-auto py-2 bg-dark-gray ">
      <a
        className="d-flex justify-content-center text-yellow-green"
        href="https://github.com/nico-patano"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github icon-size"></i>
        <h6>&nbsp; GitHub</h6>
      </a>

      <a
        className="d-flex my-auto justify-content-center text-yellow-green"
        href="https://www.linkedin.com/in/nico-patano-25b8a9230/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin icon-size"></i>
        <h6>&nbsp;Linked In</h6>
      </a>
      <h7 className="d-flex my-auto justify-content-center text-yellow-green">
        Created by Nico
      </h7>
    </footer>
  );
}

export default Footer;
