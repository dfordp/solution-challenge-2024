import express from "express";

import {getAllUsers,getUser,deleteUser,updateUser} from '../controllers/user.controller.js';
import { isAuthenticated, isOwner } from '../middleware/index.js';


const router = express.Router();

router.route('/getUsers').get(getAllUsers);
router.route('/getUser/:id').get(getUser);
router.route('/deleteUser/:id').delete(deleteUser);
router.route('/updateUser/:id').patch(updateUser);

export default router;

