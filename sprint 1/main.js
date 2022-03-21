const express=require("express");
const app=express();
app.use(logger);
app.get("/books",(req,res)=>{
    console.log("books");
    return res.send({ route: "/books"});
})
app.get("/libraries",checkPermission("librarian"),(req,res)=>{
    console.log("libraries");
    return res.send({ route: "/libraries",permission:req.permission})
});
app.get("/authors",checkPermission("author"),(req,res)=>{
    console.log("authors");
    return res.send({ route: "/authors",permission:req.permission})
});
function logger(req,res,next){
    console.log("before logger");
    next();
    console.log("after logger");
}
function checkPermission(role){
    return function log(req,res,next){
        if(role=="librarian"){
            req.permission="true";
            next();
        }
        if(role=="author"){
            req.permission="true";
            next();
        }
    }
}
app.listen(5000,()=>{
    console.log("listening 5000")
})