import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-4"
      style={{ backgroundColor: '#2C3E50' }}
    >
      <div className="container">
        <NavLink className="navbar-brand text-white fs-2 fw-bold" to="home">
          START FRAMEWORK
        </NavLink>
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
              <NavLink className="hi" aria-current="page" to="about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="hi" to="portfolio">
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="hi" to="contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
