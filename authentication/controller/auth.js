const User=require("../modules/userSchema");
var jwt = require('jsonwebtoken');
require('dotenv').config()
const newToken=(user)=>{
    return jwt.sign({user}, process.env.SECRET_KEY);
}
const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.send("Existing EmailId");
        }
        user=await User.create(req.body);
        const token=newToken(user);
        return res.send({user,token});
    } catch (error) {
        console.log(error)
    }
};

const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.send("Wrong email or password")
        }
        const match=user.checkPassword(req.body.password);
        if(!match){
            return res.send("Incorrect Password");
        }
        const token=newToken(user);
        return res.send({user,token});
    } catch (error) {
        console.log(error);
    }
};
module.exports={register,login}