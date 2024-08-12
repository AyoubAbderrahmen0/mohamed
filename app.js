

//require express
const express=require("express")
const connect = require("./config/connectDB")


//create instance
const app=express()


//middleware
app.use(express.json())

//require dotenv
require("dotenv").config()

//create port
const PORT= process.env.PORT

//create server

app.listen(PORT,(error)=>{
    error?console.log(error):console.log(`server is running on port ${PORT} `)
})

//connect to db
connect()


app.use('/api/product',require('./Routes/Product'))


