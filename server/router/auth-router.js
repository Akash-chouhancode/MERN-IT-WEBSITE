const express=require('express')
// const { home,register } = require('../controller/auth-controller') // we can use single name insted or different the we use 
const varifyToken = require('../middlewares/auth_middleware')
const authcontrol= require('../controller/auth-controller') 



const router=express.Router()
 
// router.get('/',(req,res)=>{
//   res.status(200).send("we are using router")
// })

router.get('/',(authcontrol.home))


// router.get('/register',(req,res)=>{

//     res.status(200).send("you have registered")
      
// })

router.post("/register", (authcontrol.register))  // this is the method that will handle post request

router.post('/login', (authcontrol.login))

router.get('/student',varifyToken, authcontrol.getStudent)


module.exports=router