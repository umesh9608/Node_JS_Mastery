import express from 'express'
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path'


const app = express();

import { v2 as cloudinary } from 'cloudinary';
import { url } from 'inspector';
// Configuration
cloudinary.config({
    cloud_name: 'dd6prx7p4',
    api_key: '613664693598467',
    api_secret: '8Py4lYTXsuJfoegSaL3ixCR-m2c' // Click 'View API Keys' above to copy your API secret
});


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
    res.render('index.ejs', { url: null })
})


const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname)
        cb(null, file.fieldname + "-" + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const imageSchema = new mongoose.Schema({
    filename: String,
    public_id: String,
    imgUrl: String
});

const File = mongoose.model("cloudinary", imageSchema)

app.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file.path

    const cloudinaryRes = await cloudinary.uploader.upload(file, {
        folder: "NodeJs_Mastery_Course"
    });

    //save to database
    const db = await File.create({
        filename: file.originalname,
        public_id: cloudinaryRes.public_id,
        imgUrl: cloudinaryRes.secure_url,
    })

    res.render("index.ejs", { url: cloudinaryRes.secure_url });

    // res.json({message:'file upload successfully', cloudinaryRes})

});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`))