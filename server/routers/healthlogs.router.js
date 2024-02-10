import express from "express";
import { getAllHealthLogs, getHealthLog, createNewHealthLog, deleteHealthLog } from '../controllers/healthlogs.controller.js';

const router = express.Router();

router.route('/createHealthLog').post(createNewHealthLog);
router.route('/getHealthLogs').get(getAllHealthLogs);
router.route('/getHealthLog/:id').get(getHealthLog);
router.route('/deleteHealthLog/:id').delete(deleteHealthLog);

export default router;