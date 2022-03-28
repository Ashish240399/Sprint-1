const authenticate=require("../middlewares/authentication");
const Todo=require("../model/todo.model");
const express=require("express");
const router=express.Router();
router.post("", authenticate, async (req, res) => {

    req.body.userId = req.user._id;
    try{
        const todo = await Todo.create(req.body)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});
router.get("",authenticate,async(req,res)=>{
    try {
        const todo=Todo.find().lean().exec();
        return res.send(todo);
    } catch (error) {
        return error;
    }
})
router.get("/:id", authenticate, async(req, res) => {
    try{
        let user=await Todo.findById(req.params.id).populate("userId").lean().exec();
        console.log(user.userId.email);
        userEmail=user.userId.email;
        req.body.userId = req.user._id;
        req.body.email=req.user.email;
        console.log(req.body.email);
        if(userEmail!==req.body.email){
            return res.send("You are not Authorized");
        }
        const todo = await Todo.findById(req.params.id)
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
router.patch("/:id", authenticate, async(req, res) => {
    try{
        let user=await Todo.findById(req.params.id).populate("userId").lean().exec();
        console.log(user.userId.email);
        userEmail=user.userId.email;
        req.body.userId = req.user._id;
        req.body.email=req.user.email;
        console.log(req.body.email);
        if(userEmail!==req.body.email){
            return res.send("You are not Authorized");
        }
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
router.delete("/:id", authenticate, async(req, res) => {
    try{
        let user=await Todo.findById(req.params.id).populate("userId").lean().exec();
        console.log(user.userId.email);
        userEmail=user.userId.email;
        req.body.userId = req.user._id;
        req.body.email=req.user.email;
        console.log(req.body.email);
        if(userEmail!==req.body.email){
            return res.send("You are not Authorized");
        }
        const todo = await Todo.findByIdAndDelete(req.params.id,req.body,{new:true})
        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
module.exports=router;