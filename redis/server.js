const app=require("./index");
const connectDB=require("./configs/db");
app.listen(5000,async(req,res)=>{
    try {
        await connectDB();
    } catch (error) {
        return ({message:error});
    }
    console.log("Listening 5000");
});