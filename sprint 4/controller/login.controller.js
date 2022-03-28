const express=require("express");
require('dotenv').config()
const router=express.Router();
var jwt = require('jsonwebtoken');
const User=require("../model/user.model");
const newToken=(user)=>{
    return jwt.sign({ user },process.env.SECRET_KEY);
}
router.post("",async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.send("User not exists")
        }
        const match=user.checkPassword(req.body.password);
        if(!match){
            return res.send("Incorrect password")
        }
        const token=newToken(user);
        return res.send({user,token});
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;