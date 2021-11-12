const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const SECRET_KEY="THISISAMERNAPPLICATIONTITLEDCOWITHYOUWHICHISANINITIATIVEBYGGCTSTUDENTSTOTACKLESARSCOVID19"
const jwt=require("jsonwebtoken")
const {Schema}=mongoose;
const ProductSchema=new Schema({
    Pname:{
        type:String,
        required:true
    },
    PMD:{
        type:String,
        required:true,
    },
    PED:{
        type:String,
        required:true,
    },
    Contact:{
        type:Number,
        required:true
    },
    PDescription:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


const Product=mongoose.model("Product",ProductSchema)
Product.createIndexes()
module.exports=Product
