import dotenv from "dotenv";
import mongoose from "mongoose"
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { DB_NAME } from "./constants.js";   

dotenv.config({path:'./.env'});

connectDB() //connect to database
.then(()=>{
    let port=process.env.PORT||8000;
    app.listen(port,()=>{
        console.log(`Server running at port ${port}\n`);
    })
})
.catch((err)=>{
    console.log(err);
});
