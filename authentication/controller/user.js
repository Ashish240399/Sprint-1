const express=require("express");
const router=express.Router();
const User=require("../modules/userSchema")
router.get("",async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.send({user})
    } catch (error) {
        console.log(error)
    }
})
module.exports=router;