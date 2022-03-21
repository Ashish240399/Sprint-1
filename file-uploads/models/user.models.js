const mongoose=require("mongoose");
const userSchema=mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        profilePic:[{type:String,required:false}]
    },
    {
        versionKey:false,
        timestamps:true
    }
);
const User=mongoose.model("files",userSchema)
module.exports=User;