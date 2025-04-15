import express from "express";
import { registerUser,loginUser, logoutUser, profileUser } from "../controllers/user.controller.js";


const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/profile",profileUser)

export default router;