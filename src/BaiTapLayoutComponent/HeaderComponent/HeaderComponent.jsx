import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark">
          <div className="cyberContainer">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container">
                <a className="navbar-brand" href="#!">
                  Start Bootstrap
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#!"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}