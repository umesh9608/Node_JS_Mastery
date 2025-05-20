import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';

const app = express();
dotenv.config(); 

app.use(express.urlencoded({ extended: true }));

import { v2 as cloudinary } from 'cloudinary';

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


//rendering login.ejs file
app.get('/', (req, res) => {
    res.render('login.ejs', { url: null })
});


//rendering register file
app.get('/register', (req, res) => {
    res.render('register.ejs', { url: null })
});

const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname)
        cb(null, file.fieldname + "-" + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    filename: String,
    public_id: String,
    imgUrl: String
});

const User = mongoose.model("user", userSchema);

app.post('/register', upload.single('file'), async (req, res) => {
    const file = req.file.path;

    const { name, email, password } = req.body;

    const cloudinaryRes = await cloudinary.uploader.upload(file, {
        folder: "NodeJs_Mastery_Course"
    });

    //creating user
    const db = await User.create({
        name,
        email,
        password,
        filename: file.originalname,
        public_id: cloudinaryRes.public_id,
        imgUrl: cloudinaryRes.secure_url,
    })

    res.redirect('/')
    //  res.render("register.ejs", { url: cloudinaryRes.secure_url });

    // res.json({message:'file upload successfully', cloudinaryRes})
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log("printing the body=", req.body)
    let user = await User.findOne({ email });
    if (!user) res.render("login.ejs");
    else if (user.password != password) {
            res.render("login.ejs");
        }else{
            res.render('profile.ejs',{user})
        }
})

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
