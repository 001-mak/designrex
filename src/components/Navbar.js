import React from "react";
import "./styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white bg-opacity-75 sticky-top">
        <div className="container-fluid">
          <div className="logo-container d-flex align-items-center justify-content-center">
            <img className="logo ms-lg-5 mb-lg-2" src="../../logo.png" alt="" />
            <a className="navbar-brand fw-bold px-2 lh-0" href="#">
              DesignRex
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-lg-5 pe-lg-5 mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active " aria-current="page" href="#">
                  Explore
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  How It Works
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </li>

              <li className="nav-item mx-2 signup ">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
