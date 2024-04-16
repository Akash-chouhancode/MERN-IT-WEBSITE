import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import log_in from "./Log_in.js";
import Navbar from "./Navbar";
import Footer from "./Footer.js";

const Services = () => {
  const [user, setUser] = useState([]);

  const userdata = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/data/service");
      const result = await data.json();

      console.log(result);

      setUser(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  return (
    <>
      <Navbar />

      
        <div className="container mt-5">
          <div className="row gx-5 gy-5">
            {user.map((val) => {
              return (
                <div className="col-md-4">
                  <div className="row cardbg text-black rounded-3">
                    <div
                      className="flexcard d-flex flex-row "
                      style={{ height: "300px" }}
                    >
                      <div>
                        <img
                          src={`http://localhost:5000/assets/${val.image}`}
                          className="rounded mt-5 img-fluid img-thumbnail"
                          alt="img"
                          height={"300px"}
                          width={"400px"}
                        />
                      </div>

                      <div>
                        <div className>
                          <h5 className="fw-bold text-center mt-3">{val.service_name}</h5>
                          <p className="p-4 text-center">
                           {val.description}
                          </p>

                          <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-dark">
                              Read more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      
      
      <Footer/>
   
     
    </>
  );
};

export default Services;
