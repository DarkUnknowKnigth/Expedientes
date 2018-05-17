module.exports=(req,res,next)=>{
    console.log("md: "+req);
    next();
};