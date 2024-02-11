import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  allocatedOn: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  plantId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',
    required: true
  }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;


export const getTasks = () => Task.find();
export const getTaskById = (id) => Task.findById(id);
export const createTask = (values) => {
  console.log('Creating task with values:', values);
  return new Task(values).save()
    .then((task) => task.toObject())
    .catch((error) => {
      console.error('Error creating task:', error);
      throw error;
    });
};
export const deleteTaskById = (id) => Task.findOneAndDelete({ _id: id });
export const updateTaskById = (id, values) => Task.findByIdAndUpdate(id, values, { new: true });