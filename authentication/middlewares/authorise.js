const authorise= (permittedRoles)=>{
    return (req,res,next)=>{
        console.log(permittedRoles)
        return next();
    }
}
module.exports=authorise;