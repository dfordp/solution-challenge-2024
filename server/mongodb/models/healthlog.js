const mongoose = require('mongoose');

const healthLogSchema = new mongoose.Schema({
  diagnosisByModel: {
    type: String,
    required: true
  },
  imageAddedByUser: {
    type: String,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/i.test(v);
      },
      message: props => `${props.value} is not a valid URL`
    },
    required: true
  },
  plantId: { // New field
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant',
    required: true
  }
}, { timestamps: true });

const HealthLog = mongoose.model('HealthLog', healthLogSchema);


export default HealthLog;


export const getHealthLogs = () => HealthLog.find();
export const getHealthLogById = (id) => HealthLog.findById(id);
export const createHealthLog = (values) => {
  console.log('Creating health log with values:', values);
  return new HealthLog(values).save()
    .then((healthLog) => healthLog.toObject())
    .catch((error) => {
      console.error('Error creating health log:', error);
      throw error;
    });
};