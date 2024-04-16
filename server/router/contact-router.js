const express=require('express')
 const contactform=require('../controller/contact-controller')
 const router = express.Router();

 router.post('/contact',contactform)

 module.exports = router