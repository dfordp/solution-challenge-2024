import { getTasks, getTaskById, createTask, deleteTaskById } from '../mongodb/models/task.js';
import Plant from '../mongodb/models/plant.js';

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await getTasks();
        return res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await getTaskById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        return res.json(task);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const createNewTask = async (req, res) => {
    try {
        const {name, allocatedOn, userId, plantId} = req.body;

        if(!name || !allocatedOn || !userId || !plantId){
            return res.sendStatus(400);
        }

        const newTask = await createTask({
            name: name,
            allocatedOn: allocatedOn,
            userId: userId,
            plantId: plantId
        });
        
        const plant = await Plant.findById(plantId);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        plant.taskIds.push(newTask._id);
        try {
            await plant.save();
        } catch (e) {
            console.log(e);
        }

        return res.status(200).json(newTask);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await deleteTaskById(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await Plant.updateOne(
            { taskIds: id },
            { $pull: { taskIds: id } }
        );

        return res.json(deletedTask);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};