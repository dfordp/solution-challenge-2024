import express from "express";
import { createNewTask, getAllTasks, getTask, deleteTask } from '../controllers/task.controller.js';

const router = express.Router();

router.route('/createTask').post(createNewTask);
router.route('/getTasks').get(getAllTasks);
router.route('/getTask/:id').get(getTask);
router.route('/deleteTask/:id').delete(deleteTask);

export default router;