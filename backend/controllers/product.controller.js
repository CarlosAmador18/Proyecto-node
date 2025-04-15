import User from "../models/user.model.js"


export const registerUser = async (req, res) => {
    const {username, email, password} = req.body;
try {
    const newUser = new User({
        username,
        email,
        password,
    })

    await newUser.save();

    return res.status(200).json({success:true,data:newUser});
} catch (error) {
    console.log(error)
}}

