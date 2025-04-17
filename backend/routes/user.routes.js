import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
} from "../controllers/user.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = express.Router();

router.post("/register",validateSchema(registerSchema), registerUser);
router.post("/login", validateSchema(loginSchema),loginUser);
router.post("/logout", validateSchema(),logoutUser);
router.get("/profile",validateSchema(), authRequired, profileUser);

export default router;
