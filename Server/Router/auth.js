const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("../db/conn")
const User=require("../models/Users")
const router=express.Router()
const {body,validationResult}=require("express-validator")
router.post("/Register",[body("name").isLength({min:3}),body("email").isEmail(),body("phone").isLength(10).isNumeric(),body("password").isLength({min:8}),body("cpassword")],async (req,res)=>{
    const errors=validationResult(req);
    const {name,email,phone,password,cpassword}=req.body;
    if(!name ||!email|| !phone|| !password||!cpassword)
    {
        return res.status.json({error:"Incomplete entry"})
    }
    if(req.body.password!=req.body.cpassword){
        return res.status(400).json({error:"Password and Confirm Password do not match"})
    }
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
    const UserPreRegistered=await User.findOne({email:email}).then((userExist)=>{if(userExist){
        return res.status(400).json({error:"User Exist"}).catch((err)=>{console.log(err)})
    }});
    
}catch(err){
    console.log("ERROR",err)
}
    User.create({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword
    }).then(user=>res.json(user)).catch(err=>{console.log("err");
    return res.status(400);})
    console.log(req.body);
})

//Login Route

router.post("/Login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({error:"Please fill credentials"})
        }
        const UserLogin=await User.findOne({email:email});

        if(UserLogin){
            const isMatch=await bcrypt.compare(password,UserLogin.password)
            const token= await UserLogin.generateAuthToken();
            console.log(token)
            res.cookie("jwttoken",token,{
                httpOnly:true
            })
            if(!isMatch)
            res.status(400).json({message:"Invalid credentials"})
            else{
                res.json({message:"User signed in successful"})
            }
        }
        else{
            res.status(400).json({message:"Invalid credentials"})
        }
    }
    catch(err){
        console.log(err)
    }
})
module.exports=router