import React, { useRef, useState } from "react";

const AdminService = () => {

  const[service_name,setService_name]=useState("")
  const[description,setDescription]=useState("")
  const[uploadFile,setUploadFile]=useState("")
  const file=useRef("");

  const addServic= async (e)=>{
    e.preventDefault()
    const data= new FormData()
    data.append('uploadFile', uploadFile)
    data.append('service_name', service_name)
    data.append('description', description)


    try {
      const DataToadd= await fetch('http://localhost:5000/api/admin/post/service',{
        method:'POST' ,
        body :data
      })
      const response= await DataToadd.json()
      console.log(response)
       if(!response.err){
         alert("Service Added Successfully!")
       }else{
         alert("Error Occured ! Please Try Again.")}
      
    } catch (error) {
      console.log(error);
      
    }
    setService_name('');
    setDescription("");
   
    file.current.value=""
  


  }





  return (
    <>
      <div class="form-area mt-5">
        <div class="container">
          <div class="row single-form g-0">
            <div class="col-sm-12 col-lg-6 d-flex justify-content-center r">
              <div class="left ">
                <h2>
                  <span>Add New Service</span>
                </h2>

               
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="right">
                <form enctype="multipart/form-data" method="post" onSubmit={addServic}>
                  <div class="mb-3">
                    <label for="exampleInput" class="form-label">
                      Service Name
                    </label>
                    <input
                    value={service_name}
                    onChange={(e)=>{setService_name(e.target.value)}}
                      type="text"
                      class="app-form-control"
                      id="exampleInput"
                      placeholder="Service Name "
                      aria-describedby="basic-addon1"
                      name="service_name"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="">
                     Service Description
                    </label>
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      class=""
                      id="exampleInput"
                      aria-label="With textarea"
                      placeholder="Service Description "
                      name="description"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInput" class="form-label">Upload Image</label>
                    <input
                   ref={file}
                    onChange={(e)=>setUploadFile(e.target.files[0])}
                      type="file"
                      class="app-form-control"
                      id="exampleInput"
                      aria-describedby="emailHelp"
                      name="uploadFile"
                    />
                  </div>

                  <button type="submit">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminService;
