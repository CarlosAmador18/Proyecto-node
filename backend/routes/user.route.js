import express from "express";
import User from './models/user.model.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ sucess: true, data: users })
    } catch (error) {
        console.log("error in fetching the users: ", error.message)
        res.status(400).json({ sucess: false, message: "Server error" })
    }
})

router.post("/", async (req, res) => {
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

});

// put es si quieres actualizar todas las fields, si solo quieres actualizar algunas, es patch
router.put("/:id", async (req, res) => {
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
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({ sucess: true, message: "User deleted" })
    } catch (error) {
        res.status(400).json({ sucess: false, message: "User not found" })
    }

});

export default router;