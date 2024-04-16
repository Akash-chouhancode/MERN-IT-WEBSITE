const express=require('express')
const varifyToken = require('../middlewares/auth_middleware')
const varifyAdmin = require('../middlewares/admin_middleware')
const admindata = require('../controller/admin-controller')
const router = express.Router();

 router.get('/student',varifyToken,varifyAdmin,admindata.getallstudent)
 router.get('/contactstudent',(admindata.getallcontact))
 router.get('/student/:id',(admindata.getsingledata))
 router.delete('/student/delete/:id',(admindata.deletesingledata))
 router.delete('/contactstudent/delete/:id',(admindata.deletesinglcontact))
 router.put('/student/update/:id',(admindata.updatedata))

 router.get('/service/delete',(admindata.adminAllservic))
 
 router.delete('/service/delete/:id',(admindata.deleteAllservic))
 router.post('/post/service',(admindata.addservices))




 module.exports = router