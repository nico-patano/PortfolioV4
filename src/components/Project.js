import React from "react";

function Project() {
  return (
    <div>
      <h3 className="text-black border-bottom border-2 py-2 mb-3" id="projects">
        Some of My Projects
      </h3>

      <div className="container mw-100 px-0">
        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 text-light">
                  Social-Network-API
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/snAPI.png"}
                alt="Social-Network-API"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nico-patano/Social-Network-API-ReUpload"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://drive.google.com/file/d/1Wr8vclLKxBlq8BadJO58cW3k9gTg5v8d/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Walkthrough Vid</h5>
                </a>
              </div>
            </div>
          </section>

          <section className="col-sm p-0 mb-3 ms-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Text Editor
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/textEditor.png"}
                alt="textEditor"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nico-patano/TextEditor"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://justanothertextedit.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed Link</h5>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 text-light">GitFit</h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/gitFit.png"}
                alt="GitFit"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nico-patano/GitFitRepo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://git-fit-1.herokuapp.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed Link</h5>
                </a>
              </div>
            </div>
          </section>

          <section className="col-sm p-0 mb-3 ms-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Simple Weather App
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/weather.png"}
                alt="simpleWeather"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nico-patano/SimpleWeather"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://nico-patano.github.io/SimpleWeather/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed Link</h5>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="row w-100 mx-0">
          <section className="col-sm p-0 mb-3 me-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Simple Tech Blog
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/techBlog.png"}
                alt="SimpleTechBlog"
              ></img>
              <div className="card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nico-patano/TechBlogV2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://tech-blog-online.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Deployed Link</h5>
                </a>
              </div>
            </div>
          </section>

          <section className="col-sm p-0 mb-3 ms-sm-2">
            <div className="card">
              <div className="card-img-top p-0 d-flex align-items-start bg-yellow-green">
                <h5 className="flex-fill text-center p-2 mb-2 text-light">
                  Team Employee Generator
                </h5>
              </div>
              <img
                className="card-img img-fluid w-100"
                src={process.env.PUBLIC_URL + "/images/teamGen.png"}
                alt="Weather Dashboard"
              ></img>
              <div className="card-img card-img-overlay p-0 pb-2 d-flex align-items-end">
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://github.com/nico-patano/TeamProfileGenerator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Repo</h5>
                </a>
                <a
                  className="flex-fill text-center p-2 bg-yellow-green text-light"
                  href="https://watch.screencastify.com/v/cF7Vwthc6dhcIHhHiD4U"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Walkthrough Vid</h5>
                </a>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Project;
