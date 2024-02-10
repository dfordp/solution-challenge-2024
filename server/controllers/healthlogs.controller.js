import { getHealthLogs, getHealthLogById, createHealthLog, deleteHealthLogById } from '../mongodb/models/healthlog.js';
import Plant from '../mongodb/models/plant.js';

export const getAllHealthLogs = async (req, res) => {
    try {
        const healthLogs = await getHealthLogs();
        return res.status(200).json(healthLogs);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getHealthLog = async (req, res) => {
    try {
        const { id } = req.params;
        const healthLog = await getHealthLogById(id);

        if (!healthLog) {
            return res.status(404).json({ message: 'Health log not found' });
        }

        return res.json(healthLog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const createNewHealthLog = async (req, res) => {
    try {
        const {diagnosisByModel, imageAddedByUser, plantId} = req.body;

        if(!diagnosisByModel || !imageAddedByUser || !plantId){
            return res.sendStatus(400);
        }

        const newHealthLog = await createHealthLog({
            diagnosisByModel: diagnosisByModel,
            imageAddedByUser: imageAddedByUser,
            plantId: plantId
        });
        
        const plant = await Plant.findById(plantId);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        plant.healthLogIds.push(newHealthLog._id);
        try {
            await plant.save();
        } catch (e) {
            console.log(e);
        }

        return res.status(200).json(newHealthLog);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};


export const deleteHealthLog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHealthLog = await deleteHealthLogById(id);

        if (!deletedHealthLog) {
            return res.status(404).json({ message: 'Health log not found' });
        }

        await Plant.updateOne(
            { healthLogIds: id },
            { $pull: { healthLogIds: id } }
        );

        return res.json(deletedHealthLog);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};