const express=require("express");
const mongoose=require("mongoose");
const nodemailer = require("nodemailer");
const app=express();
app.use(express.json());
const router=express.Router();
const connectDb=()=>{
    return mongoose.connect("mongodb+srv://Ashish7797:Ashish7797@cluster0.3get3.mongodb.net/email?authSource=admin&replicaSet=atlas-5sws42-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true");
};
const userSchema=new mongoose.Schema(
    {
        first_name:{type:String,required:true},
        last_name:{type:String,required:true},
        email:{type:String,required:true}
    }
);
const User=mongoose.model("user",userSchema);
app.post("/user",async(req,res)=>{
    try {
        const user=await User.create(req.body);
    transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: user.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello Nuddy?</b>", // html body
  });
        return res.send({user,megssage:"Message sent successfully"});
    } 
    catch (error) {
        console.log(error)
    }
});
let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "3d0621989855f5", // generated ethereal user
      pass: "3d8202f1ae4e30", // generated ethereal password
    },
  });
app.get("/user",async(req,res)=>{
    try {
        const page=req.query.page || 1;
        const pageSize=req.query.page || 20;
        const skip=(page-1)*pageSize;
        const user=await User.find().skip(skip).limit(pageSize).lean().exec();
        const totalPages=Math.ceil(await User.find().countDocuments()/pageSize);
        return res.send({user,totalPages});
    } catch (error) {
        console.log(error)
    }
});
app.listen(5000,async()=>{
    try {
        await connectDb();
    } catch (error) {
        console.log(error)
    }
    console.log("listening 5000");
})