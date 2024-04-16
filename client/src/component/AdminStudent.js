import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./../App.css";
import { AuthContext } from "../store/auth.js";

const AdminStudent = () => {
  // All student data api
  
  const [ustudent, setUstudent] = useState([]);
  const [itemid, setItemid] = useState("");
  const [userid, setUserid] = useState("");
  const [sname, setSname] = useState("");
  const [semail, setEmail] = useState("");
  const [scontact, setContact] = useState("");

  const{authorizationToken}=useContext(AuthContext)

  const student = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/student",{
        headers:{
          authorization:authorizationToken
        }
      })
      const result = await response.json();
      setUstudent(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    student();
  }, []);

  const datamodel = async (_id) => {
    try {
      const data = await fetch(
        `http://localhost:5000/api/admin/student/${_id}`
      );
      const resData = await data.json();
      setSname(resData.name);
      setEmail(resData.email);
      setContact(resData.contact);
      setUserid(resData._id);
    } catch (error) {
      console.log(error);
    }
  };

  const updatedata = async (id) => {
    try {
     
      const response = await fetch(
        `http://localhost:5000/api/admin/student/update/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: sname,
            email: semail,
            contact: scontact,
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        });
       
      const result = await response.json();
      alert("Update Successfully");
      console.log(result);

      if(result.msg){
        student()
      }
    } catch (error) {
      alert("Error in Updating Data");
      console.log(error);
    }
  };

  const remove = async (_id) => {
    try {
      let response = await fetch(
        `http://localhost:5000/api/admin/student/delete/${_id}`,
        { method: "DELETE" }
      );
      const res = await response.json();
      console.log(res);
      if (res.msg) {
        student();
      }
    } catch (er) {
      console.log("error");
    }
  };

  return (
    <>
      <table class="table student-table">
        <thead>
          <tr>
            <th scope="col">S.No </th>
            <th scope="col">Name</th>
            <th scope="col">Email </th>
            <th scope="col">Contact </th>
            <th scope="col">Action </th>
          </tr>
        </thead>
        <tbody>
          {ustudent.map((val, index) => {
            if (ustudent === null) {
              alert("no user found");
            } else {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.contact}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => datamodel(val._id)}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => setItemid(val._id)}
                      type="button"
                      className="btn btn-danger m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>

      <div class="modal shadow" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h3 class="modal-title text-light">Edit Details</h3>
              <button
                type="button"
                class="btn-close bg-light"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body bg-dark">
              <form>
                <div class="form-group">
                  <input
                    value={userid}
                    onChange={(e) => {
                      setUserid(e.target.value);
                    }}
                    type="text"
                    class="form-control mb-2"
                    id="recipient-name"
                    placeholder="Enter your Name"
                  />
                </div>

                <div class="form-group">
                  <input
                    value={sname}
                    onChange={(e) => {
                      setSname(e.target.value);
                    }}
                    type="text"
                    class="form-control mb-2"
                    id="recipient-name"
                    placeholder="Enter your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    value={semail}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="text"
                    class="form-control mb-2"
                    id="recipient-name"
                    placeholder="Enter your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    value={scontact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Enter your Contact"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer bg-dark">
              <button
                onClick={() => {
                  updatedata(userid);
                }}
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Update
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
              
      </div>

      <div class="modal shadow" id="delete">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h3 class="modal-title text-light">Data Delete</h3>
              <button
                type="button"
                class="btn-close bg-light"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body bg-dark ">
              <p className="text-light">
                Are you sure you want to delete data?
              </p>
            </div>
            <div class="modal-footer bg-dark">
              <button
                onClick={() => remove(itemid)}
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                ok
              </button>
              <button type="button" class="btn btn-primary">
                Cancle
              </button>
            </div>
          </div>
        </div>
              
      </div>
    </>
  );
};

export default AdminStudent;
