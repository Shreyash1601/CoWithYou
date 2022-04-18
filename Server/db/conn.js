const mongoose=require("mongoose")
const DB="mongodb+srv://CoWithYou:Shreyash@cluster0.82zus.mongodb.net/Medicines?retryWrites=true&w=majority"
mongoose.connect(DB,{useNewUrlParser:true,
    useUnifiedTopology:true}).then(()=>{
        console.log("Connection successful")
    }).catch((err)=>{console.log("no connection",err)}); 