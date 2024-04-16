
const mongoose=require('mongoose');
const uri= process.env.MONGO_URL;

mongoose.connect(uri)
// const conn = mongoose.connection
// conn.once('open',() =>{
//     console.log('connected')
// })
// conn.on('error', () => {
//     console.log('Failed to connect')

// })

.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log(`Connection error ${err}`)
});
