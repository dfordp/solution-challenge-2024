import express from "express";


import { socialAuth } from '../controllers/socialauth.controller.js';

const router = express.Router();

router.route('/').post(socialAuth);


export default router;