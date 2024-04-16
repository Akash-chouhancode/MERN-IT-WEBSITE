import React, { useEffect, useState } from "react";

const AdminDeleteService = () => {

  const [item, setItem] = useState([])
 

  const allservicdata = async () => {
    try {
      const data = await fetch("http://localhost:5000/api/admin/service/delete")
      const result = await data.json()
      setItem(result)
      console.log(result)
     
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allservicdata()
  }, [])


  const deleteData= async(_id)=>{
    try {
      const result=await fetch(`http://localhost:5000/api/admin/service/delete/${_id}`,{method: 'DELETE'});
      const res=await result.json();
      console.log(res);
      if(res.msg){
        allservicdata()
      }
      // alert('Deleted Successfully')
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <>
     
        { <table class="table student-table">
          <thead>
            <tr>
              <th scope="col">S.No </th>
              <th scope="col">Service Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {item.map((val, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{val.service_name}</td>
                  <td>{val.description}</td>
                  <td>{ <img
                          src={`http://localhost:5000/assets/${val.image}`}
                          class="rounded mt-5 img-fluid img-thumbnail"
                          alt="img"
                          height={"80px"}
                          width={"80px"}
                        />}</td>

                  <td>
                    <button type="button" className="btn btn-danger m-2" onClick={()=>{deleteData(val._id)}} >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
       }
    </>
  )


};

export default AdminDeleteService;
