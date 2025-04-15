import User from "../models/user.model.js"
import mongoose from 'mongoose';

export const registerUser = async (req, res) => {
    const {username, email, password} = req.body;

    const newUser = new User({
        username,
        email,
        password,
    })
    console.log(newUser);

}

