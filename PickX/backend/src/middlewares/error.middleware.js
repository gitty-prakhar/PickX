export const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    let message=err.message||"Internal Server Error";
    if(err.error&&err.error.description){
        message=err.error.description;
    }

    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
        errors:err.errors||[],
    });
}