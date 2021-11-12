const express=require("express")
const router=express.Router()
const products=require("../models/products");
router.post("/", async (req,res)=>{
    const {Pname,PMD,PED,Contact,PDescription}=req.body;
    console.log(req.body)
    if(!Pname||!PMD||!PED||!Contact||!PDescription)
    {
        return res.status(400).json({error:"One or more field is empty"})
    }
    const pro=new products({Pname,PMD,PED,Contact,PDescription});
    pro.save().then(()=>{
        res.status(200).json({message:"Product added successfully"})
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({error:"Failed to upload"})})
})
module.exports=router