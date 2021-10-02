const mongoose=require("mongoose")
const DB="mongodb+srv://CoWithYou:CharuShreyash@cluster0.yn3ih.mongodb.net/Medicines?retryWrites=true&w=majority"
mongoose.connect(DB,{useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=>{
        console.log("Connection successful")
    }).catch((err)=>{console.log("no connection",err)}); 