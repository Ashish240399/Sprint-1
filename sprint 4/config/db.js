const mongoose=require("mongoose");
module.exports=()=>{
    return mongoose.connect("mongodb+srv://Ashish7797:Ashish7797@cluster0.3get3.mongodb.net/sprint4?authSource=admin&replicaSet=atlas-5sws42-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")
}