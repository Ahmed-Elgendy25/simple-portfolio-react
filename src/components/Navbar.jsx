import React from 'react';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-4"
      style={{ backgroundColor: '#2C3E50' }}
    >
      <div className="container">
        <a className="navbar-brand text-white fs-2 fw-bold" href="#">
          START FRAMEWORK
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto fw-bolder gap-4 mb-2 mb-lg-0  ">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PORTFOLIO
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
