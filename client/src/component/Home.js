import React from 'react'
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar'
import pic1 from "../img/teampic.jpg";
import pic2 from "../img/cservic.jpg";
import pic3 from "../img/laptop-computer-with-company-profit-progress-screen.jpg";
import Footer from './Footer';




const Home = () => {
  return (
    <>
      <Navbar/>
       

      
        
    
{/* 
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-4"><div class="card m-auto" style={{width:"18rem"}}>
                <img src={pic2} class="card-img-top" alt="..."/>
                <div class="card-body text-center cardbg text-white">
                  <h5 class="card-title">Customer Journey Builder</h5>
                  <p class="card-text">Create marketing automation workflows that are personal and adaptable to your customers’ behavior and interests.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div></div>
            <div class="col-md-4"><div class="card m-auto" style={{width:"18rem"}}>
                <img src={pic2} class="card-img-top" alt="..."/>
                <div class="card-body text-center cardbg text-white">
                  <h5 class="card-title">Transactional Emails</h5>
                  <p class="card-text ">Update customers on their purchases or account activity with personalized transactional emails using our API or SMTP.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div></div>
            <div class="col-md-4"><div class="card m-auto" style={{width:"18rem"}}>
                <img src={pic2} class="card-img-top" alt="..."/>
                <div class="card-body text-center cardbg text-white">
                  <h5 class="card-title">Retargeting Ads</h5>
                  <p class="card-text">Recapture the attention of people who visited your site and bring them back at the right moment with retargeting ads.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div></div>
        </div>
    </div> */}


    <div class="container-fluid  cardbg">
        <div class="row p-5">
            <div class="col-md-8">
               <h1 class="text-center ">Streamline and sell more <br/> with Campaign Manager</h1>

               <p class="text-center m-auto mt-4">Campaign Manager lets you manage  your multichannel marketing efforts, like email and SMS*, all at once to help you save time, drive growth, and sell more.

               </p>

            </div>
            <div class="col-md-4 m-auto">
                <img src={pic3}  class="img-fluid" alt=""/>

            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 text-center mt-2 cardbg text-white rounded-5 text-center">
                
                <h1 class="p-3">Unlock Limitless Business Growth with Best Digital Marketing Company</h1>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <img src={pic1} class="" height="400px" width="100%" alt=""/>
            </div>
        </div>
    </div>
  <Footer/>

    </>
  )
}


export default Home