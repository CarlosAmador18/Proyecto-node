import User from "../models/user.model.js"
import mongoose from 'mongoose';

export const getUsers =  async (req, res) => {
    try {
       const products = await User.find({}); 
       res.status(200).json({success:true, data:products})
    } catch (error) {
        console.log("error in fetching the products: ", error.message)
        res.status(500).json({success:false, message:"Server error"})
      }
} 

export const createUser = async (req,res) => {
    const user = req.body
    if (!user.name || !user.password || !user.email) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }

    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(200).json({ success: true, data: newUser });
    } catch (error) {
        console.error("User error", error.message)
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid Product Id" })
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json({ sucess: true, data: updatedUser })
    } catch (error) {
        res.status(500).json({ sucess: true, message: "Server error" })
    }
}

export const deleteUser =  async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({ sucess: true, message: "User deleted" })
    } catch (error) {
        res.status(400).json({ sucess: false, message: "User not found" })
    }

}

