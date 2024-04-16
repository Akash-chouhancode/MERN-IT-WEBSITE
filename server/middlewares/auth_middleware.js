const jwt = require("jsonwebtoken");
const student= require('../models/studentScheema');


const varifyToken= async (req,res,next)=>{
     let token = req.headers["authorization"];

    //  console.log(token)
      if(!token){
        return res.status(400).json({ message:"No Token Provided"}) 

      }
    try {
        if(token.startsWith('Bearer ')){
            //remove bearer fron strings from the header
            token=token.slice(7, token.length);
            console.log(token)
        
        }
        
        // verify the token
        const isVerified= jwt.verify(token, process.env.JWT_SECRET_KEY) 
        const data= await student.findOne({_id: isVerified.id})

        
        
        req.student = data

        next();
    }
    
    catch (error) {
    res.status(400).json({ message: "Invalid Token" });
        
    }
       
}

module.exports = varifyToken