import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="navbar-expand navbar-dark bg-dark-gray py-3 px-0 px-sm-1 px-md-3 mx-0 ">
      <div className="container mw-100">
        <div className="row m-0">
          <div className="col-10 col-sm-6 p-0 d-flex justify-content-center justify-content-sm-start">
            <h2 className="p-3 my-auto mx-0 text-dark-gray text-center bg-yellow-green flex-fill flex-sm-grow-0 border-radius">
              Nicholas Patano
            </h2>
          </div>
          <div className="col-12 col-sm-6 my-auto">
            <nav className="navbar-nav d-flex justify-content justify-content-sm-end">
              <a
                href="#about-me"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "nav-item nav-link active border border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-yellow-green py-0 my-auto"
                }
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => handlePageChange("Project")}
                className={
                  currentPage === "Project"
                    ? "nav-item nav-link active border border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-yellow-green py-0 my-auto"
                }
              >
                Projects
              </a>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "nav-item nav-link active border border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-yellow-green py-0 my-auto"
                }
              >
                Resume
              </a>
              <a
                href="#contact-me"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "nav-item nav-link active border border-yellow-green py-0 my-auto"
                    : "nav-item nav-link border-yellow-green py-0 my-auto"
                }
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
