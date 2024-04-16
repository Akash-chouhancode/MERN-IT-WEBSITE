import "../Header.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/auth.js";

const Navbar = () => {
  const { isLogin ,logoutUser} = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="brandspan">C</span>ortex
          </a>
        

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarScroll"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink to="/" className={"nav-link ms-5"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-4 ">
                <NavLink to="/about" className={"nav-link ms-4"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item me-4 ">
                <NavLink to="/services" className={"nav-link ms-4"}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item me-4 ">
                <NavLink to="/contact" className={"nav-link ms-4"}>
                  Contact
                </NavLink>
              </li>

              {isLogin ? (
                <li className="nav-item  me-4 nav-link" onClick={logoutUser}>
                 
                    Log-out
             
                </li>
              ) : (
                <>
                  <li className="nav-item  me-4">
                    <NavLink to="/login" className={"nav-link"}>
                      Log-In
                    </NavLink>
                  </li>
                  <li className="nav-item me-4 ">
                    <NavLink to="/register" className={"nav-link ms-4"}>
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
