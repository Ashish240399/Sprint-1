const app=require("./index");
const connectDb=require("./configs/db");
app.listen(5000,async()=>{
    try{
        await connectDb();
    }
    catch(err){
        console.log("NO");
    }
    console.log("Listening 5000");
});
