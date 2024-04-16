require("dotenv").config()
const express=require('express')
const app=express()
const port=process.env.PORT || 5000

const router=require('./router/auth-router')
const contactRouter = require('./router/contact-router')
const serviceRouter=require('./router/service-router')
const adminRouter=require('./router/admin-router')
const cors=require('cors')
app.use(cors())
app.use(express.json())
require('./utils/db')

const fileupload=require('express-fileupload');
app.use(fileupload());


app.use(express.static('assets'))
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.use('/api/auth',router)
app.use('/api', contactRouter)
app.use('/api/data',serviceRouter)

app.use('/api/admin',adminRouter)

// app.get('/',(req,res)=>{
//     res.send('this is our first appppp ')

// })
// app.get('/home',(req,res)=>{
//     res.send('this is our home page')

// })

// app.get('/about',(req,res)=>{
//     res.send('this is our about page')

// })
// app.get('/contact',(req,res)=>{
//     res.send('this is our contact')

// })

// app.all( '*', (req,res)=>{
//     res.send("page not found");

// })

// app.post('/:id',(req,res)=>{
//     res.send("this is demo")

// })

// app.put('/:id',(req,res)=>{
//     res.send("this is demo")

// })

// app.delete('/:id',(req,res)=>{
//     res.send("this is demo")

// })





app.listen(port,()=>{
    console.log('running in port 5000')
})