import express from "express";

import {getAllUsers,getUser,deleteUser,updateUser} from '../controllers/user.controller.js';
import { isAuthenticated, isOwner } from '../middleware/index.js';


const router = express.Router();

router.route('/getUsers').get(isAuthenticated, getAllUsers);
router.route('/getUser/:id').get(isAuthenticated, isOwner, getUser);
router.route('/deleteUser/:id').delete(isAuthenticated, isOwner, deleteUser);
router.route('/updateUser/:id').patch(isAuthenticated, isOwner, updateUser);

export default router;

