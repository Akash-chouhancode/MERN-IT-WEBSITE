import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../img/login.svg"
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../Form.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Register = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    cpass: "",
  });
  const { storeToken } = useContext(AuthContext);
  const handelInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });

    // let name = e.target.name;
    // let value = e.target.value;
    // setStudent({
    //   ...student,
    //   [name]: value,
    // });
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const res = await data.json();
      console.log(res);
      storeToken(res.token);

      if (res.msg === "Email already exists.") {
        toast.error("This Email is already registered!");
      } else if (res.msg === "all fields are required") {
        toast.error("All fields are required!");
      } else if (res.msg === "Password does not match") {
        toast.error("Password and confirm password must be identical!");
      } else {
        navigate("/login");
      }

      setStudent({
        name: "",
        email: "",
        contact: "",
        password: "",
        cpass: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="form-area mt-5 ">
        <div className="container">
          <div className="row single-form g-0">
            <div className="col-sm-12 col-lg-6 d-flex justify-content-center r">
              <div className="left ">
                <h2>
                  <span>Create account</span>
                </h2>

                <img
                  src={img1}
                  className="rounded mt-5 img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="right">
                <form onSubmit={sendData}>
                  <div className="mb-3">
                    <label for="exampleInput" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="app-form-control"
                      id="exampleInput"
                      aria-describedby="basic-addon1"
                      autocomplete="off"
                      value={student.name}
                      name="name"
                      onChange={handelInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInput" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      autocomplete="off"
                      value={student.email}
                      name="email"
                      onChange={handelInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInput" className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      autocomplete="off"
                      value={student.contact}
                      name="contact"
                      onChange={handelInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInput" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      autocomplete="off"
                      value={student.password}
                      name="password"
                      onChange={handelInput}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInput" className="form-label">
                      Confirm-Password
                    </label>
                    <input
                      type="password"
                      className="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      required=""
                      value={student.cpass}
                      name="cpass"
                      onChange={handelInput}
                    />
                  </div>

                  <button type="submit">REGISTER</button>
                </form>

                <div>
                  <span>
                    Already have an account?
                    <Link to="/login">Log in here</Link>
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

// name: req.body.name,
// email: req.body.email,
// contact:req.body.contact,
// password:hashpass,
// cpass:chash

export default Register;
