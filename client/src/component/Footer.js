import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import { NavLink,Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white  mt-5"
        style={{
          
          backgroundColor: "#2a3f58",
          paddingTop: ".25rem",
          paddingBottom: ".25rem",
        }}
      >
        <div className="container p-4 pb-0">
          <section className>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4">CORTEX</h6>
                <p>
                  we have a strong focus on developing marketing solutions for
                  business owners from a wide range of niches and industries
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Usefull Links
                </h6>
                <p>
                  <Link to="/" className={"link ms-4"}>
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/about" className={"link ms-4"}>
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/services" className={"link ms-4"}>
                    Services
                  </Link>
                </p>
                <p>
                  <Link to="/register" className={"link ms-4"}>
                    Register
                  </Link>
                </p>
                <p>
                  <Link to="/login" className={"link ms-4"}>
                    login
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <span className="mx-2">
                  <i>
                    <FaFacebook />
                  </i>
                </span>
                <span className="mx-2">
                  <i>
                    <FiInstagram />
                  </i>
                </span>
                <span className="mx-2">
                  <i>
                    <FaXTwitter />
                  </i>
                </span>
                <span className="mx-2">
                  <i>
                    <FaGithub />
                  </i>
                </span>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className=" mx-1">
                    <HiOutlineOfficeBuilding />
                  </i>{" "}
                  New York, NY 10012,US
                </p>
                <p>
                  <i className="mx-1">
                    <FaRegEnvelope />
                  </i>
                  cortexinfo@gmail.com
                </p>
                <p>
                  <i className=" mx-1">
                    <FaPhoneAlt />
                  </i>
                  + 63 769 06 203
                </p>
                <p>
                  <i className=" mx-1">
                    <FaPhoneAlt />
                  </i>
                  + 01 234 567 89
                </p>
              </div>

             
            </div>
          </section>
        </div>

        <div
          className="text-center p-3 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright: Designed and Developed by<Link to={`https://github.com/Akash-chouhancode`} className={"link-name text-warning"}>Akash Chouhan</Link> 
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
