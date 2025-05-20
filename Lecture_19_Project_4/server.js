import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import { config } from 'dotenv';

const app = express();

app.use(bodyParser.json())

//.env setup
config({path:'.env'});
//user Routes
app.use("/api/user",userRouter);

// contact Router 
app.use('/api/contact',contactRouter)

//home route
app.get("/", (req, res) => {
    res.json({ message: 'this is home route' })
});


mongoose
    .connect(process.env.MONGO_URI,
        {
            dbName: "Nodejs_Course",
        }
    )
    .then(() => console.log("MongoDb Connected..!"))
    .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`))