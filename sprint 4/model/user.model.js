const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});
userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 7);
    this.password=hash;
    next();
});
userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password)
}
module.exports=mongoose.model("user",userSchema);