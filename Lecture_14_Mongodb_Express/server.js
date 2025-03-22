import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
    "mongodb+srv://umeshkumarhzb145:jeQdpI02MXu6pdiD@cluster0.uci4l.mongodb.net/",{
        dbName:"Nodejs Course"
    }
).then(()=>console.log("Connected to MongoDB....")).catch((err)=>console.log(err));

const port = 1000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`)); 