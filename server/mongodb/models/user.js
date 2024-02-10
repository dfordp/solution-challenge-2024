import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    email: {type: String, required: true},
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
      },
      hasSocialLogin: {
          type: Boolean,
          default: false
      },
      plantIds: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Plant'
      }]
    }, { timestamps: true });

const User=mongoose.model("User",userSchema);

export default User;

// User Actions
export const getUsers = () => User.find();
export const getUserByEmail = (email) => User.findOne({ email });
export const getUserBySessionToken = (sessionToken) => User.findOne({ 'authentication.sessionToken': sessionToken });
export const getUserById = (id) => User.findById(id);
export const createUser = (values) => {
  console.log('Creating user with values:', values);
  return new User(values).save()
    .then((user) => user.toObject())
    .catch((error) => {
      console.error('Error creating user:', error);
      throw error;
    });
};
export const deleteUserById = (id) => User.findOneAndDelete({ _id: id });
export const updateUserById = (id, values) => User.findByIdAndUpdate(id, values);