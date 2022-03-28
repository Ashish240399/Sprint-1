const connectDB=require("./config/db");
const app=require("./index");
app.listen(5000,async(req,res)=>{
    try {
        await connectDB();
    } catch (error) {
        return res.send(error);
    }
    console.log("Listening to 5000");
});