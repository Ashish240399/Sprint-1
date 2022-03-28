const express=require("express");
const router=express.Router();
require('dotenv').config()
var jwt = require('jsonwebtoken');
const User=require("../model/user.model");
const newToken=(user)=>{
    return jwt.sign({ user },process.env.SECRET_KEY);
}
router.post("",async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.send("Email exists")
        }
        user=await User.create(req.body);
        const token=newToken(user);
        return res.send({user,token});
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;