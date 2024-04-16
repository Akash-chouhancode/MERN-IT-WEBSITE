import React from 'react'
import Navbar from './Navbar'
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./../App.css";
import main from "../img/man.png";
import elementimg from "../img/elements.png";
import logoimg1 from "../img/18771.jpg";
import Footer from './Footer.js';

const About = () => {
  return (
    
    <>
    <Navbar/>

    <div class="container-fluid mt-5">
    <div class="row">
        <div class="col-md-4 justify-content-between mt-5 flex-md-wrap d-flex align-items-stretch">
       <img src={main}class="img-fluid elementimg1 " alt="img"/>
       <img src={elementimg}class="img-fluid elementimg2"  alt="img"/>
        </div>
        <div class="col-md-7 ms-auto me-auto  my-auto">
<h1>Creative <br/> <span class="text-primary">Marketing</span>  Agency</h1>
<p >Cortex provides a comprehensive selection of creative services based on data-driven analysis and a relentless focus on staying ahead of industry developments. Our team of experts works with you every step of the way to help you reach your digital goals.</p>
  
        </div>
    </div>
  



<div class="container-fluid mt-5 py-5 ">
            <div class="row">
                <div class="col-md-7 ">
                    <h2 class="bg-dark text-white rounded-5 text-center"> How we work</h2>

                    <p class="px-2">We have worked with more than 2000 clients in this small journey and now we are working with creativity.</p>
                    <br/>
                    <p>Today, we have a strong focus on developing marketing solutions for business owners from a wide range of niches and industries, such as tech startups, artists, designers, writers, web developers, marketers, travellers, photographers, eCommerce retailers, and everyone else in between.Our aim is to deliver the best creative content from our end. As we have completed more than 7 years in Digital Marketing, so now with the help of this experience we can give you the best quality content from our end.</p>




                </div>
                <div class="col-md-4 m-auto">
                    <img src={logoimg1} class="img-fluid rounded-5 " alt=""/>
                </div>
            </div>
        </div>
   </div>
    
    
    
    
    
    
  <Footer/>
    
    </>
  )
}

export default About