const express=require("express");
const app=express();
const registerController=require("./controller/register.controller")
const loginController=require("./controller/login.controller")
const todoController=require("./controller/todo.controller")
app.use(express.json());
app.use("/register",registerController);
app.use("/login",loginController);
app.use("/todo",todoController);
module.exports=app;
