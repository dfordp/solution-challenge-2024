import express from "express";

import { getAllPlants,getPlant,createNewPlant,deletePlant,updatePlant } from "../controllers/plant.controller.js";


const router = express.Router();

router.route('/createPlant').post(createNewPlant);
router.route('/getPlants').get(getAllPlants);
router.route('/getPlant/:id').get(getPlant);
router.route('/deletePlant/:id').delete(deletePlant);
router.route('/updatePlant/:id').patch(updatePlant);

export default router;
