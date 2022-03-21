const express=require("express");
const router=express.Router();
const Product=require("../modules/productSchema");
const authenticate=require("../middlewares/authenicate");
const authorise=require("../middlewares/authorise");
router.post("", authenticate, async (req, res) => {

    req.body.user_id = req.userID;
    try{
        const product = await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
});
router.patch("/:id",authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,re.body,{new:true});
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})
router.get("", async (req, res) => {
    try{
        const product = await Product.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
});

module.exports=router;