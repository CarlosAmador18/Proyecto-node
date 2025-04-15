import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })

        let mensaje = "User created succesfully"

        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id })
        res.cookie('token', token)
        res.json({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            message: mensaje
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {

        const userFound = await User.findOne({ email })
        if (!userFound) return res.status(400).json({ message: 'User not found' })

        const comparePassword = await bcrypt.compare(password, userFound.password)

        if (!comparePassword) return res.status(400).json({ message: "Incorrect Password" })

        const token = await createAccessToken({ id: userFound._id })
        res.cookie("token", token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            message: "Login Succesfully"
        })

    } catch (error) {

    }
}

export const logoutUser = (req,res) => {
    res.cookie('token',"", {
        expires: new Date(0)
    })
    return res.status(200)
}
