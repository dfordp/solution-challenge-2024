import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

import connectDB from "./mongodb/connect.js";


import authRoute from "./routers/auth.router.js"
import socialAuthRoute from "./routers/social.router.js"
import userRoute from "./routers/user.router.js"
import plantRoute from './routers/plant.router.js'
import healthLogRoute from "./routers/healthlogs.router.js"
import taskRoute from "./routers/task.router.js"

const app=express();
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send({message: "Hello World"});
});

app.use("/api/auth" , authRoute)
app.use("/api/socialauth", socialAuthRoute)
app.use("/api/user", userRoute);
app.use("/api/plant", plantRoute)
app.use("/api/healthlog",healthLogRoute)
app.use("/api/task",taskRoute)


const startServer=async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, ()=>console.log("Server started on http://localhost:8080"));
    } catch(error){
        console.log(error);
    }
}


startServer();