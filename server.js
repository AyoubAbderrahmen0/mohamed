

//require express
const express=require("express")
const connect = require("./config/connectDB")

//create instance

const app=express()

//middleware
app.use(express.json())
//connection to DB

connect()

//create port

const PORT=8000

//create server

app.listen(PORT,(error)=>{
    error?console.log(error):
    console.log(`the server is running on PORT ${PORT}`)
})

app.use('/api/product',require('./Routes/ProductRoutes'))