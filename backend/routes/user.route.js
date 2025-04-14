import express from "express";

import { getUsers,createUser, updateUser, deleteUser } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getUsers)
router.post("/", createUser)
// put es si quieres actualizar todas las fields, si solo quieres actualizar algunas, es patch
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;