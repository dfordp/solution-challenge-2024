import { getPlants, getPlantById, createPlant, deletePlantById, updatePlantById } from '../mongodb/models/plant.js';
import User from '../mongodb/models/user.js';

export const getAllPlants = async (req, res) => {
    try {
        const plants = await getPlants();
        return res.status(200).json(plants);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getPlant = async (req, res) => {
    try {
        const { id } = req.params;
        const plant = await getPlantById(id);

        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        return res.json(plant);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const deletePlant = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPlant = await deletePlantById(id);
        await User.updateMany(
            { plantIds: id },
            { $pull: { plantIds: id } }
        );
        return res.json(deletedPlant);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const createNewPlant = async (req, res) => {
    try {
        const {name,type,dateOfPlanting,comment,userId,image} = req.body;

        if(!name || !type || !dateOfPlanting || !comment || !userId || !image){
            return res.sendStatus(400);
        }



        const newPlant = await createPlant({
            name: name,
            type: type,
            dateOfPlanting: dateOfPlanting,
            comment: comment,
            taskIds: [],
            healthLogIds: [],
            image: image,
            userId: userId
        });

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.plantIds.push(newPlant._id);
        try{
            await user.save();
        }catch(e){
            console.log(e);
        }

        return res.status(200).json(newPlant);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const updatePlant = async (req, res) => {
    try {
        const { id } = req.params;
        const values = req.body;
        const updatedPlant = await updatePlantById(id, values);
        return res.status(200).json(updatedPlant);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};