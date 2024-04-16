import React, { useContext, useState } from "react";
import "../Form.css";
import img2 from "../img/pass.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Log_in = () => {
  const [email, setUseremail] = useState("");
  const [password, setUserpassword] = useState("");

  // const [info,setInfo]=useState({
  //   email:"",
  //   password:""
  // });

  // const detail= (e)=>{

  //   setInfo({...info,[e.target.name]: e.target.value})

  // }

  const { storeToken } = useContext(AuthContext);

  const handellogin = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const res = await data.json();
      console.log(res);
      storeToken(res.token);
      toast.success("you have logged in");
    } catch (error) {
      console.log(error);
    }

    // console.log(email, password);
  };

  return (
    <>
      <Navbar />

      <div class="form-area mt-5">
        <div class="container">
          <div class="row single-form g-0">
            <div class="col-sm-12 col-lg-6 d-flex justify-content-center r">
              <div class="left ">
                <h2>
                  <span>Log-In</span>
                </h2>

                <img src={img2} class="rounded mt-5 img-fluid" alt="img" />
              </div>
            </div>
            <div class="col-sm-12 col-lg-6 mt-5">
              <div class="right">
                <form onSubmit={handellogin}>
                  <div class="mb-3">
                    <label for="exampleInput" class="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setUseremail(e.target.value)}
                      // onChange={detail}
                      name="email"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInput" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      autocomplete="off"
                      value={password}
                      onChange={(e) => setUserpassword(e.target.value)}
                      // onChange={detail}
                      name="password"
                    />
                  </div>

                  <button type="submit">SUBMIT</button>
                </form>

                <div>
                  <span>
                    Already have an account?
                    <Link to="/register">Sign-up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Log_in;
