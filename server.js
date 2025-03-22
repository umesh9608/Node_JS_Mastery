import express from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from './Controllers/Url.js'

const app = express();

app.use(express.urlencoded({ extended: true }))

mongoose
    .connect(
        "mongodb+srv://umeshkumarhzb145:jeQdpI02MXu6pdiD@cluster0.uci4l.mongodb.net/",
        {
            dbName: "Nodejs_Course",
        }
    )
    .then(() => console.log("MongoDb Connected..!"))
    .catch((err) => console.log(err));


//rendering ejs file
app.get('/', (req, res) => {
    res.render("index.ejs", { shortUrl: null })
})

//shorting url logic
app.post('/short', shortUrl)

//redirect to original url using short code:dynamic routing
// app.get('./:shortCode', getOriginalUrl)


//
app.get('/:shortCode', getOriginalUrl);

const port = 1000;
app.listen(port, () => console.log(`Server is running on ${port}`))