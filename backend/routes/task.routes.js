import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTasks,
  getTask,
  updateTask,
  getUserTasks,
} from "../controllers/task.controller.js";
import { createSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post("/tasks", authRequired, validateSchema(createSchema), createTask);
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task/:id", authRequired, updateTask);
router.get("/tasks/:id", authRequired, getUserTasks);

export default router;
