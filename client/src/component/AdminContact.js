
import React, { useState,useEffect,useContext } from 'react'
import { AuthContext } from "../store/auth.js";

const AdminContact = () => {
  // All contact data api
  const [ucontact,setUcontact]=useState([])

  const [userid,setUserid]=useState("")
  const{authorizationToken}=useContext(AuthContext)

  const studentcontact= async ()=>{
    try {


      const response=await fetch("http://localhost:5000/api/admin/contactstudent",{
        headers: { authorization:authorizationToken}
       
      })
      const result=await response.json()
      setUcontact(result)
      
      console.log(result)
      
    } catch (error) {
      console.log(error);

      
    }
  }
  useEffect(() => {
    studentcontact();
      }, []);



    const removecontact = async (_id)=>{
      try {
       const response= await fetch(`http://localhost:5000/api/admin/contactstudent/delete/${_id}`, { method: "DELETE" })
       const result=await response.json()

       if(result.msg){
        studentcontact()
       }


        
      } catch (error) {
        
        console.log(error);
      }




    }




  return (
    <>
    <table class="table student-table">
      <thead>
        <tr>
          <th scope="col">S.No </th>
          <th scope="col">Name</th>
          <th scope="col">Email </th>
          <th scope="col">Message </th>
          <th scope="col">Action </th>
         
        </tr>
      </thead>
      <tbody>
        {ucontact.map((val, index) => {
          if (ucontact === null) {
            alert("no user found");
          } else {
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.message}</td>

                <td>
                 

                  <button
                    onClick={() => setUserid(val._id)}
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
              onClick={() => removecontact(userid)}
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              ok
            </button>
            <button type="button" class="btn btn-primary"data-bs-dismiss="modal">
              Cancle
            </button>
          </div>
        </div>
      </div>
            
    </div> 
  </>
  )
}

export default AdminContact