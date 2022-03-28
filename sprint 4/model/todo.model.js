const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    todo:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
},{
    versionKey:false,
    timestamps:true
});
module.exports=mongoose.model("todo",todoSchema);