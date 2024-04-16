import React, { useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [infodata, setInfodata] = useState({ name: "", email: "", msg: "" });

  const handelIndo = (e) => {
    setInfodata({ ...infodata, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: JSON.stringify(infodata),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      alert("Message Sent Successfully");
      const res = await data.json();
      console.log(res);

      setInfodata({
        name: "",
        email: "",
        msg: "",
      });
    } catch (error) {
      console.log("Error!", error);
    }
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
                  <span>Contact-Us</span>
                </h2>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.14272432107!2d75.87061747553274!3d22.68573022881399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd11cbaf30c5%3A0xeddd100ed6a7f182!2sIT%20park%20indore!5e0!3m2!1sen!2sin!4v1708159986674!5m2!1sen!2sin"
                  allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="right">
                <form onSubmit={handleFormSubmit}>
                  <div class="mb-3">
                    <label for="exampleInput" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="app-form-control"
                      id="exampleInput"
                      aria-describedby="basic-addon1"
                      placeholder="NAME"
                      name="name"
                      value={infodata.name}
                      onChange={handelIndo}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInput" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      placeholder="EMAIL"
                      name="email"
                      value={infodata.email}
                      onChange={handelIndo}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="">
                      Message
                    </label>
                    <textarea
                      type="text"
                      class=""
                      id="exampleInput"
                      aria-label="With textarea"
                      placeholder="MESSAGE"
                      name="msg"
                      value={infodata.msg}
                      onChange={handelIndo}
                    ></textarea>
                  </div>
                  <button type="submit">SEND-MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  );
};

export default Contact;
