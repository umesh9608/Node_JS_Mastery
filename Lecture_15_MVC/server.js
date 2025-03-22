import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose
.connect(
    "mongodb+srv://umeshkumarhzb145:jeQdpI02MXu6pdiD@cluster0.uci4l.mongodb.net/",
    {
        dbName: "Nodejs_Course",
    }
).then(() => console.log("MonogDB connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", userRegister);

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));