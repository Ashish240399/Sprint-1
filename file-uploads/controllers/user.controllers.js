const express=require("express");
const User=require("../models/user.models");
const router=express.Router();
const upload=require("../middlewares/uploads")
router.get("",async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.send(user)
    } catch (error) {
        res.send(error);
    }
});
router.post("",upload("profilePic","single"),async(req,res)=>{
    try {
        const users=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            profilePic:req.file.path
        })
        console.log(req.body);
        return res.send(users);
    } catch (error) {
        console.log(error)
    }
});
router.post("/multiple",upload("profilePic","multiple"),async(req,res)=>{
    try {
        const filepaths=req.files.map((file)=>{
            return file.path;
        }); 
        console.log(filepaths);
        const users=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            profilePic:filepaths
        });
        return res.send(users);
    } catch (error) {
        console.log(error)
    }
});
module.exports=router;