import express from "express"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import cors from "cors"
import compression from "compression";
import morgan from "morgan";

const app=express();
app.use(compression());

app.use(helmet({crossOriginResourcePolicy:false}));

app.use(morgan("dev"));

app.use(
    cors({
        origin:true,
        credentials:true,
    })
);

app.use(express.json({limit:"16kb"}));  //this middleware parses incoming json helps in destructuring in req.body
app.use(express.urlencoded({extended:true,limit:"16kb"}));  //this middleware parses incoming url encoded data  extended=true allows nested objects
app.use(cookieParser());











import { errorHandler } from "./middlewares/error.middleware.js";
app.use(errorHandler);
export {app};