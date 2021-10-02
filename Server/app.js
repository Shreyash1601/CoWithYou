const mongoose=require("mongoose")
const express=require("express")
require("./db/conn")
const app=express()
app.use(express.json())
app.use(require("./Router/auth"))
// app.use("/Login",require("./Router/auth"))
app.get("/",(req,res)=>{
    res.send("Hello World!!!")
})
app.listen(5000,()=>{
    console.log("Server running at 5000")
})