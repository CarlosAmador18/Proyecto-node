import express from "express";
import { 
    registerUser,
    loginUser, 
    logoutUser, 
    profileUser
 } from "../controllers/user.controller.js";
 import { authRequired } from "../middlewares/validateToken.js";



const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/profile",authRequired, profileUser)

export default router;