import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./../App.css";

const AdminPage = () => {
  return (
    <>
      {/* <ul>
    <li> <NavLink to='/admin/students'> User</NavLink></li>
    <li><NavLink to='/admin/contacts'>Contacts</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    <li><NavLink to='/'>Home</NavLink></li>
</ul> */}
      <section className="sidebar">
        <div class="container">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                  href="/"
                  class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li class="nav-item mt-4">
                    <NavLink to="/" className="nav-link align-middle px-0">
                      <span class="ms-1 d-none d-sm-inline">Home</span>
                    </NavLink>
                  </li>

                  <li class="nav-item mt-4">
                    <NavLink
                      to="/admin/students"
                      className="nav-link px-0 align-middle"
                    >
                      <span class="ms-1 d-none d-sm-inline">Users</span>
                    </NavLink>
                  </li>


                 
                  <li class="nav-item mt-4">
                   
                      <span class="ms-1 d-none d-sm-inline dropdown-toggle nav-link px-0 align-middle"data-bs-toggle="dropdown">Services</span>{" "}
                    

                    <NavLink>

                    <ul class="dropdown-menu">
                      <li>
                      <NavLink to="/admin/services" class="dropdown-item ms-1 d-none d-sm-inline nav-link px-0 align-middle text-black">
                          Add Services
                          </NavLink>
                      </li>
                      <li>
                        <NavLink to="/admin/service/delete" class="dropdown-item ms-1 d-none d-sm-inline nav-link px-0 align-middle text-black" >
                          Delete Services
                        </NavLink>
                      </li>
                     
                    </ul>
                    </NavLink>

                   
                  </li>

                  <li class="nav-item mt-4">
                    <NavLink
                      to="/admin/contacts"
                      className="nav-link px-0 align-middle"
                    >
                      <span class="ms-1 d-none d-sm-inline">Contacts</span>{" "}
                    </NavLink>
                  </li>

                  
                </ul>
              </div>
            </div>
            {/* <div class="col py-3">
            <AdminStudent/>

        </div> */}
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default AdminPage;
