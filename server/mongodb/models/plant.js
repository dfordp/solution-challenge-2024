import mongoose from "mongoose";


const plantSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    
    type: {
      type: String,
      required: true
    },
    dateOfPlanting: {
      type: Date,
      required: true
    },
    comment: {
      type: String,
      required: false
    },
    taskIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }],
      healthLogIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HealthLog'
      }],
      image: {
        type: String,
        validate: {
          validator: function(v) {
            return /^https?:\/\/.+/i.test(v);
          },
          message: props => `${props.value} is not a valid URL`
        },
        required: true
      },
      userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
  });

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;

export const getPlants = () => Plant.find();
export const getPlantById = (id) => Plant.findById(id);
export const createPlant = (values) => {
  console.log('Creating plant with values:', values);
  return new Plant(values).save()
    .then((plant) => plant.toObject())
    .catch((error) => {
      console.error('Error creating plant:', error);
      throw error;
    }, { timestamps: true });
};
export const deletePlantById = (id) => Plant.findOneAndDelete({ _id: id });
export const updatePlantById = (id, values) => Plant.findByIdAndUpdate(id, values, { new: true });