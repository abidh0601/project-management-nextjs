import { Router } from "express";
import {
  getTasks,
  getUserTasks,
  createTask,
  updateTaskStatus,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/users/:userId", getUserTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);

export default router;
