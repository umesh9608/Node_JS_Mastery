import { User } from '../Models/User.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, email, password } = req.body;//console.log("printing the data =",req.body);

    if (name == "" || email == "" || password == "")
        return res.json({ message: "All fields are required" });

    let user = await User.findOne({ email });
    if (user)
        return res.json({ message: "User already exist...!", success: false });

    const hasPassword = await bcrypt.hash(password, 10)

    user = await User.create({ name, email, password: hasPassword });

    res.json({ message: 'User created succeffully...!', success: true, user })
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (email == "" || password == "")
        return res.json({ message: "All fields are required" });

    const user = await User.findOne({ email });

    if (!user) return res.json({ message: "User not exits", sucess: false });

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass)
        return res.status(400).json({ message: "Invalid password", sucess: false });

    const token = jwt.sign({ userId: user._id },process.env.JWT, {
        expiresIn: "1d",
    });
    res.json({ message: `Wecome ${user.name}`, token,sucess: true })
};
