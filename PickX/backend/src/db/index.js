import { DB_NAME } from "../constants.js";
import mongoose from "mongoose"

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect((`${process.env.MONGODB_URL}/${DB_NAME}`));
    }
    catch(error){
        console.log(error);
    }
}
export default connectDB;